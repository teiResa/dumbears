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


/* ~~~~~~~~~~~~ ENTRY MODAL ~~~~~~~~~~~~~ */


// Get the modal
var modalEntry = document.getElementById("entryModal");

// Get the button that opens the modal
//var btnEntry = document.getElementById("seeBtn");

// When the user clicks the button, open the modal 
/*
btnEntry.onclick = function() {
  modalEntry.style.display = "block";
}
*/


// When the user clicks anywhere outside of the modal, close it

window.addEventListener('load', function() {
  // Code runs after the page loads 
   modalEntry.style.display = "block";
});

window.onclick = function(event) {
  if (event.target == modalEntry) {
    modalEntry.style.display = "none";
}};




/* ~~~~~~~~~~~~ LISTEN MODAL ~~~~~~~~~~~~~ */

// Get the modal
var modalListen = document.getElementById("myModal");
var modalLook = document.getElementById("myLookModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
/* SeeBtn is disabled until i am ready to make the visual of the air raid sirens alters. I'd probably use gifs, but i have toyed with coding it. IDK yet. */
// var btnLook = document.getElementById("seeBtn");
//no btn for launching entry disclaimer modal
var btnEntry = document.getElementById("disclaimerBtn");

// Get the <span> element that closes the modal
var spanListen = document.getElementById("closeListen");
/* SeeBtn is disabled until i am ready to make the visual of the air raid sirens alters. I'd probably use gifs, but i have toyed with coding it. IDK yet. */
// var spanLook = document.getElementById("closeLook");
var spanEntry = document.getElementById("closeEntry");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modalListen.style.display = "block";
}

/* SeeBtn is disabled until i am ready to make the visual of the air raid sirens alters. I'd probably use gifs, but i have toyed with coding it. IDK yet. */
/*
btnLook.onclick = function() {
  modalLook.style.display = "block";
}
  */

// When the user clicks on <span> (x), close the modal
spanListen.onclick = function() {
  modalListen.style.display = "none";
}

spanLook.onclick = function() {
  modalLook.style.display = "none";
}

spanEntry.onclick = function() {
 modalEntry.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalListen || event.target == modalLook || event.target == modalEntry ) {
    modalListen.style.display = "none";modalLook.style.display = "none";
    modalEntry.style.display = "none";
  }
}






/* ~~~~~~~~~~~~ MODAL (spare parts) ~~~~~~~~~~~ 

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
