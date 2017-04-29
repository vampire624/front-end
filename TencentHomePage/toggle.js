$(function(){
	$(".title>ul>li").mouseover(function() {
		/* Act on the event */
		$(this).addClass('active').siblings().removeClass('active');
		var num = $(this).index();
		$(this).parent().parent().siblings('.block').eq(num).css('display', 'block').siblings(".block").css('display', 'none');
	});

	$("#inputBox>span").hover(function() {
		$(this).children('ul').css('display', 'block');
		$("#inputBox input").parent().css('borderColor', 'rgb(50, 151, 216)');
	}, function() {
		$(this).children('ul').css('display', 'none');
		$("#inputBox input").parent().css('borderColor', '#a8a8a8');
	});

	$("#inputBox input").focus(function(event) {
		/* Act on the event */
		$(this).parent().css('borderColor', 'rgb(50, 151, 216)');
	});

	$("#inputBox input").blur(function(event) {
		/* Act on the event */
		$(this).parent().css('borderColor', '#a8a8a8');
	});

	$("li.more").hover(function() {
		$(this).css("backgroundColor","rgb(70,159,220)").children('ul').css({'display': 'block','backgroundColor':'rgb(70,159,220)'});
	}, function() {
		$(this).children('ul').css('display', 'none');
	});

	$("#market>ul>li").mouseover(function(event) {
		/* Act on the event */
		$(this).addClass('active').siblings().removeClass('active');
		var i = $(this).index();
		$("#market>.showMarket").eq(i).addClass('active').siblings('.showMarket').removeClass('active');
	});

	$("#constellation").change(function(event) {
		/* Act on the event */
		var star = $(this).children('option:selected').val();
		$("#lucky>div:last-child>p").eq(parseInt(star)).css('display', 'block').siblings('p').css('display', 'none');
		$(this).siblings('a').css('backgroundPosition', '0 '+ -50*parseInt(star) +'px');
	});

	$(".rightFloat").click(function(event) {
		/* Act on the event */
		var dis = $(".bd>ul").stop(true, true).css('left');
		var dis1 = parseInt(dis);
		dis1 += -1000;
		if(dis1 == -3000){
			dis1 = 0;
		}
		$(".bd>ul").animate({"left":dis1+"px"});
		var index = dis1/(-1000);
		$("#dot").children('div').eq(index).addClass('active').siblings().removeClass('active');
	});

	$(".leftFloat").click(function(event) {
		/* Act on the event */
		var dis = $(".bd>ul").stop(true, true).css('left');
		var dis2 = parseInt(dis);
		if(dis2 == 0){
			dis2 = -3000;
		}
		dis2 += 1000;
		$(".bd>ul").animate({"left":dis2+"px"});
		var index = dis2/(-1000);
		$("#dot").children('div').eq(index).addClass('active').siblings().removeClass('active');
	});

	var timer = setInterval(start,3000);

	function start(){
		var dis = $(".bd>ul").css('left');
		var dis3 = parseInt(dis);
		dis3 += -1000;
		if(dis3 == -3000){
			dis3 = 0;
		}
		$(".bd>ul").animate({"left":dis3+"px"});
		var index = dis3/(-1000);
		$("#dot").children('div').eq(index).addClass('active').siblings().removeClass('active');
	}

	$("#carouselPic").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(start,3000);
		/* Stuff to do when the mouse leaves the element */
	});

	$("#dot>div").click(function(event) {
		/* Act on the event */
		var order = $(this).index();
		var num = parseInt(order);
		num *= (-1000);
		$(".bd>ul").animate({"left":num+"px"});
		$(this).addClass('active').siblings().removeClass('active');
	});
})