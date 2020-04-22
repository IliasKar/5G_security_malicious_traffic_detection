'use strict';
/**
 * Services module
 *
 * This module defines:
 * - the host IP addresses of the REST APIs
 * - the endpoints of the REST web services
 */
angular.module('services', ['ngResource'])
    // Configuration of service module
    .config(function($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    })
    // constant variables
    .constant('context', {
        'protocol': 'http',
        'host': '127.0.0.1',
        'port': 5000,
        'base_api_context': '/api'
    })
    /**
     * Example
     .factory('CheckUsername', ['$resource', 'context', function ($resource, context) {
     return $resource(
     context.protocol + "://" + context.host + ":" + context.port + context.base_apicontext.protocol + '://' + context.host + ':' + context.port + context.base_api_context + 'rest-auth/username/:username', {username: '@username'}, {'method': 'GET'}
     );
     }])

    .factory('getTopology', ['$resource', 'context', function($resource, context) {
        return $resource(context.protocol + '://' + context.host + ':' + context.port + context.base_api_context + '/topology/v1/', {}, {
            'get': {
                'method': 'GET'
            }
        });
    }])
    */
    .factory('graphElements', ['$resource', 'context', function($resource, context) {
        return $resource(context.protocol + '://' + context.host + ':' + context.port + context.base_api_context + '/anomaly_detection/v1/', {}, {
            'get': {
                'method': 'GET'
            },
            'post': {
                'method': 'POST'
            }
        });
    }])
    ;
