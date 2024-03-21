let ele=document.querySelectorAll(".elem")

ele.forEach(function(val){
    console.log(val.childNodes[0])
  val.addEventListener('mousemove',function(dets){
    val.childNodes[3].style.left=dets.x+"px"
    val.childNodes[3].style.right=dets.y+"px"
  })

   val.addEventListener('mouseenter',function(){
    val.childNodes[3].style.opacity=1
   })

   val.addEventListener('mouseleave',function(){
   val.childNodes[3].style.opacity=0
   })
})