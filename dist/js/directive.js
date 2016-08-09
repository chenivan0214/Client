var isDisabled = false;

angular.module('DirectiveApp', [])
.run(function($rootScope, $timeout) {
})
.controller('MyController', function($scope, $timeout) {
    $scope.url = "http://google.com";

    $scope.fnChangeStatus = function() {
        console.log(isDisabled);
        isDisabled = isDisabled === true ? false : true;
        //$scope.isContextDisabled = isDisabled;
        $scope.isContextReadonly = isDisabled;
        $scope.isChecked = isDisabled;
        $scope.isSelected = isDisabled;
    };

    $scope.img = "https://www.google.com/images/srpr/logo11w.png";

    $scope.people = [
        { name : "A" },
        { name : "B" }
    ];

    $scope.fnSubmitMyForm = function() {
        console.log($scope.myField.name);
        console.log("fnSubmitMyForm");
    };

    $scope.cities = [
        {name: "A1"},
        {name: "A2"},
        {name: "A3"},
    ];

    $scope.myid = "myid";

    $scope.fnWatchSelf = function() {
        console.log($scope.myid);
    };
})
.directive('directive', function() {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            url: '=assignUrl',
            linkText: '@'
        },
        template: '<a href="{{url}}">{{linkText}}</a>'
    };
});