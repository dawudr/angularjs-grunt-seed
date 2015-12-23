angular.module('myApp', ['ngRoute', 'app.homePages','app.doubleController'])

  .constant('TPL_PATH', '/templates')

  .config(function($routeProvider, TPL_PATH) {
    $routeProvider.when('/',{
      controller : 'HomeCtrl',
      templateUrl : TPL_PATH + '/home.html'
    }).
    when('/double', {
        controller : 'DoubleCtrl',
        templateUrl : TPL_PATH + '/double.html'
    });
  });
