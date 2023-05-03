//Let's say we have two JavaScript files, main.js and helper.js, and we want to use the function sum defined in helper.js in main.js :

export function sum(a, b) {
  return a + b;
} // helper.js


import { sum } from './helper.js';

let result = sum(5, 10);
console.log(result); // 15 / main.js
