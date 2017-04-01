function generateAllBoxes(){
	generateEventBoxes();
	generateWebinarBoxes();
	generateResourceBoxes();
	generatePictureBoxes();
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

function fileRead(fileUrl){
	$.ajax({
		url: fileUrl,
		method: "GET",
		dataType: "text",
		success: function(response){
			return response;
		},
		error: function(jqxhrResponse,textStatus ,textThrown){
			alert("An error Occurred! "+textThrown);
		}
	});
	return null;
}

function loadServices(){
	/** Generate Services **/
	for(var x in services){
		var html = '<li class="fa"><span>'+services[x]+'</span></li>';
		siteServicesListContainer.append(html);
	}
}

function generateEventBoxes(){
	/** Generate Event Boxes **/
	for (var x in events){
		var html = '<div class="col-lg-3 eventBox col-centered text-center" id="eventBox-"'+x+'>';
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
			html += '<div class="col-xs-6 text-center"><a href="'+events[x].cta2+'" target="_self"><button class="theme-bg-secondary">'+events[x].cta2Text+'</button><a></div>';
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
		 var html = '<div class="col-lg-3 youtubeBox col-centered text-center">';
		 html += '<div class="row youtubeVideoContainer">';
		 html += '<div class="col-lg-12"><iframe src="https://www.youtube.com/embed/'+webinars[x].videoId+'" class="youtubeVideo box-shadow"></iframe></div>';
		 html += '</div>';
		 html += '<div class="row youtubeInfoContainer">';
		 html += '<div class="row youtubeVideoTitleContainer">';
		 html += '<div class="col-lg-12"><h2 class="youtubeVideoTitle ';
		 html += (webinars[x].title.length>10)?'text-small':'text-normal';
		 html += '"><a href="https://youtube.com/video?v='+webinars[x].videoId+'" target="_blank">'+webinars[x].title+'</a></h2></div>';
		 html += '</div>';
		 html += '<div class="row youtubeVideoDescContainer">';
		 html += '<div class="col-lg-12"><p class="youtubeVideoDesc">'+webinars[x].description+'</p></div>';
		 html += '</div></div></div>';
    	 webinarsListContainer.append(html);
	}
}

function generatePictureBoxes(){
	/** Generate Picture Boxes 
		<div class="picsBox col-centered">
			<a href="'+pics[x].cta+'" target="_blank">
				<div class="row">
					<div class="coverpics">
						<img src="'+pics[x].url+'">
					</div>
			</div>
			<div class="row">
				<div class="picsText">
					pics[x].text
				</div>
			</div>
			<div class="row">
				<div class="picsDate">
					pics[x].date
				</div>
			</div>
		</a>
	</div>
	*/
	for (var x in pics){
		var html = '<div class="picsBox col-centered"><a href="'+pics[x].cta+'" target="_blank"><div class="row"><div class="coverpics"><img src="'+pics[x].url+'"></div></div><div class="row"><div class="picsText">'+pics[x].text+'</div></div><div class="row"><div class="picsDate">'+pics[x].date+'</div></div></a></div>';
		pastEventPicsContainer.append(html);
	}
}

function generateRankBoxes(){
	/** Generate Rankers Boxes**/
	{
		var html = '<div class="col-xs-12 col-center"><div class="row"><div id="rankBox1"><div class="rankerPhotoContainer horizon-center box-shadow"><img src="'+rankers.ppicUrl1+'"/></div><div class="rankerText"><strong>'+rankers.name1+'</strong></div><div>'+rankers.rank1+'</div></div><div  id="rankBox2"><div class="rankerPhotoContainer horizon-center box-shadow"><img src="'+rankers.ppicUrl2+'"/></div><div class="rankerText"><strong>'+rankers.name2+'</strong></div><div>'+rankers.rank2+'</div></div><div id="rankBox3"><div class="rankerPhotoContainer horizon-center box-shadow"><img src="'+rankers.ppicUrl3+'"/></div><div class="rankerText"><strong>'+rankers.name3+'</strong></div><div>'+rankers.rank3+'</div></div></div></div>';
		rankersListContainer.append(html);
	}

}

function generateResourceBoxes(){
	/**
	  <div class="resourceBox col-centered">
	  	<div class="row">
		  	<a href='+resource[x].cta+'>
			  <div class="resourcePics picHover">
			  	<img src="'+resource[x].url+'">
				<p class="resourceText">'+resource[x].text+'</p>
		      </div>
			</a>
		</div>
	  </div>
	**/
	for (var x in resource){
		var html= '<div class="resourceBox col-centered"><div class="row"><a href='+resource[x].cta+' target="_blank"><div class="resourcePics picHover"><img src="'+resource[x].url+'"><p class="resourceText">'+resource[x].text+'</p></div></a></div></div>';
		resourceListContainer.append(html);
	}
}

function generateTeamBoxes(){
	/** Load Team List **/
	for (var x in team){
		var html = '<div class="col-lg-2 teamBox box-shadow col-centered theme-bg-primary">';
		html+='<div class="teamPhotoContainer horizon-center box-shadow"><img src="'+team[x].ppicUrl+'" alt="'+team[x].name+'" title="'+team[x].name+'"/></div>';
		html+='<div class="row"><div class="col-lg-12 text-center"><div class="teamInfoContainer">';
		html+='<strong><div class="teamName">'+team[x].name+'</div></strong>';
		html+='<div class="teamDesignation">'+team[x].designation+'</div>';
		html+='</div></div></div></div>';
		teamListContainer.append(html);
	}	
}

function generateContactLinks(){
	/**<div class="col-sm-2 text-center col-centered">
			<a href = "">
				<i class="fa icon-grey fa- hover-"></i>
			</a>
		</div>
		<div class="col-sm-2 text-center col-centered">
			<a href = "">
				<i class="fa icon-grey fa- hover-"></i>
			</a>
		</div>
	 */
	var maxLinks = 8;
	for(x in footerContactLinks){
		if(x>maxLinks)
			break;
		
		var html = '<div class="col-xs-2 text-center col-centered">';
		html += '<a href="'+footerContactLinks[x].url+'" target="_blank">';
		html += '<i class="fa icon-grey fa-'+footerContactLinks[x].icon+' hover-'+footerContactLinks[x].hoverColor+'"></i>';
		html += '</a></div>';
		footerContactLinksContainer.append(html);
	}
}

function setTheme(color1,color2){
	$(".theme-bg-primary").addClass("bg-"+color1);
	$(".theme-bg-secondary").addClass("bg-"+color2);
}

flashBoxCloseBtn.click(function(e){
		flashBox.fadeOut();
});
