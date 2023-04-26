(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // home
  $stateProvider.state('homeState', {
  url: '/',
  templateUrl: 'templates/home.template.html'
  })

  // categories
  .state('categoryState', {
  url: '/categories',
  templateUrl: 'templates/categories.template.html',
  controller: 'CategoriesController as categoryCtrl',
  resolve: {
    items: [
    'MenuDataService',
    function (MenuDataService) {
        return MenuDataService.getAllCategories();
    }]
  }
  })
  // items
  .state('itemState', {
  url: '/items/{categoryShortName}',
  templateUrl: 'templates/items.template.html',
  controller: 'ItemsController as itemCtrl',
  resolve: {
    items: [
    '$stateParams',
    'MenuDataService',
    function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
    }]
  }
  });
}
    
    })();