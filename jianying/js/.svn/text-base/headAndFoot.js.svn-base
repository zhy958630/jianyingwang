
~function(){
	var addHead = function(callback){
		var html = '<nav class="navbar navbar-default top-nav">'+
		  '<div class="container-fluid">'+
		    '<div class="navbar-header">'+
		      '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">'+
		        '<span class="sr-only">Toggle navigation</span>'+
		        '<span class="icon-bar"></span>'+
		        '<span class="icon-bar"></span>'+
		        '<span class="icon-bar"></span>'+
		      '</button>'+
		      '<a class="navbar-brand" href="/JoyE/homepage.html">'+
		      	'<img class="logo" src="img/logo.png" />'+
		      '</a>'+
		   '</div>'+	
		    '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
		      '<ul class="nav navbar-nav navbar-right">'+
		        '<li><a href="/JoyE/login.html">登录</a></li>'+
		        '<li><a href="/JoyE/register.html">注册</a></li>'+
		        '<li class="dropdown">'+
		          '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">收藏<span class="caret"></span></a>'+
		          '<ul class="dropdown-menu nav-collect">'+
		            '<li><a href="#">【摄影师】Sasds</a></li>'+
		            '<li><a href="#">【模特】mary</a></li>'+
		            '<li><a href="#">【影楼】柚子摄影</a></li>'+
		            '<li role="separator" class="divider"></li>'+
		            '<li><a id="more-collect" href="/JoyE/profile.html">查看更多</a></li>'+
		          '</ul>'+
		        '</li>'+
		        '<li>'+
		        	'<a href="/JoyE/profile.html"><span class="glyphicon glyphicon-user" style="color: purple;"></span>&nbsp;个人空间</a>'+
		        '</li>'+
		      '</ul>'+
		      '<form class="navbar-form navbar-right" role="search" >'+
		          '<input type="text" class="seach-input"  placeholder="新西兰婚纱"><button type="submit" class="seach-btn">'+
		          	'<span class="glyphicon glyphicon-search"></span>'+
		          '</button>'+
		      '</form>'+
		    '</div>'+
		  '</div>'+
		'</nav>';
		
		$("body").prepend(html);
		$(".top-nav").on("click",function(){
			document.body.scrollTop = 0;
		})
		if(callback){
			callback();
		}
		
	}
	
	var addFoot=function(){
		var html='<nav class="nav navbar-default foot-nav">'+
			'<div class="container-fluid">'+
				'<ul class=" ">'+
					'<li><a href="#">关于我们</a>|</li><li>'+
					'<a href="#">广告投放</a>|</li><li>'+
					'<a href="#">版权声明</a>|</li><li>'+
					'<a href="#">友情链接</a>|</li><li>'+
					'<a href="#">在线交谈</a></li>'+
				'</ul>'+
			'</div>'+
			'<div class="foot-text">'+
				'<p class="text-center">2016 fengniao.com. All rights reserved . 因吹思婷有限公司（简映网）版权所有</p>'+
				'<p class="text-center">Copyright© 2003-2016 POCO CO.,LTD.</p>'+
			'</div>'+
		'</nav>';
		
		$("body").append(html);
	}
	
	
	loadStyles("css/headAndFoot.css");
	window.addHead=addHead;
	window.addFoot=addFoot;
	
	
	function loadStyles(url){
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = url;
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(link);
	}
}();

