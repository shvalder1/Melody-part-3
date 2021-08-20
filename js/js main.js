$(document).ready(function () {
  var currentfloor = 2;
  var counterUp=$(".counter-up");
  var counterDown=$(".counter-down");
  var floorPath=$(".home-image path");
  floorPath.on("mouseover", function(){
    currentfloor= $(this).attr("data-flor")
    $(".counter").text(currentfloor);
    floorPath.removeClass("current-floor");
});
counterUp.on("click", function () {
if (currentfloor < 18) {
  currentfloor++;
  usCurrentfloor=currentfloor.toLocaleString("en-US",{minimumIntegerDigits: 2, useGrouping: false});
$(".counter").text(usCurrentfloor);
floorPath.removeClass("current-floor");
$(`[data-flor=${usCurrentfloor}]`).toggleClass("current-floor");
}
})
counterDown.on("click", function () {
if (currentfloor > 02) {
  currentfloor--;
  usCurrentfloor=currentfloor.toLocaleString("en-US",{minimumIntegerDigits: 2, useGrouping: false});
$(".counter").text(usCurrentfloor);
floorPath.removeClass("current-floor");
$(`[data-flor=${usCurrentfloor}]`).toggleClass("current-floor");
}
});
});
