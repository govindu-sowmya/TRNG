class Specificvalue{
    numarr:number[]=[5,7,9,4];
    i:number;
    find(){
        for(this.i=0;this.i<this.numarr.length;this.i=this.i+1){
            if (4==this.numarr[this.i]){
                console.log("number found");
            }
        }
    }
}

var arr=new Specificvalue();
arr.find();