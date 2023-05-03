function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

function logResult(result) {
  console.log(`The result is ${result}`);
}

add(2, 3, logResult); // prints "The result is 5"
