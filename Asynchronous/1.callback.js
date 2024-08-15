function f1(callback) {
    setTimeout(() => {
        console.log('Task 1')
        callback()
    }, 1000);

}

function f2(callback) {
    setTimeout(() => {
        console.log('Task 2');
        callback()
    }, 2000);

}

function f3(callback) {
    setTimeout(() => {
        console.log('Task 3')
        callback()
    }, 3000);

}

function f4(callback) {
    setTimeout(() => {
        console.log('Task 4')
        callback()
    }, 1500);

}

f1(() => {
    f2(() => {

        f3(() => {
            f4(() => {
                console.log('Work Done')
            })
        })

    })
})