function* fibonacci() {
  let a = 0;
  let b = 1;
  while (true) {
    let current = a;
    a = b;
    b = current + b;
    yield current;
  }
}

const gen = fibonacci();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
