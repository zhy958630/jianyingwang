$(function(){
	//引入脚部
	addFoot();

	//右导航
	$(".rnav .Item").hover(
		function(){
			$(this).find(".neirong").addClass("hover");
		},
		function(){
			$(this).find(".neirong").removeClass("hover");
		}
	)

	//设置自动轮播
	$('.carousel').carousel(); 
	
	//摄影社区鼠标移入效果	
	$(".tab tr").mouseenter(function(){
           	$(this).addClass("active").siblings().removeClass("active");           	
           	var index = $(this).index();
           	$(".pic")
           		.eq(index)
           		.addClass("selected")
           		.siblings(".pic")
           		.removeClass("selected");
         });

	//二维码
	$(".glyphicon-qrcode").click(function(){
		$(".erweima").show();
	});
	$(".guangbi").click(function(){
		$(".erweima").hide();		
	});
	
});
