// ==UserScript==
// @name         Youtube autoconfirm
// @description  Autoconfirms the playing blocking
// @author       FabianPastor
// @namespace    http://fabi.servehttp.com/
// @version      0.10
// @updateURL    https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Youtube/YTAutoConfirm.user.js
// @downloadURL  https://raw.githubusercontent.com/FabianPastor/UserScripts/master/Youtube/YTAutoConfirm.user.js
// @match        https://www.youtube.com/watch?v=*
// @run-at       document-end
// ==/UserScript==

(function() {
  var version = "010";
  var timeout = 15 * 1000; //Miliseconds
  var debug = false;
  var popuptagnames=[
    //"paper-toast",
    "paper-dialog"
  ];
  var popup = null;
  var d = function (text,force=false){
    if(debug||force){
      if (typeof text === 'string' || text instanceof String){
        unsafeWindow.console.log(version+" "+text);
      }else{
        unsafeWindow.console.log(text);
      }
    }
  }

  d("0 Creating isPopupHidden Function");
  var isPopup = function(){
    try{
      d("5.2.1 Start Popup");
      var display = "";
      
      d("5.2.2 Get Containers");
      var containers = document.getElementsByTagName("ytd-popup-container");
      
      d("5.2.3 Containers");
      d(containers);

      d("5.2.4 Container");
      var container = containers.item(0);
      d(container);

      d("5.2.5 Get Popup");
      popuptagnames.forEach(function(itemName){
         try{
           if(popup == null){
             popup = container.getElementsByTagName(itemName).item(0);
           }else{
             d("5.2.5.1 item "+itemName+" skipped. popup already found.");
           }
         }catch(e1){
           d(e1);
         }finally{
           if(popup == null){
             d("5.2.5.2 item "+itemName+" not found");
           }
         }
         
      })
      d("5.2.6 Popup");
      d(popup);
      
      d("5.2.7 Get Property Display");
      display = popup.style.getPropertyValue("display");
      d("5.2.8 Property Display");
      d(display);
      return display=="none"?false:true;
    }catch(e){
      d("5.2.9 Some exception happened");
      return false;
    }
  }
  
  d("1 Creating PressYes Function");
  var pressYes = function(){
    d("5.1 Entered PressYes");

    d("5.2 If display is empty then ckick the button yes");
    if(isPopup()){
      d("5.4 Clicking buttons");
      try{
        var buttons = popup.getElementsByTagName("paper-button");
        d(buttons);
        for(var i=0;i<buttons.length;i++){
            d("5.4.1 Button Yes clicked !!",true);
            buttons.item(i).getElementsByTagName("yt-formatted-string").item(0).click();
        }
      }catch(e2){
          d("5.4.2 Unknown exception");
          d(e2);
      }
    }else{
      d("5.3 There is no Yes Button displayed :(");
    }
    popup = null;
  }
  
  d("2 starting setinterval if not exists");
  if (typeof unsafeWindow.checkYoutubeShitPopupID === 'undefined'){
    d("3 Starting SetInterval");
    unsafeWindow.checkYoutubeShitPopupID = window.setInterval(function(){
      d("5 Fuck Yeah, check if that popup exists and press yes if needed!");
      pressYes();
    }, timeout);
    d("4 Inserted YOUTUBE ShitPopup Yes clicker!");
  }
})();