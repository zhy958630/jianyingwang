$(function(){
	//引入头部和脚部
	addHead();
	addFoot();
	
	
	///////////////////////////////////////////////////////////////////////
	////////自定义假数据
	//我的收藏部分
	var photographer=[
		{name:'不二村家的偶像',country:'中国',city:'广州',motto:'无拘无束，自由摄影人',favicon:'img/profileImg/s3.png',collection:'568',level:'img/atrworkmaster/ptrlevelIcon/acer.png',colTime:'2016.02.15'},
		{name:'边儿可',country:'中国',city:'深圳',motto:'约片请加微信 bancal',favicon:'img/profileImg/s1.png',collection:'548',level:'img/atrworkmaster/ptrlevelIcon/height.png',colTime:'2016.03.24'},
		{name:'Alier Lee',country:'中国',city:'北京',motto:'I am nothing,but here',favicon:'img/profileImg/s2.png',collection:'788',level:'img/atrworkmaster/ptrlevelIcon/middle.png',colTime:'2016.04.25'},
		{name:'张四疯',country:'中国',city:'上海',motto:'一个会照相的人',favicon:'img/profileImg/s4.png',collection:'158',level:'img/atrworkmaster/ptrlevelIcon/primary.png',colTime:'2016.05.28'},
		{name:'不二村家的偶像',country:'中国',city:'广州',motto:'无拘无束，自由摄影人',favicon:'img/profileImg/s3.png',collection:'568',level:'img/atrworkmaster/ptrlevelIcon/acer.png',colTime:'2016.02.15'},
		{name:'边儿可',country:'中国',city:'深圳',motto:'约片请加微信 bancal',favicon:'img/profileImg/s1.png',collection:'548',level:'img/atrworkmaster/ptrlevelIcon/height.png',colTime:'2016.03.24'},
		{name:'Alier Lee',country:'中国',city:'北京',motto:'I am nothing,but here',favicon:'img/profileImg/s2.png',collection:'788',level:'img/atrworkmaster/ptrlevelIcon/middle.png',colTime:'2016.04.25'},
		{name:'张四疯',country:'中国',city:'上海',motto:'一个会照相的人',favicon:'img/profileImg/s4.png',collection:'158',level:'img/atrworkmaster/ptrlevelIcon/primary.png',colTime:'2016.05.28'}
	];
	
	var model=[
		{name:'Michell',country:'中国',city:'广州',motto:'无拘无束，自在生活',favicon:'img/profileImg/1.png',collection:'568',level:'img/atrworkmaster/ptrlevelIcon/acer.png',colTime:'2016.02.15'},
		{name:'边儿可',country:'中国',city:'深圳',motto:'约片请加微信 bancal',favicon:'img/profileImg/4.png',collection:'548',level:'img/atrworkmaster/ptrlevelIcon/height.png',colTime:'2016.03.24'},
		{name:'Sasa',country:'中国',city:'北京',motto:'I am nothing,but here',favicon:'img/profileImg/2.png',collection:'788',level:'img/atrworkmaster/ptrlevelIcon/middle.png',colTime:'2016.04.25'},
		{name:'anglebaby',country:'中国',city:'上海',motto:'一个会生活的人儿',favicon:'img/profileImg/3.png',collection:'158',level:'img/atrworkmaster/ptrlevelIcon/primary.png',colTime:'2016.05.28'},
		{name:'Michell',country:'中国',city:'广州',motto:'无拘无束，自在生活',favicon:'img/profileImg/1.png',collection:'568',level:'img/atrworkmaster/ptrlevelIcon/acer.png',colTime:'2016.02.15'},
		{name:'边儿可',country:'中国',city:'深圳',motto:'约片请加微信 bancal',favicon:'img/profileImg/4.png',collection:'548',level:'img/atrworkmaster/ptrlevelIcon/height.png',colTime:'2016.03.24'},
		{name:'Sasa',country:'中国',city:'北京',motto:'I am nothing,but here',favicon:'img/profileImg/2.png',collection:'788',level:'img/atrworkmaster/ptrlevelIcon/middle.png',colTime:'2016.04.25'},
		{name:'anglebaby',country:'中国',city:'上海',motto:'一个会生活的人儿',favicon:'img/profileImg/3.png',collection:'158',level:'img/atrworkmaster/ptrlevelIcon/primary.png',colTime:'2016.05.28'}
	];
	
	var stdio=[
		{name:'简映摄影',country:'中国',city:'广州',motto:'无拘无束，自在生活',favicon:'img/profileImg/l1.png',collection:'568',level:'img/atrworkmaster/ptrlevelIcon/acer.png',colTime:'2016.02.15'},
		{name:'射手座摄影',country:'中国',city:'深圳',motto:'约片请加微信 bancal',favicon:'img/profileImg/l4.png',collection:'548',level:'img/atrworkmaster/ptrlevelIcon/height.png',colTime:'2016.03.24'},
		{name:'维也纳摄影',country:'中国',city:'北京',motto:'I am nothing,but here',favicon:'img/profileImg/l2.png',collection:'788',level:'img/atrworkmaster/ptrlevelIcon/middle.png',colTime:'2016.04.25'},
		{name:'大众摄影',country:'中国',city:'上海',motto:'一个会生活的人儿',favicon:'img/profileImg/l3.png',collection:'158',level:'img/atrworkmaster/ptrlevelIcon/primary.png',colTime:'2016.05.28'},
		{name:'简映摄影',country:'中国',city:'广州',motto:'无拘无束，自在生活',favicon:'img/profileImg/l1.png',collection:'568',level:'img/atrworkmaster/ptrlevelIcon/acer.png',colTime:'2016.02.15'},
		{name:'射手座摄影',country:'中国',city:'深圳',motto:'约片请加微信 bancal',favicon:'img/profileImg/l4.png',collection:'548',level:'img/atrworkmaster/ptrlevelIcon/height.png',colTime:'2016.03.24'},
		{name:'维也纳摄影',country:'中国',city:'北京',motto:'I am nothing,but here',favicon:'img/profileImg/l2.png',collection:'788',level:'img/atrworkmaster/ptrlevelIcon/middle.png',colTime:'2016.04.25'},
		{name:'大众摄影',country:'中国',city:'上海',motto:'一个会生活的人儿',favicon:'img/profileImg/l3.png',collection:'158',level:'img/atrworkmaster/ptrlevelIcon/primary.png',colTime:'2016.05.28'}
	];
	
//	//大杂烩部分
//	var ranking=[
//		{name:'',img:''}
//	];
	
	
	//摄影师展示
	var ptrHtml='<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">'+
					'<div class="piclist">'+
						'<div class="moreMsg">'+								
						'</div>'+
						'<div class="Msgcontent center-block">'+
			      			'<p>'+		      					
			      						'<span>主营业务：</span>'+
			      						'<span class="tab font">旅拍</span>'+
			      						'<span class="tab font">毕业照</span>'+
			      						'<span class="tab font">个人写真</span>'+
			      			'</p>'+
			      			'<p><span>描述：</span>${ptrmotto}</p>'+
			      			'<a type="button" class="btn btn-primary" href="/JoyE/viewpage.html">进入TA的简映</a>'+
			    		'</div>'+
			    		'<img class="img-thumbnail" data-toggle="modal" data-target="#myModal" src="${ptrimg}"/>'+
						'<p class="p1"><span class="picName">${ptrname}&nbsp;<img src="${level}"/></span><span class="collectTimes">收藏：${ptrcollection}</span></p>'+
						'<p class="p2">收藏时间： ${colTime}</p>'+
					'</div>'+
				'</div>';
	
	var temp=[];
	photographer.forEach(function(item){ 
		temp.push(ptrHtml.replace("${ptrimg}",item.favicon).replace("${ptrname}",item.name)
		              .replace("${ptrcollection}",item.collection).replace("${ptrmotto}",item.motto)
		              .replace("${level}",item.level).replace("${colTime}",item.colTime));
	});
	
	$("#ptr").html(temp.join(" "));
	


	//model展示
	var modelHtml='<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">'+
					'<div class="piclist">'+
			    		'<img class="img-thumbnail" data-toggle="modal" data-target="#myModal" src="${ptrimg}"/>'+
						'<p class="p1"><span class="picName">${ptrname}&nbsp;<img src="${level}"/></span><span class="collectTimes">收藏：${ptrcollection}</span></p>'+
						'<p class="p2">收藏时间： ${colTime}</p>'+
					'</div>'+
				'</div>';
	
	var memp=[];
	model.forEach(function(item){ 
		memp.push(modelHtml.replace("${ptrimg}",item.favicon).replace("${ptrname}",item.name)
		              .replace("${ptrcollection}",item.collection).replace("${ptrmotto}",item.motto)
		              .replace("${level}",item.level).replace("${colTime}",item.colTime));
	});
	
	$("#model").html(memp.join(" "));


	//影楼
	var stemp=[];
	stdio.forEach(function(item){ 
		stemp.push(modelHtml.replace("${ptrimg}",item.favicon).replace("${ptrname}",item.name)
		              .replace("${ptrcollection}",item.collection).replace("${ptrmotto}",item.motto)
		              .replace("${level}",item.level).replace("${colTime}",item.colTime));
	});
	
	$("#stdios").html(stemp.join(" "));

	
	//pointer触发事件
	//我的收藏
	$("#collection").click(function(){
		$("#pointer1").clearQueue().queue(function(){
			$("#pointer1").addClass("zoomout").dequeue();
		}).delay(300).queue(function(){
			$("#pointer1").appendTo($("#collection")).dequeue();
		}).delay(100).queue(function(){
			$("#pointer1").removeClass("zoomout");
		});
	});

	$("#products").click(function(){
		$("#pointer1").clearQueue().queue(function(){
			$("#pointer1").addClass("zoomout").dequeue();
		}).delay(300).queue(function(){
			$("#pointer1").appendTo($("#products")).dequeue();
		}).delay(100).queue(function(){
			$("#pointer1").removeClass("zoomout");
		});	
	});
	
	$("#stdio").click(function(){
		$("#pointer1").clearQueue().queue(function(){
			$("#pointer1").addClass("zoomout").dequeue();
		}).delay(300).queue(function(){
			$("#pointer1").appendTo($("#stdio")).dequeue();
		}).delay(100).queue(function(){
			$("#pointer1").removeClass("zoomout");
		});	
	});
	//用户中心
	$("#normal-msg-tab").click(function(){
		$("#pointer2").clearQueue().queue(function(){
			$("#pointer2").addClass("zoomout").dequeue();
		}).delay(300).queue(function(){
			$("#pointer2").appendTo($("#normal-msg-tab")).dequeue();
		}).delay(100).queue(function(){
			$("#pointer2").removeClass("zoomout");
		});	
	});
	
	$("#user-msg-tab").click(function(){
		$("#pointer2").clearQueue().queue(function(){
			$("#pointer2").addClass("zoomout").dequeue();
		}).delay(300).queue(function(){
			$("#pointer2").appendTo($("#user-msg-tab")).dequeue();
		}).delay(100).queue(function(){
			$("#pointer2").removeClass("zoomout");
		});	
	});
	
	$("#order-form-tab").click(function(){
		$("#pointer2").clearQueue().queue(function(){
			$("#pointer2").addClass("zoomout").dequeue();
		}).delay(300).queue(function(){
			$("#pointer2").appendTo($("#order-form-tab")).dequeue();
		}).delay(100).queue(function(){
			$("#pointer2").removeClass("zoomout");
		});	
	});
	//大杂烩
	//消息
	$("#contect-msg-tab").click(function(){
		$("#pointer3").clearQueue().queue(function(){
			$("#pointer3").addClass("zoomout").dequeue();
		}).delay(300).queue(function(){
			$("#pointer3").appendTo($("#contect-msg-tab")).dequeue();
		}).delay(100).queue(function(){
			$("#pointer3").removeClass("zoomout");
		});	
	});
	//动态
	$("#social-news-tab").click(function(){
		$("#pointer3").clearQueue().queue(function(){
			$("#pointer3").addClass("zoomout").dequeue();
		}).delay(300).queue(function(){
			$("#pointer3").appendTo($("#social-news-tab")).dequeue();
		}).delay(100).queue(function(){
			$("#pointer3").removeClass("zoomout");
		});	
	});
	//排行
	$("#randing-list-tab").click(function(){
		$("#pointer3").clearQueue().queue(function(){
			$("#pointer3").addClass("zoomout").dequeue();
		}).delay(300).queue(function(){
			$("#pointer3").appendTo($("#randing-list-tab")).dequeue();
		}).delay(100).queue(function(){
			$("#pointer3").removeClass("zoomout");
		});	
	});
	
	
	//遮罩层事件
	$(".piclist").mouseenter(function(){	
		
		var $height=$(".img-thumbnail").height();
		var $width=$(".img-thumbnail").width();
		var that=this;
		$(this).clearQueue().queue(function(){
			$(that).find(".moreMsg").width($width).height($height);
			$(that).find(".moreMsg").width($width).height($height);
		}).delay(300).queue(function(){		
			$(that).find(".Msgcontent").addClass("show");
		}).dequeue();
	});
	
	$(".piclist").mouseleave(function(obj){
		$(this).clearQueue();
		$(this).find(".Msgcontent").removeClass("show");
		$(this).find(".moreMsg").width(0).height(0);
	});
	
	
	//手机端底部nav点击后样式
	$(".navbar").find("button").on('click',function(){
		$(".navbar").find("button").css("color","#6b6a6a");
		$(this).css("color","#7d0022");
	});
	
	//非手机端nav点击后样式
	$(".memu").find("ul li a").on('click',function(){
		$(".memu").find("ul li a").css({
			"color":"#6b6a6a",
			"border-bottom":"none"
			});
		$(this).css({
				"color":"#6452a0",
				"border-bottom":"3px solid #6452a0"	
			});
	});
});

