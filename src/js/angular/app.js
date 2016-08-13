"use strict";

var App = angular.module('App', ['ngRoute', 'UtilityApp']);

App
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/success/:account', {
        templateUrl: 'view/success.html',
        controller: 'SuccessController',
        controllerAs: 'successApp'
    });
}])
.run(['$rootScope', '$timeout', function($rootScope, $timeout) {
}]);

//Main Controller Zone
App
.controller('MainController', ['$scope', function($scope) {
}])
.controller('IndexFormController', [
    '$scope', '$location', 'initData','ajaxService',
    function($scope, $location, initData, ajaxService) {
    /* define */
    $scope.accountText = initData.account.text;
    $scope.accountValue = initData.account.value;

    $scope.passwordText = initData.password.text;
    $scope.passwordValue = initData.password.value;

    $scope.sexText = initData.sex.text;
    $scope.arySexObj = initData.sex.data;

    $scope.favoriteText = initData.favorite.text;
    $scope.aryFavoriteObj = initData.favorite.data;
    $scope.checkedCount = 0;

    $scope.errorCode = "";

    $scope.operateStatus = initData.showStatus.operate;

    //exterial service from another module
    $scope.ajaxService = ajaxService;

    //watchg
    $scope.$watch('operateStatus', function(newVar, oldVar) {
         //console.log(newVar + "/" + oldVar);
    });

    /* event */
    //click
    $scope.fnShowOperate = function($event) {
        var isVerifyed = true;

        $scope.errorCode = "";

        if (angular.equals("", $scope.accountValue) || angular.isUndefined($scope.accountValue)) {
            isVerifyed = false;
            $scope.errorCode = "11";
        } else if (angular.equals("", $scope.passwordValue) || angular.isUndefined($scope.passwordValue)) {
            isVerifyed = false;
            $scope.errorCode = "21";
        } else if (angular.isUndefined($scope.sex)) {
            isVerifyed = false;
            $scope.errorCode = "31";
        } else if ($scope.checkedCount === 0) {
            isVerifyed = false;
            $scope.errorCode = "41";
        }

        if (isVerifyed === true) {
            $scope.operateStatus = !$scope.operateStatus;
        }
    };

    $scope.fnChangeAccount = function() {
        //do something
    };

    $scope.fnChangePassword = function() {
        //do something
    };

    $scope.fnChangeSex = function() {
        //console.log($scope.sex.value + "/" + $scope.sex.text);
    };

    $scope.fnClickFavorite = function($event, $index, value) {
        var target = $event.target;
        //console.log($index + "/" + value);

        if (target.checked) {
            $scope.checkedCount++;
            $scope.aryFavoriteObj[$index].isChecked = true;
        } else {
            $scope.checkedCount--;
            $scope.aryFavoriteObj[$index].isChecked = false;
        }
    };

    $scope.fnSubmit = function($event) {
        if ($event.type === "click") {
            var options = {
                    method: "GET",
                    url: "/verify.json",
                    fnSuccess: function(data, header, config, status) {
                        $location.path("/success/" + data.account);
                    },
                    fnError: function(data, header, config, status) {
                        //do something
                    }
                };

            ajaxService(options);
        }
    };
}])
.controller('OperateController', ['$scope', function($scope) {
}]);

//Routing Controller Zone
App
.controller('SuccessController', [
    '$scope', '$routeParams',
    function($scope, $routeParams) {
    //console.log($scope.$parent.ajaxService);
    this.account = $routeParams.account;
}]);

//Init Data
App
.factory('initData', function() {
    var objInitData = {
        account: {
            text: "Account:",
            value: ""
        },
        password: {
            text: "Password:",
            value: ""
        },
        favorite: {
            text: "Favorite:",
            data: [
                {text: "Phone", value: "phone", isChecked: false},
                {text: "Computer", value: "computer", isChecked: false},
                {text: "TV", value: "tv", isChecked: false},
                {text: "Car", value: "car", isChecked: false},
            ]
        },
        sex: {
            text: "Sex:",
            data: [
                {text: "M", value: "1"},
                {text: "F", value: "2"}
            ]
        },
        showStatus: {
            operate: false
        }
    };

    return objInitData;
});