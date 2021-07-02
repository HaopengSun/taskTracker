"use strict";
exports.__esModule = true;
exports.Point5 = void 0;
var Point5 = /** @class */ (function () {
    function Point5(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point5.prototype.draw = function () {
        console.log(this._x, this._y);
    };
    return Point5;
}());
exports.Point5 = Point5;
