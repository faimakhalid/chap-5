
//   Question no 1 
// Declare two numbers
let num1 = 3;
let num2 = 5;

// Calculate the sum
let sum = num1 + num2;

// Display the result
document.getElementById('result').textContent = sum;

//  Question no 2
// Declare two numbers
let num3 = 5;
let num4 = 3;

// Perform operations
let subtraction = num3 - num4;
let multiplication = num3 * num4;
let division = num3 / num4;
let modulus = num3 % num4;

// Display results in the browser
document.getElementById('subtraction').textContent = subtraction;
document.getElementById('multiplication').textContent = multiplication;
document.getElementById('division').textContent = division.toFixed(2); // Limit division result to 2 decimals
document.getElementById('modulus').textContent = modulus;

//  Question no 3
// a. Declare a variable
let myVar;

// b. Show the value of the variable after declaration
document.getElementById('step-b').textContent = "Value after variable declaration is: " + myVar;

// c. Initialize the variable with some number
myVar = 5;

// d. Show the initial value
document.getElementById('step-d').textContent = "Initial value: " + myVar;

// e. Increment the variable
myVar++;

// f. Show the value after increment
document.getElementById('step-f').textContent = "Value after increment is: " + myVar;

// g. Add 7 to the variable
myVar += 7;

// h. Show the value after addition
document.getElementById('step-h').textContent = "Value after addition is: " + myVar;

// i. Decrement the variable
myVar--;

// j. Show the value after decrement
document.getElementById('step-j').textContent = "Value after decrement is: " + myVar;

// k. Show the remainder after dividing the variable's value by 3
let remainder = myVar % 3;

// l. Output the remainder
document.getElementById('step-l').textContent = "The remainder is: " + remainder;

//  Question no 4
// Store the price of a single movie ticket
let ticketPrice = 600;

// Calculate the total cost for 5 tickets
let numberOfTickets = 5;
let totalCost = ticketPrice * numberOfTickets;

// Display the total cost
console.log(`Total cost to buy ${numberOfTickets} tickets to a movie is ${totalCost} PKR.`);

//  Question no 5
// Define the number for which the table is required
let number = 4; // You can change this to any number
document.write(`<h3>Table of ${number}</h3>`);

// Loop to generate and display the table
for (let i = 1; i <= 10; i++) {
    document.write(`${number} x ${i} = ${number * i}<br>`);
}

//  Question no 6
// Part a & b: Convert Celsius to Fahrenheit
let celsius = 25; // Change this value for a different Celsius input
let fahrenheitFromCelsius = (celsius * 9 / 5) + 32;
document.write(`${celsius}°C is ${fahrenheitFromCelsius}°F<br>`);

// Part c & d: Convert Fahrenheit to Celsius
let fahrenheit = 70; // Change this value for a different Fahrenheit input
let celsiusFromFahrenheit = (fahrenheit - 32) * 5 / 9;
document.write(`${fahrenheit}°F is ${celsiusFromFahrenheit}°C`);

//  Question no 7
// Variables
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;

// Calculating total cost
var totalCosts = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display receipt
document.write("<p>Price of item 1 is " + priceItem1 + "</p>");
document.write("<p>Quantity of item 1 is " + quantityItem1 + "</p>");
document.write("<p>Price of item 2 is " + priceItem2 + "</p>");
document.write("<p>Quantity of item 2 is " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges " + shippingCharges + "</p>");
document.write("<h2>Total costs of your order is " + totalCosts + "</h2>");

//  Question no 8
// Variables
var totalMarks = 980;
var marksObtained = 804;

// Calculate percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display result
document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");

//  Question no 9
// Variables
var usDollars = 10;
var saudiRiyals = 25;
var usdToPkr = 104.80;
var sarToPkr = 28;

// Total in PKR
var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * sarToPkr);

// Display result
document.write("<p>Total Currency in PKR: " + totalPkr + "</p>");

//  Question no 10
 // Variables
 var usDollars = 10;
 var saudiRiyals = 25;
 var usdToPkr = 104.80;
 var sarToPkr = 28;

 // Total in PKR
 var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * sarToPkr);

 // Display result
 document.write("<p>Total Currency in PKR: " + totalPkr + "</p>");

 //  Question no 11
 // Store the current year
 var currentYear = 2025;

 // Store the birth year
 var birthYear = 1998;

 // Calculate the two possible ages
 var age1 = currentYear - birthYear;
 var age2 = age1 - 1;

 // Output the result
 document.write("<p>They are either " + age1 + " or " + age2 + " years old.</p>");

 //  Question no 12
  // Store the radius
  var radius = 7;

  // Value of π
  var pi = 3.142;

  // Calculate the circumference
  var circumference = 2 * pi * radius;

  // Calculate the area
  var area = pi * radius * radius;

  // Output the results
  document.write("<p>The circumference is " + circumference + "</p>");
  document.write("<p>The area is " + area + "</p>");

//  Question no 13
  // Store your favorite snack
  var favoriteSnack = "Chocolates";

  // Store your current age
  var currentAge = 25;

  // Store the maximum age
  var maxAge = 80;

  // Store the estimated amount per day
  var amountPerDay = 3;

  // Calculate the total supply needed
  var totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;

  // Output the result
  document.write("<p>You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".</p>");