## Generators

Generators are functions that can be paused and resumed, allowing you to control the flow of execution. When a generator is called, it returns an iterator that can be used to step through its execution. At each pause, the generator can yield a value to the iterator, and then resume execution when the next value is requested.

### Creating a Generator

To create a generator, you can use the `function*` syntax, which indicates that the function is a generator:

```js
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
```

The `yield` keyword is used to pause the generator and return a value to the iterator. When the next value is requested, the generator resumes execution from the point where it was paused.

### Using a Generator

To use a generator, you first need to call it to get an iterator:

```js
const myIterator = myGenerator();
```

You can then step through the generator using the `next()` method on the iterator:

```js
console.log(myIterator.next()); // { value: 1, done: false }
console.log(myIterator.next()); // { value: 2, done: false }
console.log(myIterator.next()); // { value: 3, done: false }
console.log(myIterator.next()); // { value: undefined, done: true }
```

The `done` property indicates whether the generator has completed or not. When the generator is done, the `value` property is `undefined`.

Generators are a powerful feature of JavaScript that can be used to implement many advanced patterns, such as lazy evaluation and asynchronous programming.
