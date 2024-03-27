// The outer function that takes a prefix for a greeting
function createGreeting(greetingPrefix) {

    // This is the nested function (closure) that takes a name
    // Captures the variable from the outer function's scope
    return function (name) {
        console.log(greetingPrefix + " " + name);
    };
}

// Instantiate closure with a greeting
const sayHello = createGreeting("Hello");

// Use the closure with saved greeting
sayHello("Alice");
sayHello("Bob"); 

// Create another closure with a different greeting
const sayHi = createGreeting("Hi");
sayHi("Alice");
