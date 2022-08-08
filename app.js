let count = 0;
let value = document.querySelector("#value")
//const btns = document.querySelectorAll(".btn")

let decreaseBtn = document.getElementById("dec")
let resetBtn = document.getElementById("res")
let increaseBtn = document.getElementById("inc")

decreaseBtn.addEventListener("click", function(){
    value.textContent = count--;
    colorChange()
})

resetBtn.addEventListener("click", function(){
    value.textContent = count = 0;
    colorChange()
})

increaseBtn.addEventListener("click", function(){
    value.textContent = count++;
    colorChange()
})


function colorChange(){
    if(value.textContent > 0){
        value.style.color = "red"
    }else if (value.textContent < 0){
        value.style.color = "yellow"
    }else{
        value.style.color = "black"
    }
}