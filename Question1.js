var numVar = 42;
var strVar = "Hello, World!";
var boolVar = true;
console.log("Using var:");
console.log("numberVar:", numVar); // 42
console.log("stringVar:", strVar); // Hello, World!
console.log("booleanVar:", boolVar); // true
numVar = 100;
console.log("Reassigned numberVar:", numVar); // 100
// Hoisting with var
console.log("Hoisted var before declaration:", hoistedVar); // undefined
var hoistedVar = "I am hoisted!";
console.log("Hoisted var after declaration:", hoistedVar); // I am hoisted!

let numLet = 3.14;
let strLet = "JavaScript";
let boolLet = false;
console.log("\nUsing let:");
console.log("numberLet:", numLet);
console.log("stringLet:", strLet);
console.log("booleanLet:", boolLet);
numLet = 2.71;
console.log("Reassigned numberLet:", numberLet);
// Scope of let
if (true) {
    let blockScopedLet = "I am block scoped!";
    console.log("Inside block:", blockScopedLet); // I am block scoped!
}
// console.log(blockScopedLet); // Uncommenting this line will cause a ReferenceError

const numConst = 7;
const strConst = "Constant String";
const boolConst = true;
console.log("\nUsing const:");
console.log("numberConst:", numberConst);
console.log("stringConst:", stringConst);
console.log("booleanConst:", booleanConst);

// Attempting to reassign const
// numberConst = 10; // Uncommenting this line will cause a TypeError
