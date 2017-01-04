
/** Site Description **/
var siteTitle = "ASET-ALiAS : Amity Linux Assistance Sapience ";
var siteAbout = "ASET-ALiAS, Amity Linux Assistance Sapience, is a club that offers you...";
var logoUrl = "images/logo.png";

/** Intro Section **/
var siteAboutHistory = "ALIAS, was founded by <NAME> on <DATE>. Since, then it has been a great platform to learn new things...";

var services = [];
var events = [];
var alumni = [];

/** Services List **/
services[0] = "Test Service 1";
services[1] = "Test Service 2";
services[3] = "Test Service 3";

/** Events List **/
events[0] = {title: "Test Event 1", cta: "#", ctaText: "Register Now", description: "Some description of this event! <strong> Can use Html Tags</strong>", startTime: "11:00 AM", endTime: "2:00 PM", location: "E3-316", eventOD: 1};
events[1] = {title: "Test Event 2", cta: "#", ctaText: "Call To Action", description: "Some description of this event! <strong> Can use Html Tags</strong>", startTime: "11:00 AM", endTime: "2:00 PM", location: "Amity Noida", eventOD: 0};
events[2] = {title: "Test Event 3", cta: "#", ctaText: "Register Now", description: "Some description of this event! <strong> Can use Html Tags</strong>", startTime: "11:00 AM", endTime: "2:00 PM", location: "E3-316", eventOD: 1};
events[3] = {title: "Test Event 4", cta: "#", ctaText: "Register Now", description: "Some description of this event! <strong> Can use Html Tags</strong>", startTime: "11:00 AM", endTime: "2:00 PM", location: "E3-316", eventOD: 1};
/** End Events List **/

/**Alumni List **/
alumni[0] = {name:"Ayush Agarwal", job: "CEO/Founder, Letstream", ppicUrl: "images/alumni/1.jpg"};
alumni[1] = {name:"Test Name 1", job: "CEO/Founder, Letstream", ppicUrl: "images/alumni/1.jpg"};
alumni[2] = {name:"test name 2", job: "CEO/Founder, Letstream", ppicUrl: "images/alumni/1.jpg"};


/** Containers **/

var logoContainer = $(".logo");
var siteAboutContainer = $(".siteAboutContainer");

var siteAboutHistoryContainer = $(".siteAboutHistory .description");
var siteServicesListContainer = $(".servicesList");
var eventsListContainer = $(".eventsList");
var alumniListContainer = $(".alumniList");

/** Load Data **/

document.title = siteTitle;	// Update Site Title

logoContainer.attr("src",logoUrl);
siteAboutContainer.html(siteAbout);	//Update Site About

siteAboutHistoryContainer.html(siteAboutHistory);

/** Generate Services **/

for(var x in services){
	var html = '<li><i class="fa fa-check"></i> '+services[x]+'</li>';
	siteServicesListContainer.append(html);
}

/** Generate Event Boxes **/
for (var x in events){
		var html = '<div class="col-lg-3 eventBox col-centered"><div class="row eventTitle"><div class="col-lg-12 text-center"><h2>'+events[x].title+'</h2></div></div><div class="row eventInfo"><div class="col-lg-7 eventDesc"><div class="row eventDescInfo"><div class="col-lg-12"><p class="eventDescInfoContainer">'+events[x].description+'</p></div><div class="row eventDescCTA"><div class="col-lg-12"><a href="'+events[x].cta+'"><button class="btn-primary">'+events[x].ctaText+'</button></a></div></div></div></div><div class="col-lg-5 eventTiming text-left"><div class="startTimimg"><i class="fa fa-clock-o"></i> <span>'+events[x].startTime+'</span></div><div class="endTimimg"><i class="fa fa-clock-o"></i> <span>'+events[x].endTime+'</span></div><div class="eventLocation"><i class="fa fa-map-marker"></i> <span>'+events[x].location+'</span></div><div class="eventOD"><strong>OD</strong> <span class="';
		html += (events[x].eventOD)?"text-success":"text-danger";
		html += '">';
		html += (events[x].eventOD)?"Yes":"No";
		html += '</span></div></div></div></div>';
		eventsListContainer.append(html);
}

/**

Alumni Box Template 

	<div class="col-lg-2 alumniBox box-shadow col-centered">
                	<div class="row">
                    	<div class="col-lg-12 text-center">
		                	<div class="alumniPhotoContainer horizon-center box-shadow">
    		                	<img src="images/alumni/1.jpg"/>
        		            </div>
                        </div>
                    </div>
                    <div class="row">
                    	<div class="col-lg-12 text-center">
	                       	<div class="alumniInfoContainer">
    	                		<strong><div class="alumniName">Ayush Agarwal</div></strong>
        	                	<div class="alumniJob">CEO/Founder, Letstream</div>
	        	            </div>
                        </div>
    	            </div>
                </div>

**/

for (var x in alumni){
	var html = '<div class="col-lg-2 alumniBox box-shadow col-centered">';
	html+='<div class="row"><div class="col-lg-12 text-center"><div class="alumniPhotoContainer horizon-center box-shadow"><img src="'+alumni[x].ppicUrl+'"/></div></div></div>';
	html+='<div class="row"><div class="col-lg-12 text-center"><div class="alumniInfoContainer">';
	html+='<strong><div class="alumniName">'+alumni[x].name+'</div></strong>';
	html+='<div class="alumniJob">'+alumni[x].job+'</div>';
	html+='</div></div></div></div>';
	alumniListContainer.append(html);
}