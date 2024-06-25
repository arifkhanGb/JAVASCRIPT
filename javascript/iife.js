// // Immediately Invoked Function Expressions (IIFE)


(function hello(){
console.log("hello");
})() ;

( (name) => {
    console.log("bye", `${name}`);
 })() 