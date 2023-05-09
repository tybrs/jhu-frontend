(function() {
    'use strict';

    angular.module('public')
    .directive('favorite', FavoriteDirective);

    FavoriteDirective.$inject = ['MenuService', '$q'];

    function FavoriteDirective(MenuService, $q) {
        return {
            require: 'ngModel',
            link: function(scope, elm, att, ngModel) {
              ngModel.$asyncValidators.unknown = function(modelValue, viewValue) {
                return MenuService.getMenuItem(viewValue).then(function(data) { 
                    if (viewValue.length && data) {
                      return true;
                    }
                    else {
                        return $q.reject();
                    }
                });
              };
            }
          };
    }

})();