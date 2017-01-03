(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.listOfDishes = "";
  $scope.checkList = function() {
    var numberOfItems = countItems($scope.listOfDishes);
    if (numberOfItems == 0) {
      $scope.message = "Please enter data first";
      $scope.color = "red";
    } else if (numberOfItems <= 3) {
      $scope.message = "Enjoy!";
      $scope.color = "green";
    } else {
      $scope.message = "Too much";
      $scope.color = "green";
    }

  };

  var countItems = function(str) {
    var items = str.split(',');
    var numberOfItems = items.length;
    for (var i = 0; i < items.length; i ++) {
      if (isEmpty(items[i])) {
        numberOfItems--;
      }
    }
    return numberOfItems;
  }

  var isEmpty = function(str) {
    return (!str || 0 === str.length || !str.trim());
  }
}

})();
