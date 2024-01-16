// ==UserScript==
// @name         SoundCloudAutoPlay
// @description  Soundcloud AutoPlay when some adblocker deletes the audio ad so the Player stops.
// @author       FabianPastor
// @namespace    http://fabi.servehttp.com/
// @version      0.01
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/SoundCloud/AutoPlayOnPause.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/SoundCloud/AutoPlayOnPause.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=soundcloud.com
// @match        https://soundcloud.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    let version = "SoundCloud AutoPlay v0.01";
    let timeout = 10*1000; //Repeate every 10 seconds
    let debug = false;
    let d = function (text, force=false){
      if(debug||force){
        if (typeof text === 'string' || text instanceof String){
          unsafeWindow.console.log(version+" "+text);
        }else{
          unsafeWindow.console.log(text);
        }
      }
    }

    d("0 Started");
    //Agregar forma de deshabilitar esta comprobacion.
    let isPlayingSongInterval = null;
    let isEnabledPlayingSong = false;
    let wasInjected = false;

    function toggleEnabledPlayingSong(ev){
        if(!wasInjected) return false;
        d("Toogled AutoPlay Enabled");
        isEnabledPlayingSong = !isEnabledPlayingSong;
    }


    function injectElements(){
        if(wasInjected) return false;
        /*
          <a role="button" class="header__userNavItem header__userNavButton header__userNavMessagesButton" style="text-align: center;">
            <span title="AutoPlayEnabled">
              <input type="checkbox" style="width: 30px; height: 20px; margin-top: 13px;">
             </span>
          </a>
        */
        let nav = document.querySelector("div.header__userNav");

        if(nav == null){
            return false;
        }

        let link = document.createElement("a");
        link.setAttribute("class", "header__userNavItem header__userNavButton header__userNavMessagesButton");
        link.style.textAlign = "center";

        let span = document.createElement("span");
        span.title= "AutoPlayEnabled";

        let input = document.createElement("input");
        input.id = "autoplay_enabled_checkbox";
        input.type = "checkbox";
        input.checked = isEnabledPlayingSong;
        input.setAttribute("style","width: 30px; height: 20px; margin-top: 13px;");

        span.append(input);
        link.append(span);
        nav.append(link);
        input.addEventListener("change", toggleEnabledPlayingSong);

        if(document.querySelector('#autoplay_enabled_checkbox')){
          d("Injected succesfull");
          wasInjected = true;
          return true;
        }

        return false;
    }

    function isPlaying(){
        d("Comprobando si está reproduciendose");
        if(!wasInjected){
          d("INJECTING ELEMENTS");
          return injectElements();
        }

        const button = document.querySelector(".playControl.sc-ir.playControls__control.playControls__play");
        const isSongPlaying = button.classList.contains("playing");

        if(!isSongPlaying && isEnabledPlayingSong){
            button.click();
            d("Clicking the Play Button");
        }
    }

    isPlayingSongInterval = setInterval(isPlaying, timeout);
})();