//this if statement exists so that, if the browser does not support localStorage, it can display a helpful error message.
if (typeof (Storage) !== "undefined") {
var output1 = document.getElementById("count1");
var output2 = document.getElementById("count2");
var output3 = document.getElementById("count3");
var output4 = document.getElementById("count4");
var output5 = document.getElementById("count5");
var output6 = document.getElementById("count6");

var reoutput1 = document.getElementById("recount1");
var reoutput2 = document.getElementById("recount2");
var reoutput3 = document.getElementById("recount3");
var reoutput4 = document.getElementById("recount4");
var reoutput5 = document.getElementById("recount5");
var reoutput6 = document.getElementById("recount6");

//set all the quantity counters to the correct values.
output1.innerHTML = localStorage.cart1;
output2.innerHTML = localStorage.cart2;
output3.innerHTML = localStorage.cart3;
output4.innerHTML = localStorage.cart4;
output5.innerHTML = localStorage.cart5;
output6.innerHTML = localStorage.cart6;

reoutput1.innerHTML = (localStorage.cart1 * 7.99).toFixed(2);
reoutput2.innerHTML = (localStorage.cart2 * 7.99).toFixed(2);
reoutput3.innerHTML = (localStorage.cart3 * 7.99).toFixed(2);
reoutput4.innerHTML = (localStorage.cart4 * 7.99).toFixed(2);
reoutput5.innerHTML = (localStorage.cart5 * 7.99).toFixed(2);
reoutput6.innerHTML = (localStorage.cart6 * 7.99).toFixed(2);

//compute grand total:
function grandTotalGet() {
  localStorage.grandTotal = 0;
  localStorage.grandTotal = ((localStorage.cart1 * 7.99) + 
                          (localStorage.cart2 * 7.99) +
                          (localStorage.cart3 * 7.99) +
                          (localStorage.cart4 * 7.99) +
                          (localStorage.cart5 * 7.99) +
                          (localStorage.cart6 * 7.99)).toFixed(2);

}
  grandTotalGet();
function updateVisibility(num) {
  if (num==0 || num==1) {
    var elements1 = document.getElementsByClassName('show1');
    for (var i=0; i<elements1.length; i++) {
      if (localStorage.cart1 == 0)
      {elements1[i].classList.add("dont-show");}
      else 
      {elements1[i].classList.remove("dont-show");}
    }

  }
  if (num==0 || num==2) {
    var elements1 = document.getElementsByClassName('show2');
    for (var i=0; i<elements1.length; i++) {
      if (localStorage.cart2 == 0)
      {elements1[i].classList.add("dont-show");}
      else 
      {elements1[i].classList.remove("dont-show");}
    }
  }
  if (num==0 || num==3) {
    var elements1 = document.getElementsByClassName('show3');
    for (var i=0; i<elements1.length; i++) {
      if (localStorage.cart3 == 0)
      {elements1[i].classList.add("dont-show");}
      else 
      {elements1[i].classList.remove("dont-show");}
    }
  }
  if (num==0 || num==4) {
    var elements1 = document.getElementsByClassName('show4');
    for (var i=0; i<elements1.length; i++) {
      if (localStorage.cart4 == 0)
      {elements1[i].classList.add("dont-show");}
      else 
      {elements1[i].classList.remove("dont-show");}
    }
  }
  if (num==0 || num==5) {
    var elements1 = document.getElementsByClassName('show5');
    for (var i=0; i<elements1.length; i++) {
      if (localStorage.cart5 == 0)
      {elements1[i].classList.add("dont-show");}
      else 
      {elements1[i].classList.remove("dont-show");}
    }
  }
  if (num==0 || num==6) {
    var elements1 = document.getElementsByClassName('show6');
    for (var i=0; i<elements1.length; i++) {
      if (localStorage.cart6 == 0)
      {elements1[i].classList.add("dont-show");}
      else 
      {elements1[i].classList.remove("dont-show");}
    }
  }
  
  grandTotalGet();
    var elements1 = document.getElementsByClassName('totalShow');
    for (var i=0; i<elements1.length; i++) {
      if (localStorage.grandTotal == 0)
      {elements1[i].classList.add("dont-show");}
      else 
      {elements1[i].classList.remove("dont-show");}
    }
  localStorage.grandTotal = localStorage.grandTotal;
  document.getElementById("totalCount").innerHTML = localStorage.grandTotal;
}
updateVisibility(0);
  

function tog1() {
    localStorage.cart1 = 0;
  output1.innerHTML = localStorage.cart1;
  reoutput1.innerHTML = localStorage.cart1;
  updateVisibility(1);
}
function tog2() {
    localStorage.cart2 = 0;
  output2.innerHTML = localStorage.cart2;
  reoutput2.innerHTML = localStorage.cart2;
  updateVisibility(2);
}
function tog3() {
    localStorage.cart3 = 0;
  output3.innerHTML = localStorage.cart3;
  reoutput3.innerHTML = localStorage.cart3;
  updateVisibility(3);
}
function tog4() {
    localStorage.cart4 = 0;
  output4.innerHTML = localStorage.cart4;
  reoutput4.innerHTML = localStorage.cart4;
  updateVisibility(4);
}
function tog5() {
    localStorage.cart5 = 0;
  output5.innerHTML = localStorage.cart5;
  reoutput5.innerHTML = localStorage.cart5;
  updateVisibility(5);
}
function tog6() {
    localStorage.cart6 = 0;
  output6.innerHTML = localStorage.cart6;
  reoutput6.innerHTML = localStorage.cart6;
  updateVisibility(6);
}
  
  } else {
  alert("Oh no, your browser doesn't work with our shop system! Update your browser if you can!")
}
function move() {
  document.getElementById("left").classList.toggle("lefted");
  document.getElementById("right").classList.toggle("lefted");
}

