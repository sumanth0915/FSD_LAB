function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHello = function() {
    return `Hello, my name is ${this.name}.`;
  };
const person1 = new Person('Alice');
console.log(Person.prototype); 
console.log(person1.__proto__);  
console.log(person1.sayHello());  
console.log(person1.__proto__.hasOwnProperty('sayHello'));  
  