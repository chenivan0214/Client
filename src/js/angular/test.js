"use strict";

angular.module('TestApp', [])
.run(['$rootScope', '$timeout', function($rootScope, $timeout) {
}])
.controller('FormController', [
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

    console.log($scope);
}]);

angular.module('TestApp')
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
        }
    };

    return objInitData;
});