const timer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 3000);
    })
}
module.exports = {
    wait: async () => {
        await timer();
        console.log('es6 await ok')
    }
}