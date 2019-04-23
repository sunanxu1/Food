$(function(){
	$(window).resize(function(){
	   if(($(document).width())<1000) {
   	   $('body').css({'background':'none'});
       $('#huo').hide();
       }
       if (($(document).width())>1000) {
       $('body').css(
        {
       	 'background-image':'url(image/bb2.jpg)',
          'background-repeat':'no-repeat',
           'background-size':'contain',
           'background-color': '#FAF3ED'
       });
       }
    });
});