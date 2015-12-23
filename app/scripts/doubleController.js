angular.module('app.doubleController', [])

.controller('DoubleCtrl', ['$scope', function ($scope) {
    $scope.double = function (value) {
        return value * 2;
    };
}]);