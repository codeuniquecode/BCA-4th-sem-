
let submit = document.getElementById("submit");
let message = document.getElementById("msg");

submit.addEventListener("click",(e)=>{
    let fname = document.getElementById("fname").value;
let lname= document.getElementById("lname").value;
    
    let rfname = fname.split('').reverse().join('');
    let rlname = lname.split('').reverse().join('');
    message.innerHTML = (`${rfname} ${rlname}`);
    e.preventDefault();
});