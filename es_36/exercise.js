function repeatHello(callback) {
    let id = setInterval(() => {
        callback()
    }, 1000)
    setTimeout(() => {
        clearInterval(id)
    }, 5000);
}

repeatHello(() => console.log("Hello"));

//ho usato un arrow function perchè è più corto da scrivere e non va ha richiamare il this.