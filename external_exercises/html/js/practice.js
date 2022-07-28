"use strict";

//alert('Hello World!');
console.log('Hello World!');
console.error('This is an error.');
console.warn('This is a warning!');

//var, let, and const.

//let can reassign values.

let ranNum = 30;
ranNum = 35;

console.log(ranNum);

//always use const unless you know that you will reassign the values.

//data types = strings, numbers, boolean, null, undefined, and symbols

const name = 'Ryan';
const age = 28;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//Strings

const string = 'Ryan';
const number = 28;

//Concatenation

console.log('My name is ' + string + ' and I am ' + number + ' years old.');

//Template String

const hello = `My name is ${string} and I am ${number} years old.`;
console.log(hello);

//String properties and methods

const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split(''));

const r = 'computers, technology, apples, kiwi, bananas,';
console.log(r.split(', '));

//Arrays = variables that hold multiple values.

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[3] = 'grapes';
console.log(fruits[3]);

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();


console.log(fruits);
console.log(Array.isArray(fruits));


















