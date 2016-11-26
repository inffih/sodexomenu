angular
  .module('sodexomenu.controllers', [])
  .filter('priceFilter', function(){
    return function(prices) {
      var replaced = prices.replace(/[ ]\//g, "€");
      return replaced;
    }
  })
  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
  })

  .controller('TodayCtrl', function($scope, Menus) {
    Menus.getMenus().success(function(response){
        $scope.menuData = response.courses;
        $scope.restaurantName = response.meta.ref_title;
        $scope.restaurantUrl = response.meta.ref_url;
    });
  })

  .controller('SettingsCtrl', function($scope) {
  })
