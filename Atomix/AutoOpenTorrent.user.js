// ==UserScript==
// @name         Atomix Auto Open Torrent
// @namespace    http://fabi.servehttp.com/
// @version      0.1
// @description  Auto Aprieta el boton de descarga del torrent.
// @author       FabianPastor
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Atomix/AutoOpenTorrent.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Atomix/AutoOpenTorrent.user.js
// @match        https://atomixhq.link/descargar/torrent/*
// @run-at       document-end
// ==/UserScript==

(function() {
  var version = "001";
  var timeout = 0.5 * 1000;
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
    }
  }

  // //Jquery hasClass selector
  // //Source: https://github.com/jquery/jquery/blob/e743cbd28553267f955f71ea7248377915613fd9/test/data/jquery-1.9.1.js#L2262
  // function hasClass(node, selector) {
  //   var className = " " + selector + " ",
  //     node_index = 0,
  //     node_length = node.length;
  //   for (; node_index < node_length; node_index++) {
  //     if (node[node_index].nodeType === 1 && (" " + node[node_index].className + " ").replace(/[\n\t\r]/g, " ").indexOf(className) >= 0) {
  //       return true;
  //     }
  //   }

  //   return false;
  // }
  //Launching the script with a delay.
  d("Starting out the spoilers timeout to launch in " + timeout + "ms");
  unsafeWindow.setTimeout(autoOpenTorrent, timeout);

    // Your code here...
})();