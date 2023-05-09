(function() {
    "use strict";
    
    angular.module('common')
    .service('InfoService', InfoService);
    
    function InfoService() {
        var service = this;
        service.firstname = '';
        service.lastname = '';
        service.email = '';
        service.phone = '';
        service.favorite = {};
        service.registered = false;


        service.register = function(firstname, lastname, email, phone, favorite) {
            service.firstname = firstname;
            service.lastname = lastname;
            service.email = email;
            service.phone = phone;
            service.favorite = favorite;
            service.registered = true;
        };

        service.getRegistered = function() {
            return service.registered;
        }

        service.getFirstName = function() {
            return service.firstname;
        };

        service.getLastName = function() {
            return service.lastname;
        };

        service.getEmail = function() {
            return service.email;
        };

        service.getPhone = function() {
            return service.phone;
        };

        service.getFavorite = function() {
            return service.favorite;
        };
    
    }
    
})();
    