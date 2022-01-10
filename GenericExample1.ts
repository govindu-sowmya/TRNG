function getArray12<T>(items :T[]) : T[]{
    return new Array<T>().concat(items);
}
let myNumArray12 = getArray12<number>([100,200,300]);
let myStrArray12 = getArray12<string>(["Hello","World"]);
myStrArray12.push("Hi");//compiler error
myNumArray12.push(400);//complier Error
console.log(myNumArray12);

console.log(myStrArray12)
