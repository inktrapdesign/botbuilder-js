/**
 * @module botframework-config
 */
/**
 * Copyright(c) Microsoft Corporation.All rights reserved.
 * Licensed under the MIT License.
 */
import { IEndpointService, ServiceTypes } from '../schema';
import { ConnectedService } from './connectedService';

/**
 * Defines an endpoint service connection.
 */
export class EndpointService extends ConnectedService implements IEndpointService {
    /**
     * MSA App ID.
     */
    public appId: string;

    /**
     * MSA app password for the bot.
     */
    public appPassword: string;

    /**
     * Endpoint of localhost service.
     */
    public endpoint: string;

    /**
     * Creates a new EndpointService instance.
     * @param source JSON based service definition.
     */
    constructor(source: IEndpointService) {
        super(source, ServiceTypes.Endpoint);
    }

    public encrypt(secret: string, encryptString: (value: string, secret: string) => string): void {
        if (this.appPassword && this.appPassword.length > 0) {
            this.appPassword = encryptString(this.appPassword, secret);
        }
    }

    public decrypt(secret: string, decryptString: (value: string, secret: string) => string): void {
        if (this.appPassword && this.appPassword.length > 0) {
            this.appPassword = decryptString(this.appPassword, secret);
        }
    }

}
