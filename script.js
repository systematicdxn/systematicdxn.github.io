





const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);







/*
   Image Popup Handler
   Version 1.0
   May 23, 2016

   Will Bontrager Software LLC
   https://www.willmaster.com/
   Copyright 2016 Will Bontrager Software LLC

   This software is provided "AS IS," without any warranty of any kind, without even 
   any implied warranty such as merchantability or fitness for a particular purpose. 
   Use of this software is subject to the Website's Secret Software License Agreement.
   https://www.willmaster.com/software/WebSitesSecret/WS_LicenseAgreement.html
*/
function CloseImagePopup(divid) { document.getElementById(divid).style.display = "none"; }
function ShowImagePopup(dividname,imgdividname,imgidname,imgurl)
{
   var imgid = document.getElementById(imgidname);
   var divid = document.getElementById(dividname);
   var imgdivid = document.getElementById(imgdividname);
   imgid.src = imgurl;
   var vpheight = 0;
   if(document.documentElement && document.documentElement.clientHeight) { vpheight = document.documentElement.clientHeight; }
   else if(document.body) { vpheight = document.body.clientHeight; }
   else if(self.innerWidth) { vpheight = self.innerHeight; }
   if( ! vpheight ) { return; }
   var imgwidth = parseInt(imgid.naturalWidth);
   if( ! imgwidth ) { return; }
   var imgheight = parseInt(imgid.naturalHeight);
   imgdivid.style.maxWidth = imgwidth + "px";
   imgdivid.style.maxHeight = imgheight + "px";
   imgdivid.style.marginTop = parseInt((vpheight/2)-(imgheight/2)) + "px";
   divid.style.display = "block";
   var scrollHeight = imgdivid.scrollHeight;
   if( scrollHeight > vpheight )
   {
      scrollHeight = vpheight; 
      imgid.style.height = vpheight + "px";
      imgdivid.style.width = parseInt(vpheight*(imgwidth/imgheight)) + "px";
   }
   imgdivid.style.marginTop = parseInt((vpheight/2)-(scrollHeight/2)) + "px";
} // function ShowImagePopup()






















