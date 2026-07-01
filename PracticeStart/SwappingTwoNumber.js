let a = 20;
let b = 10;

[a, b] = [b, a];

console.log(a, b);

let c = "Hello";
let d = "World";
[c, d] = [d, c];
console.log(c, d);

let e = "Hello";
let f = "Worled";
let g;

g = e;
e = f;
f = g;

console.log(e, f, g);
