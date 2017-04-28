(function($){
/** Jquery Facebook Gallery Plugin
 * Author: Ayush Agarwal (Friendsocial Developer Network) (ayush@theletstream.com)
 * License: MIT License
 * 
 * Fetches Public Images from any Facebook Page and displays them in a beautiful grid gallery
 *  
 * Settings:
 *   pageID: Page ID whose albums to fetch
 *   excludedAlbums: Album ID's to be excluded
 *   accessToken: Acess Token of Facebook
 * 
 * Pre-Requistes:
 * Jquery
 * Font-Awesome (For Spinner Icon and Close Btn Icon)
 * Facebook Javscript SDK
 */

/** Settings */
    var pageId, albums, excludedAlbums, accessToken, callTrigger, counter, counter2, container, loaderTemplate, loader;
    excludedAlbums = [];
    albums = [];
    counter = counter2 = 0;
    loaderTemplate  = '<div id="fbGalleryLoader"><div class="container"><div class="contentWrap"><div class="loaderContent"><i class="fa fa-spin fa-circle-o-notch"></i><br>Loading</div></div></div></div>';
    $.fn.extend({
        fbGallery: function(options){
            container = this;
            var settings = $.extend({
                accessToken: "",
                pageId: "",
                excludedAlbums: [],
            },options);
            accessToken = settings.accessToken;
            pageId = settings.pageId;
            excludedAlbums = settings.excludedAlbums;
            if(typeof(pageId) == "undefined" || typeof(accessToken) == "undefined"){
                console.log("fbGallery: Access Token or Page Id Missing");
                return false;
            }
            container.html(loaderTemplate);
            loader = $(container.find("#fbGalleryLoader"));
            getAlbums();
            return this;
        }
    });
    function getAlbums(response = -1){
        /**
        *  This function is recursive and calls itself to traverse through all pages
        */
        if(response == -1){
            /** Exceute First Time */
            FB.api("/"+pageId+"/photos/uploaded",{access_token:accessToken},processResponse);
        }else{
            /** Move and Process Next Page **/
            FB.api(response.paging.next,processResponse);   
        }
        /** 
         * Process response
         * 
         * Adds all photos and given info to albums[] array
         * Triggers 'albumsLoaded' event when all photos have been loaded
         * 
        **/
        function processResponse(response){
            counter2 += response.data.length;   /** This counter is used to verify if all photos have been retreived**/
            for(var i=0;i<response.data.length;i++){
                v = response.data[i];
                /** Fetch Image Details */
                FB.api("/"+v.id+"?fields=images,link,album",{access_token:accessToken},function(response){
                   counter++;   /** This counter is used to verify if all photos have been retreived**/
                   addToAlbum(response.album.id,response.album.name,response.id,response.images[0],response.link);
                });
            }
            if(typeof(response.paging.next) != "undefined"){
                /** Goto Next Page */
                getAlbums(response);
            }else{
                /** Recursed through all photos! 
                 * Time to check if all photo details have been retrieved
                **/
                callTrigger = setInterval(function(){
                    /** Set Interval to check every 1 second if all photos have been retrieved */
                    if(counter==counter2){      
                        $(document).trigger("albumsLoaded");    /** Trigger Event **/
                        clearInterval(callTrigger);     /** Stop The Interval **/  
                    }
                },1000);
            }
        }
    }
    $(document).on("albumsLoaded",function(){
        /** Ready the container **/
        container.append('<div class="container" id="fbGalleryContainer"></div>');
        $.each(albums,function(i,v){
             if(excludedAlbums.indexOf(v.id)==-1){
                container.children(".container:first").append('<div class="row" id="'+v.id+'"><div class="row albumHeader">'+v.name+'</div><div class="row photosContainer"></div></div>');
                $.each(v.photos,function(a,b){ 
                    $("#"+v.id+" .photosContainer").append('<div class="imageBox"><a href="#"><div data-url="'+b.url+'" data-src="'+b.source+'" id="'+b.id+'" data-width="'+b.width+'" data-height="'+b.height+'" style="background-image: url(\''+b.source+'\')"></div></a></div>');            
                });
            }
        });
        container.find(".imageBox a>div").click(function(e){
            e.preventDefault();
            var imgHeight, imgWidth, lightboxTemplate, lightbox, wrapperHeight, wrapperWidth, contentBoxHeight, contentBoxWidth, expHeight, expWidth, propWidth;
            imgHeight = $(this).attr("data-height");    //Get Original Image Height from attribute
            imgWidth = $(this).attr("data-width");  //Get Original Image Width from attribute
            /** Template for lightbox */
            lightboxTemplate = '<div id="lightbox"><div class="wrapper"><div class="content">'+'<div class="topbar"><div class="closeBtn"><i class="fa fa-close"></i></div></div>'
                +'<a href="'+$(this).attr("data-url")+'"><img src="'+$(this).attr("data-src")+'"/></a></div></div></div>';
            $("body").prepend(lightboxTemplate);    //Add lightbox to the body
            lightbox  = $("#lightbox");    //Select the added lightbox
            wrapperHeight = lightbox.find(".wrapper").height();    //Get the lightbox wrapper height
            wrapperWidth = lightbox.find(".wrapper").width();     //Get the lightbox wrapper width
            contentBoxHeight = ((wrapperHeight+0.9*wrapperHeight)<imgHeight)?(wrapperHeight+0.9*wrapperHeight):imgHeight;    //Estimate Content Box Height
            contentBoxWidth = ((wrapperWidth+0.9*wrapperWidth)<imgWidth)?(wrapperWidth+0.9*wrapperWidth):imgWidth;           //Estimate Content Box Width
            expHeight = imgHeight*contentBoxWidth/imgWidth;    //Calculate Expected Height by maintaining ratio
            expWidth = imgWidth*contentBoxHeight/imgHeight;    //Calculate Expected Width by Maintaining ratio
            /** Calculate Final Width and Height to maintain image's aspect ratio */
            if(expHeight<=contentBoxHeight){
                contentBoxHeight = expHeight;
                contentBoxWidth = imgWidth*contentBoxHeight/imgHeight;
            }
            if(expWidth<=contentBoxWidth){
                contentBoxWidth = expWidth;
                contentBoxHeight = imgHeight*contentBoxWidth/imgWidth;
            }
            lightbox.find(".content").height(contentBoxHeight);
            lightbox.find(".content").width(lightbox.find(".content img").width());
            $("#lightbox .closeBtn").click(function(e){
                e.preventDefault();
                lightbox.fadeOut().delay(1500).remove();
            });
        });
       loader.hide();
    });
    function addToAlbum(albumId,albumName,photoId,image,url){
        var flag = 0;
        $.each(albums,function(i,v){
            if(v.id == albumId){
                var len = 0;
                $.each(v.photos,function(i,v){
                    len++;
                });
                albums[i].photos[len] = {id:photoId,source:image.source,width:image.width,height:image.height,url:url};
                flag = 1;
            }
        });
        if(!flag)
            albums[albums.length] = {id:albumId,name:albumName,photos:{0:{id:photoId,source:image.source,width:image.width,height:image.height,url:url}}};
    } 
})(jQuery);