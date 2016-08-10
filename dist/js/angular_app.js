"use strict";

var isDisabled = false;

angular.module('DirectiveApp', [])
.run(['$rootScope', '$timeout', function($rootScope, $timeout) {
}])
.controller('MyController', ['$scope', '$timeout', function($scope, $timeout) {
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
}])
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
})
.directive('testDirective', function() {
    return {
        restrict: 'A',
        scope: {
            url: '=url'
        },
        template: '<div>{{url}}</div>'
    };
});
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