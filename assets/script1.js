/*
Author: Theresa Balsdon (@TeiResa on Github/Gitlab)
Description: Scripts for my projected called "Dumbears", which is to help non-mandarine speakers know why they just woke up the screaming air-raid sirens. The main purpose of this site is to ease the anxieties and panic.

TOC:

line      Section
15        Time Piece
36        Modal: Audio Player

*/



/* ~~~~~~~~~~~~~ TIME PIECE ~~~~~~~~~~~~~ */


let getChinaTimeEN = function(){
 document.getElementById('date_time_EN').innerHTML = new Date().toLocaleString('en-CA', {timeZone: 'Asia/Shanghai', timeStyle: 'short', hourCycle:'h12', dateStyle: 'medium'});
}

getChinaTimeEN();
setInterval(getChinaTimeEN, 1000);

let getChinaTimeZH = function(){
 document.getElementById('date_time_ZH').innerHTML = new Date().toLocaleString('en-CA', {timeZone: 'Asia/Shanghai', timeStyle: 'medium', hourCycle:'h24'});
}

getChinaTimeZH();
setInterval(getChinaTimeZH, 1000);





/* ~~~~~~~~~~~~ LISTEN MODAL ~~~~~~~~~~~~~ */

// Get the modal
var modalListen = document.getElementById("myModal");
var modalLook = document.getElementById("myLookModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnLook = document.getElementById("seeBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanLook = document.getElementById("closeLook");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modalListen.style.display = "block";
}
btnLook.onclick = function() {
  modalLook.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalListen.style.display = "none";
}

spanLook.onclick = function() {
  modalLook.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalListen | event.target == modalLook) {
    modalListen.style.display = "none";modalLook.style.display = "none";
  }
}


/* idk if this works for audio player...


let notTooLoud = document.getElementsByClassName("the_audio_playas");
notTooLoud.volume = 0.5;
*/




/* ~~~~~~~~~~~~ LOOK MODAL ~~~~~~~~~~~ 

// Get the modal
var modalLook = document.getElementById("myLookModal");

// Get the button that opens the modal
var btnLook = document.getElementById("seeBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnLook.onclick = function() {
  modalLook.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalLook.style.display = "none";
  modalListen.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalLook) {
    modalLook.style.display = "none";
  }
}
*/
