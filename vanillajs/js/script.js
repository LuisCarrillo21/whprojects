//console.log('hello');
//data-(what ever you want to place)   are attributes like src or class that people made
//window.addEventListener('keydown', function(e){
   // console.log(e.keyCode) //shows what happens in function e.
//});
// this basically will lessen for the keydown (press of a key)
// and once that happens will run the function e
//which is build inside the event lissener already and 
//we told to console log function e.
// notice that e or evt means event, aka what will happen.
//and notice eventlisteners help to give you lots of info!

//now you can also go into the info an take an element like
//keyCode or key or charCode and display it in the console.log
//by applying it like this. console.log(e.keycode)
//keydown { target: body, key: "s", charCode: 0, keyCode: 83 }


//next step is to tell the site, that we want to look 
//for a sound in the site that can be play when we press the
//correct eyCode, which there is bbecuase we uploaded into the site in html.
//<audio data-key="65" src="sounds/clap.wav"></audio>

//   const audio = document.querySelector(`audio[data-key=${e.keycode}]`)
// this statement is searching the document and selecting or querySelector
//only 1 iteam if we wanted to select all items we choose queryselectorall
//then we specify we want to select the element in our case is audio but could be \
//an image. now becaue we have several audio files we need to be more specific.
//we do this by using data specification [], inside we will have the
//type of date associate with the audio, in our case data-key
//next because we are inside a function  we have to specify we are in a nest.
//we do this with ${e.keyCode} . 
//the reason we use backticks and ${} is becuase we have
//several sound types and we are letting the user choose which 
//letter to press and we can associate a sound to that key depending 
//on the keyCode.

//next step is to make sure we are correct, we console log it
//console.log(audio) becuase we specify it @ const audio and is a property doesnt need ''

//<audio data-key="65" src="sounds/clap.way"></audio> //in html

window.addEventListener('keydown', function(e){
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  //to get the audio
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);  //to get  the key
//    console.log(audio);
if(!audio)return; //this wills stop the function from running if a key not available is pressed.
audio.currentTime = 0; //this will rewinfg the time to 0 
audio.play(); //ths will play the sound
console.log(key);  //to console log the key

//key.classList.add('playing') this basically tells 
//javascript to add a class name 'playing'(styled in css) to the script 

// key.classList.remove('playing') this is another classlist
//key.classList.toggle('playing') this is the 3rd classlist
//clickevent is basically saying someone cliked me
});

const keys = document.querySelectorAll('.key'); //const means ???
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
//this statement is telling that each key gets an event listener and will lesse for the transition start and the transition end.