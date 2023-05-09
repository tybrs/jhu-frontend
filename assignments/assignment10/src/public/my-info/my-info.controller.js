(function () {
    'use strict';
    
    angular.module('public')
    .controller('InfoController', InfoController);

    InfoController.$inject = ['InfoService'];

    function InfoController(InfoService) {

      this.getFirstName = function() {
        return InfoService.getFirstName();
      }

      this.getLastName = function() {
        return InfoService.getLastName();
      }

      this.getEmail = function() {
        return InfoService.getEmail();
      }

      this.getPhone = function() {
        return InfoService.getPhone();
      }

      this.getFavorite = function() {
        var favorite = InfoService.getFavorite();
        return favorite.name;
      }

      this.getDescription = function() {
        var favorite = InfoService.getFavorite();
        return favorite.description;
      }

      this.getRegistered = function() {
        return InfoService.getRegistered();
      }

      this.getFavoriteImg = function() {
        var shortName = InfoService.getFavorite().short_name;
        var splitName = shortName.match(/[a-zA-Z]+|[0-9]+/g);
        return 'images/menu/' + splitName[0] + '/' + shortName + '.jpg';
      } 
    }
    
})();
    