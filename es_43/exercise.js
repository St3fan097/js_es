const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveData(data) {
  localStorage.setItem("user", JSON.stringify(data));
}

function getData(data) {
  localStorage.getItem(data);
}

saveData(data);
getData(data);