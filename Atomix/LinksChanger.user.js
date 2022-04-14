// ==UserScript==
// @name         Atomix Links Changer
// @namespace    http://fabi.servehttp.com/
// @version      0.9
// @description  Cambia el enlace de todas las paginas al del botón verde.
// @author       FabianPastor
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Atomix/LinksChanger.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Atomix/LinksChanger.user.js
// @match        https://atomixhq.link/*
// @match        http://atomixhq.link/*
// @match        https://atomixhq.club/*
// @match        http://atomixhq.club/*
// @run-at       document-end
// ==/UserScript==

(function() {
  var version = "009";
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

  //Launching the script with a delay.
  d("Starting out the spoilers timeout to launch in " + timeout + "ms");
  unsafeWindow.setTimeout(changeLinks, timeout);
})();