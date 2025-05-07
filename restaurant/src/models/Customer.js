"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(id, name) {
        this.id = id;
        this.name = name;
        this.orders = [];
    }
    Customer.prototype.addOrder = function (order) {
        this.orders.push(order);
        return this.orders;
    };
    return Customer;
}());
exports.Customer = Customer;
