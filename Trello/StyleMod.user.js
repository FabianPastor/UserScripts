// ==UserScript==
// @name         Trello Style Mod
// @description  Small Trello CSS mod to change a few minor Style Properties.
// @author       FabianPastor
// @namespace    http://fabi.servehttp.com/
// @version      0.11
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
        //debugger;
        card    = document.querySelector("#layer-manager-card-back>div>div>div");
        if(card == null){
          card    = document.querySelector("div.window.editor-sticky-toolbar");
        }

        if(card !== null){
            //const mainCol = document.querySelector("div.window-main-col");
            //const sideCol = document.querySelector("div.window-sidebar");

            let test_div = document.querySelector("#layer-manager-card-back>div:nth-child(1)>div:nth-child(1)>div>div>div>div:nth-child(3)>div:nth-child(1)");
            if( test_div != null){
                const mainCol = document.querySelector("#layer-manager-card-back>div:nth-child(1)>div:nth-child(1)>div>div>div>div:nth-child(3)>div:nth-child(1)");
                const sideCol = document.querySelector("#layer-manager-card-back>div:nth-child(1)>div:nth-child(1)>div>div>div>div:nth-child(3)>div:nth-child(2)");
            }else{
                const mainCol = document.querySelector("#layer-manager-card-back>div:nth-child(1)>div:nth-child(1)>div>div>div>div:nth-child(2)>div:nth-child(1)");
                const sideCol = document.querySelector("#layer-manager-card-back>div:nth-child(1)>div:nth-child(1)>div>div>div>div:nth-child(2)>div:nth-child(2)");
            }

            try{

                card.style.width    = cardSize+"px";
                card.querySelectorAll(":scope>div>div>div")[1].style.gridTemplateColumns = "[main] "+mainColSize+"px [sidebar] minmax(0, 1fr)"
                mainCol.style.width = mainColSize+"px";
                sideCol.style.width = sideColSize+"px";
                sideCol.style.position = "absolute";
                sideCol.style.left = (mainColSize + 30)+"px"
            }catch(e){
                //alert('Hubo un error al tratar de agrandar la tarjeta.');
            }
        }

    }

    let applyStylesInterval = setInterval(applyStyles,1000);
})();
