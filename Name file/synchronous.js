const name = "Miriam"; // "declares a name"
const greeting = `Hello, my name is ${name}!`; //"declares a greeting with the name"
console.log(greeting);
// "Hello, my name is Miriam!"


/*The browser effectively steps through the program one line at a time. The browser
waits for the line to finish its work before moving on to the next line. That makes this
a synchronous program. It would still be functional like this: */

/* 
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"

//makeGreeting() is a synchronous function because the caller has to wait for the
function to finish its work and return a value before moving on.
*/