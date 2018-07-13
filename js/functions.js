function checkFlashBox(){
	/** Load and enable FlashBox **/
	var enabled = flashbox.attr('data-enabled');
	if(typeof(enabled)=="0" || enabled == "undefined")
		return false;
	if(enabled == "1"){
		var endDate = flashbox.attr('data-enddate');
		var currentDate = new Date();
		var d = new Date(endDate);
		console.log(currentDate);
		if(d.getTime() >= currentDate.getTime()){
			flashbox.fadeIn();
		}
	}
	flashbox.find('.closeBtn').click(function(e){
		flashbox.fadeOut();	
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