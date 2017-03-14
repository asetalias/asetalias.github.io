var currentDate = new Date();

/** Containers **/
var flashBox = $(".flashbox");
var flashBoxContentContainer = $(".flashBox-content");
var flashBoxCloseBtn = $(".flashbox .closeBtn");

/** FlashBox **/
var showFlashBox = 0;
var flashBoxContent = '<a href="https://www.facebook.com/events/1873570922897377/" target="_blank"><img src="images/flashbox/poster02032017.jpg"></a>';
var flashBoxEndDate = new Date(2018,04,04); //It will end at 03/03/2017 00:00 P.S. Month starts from 0


/** Load and enable FlashBox **/

if(showFlashBox){
	if(flashBoxEndDate.getFullYear()>=currentDate.getFullYear()){
		if(flashBoxEndDate.getMonth()>=currentDate.getMonth()){
			if(flashBoxEndDate.getDate()>=currentDate.getDate()){
				flashBoxContentContainer.html(flashBoxContent);
				flashBox.fadeIn();
			}
			else if(flashBoxEndDate.getMonth()>currentDate.getMonth()){
				flashBoxContentContainer.html(flashBoxContent);
				flashBox.fadeIn();
			}
			else if(flashBoxEndDate.getFullYear()>currentDate.getFullYear()){
				flashBoxContentContainer.html(flashBoxContent);
				flashBox.fadeIn();
			}
		}
	}
}
flashBoxCloseBtn.click(function(e){
	flashBox.fadeOut();
});

/**Button Random Color**/
var colors = ['Amber','Lime','Green','Light-Blue','Blue','Purple','Red','Pink','Deep-Orange','color-1','color-2','color-3','color-4','color-5','color-6','color-7','color-8','color-9','color-10','color-11','color-12','color-13'];//Add color name from the colors.css file in this box to add/remove it from random function. 
var random_color = 'Blue';
//var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#contact .section-header").addClass("button-"+random_color);
$(".eventCTA button").addClass("button-"+random_color);
//var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#events-color-fix2").addClass("button-"+random_color);
//var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#alumni .section-header").addClass("button-"+random_color);
//var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#team .section-header").addClass("button-"+random_color);
$(".CommonSectionbtn").addClass("button-"+random_color);
//var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#joinNowBtn").addClass("button-"+random_color);
$(".teamBox").addClass("button-"+random_color);
//var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#events-color-fix").addClass("button-"+random_color);
//var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#eventsBtn-color-fix1").addClass("button-"+random_color);
//var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#eventsBtn-color-fix2").addClass("button-"+random_color);
$("#rankerBtn").addClass("button-"+random_color);
//var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#utilities-color-fix2").addClass("button-"+random_color);
//var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#utilities-color-fix").addClass("button-"+random_color);
//var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#utilities-color-fix3").addClass("button-"+random_color);

$(".PositionPC").addClass("col-lg-2"); // Fix for contact us icon placing to avoid any placing error in tablet view.
$(".PositionPCfix").addClass("col-lg-1"); // Fix for contact us icon placing to avoid any placing error in tablet view.