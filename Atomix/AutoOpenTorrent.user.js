// ==UserScript==
// @name         Atomix Auto Open Torrent
// @namespace    http://fabi.servehttp.com/
// @version      0.8
// @description  Auto Aprieta el boton de descarga del torrent.
// @author       FabianPastor
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Atomix/AutoOpenTorrent.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Atomix/AutoOpenTorrent.user.js
// @match        https://atomixhq.link/descargar/torrent/*
// @match        http://atomixhq.link/descargar/torrent/*
// @match        https://atomixhq.club/descargar/torrent/*
// @match        http://atomixhq.club/descargar/torrent/*
// @run-at       document-end
// @grant unsafeWindow
// @grant window.close
// ==/UserScript==

(function() {
  var version = "008";
  var timeout = 0.5 * 1000;
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

  function autoOpenTorrent(){
    d("Started the Link Opener");
    if (typeof openTorrent === "function") { 
      d("Opening Torrent");
      openTorrent();
      window.close();
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