function getArray(items) {
    return new Array().concat(items);
}
var myNumArray = getArray([100, 200, 300]);
var myStrArray = getArray(["Hello", "World"]);
myNumArray.push(400); //ok
myStrArray.push("hello Typescript"); //ok
myNumArray.push("Hi"); //ok
myStrArray.push(500); //ok
console.log(myNumArray); //[100,200,300,"Hi"]
console.log(myStrArray); //["Hello","world", "Hello TypeScript", 500]
