// QUESTION-1
// program to find the largest among three numbe
// take input from the user
/*Use of prompt:prompt is a pre defined function function which is used to accept the values from the users*/
const num1 = prompt("Enter first number: ")
const num2 = prompt("Enter second number: ")
const num3 = prompt("Enter third number: ")
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);


 //QUESTION-2
 //not sure about this answer
 const a1 = {
    admin : "john",
    name : "fname"
}
a1 ['admin'] = "fname"
console.log(a1) 

 //QUESTION-3
 let a = 2;
 let b = "Dev";
 let c = true;
 let d = undefined;
 let e = null;
 
 console.log(typeof a,b,c,d,e)


//QUESTION-4
5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null //false