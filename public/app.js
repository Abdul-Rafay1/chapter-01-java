// -----------------------------------------CHAPTER 1 STARTS HERE----------------------------------------------

//q1
// alert("Welcome Fam have a Nice Day");

// //q2
// alert("Error! Please enter a valid password.");

//q3
// var l1= "Welcome to JS land...";
// var l2 = "Happy Coding!";
// alert(l1 + "\n" + l2);

//q4
// alert("Welcome to JS Land.....");
// alert("Happy Coding"+ "\n" + "Prevent this page from creating additional dialogs." );

//q5
// alert("Check your console");
// console.log("Hello.... I can run JS through my web browser's Console");

// -----------------------------------------CHAPTER 1 ENDS HERE----------------------------------------------


// -----------------------------------------CHAPTER 2 STARTS HERE----------------------------------------------

//q1
// var username = "Ammad ud din";
// console.log(username);

//q2
// var myName = "Ammad Ud Din Muhammd Bin Qasim";
// console.log(myName);

// q3
// var message = "Hello World";
// alert(message);

// q4
// var name = prompt("What is your name?");
// var age = +prompt("How Old are you?");
// var proffesion = prompt("What is your Proffesion?");
// alert("Your name is "+ name);
// alert("You are " + age + " Years old");
// alert("A certified " + proffesion);

// q5
// var email = prompt("Enter Your Email");
// alert(email);

// q6
// var book = "A Smarter Way to Learn Java Script";
// alert("I am trying to learn from the Book " + book);

//q7
// var dispmessage = "Yahh! I can write HTML content through JavaScript";
// document.write(dispmessage);

// q8
// for(i=1; i<=5; i--){
//     for(j=1; j<=i; j--){
//         document.write(j+ "Pizza")
//     }
// }

//q9
// var symbols = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(symbols);
// -----------------------------------------CHAPTER 2 ENDS HERE----------------------------------------------

// -----------------------------------------CHAPTER 3 STARTS HERE--------------------------------------------

// q1
// var myage= "20"
// alert("I am "+ myage +"Years Old");

//q2
// var counterContainer = document.querySelector(".website-counter");
// var visitCount = localStorage.getItem("page_view");

// if (visitCount) {
//   visitCount = Number(visitCount) + 1;
//   localStorage.setItem("page_view", visitCount);
// } else {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
// }
// counterContainer.innerHTML = visitCount;
 
// alert("You visit this website "+ visitCount +" times");

//q3
// var birth_year= 2002;
// document.write("My birthyear is " + birth_year +"\n"+"Data type of my decleared variable is number");

//q4
// var v_name = prompt("Enter you name! ");
// var v_prd = prompt("Enter your Product title! ");
// var quantity= prompt("Enter your product quantity ");
// document.write(v_name +" Ordered "+ quantity + v_prd + "(s)" +" On XYZ Clothing Store");

// -----------------------------------------CHAPTER 3 ENDS HERE--------------------------------------------

// ---------------------------------------CHAPTER 4 STARTS HERE--------------------------------------------

// q1
// var name= "Ammad ud din Muhammad", father_name = "Muhammad Qasim", age = 20;

// q2
// 5 legal variable names
// var camelCase = "lowercase and then uppercase charecters";
// var dine4us = "pizza";
// var I_AM_HERE = fasle;
// var _Hello_ = "a nice greeting"
// var $_$ = "money in the eyes";

//5 illegal variable names
// var total% = 000;
// var 2fast2catch = "error";
// var function = false;
// var class = "not a variable";

// q3


// -----------------------------------------CHAPTER 4 ENDS HERE--------------------------------------------

// ---------------------------------------CHAPTER 5 STARTS HERE--------------------------------------------

//q1
// var num1 = +prompt("Enter your First Number");
// var num2 = +prompt("Enter your Second Number");
// var total = num1 + num2;
// var doc = document.write("Sum of "+ num1 +" and "+ num2 + " is " +  total);

// q2
// for subtraction
// var num1 = +prompt("Enter your First Number");
// var num2 = +prompt("Enter your Second Number");
// var total = num1 - num2;
// var doc = document.write("Subtraction of "+ num1 +" and "+ num2 + " is " +  total);
// // for multiplication
// var num1 = +prompt("Enter your First Number");
// var num2 = +prompt("Enter your Second Number");
// var total = num1 * num2;
// var doc = document.write("Multipication of "+ num1 +" and "+ num2 + " is " +  total);
// // for division
// var num1 = +prompt("Enter your First Number");
// var num2 = +prompt("Enter your Second Number");
// var total = num1 / num2;
// var doc = document.write("Division of "+ num1 +" and "+ num2 + " is " +  total);
// for Modulas
// var num1 = +prompt("Enter your First Number");
// var num2 = +prompt("Enter your Second Number");
// var total = num1 % num2;
// var doc = document.write("Modulas of "+ num1 +" and "+ num2 + " is " +  total);

// q3
// var number;
// document.write("Value after variable decleration is: \n "+number);

// number = 5;
// document.write(" Value after variable decleration is: \n "+number);

// number += 1;
// document.write(" Value after increment is: \n "+ number);
// number = number + 7;
// document.write(" Value after addition is: \n "+ number );

// number -= 1;
// document.write(" Value after decrement is: \n "+ number);

// number = number % 3;
// document.write(" The remainder is: \n "+ number);

// q4
// var ticker_cost = 300;
// var number_of_tickets = +prompt("How many tickets you want to buy?");
// var price = ticker_cost * number_of_tickets;
// document.write("Total cost to buy "+ number_of_tickets + " tickets to a movie is " + price +"PKR");

// q5
// var number = +prompt('Enter an intege \n:  ');
// for(var i = 1; i <= 10; i++) {
//     var result = i * number ;
//     document.write(number * i +"\n");
// }

// q6
// var celsius = +prompt("Enter your temprature in Celsius");
// var cTemp = celsius;
// var cToFahr = celsius * 9 / 5 + 32;
// document.write(celsius +"°C" + "is" +cToFahr +"°F");

// var fahrenhite = +prompt("Enter our tempature in Fahrenhite");
// var fTemp = fahrenhite;
// var fahrtoC = fahrenhite * 1.8 + 32 + "\n";
// document.write(fahrenhite +" °F" + " is" + fahrtoC +" °C");

// q7
// var price_item_1 = +prompt("Enter your First item price");
// document.write("\n");
// document.write("The price of First item is: "+price_item_1)
// var quatity = +prompt("Enter your First item Quantity: ");
// document.write("\n");
// document.write("The Quantity of First item is: "+  quatity);

// var price_item_2 = +prompt("Enter your Second item price");
// document.write("\n");
// document.write("The price of Second item is: "+price_item_2)
// var quatity_2 = +prompt("Enter your Second item  Quantity: ");
// document.write("\n");
// document.write("The Quantity of Second item is: "+  quatity_2);
// var ship_price = +prompt("Enter your shipping coast");
// document.write("\n");
// document.write("The Shipping Price is: "+ ship_price);

// document.write("\n");
// var total_price = price_item_1 * quatity + price_item_2 * quatity_2 + ship_price;
// document.write("\n");
// document.write("Total Coast of your order is: " + total_price);

// q8
// var total_marks = +prompt("Enter your total marks");
// document.write("\n");
// document.write("Total Marks: " + total_marks);

// var marks_obtained = +prompt("Enter your obtained marks");
// document.write("\n");
// document.write("Obtained Marks: " + marks_obtained);

// var percentage;
// percentage = marks_obtained / total_marks * 100;
// document.write("\n");
// document.write("Your Percentage is: " + percentage);

// q9
// var us_dollar = 10;
// var saudi_riyals = 25;
// var dollar_into_pkr = us_dollar * 104.80;
// document.write("\n");
// document.write("10 dollars into PKR is: " + dollar_into_pkr);
// document.write("\n");
// var riyals_into_pkr = saudi_riyals * 104.80;
// document.write("\n");
// document.write("25 Riyals into PKR is: " + riyals_into_pkr);
// document.write("\n");
// var total_exchange = dollar_into_pkr + riyals_into_pkr;
// document.write("Total Currency in PKR is: "+ total_exchange);

// q10
// var numberr = +prompt("Enter Your Number");
// numberr = numberr + 5 * 10 / 2;
// document.write("The Resuly of your Operation is: " + numberr);

// q11
// var current_year = +prompt("Enter the current year ");
// document.write("Current Year is: " + current_year);
// document.write("\n");

// var birth_year = +prompt("Enter Your Birth year ");
// document.write("Your Birth Year is: " + birth_year);
// document.write("\n");

// var calculator = current_year - birth_year;
// document.write("Your Age is: "+ calculator);

// q12
// var radius_of_a_circle =+prompt("Enter the radius of a circle");
// document.write("Radius of a circle is: " + radius_of_a_circle);
// document.write("\n");

// var circumference = 2 * radius_of_a_circle * 3.142;
// document.write("The Circumference of a circle is: " + circumference);
// document.write("\n");

// var area_of_a_circle = 3.142 * radius_of_a_circle**2;
// document.write("Area of a circle is: " + area_of_a_circle);
// document.write("\n");

// q13

// var fav_snacks = +prompt("Enter your Favourite snacks");
// document.write("Favourite Snack: "+ fav_snacks);
// document.write("\n"); 

// var age = +prompt("Enter your Current age");
// document.write("Your age is: "+ age);
// document.write("\n"); 

// var max_age = +prompt("Enter your maximum age");
// document.write("Your maximum age is: "+ max_age);
// document.write("\n");

// var amount_of_snacks_per_day = 4;
// document.write("Snacks per day: "+ amount_of_snacks_per_day);
// document.write("\n");

// var total_life = (max_age - age) * amount_of_snacks_per_day;
// document.write("You will need "+ total_life + fav_snacks + " to last you until the ripe old age of " + max_age);
// document.write("\n");

// -----------------------------------------CHAPTER 5 ENDS HERE--------------------------------------------

// -----------------------------------------CHAPTER 6-9 STARTS HERE----------------------------------------

// q1
// var num = +prompt("Enter you number ");
// document.write('Results \n');
// document.write("Your Number is: " + num);
// increment 1.0
// num_inc = ++num;
// document.write(" The value of ++a is:  \n" + num);
// document.write("Now the value of a is: "+ num_inc);
//  decrement 2.0
// num_inc_2 = ++num_inc;
// document.write(" The value of ++a is:  \n" + num);
// document.write("Now the value of a is: "+ num_inc_2);
//  decrement 1.0
// num_dec = --num_inc_2;
// document.write(" The value of ++a is:  \n" + num);
// document.write("Now the value of a is: "+ num_dec);
//  decrement 2.0
// num_dec_2 = num_dec--;
// document.write(" The value of ++a is:  \n" + num);
// document.write("Now the value of a is: "+ num_dec_2);

// q2
// var a =2 , b= 1;
// var res_a =  --a;
// var res_b =  --a - --b;
// var res__b = --a - --b + ++b;
// var res_b_ =  --a - --b + ++b + b--;
// var result = --a - --b + ++b + b--;

// document.write("--a is  : "+ res_a);
// document.write("--a - --b is  : "+ res_b);
// document.write("--a - --b + ++b is  : "+ res__b);
// document.write("--a - --b + ++b + b-- is  : "+ res_b_);
// document.write("The result of --a - --b + ++b + b-- is  : "+ result);

// q3
// var greets = prompt("Enter Your name");
// document.write("Hi " + greets + " Have a nice day!");

// q4
// var sub_1 = prompt("Enter Your Subject 1 name");
// var sub_2 = prompt("Enter Your Subject 2 name");
// var sub_3 = prompt("Enter Your Subject 3 name");
// var total = 100;
// var total_marks_of_subjects = 300 ;
// obtained marks 
// var sub1_obt = +prompt("Enter Your "+ sub_1 + " obtained marks");
// var sub2_obt = +prompt("Enter Your "+ sub_2 + " obtained marks");
// var sub3_obt = +prompt("Enter Your "+ sub_3 + " obtained marks");
// percentage of each subject
// var per_sub1 =(sub1_obt / total)*100; 
// var per_sub2 =(sub2_obt / total)*100; 
// var per_sub3 =(sub3_obt / total)*100; 
//total marks
// var total_subj_marks = sub1_obt + sub2_obt + sub3_obt;
// percentage
// var percentage_of_subjs = (total_subj_marks / total_marks_of_subjects) *100;
// using doc write
// document.write(sub_1 +"Total Marks \n: "+ total +" Obtained marks \n: "+ sub1_obt +" Percentage \n: "+ per_sub1 );
// document.write("\n");
// document.write(sub_2 +"Total Marks \n: "+ total +" Obtained marks \n: "+ sub2_obt +" Percentage \n: "+ per_sub2 );
// document.write("\n");
// document.write(sub_3 +"Total Marks \n: "+ total +" Obtained marks \n: "+ sub3_obt +" Percentage \n: "+ per_sub3 );
// document.write("\n");
// document.write("Total Percentage of all subjects: "+ percentage_of_subjs+"%"+ '\n');
// document.write("\n");
// document.write("Total Marks of all subjects: "+ total_marks_of_subjects + '\n');

// -----------------------------------------CHAPTER 6-9 ENDS HERE-------------------------------------------

// -----------------------------------------CHAPTER 9-20 STARTS HERE----------------------------------------

// q1
// var city = prompt("Enter Your City Name");
// city = city.toUpperCase(city);
// if(city =="KARACHI"){
//  document.write("WELCOME TO CITY OF LIGHTS!");
// }
// else{
//   document.write("WELCOME TO "+ city);  
// };

// q2
// var gender = prompt("Enter your Gender");
// gender = gender.toUpperCase(gender);
// if(gender == "Male"){
//     document.write("GOOD MORNING SIR!");
// }
// else{
//     document.write("GOOD MORNING MAAM!");
// }

// q3
// var color = prompt("Enter the signal color to know what message the light is teaches you");
// color = color.toUpperCase(color);
// if(color=="RED"){
//     document.write("Must Stop");
// };
//     if(color == "Yellow")
//     document.write("Ready to move");
//     else{
//         document.write("Move On");
//     };

// q4
// var fuel = +prompt("Enter your remaining fuel");
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car.");
// } else {
//     document.write("Continue your ride.");
// };

// q5
// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true"); 
// }
// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true");
//  }
// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
//     } 
//     if (c === 13){ 
//         alert("condition 2 is true");
//     } 
//         if (++c < 14){ 
//             alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); 
//     }
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost)
// { 
//     alert("The cost equals");
//  }
// if (true){ 
//     alert("True"); } if (false){ alert("False");
//  }
// if("car" < "cat"){ 
//     alert("car is smaller than cat");
//  }

// q5
// function guess_the_Number() {
//     var random = Math.floor(Math.random() * 10) + 1;
//     var number = +prompt('Guess a number from 1 to 10: ');
//     while(number !== random) {
//         number = +prompt('Guess a number from 1 to 10: ');
//     }
//     if(number == random) {
//         console.log('You guessed the correct number.');
//     }
//   }
// guess_the_Number();

// q6
// var number;
// number = +prompt("Enter your number");
// if (number % 3 == 0) {
//     document.write("This number is divisible by 3");
// } else {
//     document.write("This number is not divisible by 3");
// }

// q7
// var number;
// number = +prompt("Enter your number");
// if (number % 2 == 0) {
//     document.write("This number is Even");
// } else {
//     document.write("This number is Odd");
// }

// q8

// var temprature;
// temprature = +prompt("Enter the current temprature");
// if (temprature > 40) {
//     document.write("Its too hot outside");
//     elseif (temprature > 30) {
//         document.write("The Weather today is Normal");
//     }
//     elseif (temprature > 20) {
//         document.write("The Weather today is Normal");
//     }
//     elseif(temprature > 10){
//         document.write("OMG! Today weather is so Cool");
//     }
// }

// q9

// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));
// let result;
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }
// document.write("The result is: " + result);

// q10

// var num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { 
//   document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//   document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    document.write("The values "+ num1+ " and "+num2+ " are equal.");
//   }

// q11

// var number = +prompt("Enter a number: ");
// if (number > 0) {
//     document.write("The number is positive");
// }
// else if (number == 0) {
//   document.write("The number is zero");
// }
// else {
//      document.write("The number is negative");
// }

// q12

// var input = prompt("Enter an alphabet to see its a vowel or not");
// input = input.toLowerCase(input);
// var vowels = ["a", "e", "i", "o", "u"];
// if (input == vowels) {
//     document.write("Its a vowel");
// } else {
//     document.write("Its not a vowel");
// }

// q13
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     document.write("Good Morning");
// }
// else {
//     document.write("Good Evening");
//  }

// q14
// var password =+prompt("Enter your Password");
// var correct_pass;
// correct_pass = user_pass;
// user_pass = 4994;
// if (password =! user_pass) {
//     document.write(password + " this is a wrong password");
// }
// else {
//     document.write("Correct! The password you add is matched with the original password");
// }   

// q15
// var std_names = [];

// q16
//  var str = ["Action", "Drama", "Criime", "Mystry"];

// q17
// var num = [1, 2, 30, 110];

// q18
// var bool = [True, False];

// q19
// var mixed = [True, False, "Action", "Drama", "Criime", 2, 30, 110];

// q20
// var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write(education + '\n');

// q21
// var student_names = ['Alia', 'Arooj', 'Mariyam'];
// var student_scores = [89, 77, 91];
// var total_marks_of_std = 500;
// var percent = (student_scores / total_marks_of_std) * 500;
// document.write(student_names+ student_scores + percent);

// q22
// var arr = ["This", "is", "a", "cat"];
// var output = arr.toString();
// document.write(output);

// q23
// var Array_of_arrays = [
//     ["Code"]
//     ["Eat"]
//     ["Sleep"]
//     ["Repeat"]
// console.table(Array_of_arrays);
// ];

// q24
// var multidimension = [
//     [0, 1, 2, 3]
//     [1, 0, 1, 2]
//     [2, 1, 0, 1]
// ];
// console.table(multidimension);

// q25
// document.write('for loop');
// for(let i=1;i<=10;i++)
// {
//   document.write(i);
// }

// q26
// var number = +prompt("Enter an integer");
// var length = +prompt("Enter your range");
// for (let i = 1; i < length; i++) {
//     var result = i * number ;
//     document.write(result);
// }

// q27
// var arr = ['Apple', 'Banana', 'Strawberry', 'Orange', 'Mango'];
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i]);
// }

// q28
//  for (let i = 0; i <= 10; i++) {
//     document.write(i)
//  }

//  for (let i = 10; i > 0; i++) {
//     document.write(i)
//  }
//  for (let i=2; i <= 22; i+=2) {
//     console.log('Count', i);
// } 
// for (let i=3; i <= 21; i+=2) {
//     console.log('Count', i);
// }

// q29
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// A = A.toUppercase(A);
// var search = prompt("Welcome to ABC Bakery. What do you want to order Sir / Maam");
// if (search == A) {
//     document.write(A + " is available in our Bakery");
// } else {
//     document.write(A + " this is not available in our Bakery");
// }

// q30
// var array = [24, 53, 78, 91, 12];
// var largest= 0;
// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }
// document.write("The largest number is: " + largest);

// q31
// var arr = [24, 53, 78, 91, 12];
// 		var smallest = arr[0];
// 		for(var i=1; i<arr.length; i++){
// 			if(arr[i] < smallest){
// 				smallest = arr[i];   
// 			}
// 		}
// document.write("The smallest value is: " + smallest);

for (let i = 0; i < 100; i++) {
    var element = array[i*5];
}
document.write(element);