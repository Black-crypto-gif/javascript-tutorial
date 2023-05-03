// Creating an object using object literal syntax
let person = {
  name: 'John',
  age: 28,
  address: '123 Main St'
};

// Accessing object properties using dot notation
console.log(person.name);    // 'John'
console.log(person.age);     // 28
console.log(person.address); // '123 Main St'

// Modifying object properties
person.age = 29;
person.address = '456 Oak St';
console.log(person); // { name: 'John', age: 29, address: '456 Oak St' }
