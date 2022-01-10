export class Employee{
    empId:number=21288;
    empName:string="Sowmya";
    empSal:number=22222
    constructor (i:number, n:string, s:number){
        this.empId=i;
        this.empName=n;
        this.empSal=s;

    }
display(){
    console.log(this.empId);
    console.log(this.empName);
    console.log(this.empSal);
}

}
var e1 =new Employee(21298,"Harshini",22222);
e1.display();