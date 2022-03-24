console.log("Oi");

let arr = [1, 2, 3];
arr.push(4);

let someObject = {};

try {
  throw "Our custom exception";
} catch (err) {
  console.log(err);
}

let response = {
  users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
};

let objString = JSON.stringify(response);

let resObj = JSON.parse(objString);

console.log(resObj);

console.log(true == "true");
