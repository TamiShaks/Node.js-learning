"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(tableId, seats) {
        this.tableId = tableId;
        this.seats = seats;
        this.tableId = tableId;
        this.seats = seats;
        this.isOccupied = false;
    }
    Table.prototype.OccupyTable = function () {
        if (this.isOccupied)
            return false;
        this.isOccupied = true;
        return true;
    };
    Table.prototype.FreeTable = function () {
        if (!this.isOccupied)
            return false;
        this.isOccupied = false;
        return true;
    };
    return Table;
}());
exports.Table = Table;
