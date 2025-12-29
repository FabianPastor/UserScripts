// ==UserScript==
// @name         Trello Style Mod
// @description  Small Trello CSS mod to change a few minor Style Properties.
// @author       FabianPastor
// @namespace    http://fabi.servehttp.com/
// @version      0.16
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Trello/StyleMod.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Trello/StyleMod.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=trello.com
// @match        https://trello.com/*
// @run-at       document-end
// ==/UserScript==


function applyStyle(){
    GM_addStyle(`
/* Aria-labelledby card-back-name */
#layer-manager-card-back>div>div,
#layer-manager-card-back>div>div>div[data-focus-lock='cardback']>div[aria-labelledby='card-back-name']
{
  width: 100vw !important;
}

/* MAIN */
#layer-manager-card-back>div>div>div[data-focus-lock='cardback']>div[aria-labelledby='card-back-name'] main
{
  width: 50% !important;
  flex-basis: inherit !important;
}

/* MAIN > CONTENT  */
#layer-manager-card-back>div>div>div[data-focus-lock='cardback']>div[aria-labelledby='card-back-name'] main>div,
#layer-manager-card-back>div>div>div[data-focus-lock='cardback']>div[aria-labelledby='card-back-name'] main>section>hggroup
{
  width: 100% !important;
  min-width: inherit !important;
  max-width: inherit !important;
}


/* ASIDE */
#layer-manager-card-back>div>div>div[data-focus-lock='cardback']>div[aria-labelledby='card-back-name'] aside
{
  width: 50% !important;
}

/* ASIDE > CONTENT */
#layer-manager-card-back>div>div>div[data-focus-lock='cardback']>div[aria-labelledby='card-back-name'] aside > div
{
   width: 100% !important;
}
`);
}

(function() {
    'use strict';
    setTimeout(applyStyle,1*1000);
})();
