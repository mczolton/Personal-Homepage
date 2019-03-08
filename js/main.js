/** Paralax scrolling and blur for background image. */
$(window).scroll(function(){
  $(".blurParallaxBg__image").css("opacity", 1 - $(window).scrollTop() / 500);
  $(".blurParallaxBg__image").css("top", 1 - $(window).scrollTop() / 4);
});

/*
var clockElement = document.getElementById("clock");

function updateClock(clock) {
    // clock.innerHTML = new Date().toTimeString().split(" ")[0];
    clock.innerHTML = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true}).toLowerCase();
}

setInterval(function () {
    updateClock(clockElement);
}, 1000);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = mm + '.' + dd + '.' + yyyy;

date.innerHTML = n + "<br>" + today;
*/