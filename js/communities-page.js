 $(document).ready(function(e){
     loadData("communities");
     $(document).one("aliasCommunitiesDataLoaded", function(){
        loadCommunitiesDetailed();
     });
     $("#contentWrap").css("padding-top",$("#mainHeader").outerHeight(true)+5+"px");
});