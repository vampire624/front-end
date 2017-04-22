// JavaScript Document
$("#forward").on("click",function(){
			var dis = $("#main ul").stop(false,true).css("left");
			dis1 = parseInt(dis)-1000;
			if( dis1 == -4000){
				dis1 =0;
				}
			$("#main ul").animate({"left":dis1+"px"},500);
			var eq = Math.abs(parseInt(dis1));
			$("#dot li").eq(eq/1000).addClass("active").siblings().removeClass("active");
		})
		
		
	$("#backward").on("click",function(){
			var dis = $("#main>ul").stop(false,true).css("left");
			var dis2 = parseInt(dis);
			if( dis2 == 0){
				dis2 =-4000;
				}
			dis2 +=1000;
			$("#main>ul").animate({"left":dis2+"px"},500);
			var eq = Math.abs(parseInt(dis2));
			$("#dot li").eq(eq/1000).addClass("active").siblings().removeClass("active");
		})
		
		function autoPlay(){
			var dis = $("#main>ul").css("left");
			dis3 = parseInt(dis)-1000;
			if( dis3 == -4000){
				dis3 = 0;
				}
			$("#main>ul").animate({"left":dis3+"px"},500);
			var eq = Math.abs(parseInt(dis3));
			$("#dot li").eq(eq/1000).addClass("active").siblings().removeClass("active");
		}
		
		var timer = setInterval(autoPlay,2000);
		
		$("#main").hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(autoPlay,2000);
				})
				
		$("#dot li").click(function(){
				var index = $(this).index();
				$("#main>ul").stop(false,true).animate({"left":-index*1000+"px"},500);
				$(this).addClass("active").siblings().removeClass("active");
			})