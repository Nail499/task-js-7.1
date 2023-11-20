document.addEventListener("DOMContentLoaded", function () {
let colordiv = document.getElementById("colordiv");
let reng1 = document.getElementById("color1");
let reng2 = document.getElementById("color2");
let reng3 = document.getElementById("color3");
let reng4 = document.getElementById("color4");
let reng5 = document.getElementById("color5");
let reng6 = document.getElementById("color6");



reng1.addEventListener("click",function(){
    let newcolor = window.getComputedStyle(reng1,null).getPropertyValue('background-color');
    colordiv.style.backgroundColor=newcolor;
})
reng2.addEventListener("click",function(){
    let newcolor = window.getComputedStyle(reng2,null).getPropertyValue('background-color');
    colordiv.style.backgroundColor=newcolor;
})
reng3.addEventListener("click",function(){
    let newcolor = window.getComputedStyle(reng3,null).getPropertyValue('background-color');
    colordiv.style.backgroundColor=newcolor;
})
reng4.addEventListener("click",function(){
    let newcolor = window.getComputedStyle(reng4,null).getPropertyValue('background-color');
    colordiv.style.backgroundColor=newcolor;
})
reng5.addEventListener("click",function(){
    let newcolor = window.getComputedStyle(reng5,null).getPropertyValue('background-color');
    colordiv.style.backgroundColor=newcolor;
})
reng6.addEventListener("click",function(){
    let newcolor = window.getComputedStyle(reng6,null).getPropertyValue('background-color');
    colordiv.style.backgroundColor=newcolor;
})

})