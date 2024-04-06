const randomno_Num=parseInt(Math.random()*100+ 1)

const guessd=document.querySelector('.guesses')
const userinput=document.querySelector('#guessField')
const submi=document.querySelector('#subt')
const lowerhi=document.querySelector('.lowOrHi')
const remaing=document.querySelector('.lastResult')
const startover=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevguess=[]
let numguess=1

let playgame=true

if (playgame) {
    submi.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        validateguess(guess)
    })
}

function validateguess(guess) {
    // 
    if (isNaN(guess)) {
        alert('Please enter the vaild num')
    }
    else if(guess < 1){
        alert('Please enter the num greater the num')
    }
    else if (guess > 100) {
        alert('write the num 100 less than')
    }
    else{
        prevguess.push(guess)
        if (numguess==10) {
            displayGuess(guess)
            displayMessage(`Game over . Random number ${randomno_Num} `)
            endGame()
        }
        else{
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess) {
    // 
    if (guess == randomno_Num) {
        displayMessage('You guess the right num')
        endGame()
    }
    else if(guess < randomno_Num){
        displayMessage('You num is TOOO Low')
    }
    else if(guess > randomno_Num){
        displayMessage('You num is TOOO High')
    }
}

function displayGuess(guess) {
    userinput.value=''
    guessd.innerHTML +=`${guess}  `
    numguess++
    remaing.innerHTML =`${10 - numguess}`
}

function displayMessage(Massage) {
    lowerhi.innerHTML=`<h2>${Massage}</h2>`
}

function endGame() {
    userinput.value=''
    p.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame">Start over Game</h2>'
    startover.appendChild('p')
    playgame=false
    newGame()
}

function newGame() {
    const nwegame=document.querySelector('#newGame')
    nwegame.addEventListener('click',function(e){
        
         randomno_Num=parseInt(Math.random()*100+ 1)
         numguess=1
         prevguess=[]
         playgame=true
         guessd.innerHTML=''
         remaing.innerHTML=`${10 - numguess}`
         userinput.removeAttribute('disabled')
         startover.removeChild(p)

    })
}