(function () {
'use strict';

  angular.module('MenuData')
  .service('MenuDataService', MenuDataService)
  .constant('CategoriesJSON', "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
  .constant('ItemsJSON', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{{categoryShortName}}.json");


  MenuDataService.$inject = ['$http', '$interpolate', 'CategoriesJSON', 'ItemsJSON'];
  function MenuDataService($http, $interpolate, CategoriesJSON, ItemsJSON) {
    var service = this;

    service.getAllCategories = function () {
      return $http({
      method: "GET",
      url: (CategoriesJSON)
      }).then(function (result) {
          return result.data;
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      var exp = $interpolate(ItemsJSON);
      var url = exp({ categoryShortName: categoryShortName});   
      return $http({
      method: "GET",
      url: url
      }).then(function (result) {
          return result.data.menu_items;
      });
    };
  }

})();