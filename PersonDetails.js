"use strict";
exports.__esModule = true;
var PersonDetails = /** @class */ (function () {
    function PersonDetails() {
    }
    PersonDetails.prototype.getFullName = function () {
        return this.first + this.last;
    };
    return PersonDetails;
}());
var p1 = new PersonDetails();
p1.first = "Sowmya";
p1.last = "Harshini";
console.log(p1.getFullName());
