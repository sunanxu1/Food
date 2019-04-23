$(function(){
	$(window).resize(function(){
	   if(($(document).width())<1000) {
   	   $('body').css({'background':'none'});
   	   $('.cate a').css({"color":"#333"});
   	   $('.sec2 h4').css({"color":"#333"});
   	   $('.sec2 li a').css({'color':'#333'});
       }
       if (($(document).width())>1000) {
       $('body').css(
        {
       	 'background-image':'url(image/bb1.jpg)',
          'background-repeat':'no-repeat',
           'background-size':'contain',
           'background-color': '#FAF3ED'
       });
        $('.cate a').css({"color":"#fff"});
   	   $('.sec2 h4').css({"color":"#fff"});
   	   $('.sec2 li a').css({'color':'#fff'});
       }
    });
});