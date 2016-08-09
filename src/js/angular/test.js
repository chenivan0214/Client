"use strict";

angular.module('TestApp', [])
.run(['$rootScope', '$timeout', function($rootScope, $timeout) {
    /* global */
}])
.controller('FormController', ['$scope', function($scope) {
    /* local */
    //scope define
    $scope.accountText = "Account:";
    $scope.accountValue = "";

    $scope.passwordText = "Password:";
    $scope.passwordValue = "";

    $scope.favoriteText = "Favorite:";
    $scope.aryFavoriteObj = [
        {text: "phone", value: "phone"},
        {text: "compute", value: "compute"}
    ];

    $scope.sexText = "Sex:";
    $scope.arySexObj = [
        {text: "M", value: "1"},
        {text: "F", value: "2"}
    ];

    console.log($scope);
}]);