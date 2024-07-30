const container=document.querySelectorAll('span')

container.forEach((item)=>{
    item.addEventListener('click',function () {
        item.classList.toggle('active')
    })
})