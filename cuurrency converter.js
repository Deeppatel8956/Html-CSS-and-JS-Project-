const rates={
    USD:1,
    GBP:0.8,
    EUR:0.8,
    INR:82
}
// this is formula
// 1 : 0.8
// ? : 100


function Currencyconverter(amount,fc,tc) {
  let amountUSD=0
  if (fc!=="USD") {
    amountUSD=amount/rates[fc]
  } else {
    amountUSD=amount
  }

//   find tc
let convertedamount=0
if (tc!=='USD') {
    convertedamount=amountUSD*rates[tc]
} else {
    convertedamount=amountUSD
}

return convertedamount
}
console.log(Currencyconverter(100,"GBP","EUR"))