var Specificvalue = /** @class */ (function () {
    function Specificvalue() {
        this.numarr = [5, 7, 9, 4];
    }
    Specificvalue.prototype.find = function () {
        for (this.i = 0; this.i < this.numarr.length; this.i = this.i + 1) {
            if (4 == this.numarr[this.i]) {
                console.log("number found");
            }
        }
    };
    return Specificvalue;
}());
var arr = new Specificvalue();
arr.find();
