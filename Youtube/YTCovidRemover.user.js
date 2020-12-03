// ==UserScript==
// @name         Youtube Covid Remover
// @description  Removes the placeholder for covid benith the video
// @author       FabianPastor
// @namespace    http://fabi.servehttp.com/
// @version      0.3
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Youtube/YTCovidRemover.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Youtube/YTCovidRemover.user.js
// @match        https://www.youtube.com/watch?v=*
// @run-at       document-end
// ==/UserScript==

(function() {
  var timeout = 1*1000;
  if (typeof unsafeWindow.checkCovid === 'undefined'){
    unsafeWindow.checkCovid = window.setInterval(function(){
      var coviddiv = document.getElementById("clarify-box");
      try{
          if(coviddiv.style.display !== "none"){
              coviddiv.style.display ="none";
          }
          clearInterval(unsafeWindow.checkCovid);
          unsafeWindow.checkCovid = true;
      }catch(e){
          unsafeWindow.console.log(e);
      }
    }, timeout);
  }
})();