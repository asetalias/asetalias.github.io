(function(){
    loadData("home");
    
    $(document).one("aliasHomeDataLoaded", function(){
        siteAboutContainer.html(siteAbout);	//Update Site About
        siteAboutHistoryContainer.html(siteAboutHistory);   //Update Site About: History
        joinNowBtnLinkContainer.attr("href",joinNowBtnLink);    //Update link to regsitration page  
        alumniDescriptionContainer.html(alumniDescription);    //Load alumni description
        loadServices();
        /** Generate Boxes */
        generateAllBoxes();
    
        /** Slick Slider Code */
        $(".single-item").slick({
            dots: false,
            autoplay:true,
            arrows: true,
            infinite: true,
            fade: true 
        });
        var breakPoint = [];
        breakPoint[0] = breakPoint[1] = 1;
        var totalWebinars = $("#webinarsListContainer .slide").length;
        if(totalWebinars>=3){
            breakPoint[0] = 3;
            breakPoint[1] = 2;
        }else{
            if(totalWebinars==2){
                breakPoint[0] = 2;
                breakPoint[1] = 1;
            }else{
                breakPoint[0] = 1;
                breakPoint[1] = 1;
            }
        }
        $("#webinarsListContainer").slick({
            dots: true,
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: breakPoint[0]
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: breakPoint[1]
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        var totalEvents = $("#eventsListContainer div.slide").length;
        if(totalEvents>=3){
            breakPoint[0] = 3;
            breakPoint[1] = 2;
        }else{
            if(totalEvents==2){
                breakPoint[0] = 2;
                breakPoint[1] = 1;
            }else{
                breakPoint[0] = 1;
                breakPoint[1] = 1;
            }
        }
        if(totalEvents>1){
            $("#eventsListContainer").slick({
                dots: true,
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                mobileFirst: true,
                responsive: [
                    {
                       breakpoint: 900,
                        settings: {
                            centerMode: true,
                            slidesToShow: breakPoint[0]
                        }   
                    },
                    {
                        breakpoint: 700,
                        settings: {
                            centerMode: true,
                            slidesToShow: breakPoint[1]
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1
                        }
                    }
                ]
            }); 
        }   
        $(".teamList").slick({
            dots: true,
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            mobileFirst: true,
            autoplay: true,
            autoplaySpeed:1000,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        /** Slick Slider Code Ends **/

        /** Animate Header (The Pop In Effect) */
        $(".section-header").addClass("animated");
        window.sr = ScrollReveal({origin:'bottom'});
	    sr.reveal(".animated",{duration:1000});
	    sr.reveal(".eventBox",{duration:2000},500);

        /** Menu Update Code on Scroll */
        $(window).scroll(function(e){
            $("section").each(function(e){
                if($(this).offset().top -100 < $(window).scrollTop() && $(this).offset().top + $(this).height() -50 > $(window).scrollTop() ){
                    $("a.active").removeClass("active");
                    $('a[href="index.html#'+$(this).attr("id")+'"').addClass("active");
                }
            });
        });

        /** Update Slide Content height on Window Resize **/
        $(window).resize(function(e){
            setSlideContentHeight();
        });

        setSlideContentHeight();
    });
})();