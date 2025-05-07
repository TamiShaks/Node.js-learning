"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var OrderStaus;
(function (OrderStaus) {
    OrderStaus[OrderStaus["OPEN"] = 0] = "OPEN";
    OrderStaus[OrderStaus["CLOSE"] = 1] = "CLOSE";
})(OrderStaus || (OrderStaus = {}));
var Order = /** @class */ (function () {
    function Order(table) {
        this.items = [];
        this.table = table;
        this.table.OccupyTable();
        this.orderStatus = OrderStaus.OPEN;
    }
    Order.prototype.addItem = function (name, price) {
        this.items.push({ name: name, price: price });
    };
    Order.prototype.calculateTotal = function () {
        return this.items.reduce(function (total, item) { return total + item.price; }, 0);
    };
    Order.prototype.closeOrder = function () {
        this.orderStatus = OrderStaus.CLOSE;
        this.table.FreeTable();
        return this.calculateTotal();
    };
    return Order;
}());
exports.Order = Order;
