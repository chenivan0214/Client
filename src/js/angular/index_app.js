"use strict";

angular.module('IndexApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/success', {
        templateUrl: 'view/success.html',
        controller: 'SuccessController'
    });
}])
.run(['$rootScope', '$timeout', function($rootScope, $timeout) {
}]);

//Main Controller Zone
angular.module('IndexApp')
.controller('MainController', ['$scope', function($scope) {
}])
.controller('IndexFormController', ['$scope', 'initData', function($scope, initData) {
    /* define */
    $scope.accountText = initData.account.text;
    $scope.accountValue = initData.account.value;

    $scope.passwordText = initData.password.text;
    $scope.passwordValue = initData.password.value;

    $scope.favoriteText = initData.favorite.text;
    $scope.aryFavoriteObj = initData.favorite.data;
    $scope.aryCheckedFavorite = [];

    $scope.sexText = initData.sex.text;
    $scope.arySexObj = initData.sex.data;

    $scope.operateStatus = initData.showStatus.operate;

    //watchg
    $scope.$watch('operateStatus', function(newVar, oldVar) {
         console.log(newVar + "/" + oldVar);
    });

    /* event */
    //click
    $scope.fnShowOperate = function($event) {
        console.log($event);
        $scope.operateStatus = ! $scope.operateStatus;
    };

    $scope.fnChangeAccount = function() {
        console.log($scope.accountValue);
    };

    $scope.fnChangePassword = function() {
        console.log($scope.passwordValue);
    };

    $scope.fnChangeSex = function() {
        console.log($scope.sex.value + "/" + $scope.sex.text);
    };

    $scope.fnClickFavorite = function($event, $index, value) {
        var target = $event.target;

        if (target.checked) {
            console.log($index + "/" + value);
        }
    };

    $scope.fnSubmit = function($event) {
        console.log($event);
        console.log($scope.indexForm.$error);
    };
}])
.controller('OperateController', ['$scope', function($scope) {
}]);

//Routing Controller Zone
angular.module('IndexApp')
.controller('SuccessController', ['$scope', function($scope) {
}]);

//Init Data
angular.module('IndexApp')
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
                {text: "Phone", value: "phone"},
                {text: "Compute", value: "compute"},
                {text: "TV", value: "tv"},
                {text: "Car", value: "car"},
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