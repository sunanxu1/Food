$(function(){
	$('.big .bigs:gt(0)').hide();
	var time=setInterval(function(){
		$('.cookers .img01').animate({'top':'10px','transition':'all 0.5 ease'}).animate({top:'0px','transition':'all 0.5 ease'});
		$('.cookers .img02').animate({'top':'110px','transition':'all 0.5 ease'}).animate({top:'100px','transition':'all 0.5 ease'});
		$('.cookers .img03').animate({'top':'240px','transition':'all 0.5 ease'}).animate({top:'230px','transition':'all 0.5 ease'});
		$('.cookers .img04').animate({'top':'330px'}).animate({top:'320px'});
		$('.cookers .img05').animate({'top':'26px'}).animate({top:'16px'});
		$('.cookers .img06').animate({'top':'130px'}).animate({top:'120px'});
		 $('.cookers .img07').animate({'top':'260px'}).animate({top:'250px'});
	},500);
	$('.cookers .img').mouseenter(function(){
		var i=$(this).index();
		clearInterval(time);
		$('.big .bigs').hide();
		$('.big .bigs').eq(i).show();
	}).mouseleave(function(){
		setInterval(function(){
		$('.cookers .img01').animate({'top':'10px','transition':'all 0.5 ease'}).animate({top:'0px','transition':'all 0.5 ease'});
		$('.cookers .img02').animate({'top':'110px','transition':'all 0.5 ease'}).animate({top:'100px','transition':'all 0.5 ease'});
		$('.cookers .img03').animate({'top':'240px','transition':'all 0.5 ease'}).animate({top:'230px','transition':'all 0.5 ease'});
		$('.cookers .img04').animate({'top':'330px'}).animate({top:'320px'});
		$('.cookers .img05').animate({'top':'26px'}).animate({top:'16px'});
		$('.cookers .img06').animate({'top':'130px'}).animate({top:'120px'});
		 $('.cookers .img07').animate({'top':'260px'}).animate({top:'250px'});
	  },500);
	});
});