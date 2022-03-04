// ==UserScript==
// @name         Atomix Links Changer
// @namespace    http://fabi.servehttp.com/
// @version      0.3
// @description  Cambiador de enlaces en AtomixHQ
// @author       FabianPastor
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Atomix/LinksChanger.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Atomix/LinksChanger.user.js
// @match        https://atomixhq.link/*
// @run-at       document-end
// ==/UserScript==

(function() {
  var version = "003";
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

  function changeLinks(){
    d("Started the links changer");
    var links = document.getElementsByTagName("a");
    for(var i=0; i<links.length;i++){
        var href = links.item(i).href;
        var m = href.match(/\/descargar\/torrent\//);
        if(m === null || m === "undefined"){
           links.item(i).href = href.replace(/\/descargar\//,'/descargar/torrent/');
        }
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
  unsafeWindow.setTimeout(changeLinks, timeout);

    // Your code here...
})();