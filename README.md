## Closures

A closure is a function that has access to variables in its outer (enclosing) scope, even after the outer function has returned. Closures allow you to "remember" data between function calls, and are useful for creating private variables and functions.

### Creating a Closure

To create a closure, you define a function inside another function and return it:

```js
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

const myClosure = outer(); // myClosure is now a function that has access to `counter`

myClosure(); // logs 1
myClosure(); // logs 2
myClosure(); // logs 3
```

### Private Variables

Closures can be used to create private variables that are hidden from the global scope:

```js
function counter() {
  let count = 0;

  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
    },

    getCount() {
      return count;
    }
  }
}

const myCounter = counter();

myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount()); // logs 2

myCounter.decrement();
console.log(myCounter.getCount()); // logs 1
```

In this example, `count` is a private variable that is not accessible from outside the `counter()` function. The `increment()`, `decrement()`, and `getCount()` functions all have access to the `count` variable, thanks to the closure.

Understanding closures is important for writing efficient and modular JavaScript code.
