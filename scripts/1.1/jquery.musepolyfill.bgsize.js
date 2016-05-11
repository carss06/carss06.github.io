/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2011 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
(function(b){if(!Muse.Utils.checkCSSFeature("background-size")){var c=function(a){var d=b(a),c=Muse.Utils.getStyleValue(a,"background-image").replace(/^\s*url\(\"?/,"").replace(/['"]?\)/,""),i=document.createElement("img"),j=document.createElement("div"),m=this,l=!1,k=1,n=1,o=!1,p=!0;b(j).css({overflow:"hidden",position:"absolute",top:"0px",left:"0px",width:a.clientWidth+"px",height:a.clientHeight+"px",marginBottom:"-"+a.clientHeight+"px",marginRight:"-"+a.clientWidth+"px",zIndex:"-1"}).addClass("museBgSizePolyfill");
i.src=c;i.alt="";i.style.position="absolute";j.appendChild(i);a.children.length>0?a.insertBefore(j,a.children[0]):a.appendChild(j);if(a===document.body)d=b("html"),a=d.get(0),c=d.css("background-image").replace(/^\s*url\(['"]?/,"").replace(/['"]?\)$/,""),i.src=c,d.css("background-attachment")=="fixed"?(j.style.position="fixed",p=!1):j.style.position="absolute";else if(d.is("#page"))d.css("marginLeft").toLowerCase()=="auto"&&(o=!0),j.style.top=d.offset().top+parseInt(d.css("borderTopWidth"))+"px",
j.style.bottom=parseInt(d.parent().css("paddingBottom"))+parseInt(d.css("borderBottomWidth"))+"px",j.style.left=d.offset().left+parseInt(d.css("borderLeftWidth"))+"px",j.style.right=d.offset().left+parseInt(d.css("borderRightWidth"))+"px",j.style.zIndex=0;else if(d.css("position")=="static")a.style.position="relative";this.reloadImage=function(){var b=Muse.Utils.getStyleValue(a,"background-image").replace(/^\s*url\(\"?/,"").replace(/['"]?\)/,"");if(b!=i.src)i.src=b;a.style.backgroundImage="none";
b=(d.css("background-position-x")+" "+d.css("background-position-y")).replace(/^\s+/,"").replace(/\s+$/,"").split(/\s+/);b.length==1&&b[0].indexOf("center")>=0&&b.push("center");for(var c=0,h=b.length;c<h;c++)switch(b[c]){case "center":case "50%":c==0?(i.style.left="50%",i.style.marginLeft="-"+Math.ceil(i.offsetWidth/2)+"px"):(i.style.top="50%",i.style.marginTop="-"+Math.ceil(i.offsetHeight/2)+"px");break;case "left":i.style.left="0px";i.style.marginLeft="0px";break;case "right":i.style.right="0px";
i.style.marginLeft="0px";break;case "top":i.style.top="0px";i.style.marginTop="0px";break;case "bottom":i.style.bottom="0px";i.style.marginTop="0px";break;default:c==0?(i.style.left=b[c],i.style.marginLeft="-"+Math.ceil(i.offsetWidth/2)+"px"):(i.style.top=b[c],i.style.marginTop="-"+Math.ceil(i.offsetHeight/2)+"px")}};this.resizeImage=function(b){var d=!p?a.clientWidth:Math.max(a.scrollWidth,a.clientWidth),c=!p?a.clientHeight:Math.max(a.scrollHeight,a.clientHeight),g=d/k,h=c/n;j.style.height=c+"px";
j.style.marginBottom="-"+c+"px";j.style.width=d+"px";j.style.marginRight="-"+d+"px";g<h==b?(i.style.height=c+1+"px",i.style.width="auto"):(i.style.width=d+1+"px",i.style.height="auto")};this.update=function(){if(l){a.style.backgroundImage="";var b=d.css("background-image").toLowerCase(),c=(a.currentStyle||window.getComputedStyle(a,null))["background-size"];c&&c.toLowerCase();if(b!="none"&&(c=="cover"||c=="contain")){if(m.reloadImage(),j.style.display="block",j.style.width="0px",j.style.height="0px",
m.resizeImage(c=="cover"),o)j.style.left=d.offset().left+parseInt(d.css("borderLeftWidth"))+"px",j.style.right=d.offset().left+parseInt(d.css("borderRightWidth"))+"px"}else j.style.display="none"}};if(i.complete)l=!0,k=i.clientWidth,n=i.clientHeight;else b(i).one("load",function(){l=!0;k=i.clientWidth;n=i.clientHeight;m.update()});this.update()},a=[];b(".museBGSize").each(function(){var d=new c(this);this!==document.body?a.push(d):(b(window).resize(function(){setTimeout(function(){d.update()},10)}),
b(window).load(function(){setTimeout(function(){d.update()},10)}))});var d=a.length;d>0&&setInterval(function(){for(var b=0;b<d;b++)a[b].update()},Math.max(50,8*d))}})(jQuery);
