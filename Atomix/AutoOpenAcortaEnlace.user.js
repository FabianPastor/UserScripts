// ==UserScript==
// @name         AcortaEnlace - AutoOpen Links
// @namespace    http://fabi.servehttp.com/
// @version      0.2
// @description  Auto Aprieta el boton verde en la web de acortaenlace.
// @author       FabianPastor
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Atomix/AutoOpenAcortaEnlace.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Atomix/AutoOpenAcortaEnlace.user.js
// @match        https://acorta-enlace.com/*
// @match        http://acorta-enlace.com/*
// @run-at       document-end
// @grant unsafeWindow
// @grant window.close
// @grant GM_cookie
// @grant GM.cookie
// ==/UserScript==

(function() {
  var version = "002";
  var timeout = 1 * 1000;
  var count = 0;
  var debug = false;
  var d = function(text, force = false) {
    if (debug || force) {

      if (typeof text === 'string' || text instanceof String) {
        unsafeWindow.console.log(version + " " + text);
      } else {
        unsafeWindow.console.log(text);
      }
    }
  }
  
  GM.cookie.set({ name: 'af0mwxhq52', value: 'Wn275', expirationDate: (new Date()).setYear(2050) })
  
  function autoOpenTorrent(){
    d("Started the Link Opener");
    if (typeof DYykkzwP === "string") {
      d("Opening Torrent");
      
      unsafeWindow.open(DYykkzwP);
      unsafeWindow.setTimeout(function(){
       window.close();
      }, 1500);

    }else{
      if(count < 4){
        unsafeWindow.setTimeout(autoOpenTorrent, timeout);
        count++;
      }
    }
  }

  //Launching the script with a delay.
  d("Starting out the spoilers timeout to launch in " + timeout + "ms");
  unsafeWindow.setTimeout(autoOpenTorrent, timeout);

})();