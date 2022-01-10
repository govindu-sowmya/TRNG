class Product{
    Pid:number;
    Pname:string;
    Price:number;

    display(){
        console.log(this.Pid);
        console.log(this.Pname);
        console.log(this.Price);
    }

}
var pr1= new Product();
pr1.Pid=123;
pr1.Pname="sowmya";
pr1.Price=234.56;
pr1.display();