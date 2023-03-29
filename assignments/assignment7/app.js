(function () {
    "use strict";
  
    angular.module("ShoppingListCheckOff", [])
      .controller("ToBuyController", ToBuyController)
      .controller("AlreadyBoughtController", AlreadyBoughtController)
      .service("ShoppingListCheckOffService", ShoppingListCheckOffService);
    
    // inject ShoppingListCheckOffService into both controllers
    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

    function ToBuyController(ShoppingListCheckOffService) {
        // Initialize buyItems
        this.buyItems = ShoppingListCheckOffService.getBuyItems();
        // get cost of item from ShoppingListCheckOffService function
        this.moveItemToBought = (item) => {
          ShoppingListCheckOffService.moveItemToBought(item);
        };
      }

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        //Initialize boughtItems
        this.boughtItems = ShoppingListCheckOffService.getBoughtItems();
        // get cost of item from ShoppingListCheckOffService function
        this.getCost = (item) => ShoppingListCheckOffService.getCost(item);
    }

    function ShoppingListCheckOffService() {
        const buyItems = [
            { name: "Cookies", quantity: 4, pricePerItem: 4},
            { name: "Ice Cream", quantity: 1, pricePerItem: 7},
            { name: "Pie", quantity: 3, pricePerItem: 2},
            { name: "Cake", quantity: 2, pricePerItem: 3},
            { name: "Donuts", quantity: 10, pricePerItem: 1}
        ];
        const boughtItems = [];

        this.getBuyItems = () => buyItems;
        this.getBoughtItems = () => boughtItems;
        this.getCost = (item) => item.pricePerItem * item.quantity;

        this.moveItemToBought = (item) => {
            const index = buyItems.indexOf(item);
            if (index > -1) {
                const buyItem = buyItems.splice(index, 1);
                boughtItems.push(buyItem[0]);
            }
        };

    }
})();