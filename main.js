const screen1 = document.querySelector (".screen1")
const screen2 = document.querySelector (".screen2")
const btnLuck = document.querySelector ("#btnLuck")
const btnBack = document.querySelector ("#btnBack")

function luck (event){
    event.preventDefault ()
    screen1.classList.add ("hide")
    screen2.classList.remove ("hide")
}

btnLuck.addEventListener('click', luck)

function back (){
    screen1.classList.remove ("hide")
    screen2.classList.add ("hide")
}

btnBack.addEventListener('click', back) 
