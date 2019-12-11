function fnA() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1);
        }, 1000)
    })
}

function fnB() {
    return new Promise(resolve => {
        fnA().then(value => {
            resolve(value + 1);
        })
    })
}

function fnC() {
    fnB().then(value => {
        console.log(value + 1);
    })
}

fnC();