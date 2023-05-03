## Higher-Order Functions

In JavaScript, a higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. Higher-order functions are a powerful tool for creating reusable and composable code.

### Function Arguments

A function that takes one or more functions as arguments is called a higher-order function. Here's an example of a higher-order function that takes a function and applies it to each element of an array:

```js
function mapArray(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = mapArray(numbers, x => x * x);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```

### Function Return Values

A function that returns another function is also a higher-order function. Here's an example of a higher-order function that returns a function that calculates the sum of two numbers:

```js
function add(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = add(5);
console.log(add5(3)); // 8
console.log(add5(7)); // 12
```

Higher-order functions are a powerful tool for creating reusable and composable code, and are used extensively in JavaScript libraries and frameworks.

In JavaScript, higher-order functions are commonly used with arrays to process and transform data.

Here are some common higher-order array functions:

1. `map()` - creates a new array by applying a function to each element of an existing array.
2. `filter()` - creates a new array with all the elements that pass a given test function.
3. `reduce()` - reduces an array to a single value by applying a function to each element and accumulating the results.
4. `sort()` - sorts the elements of an array based on a comparison function.
5. `forEach()` - executes a provided function once for each array element.

Higher-order array functions can make code more concise and readable by abstracting away the details of iterating over an array and performing an operation on each element.

Here's an example of a higher-order function that takes a callback function as an argument:

```js
function filter(arr, callback) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}
```

The `filter` function takes an array as its first argument and a callback function as its second argument. It returns a new array containing only the elements of the original array for which the callback function returns true.

Here's an example of how we can use the `filter` function:

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = filter(numbers, function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
```

In this example, we define an array of numbers and use the `filter` function to create a new array containing only the even numbers. The second argument to the `filter` function is an anonymous function that takes a number as its argument and returns true if the number is even.

By using higher-order array functions like `filter`, `map`, `reduce`, and `forEach`, we can write more concise and expressive code that is easier to read and maintain.
