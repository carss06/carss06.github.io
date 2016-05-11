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
if($.browser.SafariMobile&&parseFloat((/CPU.+OS ([0-9_]{3}).*AppleWebkit.*Mobile/i.exec(navigator.userAgent)||[0,"4_2"])[1].replace("_","."))<4.1)$.fn.Oldoffset=$.fn.offset,$.fn.offset=function(){var b=$(this).Oldoffset();b.top-=window.scrollY;b.left-=window.scrollX;return b};
(function(b){var c=0,a=0,d=b.browser.msie&&b.browser.version<"9.0"?16:0,f;b.fn.toBrowserWidth=function(){var h=b(this),i=function(){a!=b(window).width()&&(a=b(window).width(),h.css({height:function(){return b(this).height()},width:1,marginLeft:0,left:0,overflow:"hidden",marginRight:0,padding:0}),b("html, script, br, meta, link").each(function(){this.style.display="block";this.style.display=""}),f||(f=function(){c=b(document).width();var a=document.documentElement||document.body;a.clientWidth!=a.offsetWidth&&
(c=a.scrollWidth-1);if(document.documentElement&&a.scrollWidth!=document.body.scrollWidth&&window.screen.width<document.body.scrollWidth)c=document.body.scrollWidth;var d=Math.max(0,c-b(window).width());h.each(function(){var a=b(this),f=-1*a.offset().left+(parseInt(a.css("left"))||0);a.css("padding","");var h=parseInt(a.css("padding-right"));a.css({marginLeft:f,marginRight:-c+(Muse.Browser.Bugs.ClearNeedsOuterWidth&&!a.hasClass("grpelem")?Math.abs(f)+1:-Math.abs(f)),width:c-(a.outerWidth()-a.width())-
d,overflow:"",height:"",paddingRight:d+h});a.parent().width()});f=!1},d?setTimeout(f,d):f()))};b(window).resize(i);b(document).ready(i);return this}})(jQuery);
