(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.inputList = "";
    
        $scope.checkList = function () {
            $scope.message = getMessage($scope.inputList);
        };

        function getMessage(string) {
            //Split string into list
            var listItems = string.split(',');
            // Filter out empty items (i.e. "", and " ")
            listItems = listItems.filter(item => item && item != " ")
            //get message
            if (listItems.length == 0) {
                $scope.messageStyle = { color: "red", border: "1px solid red" };
                return "Please enter data first!" 
            }
            // otherwise when listItems is more than zero message color is green 
            $scope.messageStyle = { color: "green", border: "1px solid green" };
            
            if (listItems.length <= 3) {
                return "Enjoy!"
            }
            else {
                return "Too much!"
            }
    
        };

    };
})();