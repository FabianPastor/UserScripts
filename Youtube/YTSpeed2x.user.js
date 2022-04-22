// ==UserScript==
// @name         Youtube Auto 2x
// @description  Auto sets the speed to 2x and adds a slider to change the speed.
// @author       FabianPastor
// @namespace    http://fabi.servehttp.com/
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Youtube/YTSpeed2x.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Youtube/YTSpeed2x.user.js
// @version      0.2
// @match        https://www.youtube.com/watch?v=*
// @match        http://www.youtube.com/watch?v=*
// @run-at       document-end
// ==/UserScript==

(function () {
  var timeout = 2 * 1000; // 2 seconds for each check

  var sliderIntervals = 1000;
  var sliderMax = 6;
  var sliderMin = 0;
  var sliderDef = 2;
  var sliderMult = (((sliderMax) - (sliderMin)) / sliderIntervals);
  var sliderDefMult = sliderDef / sliderMult;
  var video = null;
  var center = null;
  var slider = null;
  var divslider = null;

  function updateSliderValue(value,force = false){
    value = (value > sliderMax)?sliderMax:value;
    value = (value < sliderMin)?sliderMin:value;

    if(!force && value === getCurrentSliderValue()){
      return;
    }

    slider.value = value/sliderMult;
    slider.nextSibling.innerHTML = value.toFixed(5);
    video.playbackRate = value;
  }
  function getCurrentSliderValue(){
    return sliderMult * slider.value;
  }

  function sliderLoader() {

    center = document.getElementById("center");
    divslider = document.createElement("div");

    divslider.id = "div_slider";
    divslider.innerHTML = '<input id="slider_speed" type="range" min="0" max="' + sliderIntervals + '" value="' + sliderDefMult + '">' +
    '<span style="background-color:#fff;font-size: 20px;border-radius: 20px;padding: 2px 8px;">' + sliderDef.toFixed(5) + '</span>'
    center.parentElement.insertBefore(divslider, center.nextSibling);
    slider = document.getElementById("slider_speed");
    updateSliderValue(sliderDef);


    slider.oninput = function (element) {
      var value = getCurrentSliderValue();
      unsafeWindow.console.log("New SpeedValue onInput: " + value);
      updateSliderValue(value, true);
    }

    divslider.ondblclick = function (element) {
      var value = Math.round(getCurrentSliderValue());
      if(value == 1){
        value = 2;
      }else{
        value = 1;
      }

      unsafeWindow.console.log("New SpeedValue onDBLClick: " + value);
      updateSliderValue(value);
    }

    divslider.onwheel = function(ev){
      unsafeWindow.console.log("Detected onWheel change: "+ ev);

      if(ev.deltaY === 0){
          return;
      }
      var value = getCurrentSliderValue();
      if((ev.deltaY) < 0){
          value = value + (1/16);
      }else{
          value = value - (1/16);
      }
      ev.preventDefault();

      updateSliderValue(value);
    }

    unsafeWindow.onkeypress = function (ev) {
      unsafeWindow.console.log("Key pressed: " + ev.key);
      var value = getCurrentSliderValue();
      switch (ev.key) {
        case "+":
          value = value + (1 / 4);
          break;
        case "-":
          value = value - (1 / 4);
          break;
        case "/":
          value = 1;
          break;
        case "*":
          value = 2;
          break;
        default:
          return;
      }
      ev.preventDefault();
      updateSliderValue(value);
    }

  }

  function checkVideo() {
    try {
      video = document.getElementsByTagName("video")[0];

      clearInterval(unsafeWindow.setSpeed2x);
      unsafeWindow.setSpeed2x = true;
      sliderLoader();
    } catch (e) {
      unsafeWindow.console.log(e);
    }
/*
    if(unsafeWindow.setSpeed2xCount > 30){
      clearInterval(unsafeWindow.setSpeed2x);
      unsafeWindow.setSpeed2x = true;
      return;
    }
    unsafeWindow.setSpeed2xCount++
*/
  }

  if (typeof unsafeWindow.setSpeed2x === 'undefined') {
    unsafeWindow.setSpeed2xCount = 0;
    unsafeWindow.setSpeed2x = window.setInterval(checkVideo, timeout);
  }
})();
