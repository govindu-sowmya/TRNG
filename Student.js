"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(i, n, s) {
        this.StuId = 21288;
        this.StuName = "Sowmya";
        this.Stumark = 89;
        this.StuId = i;
        this.StuName = n;
        this.Stumark = s;
    }
    Student.prototype.display = function () {
        console.log(this.StuId);
        console.log(this.StuName);
        console.log(this.Stumark);
    };
    return Student;
}());
exports.Student = Student;
var e1 = new Student(21298, "Harshini", 98);
e1.display();
