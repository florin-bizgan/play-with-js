export const variablesData = [
  {
    id: 1,
    title: 'Variables',
    description:
      'Variables are used to store data values in JavaScript. The data stored in a variable can be changed during the execution of the program. In JavaScript, variables can be declared using the var, let, or const keyword.',
    codeSnippets: [
      {
        id: 1,
        title: 'Declaring Variables',
        description:
          'Variables are declared using the var, let, or const keyword, followed by the name of the variable. The name of the variable can contain letters, digits, underscores, and dollar signs. However, the name of the variable cannot start with a digit. The name of the variable is case-sensitive.',
        code: `// Declaring a variable using the var keyword
var x = 10;

// Declaring a variable using the let keyword
let y = 20;

// Declaring a variable using the const keyword
const z = 30;`,
      },
      // Code snippet 2: Assigning Values to Variables
      {
        id: 2,
        title: 'Assigning Values to Variables',
        description:
          'Values can be assigned to variables using the assignment operator (=). The value of a variable can be changed by assigning a new value to it.',
        code: `// Assigning a value to a variable
var x = 10;

// Changing the value of a variable
x = 20;`,
      },
      // Code snippet 3: Variable Scope
      {
        id: 3,
        title: 'Variable Scope',
        description:
          'The scope of a variable is the region of the program where the variable is accessible. In JavaScript, variables declared using the var keyword have function scope, while variables declared using the let or const keyword have block scope.',
        code: `// Variables declared using the var keyword have function scope
function test() {
var x = 10;
console.log(x); // Output: 10
}

console.log(x); // Error: x is not defined

// Variables declared using the let or const keyword have block scope
{
let y = 20;
console.log(y); // Output: 20
}

console.log(y); // Error: y is not defined`,
      },
      // Code snippet 4: Variable Hoisting
      {
        id: 4,
        title: 'Variable Hoisting',
        description:
          'Variable hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or function before it has been declared.',
        code: `// Variable hoisting
console.log(x); // Output: undefined
var x = 10;`,
      },
      // Code snippet 5: Global Variables
      {
        id: 5,
        title: 'Global Variables',
        description:
          'Global variables are variables that are declared outside of any function. They can be accessed from any part of the program.',
        code: `// Global variable
var x = 10;

function test() {
console.log(x); // Output: 10
}

test();`,
      },
      // Code snippet 6: Local Variables
      {
        id: 6,
        title: 'Local Variables',
        description:
          'Local variables are variables that are declared inside a function. They can only be accessed from within the function in which they are declared.',
        code: `// Local variable
function test() {
var x = 10;
console.log(x); // Output: 10
}

console.log(x); // Error: x is not defined`,
      },
      // Code snippet 7: Block-Scoped Variables
      {
        id: 7,
        title: 'Block-Scoped Variables',
        description:
          'Block-scoped variables are variables that are declared using the let or const keyword inside a block of code (e.g., inside a function, loop, or if statement). They can only be accessed within the block in which they are declared.',
        code: `// Block-scoped variable
{
let x = 10;
console.log(x); // Output: 10
}

console.log(x); // Error: x is not defined`,
      },
      // Code snippet 8: Constants
      {
        id: 8,
        title: 'Constants',
        description:
          'Constants are variables whose values cannot be changed once they are assigned. They are declared using the const keyword.',
        code: `// Constant
        const PI = 3.14159;
        PI = 3.14; // Error: Assignment to constant variable.`,
      },
      // Code snippet 9: Naming Conventions
      {
        id: 9,
        title: 'Naming Conventions',
        description:
          'When naming variables, it is important to follow certain conventions to make the code more readable and maintainable. Some common naming conventions include using camelCase, using descriptive names, and avoiding reserved words.',
        code: `// Naming conventions
var firstName = 'John'; // camelCase
var lastName = 'Doe';
var fullName = firstName + ' ' + lastName; // descriptive names`,
      },
      // Additional code snippet: Data Types
      {
        id: 10,
        title: 'Data Types',
        description:
          'JavaScript supports various data types, including numbers, strings, booleans, arrays, objects, etc. Variables can store values of different types, and JavaScript performs automatic type conversion when necessary.',
        code: `var num = 10; // Number
var str = 'Hello'; // String
var bool = true; // Boolean
var arr = [1, 2, 3]; // Array
var obj = { key: 'value' }; // Object`,
      },
      // Additional code snippet: Type Coercion
      {
        id: 11,
        title: 'Type Coercion',
        description:
          'JavaScript performs type coercion, converting values from one data type to another when necessary. This can happen implicitly during operations or comparisons.',
        code: `var result = '10' + 5; // Result: '105', string concatenation
var sum = '10' - 5; // Result: 5, numeric subtraction`,
      },
      // Additional code snippet: Variable Initialization
      {
        id: 12,
        title: 'Variable Initialization',
        description:
          'It is good practice to initialize variables when declaring them to avoid potential issues with uninitialized variables. This is especially important when using let or const, as they do not have default values like var.',
        code: `var x; // Declaration without initialization
var y = 20; // Declaration with initialization`,
      },
      // Additional code snippet: Best Practices
      {
        id: 13,
        title: 'Best Practices',
        description:
          "Follow best practices when working with variables, such as minimizing the use of global variables, preferring const over let for variables that don't need reassignment, and avoiding unnecessary reassignments to improve code readability and maintainability.",
        code: `const PI = 3.14159; // Constant value
let counter = 0; // Mutable variable
        
// Avoid unnecessary reassignments
counter++; // Increment counter`,
      },
      // Additional code snippet: Variable Declaration in Modern JavaScript
      {
        id: 14,
        title: 'Variable Declaration in Modern JavaScript',
        description:
          'In modern JavaScript, it is recommended to use let and const for variable declaration instead of var. let provides block-scoped variables, while const declares constants whose values cannot be reassigned.',
        code: `let count = 0; // Block-scoped variable
const MAX_SIZE = 10; // Constant`,
      },
    ],
  },
];
