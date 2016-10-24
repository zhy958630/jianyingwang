(function(){
	
	jQuery(document).ready(function($) {
//			var sangerPlace =  $('#sangar-weddingPlace').sangarSlider({
//				timer : 1000, // true or false to have the timer
//				width : 600, // slideshow width
//  			height : 350 // slideshow height
//			});
//			
			var sangerDress = $('#sangar-weddingDress').sangarSlider({
		        timer :  false, // true or false to have the timer
		        directionalNavShowOpacity : '0.8', // from 0 to 1
		        directionalNavHideOpacity : '0.1', // from 0 to 1
		        directionalNavNextClass : 'exNext', // external ( a ) next class
		        directionalNavPrevClass : 'exPrev', // external ( a ) prev class
		        width : 300, // slideshow width
    			height : 500 // slideshow height
			});
			
			
		})	
	
	
	
	$(function(){
		addFoot();
		
		addShade($(".picture-part .img-div"));
	
	//设置摄影师列表
	var $sellerlistPart = $(".sellerlist-part");
	
	var sellerData = [
		{"name":"huaal wwa","leve":"3","img":"img/listImg/1.png"},
		{"name":"asdal wwa","leve":"2","img":"img/listImg/2.png"},
		{"name":"ssdascal wwa","leve":"1","img":"img/listImg/3.png"},
		{"name":"daeesal wwa","leve":"3","img":"img/listImg/4.png"},
		{"name":"asrecl wwa","leve":"0","img":"img/listImg/5.png"},
		{"name":"aseal wwa","leve":"2","img":"img/listImg/6.png"}
	]
	
	var leveData = [
	"img/atrworkmaster/ptrlevelIcon/primary.png",
	"img/atrworkmaster/ptrlevelIcon/middle.png",
	"img/atrworkmaster/ptrlevelIcon/height.png",
	"img/atrworkmaster/ptrlevelIcon/acer.png",
	];
	
	var dressData=[
			{"name":"木子摄影","showimg":"img/weddingDress/dress/524dd015cca2247198961b4c2e7cba13b70d82652cbfb-NkSANz_fw658.jpg","img":"img/profileImg/l1.png","text":"木子摄影是国内著名的婚纱设计品牌，曾经为AngleBaby设计过，当时也被众多媒体称赞"},
			{"name":"photoBallon","showimg":"img/weddingDress/dress/781f7e24dba612c221c2e8c2b1542b204da216b154e35-63fd3r_fw658.jpg","img":"img/profileImg/l2.png","text":"木子摄影是国内著名的婚纱设计品牌，曾经为AngleBaby设计过，当时也被众多媒体称赞"},
			{"name":"shootMydog","showimg":"img/weddingDress/dress/9bae4b5197a83bcd372ccb7ea3a39f5e08a0acf52d942-g83wP6_fw658.jpg","img":"img/profileImg/l3.png","text":"木子摄影是国内著名的婚纱设计品牌，曾经为AngleBaby设计过，当时也被众多媒体称赞"},
			{"name":"米多摄影","showimg":"img/weddingDress/dress/bd9bc6391eaad1957ba67d2a2a50c916773ec1c12400b-soGFRz_fw658.jpg","img":"img/profileImg/l4.png","text":"木子摄影是国内著名的婚纱设计品牌，曾经为AngleBaby设计过，当时也被众多媒体称赞"},
			{"name":"大师摄影","showimg":"img/weddingDress/dress/dd51d294b4792fc89634d0734fce3cc891355ad7313bf-AQwBT9_fw658.jpg","img":"img/profileImg/l5.png","text":"木子摄影是国内著名的婚纱设计品牌，曾经为AngleBaby设计过，当时也被众多媒体称赞"}
		];
	
	var sellerHtml = '<div class="col-xs-12 col-sm-4 col-md-2">'+
					    '<div class="thumbnail">'+
					      '<img src="${imgurl}" alt="...">'+
					      '<img class="leveIcon" src="${leveUrl}"/>'+
					      '<div class="caption">'+
					      	'<p><h4>${name}</h4></p>'+
					        '<p><a href="#" class="btn btn-primary" role="button">进入Ta的空间</a></p>'+
					     ' </div>'+
					    '</div>'+
					'</div>';
	
	
	function refreshSeller(dataArray){
		var temp = [];
		dataArray.map(function(item){
			var html = sellerHtml.replace("${imgurl}",item.img)
								.replace("${name}",item.name)
								.replace("${leveUrl}",leveData[item.leve] == null ? "":leveData[item.leve]);
			
			temp.push(html);
		})
		
		
		$sellerlistPart.find(".sellerlist").html(temp.join(""));
	}
	
	refreshSeller(sellerData);
	
	$sellerlistPart.find(".nav-tabs li").on("click",function(){
		$sellerlistPart.find(".nav-tabs li").removeClass("active")
		if($(this).data("name") == "cameraman"){
			refreshSeller(sellerData);
		}else if($(this).data("name") == "studio"){
			refreshSeller(dressData);
		}
		$(this).addClass("active");
	})
	//设置拍摄场地栏目

		var $scenePart = $(".scene-part");
		
		var $scaneimglist =  $scenePart.find(".imgList>div");
		
		$scaneimglist.hover(function(){
			console.log("1");
			$(this).find(".imgtitle").css({
				"opacity":"1",
				"transform":'scaleX(1)'
			});
		},function(){
			$(this).find(".imgtitle").css({
				"opacity":"0",
				"transform":'scaleX(0)'
			});
		})
		
		bindScoll($scenePart.get(0),function(){
			$scenePart.find(".show-text").fadeIn(1000);
			
			$scenePart.find("hr").css("width","100%");
			
			$(this).queue(function(){
				$scenePart.find(".show-picture div").css("transform","scale(1,1)");
			}).delay(300).queue(function(){
				$scenePart.find(".show-picture img").css("transform","scale(1,1)");
			}).dequeue();
			
			$scenePart.find(".imgList>div").map(function(i,item){
				
				setTimeout(function(){
					$(item).css({
						"opacity":"1",
						"transform":'translateY(0px)'
					})
				},(i+1)*200);
			})
		},-300);
		
		
		
	//设置最美婚纱栏目
		var $dressPart = $(".dress-part");
		var $dressImgList = $dressPart.find(".imgList");
		var $dressImgListA = $dressImgList.find(".top-part a");
		var imgHeight = $dressImgListA.eq(0).height();
		var $dressBottom =  $dressPart.find(".bottom-part");
		
		//添加滚动触发
		bindScoll($dressPart.get(0),function(){
			
			$dressPart.find(".big-img ").css({"opacity":"1","transform": "translateY(0px)"})
			
			$dressImgList.fadeIn(800);
			var imgInterval =  ($dressImgList.width() -  $dressImgListA.eq(0).width()) / ($dressImgListA.length-1);
			$dressImgListA.map(function(i,item){
		 		//$(item).css("left",(i)*imgInterval+"px");
		 		$(item).css({
						"height":(imgHeight+i*10)+"px",
						"left":(i)*imgInterval+"px"
					})
		 		$(item).hover(function(){
		 			$(this).addClass("changeBig");
		 		},function(){
		 			$(this).removeClass("changeBig");
		 		})
			 })
			//console.log("1");
		},-300);
		
		//图片列的数据
		
		
		var $dressBottomTitle = $dressBottom.find(".title");
		var $dressBottomText = $dressBottom.find("p");
		var $dressBottomImg = $dressBottom.find(".thumbnail img");
		
		//为图片列添加hover事件
		$dressImgListA.on("mouseenter",function(){
			var that = this
			
			$dressBottom.find(".normal").hide();
			$dressBottom.find(".produce").css({"display":"block"});
			
			$(this).clearQueue().queue(function(){
				$dressBottom.css({"opacity":"0","transform": "translateX(30px)"});
				//$(that).dequeue();
			}).delay(300).queue(function(){
				var index = $(this).find("span").data("index");
				$dressBottomTitle.html(dressData[(index-1)].name );
				$dressBottomImg.attr("src",dressData[(index-1)].img);
				$dressBottomText.html(dressData[(index-1)].text);
				$(that).dequeue();
				$dressBottom.css({"opacity":"1","transform": "translateY(0px)"});
			}).dequeue();
			
		})
		
		$dressImgListA.on("mouseleave",function(){
			$dressBottom.find(".normal").show();
			$dressBottom.find(".produce").css({"display":"none"});
		})
		
		
		//设置手机版
		$dressLitterNav = $dressPart.find(".litter-nav")
		$dressSanger = $dressPart.find(".sangar-content-wrapper");
		var sangerHtml = "";
		var navHtml = '<li><a href="javascript:;" class="exPagination">热门推荐</a></li>';
		dressData.map(function(item){
			sangerHtml += '<div class="sangar-content"><img src="'+item.showimg+'" /></div>';
			
			navHtml +='<li><img src='+item.img +' /><a href="javascript:;" class="exPagination">'+item.name+'</a></li>';
		})
		$dressSanger.append(sangerHtml);
		$dressLitterNav.find("ul").append(navHtml);
		
		
		
		startScroll();
				
	})

/**
 * 用于给图片添加遮罩
 */

	function addShade(obj){
		var html = '<div class="picture-shade" ><div>'
		obj.append(html)
				.css("overflow","hidden");
	}


/**
 * 用于检测滚动位置函数
 * 使用方法，先用bindScoll(obj,fn)，绑定函数，再用startScroll()启动滚动监听.
 * bindScoll(obj,fn)// obj为页面滚动触发事件的标志元素对象，即当obj滚动到当前窗口，的顶部时，就会触发传入的fn函数，但fn只会触发一次。	    
 */
	
	
	var fnArry = new Array();
	var changeFlag = true;
	
	//获取元素在页面中离页面顶的距离
	function getElementTop(element){
		var actualTop = element.offsetTop;
		var current = element.offsetParent;
		while (current !== null){
			actualTop += current. offsetTop;
			current = current.offsetParent;
		}
		return actualTop;
	}
	
	//用于绑定检测网页滚动的函数
	function bindScoll(obj,fn,n){
			
			obj.changeFlag = true;
			obj.doFlag = false;
			fnArry.push({
				obj:obj,
				fn:function(){
					
						if(obj.changeFlag == true){
							obj.actualTop=getElementTop(obj);
							
							obj.changeFlag = false;
							//console.log(obj.actualTop);
						}
						var ScrollTop = $(window).scrollTop();
						if(ScrollTop > obj.actualTop+n){
							fn();
							obj.doFlag = true;
							startScroll(fnArry);
						}
						
					}
			})
	}
	
	function startScroll(){

		for(var i=0;i<fnArry.length;i++){
			if(fnArry[i].obj.doFlag === false){
				
				window.addEventListener("scroll",fnArry[i].fn);
				window.removeEventListener("scroll",i==0 ? null : fnArry[i-1].fn);
				return ;
			}
			window.removeEventListener("scroll",fnArry[i].fn);
		}
	}
	
	
//	window.addEventListener("resize",function(){
//		fnArry.map(function(item){
//			
//		})
//	});
	
}())
