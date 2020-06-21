//Q1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var first_name = window.prompt("Enter first name: ")
var last_name = window.prompt("Enter last name: ")
console.log("AssalamuAlaikum Mr."+first_name+" "+last_name+"! "+"How are you ")

//Q2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var fav_mobile = window.prompt("Enter your fav mobile model: ")
console.log(fav_mobile)
console.log("Length of the string is: "+fav_mobile.length)

//Q3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

var a = "Pakistan"
console.log("The index n is located at: "+a.indexOf("n"))

//Q4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var b = "Hello World"
console.log("The index l is located at: "+b.lastIndexOf("l"))

//Q5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var pak = "Pakistani"
console.log("The character at 3rd index in Pakistani is: "+pak.slice(3,4))

//Q6. Repeat Q1 using string concat() method.

var str_1 = "Syed Zohair Hasan"
var str_2 = "Hashmi"
var res = str_1.concat(str_2);
console.log(res)

//Q7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city_1 = "Hyder"
var city_2 = "abad"
var n = city_1.concat(city_2)
console.log("Before Replacement: "+n)
var x = city_1.replace("Hyder","Islam")
var y = x.concat(city_2)
console.log("After Replacement: "+y)

Q8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”

var sentence = "Ali and Sami are best friends. They play cricket and football together."
var x = sentence.replace(/and/g,"&")
console.log(x)

//Q9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var num_1 = 472
var str = (""+num_1)
document.write("Type of '472' is : "+typeof str)
document.write("<br><br> Type of "+num_1+" is : "+typeof num_1)

//Q10. Write a program that takes user input. Convert and show the input in capital letters.

var str_1 = "peanuts"
document.write("<br><br>String in Uppercase: "+str_1.toUpperCase(str_1))

//Q11. Write a program that takes user input. Convert and show the input in title case.

var str_1 = "javascript"
document.write("<br><br>String in Titlecase: "+str_1.charAt(0).toUpperCase()+ str_1.substr(1).toLowerCase())

//Q12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

var num_1 = 35.36
document.write("<br><br>35.36: "+num_1.toString().replace(".",""))

//Q13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

var str_1 = prompt("Enter any string: ")
document.write("<br><br>"+str_1)
var display;
var arr=[];
var spilt = str_1.split([])
document.write("<br><br>"+spilt)
for(var i=0;i<str_1.length;i++)
{
    arr[i] = str_1.charCodeAt(i);
    while(arr[i]==33 ||arr[i]==44||arr[i]==46||arr[i]==64)
    {
        alert("Please enter a valid username: ");
        break;
    }
}

Q14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

var item = new Array()
item[0] = "cake"
item[1] = "apple pie"
item[2] = "cookie"
item[3] = "chips"
item[4] = "patties"
document.write(item)
// document.write(item.length)
// document.write(item[1])
var search = prompt("What do you want: ")
for(var i=0;i<item.length;i++)
{
    while(item[i] == search)
    {
        alert("Your item is in the list:")
        break;
    }
}

//Q15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

//Q16.Write a program to convert the following string to an array using string split method.

var str_1 = "University Of Karachi";
var arr =str_1.split([]);
document.write("<br>\n"+arr)

Chapter 26-30
console.log("Chapter 26-30")
//Q1. Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number
console.log("Q1")
var val = 3.45214
console.log("Number: "+val)
var roundoff = Math.round(3.45214)
console.log("Round Off: "+roundoff)
var floorval = Math.floor(3.45214)
console.log("Flooring off: "+floorval)
var ceilval = Math.ceil(3.45214)
console.log("Ceil: "+ceilval)


//Q2. Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number
console.log("Q2")
var val = -2.673
console.log("Number: "+val)
var roundoff = Math.round(-2.673)
console.log("Round Off: "+roundoff)
var floorval = Math.floor(-2.673)
console.log("Flooring off: "+floorval)
var ceilval = Math.ceil(-2.673)
console.log("Ceil: "+ceilval)

//Q3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

console.log("Q3")
var abs = Math.abs(-4)
console.log(abs)
var abs_1 = Math.abs(5)
console.log(abs_1)

//Q4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
console.log("Q4")

var dice = Math.floor(Math.random()*6)+1
console.log("The value of Dice: "+dice)
var dice_1 = Math.floor(Math.random()*6)+1
console.log("The value of Dice: "+dice_1)

//Q5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

var prob1 = Math.floor(Math.random() * 2) +1;

var prob2 = Math.floor(Math.random() * 2) +1;

if( prob1 === prob2){
   console.log('You Got TAIL');
 }else{
   console.log('You Got HEAD');
 }

//Q6. Write a program that shows a random number between 1 and 100 in your browser.

var num_1 = (Math.floor(Math.random()*100)+1)
console.log("The random number between 1 to 100 is: "+num_1)
var num_2 = (Math.floor(Math.random()*100)+1)
console.log("The random number between 1 to 100 is: "+num_2)

//Q7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

//Q8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
var x = (Math.floor(Math.random()*10)+1)
var guess = 1
var y = prompt("Enter any number between 1-10: ")

if (x==y){
    alert("You guessed the right number in: "+guess+" guessess")
}else if(x>y){
    guess++;
    alert("OOPS sorry try a smaller number: ")
}else{
    guess++;
    alert("OOPS sorry try a greater number: ")
}

Chapter(31-34)
console.log("Chapter 31-34 Date Methods")
//Q1. Write a program that displays current date and time in your browser.

var tdate = new Date()
console.log(tdate)

//Q2. Write a program that alerts the current month in words. For example December.

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();
console.log("Current month is: " + monthNames[d.getMonth()]);