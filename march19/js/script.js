// document.getElementById('btn2').style.color = "red";
// document.getElementById('btn2').style.fontSize = "32px";


console.log("Here is my first console message");
console.info("This is info");
console.warn("Danger Will Robinson!");
console.error("Uh Uh uh. You didnt say the magic word");

//Browser Alert
// alert('Here is my popup.');

// confirm("Did you remmember to lock your car?");
// var userResult = confirm("Did you remmember to lock your car?");
// console.log(userResult);

// var promptanswer = prompt("What is your name?");
// console.log(promptanswer);

/*
variables:
    must start with a letter!
    must start with a letter.
    can contain underscore
    avoid var x or var y or extremely long names
    variables can be strings, a number, a true or false, ect
    if number variables can be added.
*/

var user_name;
var room1;
var user_name;
var userName;
var theuserfirstnameonly;

var age = 27;
var decade = 10;
var double = 2;
var four = 4;
var newAge = (age + decade) * double;
var finalResult = newAge / four;
//PEMDAS matters in JS
console.log(newAge);

///////////////////////////////////////////////////////
var hello = "Hello World! \"I am a programmer.\"";
document.write(hello);
// the \"\" needs to be use for special characters or javascript will become confused.
///////////////////////////////////////////////////////


// //concatination
// var firstName = prompt("What is your first name");
// var lastName = prompt("What is your last name");
// alert('${firstName} ${lastName}');
// // string interpolation ${ variable }
// //this adds a space alert(firstName + " " + lastName); giver "luis carr"

function getUserVehicle(){   //function option is basically an action that needs to be defined
    var vehicleMake = prompt("What is te makeh of your vehicle ?");
    var vehicleYear = prompt("What is the year of your vehicle ?");
    var vehicleColor = prompt("What is the color of your vehicle ?");
    // var results = color + "," + year + "." + make; this way also works
    alert(`Your Vehicle: ${vehicleColor}, ${vehicleYear} ${vehicleMake}.`);
}

function primaryUser(){
    var first = prompt("What is your first name?");
    var last = prompt("What is your last name?");
    var place = prompt("Where were you born?");

    document.getElementById('primaryUser').innerHTML = first + " " + last + ", born in " + place;
}

function secondUser(){
    var school = prompt("What school you go to?");
    var classNumber = prompt("How many classes you had?");
    var classFavorite = prompt("What class is your favorite?");

    document.getElementById('secondUser').innerHTML = school + " " + classNumber + ", and " + classFavorite;
}

function thirdUser(){
    var restaurant = prompt("What is your favorite restaurant?");
    var meal = prompt("What is your favorite meal?");
    var drink = prompt("What is your favorite drink?");

    document.getElementById('thirdUser').innerHTML = restaurant + " " + meal + ", and " + drink;
}

function fourthUser(){
    var teamSport = prompt("What is your favorite sport team?");
    var teamPlayer = prompt("What is your favorite player?");
    var teamRival = prompt("What is your favorite rival?");

    document.getElementById('fourthUser').innerHTML = teamSport + " " + teamPlayer + ", and " + teamRival;
}

//to change the color of the portfolio with a single button 