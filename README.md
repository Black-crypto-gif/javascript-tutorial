## JavaScript Control Structures

JavaScript has several types of control structures, including:

### 1. if/else statement

The `if` statement is used to execute a block of code if a specified condition is true. The `else` statement is used to execute a block of code if the condition is false.

```js
let age = 25;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
```

### 2. switch statement

The `switch` statement is used to perform different actions based on different conditions.

```js
let day = 3;

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Today is not a weekday");
}
```

### 3. for loop

The `for` loop is used to execute a block of code a specified number of times.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### 4. while loop

The `while` loop is used to execute a block of code as long as a specified condition is true.

```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

### 5. do-while loop

The `do-while` loop is used to execute a block of code at least once, and then as long as a specified condition is true.

```js
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

JavaScript also has other control structures, including `if/else if` statements and `for...in` loops. Understanding JavaScript control structures is essential for writing effective code that performs different actions based on different conditions or iterates over a collection of data.
