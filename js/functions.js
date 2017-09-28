function checkFlashBox(){
	/** Load and enable FlashBox **/
	if(typeof(flashbox.enabled)=="undefined" || flashbox.enabled == "undefined")
		return false;
	if(flashbox.enabled){
		var d = new Date(flashbox.endDate);
		if(d.getTime() >= currentDate.getTime()){
			flashboxContentContainer.html(flashbox.content);
			flashboxContainer.fadeIn();
		}
	}
	flashboxCloseBtn.click(function(e){
		flashboxContainer.fadeOut();	
	});
}

function checkCollapseMenu(){
	if($(window).width()<=768){
		$("#mainHeader .nav-item").each(function(){
			$(this).find("a").attr("data-toggle","collapse");
		});
	}else{
		$("#mainHeader .nav-item").each(function(){
			$(this).find("a").removeAttr("data-toggle");
		});
	}
}

function setSlideContentHeight(){
	$("#home .slide").each(function(e){
       	var calHeight = 0;
        $(this).find(".slideContent>div").each(function(){
	        calHeight += $(this).height();
        });
        $(this).find(".slideContent").height(calHeight+5);
    });
}

/** Extension for animate.css */
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});