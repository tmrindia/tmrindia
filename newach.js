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
var txt1 = '1st in overall dynamics.3rd in sales event.3rd in maneuverablity.3rd in suspension and traction.4th in acceleration.';
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

var j = 0;
var txt2 = '3rd in overall static event.3rd in sales presentation.5th fastest ATV.Cost presentation: Rank 7.Top 10 in design presentation.';
var speed2 = 49;
var second2 = 1;


function typeWriter2() {

  if (j < txt2.length && txt2.charAt(j)!='.') {
    document.getElementById("demo1").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
  else if(j < txt2.length)
  {
      j++;
      document.getElementById("demo1").innerHTML += '.';
      document.getElementById("demo1").innerHTML += '\n';
      setTimeout(typeWriter2, speed);
  }
}

var k = 0;
var txt3 = '2nd in sales presentation.';
var speed = 49;
var second=1;


function typeWriter3() {

  if (k < txt3.length && txt3.charAt(k)!='.') {
    document.getElementById("demo2").innerHTML += txt3.charAt(k);
    k++;
    setTimeout(typeWriter3, speed);
  }
  else if(k < txt3.length)
  {
      k++;
      document.getElementById("demo2").innerHTML += '.';
      document.getElementById("demo2").innerHTML += '\n';
      setTimeout(typeWriter3, speed);
  }
}

var l = 0;
var txt4 = 'V6: 4th quickest in acceleration.';
var speed = 49;
var second=1;


function typeWriter4() {

  if (l < txt4.length && txt4.charAt(l)!='.') {
    document.getElementById("demo3").innerHTML += txt4.charAt(l);
    l++;
    setTimeout(typeWriter4, speed);
  }
  else if(l < txt4.length)
  {
      l++;
      document.getElementById("demo3").innerHTML += '.';
      document.getElementById("demo3").innerHTML += '\n';
      setTimeout(typeWriter4, speed);
  }
}

var m = 0;
var txt5 = 'V5: 4th lightest car.';
var speed = 49;
var second=1;


function typeWriter5() {

  if (m < txt5.length && txt5.charAt(m)!='.') {
    document.getElementById("demo4").innerHTML += txt5.charAt(m);
    m++;
    setTimeout(typeWriter5, speed);
  }
  else if(m < txt5.length)
  {
      m++;
      document.getElementById("demo4").innerHTML += '.';
      document.getElementById("demo4").innerHTML += '\n';
      setTimeout(typeWriter5, speed);
  }
}

var n = 0;
var txt6 = 'V4 clocked 6.66 sec making it 4th fastest car at the event.';
var speed = 49;
var second=1;


function typeWriter6() {

  if (n < txt6.length) {
    document.getElementById("demo5").innerHTML += txt6.charAt(n);
    n++;
    setTimeout(typeWriter6, speed);
  }
  else if(n < txt6.length)
  {
      n++;
      document.getElementById("demo5").innerHTML += '.';
      document.getElementById("demo5").innerHTML += '\n';
      setTimeout(typeWriter6, speed);
  }
}


var o = 0;
var txt7 = 'Median performance at BAJA India.2nd safest vehicle award.';
var speed = 49;
var second=1;


function typeWriter7() {

  if (o < txt7.length && txt7.charAt(o)!='.') {
    document.getElementById("demo6").innerHTML += txt7.charAt(o);
    o++;
    setTimeout(typeWriter7, speed);
  }
  else if(o < txt7.length)
  {
      o++;
      document.getElementById("demo6").innerHTML += '.';
      document.getElementById("demo6").innerHTML += '\n';
      setTimeout(typeWriter7, speed);
  }
}


var p = 0;
var txt8 = '1st Indian team to qualify technical specification.Scored 287/1000 which is highest ever by any Indian team.';
var speed = 49;
var second=1;


function typeWriter8() {

  if (p < txt8.length && txt8.charAt(p)!='.') {
    document.getElementById("demo7").innerHTML += txt8.charAt(p);
    p++;
    setTimeout(typeWriter8, speed);
  }
  else if(p < txt8.length)
  {
      p++;
      document.getElementById("demo7").innerHTML += '.';
      document.getElementById("demo7").innerHTML += '\n';
      setTimeout(typeWriter8, speed);
  }
}


var q = 0;
var txt9 = 'One among four Asian teams to qualify.1st amphibious car roll out of TMR workshop.';
var speed = 49;
var second=1;


function typeWriter9() {

  if (q < txt9.length && txt9.charAt(q)!='.') {
    document.getElementById("demo8").innerHTML += txt9.charAt(q);
    q++;
    setTimeout(typeWriter9, speed);
  }
  else if(q < txt9.length)
  {
      q++;
      document.getElementById("demo8").innerHTML += '.';
      document.getElementById("demo8").innerHTML += '\n';
      setTimeout(typeWriter9, speed);
  }
}


var r = 0;
var txt10 = 'Only one indian team to qualify.One of the two teams representing asia.';
var speed = 49;
var second=1;


function typeWriter10() {

  if (r < txt10.length && txt10.charAt(r)!='.') {
    document.getElementById("demo9").innerHTML += txt10.charAt(r);
    r++;
    setTimeout(typeWriter10, speed);
  }
  else if(r < txt10.length)
  {
      r++;
      document.getElementById("demo9").innerHTML += '.';
      document.getElementById("demo9").innerHTML += '\n';
      setTimeout(typeWriter10, speed);
  }
}


