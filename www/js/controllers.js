angular.module('sodexomenu.controllers', [])

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

.controller('TodayCtrl', function($scope) {

})

.controller('SettingsCtrl', function($scope) {

})

.controller('WeekdayCtrl', function($scope, $stateParams) {
});
