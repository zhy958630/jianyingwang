$(function(){
	//引入头部和脚部
	addHead();
	addFoot();

/////////////////////////////////////////////////////////////////////////////////////////
//假数据////////////
////////////
	//TA的服务假数据
	var services=[
		{Sname:'毕业照1',Sprice:'500',detil:'记录您最青葱的时间',timelength:'一天',imgurl:"img/profileImg/servicePIC/20140613215531_sNRWZ.thumb.700_0.jpg",mdimg:'img/profileImg/servicePIC/20140613215531_sNRWZ.thumb.700_0.jpg'},
		{Sname:'毕业照2',Sprice:'300',detil:'记录您最青葱的时间',timelength:'半天',imgurl:"img/profileImg/servicePIC/13408473334febb4e55063d.jpg",mdimg:'img/profileImg/servicePIC/13408473334febb4e55063d.jpg'},
		{Sname:'写真',Sprice:'500',detil:'记录您最青葱的时间',timelength:'一天',imgurl:"img/profileImg/servicePIC/xuezhiqian17.jpg",mdimg:'img/profileImg/servicePIC/xuezhiqian17.jpg'},
		{Sname:'写真',Sprice:'300',detil:'记录您最青葱的时间',timelength:'半天',imgurl:"img/profileImg/servicePIC/xuezhiqian20.jpg",mdimg:'img/profileImg/servicePIC/xuezhiqian20.jpg'},
		{Sname:'旅拍',Sprice:'4000',detil:'七套自选景点，3套影棚，包化妆',timelength:'三天',imgurl:"img/profileImg/servicePIC/3535e3f478aaf5a8de3748e1072c8dd7.jpg",mdimg:'img/profileImg/servicePIC/3535e3f478aaf5a8de3748e1072c8dd7.jpg'},
		{Sname:'旅拍',Sprice:'2000',detil:'三套自选景点，1套影棚，包化妆',timelength:'一天',imgurl:"img/profileImg/servicePIC/7667438f5dae494336977879aeced5db.jpg",mdimg:'img/profileImg/servicePIC/7667438f5dae494336977879aeced5db.jpg'}
		
	];
	
	var jobs=[
		{Jname:'爱恋',imgurl:"img/weddingDress/096d61d21debc0a2bc58b0afe3ba6432.jpg",mdimg:'img/weddingDress/096d61d21debc0a2bc58b0afe3ba6432.jpg',postDate:'2016-05-29'},
		{Jname:'爱恋',imgurl:"img/weddingDress/1f532cc881dfc20c8dd17b39ba0865a5.jpg",mdimg:'img/weddingDress/1f532cc881dfc20c8dd17b39ba0865a5.jpg',postDate:'2016-05-29'},
		{Jname:'爱恋',imgurl:"img/weddingDress/3535e3f478aaf5a8de3748e1072c8dd7.jpg",mdimg:'img/weddingDress/3535e3f478aaf5a8de3748e1072c8dd7.jpg',postDate:'2016-05-29'},
		{Jname:'爱恋',imgurl:"img/weddingDress/8e5b7e05490aba2fb86427f87c9d70b0.jpg",mdimg:'img/weddingDress/8e5b7e05490aba2fb86427f87c9d70b0.jpg',postDate:'2016-05-29'},
		{Jname:'爱恋',imgurl:"img/weddingDress/a84ad397964c1d958a91ff507e5c5275.jpg",mdimg:'img/weddingDress/a84ad397964c1d958a91ff507e5c5275.jpg',postDate:'2016-05-29'}
	];
	
	var cotsptr=[
		{name:'不二村家的偶像',country:'中国',city:'广州',motto:'无拘无束，自由摄影人',favicon:'img/profileImg/s3.png',collection:'568',level:'img/atrworkmaster/ptrlevelIcon/acer.png',colTime:'2016.02.15'},
		{name:'边儿可',country:'中国',city:'深圳',motto:'约片请加微信 bancal',favicon:'img/profileImg/s1.png',collection:'548',level:'img/atrworkmaster/ptrlevelIcon/height.png',colTime:'2016.03.24'},
		{name:'Alier Lee',country:'中国',city:'北京',motto:'I am nothing,but here',favicon:'img/profileImg/s2.png',collection:'788',level:'img/atrworkmaster/ptrlevelIcon/middle.png',colTime:'2016.04.25'}
	];
	
	var cotsmodel=[
		{name:'Sasa',country:'中国',city:'北京',motto:'I am nothing,but here',favicon:'img/profileImg/2.png',collection:'788',level:'img/atrworkmaster/ptrlevelIcon/middle.png',colTime:'2016.04.25'},
		{name:'anglebaby',country:'中国',city:'上海',motto:'一个会生活的人儿',favicon:'img/profileImg/3.png',collection:'158',level:'img/atrworkmaster/ptrlevelIcon/primary.png',colTime:'2016.05.28'},
		{name:'Michell',country:'中国',city:'广州',motto:'无拘无束，自在生活',favicon:'img/profileImg/1.png',collection:'568',level:'img/atrworkmaster/ptrlevelIcon/acer.png',colTime:'2016.02.15'}
	];
	
	var cotsstdio=[
		{name:'简映摄影',country:'中国',city:'广州',motto:'无拘无束，自在生活',favicon:'img/profileImg/l1.png',collection:'568',level:'img/atrworkmaster/ptrlevelIcon/acer.png',colTime:'2016.02.15'},
		{name:'射手座摄影',country:'中国',city:'深圳',motto:'约片请加微信 bancal',favicon:'img/profileImg/l4.png',collection:'548',level:'img/atrworkmaster/ptrlevelIcon/height.png',colTime:'2016.03.24'},
		{name:'维也纳摄影',country:'中国',city:'北京',motto:'I am nothing,but here',favicon:'img/profileImg/l2.png',collection:'788',level:'img/atrworkmaster/ptrlevelIcon/middle.png',colTime:'2016.04.25'}
	];

	//TA的服务展示
	var SerHtml=
				  '<div class="col-sm-6 col-md-4">'+
				    '<div class="thumbnail">'+
				      '<img data-toggle="modal" data-target="#${index}" src="${imgurl}" >'+    
				      '<div class="caption">'+
				        '<h3>${Sname}<label class="pull-right">&yen;${Sprice}</label></h3>'+
				        '<p>${detil}</p>'+
				        '<p>服务时长：${timelength}</p>'+
				        '<p class="st-btn">'+
				        	'<a href="#" class="btn" role="button">购买</a>'+
				        	'<a href="#" class="btn" role="button">收藏</a>'+
				        '</p>'+
				      '</div>'+
				    '</div>'+
				  '</div>'+
				  
				 ' <!-- Modal -->'+
					'<div class="modal fade" id="${index2}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
					  '<div class="modal-dialog">'+
					    '<div class="modal-content">'+		
					      '<img src="${mdimg}" >'+   			      
					    '</div><!-- /.modal-content -->'+
					 ' </div><!-- /.modal-dialog -->'+
					'</div><!-- /.modal -->';
				
	
	var Sertemp=[ ];
	services.forEach(function(item,i){ 
		Sertemp.push(SerHtml.replace("${imgurl}",item.imgurl).replace("${Sname}",item.Sname)
		              .replace("${Sprice}",item.Sprice).replace("${detil}",item.detil)
		              .replace("${timelength}",item.timelength).replace("${mdimg}",item.mdimg)
		              .replace("${index}",i).replace("${index2}",i));
	});
	
	$("#TA-servies").html(Sertemp.join(" "));

	//TA的作品展示
	var jobHtml='<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">'+
					'<div class="piclist">'+
			    		'<img class="img-thumbnail" data-toggle="modal" data-target="#${index}" src="${ptrimg}"/>'+
						'<p class="p1"><span class="picName">${ptrname}</span></p>'+
						'<p class="p2">发布时间： ${colTime}</p>'+
					'</div>'+
				'</div>'+
				
				' <!-- Modal -->'+
					'<div class="modal fade" id="${index2}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
					  '<div class="modal-dialog">'+
					    '<div class="modal-content">'+		
					      '<img src="${mdimg}" >'+   			      
					    '</div><!-- /.modal-content -->'+
					 ' </div><!-- /.modal-dialog -->'+
					'</div><!-- /.modal -->';
	
	var memp=[];
	jobs.forEach(function(item,i){ 
		memp.push(jobHtml.replace("${ptrimg}",item.imgurl).replace("${ptrname}",item.Jname)
		                 .replace("${colTime}",item.postDate).replace("${mdimg}",item.mdimg)
		                 .replace("${index}",'a'+i).replace("${index2}",'a'+i));
	});
	
	$("#TA-jobs").html(memp.join(" "));

	
	//TA的收藏展示
	var colHtml='<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">'+
					'<div class="piclist">'+
			    		'<img class="img-thumbnail" data-toggle="modal" data-target="#${indexbtn}" src="${ptrimg}"/>'+
						'<p class="p1"><span class="picName">${ptrname}&nbsp;<img src="${level}"/></span><span class="collectTimes">收藏：${ptrcollection}</span></p>'+
						'<p class="p2">收藏时间： ${colTime}</p>'+
					'</div>'+
				'</div>'+
				
				<!-- Modal -->
				'<div class="modal fade" id="${indexshow}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
				  '<div class="modal-dialog">'+
				    '<div class="modal-content">'+
				     ' <div class="modal-header">'+
				        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
				        '<h4 class="modal-title" id="myModalLabel">${mdname}</h4>'+
				      '</div>'+
				     ' <div class="modal-body">'+
				      	'<div class="row">'+
				      		'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">'+
				      			'<img class="img-rounded" src="${mdimg}" style="width: 100%;"/>'+
				      		'</div>'+
				      		'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">'+
				      			'<p>	'	+			      					
				      						'<span class="font">主营业务：</span>'+
				      						'<span class="tab font">旅拍</span>'+
				      						'<span class="tab font">毕业照</span>'+
				      						'<span class="tab font">个人写真</span>'+
				      						'<span class="tab font">个人写真</span>'+
				      						'<span class="tab font">个人写真</span>'+
				      			'</p>'+
				      			'</br>'+
				      			'</br>'+
				      			'<p><span>摄影师等级：</span><img src="${mdlevel}"/></p>'+
				      			'</br>'+
				      			'<p><span>描述：</span>${mdmotto}</p>'+
				      		'</div>'+
				      	'</div>'+
				      '</div>'+
				      '<div class="modal-footer">'+
				      	'<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-star-empty"></span></button>'+
				        '<button type="button" class="btn btn-info">进入TA的简映</button>'+			         
				     ' </div>'+
				    '</div><!-- /.modal-content -->'+
				  '</div><!-- /.modal-dialog -->'+
				'</div><!-- /.modal -->';
	
	//摄影师
	var coltemp=[];
	cotsptr.forEach(function(item,i){ 
		coltemp.push(colHtml.replace("${ptrimg}",item.favicon).replace("${ptrname}",item.name)
		              .replace("${ptrcollection}",item.collection).replace("${ptrmotto}",item.motto)
		              .replace("${level}",item.level).replace("${colTime}",item.colTime)
		              .replace("${mdname}",item.name).replace("${mdimg}",item.favicon)
		              .replace("${mdlevel}",item.level).replace("${mdmotto}",item.motto)
		              .replace("${indexbtn}",'ptr'+i).replace("${indexshow}",'ptr'+i));
	});
	
	$("#col-ptr").html(coltemp.join(" "));
	
	//model
	var mtemp=[];
	cotsmodel.forEach(function(item,i){ 
		mtemp.push(colHtml.replace("${ptrimg}",item.favicon).replace("${ptrname}",item.name)
		              .replace("${ptrcollection}",item.collection).replace("${ptrmotto}",item.motto)
		              .replace("${level}",item.level).replace("${colTime}",item.colTime)
		              .replace("${mdname}",item.name).replace("${mdimg}",item.favicon)
		              .replace("${mdlevel}",item.level).replace("${mdmotto}",item.motto)
		              .replace("${indexbtn}",'mod'+i).replace("${indexshow}",'mod'+i));
	});
	
	$("#col-model").html(mtemp.join(" "));
	//影楼
	var stemp=[];
	cotsstdio.forEach(function(item,i){ 
		stemp.push(colHtml.replace("${ptrimg}",item.favicon).replace("${ptrname}",item.name)
		              .replace("${ptrcollection}",item.collection).replace("${ptrmotto}",item.motto)
		              .replace("${level}",item.level).replace("${colTime}",item.colTime)
		              .replace("${mdname}",item.name).replace("${mdimg}",item.favicon)
		              .replace("${mdlevel}",item.level).replace("${mdmotto}",item.motto)
		              .replace("${indexbtn}",'st'+i).replace("${indexshow}",'st'+i));
	});
	
	$("#col-stdio").html(stemp.join(" "));
	
	
	//pointer触发事件
	//TA的服务
	$("#TA-servies-tab").click(function(){
		$("#pointer4").clearQueue().queue(function(){
			$("#pointer4").addClass("zoomout").dequeue();
		}).delay(300).queue(function(){
			$("#pointer4").appendTo($("#TA-servies-tab")).dequeue();
		}).delay(100).queue(function(){
			$("#pointer4").removeClass("zoomout");
		});
	});
	//TA的作品
	$("#TA-jobs-tab").click(function(){
		$("#pointer4").clearQueue().queue(function(){
			$("#pointer4").addClass("zoomout").dequeue();
		}).delay(300).queue(function(){
			$("#pointer4").appendTo($("#TA-jobs-tab")).dequeue();
		}).delay(100).queue(function(){
			$("#pointer4").removeClass("zoomout");
		});
	});
	//TA的收藏
	$("#TA-collect-tab").click(function(){
		$("#pointer4").clearQueue().queue(function(){
			$("#pointer4").addClass("zoomout").dequeue();
		}).delay(300).queue(function(){
			$("#pointer4").appendTo($("#TA-collect-tab")).dequeue();
		}).delay(100).queue(function(){
			$("#pointer4").removeClass("zoomout");
		});
	});
	
	
	
	//手机端底部nav点击后样式
	$(".p-navbar").find("button").on('click',function(){
		$(".p-navbar").find("button").css("color","#6b6a6a");
		$(this).css("color","#7d0022");
	});
	
	
	
});

