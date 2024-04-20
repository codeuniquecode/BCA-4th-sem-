let validate = () =>{
    // validation for name
    let name = document.getElementById("name").value;
    let nameRegex = /^[a-zA-Z].*[a-zA-Z]$/;
    let phonereg = /^[9][0-9]{9}$/;
    if(name ===''){
        document.getElementsByClassName('showerror')[0].innerHTML="*please enter a name";
        return false;
    }
    else if(name.length<8){
        document.getElementsByClassName('showerror')[0].innerHTML="*please enter a valid name";
        return false;
    }
    else if(!nameRegex.test(name)){
        document.getElementsByClassName('showerror')[0].innerHTML="*name should start and end with letters";
        return false;
    }
    else{
        document.getElementsByClassName('showerror')[0].innerHTML="";
    }
    
    // validation for password and cpassword
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    if(password ===''){
        document.getElementsByClassName('showerror')[1].innerHTML="*please enter password";
        return false;
    }
    else if(cpassword ===''){
        document.getElementsByClassName('showerror')[2].innerHTML="*please enter password";
        return false;
    }
    else if(password!=cpassword){
        document.getElementsByClassName('showerror')[2].innerHTML="*password and confirm password must match";
        return false;
    }
    else{
        document.getElementsByClassName('showerror')[2].innerHTML="";
        document.getElementsByClassName('showerror')[1].innerHTML="";
    }
    // validation for phone number
    let phone = document.getElementById("phone").value;
    if(!phonereg.test(phone)){
        document.getElementsByClassName('showerror')[3].innerHTML="*phone number must of 10 digits starting with 9";
        return false;
    }
    else if(phone ===''){
        document.getElementsByClassName('showerror')[3].innerHTML="*please enter phone number";
        return false;
    }
    else{
        document.getElementsByClassName('showerror')[3].innerHTML="";
    }
    // validation for email
    let email = document.getElementById("email").value;
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if(email===''){
        document.getElementsByClassName('showerror')[4].innerHTML="*please enter email";
        return false;
    }
    else if(!emailReg.test(email)){
        document.getElementsByClassName('showerror')[4].innerHTML="*invalid email";
        return false;
    }
    else{
        document.getElementsByClassName('showerror')[4].innerHTML="";
    }
    //validation for dob
    let dob = document.getElementById("dob").value;
    let dobReg = /^[0-9]{4}-[0-9]{2}-[0-9]{2}/;
    if(dob===''){
        document.getElementsByClassName('showerror')[5].innerHTML="*please enter dob";
        return false;
    }
    else if(!dobReg.test(dob)){
        document.getElementsByClassName('showerror')[5].innerHTML="*dob must be in yyyy-mm-dd format";
        return false;
    }
    else{
        document.getElementsByClassName('showerror')[5].innerHTML="";
    }
    // validation for country
    let country = document.getElementById("country");
    if(country.selectedIndex==0){
        document.getElementsByClassName('showerror')[6].innerHTML="*please select a country";
        return false;
    }
    else{
        document.getElementsByClassName('showerror')[6].innerHTML="";
    }
    // validation for gender
    let gender = document.getElementsByName("gender");
let genderError = document.getElementsByClassName('showerror')[7];
let genderChecked = false;

for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
        genderChecked = true;
        break;
    }
}

if (!genderChecked) {
    genderError.innerHTML = "*Please select a gender";
    return false;
}
else if(genderChecked){
    genderError.innerHTML = "";
}

    
    // validation for checkbox
    let checkbox = document.getElementById("checkbox");
    if(checkbox.checked!=true){
        document.getElementsByClassName('showerror')[8].innerHTML="*accept terms and conditions to continue";
        return false;
    }
    else if(checkbox.checked==true){
        document.getElementsByClassName('showerror')[8].innerHTML = "";
    }

}