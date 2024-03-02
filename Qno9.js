let add = document.form.add.value;
let addbtn = document.getElementById("add");
let subbtn = document.getElementById("sub");
let mulbtn = document.getElementById("mul");
let divbtn = document.getElementById("div");
let modbtn = document.getElementById("mod");


addbtn.addEventListener("click", () => {
  let num1 = parseInt(document.form.first.value);
  let num2 = parseInt(document.form.second.value);
  
  let num3 = num1 + num2; // Perform addition after parsing
  
  document.form.result.value = num3;
  num1 = "";
  num2 = "";
});
subbtn.addEventListener("click", () => {
    let num1 = parseInt(document.form.first.value);
    let num2 = parseInt(document.form.second.value);
   
    let num3 = num1 - num2; // Perform addition after parsing
    
    document.form.result.value = num3;
    num1 = "";
    num2 = "";
  });
  divbtn.addEventListener("click", () => {
    let num1 = parseInt(document.form.first.value);
    let num2 = parseInt(document.form.second.value);
 
    let num3 = num1 / num2; // Perform addition after parsing
    // console.log(num3);
    document.form.result.value = num3;
    num1 = "";
    num2 = "";
  });
  modbtn.addEventListener("click", () => {
    let num1 = parseInt(document.form.first.value);
    let num2 = parseInt(document.form.second.value);
    console.log("clicked add");
    let num3 = num1 % num2; // Perform addition after parsing
    // console.log(num3);
    document.form.result.value = num3;
    num1 = "";
    num2 = "";
  });
  mulbtn.addEventListener("click", () => {
    let num1 = parseInt(document.form.first.value);
    let num2 = parseInt(document.form.second.value);
    
    let num3 = num1 * num2; // Perform addition after parsing
    // console.log(num3);
    document.form.result.value = num3;
    num1 = "";
    num2 = "";
  });
