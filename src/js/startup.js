var str = "str";
var fnCommon = function(str) {
        console.log(str);
    };

angular.module('StartupApp', [])
.controller('MyController', function($scope) {
    $scope.number = "0";
    $scope.change = function() {
        $scope.number = Math.round(Math.random() * 10000000);
    }

    $scope.$watch('number', function(newVal, oldVal, scope) {
        fnCommon("new:" + newVal);
        fnCommon("old:" + oldVal);
        fnCommon("scope:" + scope);
    });
});