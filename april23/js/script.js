// if(typeof Storage !== "undefined"){  //this way is use to test devices are on and storage capabilities
//     console.log('yay storage');
// }else{
//     console.log('boo.');
// }


//Using buttons and storage!!!!!!!!
// var storageBtn1 = document.querySelector('#btn1');
// var storageBtn2 = document.querySelector('#btn2');
// document.querySelector('#btn1').style.backgroundColor = "red";
// document.querySelector('#btn1').style.fontColor = "green";
// document.querySelector('#btn2').style.backgroundColor = "lightblue";
// document.querySelector('#btn2').style.fontcolor = "yellow";
// storageBtn1.addEventListener('click', setLocalStorage);
// storageBtn2.addEventListener('click', setSessionStorage);
// function setLocalStorage(){
// localStorage.setItem('lastname', 'carrillo');
// }
// function setSessionStorage(){
//     sessionStorage.setItem('vehicle', 'jeep');
//     }

//use parse to turn object to string and stringgify to do opposite
//public info and preference yes save in locally, not passes that is external servers Use 3rd party.
var saveBtn = document.querySelector('input[type="submit"]');
if(localStorage.getItem("details") !== null){
    saveBtn.removeEventListener('click',getUserInfo);
    saveBtn.addEventListener('click', checkPassword);
}else{
    saveBtn.removeEventListener('click',checkPassword);
    saveBtn.addEventListener('click', getUserInfo);
}

function getUserInfo(evt) {
    evt.preventDefault();

    var radio = document.querySelector('input[type="radio"]:checked').value;
    var username = document.querySelector('input[type="text"]').value;
    var password = MD5(document.querySelector('input[type="password"]').value);
   
    localStorage.setItem("details", JSON.stringify(new UserInfo(username, password, radio)));
    // for(var i = 0; i < radios.length; i++){
    //     var theme = document.querySelectorAll('input[type="radio"]')[i].checked;
    // }

    // console.log(username, password);
}

function UserInfo(un, pw, theme){
    this.user = un;
    this.pass = pw;
    this.theme = theme;
}

function checkUserInfo(){

    if(localStorage.getItem("details") !== null){
        document.querySelector('label[for="theme"]').style.display = 'none';

    var userInfo = JSON.parse(localStorage.getItem("details"));
    document.querySelector('input[type="text"]').value = userInfo.user;
    // console.log(userInfo);
    }
}
checkUserInfo();

function checkPassword(evt){
    evt.preventDefault();
    // console.log('get info');
    var userName = document.querySelector('input[type="text"]').value;
    var userPass = MD5(document.querySelector('input[type="password"]').value);
    var userInfo = JSON.parse(localStorage.getItem("details"));
    if(userPass === userInfo.pass && userPass === userInfo.pass){
        alert('Welcome Home!');
        document.body.classList.add(userInfo.theme);
    }else{
        alert('Please enter proper credentials');
    }
}