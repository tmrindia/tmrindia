(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();


// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

var i = 0;
var txt1 = 'Only one indian team to qualify.One of the two teams representing asia.';
var speed = 49;
var second=1;


function typeWriter1() {

  if (i < txt1.length && txt1.charAt(i)!='.') {
    document.getElementById("demo").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
  else if(i < txt1.length)
  {
      i++;
      document.getElementById("demo").innerHTML += '.';
      document.getElementById("demo").innerHTML += '\n';
      setTimeout(typeWriter1, speed);
  }
}

var i = 0;
var txt2 = 'Only one indian team to qualify.One of the two teams representing asia.';
var speed = 49;
var second=1;


function typeWriter2() {

  if (i < txt2.length && txt2.charAt(i)!='.') {
    document.getElementById("demo1").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(i < txt2.length)
  {
      i++;
      document.getElementById("demo1").innerHTML += '.';
      document.getElementById("demo1").innerHTML += '\n';
      setTimeout(typeWriter, speed);
  }
}

var i = 0;
var txt3 = 'Only one indian team to qualify.One of the two teams representing asia.';
var speed = 49;
var second=1;


function typeWriter3() {

  if (i < txt3.length && txt3.charAt(i)!='.') {
    document.getElementById("demo2").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(i < txt3.length)
  {
      i++;
      document.getElementById("demo2").innerHTML += '.';
      document.getElementById("demo2").innerHTML += '\n';
      setTimeout(typeWriter, speed);
  }
}

var i = 0;
var txt4 = 'Only one indian team to qualify.One of the two teams representing asia.';
var speed = 49;
var second=1;


function typeWriter4() {

  if (i < txt4.length && txt4.charAt(i)!='.') {
    document.getElementById("demo3").innerHTML += txt4.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(i < txt4.length)
  {
      i++;
      document.getElementById("demo3").innerHTML += '.';
      document.getElementById("demo3").innerHTML += '\n';
      setTimeout(typeWriter, speed);
  }
}

var i = 0;
var txt5 = 'Only one indian team to qualify.One of the two teams representing asia.';
var speed = 49;
var second=1;


function typeWriter5() {

  if (i < txt5.length && txt5.charAt(i)!='.') {
    document.getElementById("demo4").innerHTML += txt5.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(i < txt5.length)
  {
      i++;
      document.getElementById("demo4").innerHTML += '.';
      document.getElementById("demo4").innerHTML += '\n';
      setTimeout(typeWriter, speed);
  }
}

var i = 0;
var txt6 = 'Only one indian team to qualify.One of the two teams representing asia.';
var speed = 49;
var second=1;


function typeWriter6() {

  if (i < txt6.length && txt6.charAt(i)!='.') {
    document.getElementById("demo5").innerHTML += txt6.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(i < txt6.length)
  {
      i++;
      document.getElementById("demo5").innerHTML += '.';
      document.getElementById("demo5").innerHTML += '\n';
      setTimeout(typeWriter, speed);
  }
}


var i = 0;
var txt7 = 'Only one indian team to qualify.One of the two teams representing asia.';
var speed = 49;
var second=1;


function typeWriter7() {

  if (i < txt7.length && txt7.charAt(i)!='.') {
    document.getElementById("demo6").innerHTML += txt7.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(i < txt7.length)
  {
      i++;
      document.getElementById("demo6").innerHTML += '.';
      document.getElementById("demo6").innerHTML += '\n';
      setTimeout(typeWriter, speed);
  }
}


var i = 0;
var txt8 = 'Only one indian team to qualify.One of the two teams representing asia.';
var speed = 49;
var second=1;


function typeWriter8() {

  if (i < txt8.length && txt8.charAt(i)!='.') {
    document.getElementById("demo7").innerHTML += txt8.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(i < txt8.length)
  {
      i++;
      document.getElementById("demo7").innerHTML += '.';
      document.getElementById("demo7").innerHTML += '\n';
      setTimeout(typeWriter, speed);
  }
}


var i = 0;
var txt9 = 'Only one indian team to qualify.One of the two teams representing asia.';
var speed = 49;
var second=1;


function typeWriter9() {

  if (i < txt9.length && txt9.charAt(i)!='.') {
    document.getElementById("demo8").innerHTML += txt9.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(i < txt9.length)
  {
      i++;
      document.getElementById("demo8").innerHTML += '.';
      document.getElementById("demo8").innerHTML += '\n';
      setTimeout(typeWriter, speed);
  }
}


var i = 0;
var txt10 = 'Only one indian team to qualify.One of the two teams representing asia.';
var speed = 49;
var second=1;


function typeWriter10() {

  if (i < txt10.length && txt10.charAt(i)!='.') {
    document.getElementById("demo9").innerHTML += txt10.charAt(i);
    i++;
    setTimeout(typeWriter10, speed);
  }
  else if(i < txt10.length)
  {
      i++;
      document.getElementById("demo9").innerHTML += '.';
      document.getElementById("demo9").innerHTML += '\n';
      setTimeout(typeWriter10, speed);
  }
}


