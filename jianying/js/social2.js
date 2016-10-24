var speed=50;
				var demoo2=document.getElementById("demoo2");
				var demoo1=document.getElementById("demoo1");
				var demoo=document.getElementById("demoo");
		function MarqueeLeft(){
		    if(demoo2.offsetWidth-demoo.scrollLeft<=0)
		       demoo.scrollLeft-=demoo1.offsetWidth
		   else{
		       demoo.scrollLeft++
		    }
	    }
			var MyMar=setInterval(MarqueeLeft,speed);
			demoo.onmouseover=function() {clearInterval(MyMar);}
			demoo.onmouseout=function() {MyMar=setInterval(MarqueeLeft,speed);}