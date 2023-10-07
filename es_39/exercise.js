const isLogged = true;

function first(isLogged) {
    return new Promise((resolve, reject) => {
        if (isLogged == true) {
            resolve(Math.random())
        } else {
            reject(new Error("Errore"))
        }
    })
}

function second(num) {
    return new Promise((resolve, reject) => {
        if (num > 0.5) {
            resolve({ nome: "John", età: 24 })
        } else {
            reject(new Error("Errore"))
        }
    })
}

first(isLogged)
    .then((num) => second(num))
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
    .finally(() => console.log("Code executed"));
