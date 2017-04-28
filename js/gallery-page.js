$(document).ready(function(e){
    $("#contentWrap").css("padding-top",$("#mainHeader").outerHeight(true)+15+"px");
    $(document).on('fbSDKLoaded',loadGallery);
    function loadGallery(){
        $("#mainSection").fbGallery({
            accessToken: '296257484143696|5fc04aadcc6fc9dd97a8d6f476148e81',
            excludedAlbums: ["681601632001876","681600575335315"],
            pageId: '681600118668694'
        });
    }
});