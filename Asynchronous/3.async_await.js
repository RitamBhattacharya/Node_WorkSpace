function partnerSelection(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age <= 30) {
                resolve('Partner Selected...')
            } else {
                reject('Partners age is too large...')
            }
        }, 1000);
    })
}

function cardPrinting(cost) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cost <= 1000) {
                resolve('Card Printed...')
            } else {
                reject('Price of card is too high...')
            }
        }, 2000);
    })
}

function lodgeBooking(rent) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rent <= 30000) {
                resolve('Lodge is selected...')
            } else {
                reject('Rent of Lodge is too high...')
            }
        }, 3000);
    })
}

function marriage(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration <= 10) {
                resolve('Perfect Marriage...')
            } else {
                reject('Marriage Duration is High...')
            }
        }, 1500);
    })
}

async function doMarry() {
    try {
        console.log(await partnerSelection(25));
        console.log(await cardPrinting(500));
        console.log(await lodgeBooking(25000));
        console.log(await marriage(5));
        console.log('Work Done.....')
    } catch (error) {
        console.error(error)
    }
}

doMarry()