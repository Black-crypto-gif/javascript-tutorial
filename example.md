Sure! Here are some examples of higher-order array functions, each with one array:

1. `map()`: creates a new array with the results of calling a provided function on every element in the original array.

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

2. `filter()`: creates a new array with all elements that pass the test implemented by the provided function.

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

3. `reduce()`: applies a function to each element in the array to reduce the array to a single value.

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // 15
```

4. `forEach()`: executes a provided function once for each array element.

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num * 2)); // 2 4 6 8 10
```

These are just a few examples of the many higher-order array functions available in JavaScript. They are incredibly useful for working with arrays and can greatly simplify your code.
