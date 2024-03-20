var timer=60
var score=0
var hitrun=0
function icresscore() {
    score+=10
    document.querySelector('#score').textContent=score
}

function getnewhit() {
    hitrun =Math.floor(Math.random()*10)
    document.querySelector('#hit').textContent=hitrun
}

function makebubble() {
    
    let cluter=""
    for(var i=0;i<=197;i++){
        var rn=Math.floor(Math.random()*10)
        cluter +=`<div class="bubble">
                                ${rn}
                        </div>`
    }
    document.querySelector('#pbtm').innerHTML=cluter
}

// timer for the game
function runtime() {
    var timeint=setInterval(() => {
        if (timer >0) {
            timer--
            document.querySelector('#timed').textContent=timer
        } else  {
            clearInterval(timeint)
            document.querySelector('#pbtm').innerHTML=`<h1>game over</h1><h1>Your score is ${score}</h1>`
        }
     
    }, 1000);
}

document.querySelector('#pbtm')
.addEventListener('click',function(dets){
    console.log(dets.target.textContent)
    var clickdum=Number.parseInt(dets.target.textContent)
    if (clickdum===hitrun) {
        icresscore()
        getnewhit()
        makebubble()
    }
    else {
        clearInterval(timer >0)
        document.querySelector("#pbtm").innerHTML=`<h1>Your score is ${score} </h1><br><h1>your are selected wrong bubble so game over</h1>`
    }
})

runtime()
makebubble()
getnewhit()
