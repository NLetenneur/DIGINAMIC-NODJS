console.log(`Hello world`);

// array
let array = [1, 2, 3, 4];
console.log(`array :` + array);

let copy = [...array, 4, 5, 6];
console.log(`copy : ` + copy);

let [a, b] = copy;

console.log(a);
console.log(b);

let c = copy[2];

console.log(c);

//objet
let obj = {
  name: "obj1",
};

console.log(obj);
console.log(obj.name);

obj.message = "Hello world";

console.log(obj);

let copyObj = { ...obj, type: "success", id: 5 };

console.log(copyObj);

const { type, id } = copyObj;
console.log(type, id);
