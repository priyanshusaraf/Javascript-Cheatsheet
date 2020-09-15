//cheatsheet for tutoring classes
//printing something out to the console
console.log("hello world");

//defining a variable

var variable_name = "hello";
//all the data types in javascript

//string = "anything within quotes is a string"
//number(int) = 12323
//number(float) = 123.3435
//boolean = true
//boolean = false
//boolean = null
//printing a variable out
console.log(variable_name);
//making an alert box:
alert("hello! how you doin'");

//doing logical stuff with code
//addition:
var num1 = 2;
var num2 = 1;
console.log(num1 + num2);
// if else statements in js
name = "hello";
if (name == "hello") {
  console.log("hey");
} else if (name == "bye") {
  console.log("bye!");
} else {
  console.log(
    "Oops! you said something we werent expecting! please try something else "
  );
}
//switch statements in js
var name = "Priyanshu";
switch (name) {
  case "Thato":
    console.log("hey there thato!");
  case "Udayveer":
    console.log("hey Uday! hows life!");
  case "Nikhilesh":
    console.log("hey Nikhilesh! how you doing!");
  default:
    console.log("Its pri you guys! LETS GOO");
}
//Try to change the name to That, Udayveer, or Nikhilesh, and then youll see that the console.log meant for those parameters doesnt come
//this is because the default has been set to console log my greet. what can we do to prevent that?
//we can use the break statement for that purpose
name = "Priyanshu";
switch (name) {
  case "Thato":
    console.log("hey there thato!");
    break;
  case "Udayveer":
    console.log("hey Uday! hows life!");
    break;
  case "Nikhilesh":
    console.log("hey Nikhilesh! how you doing!");
    break;
  default:
    console.log("Its pri you guys! LETS GOO");
}
//and now if you change the name to yours, and comment out the first switch param, youll see your greet printed out.
//default is like an else statement if nothing works, that default is printed out

//how to manipulate the dom with js:
dom = document.getElementById("root").innerHTML = "hello";
// making functions in javascript:
function greet() {
  var hello = "hello ";
  console.log(hello + alert_prompt);
}

greet();
//making functions with parameters:
function greet(name, age) {
  console.log("hello " + name + "!" + "you are " + age + " years old!");
}
//prompting something from the user:
alert_prompt = prompt("hey you! please enter your name here!");
//prompting a number from the user
age = parseInt(prompt("please enter your age"));
greet(alert_prompt, age);

//while loops and for loops:
num3 = 0;
while (num3 < 100) {
  num3++;
  console.log(num3);
}
//doing the same thing we did above in a for loop:
for (let num4 = 0; num4 <= 100; num4++) {
  console.log(num4);
}
//focus more on for loops, they are better, unless you really need while loops, focus on for loops
//better way to write "var" is "let", we will be using let from now on

//objects:
//an example:

let name = {
  first: "Nick",
  last: " Rose",
};
//printing the object
console.log(name);
//how to access an attribute of an object
let first_name = name.first;
let last_name = name.last;
//printing the variables
console.log(first_name + last_name);

//arrays in js:
//defining an empty array
/* 
let arr = [];
//Or:
let array = new Array();
//both of them will initialise an empty array;

//making a grocery list:
//now we can use the same arays we made earlier:
arr = ["carrots", "milk", "bread", "bananas"];
console.log(arr);

*/
//functions in strings:

let fruits = "banana";
let more_fruits = "bananaapple"; //new line
console.log(more_fruits.length); //finding the length of the string in numbers; counting starts at 1

//finding a particular part of the string using the indexOf() function
console.log(more_fruits.indexOf("anaa")); //returns the index of the element. if the element is not present at all, it displays a -1
console.log(more_fruits.slice(2, 5)); //includes 2, and excludes the 5th element

//replacing a particular part of the string with something else
console.log(more_fruits.replace("anaa", "hello"));
//changing the form of the string to uppercase
console.log(more_fruits.toUpperCase());
//changing the form of the string to lowercase
let case_upper = "UPPER";
console.log(case_upper.toLowerCase());
//getting the character using its index position
console.log(case_upper.charAt(3)); //counting from 0
//OR,
console.log(case_upper[0]);
//splitting a string with a comma using the .split function
console.log(case_upper.split("")); //splits by character
//if you split a normal string with a comma, nothing much happens, you are returned the same string again
//in case of a csv file, say that you have a file like the one below:
let csv =
  "banana, badPanda, apple, cleverprogrammer, priyanshu, python, javascript";
//and then we can split it by the comma
console.log(csv.split(",")); //this splits by comma

//javascript arrays
//making an array
fruits = ["banana", "apple", "pineapple", "etc-"];
//or
fruits = new Array("banana", "apple", "pineapple", "etc-");

console.log(fruits[1]); //accessing values at any index, change the index number to get a new value
fruits[0] = "pear"; //changing the value at index of 0
//looping through an array
for (let i = 0; i < fruits.length; i++) {
  //declaring the for loop, accessing the list through list.length function
  console.log(fruits[i]); //logging the value of i in the fruits list in the console
}
//array: common methods

console.log(fruits.toString()); // changing the array to a string
console.log(fruits.join("*")); //we can join it by anything that we put inside the ''

//popping the last element from an array
// fruits.pop() this line is commented, the line of code below will show you exactly what the difference looks like
//we can see the change through the line of code below
console.log(fruits, fruits.pop(), fruits); //firstly, printing out the initial fruits line, then popping out the last element and returns it to you, and then printing out the newly made array
console.log(fruits.push("blah blah blah"), fruits); //appends an element to the array, like stacks
fruits[4] = "hello!"; //adds new fruit
console.log(fruits[4]);
//the better way of adding items to the list is going to be through this:
fruits[fruits.length] = "new element!";
//doing the opposite of pop
fruits.shift(); //removing the first element from the list. DONT USE IT THAT MUCH
fruits.unshift("kiwi"); //adds the first element to the array
console.log(fruits);
//joining 2 arrays
vegetables = ["carrot", "brocolli", "mushroom"];

allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
// sorting an array
let numArray = [1, 233, 7, 8, 3, 6];
console.log(
  numArray.sort(function (a, b) {
    return a - b;
  }) //returns an array which is sorted in ascending order
);
let numArray = [1, 233, 7, 8, 3, 6];
console.log(
  numArray.sort(function (a, b) {
    return b - a;
  }) //returns an array which is sorted in descending order
);

//looping through a list to add items to it
//making a new array
var empty = new Array(); //here i am using var because theres something called scope of variables in js. we'll discuss about it in the classes
for (let i = 0; i < 10; i++) {
  empty.push(i);
}
console.log(empty); //a very common thing that you are gonna be using a lot in js.
//remember to play around with this pattern, it is extremely important that you know how to
//deal with for loops and arrays

//coming to objects in js
//creating a new object in js
let obj = {
  first: "Priyanshu",
  last: "Saraf",
  age: "13",
  friends: "many",
};
console.log(obj);
//accessing attributes of the object
console.log(obj.first);
//changing the age value of the obj
obj.age = 14;
//logging the age to the console
console.log(obj.age);
