const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const person2 = {...person};

function filtro (person2){
  let result = {};
for(const i in person2){
  if (typeof person2[i] === "number"){
result[i] = person2[i];
  }
}
return result;
}

//const json = JSON.stringify({ id: person.id, age: person.age }); 
//non pensavo si potesse filtrare così, ho preferito quindi fare in un modo diverso.

const result = filtro(person2);
const json = JSON.stringify(result);

console.log(json); // Should return: { id: 1, age: 25 }