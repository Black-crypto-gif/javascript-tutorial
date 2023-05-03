## Callback Functions

In JavaScript, a callback function is a function that is passed as an argument to another function and is executed when the first function is finished.

Callbacks are often used to handle asynchronous operations, such as reading data from a file or making a network request, where the result is not immediately available.

Here's an example of a simple callback function:

```js
function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

function logResult(result) {
  console.log(`The result is ${result}`);
}

add(2, 3, logResult); // prints "The result is 5"
```

In this example, the `add` function takes two numbers and a callback function as arguments. The `add` function computes the result and calls the callback function with the result.

The `logResult` function is passed as the callback function and is executed when the `add` function is finished.

Callbacks are a powerful feature of JavaScript that allow for asynchronous programming and can make code more modular and reusable. However, they can also lead to complex and difficult-to-read code when used excessively, so it's important to use them judiciously.
