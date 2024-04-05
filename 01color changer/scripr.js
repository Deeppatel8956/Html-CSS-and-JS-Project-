const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(butt){
    console.log(butt)
    butt.addEventListener('click',function(e){
        if (e.target.id=='red') {
            body.style.backgroundColor=e.target.id
        }
        
        if (e.target.id=='blue') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id=='yellow') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id=='black') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id=='gray') {
            body.style.backgroundColor=e.target.id
        }


        
        // second method
        // if (e.target.id==e.target.id) {
        //     body.style.backgroundColor=e.target.id
        // }
    })
})