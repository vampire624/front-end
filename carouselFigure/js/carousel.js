// JavaScript Document
$(function(){
		var left = $("#barLeft");
		var right =$("#barRight");
		var img = $("#pic img");
		var index = $("#hoverIndex a");
		var inow = 0;
		//左键点击 图片向左播放
		left.click(function(){
			inow--;
			if(inow < 0){
				inow = 4;
				}
			img.eq(inow).siblings().stop().animate({"opacity":"0"},800);
			img.eq(inow).stop().animate({"opacity":"1"},800);
			
			index.eq(inow).addClass("active").siblings().removeClass("active");
				
			})
			
			//右边点击 图片向右播放
			right.click(function(){
			inow++;
			if(inow >4){
				inow = 0;
				}
			img.eq(inow).siblings().stop().animate({"opacity":"0"},800);
			img.eq(inow).stop().animate({"opacity":"1"},800);
			
			index.eq(inow).addClass("active").siblings().removeClass("active");
				
			})
			
			//手动切换
			
			index.mouseover(function(){
				var m = $(this).index();
				inow = m;
				
				img.eq(inow).siblings().stop().animate({"opacity":"0"},800);
				img.eq(inow).stop().animate({"opacity":"1"},800);
				
				index.eq(inow).addClass("active").siblings().removeClass("active");
				
				})
				
				//定义轮播函数
				function start(){
					img.eq(inow).siblings().stop().animate({"opacity":"0"},800);
					img.eq(inow).stop().animate({"opacity":"1"},800);
					
					index.eq(inow).addClass("active").siblings().removeClass("active");
					
					
					}
			//定义启动函数
			function run(){
				inow++;
				if(inow > 4){
					inow = 0;
					}
				start();
				}
		
			//定义定时器，启动轮播
			
			var timer = setInterval(run,2000);
			
			
			//定义鼠标悬浮时，停止轮播
			$("#center").hover(function(){
				clearInterval(timer);
				},function(){
					timer = setInterval(run,2000);
					})
		
		})	