function craditcardvalidation(str) {
    str=str.replace(/\D/g,"")

    let reverse_Check=''
    for(let i=str.length-1;i>=0;i--){
        reverse_Check=reverse_Check+str[i]
    }
    
    let double=reverse_Check.split("").map((curele,index)=>{
        if (index%2 !== 0) {
            curele=curele*2

            if (curele > 9) {
                curele=curele-9
            } else {
                curele
            }
        }
        return curele
    }).reduce((accum,cur)=>accum+Number(cur),0)
    return double %10==0
}
console.log(craditcardvalidation("4539 1488 0343 6467"))