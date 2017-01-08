/** Site Description **/
var logoUrl = "images/logo.png";
var siteTitle = "ASET-ALiAS : Amity Linux Assistance Sapience ";
var siteAbout = "ASET Amity Linux Assistance Sapience (ALiAS) is the official technical club at Amity University, Noida.\
The Club was founded in 2010 to foster collective learning in the field of Computer Science. \
We disseminate our knowledge for students by organizing webinars, workshops and technical competitive events in each semester. \
The club is a supporter of the open source community and our members are its active contributors. \
We are gathered together to spread awareness of Linux and open source technology in Amity University.";

/** Intro Section **/
var siteAboutHistory = "Started back in 2010 ALiAS main goal is to foster the growth of use of Linux for the developers in the campus and to promote the culture of hacking and sharing.";
var joinNowBtnLink = "#";
/** Alumni Section **/
var alumniDescription = "Alumni who were a part of ALiAS are now placed in various companies or some of them are still consulting other(s) in the open source domain";
/** Array Definitions**/
var services = [];
var events = [];
// var alumni = [];	//To Be Removed if new changes regarding Alumni are accepted
var team = [];
/** Services List
	Do you want to stand out of crowd and learn unique skills?
	Do you want to participate in Google Summer of code?
	Do you want to be a part of hacker culture?
	Do you have fun while learning?
	Do you want  to learn trending technologies?
	Do you want learn Linux and peripheral technologies?
	Credits: Ajay Tripathi
**/

services[0] = "Stand out of crowd and learn unique skills from people already working in the industry!";
services[1] = "Be a part of Hacker Culture";
services[3] = "Learn by Fun and Collaboration";
services[4] = "Learn Linux, Android, Networking, etc. There is no limit on how much and what you can learn!";
services[5] = "Already know something? Teach it to others! That's how we work!";
/** End Services **/

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

	events[0] = {title: "", cta: "", ctaText: "", description: "", date: "", startTime: "", endTime: "", location: "", eventOD: 0};
**/
events[0] = {title: "PyByte- Workshop on Python, Linux, Kivy", cta: "#", ctaText: "Register Now", description: "Workshop organised by Amity Alumni as a Python Express initiative in the domains of Python, Linux and Kivy", date: "16 September 2016", startTime: "10:00 AM IST", endTime: "5:00 PM IST", location: "E2 Seminar Hall, Amity University, Sec-125", eventOD: 1};
events[1] = {title: "Weekly Sync Up Call", cta: "#", ctaText: "Join Now", description: "Weekly Sync Up Call", date: "6 October 2016", startTime: "9:00 PM IST", endTime: "10:00 PM IST", location: "Google Hangout", eventOD: 0}; 
events[2] = {title: "Weekly Sync Up Call", cta: "https://bluejeans.com/538914591", ctaText: "Join Now", description: "Weekly SYnc Up Call", date: "9 November 2016", startTime: "9:00 PM IST", endTime: "10:00 PM IST", location: "BlueJeans", eventOD: 0};
events[3] = {title: "Web Scraping Using Python", cta: "#", ctaText: "Register Now", description: "Websites such as e-commerce, social networks, real estate, etc., display data that can only be viewed using a web browser, and lack the functionality to save a copy of this data to a local file on computer. Web Scraping technique automates this process. Its software interacts with websites as a web browser does, prevents manually copying the data from websites, and performs the task within a fraction of time.", date: "11 November 2016", startTime: "2:30 PM IST", endTime: "3:30 PM IST", location: "E3-311, Amity University, Sec-125", eventOD: 0};
events[4] = {title: "Weekly Sync Up Call", cta: "https://bluejeans.com/538914591", ctaText: "Join Now", description: "Weekly Sync Up Call", date: "9 December 2016", startTime: "9:00 PM IST", endTime: "10:00 PM IST", location: "BlueJeans", eventOD: 0};
events[5] = {title: "Webinar by Anuvrat Parashar on Basics of Linux", cta: "https://www.youtube.com/watch?v=CTO-8BnzS_s", ctaText: "Watch Now", description: "Webinar by Anuvrat Parashar on the basics of Linux and its terminologies. The webinars covers basics of command lines/ principles/ every 'Must Know' things about Linux.", date: "3 January 2017", startTime: "10:00 PM IST", endTime: "11:00 PM IST", location: "https://www.youtube.com/channel/UCKkyqEMLFW3jz-q3nJIFL3g", eventOD: 0};
events[6] = {title: "ASET ALUMINI MEETUP", cta: "#", ctaText: "Register Now", description: " Amity organizing an Alumni Connect 2017 CSE. All senior/junior/alumni are welcome", date: "12 Jan '17", startTime: "5:00 PM IST", endTime: "NA", location: " I2-Moot Court, Amity University, Sec-125", eventOD: 0};

/** End Events List **/

/**Alumni List **/
/** To Be Removed if new changes regarding Alumni are accepted
alumni[0] = {name:"Test Name 0", job: "CEO/Founder, Company", ppicUrl: "images/alumni/1.jpg"};
alumni[1] = {name:"Test Name 1", job: "CEO/Founder, Company", ppicUrl: "images/alumni/1.jpg"};
alumni[2] = {name:"Test Name 2", job: "CEO/Founder, Company", ppicUrl: "images/alumni/1.jpg"};
**/
/** End Alumni List**/

/** Team List **/
team[0] = {name:"Test Name 0", designation: "President", ppicUrl: "images/alumni/1.jpg"};
team[1] = {name:"Test Name 1", designation: "Events Head", ppicUrl: "images/alumni/1.jpg"};
team[2] = {name:"Test Name 2", designation: "Co-Ordinator", ppicUrl: "images/alumni/1.jpg"};
/** End Team List **/

/** Containers **/
var logoContainer = $(".logo");
var siteAboutContainer = $(".siteAboutContainer");
var siteAboutHistoryContainer = $(".siteAboutHistory .description");
var joinNowBtnLinkContainer = $(".joinNowBtnLink");
var siteServicesListContainer = $(".servicesList");
var eventsListContainer = $(".eventsList");
// var alumniListContainer = $(".alumniList");	// To be removed if new changes regarding Alumni are accepted
var alumniDescriptionContainer = $(".alumniDescription p");
var teamListContainer = $(".teamList");
/** End Containers **/

/** Load Data **/
document.title = siteTitle;			//Update Site Title
logoContainer.attr("src",logoUrl);	//Update SiteLogo
siteAboutContainer.html(siteAbout);	//Update Site About
siteAboutHistoryContainer.html(siteAboutHistory);
joinNowBtnLinkContainer.attr("href",joinNowBtnLink);
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

/** Load Alumni **/
alumniDescriptionContainer.html(alumniDescription);

/** Load Alumni (To be removed if new changes regarding Alumni are accepted)
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
    	                		<strong><div class="alumniName">Name</div></strong>
        	                	<div class="alumniJob">position</div>
	        	            </div>
                        </div>
    	            </div>
                </div>

for (var x in alumni){
	var html = '<div class="col-lg-2 alumniBox box-shadow col-centered">';
	html+='<div class="row"><div class="col-lg-12 text-center"><div class="alumniPhotoContainer horizon-center box-shadow"><img src="'+alumni[x].ppicUrl+'"/></div></div></div>';
	html+='<div class="row"><div class="col-lg-12 text-center"><div class="alumniInfoContainer">';
	html+='<strong><div class="alumniName">'+alumni[x].name+'</div></strong>';
	html+='<div class="alumniJob">'+alumni[x].job+'</div>';
	html+='</div></div></div></div>';
	alumniListContainer.append(html);
}
**/

/** Load Team List **/
for (var x in team){
	var html = '<div class="col-lg-2 teamBox box-shadow col-centered">';
	html+='<div class="row"><div class="col-lg-12 text-center"><div class="teamPhotoContainer horizon-center box-shadow"><img src="'+team[x].ppicUrl+'"/></div></div></div>';
	html+='<div class="row"><div class="col-lg-12 text-center"><div class="teamInfoContainer">';
	html+='<strong><div class="teamName">'+team[x].name+'</div></strong>';
	html+='<div class="teamDesignation">'+team[x].designation+'</div>';
	html+='</div></div></div></div>';
	teamListContainer.append(html);
}
/** End Team List**/
