
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-15588855-4']);
_gaq.push(['_setSessionCookieTimeout', 0]);
try{
    _gaq.push(['_setCustomVar', 1, 'version', chrome.app.getDetails().version, 2]);
}catch(e){}
_gaq.push(['_trackPageview']);

(function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = 'https://ssl.google-analytics.com/ga.js';
 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
 })();

function checkForValidUrl(tabId, changeInfo, tab){
    if(tab.url.indexOf('//www.google.com/analytics/web/') > -1 && 
            tab.url.indexOf('#management') > -1
      ){
        chrome.pageAction.show(tabId);
    }
}
chrome.tabs.onUpdated.addListener(checkForValidUrl);
