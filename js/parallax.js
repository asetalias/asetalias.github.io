/*** jQuery script for parallax effect ***/

$(document).ready(function(){
$(window).scroll(function() {
  $("#home").css("transform","translate3d(0," +  (($(window).scrollTop())/2)  + "px,-1px)");   
  //Applying Y-translation to home section
});
});
