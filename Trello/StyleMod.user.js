// ==UserScript==
// @name         Trello Style Mod
// @description  Small Trello CSS mod to change a few minor Style Properties.
// @author       FabianPastor
// @namespace    http://fabi.servehttp.com/
// @version      0.14
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
.BvYMUSHQ3VZhSV.n2JiYx2TrpRj9Z.udR7hhdNKnONkc
{
  width: 100vw !important;
}

/* MAIN */
main.wc06Ow6i2YO3aG
{
  width: 50% !important;
}

/* MAIN > CONTENT  */
main.wc06Ow6i2YO3aG .t6cNjdAqr4XLQt,
.BvYMUSHQ3VZhSV
{
  width: 100% !important;
  min-width: inherit !important;
  max-width: inherit !important;
}


/* ASIDE */
aside.vUqpA6EbZkEvq6
{
  width: 50% !important;
}

/* ASIDE > CONTENT */
aside.vUqpA6EbZkEvq6 > div
{
   width: 100% !important;
}
`);
}

(function() {
    'use strict';
    setTimeout(applyStyle,1*1000);
})();
