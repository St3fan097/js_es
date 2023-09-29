function sum(...num) {
    let i = 0;
    for (const element of num){
        i += element;
    }
    return i;
}

console.log(sum(1, 2, 3, 4, 5));