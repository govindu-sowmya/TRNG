var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.display = function () {
        console.log(this.Pid);
        console.log(this.Pname);
        console.log(this.Price);
    };
    return Product;
}());
var pr1 = new Product();
pr1.Pid = 123;
pr1.Pname = "sowmya";
pr1.Price = 234.56;
pr1.display();
