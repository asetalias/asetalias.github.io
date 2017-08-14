function generateAllBoxes(){
	generateEventBoxes();
	generateWebinarBoxes();
	generateOpenSourceList();
	generateEventsPList();
	generateTeamBoxes();
}

function loadData(type){
	switch(type){
		case "meta":
			$.getJSON("data/site-meta.json",function(response){
				var meta = response;
				logoUrl = meta[0].logo_url;
				siteTitle = meta[0].site_title;
				joinNowBtnLink = meta[0].join_now_link;
				if(typeof(meta[0].contact_links)!=="undefined" || meta[0].contact_links!="undefined" ){
					contactLinks = meta[0].contact_links;
				}
				if(typeof(meta[0].flashbox)!=="undefined" || meta[0].contact_links!="undefined" ){
					flashbox = meta[0].flashbox;
				}
				$(document).trigger("aliasMetaDataLoaded");
			});
		break;
		case "events":
			$.getJSON("data/events.json",function(response){
				events = response;
				$(document).trigger("aliasEventsDataLoaded");
			});
		break;
		case "webinars":
			$.getJSON("data/webinars.json",function(response){
				webinars = response;
				$(document).trigger("aliasWebinarsDataLoaded");
			});
		break;
		case "communities":
			$.getJSON("data/communities.json", function(response){
				communitiesDetailed = response;
				$(document).trigger("aliasCommunitiesDataLoaded");
			});
		break;
		case "home":
			$.getJSON("data/data-home.json", function(response){
				var home = response;
				siteAbout = home[0].site_about;
				siteAboutHistory = home[0].site_history;
				alumniDescription = home[0].alumni_description;
				services = home[0].services;
				eventsP = home[0].eventsP;
				openSource = home[0].open_source;
				team = home[0].team;
				loadData("events");
				$(document).one("aliasEventsDataLoaded", function(){
					loadData("webinars");
					$(document).one("aliasWebinarsDataLoaded", function(){
						$(document).trigger("aliasHomeDataLoaded");		
					});
				});
				
			});
		break;
		default:
			return false;
	}
}

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
function loadServices(){
	/** Generate Services **/
	for(var x in services){
		var html = '<li><i class="fa fa-code-fork text-danger"></i><span>'+services[x]+'</span></li>';
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
			html += '<div class="row eventCTA"><div class="col-xs-6 text-center"><a href="'+events[x].cta+'" target="_blank"><button class="btn btn-danger btn-lg">'+events[x].ctaText+'</button></a></div>';
			html += '<div class="col-xs-6 text-center"><a href="'+events[x].cta2+'" target="_blank"><button class="btn btn-primary btn-lg">'+events[x].cta2Text+'</button><a></div>';
		}else{
			html += '<div class="row eventCTA"><div class="col-xs-12 text-center"><a href="'+events[x].cta+'" target="_blank"><button class="btn btn-danger btn-lg">'+events[x].ctaText+'</button></a></div>';
		
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
		 html += '<img src="https://img.youtube.com/vi/'+webinars[x].videoId+'/mqdefault.jpg">';
		 html += '<a href="https://youtube.com/watch?v='+webinars[x].videoId+'" target="_blank"><div class="video-overlay hover-opacity background-overlay background-overlay-20"><i class="fa fa-play fa-4x text-danger absolute-center play-icon"></i></div></a>'
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
		var html = '<div class="col-lg-2 teamBox col-centered">';
		html+='<div class="row teamPhotoContainer horizon-center hover-opacity hover-opacity-80"><img src="'+team[x].ppicUrl+'" alt="'+team[x].name+'" title="'+team[x].name+'"/></div>';
		html+='<div class="row bottom-border bottom-border-success bottom-border-40 teamInfoContainer text-left">';
		html+='<div class="col-xs-12 teamName no-padding">'+team[x].name+'</div>';
		html+='<div class="col-xs-12 teamDesignation no-padding">';
		if(typeof(team[x].designation)!="undefined" && team[x].designation!="undefined"){
			html+=team[x].designation;
		}else{
			html+="<br>";
		}
		html+='</div></div>';
		html+='<div class="row teamSocial">'
		if(typeof(team[x].github)!="undefined" && team[x].github!="undefined"){
			html += '<div class="col-xs-2 no-padding"><a href="https://github.com/'+team[x].github+'" target="_blank" title="Github">'
			+'<span class="fa-stack fa-lg pull-left hover-opacity"><i class="fa fa-circle fa-stack-2x fa-inverse"></i><i class="fa fa-github fa-stack-1x"></i>'
			+'</span></a></div>';
		}
		if(typeof(team[x].facebook)!="undefined" && team[x].facebook!="undefined"){
			html += '<div class="col-xs-2 no-padding"><a href="https://facebook.com/'+team[x].facebook+'" target="_blank" title="Facebook">'
			+'<span class="fa-stack fa-lg pull-left hover-opacity"><i class="fa fa-circle fa-stack-2x fa-inverse"></i><i class="fa fa-facebook fa-stack-1x"></i>'
			+'</span></a></div>';
		}
		if(typeof(team[x].website)!="undefined" && team[x].website!="undefined"){
			html += '<div class="col-xs-2 no-padding"><a href="'+team[x].website+'" target="_blank" title="Website">'
			+'<span class="fa-stack fa-lg pull-left hover-opacity"><i class="fa fa-circle fa-stack-2x fa-inverse"></i><i class="fa fa-link fa-stack-1x"></i>'
			+'</span></a></div>';
		}
		html += '</div>';
		html+='</div>';
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

