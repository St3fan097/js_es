function sum(...number) {
  let i = 0;
  for (const num of number){
    i += num;
  }
  return i;
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));