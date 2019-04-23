$(function(){
	$(window).resize(function(){
	   if(($(document).width())<1000) {
   	   $('body').css({'background':'none'});
       }
       if (($(document).width())>1000) {
       $('body').css(
        {
       	 'background-image':'url(image/bb.jpg)',
          'background-repeat':'no-repeat',
           'background-size':'contain',
           'background-color': '#FAF3ED'
       });
       }
    });
});