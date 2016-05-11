/* -- Adobe GoLive JavaScript Library */

CSStopExecution=false;
function CSAction(array) {return CSAction2(CSAct, array);}
function CSAction2(fct, array) { 
	var result;
	for (var i=0;i<array.length;i++) {
		if(CSStopExecution) return false; 
		var aa = fct[array[i]];
		if (aa == null) return false;
		var ta = new Array;
		for(var j=1;j<aa.length;j++) {
			if((aa[j]!=null)&&(typeof(aa[j])=="object")&&(aa[j].length==2)){
				if(aa[j][0]=="VAR"){ta[j]=CSStateArray[aa[j][1]];}
				else{if(aa[j][0]=="ACT"){ta[j]=CSAction(new Array(new String(aa[j][1])));}
				else ta[j]=aa[j];}
			} else ta[j]=aa[j];
		}			
		result=aa[0](ta);
	}
	return result;
}
CSAct = new Object;
function CSIEPNGFix(action) 
   {
   var bAgent	= window.navigator.userAgent;
   var bAppName	= window.navigator.appName;
   var bAppVers = window.navigator.appVersion;

   var isIE     = (bAppName.indexOf("Explorer") >= 0);
   var isWin    = (bAgent.indexOf("Win") >= 0); 
    
   if (isIE && isWin)
	   {
       var vers = 0;
       var idx1 = bAppVers.indexOf ("MSIE");
 
       if (idx1 != -1)
          {
          idx1 += 4;
          var idx2 =  bAppVers.indexOf(";", idx1)
          if (idx2 != -1)
              {
              vers = bAppVers.substring(idx1, idx2);
              }
          else
              {
              vers = bAppVers.substring(idx1);
		      }
          }
	   
	   if (vers >= 5.5)
	       {	   	   
	       for(var i=0; i<document.images.length; i++)
	          {
	    	  var img = document.images[i];
		      var imgName = img.src.toUpperCase();
		      if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
		         {
			     var imgID = (img.id) ? "id='" + img.id + "' " : "";
			     var imgClass = (img.className) ? "class='" + img.className + "' " : "";
			     var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
			     var imgStyle = "display:inline-block;" + img.style.cssText;
			     if (img.align == "left") imgStyle = "float:left;" + imgStyle;
			     if (img.align == "right") imgStyle = "float:right;" + imgStyle;
			     if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;
			     var strNewHTML = "<span " + imgID + imgClass + imgTitle
			     + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
		         + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
			     + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
			     img.outerHTML = strNewHTML;
			     i = i-1;
		         }
	          }
	       }
        }
     }
function WBConfirmLink(action) {
	 if (checkIt(action)) {
		 if (action[2] != "(Empty Reference!)" && action[2] != "(EmptyReference!)") {
		 	if (action[3].length < 1) {
				parent.location.href=action[2];
			}
			else {
				parent.frames[action[3]].location.href=action[2];
			}
		}
	}
	return;
}
function checkIt(action) {
	var carryOn = window.confirm(action[1]);
	return carryOn;
	}
function CSClickReturn () {
	var bAgent = window.navigator.userAgent; 
	var bAppName = window.navigator.appName;
	if ((bAppName.indexOf("Explorer") >= 0) && (bAgent.indexOf("Mozilla/3") >= 0) && (bAgent.indexOf("Mac") >= 0))
		return true; /* dont follow link */
	else return false; /* dont follow link */
}