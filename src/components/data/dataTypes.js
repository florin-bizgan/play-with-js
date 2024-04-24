export const dataTypesData = [
  {
    id: 1,
    title: 'Data Types',
    description:
      'JavaScript supports various data types, each representing different kinds of values. Understanding data types is essential for writing effective JavaScript code.',
    codeSnippets: [
      {
        id: 1,
        title: 'Numbers',
        description:
          'Numbers represent numeric values in JavaScript, including integers and floating-point numbers.',
        code: `let num = 10;
let floatNum = 3.14;`,
      },
      {
        id: 2,
        title: 'Strings',
        description:
          'Strings represent sequences of characters enclosed in single or double quotes.',
        code: `let str = 'Hello';
let anotherStr = "World";`,
      },
      {
        id: 3,
        title: 'Booleans',
        description:
          'Booleans represent true or false values, which are used for logical operations.',
        code: `let isTrue = true;
let isFalse = false;`,
      },
      {
        id: 4,
        title: 'Arrays',
        description:
          'Arrays represent ordered collections of values, which can be of any data type.',
        code: `let arr = [1, 2, 3];
let anotherArr = ['apple', 'banana', 'orange'];`,
      },
      {
        id: 5,
        title: 'Objects',
        description:
          'Objects represent collections of key-value pairs, where keys are strings and values can be of any data type.',
        code: `let obj = { name: 'John', age: 30 };
let anotherObj = { key: 'value', num: 10 };`,
      },
      {
        id: 6,
        title: 'Undefined',
        description:
          'Undefined represents a variable that has been declared but not assigned a value.',
        code: `let undefinedVar;`,
      },
      {
        id: 7,
        title: 'Null',
        description:
          'Null represents the intentional absence of any object value.',
        code: `let nullValue = null;`,
      },
      {
        id: 8,
        title: 'Symbol',
        description:
          'Symbols represent unique identifiers, which are useful for defining object properties.',
        code: `const mySymbol = Symbol();`,
      },
    ],
  },
];
