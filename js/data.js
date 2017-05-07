/** Site Description **/
var logoUrl = "images/navLogo.png";
var siteTitle = "ALiAS";
var siteAbout = '<strong class="text-yellow">A</strong>mity <strong class="text-yellow">Li</strong>nux <strong class="text-yellow">A</strong>ssitance <strong class="text-yellow">S</strong>apience';

/** Intro Section **/
var siteAboutHistory = "<p>Started back in 2010; With main aim to foster the growth of use of Linux for the developers in the campus and to promote the culture of hacking and sharing.<\p>ALiAS is now a platform for upcoming developers for finding exposure by meeting the people working in related industries, learning various languages and becoming a better developer";
var joinNowBtnLink = "https://goo.gl/forms/mZAhlJMxqCwZVbRK2";


var currentDate = new Date();

/** Containers **/

/** FlashBox **/
var showFlashBox = 0;
var flashBoxContent = '<a href="https://www.facebook.com/events/1873570922897377/" target="_blank"><img src="images/flashbox/poster02032017.jpg"></a>';
var flashBoxEndDate = new Date(2018,05,04); //It will end at 04/06/02017 00:00 P.S. Month starts from 0

/** Alumni Section **/
var alumniDescription = "Alumni who were a part of ALiAS are now placed in various companies or some of them are still consulting other(s) in the open source domain.";

/** Array Definitions**/
var services = [];
var events = [];
var webinars = [];
var openSource = [];
var eventsP = [];
var team = [];
var contactLinks = [];
var communitiesDetailed = [];
/** Services List **/

services[0] = "Stand out of crowd and learn unique skills from people already working in the industry!";
services[1] = "Find like minded Delhi/NCR Tech Communities.";
services[2] = "Find mentors for GSoC";
services[3] = "Learn Linux, Android, Networking, etc. There is no limit on how much and what you can learn!";
services[4] = "Chance to find Interships under our Alumni.";
services[5] = "ALiAS welcomes each and every student of amity irrespective of their department.";
services[6] = "Already know something? Teach it to others! That's how we work!";
/** End Services **/

/** Events List
	title: Event Title
	cta: Link url for Call to Action Button
	ctaText: Call to Action Button Text
	cta2enable: 0 | 1 to enable/disable secondary CTA button 
	cta2: Second Link url for Call to Action Button
	cta2Text: Call to Action Button Text
	description: Event Description. Can Contain HTML Tags
	date: Event Date
	startTime: Event Start Time
	endTime: Event End Time
	location: Event Location
	eventOD: 0 for NO, 1 for YES. The text and respective classes are automatically added by the script
	events[0] = {title: "", cta: "", ctaText: "",cta2: "", cta2Text: "", description: "", date: "", startTime: "", endTime: "", location: "", eventOD: 0};
	
**/
/** Do not remove event[0], just comment it and add another event[0]. 
 * This one will be used when no event is available
 */
events[0] = {title:"No Upcoming Event",cta:"https://docs.google.com/forms/d/e/1FAIpQLScpSM7nisQQKlBB5oYdkeo2cMV6I0b__F_KowLgbUJePyyLZg/viewform?usp=sf_link",ctaText:"Host an Event!",date:"N/A",startTime:"N/A", endTime:"N/A",location:"Amity University",eventOD:1, description:'<strong>Want to give a talk or coduct a workshop?</strong> <br> Just click on the link below and fill up the form :) to conduct a workshop or a webinar with ALiAS and spread the knowledge! <br><strong><em>Let Knowledge be open source!</em></strong>', cta2enable:0};
/** End Events List **/
/** Webinars List  
	title: Title of webinar
	videoId: https://youtube.com/watch?v=video_id
	description: Description of webinar
**/

webinars[0] = {title: "Introduction to Linux", videoId: "CTO-8BnzS_s", description: "This webinar would be about basics of Linux and its terminologies. We'll be covering basics of command lines/principles/every 'Must Know' things about Linux.<br/><strong>Speakers:</strong> <br/><strong>Anuvrat Parashar:<strong> <a href = \"http://anuvrat.in/\">http://anuvrat.in/</a> "};
webinars[1] = {title: "Introduction to Command Line Interface", videoId:"gmi_YM_N2L4", description: "This webinar would be about basics of using Command Line Interface in Linux. We'll be covering basics of command lines/ principles/ every 'Must Know' things about Linux. <br/><strong>Speakers:</strong> <br/><strong>Rohit Goyal:<strong> <a href = \"https://about.me/rohitgoyal18\">about.me/rohit</a> "};
webinars[2]= {title: "Open Source Softwares", videoId: "JcYABQrAkaU", description: "Learn the basics of Open Source and Open Source Software in this live interactive session.<br/><strong>Speakers:</strong> <br/><strong>Amit Kumar:<strong> <a href = \"http://iamit.in\">http://iamit.in</a> <br/><stong>Sanyam Khurana:</strong> <a href=\"http://www.sanyamkhurana.com\">sanyamkhurana.com</a>"};
webinars[3] = {title:"Wordpress 101", videoId: "fjxUa7HX0NY", description:"Wordpress is an online, open source website creation tool written in PHP. But in non-geek speak.It's probably the easiest and most powerful blogging and website content management system (or CMS) in existience today.Here's your chance to learn from the expert.<br><strong>Speakers:<br>Samriddha Prajapati:<br><a href=\"http://samriddha.hol.es/web/\" target=\"_blank\">http://samriddha.hol.es/web/</a>"};
webinars[4] = {title:"GitHub 101", videoId: "i6vKEo12KfE", description:"New to GitHub? Learn about the basic working of GitHub and what it is from this webinar.You can look more over here w.r.t to downloads and what all you need to perform GIT config on your machine : https://desktop.github.com/<br><strong>Speakers:<br>Aniket Maithani<br><a href=\"http://www.aniketmaithani.net/\" target=\"_blank\">http://www.aniketmaithani.net/</a>"};

/** Open Source Communities List
  
 */
openSource[0] = {url:"communities.htm#pydelhi", logo:"images/logos/pydelhi.png", title:"PyDelhi"};
openSource[1] = {url:"communities.htm#ilugd", logo:"images/logos/ilugd.png", title:"Indian Linux Users Group Delhi"};
openSource[2] = {url:"communities.htm#linuxchix", logo:"images/logos/linuxchix.png", title:"LinuxChix India"};
openSource[3] = {url:"communities.htm#mozpacers", logo:"images/logos/mozpacers.png", title:"Mozilla Delhi"};
openSource[4] = {url:"communities.htm#opensource", logo:"images/logos/opensource.png", title:"Open Source Community"};
openSource[5] = {url:"communities.htm#pycon", logo:"images/logos/pycon.png", title:"PyCon India"};

communitiesDetailed[0] = {title:"PyDelhi",tag:"pydelhi", desc:'<img src="images/logos/pydelhi.png" class="logo-med"><br>PyDelhi is a volunteer organization, a group of technically inclined students, professionals and teachers and entrepreneurs who want to learn something new having a common primary interest in the python programming language.'+
'They Organize fortnight meetups, workshops and conference.<br><ul class="text-left"><li><strong>Website: </strong><a href="http://pydelhi.org">http://pydelhi.org</a></li>'+
'<li><strong>Meetup Page: </strong><a href="https://www.meetup.com/pydelhi/">https://www.meetup.com/pydelhi/</a>'};
communitiesDetailed[1] = {title:"Indian Linux Users Group Delhi",tag:"ilugd",desc:'<img src="images/logos/ilugd.png" class="logo-med"><br>ILUG-D (Indian Linux Users Group Delhi)<br><ul class="text-left"><li><strong>Website:</strong><a href="http://ilugd.github.io">http://ilugd.github.io</a></li>'+
''};
communitiesDetailed[2] = {title:"LinuxChix India",tag:"linuxchix",desc:'<img src="images/logos/linuxchix.png" class="logo-med"><br>LinuxChix is a community for women who like Linux and for anyone who wants to support women in computing. We aim to promote FOSS primarily Linux and related projects among women and other minorities in tech. We are a group of enthusiastic people ranging from students to professional experts willing to teach and foster the growth of Linux.'+
'<br>LinuxChix India is a regional chapter in India of LinuxChix, a global community for women who like Linux and for anyone who wants to support women in computing. We are an international group of Free Software users and developers, founded in 1999 with the aim of supporting women in Linux. It is not only for women.'+
'<br><ul class="text-left"><li><strong>Telegram:</strong> <a href="https://goo.gl/0hTwWn">https://goo.gl/0hTwWn</a></li>'+
'<li><strong>Website:</strong> <a href="http://linuxchixindia.github.io">http://linuxchixindia.github.io</a></li></ul>'};
communitiesDetailed[3] = {title:"Mozilla Delhi",tag:"mozpacers",desc:'<img src="images/logos/mozpacers.png" class="logo-med"><br>Mozpacers are the active Mozillians of the Delhi Mozilla Community. Two ReMos (Mozilla Representatives) Anup Kumar Mishra and Ajay Kumar, along with Bhuvnesh Dogra took up initiatives in early 2014, to ameliorate the existing Delhi Mozilla Community. Ever since then, the Community has been deluged with contributors from diverse disciplines.'+
'We strongly believe in building up an Open and Dynamic Community, that will contribute actively to achieve Mozilla’s Mission i.e. Making a better Web'+
'<ul class="text-left"><li><strong>Website:</strong> <a href="http://mozpacers.org/">http://mozpacers.org/</a></ul>'};
communitiesDetailed[4] = {title:"Open Source Community",tag:"opensource",desc:'<img src="images/logos/opensource.png" class="logo-med"><br><ul class="text-left"><li><strong>Telegram Link:</strong> <a href="https://goo.gl/rjkbmI">https://goo.gl/rjkbmI</a></li>'+
'<li><strong>Google Group Link: </strong> <a href="https://goo.gl/tmH3Mg">https://goo.gl/tmH3Mg</a></li>'+
'<li><strong>Google Form Link: </strong> <a href="https://goo.gl/forms/teSEQh4j4697Saoz2">https://goo.gl/forms/teSEQh4j4697Saoz2</a></li>'+
'<li><strong>Facebook group link: </strong> <a href="https://goo.gl/tMKxC8">https://goo.gl/tMKxC8</a>'+
'<li><strong>Contact Number: </strong> +91-9654161510 (Telegram Handel - @uditwapt)</li>'+
'<li><strong>Email ID:</strong> <a href="mailto:udit.gupta@owasp.org">udit.gupta@owasp.org</a>, <a href="mailto:uditwapt@gmail.com">uditwapt@gmail.com</a></li></ul>'};
communitiesDetailed[5] = {title:"PyCon India",tag:"pycon",desc:'<img src="images/logos/pycon.png" class="logo-med"><br>PyCon India, the premier conference in India on using and developing the Python programming language is conducted annually by the Python developer community. It attracts the best Python programmers from across the country and abroad.'+
'<ul class="text-left"><li><strong>Website: </strong><a href="http://in.pycon.org">http://in.pycon.org/</a></li></ul>'};
communitiesDetailed[6] = {title:"Other Dev Communities", tag:"others",desc:'Join other dev groups on Telegram:'+
'<ul class="text-left"><li><strong>JavaScript:</strong> <a href="https://goo.gl/f7sSn9">https://goo.gl/f7sSn9</a></li>'+
'<li><strong>Python:</strong> <a href="https://goo.gl/Q6NE71">https://goo.gl/Q6NE71</a></li>'+
'<li><strong>Java:</strong> <a href="https://goo.gl/H8XBhL">https://goo.gl/H8XBhL</a></li>'+
'<li><strong>PHP:</strong> <a href="https://goo.gl/Q1ipFx">https://goo.gl/Q1ipFx</a></li>'+
'<li><strong>C/C++:</strong> <a href="https://goo.gl/8nQb3w">https://goo.gl/8nQb3w</a></li>'+
'<li><strong>Android:</strong> <a href="https://goo.gl/ADW5Tv">https://goo.gl/ADW5Tv</a></li>'+
'<li><strong>iOS/Swift:</strong> <a href="https://goo.gl/7q4X4g">https://goo.gl/7q4X4g</a></li>'+
'<li><strong>UI/UX & Web Designers:</strong> <a href="https://goo.gl/a6Lcy2">https://goo.gl/a6Lcy2</a></li>'+
'</ul>'};

/*	Participate & Learn
*/

eventsP[0] = {url:"https://summerofcode.withgoogle.com/", logo:"images/logos/gsoc.png", title:"Google Summer of Code"};
eventsP[1] = {url:"https://ilugd.github.io/", logo:"images/logos/outreachy.png", title:"Outreachy"};
eventsP[2] = {url:"https://in.pycon.org", logo:"images/logos/pycon.png", title:"PyCon India"};

/** Team List 
	team[0] = {name:"Test Name 1", designation: "Events Head", ppicUrl: "images/alumni/1.jpg"};
	name: Full Name
	designation: FIll your github username
	ppicUrl: Realtive url to images/team/name.jpg
**/
team[0] = {name:"Shivam Rajput", designation: "#", ppicUrl: "images/team/shivam.jpg"};
team[1] = {name:"Ashish Dahiya", designation: "#", ppicUrl: "images/team/ashish.jpg"};
team[2] = {name:"Tanya Jain", designation: "Tanya-Jain", ppicUrl: "images/team/tanya.jpg"};
team[3] = {name:"Ayush Agarwal", designation: "thisisayush", ppicUrl: "images/team/ayush.jpg"};
team[4] = {name:"Parth Sharma", designation: "parthsharma2", ppicUrl: "images/team/parth.jpg"};
team[5] = {name:"Animesh Verma", designation: "AnimeshVerma17", ppicUrl: "images/team/animesh.jpg"};
team[6] = {name:"Omkar Yadav", designation: "omkar108", ppicUrl: "images/team/omkar.jpg"};
team[7] = {name:"Vipul Gupta", designation: "vipulgupta2048", ppicUrl: "images/team/vipulg.jpg"};
/** End Team List **/

/** Footer Contact Links 
 * icon: <icon name from font-awesome without affixing "fa-">
 * url: url to redirect on click
 * hoverColor: any color from hover-* classes (don't add "hover-")
*/
contactLinks[0] = {icon:"envelope", url:"mailto:contactasetalias@gmail.com", title: "Email", iconColor:"green"};
contactLinks[1] = {icon:"github", url:"https://github.com/asetalias", title: "Github", iconColor:"grey"};
contactLinks[2] = {icon:"youtube", url:"https://www.youtube.com/channel/UCKkyqEMLFW3jz-q3nJIFL3g", title:"YouTube", iconColor:"red"};
contactLinks[3] = {icon:"facebook", url:"https://www.facebook.com/asetalias/", title:"Facebook", iconColor:"blue"};
contactLinks[4] = {icon:"google-plus-square", url:"https://groups.google.com/forum/#!forum/amity-linux-group", title:"Mailing List", iconColor:"yellow"};
/** Containers **/
var logoContainer = $(".logo");
var siteAboutContainer = $(".siteAboutContainer");
var siteAboutHistoryContainer = $(".siteAboutHistory .description");
var joinNowBtnLinkContainer = $(".joinNowBtnLink");
var siteServicesListContainer = $(".servicesList");
var eventsListContainer = $("#eventsListContainer");
var webinarsListContainer = $("#webinarsListContainer");
var alumniDescriptionContainer = $(".alumniDescription p");
var openSourceContainer = $("#openSourceListContainer");
var eventsPListContainer = $("#eventsParticipateListContainer");	
var teamListContainer = $(".teamList");
var contactLinksContainer = $(".contactLinksContainer");
/**Flashbox Containers */
var flashBox = $(".flashbox");
var flashBoxContentContainer = $(".flashBox-content");
var flashBoxCloseBtn = $(".flashbox .closeBtn");
/** End Containers **/