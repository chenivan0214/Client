"use strict";

var UtilityApp = angular.module('UtilityApp', []);

//Service
UtilityApp
.factory('ajaxService', function($http) {
    var objDefaultDefind = {
            method: "GET",
            header: {
                pragma: "no-cache",
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                accept: "application/json"
            },
            data: {},
            fnSuccess: function() {},
            fnError: function() {}
        },
        ajaxService = function(options) {
            $http({
                method: !angular.isUndefined(options.method) ? options.method : objDefaultDefind.method,
                url: options.url,
                headers: {
                    "Pragma": objDefaultDefind.header.pragma,
                    "Content-Type": !angular.isUndefined(options.contentType) ? options.contentType : objDefaultDefind.header.contentType,
                    "Accept": !angular.isUndefined(options.accept) ? options.accept : objDefaultDefind.header.accept,
                },
                date: !angular.isUndefined(options.data) ? options.data : objDefaultDefind.data
            })
            .success(angular.isFunction(options.fnSuccess) ? options.fnSuccess : objDefaultDefind.fnSuccess)
            .error(angular.isFunction(options.fnError) ? options.fnError : objDefaultDefind.fnError);
        };

    return ajaxService;
});