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
                $scope.messageStyle = { color: "red", padding: "5px", border: "2px dashed red" };
                return "Please enter data first!" 
            }
            // otherwise when listItems is more than zero message color is green 
            $scope.messageStyle = { color: "green", padding: "5px", border: "2px dashed green" };
            
            if (listItems.length <= 3) {
                return "Enjoy!"
            }
            else {
                return "Too much!"
            }
    
        };

    };
})();