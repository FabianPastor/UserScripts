// ==UserScript==
// @name         Trello Style Mod
// @description  Small Trello CSS mod to change a few minor Style Properties.
// @author       FabianPastor
// @namespace    http://fabi.servehttp.com/
// @version      0.10
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Trello/StyleMod.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Trello/StyleMod.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=trello.com
// @match        https://trello.com/*
// @run-at       document-end
// ==/UserScript==
(function() {
    'use strict';

    function applyStyles(){
        const cardSize    = Math.round(window.innerWidth*0.8);
        const sideColSize = 200;
        const mainColSize = cardSize - sideColSize - 50;
        let card = null;
      
        card    = document.querySelector("#layer-manager-card-back>div>div>div");
        if(card == null){
          card    = document.querySelector("div.window.editor-sticky-toolbar");
        }

        if(card !== null){
            const mainCol = document.querySelector("div.window-main-col");
            const sideCol = document.querySelector("div.window-sidebar");

            try{
                card.style.width    = cardSize+"px";
                mainCol.style.width = mainColSize+"px";
                sideCol.style.width = sideColSize+"px";
            }catch(e){
                //alert('Hubo un error al tratar de agrandar la tarjeta.');
            }
        }

    }

    let applyStylesInterval = setInterval(applyStyles,1000);

    // Your code here...
})();
