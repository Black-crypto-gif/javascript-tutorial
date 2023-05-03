## JavaScript Modules

JavaScript modules are a way to organize code into reusable, independent units. Modules can contain variables, functions, classes, or objects, and can be imported and exported between different files.

### Exporting from a Module

To export values from a module, you can use the `export` keyword followed by the value you want to export:

```js
// math.js
export const PI = 3.14159;

export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}
```

### Importing into a Module

To import values from a module, you can use the `import` keyword followed by the path to the module:

```js
// main.js
import { PI, square, cube } from './math.js';

console.log(PI); // 3.14159
console.log(square(5)); // 25
console.log(cube(5)); // 125
```

### Default Exports

In addition to named exports, a module can have a default export:

```js
// math.js
export default function add(x, y) {
  return x + y;
}
```

A default export can be imported using any name:

```js
// main.js
import myAddFunction from './math.js';

console.log(myAddFunction(2, 3)); // 5
```

### CommonJS Modules

In addition to ES6 modules, JavaScript also supports CommonJS modules, which are used in Node.js:

```js
// math.js
exports.PI = 3.14159;

exports.square = function(x) {
  return x * x;
};

exports.cube = function(x) {
  return x * x * x;
};
```

```js
// main.js
const math = require('./math');

console.log(math.PI); // 3.14159
console.log(math.square(5)); // 25
console.log(math.cube(5)); // 125
```

Understanding modules is important for building large-scale JavaScript applications that are organized and easy to maintain.
