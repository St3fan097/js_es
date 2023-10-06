function printAsyncName(callback,name) {
    let count = 0;
    let id = setInterval(() => {
        if (count === 0) {
            console.log("Hello")
        } else if (count === 1) {
            console.log(name)
        } else {
            clearInterval(id);
            callback(); //ho notato che se lo commento funziona ugualmente, come mai?
        }
        count++;
    }, 1000);
}

printAsyncName(() => {}, "Steve");