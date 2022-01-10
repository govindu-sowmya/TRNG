export class Student{
    StuId:number=21288;
    StuName:string="Sowmya";
    Stuclass:string="xyz";
    constructor (i:number, n:string, s:string){
        this.StuId=i;
        this.StuName=n;
        this.Stuclass=s;

    }
display(){
    console.log(this.StuId);
    console.log(this.StuName);
    console.log(this.Stuclass);
}

}
var e1 =new Student(21298,"Harshini","abcd");
e1.display();