(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['$stateParams', 'items'];
  function ItemsController(stateParams, items) {
    this.items = items;
    console.log(stateParams)
    this.category = stateParams.categoryShortName;
    this.categorySort = stateParams.categorySort;
  }

  })();
    