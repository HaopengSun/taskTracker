var Point1 = /** @class */ (function () {
    // x, y are all optional
    function Point1(x, y) {
        this.x = x;
        this.y = y;
    }
    // by default it is public
    Point1.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    return Point1;
}());
var point1 = new Point1(1, 2);
point1.draw();
// point1.x is not accessible and in the intellisense
var point2 = new Point1();
point2.draw();
var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    return Point2;
}());
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    Point3.prototype.getX = function () {
        return this.x;
    };
    return Point3;
}());
var point3 = new Point3(1, 2);
console.log(point3.getX());
