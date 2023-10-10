var timer = 60
var score = 0
var hitrn = 0

function increseScore(){
    score += 10
    document.querySelector("#scoreval").textContent = score
}


function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn


}


function makeBubble(){
    var cutter = "";


for(var i = 1; i<=70; i++){
    var rn = Math.floor(Math.random()*10)
    cutter += `<div class="bubble">${rn}</div>` 
}
document.querySelector("#pbtm").innerHTML = cutter
}

function runtimer () {
    var timerint = setInterval(function(){
        if(timer>0){
            timer--
            document.querySelector("#timeval").textContent = timer
        }
        else{
            document.querySelector("#hitval").innerHTML = ''
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over  Your Score . ${score}</h1> `
            clearInterval(timerint)
        }
    },1000)
     
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = (Number(dets.target.textContent))
    if(clickednum === hitrn){
        increseScore()
        makeBubble()
        getNewHit()
    }
})

runtimer()
makeBubble()
getNewHit()
