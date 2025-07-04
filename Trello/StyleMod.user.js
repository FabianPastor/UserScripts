// ==UserScript==
// @name         Trello Style Mod
// @description  Small Trello CSS mod to change a few minor Style Properties.
// @author       FabianPastor
// @namespace    http://fabi.servehttp.com/
// @version      0.13
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Trello/StyleMod.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Trello/StyleMod.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=trello.com
// @match        https://trello.com/*
// @run-at       document-end
// ==/UserScript==


function applyStyle(){
    GM_addStyle(`
          ._UvaHK6fukmTc4.sfCjcMKVjES0Hl.t_6PqKcL7DA8Qa,
          .BvYMUSHQ3VZhSV.n2JiYx2TrpRj9Z.udR7hhdNKnONkc{
            width: 100vw !important;
          }

          .u4mjknssOvTvF8.OftUJMY9A1bsMS,
          .JXDJgHrIm3NIAi .bgl1URnPxrvOPl
          {
            width:5% !important;
          }

          .u4mjknssOvTvF8.kli7aIGeyXSbYG,
          .JXDJgHrIm3NIAi .FyDYWBAU_FzZrU{
            width: 90% !important;
            min-width: inherit !important;
            max-width: inherit !important;
          }

          .q5xxNU7ASO2fsR, .q5xxNU7ASO2fsR.N4ktAjtOpkJvy0,
          .w7hbB5D5vQdlht, .w7hbB5D5vQdlht .E59SuLLYHMwjAT{
            width: 95% !important;
          }

          .q5xxNU7ASO2fsR,
          .w7hbB5D5vQdlht{
            flex: 1 1 !important;
          }
        `);
}

(function() {
    'use strict';
    setTimeout(applyStyle,1*1000);
})();
