"use strict";

angular.module('IndexApp', [])
.run(['$rootScope', '$timeout', function($rootScope, $timeout) {
}])
.controller('MainController', [
    '$scope', 'initData',
    function($scope, initData)
{
    //define
    $scope.accountText = initData.account.text;
    $scope.accountValue = initData.account.value;

    $scope.passwordText = initData.password.text;
    $scope.passwordValue = initData.password.value;

    $scope.favoriteText = initData.favorite.text;
    $scope.aryFavoriteObj = initData.favorite.data;

    $scope.sexText = initData.sex.text;
    $scope.arySexObj = initData.sex.data;

    $scope.operateStatus = initData.showStatus.operate;

    $scope.fnShowOperate = function() {
         $scope.operateStatus = ! $scope.operateStatus;
    }
}])
.controller('OperateController', ['$scope', function($scope) {
}]);

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
                {text: "phone", value: "phone"},
                {text: "compute", value: "compute"}
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