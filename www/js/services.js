angular
  .module('sodexomenu.services', [])
  .factory('Menus', function($http) {
    var obj = {};
    var date = new Date();
    console.log(date.getDate());
    console.log(date.getFullYear());
    console.log(date.getMonth() + 1);
    obj.getMenus = function(){
      return $http.get('/test/menu-weekly.json');
    }
    return obj;
  });
