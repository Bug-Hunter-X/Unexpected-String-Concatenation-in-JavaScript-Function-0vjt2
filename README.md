# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle bug in JavaScript: unexpected string concatenation when using the `+` operator with mixed number and string types.

## The Bug

The `foo` function is intended to add two numbers. However, when a string is passed as an argument, JavaScript performs string concatenation instead of numerical addition.  This leads to incorrect results.

## The Solution

The solution involves using the `Number()` function to explicitly convert the arguments to numbers before performing the addition. This ensures that the addition operation is performed correctly, regardless of the input types.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` to view the bug and its solution.
3. Run the JavaScript code using a browser's developer console or Node.js.