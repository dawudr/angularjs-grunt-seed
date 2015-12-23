describe('Double Controller', function() {

  beforeEach(module('app.doubleController'));


  describe('doubleController', function() {
    var $scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('DoubleCtrl', {$scope: $scope});
    }));

    it('should initialise default with 0', function() {
      expect($scope.double(0)).toBe(0);
    });

    it('should double 8 to 16', function() {
      expect($scope.double(8)).toBe(16);
    });
  });
});