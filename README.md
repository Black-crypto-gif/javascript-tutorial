## Async/Await

Async/Await is a syntactical feature added in ES2017 (ES8) that simplifies working with promises in JavaScript. It allows developers to write asynchronous code that looks and behaves like synchronous code, making it easier to understand and debug.

### Async Functions

Async functions are defined using the `async` keyword before the function declaration. They always return a promise, which resolves with the value returned by the function or rejects with an error thrown inside the function.

```js
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
}

fetchData().then(data => {
  console.log(data);
}).catch(error => {
  console.error(error);
});
```

### Await Expression

The `await` keyword is used inside an async function to wait for a promise to resolve before proceeding with the next line of code. It can only be used inside an async function.

```js
async function fetchUserData() {
  const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const userData = await userResponse.json();

  const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`);
  const postsData = await postsResponse.json();

  return {
    user: userData,
    posts: postsData
  };
}

fetchUserData().then(data => {
  console.log(data);
}).catch(error => {
  console.error(error);
});
```

Async/Await is a powerful feature that makes working with promises in JavaScript more readable and concise. It's important to remember that async functions always return a promise, and that the `await` keyword can only be used inside an async function.
