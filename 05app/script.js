var arr=[{
    dp:"https://images.unsplash.com/photo-1642440529514-9c987ee48fed?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1642751410330-7cdcc4d720e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGFsfGVufDB8fDB8fHww"
},{
    dp:"https://plus.unsplash.com/premium_photo-1669741908175-eb029fbc350f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9yZXN0fGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1570654621852-9dd25b76b38d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D"
},{
    dp:"https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1710790095456-6b122a198033?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{
    dp:"https://plus.unsplash.com/premium_photo-1710966588248-e172c415db3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
}]


var cluter=""
arr.forEach(function(ele,idx){                              
  cluter+=`<div class="story">
                <img id="${idx}" src="${ele.dp}" alt="">
            </div>`
})
console.log(cluter)
document.querySelector('.stroyes').innerHTML=cluter


document.querySelector('.stroyes').addEventListener('click',function(dets){
    
    document.querySelector('#full-screen').style.display="block"
    document.querySelector('#full-screen').style.backgroundImage=`url(${arr[dets.target.id].story})`
    setTimeout(() => {
        document.querySelector('#full-screen').style.display="none"
    }, 3000);
})