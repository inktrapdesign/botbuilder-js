/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Deployment properties.
 *
 */
class DeploymentProperties {
  /**
   * Create a DeploymentProperties.
   * @member {object} [template] The template content. You use this element
   * when you want to pass the template syntax directly in the request rather
   * than link to an existing template. It can be a JObject or well-formed JSON
   * string. Use either the templateLink property or the template property, but
   * not both.
   * @member {object} [templateLink] The URI of the template. Use either the
   * templateLink property or the template property, but not both.
   * @member {string} [templateLink.uri] The URI of the template to deploy.
   * @member {string} [templateLink.contentVersion] If included, must match the
   * ContentVersion in the template.
   * @member {object} [parameters] Name and value pairs that define the
   * deployment parameters for the template. You use this element when you want
   * to provide the parameter values directly in the request rather than link
   * to an existing parameter file. Use either the parametersLink property or
   * the parameters property, but not both. It can be a JObject or a well
   * formed JSON string.
   * @member {object} [parametersLink] The URI of parameters file. You use this
   * element to link to an existing parameters file. Use either the
   * parametersLink property or the parameters property, but not both.
   * @member {string} [parametersLink.uri] The URI of the parameters file.
   * @member {string} [parametersLink.contentVersion] If included, must match
   * the ContentVersion in the template.
   * @member {string} mode The mode that is used to deploy resources. This
   * value can be either Incremental or Complete. In Incremental mode,
   * resources are deployed without deleting existing resources that are not
   * included in the template. In Complete mode, resources are deployed and
   * existing resources in the resource group that are not included in the
   * template are deleted. Be careful when using Complete mode as you may
   * unintentionally delete resources. Possible values include: 'Incremental',
   * 'Complete'
   * @member {object} [debugSetting] The debug setting of the deployment.
   * @member {string} [debugSetting.detailLevel] Specifies the type of
   * information to log for debugging. The permitted values are none,
   * requestContent, responseContent, or both requestContent and
   * responseContent separated by a comma. The default is none. When setting
   * this value, carefully consider the type of information you are passing in
   * during deployment. By logging information about the request or response,
   * you could potentially expose sensitive data that is retrieved through the
   * deployment operations.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeploymentProperties
   *
   * @returns {object} metadata of DeploymentProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeploymentProperties',
      type: {
        name: 'Composite',
        className: 'DeploymentProperties',
        modelProperties: {
          template: {
            required: false,
            serializedName: 'template',
            type: {
              name: 'Object'
            }
          },
          templateLink: {
            required: false,
            serializedName: 'templateLink',
            type: {
              name: 'Composite',
              className: 'TemplateLink'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Object'
            }
          },
          parametersLink: {
            required: false,
            serializedName: 'parametersLink',
            type: {
              name: 'Composite',
              className: 'ParametersLink'
            }
          },
          mode: {
            required: true,
            serializedName: 'mode',
            type: {
              name: 'Enum',
              allowedValues: [ 'Incremental', 'Complete' ]
            }
          },
          debugSetting: {
            required: false,
            serializedName: 'debugSetting',
            type: {
              name: 'Composite',
              className: 'DebugSetting'
            }
          }
        }
      }
    };
  }
}

module.exports = DeploymentProperties;
