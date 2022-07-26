"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//
// function analyzeColor(color) {
//     if (color === 'blue') {
//         return 'Blue is the color of blueberries!'
//     } else if (color === 'red') {
//         return 'Red is the color of strawberries!'
//     } else {
//         return 'I don\'t know anything by that color.'
//    }
// }
// console.log(analyzeColor('red'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
// console.log(randomColor);
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


// var userColor = prompt('What is your favorite color?');
// console.log(userColor);
//
// function analyzeColor(color) {
//     switch (color) {
//         case 'red':
//             return 'Red is the color of Strawberries!';
//         case 'orange':
//             return 'Orange is the color of Oranges!';
//         case 'yellow':
//             return 'Yellow is the color of bananas!';
//         case 'green':
//             return 'Green is the color of limes!';
//         case 'blue':
//             return 'Blue is the color of blueberries!';
//         default:
//             return 'I don\'t know anything by the color.';
//     }
// }
// alert(analyzeColor(userColor));
// console.log(analyzeColor());


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(randomNumber, totalAmount) {
//     if (randomNumber === 0) {
//         return 0;
//     } else if (randomNumber === 1) {
//         return totalAmount * 0.10;
//     } else if (randomNumber === 2) {
//         return totalAmount * 0.25;
//     } else if (randomNumber === 3) {
//         return totalAmount * 0.35;
//     } else if (randomNumber === 4) {
//         return totalAmount * 0.50;
//     } else (randomNumber === 5); {
//         return totalAmount * 1;
//     }
// }
// console.log(calculateTotal(5, 33.39));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var userBill = prompt('Please enter your bill amount.');
// console.log(`The user's bill  = $${userBill}`);

var luckyNumber = Math.floor(Math.random() * 6);
// console.log(`The discount code is ${luckyNumber}`);
// alert(`Your randomly generated discount code is ${luckyNumber}!`);

// var totalAmount = function calculateTotal(userBill, luckyNumber) {
//     switch (totalAmount()) {
//         case luckyNumber === 0:
//             return `We're sorry but your discount amount is $0.`;
//             break;
//         case luckyNumber === 1:
//             return `Congratulations, your discount amount is $${userBill * 0.10}`;
//             break;
//         case luckyNumber === 2:
//             return `Congratulations, your discount amount is $${userBill * 0.25}`;
//             break;
//         case luckyNumber === 3:
//             return `Congratulations, your discount amount is $${userBill * 0.35}`;
//             break;
//         case luckyNumber === 4:
//             return `Congratulations, your discount amount is $${userBill * 0.50}`;
//             break;
//         case luckyNumber === 5:
//             return `Congratulations, your discount amount is $${userBill}`;
//             break;
//         default:
//             return alert('Unexpected error');
//             break;
//     }
// }
// console.log(totalAmount);










/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// 1. Use 'confirm' to ask the user if they would like to input a number.
// 2. assign the 'confirm' to a variable.
// 3. if the 'confirm' variable is true then prompt the user for a number and store it in a variable.
// 4. alert the user whether the number is even or odd.
// 5. add 100 and alert number to a function.
// 6. check if number is negative or positive and return that value.
// 7. if user inputs a value that is not a number, then inform user that input was NaN.

var userNum = confirm('Would you like to input a number?');
if (userNum) {
    var userInp = prompt('Please input your number.');
    if (isNaN(userInp)) {
        alert('Your input was not a number.');
    } else {
        if (userInp % 2 === 0) {
        alert('That number is even.')
        } else if (userInp % 2 !== 0) {
            alert('That number is odd.')
        }
        var newNum = Number(userInp) + 100;
        alert(`${userInp} + 100 = ${newNum}`);
        if (userInp < 0) {
            alert(`That's a negative number ${userInp}.`);
        } else if (userInp > 0) {
            alert(`That's a positive number ${userInp}.`);
        }
    }
}













