(function changecolor(){
    let bluecolor = document.getElementById("blue");
    let redcolor = document.getElementById("red");
    let ocolor = document.getElementById("orange");
    bluecolor.addEventListener("click",()=>{
        document.body.style.backgroundColor="blue";
    })
    redcolor.addEventListener("click",()=>{
        document.body.style.backgroundColor="red";
    })
    ocolor.addEventListener("click",()=>{
        document.body.style.backgroundColor="orange";
    })
})();