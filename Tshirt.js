var Tshirt = /** @class */ (function () {
    function Tshirt(i, n, s) {
        this.color = "pink";
        this.material = "cotton";
        this.design = "uShaped";
        this.color = i;
        this.material = n;
        this.design = s;
    }
    Tshirt.prototype.display = function () {
        console.log(this.color);
        console.log(this.material);
        console.log(this.design);
    };
    return Tshirt;
}());
var small = new Tshirt("Red", "Polyster", "coller");
small.display();
var large = new Tshirt("voilet", "cotton", "V Shaped");
large.display();
var xs = new Tshirt("Gray", "silk", "Sleeves");
xs.display();
