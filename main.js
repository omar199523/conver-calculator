let conButton = document.getElementById("conver");

let inputNum = document.getElementById("inputNum");

let from = document.getElementById("from");

let to = document.getElementById("to");

let result = document.getElementById("result");

conButton.addEventListener("click",function(){
    let num = parseInt(inputNum.value,Number(from.value));
    result.innerHTML = num.toString(Number(to.value));
    
})