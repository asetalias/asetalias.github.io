$(document).ready(function(e){
    /** Load Data **/
    document.title = siteTitle;			//Update Site Title
    logoContainer.attr("src",logoUrl);  //Update Logo Url
    
    generateContactLinks();

    $(window).resize(function(e){
		checkCollapseMenu();
	});

    $("#mainHeader li a").click(function(e){
         $("a.active").removeClass("active");
         $('a[href="index.html#'+$(this).attr("href").replace("index.html#","")+'"').addClass("active");
    });
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href').replace("index.html","")).offset().top -90
            }, 1500, 'easeInOutExpo');
        });
    });
    $(document).ready(function(e){
        $(".preloader").fadeOut(200);  //hide preloader
        var isTrans = 0;    //for menu bar
        var stickyMenu = function(){
            var mainHeader = $("header#mainHeader");
            if(mainHeader.hasClass("mainHeaderLayout1")){
                isTrans = 1;
            }
            if(!isTrans){
                return false;
            }
            setSticky();
            $(window).scroll(function(e){
                    setSticky();
            });
            function setSticky(){
                var h = mainHeader.height();
                if($(window).scrollTop()+10>h){
                    mainHeader.removeClass("mainHeaderLayout1");
                }else{
                    mainHeader.addClass("mainHeaderLayout1");
                }
            }
        }();
    });  
});