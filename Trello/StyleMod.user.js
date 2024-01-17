// ==UserScript==
// @name         Trello Style Mod
// @description  Small Trello CSS mod to change a few minor Style Properties.
// @author       FabianPastor
// @namespace    http://fabi.servehttp.com/
// @version      0.01
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Trello/StyleMod.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Trello/StyleMod.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=trello.com
// @match        https://trello.com/*
// @run-at       document-end
// ==/UserScript==
(function() {
    'use strict';

    function applyStyles(){
        let cardSize    = 1000;
        let sideColSize = 200;
        let mainColSize = cardSize - sideColSize - 50;
        
        let card    = document.querySelector("div.window.editor-sticky-toolbar");
        let mainCol = document.querySelector("div.window-main-col");
        let sideCol = document.querySelector("div.window-sidebar");
        
        
        card.style.width    = cardSize+"px";
        mainCol.style.width = mainColSize+"px";
        sideCol.style.width = sideColSize+"px";
    }

    let applyStylesInterval = setInterval(applyStyles,1000);

    // Your code here...
})();