// let isstatus=document.querySelector('h5')

// let addfriend=document.querySelector('#add')

// let remove=document.querySelector("#remove")

// addfriend.addEventListener("click",function () {
//     isstatus.innerHTML="Friend"
//     isstatus.style.color="blue"
// })

// remove.addEventListener("click",function(){
//     isstatus.innerHTML="Remove list"
//     isstatus.style.color="green"
// })


// without remove using
let isstatus=document.querySelector('h5')

let addfriend=document.querySelector('#add')

let check=0

addfriend.addEventListener("click",function () {
    if (check==0) {
        
        isstatus.innerHTML="Friend"
        isstatus.style.color="blue"
        check=1
        addfriend.innerHTML="Remove friend"
    }else{
        isstatus.innerHTML="stranger"
        isstatus.style.color="red"
        check=0
        addfriend.innerHTML="Add friend"
    }
})

