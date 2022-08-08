"use strict";

console.log('Hello, from external Javascript!');

alert('Welcome to my website!');

var userName = prompt('Please enter your First & Last Name.');
console.log(userName);
alert('Hello, ' + userName + ' it\'s nice to meet you!');

var userInput = prompt('What is your favorite color?');
console.log(userInput);
alert(userInput + ', is my favorite color as well!');

var isStudent = confirm("Click okay if you are a student!");
console.log(isStudent);

// * Exercise #3 * //

var dailyCost = 3;
var mov1 = 3 * dailyCost;
var mov2 = 5 * dailyCost;
var mov3 = 1 * dailyCost;
var total = mov1 + mov2 + mov3; {
    console.log(total);
}

var gp = 400 * 6;
var ap = 380 * 4;
var fp = 350 * 10;
var totPay = gp + ap + fp; {
    console.log(totPay);
}

var isFull = confirm('Click "cancel" if the is class is full.'); {
    console.log(isFull);
}
var isConflict = confirm('Click "cancel" if the class schedule conflicts with your current schedule'); {
    console.log(isConflict);
}
var enrollment = isFull === true && isConflict === true; {
    console.log(enrollment);
}

var items = confirm('Click "okay" if you have more than 2 items.'); {
    console.log(items);
}
var premCust = confirm('Click "okay" if you\'re a Premium Customer.'); {
    console.log(premCust);
}
var prodOffer = items === true || premCust === true; {
    console.log(prodOffer);
}
