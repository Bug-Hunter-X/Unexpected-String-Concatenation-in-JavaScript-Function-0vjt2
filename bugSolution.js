function foo(a, b) {
  a = Number(a);
  b = Number(b);
  return a + b; 
}

console.log(foo(5, '5')); // Output: 10