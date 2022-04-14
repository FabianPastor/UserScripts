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
  var timeout = 1 * 1000; // 2 seconds for each check
  
  var sliderIntervals = 1000;
  var sliderMax = 6;
  var sliderMin = 0;
  var sliderDef = 2;
  var sliderMult = (((sliderMax) - (sliderMin)) / sliderIntervals);
  var sliderDefMult = sliderDef / sliderMult;
  var video = null;


  function sliderLoader() {
    video.playbackRate = sliderDef;
    var center = document.getElementById("center");
    var divslider = document.createElement("div");
    divslider.id = "div_slider";
    divslider.innerHTML = '<input id="slider_speed" type="range" min="0" max="' + sliderIntervals + '" value="' + sliderDefMult + '">' +
      '<span style="background-color:#fff;font-size: 20px;border-radius: 20px;padding: 2px 8px;">' + sliderDef.toFixed(5) + '</span>'
    center.parentElement.insertBefore(divslider, center.nextSibling);

    var slider = document.getElementById("slider_speed");


    slider.oninput = function (element) {
      var value = sliderMult * slider.value;
      unsafeWindow.console.log("New SpeedValue: " + value);
      slider.nextSibling.innerHTML = value.toFixed(5);
      video.playbackRate = value;
    }

    slider.ondblclick = function (element) {
      var value = 1;
      unsafeWindow.console.log("New SpeedValue: " + value);
      slider.value = value / sliderMult;
      slider.nextSibling.innerHTML = value.toFixed(5);
      video.playbackRate = value;
    }
    unsafeWindow.onkeypress = function (ev) {
      unsafeWindow.console.log("Key pressed: " + ev.key);
      var value = sliderMult * slider.value;
      var newValue = value;
      switch (ev.key) {
        case "+":
          newValue = value + (1 / 4);
          break;
        case "-":
          newValue = value - (1 / 4);
          break;
        case "/":
          newValue = 1;
          break;
        case "*":
          newValue = 2;
          break;
        default:
          return;
      }
      ev.preventDefault();
      newValue = (newValue > sliderMax) ? sliderMax : newValue;
      newValue = (newValue < sliderMin) ? sliderMin : newValue;
      slider.value = newValue / sliderMult;
      slider.nextSibling.innerHTML = newValue.toFixed(5);
      video.playbackRate = newValue;

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
    
    if(unsafeWindow.setSpeed2xCount > 30){
      clearInterval(unsafeWindow.setSpeed2x);
      unsafeWindow.setSpeed2x = true;
      return;
    }
    unsafeWindow.setSpeed2xCount++
  }

  if (typeof unsafeWindow.setSpeed2x === 'undefined') {
    unsafeWindow.setSpeed2xCount = 0;
    unsafeWindow.setSpeed2x = window.setInterval(checkVideo, timeout);
  }
})();