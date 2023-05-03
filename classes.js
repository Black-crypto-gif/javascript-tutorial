class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
}

let person = new Person("John", 30);
person.sayHello(); // "Hello, my name is John and I am 30 years old."

// Inheritance:

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  study() {
    console.log(this.name + " is studying " + this.major);
  }
}

let student = new Student("Jane", 20, "Computer Science");
student.sayHello(); // "Hello, my name is Jane and I am 20 years old."
student.study(); // "Jane is studying Computer Science" 
