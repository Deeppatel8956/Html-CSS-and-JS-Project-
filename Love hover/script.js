let con=document.querySelector('#container')
let love=document.querySelector('i')

con.addEventListener('dblclick',function () {
    love.style.transform="translate(-50%,-50%) scale(1)"
    setTimeout(function(){
        love.style.transform="translate(-50%,-50%) scale(0)"
    },3000)
})