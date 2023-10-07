let control = new Promise((resolve, reject) => {
    const number = 15;
    if (number > 10){
        resolve(number);
    } else {
        reject(number);
    }
});

control
.then((val)=> console.log(val))
.catch((err)=> console.error(err));