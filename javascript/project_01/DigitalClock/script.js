const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

let intervalId = setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 5000)