//initialize the element shorthand
var slider1 = document.getElementById("serv1");
var slider2 = document.getElementById("serv2");
var slider3 = document.getElementById("serv3");
var slider4 = document.getElementById("serv4");
var slider5 = document.getElementById("serv5");
var slider6 = document.getElementById("serv6");

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



  
//this if statement exists so that, if the browser does not support localStorage, it can display a helpful error message.
if (typeof(Storage) !== "undefined") {
  
  
  //if yet undefined, set the variables to zero.
  if (!localStorage.cart1) {localStorage.cart1 = 0;}
  if (!localStorage.cart2) {localStorage.cart2 = 0;}
  if (!localStorage.cart3) {localStorage.cart3 = 0;}
  if (!localStorage.cart4) {localStorage.cart4 = 0;}
  if (!localStorage.cart5) {localStorage.cart5 = 0;}
  if (!localStorage.cart6) {localStorage.cart6 = 0;}

  //set all the sliders to the correct values.
  slider1.value = localStorage.cart1;
  slider2.value = localStorage.cart2;
  slider3.value = localStorage.cart3;
  slider4.value = localStorage.cart4;
  slider5.value = localStorage.cart5;
  slider6.value = localStorage.cart6;
  
  //set all the quantity counters to the correct values.
  output1.innerHTML = localStorage.cart1;
  output2.innerHTML = localStorage.cart2;
  output3.innerHTML = localStorage.cart3;
  output4.innerHTML = localStorage.cart4;
  output5.innerHTML = localStorage.cart5;
  output6.innerHTML = localStorage.cart6;

  reoutput1.innerHTML = localStorage.cart1;
  reoutput2.innerHTML = localStorage.cart2;
  reoutput3.innerHTML = localStorage.cart3;
  reoutput4.innerHTML = localStorage.cart4;
  reoutput5.innerHTML = localStorage.cart5;
  reoutput6.innerHTML = localStorage.cart6;

  //this set of functions updates each localStorage variable when the sliders are adjusted.
  slider1.oninput = function() {
    localStorage.cart1 = slider1.value;
    output1.innerHTML = localStorage.cart1;
    reoutput1.innerHTML = localStorage.cart1;
  }
  slider2.oninput = function() {
    localStorage.cart2 = slider2.value;
    output2.innerHTML = localStorage.cart2;
    reoutput2.innerHTML = localStorage.cart2;
  }
  slider3.oninput = function() {
    localStorage.cart3 = slider3.value;
    output3.innerHTML = localStorage.cart3;
    reoutput3.innerHTML = localStorage.cart3;
  }
  slider4.oninput = function() {
    localStorage.cart4 = slider4.value;
    output4.innerHTML = localStorage.cart4;
    reoutput4.innerHTML = localStorage.cart4;
  }
  slider5.oninput = function() {
    localStorage.cart5 = slider5.value;
    output5.innerHTML = localStorage.cart5;
    reoutput5.innerHTML = localStorage.cart5;
  }
  slider6.oninput = function() {
    localStorage.cart6 = slider6.value;
    output6.innerHTML = localStorage.cart6;
    reoutput6.innerHTML = localStorage.cart6;
  }
  
  //these functions, helmed by the "add to cart" buttons, toggle an item between 0 and 1.
  function tog1() {
    if (localStorage.cart1 > 0) {
      localStorage.cart1 = 0;
      document.getElementById("add1").innerHTML = "<i class='fas fa-heart'></i> Add to cart"; document.getElementById("add1").style.backgroundColor=" #78ad00";
    } else {
      localStorage.cart1 = 1;
      document.getElementById("add1").innerHTML = "Remove Item";document.getElementById("add1").style.backgroundColor="#7c6f71";
    }
    slider1.value = localStorage.cart1;
    output1.innerHTML = localStorage.cart1;
    reoutput1.innerHTML = localStorage.cart1;
    updateVisibility(1);
  }
  function tog2() {
    if (localStorage.cart2> 0) {
      localStorage.cart2 = 0;
      document.getElementById("add2").innerHTML = "<i class='fas fa-heart'></i> Add to cart"; document.getElementById("add2").style.backgroundColor=" #78ad00";
    } else {
      localStorage.cart2 = 1;
      document.getElementById("add2").innerHTML = "Remove Item";document.getElementById("add2").style.backgroundColor="#7c6f71";
    }
    slider2.value = localStorage.cart2;
    output2.innerHTML = localStorage.cart2;
    reoutput2.innerHTML = localStorage.cart2;
    updateVisibility(2);
  }
  function tog3() {
    if (localStorage.cart3 > 0) {
      localStorage.cart3 = 0;
      document.getElementById("add3").innerHTML = "<i class='fas fa-heart'></i> Add to cart"; document.getElementById("add3").style.backgroundColor=" #78ad00";
    } else {
      localStorage.cart3 = 1;
      document.getElementById("add3").innerHTML = "Remove Item";document.getElementById("add3").style.backgroundColor="#7c6f71";
    }
    slider3.value = localStorage.cart3;
    output3.innerHTML = localStorage.cart3;
    reoutput3.innerHTML = localStorage.cart3;
    updateVisibility(3);
  }
  function tog4() {
    if (localStorage.cart4 > 0) {
      localStorage.cart4 = 0;
      document.getElementById("add4").innerHTML = "<i class='fas fa-heart'></i> Add to cart"; document.getElementById("add4").style.backgroundColor=" #78ad00";
    } else {
      localStorage.cart4 = 1;
      document.getElementById("add4").innerHTML = "Remove Item";document.getElementById("add4").style.backgroundColor="#7c6f71";
    }
    slider4.value = localStorage.cart4;
    output4.innerHTML = localStorage.cart4;
    reoutput4.innerHTML = localStorage.cart4;
    updateVisibility(4);
  }
  function tog5() {
    if (localStorage.cart5 > 0) {
      localStorage.cart5 = 0;
      document.getElementById("add5").innerHTML = "<i class='fas fa-heart'></i> Add to cart"; document.getElementById("add5").style.backgroundColor=" #78ad00";
    } else {
      localStorage.cart5 = 1;
      document.getElementById("add5").innerHTML = "Remove Item";document.getElementById("add5").style.backgroundColor="#7c6f71";
    }
    slider5.value = localStorage.cart5;
    output5.innerHTML = localStorage.cart5;
    reoutput5.innerHTML = localStorage.cart5;
    updateVisibility(5);
  }
  function tog6() {
    if (localStorage.cart6 > 0) {
      localStorage.cart6 = 0;
      document.getElementById("add6").innerHTML = "<i class='fas fa-heart'></i> Add to cart"; document.getElementById("add6").style.backgroundColor=" #78ad00";
    } else {
      localStorage.cart6 = 1;
      document.getElementById("add6").innerHTML = "Remove Item";document.getElementById("add6").style.backgroundColor="#7c6f71";
    }
    slider6.value = localStorage.cart6;
    output6.innerHTML = localStorage.cart6;
    reoutput6.innerHTML = localStorage.cart6;
    updateVisibility(6);
  }
  
  function updateButtons() {
    if (localStorage.cart1 > 0){
      document.getElementById("add1").innerHTML = "Remove Item"; document.getElementById("add1").style.backgroundColor="#7c6f71";
    }
    if (localStorage.cart2 > 0){
      document.getElementById("add2").innerHTML = "Remove Item"; document.getElementById("add2").style.backgroundColor="#7c6f71";
    }
    if (localStorage.cart3 > 0){
      document.getElementById("add3").innerHTML = "Remove Item"; document.getElementById("add3").style.backgroundColor="#7c6f71";
    }
    if (localStorage.cart4 > 0){
      document.getElementById("add4").innerHTML = "Remove Item"; document.getElementById("add4").style.backgroundColor="#7c6f71";
    }
    if (localStorage.cart5 > 0){
      document.getElementById("add5").innerHTML = "Remove Item"; document.getElementById("add5").style.backgroundColor="#7c6f71";
    }
    if (localStorage.cart6 > 0){
      document.getElementById("add6").innerHTML = "Remove Item"; document.getElementById("add6").style.backgroundColor="#7c6f71";
    }
  }
  
  //updateVisibility(0) refers to updating ALL visbility. meanwhile updateVisibility(!=0) just updates that specific one, for performance's sake
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
    if (num==0) {
      updateButtons();
    }
    if (localStorage.cart1==0 && localStorage.cart2==0 && localStorage.cart3==0 && localStorage.cart4==0 && localStorage.cart5==0 && localStorage.cart6==0) {
      document.getElementById("aw").style.display= "block";
    } else {
      document.getElementById("aw").style.display= "none";
    }
  }
  
  updateVisibility(0);
} else {
  alert("Oh no, your browser doesn't work with our shop system! Update your browser if you can!")
}
  
  
