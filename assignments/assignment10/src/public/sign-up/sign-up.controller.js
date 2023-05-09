(function () {
    'use strict';
    
    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'InfoService'];
    function SignUpController(MenuService, InfoService) {
        var user = this;
        user.firstname = '';
        user.lastname = '';
        user.email = '';
        user.phone = '';
        user.favorite = '';
        user.registered = false;
      
        user.submit = function() {
            MenuService.getMenuItem(user.favorite).then(function(data) { 
                if (data) {
                    InfoService.register(
                        user.firstname,
                        user.lastname,
                        user.email,
                        user.phone,
                        data
                    );
                    user.registered = true;
                }
            });
        };
    
    }
    
    
})();
    