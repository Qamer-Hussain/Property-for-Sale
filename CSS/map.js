// Part 1: Implicit Type Conversion 


let result = "10" + 3; // String + Number
console.log(result);
document.writeln(result , "<br>"); 


let Result = "10" * 2; //String * Number
console.log(Result);
document.writeln(Result , "<br>"); 

let boolen = true + 1; // Boolean + Number
console.log(boolen);
document.writeln(boolen , "<br>");  

let num = null + 5;  // Null + Number
console.log(num); 
document.writeln(num , "<br>" , "<br>"); 

//  Explicit Type Conversion

let str = "123";    // String to Number
let numb = Number(str);
console.log(numb); 
document.writeln(numb , "<br>");

let num1 = 456;  // Number to String
let str1 = String(num1);
console.log(str1);
document.writeln(str1 , "<br>");

let bool = true; // Boolean to String
let str2 = String(bool);
console.log(str2);
document.writeln(str2 , "<br>");

let str3 = "hello";
let bool1 = Boolean(str3);
console.log(bool1);
document.writeln(bool1 , "<br>" , "<br>");

// Part 2: Implicit Type Conversion

// 1. Adding a string and a number
let a = "10" + 5;
console.log("Result of '10' + 5:", a);  
document.writeln("Result of '10' + 5:", a , "<br>"); 

// 2. Concatenating a string and a boolean
let b = "The value is " + true;
console.log("Result of 'The value is ' + true:", b); 
document.writeln("Result of 'The value is ' + true:", b , "<br>"); 

// 3. Using a string in a mathematical operation
let c = "20" - 5;
console.log("Result of '20' - 5:", c);  
document.writeln("Result of '20' - 5:", c , "<br>", "<br>");

// Part 3:  Explicit Type Casting

// Convert a number stored as a string to a number using Number()
let strNumber = "345";
let convertedNumber = Number(strNumber);
console.log("Original (string):", strNumber, "| Type:", typeof strNumber);
console.log("Converted to Number:", convertedNumber, "| Type:", typeof convertedNumber);
document.writeln("Original (string):", strNumber, "| Type:", typeof strNumber, "<br>");
document.writeln("Converted to Number:", convertedNumber, "| Type:", typeof convertedNumber, "<br>");


// Convert a boolean value to a string using String()
let boolValue = true;
let convertedString = String(boolValue);
console.log("\nOriginal (boolean):", boolValue, "| Type:", typeof boolValue);
console.log("Converted to String:", convertedString, "| Type:", typeof convertedString);
document.writeln("\nOriginal (boolean):", boolValue, "| Type:", typeof boolValue, "<br>");
document.writeln("Converted to String:", convertedString, "| Type:", typeof convertedString, "<br>");


// Convert a value to a boolean using Boolean()
let value = 0; // This is a falsy value
let convertedBoolean = Boolean(value);
console.log("\nOriginal (value):", value, "| Type:", typeof value);
console.log("Converted to Boolean:", convertedBoolean, "| Type:", typeof convertedBoolean);
document.writeln("\nOriginal (value):", value, "| Type:", typeof value, "<br>");
document.writeln("Converted to Boolean:", convertedBoolean, "| Type:", typeof convertedBoolean, "<br>", "<br>");

// Part 4: Challenges

// Challenge 1:
function detectType(value) {
  if (typeof value === "string") {
    console.log("The value is a string.");
     document.writeln("The value is a string.", "<br>");

  } else if (typeof value === "number") {
    console.log("The value is a number.");
     document.writeln("The value is a number.", "<br>");

  } else if (typeof value === "boolean") {
    console.log("The value is a boolean.");
    document.writeln("The value is a boolean.", "<br>");

  } else if (typeof value === "object") {
    console.log("The value is an object.");
  document.writeln("The value is an object.", "<br>");

  } else if (typeof value === "undefined") {
    console.log("The value is undefined.");
    document.writeln("The value is undefined.", "<br>");

  } else if (typeof value === "function") {
    console.log("The value is a function.");
    document.writeln("The value is a function.", "<br>", "<br>");
  } else {
    console.log("Unknown data type.");
    document.writelnS("Unknown data type." , "<br>" , "<br>");
  }
}

// Test the function
detectType("Hello");     // string
detectType(123);         // number
detectType(true);        // boolean
detectType({name: "Ali"}); // object
detectType(undefined);   // undefined
detectType(function() {}); // function

// Challenge 2: 

let userInput = prompt("Enter a number:");
let convertedNumber2 = Number(userInput);

if (!isNaN(convertedNumber2)) {
  let result = convertedNumber2 + 10;
  console.log("Original Input:", userInput);
  document.writeln("Original Input:", userInput, "<br>");
  console.log("Converted to Number:", convertedNumber2);
  document.writeln("Converted to Number:", convertedNumber2, "<br>");
  console.log("After adding 10:", result);
  document.writeln("After adding 10:", result, "<br>");
} else {
  console.log("Error: You did not enter a valid number.");
  document.writeln("Error: You did not enter a valid number.", "<br>");
  
}
