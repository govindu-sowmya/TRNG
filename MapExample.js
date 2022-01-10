var ProArray=[
    {price:"100" ,product:"Mobile"},
    {price:"200" ,product:"Laptop"},
    {price:"300" ,product:"Mic"},
    {price:"400" ,Product:"PC"}
];
//map example
var newpro = ProArray.map (function(value){
return value.price;
})
console.log(newpro);
//with arrow function
var newpro1 =ProArray.map(value=>value.price);
console.log(newpro1);
//filter example
var filterEx =ProArray.filter(function(value){
if (value.price < 300 ){
    return true;
}
})
//with arrow function
const arrowvalue =ProArray.filter(value =>price => 300 );
console.log(arrowvalue);
//sort example
const sortProduct = ProArray.sort((a,b) =>(a.Product > b.Product ? 1: -1));
console.log(sortProduct);

