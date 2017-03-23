$(document).ready(function(e){
    /** Load Data **/
    document.title = siteTitle;			//Update Site Title
    coverLogoContainer.attr("src",logoUrl);	//Update Logo on Cover page
    siteMottoContainer.html(siteMotto); //Update Site Motto
    siteAboutContainer.html(siteAbout);	//Update Site About
    siteAboutHistoryContainer.html(siteAboutHistory);   //Update Site About: History
    joinNowBtnLinkContainer.attr("href",joinNowBtnLink);    //Update link to regsitration page
    alumniDescriptionContainer.html(alumniDescription);    //Load alumni description
    loadServices();
	checkFlashBox();
    /** Generate Boxes */
    generateAllBoxes();
    generateContactLinks();
    setTheme("blue","deep-orange");
    $(".preloader").delay(1000).fadeOut(2000);  //hide preloader
});