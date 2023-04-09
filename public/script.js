

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let departmentArrow = document.querySelector(".department-arrow");
departmentArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}


function timeLeft(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };
  
  $(document).ready(function() {
    var today = new Date();
    var deadline = 'march 29 ' + (today.getFullYear()) + " 09:00:00";
    
    var setClock = function(newyear){
      var timeinterval = setInterval(function(){
        var t = timeLeft(newyear);
        $('#days').text(t.days);
        $('#hours').text(t.hours);
        $('#mins').text(('0' + t.minutes).slice(-2));
        $('#secs').text(('0' + t.seconds).slice(-2));
        if(t.total<=0){
          clearInterval(timeinterval);
          var now = new Date();
          var yearStr = now.getFullYear().toString();
          $('#days').text("let");
          $('#days-text').text("");
          $('#hours').text("the");
          $('#hours-text').text("");
          $('#mins').text("fun");
          $('#mins-text').text("");
          $('#secs').text("begin");
          $('#secs-text').text("");
          const element = document.getElementById("register");
          element.remove();
          const element2 = document.getElementById("register");
          element2.remove();
        }
      },1000);
    };
    
    setClock(deadline);
    
  });