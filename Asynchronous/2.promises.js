function partnerSelection(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age<=30){
                resolve('Partner Selected...')
            }else{
                reject('Partners age is too large...')
            }
        }, 1000);
    })
}

function cardPrinting(cost) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cost<=1000){
                resolve('Card Printed...')
            }else{
                reject('Price of card is too high...')
            }
        }, 2000);
    })
}

function lodgeBooking(rent) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(rent<=30000){
                resolve('Lodge is selected...')
            }else{
                reject('Rent of Lodge is too high...')
            }
        }, 3000);
    })
}

function marriage(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(duration<=10){
                resolve('Perfect Marriage...')
            }else{
                reject('Marriage Duration is High...')
            }
        }, 1500);
    })
}

partnerSelection(25)
.then(value=>{
    console.log(value)
    return cardPrinting(500)
})
.then(value=>{
    console.log(value)
    return lodgeBooking(12000)
})
.then(value=>{
    console.log(value)
    return marriage(5)
})
.then(value=>{
    console.log(value)
    console.log('Work Done')
})
.catch(error=>{
    console.error(error)
    console.error('cannot proceed further...')
})