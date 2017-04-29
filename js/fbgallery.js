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
                   addToAlbum(response.album.id,response.album.name,response.id,response.images[0],response.link,response.images);
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
                        clearInterval(callTrigger);     /** Stop The Interval **/  
                        $(document).trigger("albumsLoaded");    /** Trigger Event **/
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
                container.children(".container:first").append('<div class="row" id="'+v.id+'"><div class="row albumHeader"><a href="https://facebook.com/'+v.id+'" target="_blank" title="Click here to view on Facebook">'+v.name+'</a><br><span class="albumSubHeader">Click above to view the album on Facebook</span></div><div class="row photosContainer"><div class="grid-sizer"></div></div></div>');
                $.each(v.photos,function(a,b){ 
                    $("#"+v.id+" .photosContainer").append('<div class="imageBox"><a href="#"><img data-url="'+b.url+'" data-src="'+b.source+'" id="'+b.id+'" data-width="'+b.width+'" data-height="'+b.height+'" src="'+b.thumbSource+'"></a></div>');            
                });
            }
        });
        var grid = $("#fbGalleryContainer .photosContainer").masonry({
            itemSelector: '.imageBox',
            coloumnWidth: '.grid-sizer',
            percentPosition: true,
            gutter:4
        });
        $("#fbGalleryContainer .photosContainer").each(function(e){
            $(this).find("img").on('load',function(){ 
                $(this).fadeIn();
                grid.masonry('layout');
            });
        });
        container.find(".imageBox a>img").click(function(e){
            e.preventDefault();
            var imgHeight, imgWidth, lightboxTemplate, lightbox, wrapperHeight, wrapperWidth, contentBoxHeight, contentBoxWidth, expHeight, expWidth, propWidth;
            imgHeight = $(this).attr("data-height");    //Get Original Image Height from attribute
            imgWidth = $(this).attr("data-width");  //Get Original Image Width from attribute
            /** Template for lightbox */
            lightboxTemplate = '<div id="lightbox"><div class="wrapper"><div class="content">'+'<div class="topbar"><div class="closeBtn"><i class="fa fa-close"></i></div></div>'
                +'<div class="imageContainer"><img src="'+$(this).attr("data-src")+'"/></a></div><a href="'+$(this).attr("data-url")+'" target="_blank"><div class="link">View on Facebook</div></a></div></div></div>';
            $("body").prepend(lightboxTemplate);    //Add lightbox to the body
            
            lightbox  = $("#lightbox");    //Select the added lightbox
            $("#lightbox .closeBtn").click(function(e){
                e.preventDefault();
                lightbox.fadeOut().delay(1500).remove();
            });
        });
       loader.hide();
    });
    function addToAlbum(albumId,albumName,photoId,image,url,images){
        var flag = 0;
        var thumb = getThumb();
        $.each(albums,function(i,v){
            if(v.id == albumId){
                var len = 0;
                $.each(v.photos,function(i,v){
                    len++;
                });
                albums[i].photos[len] = {id:photoId,source:image.source,width:image.width,height:image.height,url:url,thumbSource:thumb.source,thumbHeight:thumb.height,thumbWidth:thumb.width};
                flag = 1;
            }
        });
        if(!flag){
            albums[albums.length] = {id:albumId,name:albumName,photos:{0:{id:photoId,source:image.source,width:image.width,height:image.height,url:url,thumbSource:thumb.source,thumbHeight:thumb.height,thumbWidth:thumb.width}}};
        }
        function getThumb(){
            var thumb = {
                width : image.width,
                height : image.height,
                source : image.source
            };
            var index = 0;
            $.each(images,function(i,v){
                if(v.width<thumb.width){
                    thumb.width = v.width;
                    index = i;
                }
            });
            var index2 =0;
            thumb.width = image.width;
            $.each(images,function(i,v){
                if(v.width<thumb.width && i!=index){
                    thumb.width = v.width;
                    thumb.height = v.height;
                    thumb.source = v.source;
                }
            });
            return thumb;
        }
    } 
})(jQuery);