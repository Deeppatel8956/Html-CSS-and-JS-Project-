const forms=document.querySelector('form')

forms.addEventListener('submit',function(e){
    e.preventDefault()
    const heights=parseInt(document.querySelector('#height').value)
    const weights=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')

    if (heights==''||heights < 0 ||isNaN(heights)) {
        result.innerHTML=`Please enter the value ${heights}`
    }
   else if (weights==''||weights < 0 ||isNaN(weights)) {
        result.innerHTML=`Please enter the value ${weights}`
    }
    else{
        const bmi=(weights/(heights*heights/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`
    }  
})