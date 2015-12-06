function HelloAngular($scope) {
    $scope.gretting = {
        text: 'hello'
    };
}

var app = angular.module('app', []);
app.controller('FirstContrller', function ($scope) {
    $scope.message = "hello";
});