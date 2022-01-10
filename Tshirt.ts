class Tshirt{ color:string="pink";
 material:string="cotton"; 
 design:string="uShaped" 
 constructor(i:string,n:string,s:string)
 { 
     this.color=i; 
     this.material=n;
      this.design=s;
     } 
     display()
      {
           console.log(this.color);
            console.log(this.material);
             console.log(this.design);
             }
             }
              var small=new Tshirt("Red","Polyster","coller");
               small.display(); 
               var large=new Tshirt("voilet","cotton","V Shaped");
                large.display(); 
                var xs=new Tshirt("Gray","silk","Sleeves"); 
                xs.display();