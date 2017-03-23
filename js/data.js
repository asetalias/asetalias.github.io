/** Site Description **/
var logoUrl = "images/logo.png";
var siteTitle = "ALiAS";
var siteAbout = "Amity Linux Assistance Sapience";
var siteMotto = "";

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

/**Rankers List**/
var rankers = {name1:"Sample", ppicUrl1: "images/alumni/1.jpg",rank1:"0000", name2:"Sample", ppicUrl2: "images/alumni/1.jpg",rank2:"0000", name3:"Sample", ppicUrl3: "images/alumni/1.jpg",rank3:"0000"};

/** Array Definitions**/
var services = [];
var events = [];
var webinars = [];
var team = [];
var pics = [];
var resource = [];
var footerContactLinks = [];
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
events[0] = {title:"'Wordpress 101' by Samriddha Prajapati",cta:"https://www.youtube.com/watch?v=fjxUa7HX0NY",ctaText:"Catch Live!",date:"24 March '17",startTime:"10:00 PM", endTime:"11:00 PM*",location:"YouTube",eventOD:0, description:'Learn WordPress in this interactive webinar by <strong>Samriddha Prajapati</strong>. <br/><em>"Hi, I’m Samriddha Prajapati and I specialize in Computer Software. I’m passionate about what I do, and I love to help people. Nothing is more fulfilling than being part of a team with similar interests, and an organization that values its employees.</em>',cta2enable:1,cta2:"https://remote.com/samriddhaprajapati", cta2Text:"Speaker"};
events[1] = {title: "Study Group: Web Designing", cta: "https://drive.google.com/open?id=0B-SmzjWLoGhCeFdBemVJWDREZlk", ctaText: "Access Resources", cta2: "", cta2Text: "", description: "Learn Web Designing {HTML, CSS, JQuery} from scratch in this on going Study Group Sessions of Web Designing  and start contributing to open source projects.", date: "On Going", startTime: "Tentative", endTime: "Tentative", location: "Announced on Group", eventOD: 0, cta2enable:0 };
/** End Events List **/

/** Webinars List  
	title: Title of webinar
	videoId: https://youtube.com/watch?v=video_id
	description: Description of webinar
**/

webinars[0] = {title: "Webinar: Introduction to Linux", videoId: "CTO-8BnzS_s", description: "This webinar would be about basics of Linux and its terminologies. We'll be covering basics of command lines/principles/every 'Must Know' things about Linux.<br/><strong>Speakers:</strong> <br/><strong>Anuvrat Parashar:<strong> <a href = \"http://anuvrat.in/\">http://anuvrat.in/</a> "};
webinars[1] = {title: "Webinar: Introduction to Command Line Interface", videoId:"gmi_YM_N2L4", description: "This webinar would be about basics of using Command Line Interface in Linux. We'll be covering basics of command lines/ principles/ every 'Must Know' things about Linux. <br/><strong>Speakers:</strong> <br/><strong>Rohit Goyal:<strong> <a href = \"https://about.me/rohitgoyal18\">about.me/rohit</a> "};
webinars[2]= {title: "Webinar: Open Source Softwares", videoId: "JcYABQrAkaU", description: "Learn the basics of Open Source and Open Source Software in this live interactive session.<br/><strong>Speakers:</strong> <br/><strong>Amit Kumar:<strong> <a href = \"http://iamit.in\">http://iamit.in</a> <br/><stong>Sanyam Khurana:</strong> <a href=\"http://www.sanyamkhurana.com\">sanyamkhurana.com</a>"};

/** Picture Box
	url: Link of the cover photo on google photos (For perfect size)
	text: Name of the event
	date: Date of the event
	cta: call to action (Link of the photos album) 
	pics[]= {url:"", text:"", date:"", cta:""};
**/
pics[0]= {url:"https://lh3.googleusercontent.com/ToOSptmfFXY6qEXRlK7wgtUxBMYEjnt39pSBr_AxVXjyPPmpDa3pnnjdjAxQM3CDAk79GJrC1c0Y3CFTs9a8tIbEN9X-SGMywTZ7R001aOFwak9BzbC-dTb28oU3TrzWf2a9CynzbiZ0nhM4n4jqlw4IUWVLdLDKvayecAqElDxoON-hX-858oe6GjIF6QI4K-h7ETLiMi_SazzlMqoLuh0DiGo7LKFR1T2znC8Msf8GHELrqUZl3gNb_K54Ri9NYBl33S23Fc_4xMCVMBB-mogkCgTkt1qIcMaqg5e-YF-1O-lPLNSkC9qveEApcwzjQdXQflUVhHTTitfRLH0X8DL0CC2o7MwS36ZEismjU5gIey7rntdrrf2K3LaTXv_Fdh84Zv73SMEStmB7AEQlemd0mOh0Jo7nYHEE8bp-9npuUVtk3USt6CxIQDGBAWuDlEn6Qcbnqf7t4EWEyKK7wXv8zcJ9mTcp7b-JDYkTE17XQ8BLSFG1h_dYKLzZBa5MPhiwUTW3UdL_BL0voEXnwPhe-jNwYFPUbtE2MRZAMaZ5Gx94nhBwXID7obRaG0M3btRHkhCm-lrA0qmkRP3d_dpjtPDSDiHje_R5mBP4LQpBwiXv=s167-p-k-no", text:"Women's Day Event", date:"March 9' 2017", cta:"https://goo.gl/photos/sTgVqSFSJxDZGvH77"};
pics[1]= {url:"https://lh3.googleusercontent.com/2Ez1kAfDIHsmPHSwTaUj8kNFyqyJTb2ZXY8UWdaUsAyGnXVRAiNNOXmiRl1-um5ro1-d2v9MGzZIktffAZcs7-EPJ5j8iHD5vsq0qGVppppSUhcQBiH2q2GDvjXV8fXMsODTw0A-y3COGqa4n8JYjDbAdGupiBWe9IOC7-aMhK71Sw8Ol6jdPEdZ2qadLJ6nyq0x-WMXGSS-b9G_I5nwohu_fLq1Kn0-IYaEV0LFOtP70kIMmTXtmSbVvRCEXX7MVTkTBnYM70DUDAwy0_wrO6i_LqjgqvasDDh1WrXJaWbecLu1XEk489dmHCAH5vaphK9FPrF_vpDuKyBcN4fmKjrYZwBiJOQllgs5SyvWCQugxs5SnDR7F2ycAg8ETqIh2_K_4lH07krqAYLzDuq67m5CTVPa1HnUqbnqeDn-S1shYXpjnawW8WPUhCMZtrL3Tx4uvjmC_pGy2OHYqlsfltYCHQ0RDZzQdRVQ1yaZnkdPsNGCKMBjfiPAIGn3o1nBtQsuu6IllQwwlV57jlpkvg30nb7l0M767yTU2sradqD7Q1VEN0_gfD2xY3p6eYZTGw0CBpv0nRTNCxzmUctjFaaYJ45SQfEcZqDJWWGikPHp-70b=s190-p-k-no", text:"Ethical Hacking", date:"March 2' 2017", cta:"https://goo.gl/photos/uoBWC4foibRyzxd58"};
pics[2]= {url:"https://lh3.googleusercontent.com/JY1Xlzfyzsc8rhWDb8pFfrCTyJtdqkxMGqnX0xJfagYYrFlHRwrwgGjV_4oiLs4MQlHe21nhovTEixP3OjbIm__xTSAPpHoYBsR3K_WTrsoTpyjhsO0OOiRwPZj-Eec5cwW63e5NM28D4OPjvg7L-tb4uEYhxnsNgisABx0GTcDKgpIdYkmtUThjXP33NlqVYaqDmrqfdSYyTm_lItDu97ue4gtb8pLSVkWySFMlFKXACp8ByGaTkLfucExEaQbPsO99gbQ6nSVgw8Tlv5slRfxxd7giqjyJldYHS_3pWcpl68UeuW7CqYE--8Jl9EK8ku0OwBlXXpHMAGscg2nki6rfjV1V8IK22vTkOGfki3_mE-DigkyhePw5bQzawbUyqEBy0sZzv6obdN1MSiYay1tKJOTKqUnZYqxwtZWcPwLIIJT1o_Lk92_49kKXLbFTJ6q29dWlXDwOqNOdmL-Na2D2IPeaneCxZy-K6EQA0JfvysLMvddJLdRBi7jgi0YydvKwDJFkiJ7TB3ZiQaW4ZrHCgKbuqkmKDVv57CJytqkoZb2xWaB5knW7gAxSZuQ9SHcAgpUyokhTvL_HPJD5VfeBDLWTzrzaLLIoJ_jPienqvGng=s170-p-k-no", text:"Amity Youth Fest Meetup", date:"February 18' 2017", cta:"https://goo.gl/photos/HVBzRy8Jw1fs7Yyc7"};
pics[3]= {url:"https://lh3.googleusercontent.com/qu04uXsdaq9jBzRPzzqZRStGZt42KbjTjJGaJdmoeBPq-AfoplY-grfZljZY984hAr7pNd3YC2Kr8fZfIO9_aBGEgr5HyZYNK1lPHNTtvRzfGONL0ko8Nk8eEq11cYTm1CJ3IxrnlQXonu2CQGiJO7ZdhLW1vscfMuur1C4S6SpUPH6hQuWV0zE-jrpcOHb3lulKPZjAkj5QofUD0KkT5-IT5iBg7qJem5AlZTE1TfR5QUGhsabt8-9j7Kb40tl6TsObzk6X3OsQ72Pph_J8sXkz75AF2HnIeHrRb655QT3A--lMF5CmxKaGxsrTk2ELLDPBZPLQFl7HiVZi6qi8j6rYlDRRbEfmrNbj_Bp-bd3lNG8RFhLgURIUS_wuQfUNyguMfQ52ru19c27alcwD4h04p0iUdVMc7Ykq66ngheBUS9uV-AWwdm2Fuk9u3J3s5D0pa_tQh1cj_YsEdT9K7l8ln6NsnB2nnEtBQ8kkYZMtVBHs5B-pp30-7AibFxhj4B8pozmb5uhE4BI2l6Y0y9W6gQIaomJYCyGQRday8jKt0nUD7wQf70HszrenSku9sQI2QwCCv4YZOfp8T8DGXynyNu491nZR2Kh3GuhizWdE0--5=s169-p-k-no", text:"Operating Systems", date:"February 7' 2017", cta:"https://goo.gl/photos/9D8csT4v9RsnrVzm7"};

/** Resources Box List
	cta: Call to action: Link to Document
	url: Link to picture displayed
	text: text to appear at mouse hover.
**/
resource[0]={cta:"https://docs.google.com/document/d/1s3RWKEemXNnCOPb_YyEMFIjC5C6R8R8K2gxMXRQyG7U/edit?usp=sharing",url:"images/Resources/OpnSrcGrps.jpg", text:"Links to Opensource Communities in Delhi/NCR."};
resource[1]={cta:"https://docs.google.com/document/d/13h5MoQZv4KgnLjkeDiRHjaAZRF-VaUpy-ZN4EltIwiA/edit?usp=sharing",url:"images/Resources/StudyMaterial.jpg", text:"Links to helpful Study Material & Resources."};
resource[2]={cta:"https://docs.google.com/document/d/1BVU3XOpvL8Gb1Px1VlI_NU018Hoj06aOfp69_NgERjo/edit?usp=sharing",url:"images/Resources/RecCompt.png", text:"Links to events recommended for participation."};
 
/** Team List 
	team[0] = {name:"Test Name 1", designation: "Events Head", ppicUrl: "images/alumni/1.jpg"};
	name: Full Name
	designation: designation
	ppicUrl: Realtive url to images/team/name.jpg
**/
team[0] = {name:"Shivam Rajput", designation: "President", ppicUrl: "images/team/shivam.jpg"};
team[1] = {name:"Ashish Dahiya", designation: "Management", ppicUrl: "images/team/ashish.jpg"};
team[2] = {name:"Tanya Jain", designation: "Vice President", ppicUrl: "images/team/tanya.jpg"};
team[4] = {name:"Ayush Agarwal", designation: "Website/Technical", ppicUrl: "images/team/ayush.jpg"};
team[5] = {name:"Parth Sharma", designation: "Graphics", ppicUrl: "images/team/parth.jpg"};
team[6] = {name:"Animesh Verma", designation: "Website", ppicUrl: "images/team/animesh.jpg"};
team[7] = {name:"Omkar Yadav", designation: "Management", ppicUrl: "images/team/omkar.jpg"};
/** End Team List **/

/** Footer Contact Links 
 * icon: <icon name from font-awesome without affixing "fa-">
 * url: url to redirect on click
 * hoverColor: any color from hover-* classes (don't add "hover-")
*/
footerContactLinks[0] = {icon:"github",url:"https://github.com/asetalias",hoverColor:"grey"};
footerContactLinks[1] = {icon:"youtube", url:"https://www.youtube.com/channel/UCKkyqEMLFW3jz-q3nJIFL3g", hoverColor:"red"};
footerContactLinks[2] = {icon:"facebook", url:"https://www.facebook.com/asetalias/", hoverColor:"blue"};
footerContactLinks[3] = {icon:"envelope",url:"mailto:asetalias1@gmail.com",hoverColor:"green"};
footerContactLinks[4] = {icon:"google-plus-square",url:"https://groups.google.com/forum/#!forum/amity-linux-group",hoverColor:"yellow"};
/** Containers **/
var coverLogoContainer = $(".coverLogo");
var navbarLogoContainer = $("#navbarLogo");
var siteMottoContainer = $(".motto");
var siteAboutContainer = $(".siteAboutContainer");
var siteAboutHistoryContainer = $(".siteAboutHistory .description");
var joinNowBtnLinkContainer = $(".joinNowBtnLink");
var siteServicesListContainer = $(".servicesList");
var eventsListContainer = $("#eventsListContainer");
var webinarsListContainer = $("#webinarsListContainer");
var alumniDescriptionContainer = $(".alumniDescription p");
var teamListContainer = $(".teamList");
var pastEventPicsContainer = $("#pastEventPicsContainer");
var rankersListContainer = $("#RankersListContainer");
var resourceListContainer = $("#resourceListContainer");
var footerContactLinksContainer = $("#contactLinksContainer");
/**Flashbox Containers */
var flashBox = $(".flashbox");
var flashBoxContentContainer = $(".flashBox-content");
var flashBoxCloseBtn = $(".flashbox .closeBtn");
/** End Containers **/