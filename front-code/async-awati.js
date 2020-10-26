function fnA() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1);
        }, 1000)
    })
}

async function fnB() {
    const value = await fnA();
    return new Promise(resolve => {
        resolve(value + 1);
    })
}
async function fnC() {
    const value = await fnB();
    console.log(value + 1);
}
fnC();