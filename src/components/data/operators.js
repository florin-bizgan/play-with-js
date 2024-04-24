export const operatorsData = [
  {
    id: 1,
    title: 'Operators',
    description:
      'Operators in JavaScript are symbols used to perform operations on operands. They can be categorized into different types, such as arithmetic, assignment, comparison, logical, etc.',
    codeSnippets: [
      {
        id: 1,
        title: 'Arithmetic Operators',
        description:
          'Arithmetic operators are used to perform mathematical calculations, such as addition, subtraction, multiplication, division, etc.',
        code: `let sum = 10 + 5; // Addition
let difference = 10 - 5; // Subtraction
let product = 10 * 5; // Multiplication
let quotient = 10 / 5; // Division
let remainder = 10 % 3; // Modulus`,
      },
      {
        id: 2,
        title: 'Assignment Operators',
        description:
          'Assignment operators are used to assign values to variables.',
        code: `let x = 10; // Assigning a value to a variable
x += 5; // Equivalent to x = x + 5`,
      },
      {
        id: 3,
        title: 'Comparison Operators',
        description:
          'Comparison operators are used to compare two values and return a boolean result.',
        code: `let isEqual = 10 === 5; // Strict equality
let isNotEqual = 10 !== 5; // Strict inequality
let isGreater = 10 > 5; // Greater than
let isLess = 10 < 5; // Less than`,
      },
      {
        id: 4,
        title: 'Logical Operators',
        description:
          'Logical operators are used to perform logical operations on boolean values.',
        code: `let result = (10 > 5) && (20 < 15); // Logical AND
let anotherResult = (10 > 5) || (20 < 15); // Logical OR
let negation = !(10 > 5); // Logical NOT`,
      },
      // Add more code snippets as needed
    ],
  },
];
