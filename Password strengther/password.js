const inputfiled=document.querySelector('#password')
const outputfiled=document.querySelector('#output')

inputfiled.addEventListener("input",function () {
    let pass=inputfiled.value;
console.log(pass)
    if (pass.length < 8) {
        outputfiled.innerHTML='Password is long'
        outputfiled.style.color='red'
    } else {
        
         if (pass.search(/[a-z]/) == -1 ) {
          outputfiled.innerHTML='Password is missing lowecase letter'
          outputfiled.style.color='red'  
         }
       else  if (pass.search(/[A-Z]/) == -1 ) {
            outputfiled.innerHTML='Password is missing Uppercase letter'
            outputfiled.style.color='red'  
           }
           else  if (pass.search(/[0-9]/) == -1 ) {
            outputfiled.innerHTML='Password is missing Numeric letter'
            outputfiled.style.color='red'  
           }   
        else{
            outputfiled.innerHTML='Password is strong'
            outputfiled.style.color='green'   
        }   
    }
})