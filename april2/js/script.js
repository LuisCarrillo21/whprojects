// //javascript overwrites css
// var p1 = document.getElementById('p1');   
// console.log(p1);

// var p1q = document.querySelector('#p2');      //queryselector is a good one to use
// console.log(p1q);

// var pClass =document.querySelector('.p');
// console.log(pClass);

// var pLast = document.querySelector('.p:last-of-type');
// console.log(pLast);
// pLast.style.fontSize = '28px';

// var pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '8px';
// pClasses[1].style.color = 'red';
// pClasses[3].style.fontweight = 'boldest';

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);
// pByClassname[0].style.fontSize = '32px';

// var pByTagname = document.getElementsByTagName('p');
// console.log(pByTagname);
// // pByTagname[9].style.color = 'yellow';
// console.log(pByTagName.length); 







// FOR loop
//  |--------------------------------| Arguments
//  |--------| New variable
//             |----|  number of loops
//                       |--| Incrementor
// for(var i = 0; i < 10; i++){
//     pByTagname[0].style.color = 'red';
//     console.log(i);
// }

// Crete a new variable of your name
// Using the lengh of your name
// console each index to the browser

// var myName = "Matthew";
// console.log(myName.length);
// for(var i = 0; i < myName.length; i++){
//     console.log(i);
//     console.log(myName[i]);
// }



//create a function that prompts the user for their name
//Creates a separate function that loops through each letter logging in to the browser.

// function func1(){
//     func2(passUserName){}
// }
// function func2(getUsersName){
//     console.log(getUserName)
// }

// function getUsername(){
//     var username = prompt("your name");
//     console.log(username + 'from inside the function');

//     printUsername(username);
// }
// getUsername();
// function printUsername(x){   //username is now represented by x
//     for(var i = 0; i < x.lenght; i++){
//         console.log(x[i]);
//     }
// }




// //Get users two numbers    //NaN meaning not a number
// function getUserNums(){
//     var num1 = prompt('please enter a number');
//     var num2 = prompt('please enter another number');
//     addUserNums(num1, num2);
// }
// //alert added numbers           //everything that comes from a prompt is a string
// function addUserNums(x, y){
//     console.log(arguments);
//     //alert(parseInt(x) + parseInt(y));   //
// }
// getUserNums();




//write a function that asks the user for three colors 
// write another function 
//loop through arguments array 
//each paragraph to be each color

// ['red','gree', 'blue']
// p1.color = red
// p2.color = green 
// p3.color = blue

var paragraphs = document.querySelectorAll('.p');
function getUserColors(){
    var color1 = prompt('please enter your first color');
    var color2 = prompt('please enter your second color');
    var color3 = prompt('please enter your third color');

    assignUserColor(color1, color2, color3);   //this arguments syntax will pass information to the next function
}
function assignUserColors(x, y, z){
    console.log(x, y, z);
    for(var i = 0; i < arguments.length; i++){
        paragraphs[1].style.color = arguments[i];
    }
}
getUserColors();