"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
var Customer_1 = require("../models/Customer");
var Table_1 = require("../models/Table");
var Order_1 = require("../models/Order");
var Restaurant = /** @class */ (function () {
    function Restaurant() {
        this.TablesIndex = 100;
        this.Tables = [];
        this.Customers = [];
    }
    Restaurant.prototype.addTable = function (seats) {
        this.Tables.push(new Table_1.Table(this.TablesIndex++, seats));
        this.Tables.sort(function (tab) { return tab.seats; });
        return true;
    };
    Restaurant.prototype.addCustomer = function (Id, Name) {
        if (this.Customers.find(function (cust) { return cust.id == Id; }) != undefined)
            return false;
        this.Customers.push(new Customer_1.Customer(Id, Name));
        return true;
    };
    Restaurant.prototype.findCustomer = function (Id) {
        return this.Customers.find(function (cust) { return cust.id == Id; });
    };
    Restaurant.prototype.addOrder = function (customerId, NumOfPeoples) {
        var table = this.Tables.find(function (tab) { return !tab.isOccupied && tab.seats >= NumOfPeoples; });
        if (table == undefined) {
            console.log("there is no avalable table for this order");
            return undefined;
        }
        var customer = this.findCustomer(customerId);
        if (customer == undefined) {
            console.log("Can't find the customer, pleas registry.");
            return undefined;
        }
        var order = new Order_1.Order(table);
        customer.addOrder(order);
        return order;
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
