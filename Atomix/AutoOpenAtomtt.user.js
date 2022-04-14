// ==UserScript==
// @name         Atomtt Auto Open Torrent
// @namespace    http://fabi.servehttp.com/
// @version      0.24
// @description  Auto Aprieta el boton de descarga del torrent.
// @author       FabianPastor
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Atomix/AutoOpenAtomtt.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Atomix/AutoOpenAtomtt.user.js
// @match        https://atomtt.com/*
// @match        http://atomtt.com/*
// @run-at       document-end
// @grant unsafeWindow
// @grant window.close
// ==/UserScript==

(function() {
  var version = "024";
  var timeout = 1 * 1000;
  var debug = false;
  var queryPath = document.URL.replace(/https?:\/\/[^/]+/, "")
  var count = 0;
  
  var d = function(text, force = false) {
    if (debug || force) {

      if (typeof text === 'string' || text instanceof String) {
        unsafeWindow.console.log(version + " " + text);
      } else {
        unsafeWindow.console.log(text);
      }
    }
  }

  function decodeLink(link){
    return link;
  }

  function getEncodedLinkFromScripts(){
    return true;
  }

  function getEncodedLinkFromElement(nodeElement){
    if(nodeElement.nodeName.toLowerCase() === "a"){
      return nodeElement.href;
    }
    return true;
  }

  function detectLink(){
    var nodeElement;

    if(queryPath.match("/index.php")){
      if(nodeElement = document.getElementById("bx").firstElementChild.firstElementChild ){
        return getEncodedLinkFromElement(nodeElement);
      }
      return getEncodedLinkFromScripts();
    }
    return false;
  }

  function AutoOpenLink(){
    d("Started the Link Opener");
    var link_encoded ;
    if(link_encoded = detectLink()){
      if (typeof link_encoded === "string") {
        d("Link found!!");
        var link = decodeLink(link_encoded);
        d(link);
        window.open(link);

        unsafeWindow.setTimeout(function(){
          window.close();
        }, 1500);

      }else{
        if(count < 10){
          d("Linkd doesnt found. Checking again.");
          unsafeWindow.setTimeout(AutoOpenLink, timeout);
          count++;
        }else{
          d("Stoped Trying to find it.");
        }
      }
    }
  }

  //Launching the script with a delay.
  d("Starting out the spoilers timeout to launch in " + timeout + "ms");
  unsafeWindow.setTimeout(AutoOpenLink, timeout);

})();