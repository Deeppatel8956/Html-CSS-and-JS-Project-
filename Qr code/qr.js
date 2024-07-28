const qrinput=document.getElementById('qr-input')
const qrbtn=document.getElementById('qr-button')
const qrimg=document.getElementById('qr-img')

console.log(qrbtn,qrimg,qrinput)

qrbtn.addEventListener('click',()=>{
    const qrinvalue=qrinput.value;
    console.log(qrinvalue)

    if (!qrinvalue) {
        alert('Please reneter the text')
    } else {
        qrimg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrinvalue}`;
        arimg.alt = `QR code for ${qrinvalue}`;
    }
})