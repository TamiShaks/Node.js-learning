"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RestuarantManager_1 = require("./services/RestuarantManager");
var ganSipur = new RestuarantManager_1.Restaurant();
var table1 = ganSipur.addTable(4);
ganSipur.addTable(8);
ganSipur.addTable(4);
ganSipur.addTable(6);
ganSipur.addTable(2);
ganSipur.addCustomer(1111, "Yossi");
ganSipur.addCustomer(2222, "David");
ganSipur.addCustomer(3333, "Sara");
ganSipur.addCustomer(4444, "Moshe");
var order1 = ganSipur.addOrder(1111, 4);
var order2 = ganSipur.addOrder(2222, 8);
var order3 = ganSipur.addOrder(3333, 6);
var order4 = ganSipur.addOrder(4444, 8);
order1 === null || order1 === void 0 ? void 0 : order1.addItem("Pizza", 50);
order1 === null || order1 === void 0 ? void 0 : order1.addItem("Salad", 30);
order1 === null || order1 === void 0 ? void 0 : order1.addItem("pukacha", 50);
order2 === null || order2 === void 0 ? void 0 : order2.addItem("pukacha", 50);
order2 === null || order2 === void 0 ? void 0 : order2.addItem("Salad", 30);
order3 === null || order3 === void 0 ? void 0 : order3.addItem("mukrmim", 50);
order3 === null || order3 === void 0 ? void 0 : order3.addItem("Salad", 30);
order4 === null || order4 === void 0 ? void 0 : order4.addItem("mukrmim", 50);
order4 === null || order4 === void 0 ? void 0 : order4.addItem("lazaniya", 50);
order4 === null || order4 === void 0 ? void 0 : order4.addItem("Salad", 30);
var price1 = order1 === null || order1 === void 0 ? void 0 : order1.closeOrder();
var price2 = order2 === null || order2 === void 0 ? void 0 : order2.closeOrder();
var price3 = order3 === null || order3 === void 0 ? void 0 : order3.closeOrder();
var price4 = order4 === null || order4 === void 0 ? void 0 : order4.closeOrder();
console.log("price1: ", price1);
console.log("price2: ", price2);
console.log("price3: ", price3);
console.log("price4: ", price4);
//HW
//1. Add export and import to the file that need
//2. Use the restoraunt in App file (this one)
//  1. Add tables (at list 3)
//  2. Add customerws (at least 2)
//  3/ create orders (at least 3) - one of them - will not have place
//  4. add items to the orders (at least 2)
//  5. close the orders
//3. Check that the results are as expected
