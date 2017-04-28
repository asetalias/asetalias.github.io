function generateAllBoxes(){
	generateEventBoxes();
	generateWebinarBoxes();
	generateOpenSourceList();
	generateEventsPList();
	generateTeamBoxes();
}

function checkFlashBox(){
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
}
function loadServices(){
	/** Generate Services **/
	for(var x in services){
		var html = '<li><i class="fa fa-code-fork text-yellow"></i><span>'+services[x]+'</span></li>';
		siteServicesListContainer.append(html);
	}
}

function generateEventBoxes(){
	/** Generate Event Boxes **/
	for (var x in events){
		var html = '<div class="slide col-xs-3 eventBox col-centered text-center" id="eventBox-'+x+'">';
		html += '<div class="row eventTitle"><div class="col-lg-12 text-center"><h2>'+events[x].title+'</h2></div></div>';
		html += '<div class="row eventInfo"><div class="col-xs-7 eventDesc"><div class="row eventDescInfo"><div class="col-lg-12"><p class="eventDescInfoContainer">'+events[x].description+'</p></div></div></div>';
		html += '<div class="col-xs-5 eventTiming text-left">';
		html += '<div class="date"><i class="fa fa-calendar"></i> <span><strong>'+events[x].date+'</strong></span></div>';
		html += '<div class="startTimimg"><i class="fa fa-clock-o"></i> <span><strong>'+events[x].startTime+'</strong></span></div>';
		html += '<div class="endTimimg"><i class="fa fa-clock-o"></i> <span><strong>'+events[x].endTime+'</strong></span></div>';
		html += '<div class="eventLocation"><i class="fa fa-map-marker"></i> <span><strong>'+events[x].location+'</strong></span></div>';
		html += '<div class="eventOD"><strong>OD</strong> <span class="';
		html += (events[x].eventOD)?"text-success":"text-danger";
		html += '">';
		html += (events[x].eventOD)?"Yes":"No";
		html += '</span></div>';
		html += '</div></div>';    //closes eventTiming and eventInfo
		if(events[x].cta2enable){	
			html += '<div class="row eventCTA"><div class="col-xs-6 text-center"><a href="'+events[x].cta+'" target="_blank"><button class="theme-bg-primary">'+events[x].ctaText+'</button></a></div>';
			html += '<div class="col-xs-6 text-center"><a href="'+events[x].cta2+'" target="_blank"><button class="theme-bg-secondary">'+events[x].cta2Text+'</button><a></div>';
		}else{
			html += '<div class="row eventCTA"><div class="col-xs-12 text-center"><a href="'+events[x].cta+'" target="_blank"><button class="theme-bg-primary">'+events[x].ctaText+'</button></a></div>';
		
		}
		html += '</div></div>'
		eventsListContainer.append(html);
	}
}

function generateWebinarBoxes(){
	/** Generate Webinar Boxes */
	for (var x in webinars){
		 var html = '<div class="col-lg-3 youtubeBox col-centered text-center slide">';
		 html += '<div class="row youtubeVideoContainer">';
		 html += '<div class="col-lg-12"><iframe src="https://www.youtube.com/embed/'+webinars[x].videoId+'" class="youtubeVideo box-shadow"></iframe></div>';
		 html += '</div>';
		 html += '<div class="row youtubeInfoContainer">';
		 html += '<div class="row youtubeVideoTitleContainer">';
		 html += '<div class="col-lg-12"><h2 class="youtubeVideoTitle ';
		 html += (webinars[x].title.length>10)?'text-small':'text-normal';
		 html += '"><a href="https://youtube.com/watch?v='+webinars[x].videoId+'" target="_blank">'+webinars[x].title+'</a></h2></div>';
		 html += '</div>';
		 html += '<div class="row youtubeVideoDescContainer">';
		 html += '<div class="col-lg-12"><p class="youtubeVideoDesc">'+webinars[x].description+'</p></div>';
		 html += '</div></div></div>';
    	 webinarsListContainer.append(html);
	}
}

function generateOpenSourceList(){
	for(var x in openSource){
		var html = '<div class="col-sm-2 col-centered logoContainer">';
		html += '<a href="'+openSource[x].url+'"><img src="'+openSource[x].logo+'" class="logo-med" title="'+openSource[x].title+'" alt="'+openSource[x].title+'"/></a></div>';
		openSourceContainer.append(html);
	}
}

function generateEventsPList(){
	for(var x in eventsP){
		var html = '<div class="col-sm-3 col-centered logoContainer">';
		html += '<a href="'+eventsP[x].url+'"  target="_blank"><img src="'+eventsP[x].logo+'" class="logo-med" title="'+eventsP[x].title+'" alt="'+eventsP[x].title+'"/></a></div>';
		eventsPListContainer.append(html);
	}
}

function generateTeamBoxes(){
	/** Load Team List **/
	for (var x in team){
		var html = '<div class="slide col-lg-2 teamBox box-shadow col-centered theme-bg-primary">';
		html+='<div class="teamPhotoContainer horizon-center box-shadow"><img src="'+team[x].ppicUrl+'" alt="'+team[x].name+'" title="'+team[x].name+'"/></div>';
		html+='<div class="row"><div class="col-lg-12 text-center"><div class="teamInfoContainer">';
		html+='<strong><div class="teamName">'+team[x].name+'</div></strong>';
		html+='<div class="teamSocial"><a href="https://github.com/'+team[x].designation+'" target="_blank">@'+team[x].designation+'</div>';
		html+='</div></div></div></div>';
		teamListContainer.append(html);
	}	
}

function generateContactLinks(){
	for(x in contactLinks){
		var html = '<li>';
		html += '<i class="fa icon-grey fa-'+contactLinks[x].icon+' text-'+contactLinks[x].iconColor+'"></i> ';
		html += '<a href="'+contactLinks[x].url+'" target="_blank">'+contactLinks[x].title+'</a>';
		html += '</li>';
		contactLinksContainer.append(html);
	}
}

function setTheme(color1,color2){
	$(".theme-bg-primary").addClass("bg-"+color1);
	$(".theme-bg-secondary").addClass("bg-"+color2);
}

flashBoxCloseBtn.click(function(e){
		flashBox.fadeOut();
});

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
        $(this).find(".slideContent>div.row").each(function(){
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

function loadCommunitiesDetailed(){
	$.each(communitiesDetailed,function(i,v){
		var html = '<section class="communityBox auto-center" id="'+v.tag+'">'+
                '<div class="container">'+
                    '<div class="row">'+
                        '<div class="col-lg-12 headerContainer col-centered">'+
                             '<h1 class="section-header text-center">'+v.title+'</h1>'+
                        '</div>'+
                    '</div>'+
                   '<div class="row">'+
				   '<p>'+v.desc+'</p>'+
                    '</div>'+
                '</div>'+
        '</section>';
		$("#content").append(html);
	});
}