/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = (Number("5")) - 2; //Previously "5" a String value. But I converted it to a numeric value using Number
console.log("The result is: " + result);

let isValid = Boolean("false"); // here the value is in String quotes "false", any value which is not 0, Null, undefined and empty string "" are truthy. which is why "false" is not FALSE
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = (Number (age) + 5); //Previously age= "25"  was a String value. But I converted it to a numeric value using Number
console.log("Total Age: " + totalAge);

let Apples = "7.99";
let grapes = "4.08" ;
let totalValue = (parseFloat(Apples) + parseFloat(grapes)); //One example of explicit type conversion
console.log (totalValue);

//before implicit type conversion
let total = "45" + 5;  
console.log(total);   
 
let momAge = "34";
let dadAge = 40;
let parentsAge = (momAge == dadAge); //implicit conversion of momAge String to a Number
console.log (parentsAge);

let Sun = true;
if (Sun){
  console.log("It's HOT today!")
  if (null){
    console.log("It's Truth") //null will not execute and falsy
  }
}