function printAsyncName(callback, name) {
    let id = setInterval(() => {
        let sayHello = "Hello";
        callback(sayHello);
    },1000);
    let id2 = setInterval(()=> {
        console.log(name);
    }, 2000)
    setTimeout(() => {
        clearInterval(id);
    clearInterval(id2);
}, 2000);
    }

printAsyncName((any)=> console.log(any), "Steve");