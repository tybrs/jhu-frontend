(function () {
    "use strict";
  
    angular.module('NarrowItDownApp', [])
           .controller('NarrowItDownController', NarrowItDownController)
           .controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
           .service('MenuSearchService', MenuSearchService)
           .constant('RESTEndPoint', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
           .directive('foundItems', FoundItemsDirective);
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var service = this;
        this.query = '';
        this.found = [];

        this.findMatch = function() {
            if (this.query) {
                MenuSearchService.getMatchedMenuItems(this.query)
                .then(function (response) {
                    service.found = response;
                })
                .catch(function (error) {
                    console.log(error);
                });
           }
        };

        this.removeItem = function(itemIndex) {
            if (this.found.length > 0){
                this.found.splice(itemIndex, 1);
            }
          };
    }




    MenuSearchService.$inject = ['$http', 'RESTEndPoint'];
    function MenuSearchService($http, RESTEndPoint) {
        // Add getMatchedMenuItems to service
        this.getMatchedMenuItems = function (query) {
            return $http({
                method: "GET",
                url: (RESTEndPoint)
                // Remember that the then function itself returns a promise.
                }).then(function (result) {
                    // process result and only keep items that match
                    var flattenResult  = [];
                    for (var category in result.data) {
                        for (var item in result.data[category].menu_items) {
                            flattenResult.push(result.data[category].menu_items[item]);
                        }
                    }
                    var foundItems = flattenResult.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
                
                    // return processed items
                    return foundItems;
                });
        };
    }

    function FoundItemsDirective() {
        return {
          templateUrl: 'foundItemsTemplate.html',
          scope: {
            found: '<',
            onRemove: '&'
          },
          controller: FoundItemsDirectiveController,
          controllerAs: 'controller',
          bindToController: true
        };
    }

    function FoundItemsDirectiveController() {
        this.query = ''
    }


})();