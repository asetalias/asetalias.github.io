
/** Site Description **/
var siteTitle = "ASET-ALiAS : Amity Linux Assistance Sapience ";
var siteAbout = "ASET-ALiAS, stands for ASET-Amity Linux Assistance Sapience. Started back in 2010 ALiAS main goal \
is to foster the growth of use of Linux for the developers in the campus and to promote the culture of hacking and sharing <br> <br>";
var logoUrl = "images/logo.png";

/** Intro Section **/
var siteAboutHistory = "ALIAS, was founded by <NAME> on <DATE>. Since, then it has been a great platform to learn new things...<br>More content goes here<br/> even more goes here";

var services = [];
var events = [];
var alumni = [];

/** Services List
	Do you want to stand out of crowd and learn unique skills?
	Do you want to participate in Google Summer of code?
	Do you want to be a part of hacker culture?
	Do you have fun while learning?
	Do you want  to learn trending technologies ?
	Do you want learn Linux and peripheral technologies ?

	Credits: Ajay Tripathi
**/

services[0] = "Stand out of crowd and learn unique skills from people already working in the industry!";
services[1] = "Be a part of Hacker Culture";
services[3] = "Learn by Fun and Collaboration";
services[4] = "Learn Linux, Android, Networking, etc. There is no limit on how much and what you can learn!";
services[5] = "Already know something? Teach it to others! That's how we work!";

/** Events List
	title: Event Title
	cta: Link url for Call to Action Button
	ctaText: Call to Action Button Text
	description: Event Description. Can Contain HTML Tags
	date: Event Date
	startTime: Event Start Time
	endTime: Event End Time
	location: Event Location
	eventOD: 0 for NO, 1 for YES. The text and respective classes are automatically added by the script
**/
events[0] = {title: "ASET ALUMINI MEETUP", cta: "#", ctaText: "Register Now", description: " Amity organizing an Alumni Connect 2017 CSE. All senior/junior/alumni are welcome", date: "12 Jan '17", startTime: "5:00 PM IST", endTime: "NA", location: " I2-Moot Court, Amity University, Sec-125", eventOD: 0};

/** End Events List **/

/**Alumni List **/
alumni[0] = {name:"Test Name 0", job: "CEO/Founder, Company", ppicUrl: "images/alumni/1.jpg"};
alumni[1] = {name:"Test Name 1", job: "CEO/Founder, Company", ppicUrl: "images/alumni/1.jpg"};
alumni[2] = {name:"Test Name 2", job: "CEO/Founder, Company", ppicUrl: "images/alumni/1.jpg"};


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
		var html = '<div class="col-lg-3 eventBox col-centered text-center"><div class="row eventTitle"><div class="col-lg-12 text-center"><h2>'+events[x].title+'</h2></div></div><div class="row eventInfo"><div class="col-lg-7 eventDesc"><div class="row eventDescInfo"><div class="col-lg-12"><p class="eventDescInfoContainer">'+events[x].description+'</p></div></div></div><div class="col-lg-5 eventTiming text-left"><div class="date"><i class="fa fa-calendar"></i> <span>'+events[x].date+'</span></div><div class="startTimimg"><i class="fa fa-clock-o"></i> <span>'+events[x].startTime+'</span></div><div class="endTimimg"><i class="fa fa-clock-o"></i> <span>'+events[x].endTime+'</span></div><div class="eventLocation"><i class="fa fa-map-marker"></i> <span>'+events[x].location+'</span></div><div class="eventOD"><strong>OD</strong> <span class="';
		html += (events[x].eventOD)?"text-success":"text-danger";
		html += '">';
		html += (events[x].eventOD)?"Yes":"No";
		html += '</span></div></div></div>';
		html +='<div class="row eventCTA"><div class="col-lg-12"><a href="'+events[x].cta+'"><button class="btn-primary">'+events[x].ctaText+'</button></a></div></div></div>';
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
