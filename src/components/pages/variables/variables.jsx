import React from 'react';
import styles from './variables.module.css';

export const VariablesPage = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Variables</h1>
      <p>
        Variables are used to store data values in JavaScript. The data stored
        in a variable can be changed during the execution of the program. In
        JavaScript, variables can be declared using the var, let, or const
        keyword.
      </p>
      <br />
      <h2>Declaring Variables</h2>
      <p>
        Variables are declared using the var, let, or const keyword, followed by
        the name of the variable. The name of the variable can contain letters,
        digits, underscores, and dollar signs. However, the name of the variable
        cannot start with a digit. The name of the variable is case-sensitive.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`// Declaring a variable using the var keyword
      var x = 10;

// Declaring a variable using the let keyword
let y = 20;

// Declaring a variable using the const keyword
const z = 30;
`}
        </code>
      </pre>
      <br />
      <h2>Assigning Values to Variables</h2>
      <p>
        Values can be assigned to variables using the assignment operator (=).
        The value of a variable can be changed by assigning a new value to it.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`// Assigning a value to a variable
var x = 10;

// Changing the value of a variable
x = 20;`}
        </code>
      </pre>
      <br />

      <h2>Variable Scope</h2>
      <p>
        The scope of a variable is the region of the program where the variable
        is accessible. In JavaScript, variables declared using the var keyword
        have function scope, while variables declared using the let or const
        keyword have block scope.
      </p>
      <h4>Example</h4>
      <pre>
        <code>
          {`// Variables declared using the var keyword have function scope
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

console.log(y); // Error: y is not defined`}
        </code>
      </pre>
    </div>
  );
};
