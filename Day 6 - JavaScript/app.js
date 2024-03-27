// Functions - Allow us to write reusable blocks of code.

// Defining a function

function greet() {
    console.log("Hellow World!");
    console.log("Hello Philippines!");
}

greet();

// Function with Parameter
function greetMe(name) {
    console.log("Hello, ", name);
}
greetMe('Anya');

// Function with return
function sum(a , b) {
    console.log("Log me please")
    return a + b;
}
console.log('Sum: ', sum(5, 8));