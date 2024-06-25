// console.log("hello");
let a = 1;
var b = 2;
const c = 3
function one(){
    console.log(a);
    console.log(b);
    console.log(c);
}
// one();

// let x = 1 + 2 + "2";
// console.log( x);    

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(1, 4)
// console.log(anotherString);


// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// console.log(typeof anotherId);

console.log(Math.random());
// console.log((Math.random()*10) +1);

let min  = 10;
let max =  20 ;

console.log(Math.floor(Math.random() * (min -max + 1 )) + min);