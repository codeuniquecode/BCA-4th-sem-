let btn = document.getElementById("btn");
let pbtn = document.getElementById("pbtn");
let iife = document.getElementById("iife");
let clock = document.getElementById("clock");

btn.addEventListener("click", () => {
    pbtn.innerHTML = "JavaScript events are used to know if the user has performed any actions such as click, double click, or mouse over. The button you just clicked was also clicked using an event handler.";
});

// Immediately Invoked Function Expression (IIFE)
 let greet = (() =>{    
     iife.innerHTML = "This is an example of IIFE in JavaScript. In an IIFE, the function doesn't need to be called explicitly. When the function is executed, it calls itself automatically.";
})();

//clock in js
let gettime = () =>{
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
// clock.innerHTML =  `${hours} : ${minutes} : ${seconds}`;
clock.innerHTML = hours + ":" + minutes +":" +seconds;

}
setInterval(gettime, 1000);

