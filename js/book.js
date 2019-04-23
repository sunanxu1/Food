 function run(){
		$.ajax({
			 url:'https://huaqingqing.github.io/foodtxt/params.json',		
			 type:'GET',
			 dataType:'json',
			 success:function(data){
			 		Clist(data);
			 }
			
		});
	}
	run();
	var arr=[];
function Clist(content){
	$.each(content,function(i,v){
	    var li=$('<li></li>');
	    var wrap=$('<div></div>');
	      var tu=v.image;
		 var div1=$('<div>'+v.cname+'</div>');
		 var a1=$('<a href="#">'+v.price+'</a>');
		  var a2=$('<a href="#">'+v.status+'</a>')
		 var div2=$('<div></div>');
		 var div3=$('<div></div>')
		  var images=$('<img src='+tu+'\>');
		  div1.addClass('name');
		  div2.addClass('xq'); 
		  div3.addClass('yd');
		  li.addClass('col-md-4 col-lg-4 col-sm-12 col-xs-12');
		  wrap.addClass('wraps');
         var u=$('.sec2 ul');
         li.appendTo(u);
         wrap.appendTo(li);        
         images.appendTo(wrap);
         images.after(div1);
          div1.after(div2);
          a1.appendTo(div2);
          a2.appendTo(div3);
          div2.after(div3);  
          if (i>=9) {
          	$('.sec2 li').eq(i).addClass('west');
          }  
           $('.sec2 .west').hide();
           $('#west_a').click(function(){
           	  $('.sec2 li').hide();
           	  $('.sec2 .west').show();
           });
          
	});
	 $('.sec2 li .yd').click(function(){
		  var i=$(this).parent().parent().index();
		   //alert(i);
		   arr.push(i);
	      });
	 	$(".yd").click(function(ev){
		var txt=$(this).parent().parent().find(".name").text();
		var price=$(this).parent().parent().find(".xq").text();
		var bSrc=$(this).parent().parent().find("img").attr("src");
		//alert(txt+"..."+bSrc);
		$(".carBox").append("<dl><dt><a href='#'><img src='"+bSrc+"' width='60'/></a></dt><dd><a href=''>"+txt+"</a></dd><dd><a href=''>"+price+"</a></dd></dl>");
		addProduct(ev);
	});
	 	function addProduct(event){
		// 设置落脚点
		var offset = $(".end").offset();
		// 获取当前点击的js对象
		var _this = $(event.target);
		var src = _this.parent().parent().find("img").attr("src");
		var flyer = $("<img src='"+src+"' class='fly'/>");
		flyer.fly({
			start:{
				left:event.clientX,
				top:event.clientY
			},
			end:{
				left: offset.left,
				top: offset.top,
				width:20,
				height:20
			},
			onEnd:function(){
				flyer.fadeOut("slow",function(){
					$(this).remove();
				});
			}
		
		});
	}
}	
