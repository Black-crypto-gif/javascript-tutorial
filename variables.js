function myFunction() {
  var x = 10;
  console.log(x);
}

console.log(x); // Throws an error because x is not defined outside the function 

if (true) {
  let x = 10;
  console.log(x); // Output: 10
}

console.log(x); // Throws an error because x is not defined outside the block 

const PI = 3.14;
console.log(PI); // Output: 3.14

PI = 3.14159; // Throws an error because PI is a constant and cannot be reassigned 
