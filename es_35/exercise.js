function repeatHello(callback){
setInterval(()=> {
callback()
},1000)
}

repeatHello(() => console.log("Hello"));

//ho usato un arrow function perchè è più corto da scrivere e non va ha richiamare il this.