// ==UserScript==
// @name         Auto-Show Spoilers Mediavida forum
// @description  It opens all the spoilers on the forum page.
// @author       FabianPastor
// @namespace    http://fabi.servehttp.com
// @version      0.7
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Mediavida/MVAutoSpoilers.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Mediavida/MVAutoSpoilers.user.js
// @match        https://www.mediavida.com/foro/*
// @run-at       document-end
// ==/UserScript==

(function() {
  var version = "007";
  var timeout = 2 * 1000;
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

  function clickOnSpoilers() {
    var spoilers = document.getElementsByClassName("spoiler-wrap");
    var spoilers_n = spoilers.length;
    d("Spoilers fetch");
    d(spoilers);

    try {
      d("Looping over the spoilers");
      for (var i = 0; i < spoilers_n; i++) {
        var spoiler = spoilers.item(i).getElementsByClassName("spoiler").item(0);
        d("Checking spoiler number: " + i);
        if (hasClass(spoiler, "less")) {
          d("Spoiler already opened");
        } else {
          d("Spoiler clicked");
          d(spoiler)
          spoiler.click();
        }
      }
    } catch (e) {
      d('Error: Document tree modified during iteration ' + e);
    }
  }

  //Jquery hasClass selector
  //Source: https://github.com/jquery/jquery/blob/e743cbd28553267f955f71ea7248377915613fd9/test/data/jquery-1.9.1.js#L2262
  function hasClass(node, selector) {
    var className = " " + selector + " ",
      node_index = 0,
      node_length = node.length;
    for (; node_index < node_length; node_index++) {
      if (node[node_index].nodeType === 1 && (" " + node[node_index].className + " ").replace(/[\n\t\r]/g, " ").indexOf(className) >= 0) {
        return true;
      }
    }

    return false;
  }

  //Launching the script with a delay.
  //document.observe('dom:loaded', clickOnSpoilers());
  d("Starting out the spoilers timeout to launch in " + timeout + "ms");
  unsafeWindow.setTimeout(clickOnSpoilers, timeout);
})();
