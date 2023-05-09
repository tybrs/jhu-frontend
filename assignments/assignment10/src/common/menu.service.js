(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItem = function (shortName) {
    var splitName = shortName.match(/[a-zA-Z]+|[0-9]+/g);
    return $http.get(ApiPath + '/menu_items/' + splitName[0] + '/menu_items/' + (splitName[1]-1) + '.json').then(function (response) {
      return response.data;
    });
  };

}



})();
