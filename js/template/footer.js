var html = '<div class="container">'+
'            <div class="row widgetsContainer">'+
'                <div class="widgetArea col-sm-4" id="footerWidgetArea1">'+
'                    <!-- Widget Area 1 -->'+
'                    <div class="widget">'+
'                        <div class="widgetTitle"><h3>Follow us on facebook</h3></div>'+
'                        <div class="widgetContent">'+
'                            <!-- Facebook JavaScript SDK -->'+
'                            <div id="fb-root"></div>'+
'                            <script>'+
'                                (function(d, s, id) {'+
'                                    var js, fjs = d.getElementsByTagName(s)[0];'+
'                                    if (d.getElementById(id)) return;'+
'                                    js = d.createElement(s); js.id = id;'+
'                                    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.9&appId=296257484143696";'+
'                                    fjs.parentNode.insertBefore(js, fjs);'+
'                                }(document, \'script\', \'facebook-jssdk\'));'+
'                            </script>'+
'                            <!-- Facebook JavaScript SDK -->'+
'                            <!-- Facebook Page Plugin -->'+
'                            <div class="fb-page" data-href="https://www.facebook.com/asetalias/" data-height="250" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">'+
'                                <blockquote cite="https://www.facebook.com/asetalias/" class="fb-xfbml-parse-ignore">'+
'                                    <a href="https://www.facebook.com/asetalias/">ALiAS</a>'+
'                                </blockquote>'+
'                            </div>'+
'                            <!-- Facebook Page Plugin -->'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'                <div class="widgetArea col-sm-4" id="footerWidgetArea2">'+
'                    <!-- Widget Area 2 -->'+
'                    <div class="widget">'+
'                        <div class="widgetTitle"><h3>Subscribe us on YouTube</h3></div>'+
'                        <div class="widgetContent">'+
'                            <iframe style="width:100%;height:200px" src="https://www.youtube.com/embed/fjxUa7HX0NY?list=UUKkyqEMLFW3jz-q3nJIFL3g" frameborder="0" allowfullscreen></iframe>'+
'                            <br>'+
'                            <script src="https://apis.google.com/js/platform.js"></script>'+
'                            <div class="g-ytsubscribe" data-channelid="UCKkyqEMLFW3jz-q3nJIFL3g" data-layout="full" data-count="default"></div>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'                <div class="widgetArea col-sm-4" id="footerWidgetArea3">'+
'                    <!-- Widget Area 3 -->'+
'                    <div class="widgetTitle"><h3>Contact us</h3></div>'+
'                    <div class="widgetContent">'+
'                        <ul class="contactLinksContainer text-left">'+
'                        </ul>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'            <div class="row divider-top">'+
'                <div class="col-xs-6 text-left attribution">'+
'                    <img class="logo logo-sm"/>'+
'                </div>'+
'                <div class="col-xs-6 text-right">'+
'                    <a href="https://github.com/asetalias/asetalias.github.io"><img src="images/github-fork.png" class="logo-sm"/></a>'+
'                </div>'+
'            </div>'+
'        </div>';
$("#footer").append(html);