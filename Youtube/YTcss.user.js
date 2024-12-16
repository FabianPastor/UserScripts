// ==UserScript==
// @name         YoutubeCSS
// @description  Sets some CSS for Main YOUTUBE Page
// @author       FabianPastor
// @namespace    http://fabi.servehttp.com/
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Youtube/YTcss.user.js
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Youtube/YTcss.user.js
// @version      0.4
// @match        https://www.youtube.com/feed/subscriptions*
// @match        https://www.youtube.com
// @run-at       document-end
// ==/UserScript==

(function () {
    const timeout = 5 * 1000; //Miliseconds

    if (typeof unsafeWindow.checkYoutubeCSS === 'undefined'){
        unsafeWindow.checkYoutubeCSS = unsafeWindow.setInterval(function(){
            unsafeWindow.document.querySelectorAll('ytd-rich-section-renderer')
                .forEach((e,i)=>{e.style.display="none";});
            unsafeWindow.document.querySelectorAll('ytd-rich-item-renderer')
                .forEach((e,i)=>{e.style.width="230px";});
        }, timeout);
    }
})();
