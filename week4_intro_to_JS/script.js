/******************************************Index Script*******************************************/

// 1. Using elements
// find the element with Id = heading1, and set its innerHtml text to text provided.
document.getElementById("heading1").innerHTML = "This is JavaScipt";
// text
document.getElementById("paragraph1").innerHTML = "I am having fun";
document.getElementById("paragraph2").innerHTML = "5+6";
// numbers
document.getElementById("paragraph3").innerHTML = 5 + 6;
// text + numbers
document.getElementById("paragraph4").innerHTML = "Number: " + 6;

// 2. Variables (text or number) -> var
// declaring a variable
var text1;
var text2;

// assigning a value
text1 = "Hello everyone ";
text2 = "I love learning JS";

// declaring a variable and assigning a value
var text3 = "I will study until: " + (3 + 5);

// displaying in the Html elements using their id's
document.getElementById("paragraph5").innerHTML = text1;
document.getElementById("paragraph6").innerHTML = text1 + text2;
document.getElementById("paragraph7").innerHTML = text3;

// 3. Conditionals
var userInputpassword = "007";
var actualPassword = "07";

var successful = "Success: You are logged in";
var error = "INVALID! LOGIN DETAILS, Try again";

if (userInputpassword == actualPassword) {
  document.getElementById("paragraph8").innerHTML = successful;
} else {
  document.getElementById("paragraph8").innerHTML = error;
}

// 4. Functions -> Group of intructions giving feedback.
function changeText() {
  if (document.getElementById("press").innerHTML == "Login") {
    document.getElementById("press").innerHTML = "Success Logged In";
  } else {
    document.getElementById("press").innerHTML = "Login";
  }
}

// 5. Function Parameters
function addNumber(num1, num2) {
  document.getElementById("addition").innerHTML = num1 + num2;
}
addNumber(8, 6);

// 6. Function return values
function multplyNumbers(num1, num2) {
  return num1 * num2;
}
function display() {
  document.getElementById("multiply").innerHTML = multplyNumbers(3, 3);
}
display();

// 7. Varibale scope -> visible and usable
// Global -> visible and usable everywhere.
function sumFunction() {
  var sumVariable = 100;

  // sumVariable is visible and usable only in this function.
  document.getElementById("sumFun").innerHTML = sumVariable;
}
sumFunction();



/******************************************Login Script*******************************************/
function verifyUser() {
  var unsername = document.getElementById("usernameInput").value;
  var password = document.getElementById("passwordInput").value;

  // calling the below checkUserCredentials
  checkUserCredentials(unsername, password);
}

function checkUserCredentials(username, password) {
  var systemUserName = "user";
  var systemPassword = "12345";

  if (username == systemUserName && password == systemPassword) {
    document.getElementById("message").innerHTML = "Success: Logged in";
  } else {
    document.getElementById("message").innerHTML =
      "Invalid! Check your credentials and try again";
  }
}



/*****************************************Weather Script******************************************/
function buttonPressed() {
  var weatherSelected = document.getElementById("weather").value;
  var advice;

  switch (weatherSelected) {
    case "sunny":
      advice = "Wear you sun classed";
      break;
    case "windy":
      advice = "Wear a jacket";
      break;
      break;
    case "rainy":
      advice = "Wear a rainy coat and bring your umbrella";
      break;
      break;
    case "snowy":
      advice = "Dress warely.";
      break;
      break;
    case "cloudy":
      advice = "Carry a jacket. It might rain.";
      break;
  }
  document.getElementById("outpuText").innerHTML = "Weather advice: " + advice;
}



/************************************stringAndNumbers Script**************************************/
// string numbers works for the following operations -, *, /
// 1. but is does not work for +
var text1 = "40";
var text2 = "5";
document.getElementById("par").innerHTML = text1 - text2;
document.getElementById("par1").innerHTML = text1 * text2;
document.getElementById("par2").innerHTML = text1 / text2;

// 2. but string numbers does not work for +
document.getElementById("par3").innerHTML =
  "It will concactinate the following number: " + (text1 + text2);

// 3. Avoiding error conversions
var text3 = "ten";
var text4 = "5";
if (isNaN(text3) || isNaN(text4)) {
  document.getElementById("par3").innerHTML =
    "You have not entered a number, try again";
} else {
  document.getElementById("par3").innerHTML = text3 / text4;
}
