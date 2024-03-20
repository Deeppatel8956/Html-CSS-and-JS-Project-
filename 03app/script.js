let main=document.querySelector("#main")
let crsr=document.querySelector(".cursor")

// crsr.style.backgroundColor="green"
main.addEventListener('mousemove',function(paris){
    // console.log(paris.x)
    // console.log(paris.y)
    crsr.style.left=paris.x+"px"
    crsr.style.top=paris.y+"px"
})