var appId = '296257484143696';

window.fbAsyncInit = function() {
  FB.init({
    appId      : appId,
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();
  $(document).trigger("fbSDKLoaded");
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
