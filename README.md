## Error Handling with try...catch

In JavaScript, you can use the `try...catch` statement to handle errors that may occur during the execution of your code. The `try` block contains the code that may throw an error, and the `catch` block handles the error if it occurs.

Here's an example:

```js
try {
  // Code that may throw an error
  const result = doSomething();
  console.log(result);
} catch (error) {
  // Code to handle the error
  console.error('An error occurred:', error.message);
}
```

In this example, if an error is thrown in the `doSomething()` function, the error object is caught in the `catch` block and the error message is logged to the console.

You can also use the `finally` block to execute code that should always run, regardless of whether an error occurs or not. For example:

```js
try {
  // Code that may throw an error
  const result = doSomething();
  console.log(result);
} catch (error) {
  // Code to handle the error
  console.error('An error occurred:', error.message);
} finally {
  // Code to run regardless of whether an error occurred or not
  console.log('Finished executing try...catch block');
}
```

In this example, the `finally` block logs a message to the console after the `try` or `catch` block has executed.

Error handling is an important part of writing robust and reliable JavaScript code. By using the `try...catch` statement, you can gracefully handle errors and prevent them from crashing your application.
