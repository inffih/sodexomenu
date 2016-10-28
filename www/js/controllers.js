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

  .controller('WeekCtrl', function($scope) {
    $scope.week = [
      { title: 'Maanantai', id: 1 },
      { title: 'Tiistai', id: 2 },
      { title: 'Keskiviikko', id: 3 },
      { title: 'Torstai', id: 4 },
      { title: 'Perjantai', id: 5 }
    ];
  })

  .controller('TodayCtrl', function($scope, Menus) {

    // console.log(date.getDate());
    // console.log(date.getFullYear());
    // console.log(date.getMonth() + 1);

    var day;
    switch (new Date().getDay()) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
}

    $scope.currentDay = day;
    Menus.getMenus().success(function(response){
        $scope.menuData = response.menus;
        console.log($scope.menuData);
    });

  })

  .controller('SettingsCtrl', function($scope) {
  })
