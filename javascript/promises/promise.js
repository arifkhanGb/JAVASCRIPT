// const promises = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is compelete");
//         resolve();
//     }, 1000)
// });

// promises.then(() => {
//     console.log("promise consumed");
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("async task two compeleted");
//         resolve();
//     }, 2000);
// }).then(() => {
//     console.log("promise two comsumed");
// })

// const promiseThree = new Promise((res, rej) =>{
//         setTimeout(() => {
//             res({user: "arif", email: "arif@gmail.com"})
//         }, 1000);
// }).then((user) =>{
//     console.log(user);
// })


// const promiseFour = new Promise((res, rej) =>{
//     setTimeout(() => {
//         let error = false;
//     if(!error){
//         res({name: "arif", email: "arif@gmail.com"})
//     }
//     else{
//         rej("Error! Something went wrong ")
//     }
//     }, 1000);
    
// }).then((user) =>{

//     console.log(user);
//     return user.name;
// }).then((username) =>{
// console.log(username);
// }).catch((error) =>{
//     console.log(error);
// }).finally(() =>{
//     console.log("The promise is either resolved or rejected");
// })


// const promiseFive = new Promise((res, rej) =>{
//     setTimeout(() => {
//         let error = false;
//     if(!error){
//         res({name: "arif", email: "arif@gmail.com"})
//     }
//     else{
//         rej("Error! js went wrong ")
//     }
//     }, 1000);
// });



// async function promiseFiveConsumed(){
// try {
//     const response = await promiseFive;
//     console.log(response);
    
// } catch (error) {
//     console.log(error);
// }
// }
// promiseFiveConsumed();


// async function getAllUsers(){
//     try{
//     const response = await fetch('http://localhost:8081/All');
//     // console.log(response);
//    const data = await response.json();
//    console.log(data);
//     }catch(error){
//         console.log("E: " , error);
//     }
// }
// getAllUsers();


// fetch("http://localhost:8081/All")
// .then((response) =>{
//     return response.json();
// })
// .then((data) =>{
//     console.log(data);

// })
// .catch((error) => console.log(error));

// Promise.all
// {Promise.all can be used when there are multiple promises that need to be resolved before proceeding.}

Promise.all([fetch("http://localhost:8081/All"), fetch("http://localhost:8081/All")])
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => {
    console.log(data); // data is an array of the JSON responses
  })
  .catch((error) => console.log(error));