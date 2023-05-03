## JavaScript Operators

JavaScript has several types of operators, including:

### 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical operations. The most common arithmetic operators are:

```js
let x = 10;
let y = 5;

console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division
console.log(x % y); // modulus (remainder after division)
console.log(x ** y); // exponentiation
```

### 2. Assignment Operators

Assignment operators are used to assign values to variables. The most common assignment operator is the equals sign `=`, but there are also compound assignment operators that combine arithmetic operations with assignment:

```js
let x = 10;
x += 5; // equivalent to x = x + 5
x -= 5; // equivalent to x = x - 5
x *= 5; // equivalent to x = x * 5
x /= 5; // equivalent to x = x / 5
x %= 5; // equivalent to x = x % 5
```

### 3. Comparison Operators

Comparison operators are used to compare values and return a boolean value of `true` or `false`. The most common comparison operators are:

```js
let x = 10;
let y = 5;

console.log(x > y);  // greater than
console.log(x < y);  // less than
console.log(x >= y); // greater than or equal to
console.log(x <= y); // less than or equal to
console.log(x === y); // equal to (strict)
console.log(x !== y); // not equal to (strict)
```

Note that the `===` and `!==` operators perform strict equality checks, meaning that they compare both the value and the data type of the operands. The `==` and `!=` operators perform loose equality checks, meaning that they compare only the value of the operands, performing type coercion if necessary.

### 4. Logical Operators

Logical operators are used to combine boolean values and return a boolean result. The most common logical operators are:

```js
let x = 10;
let y = 5;

console.log(x > 5 && y < 10); // logical AND (true)
console.log(x > 5 || y > 10); // logical OR (true)
console.log(!(x > 5));       // logical NOT (false)
```

The `&&` operator returns `true` only if both operands are `true`, the `||` operator returns `true` if either operand is `true`, and the `!` operator negates the operand.

JavaScript also has several other operators, including bitwise operators, string operators, and conditional operators. Understanding JavaScript operators is essential for writing effective code that performs a variety of tasks.
