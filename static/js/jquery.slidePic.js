function SlidePic(Obj){
	$("#" + Obj.id + " ul.slides li img:eq(0)")[0].src = $("#" + Obj.id + " ul.slides li img:eq(0)").data("src");
	$("#" + Obj.id + " ul.slides li:eq(0)")[0].style.backgroundImage = "url(" + $("#" + Obj.id + " ul.slides li img:eq(0)").data("src") + ")";
	$(window).load(function(){
		setTimeout(function(){
			yc(Obj);
		},"500");
	});
	window.onresize = function(){
		window.boxWidth = $("#" + Obj.id).width();
		$("#" + Obj.id + " ul.slides")[0].style.left = -boxWidth + "px";
		$("#" + Obj.id + " ul.slides")[0].style.left = -dqwz * boxWidth + "px";
		
		
	}
	
	function yc(Obj){
		
		
		//初始化
		var box = $("#" + Obj.id);
		window.boxWidth = box.width();
		var ul = $("#" + Obj.id + " ul.slides");
		var li = $("#" + Obj.id + " ul.slides li");
		var Len = $("#" + Obj.id + " ul.slides li").length;
		var ulWidth = (Len + 1) * boxWidth;
		
		//初始化图片
		
		
		
		window.dqwz = 1;
		var millisec = Obj.millisec;
		//li.css({width:box.width() + "px"});
		
		box.append('<div class="ScrollLeft"></div><div class="ScrollRight"></div>');
		var buttonLeft = $("#" + Obj.id + " .ScrollLeft");
		var buttonRight = $("#" + Obj.id + " .ScrollRight");
		
		
		box.append("<ol></ol>");
		for(var i = 0; i < Len; i ++){
			
			if(i == 0){
				$("#" + Obj.id + " ol").append("<li class='on'></li>");
			}else{
				$("#" + Obj.id + " ol").append("<li></li>");
				$("#" + Obj.id + " ul.slides li img")[i].src = $("#" + Obj.id + " ul.slides li img").eq(i).data("src");
				$("#" + Obj.id + " ul.slides li")[i].style.backgroundImage = "url(" + $("#" + Obj.id + " ul.slides li img").eq(i).data("src") + ")";
			}
		}
		var ButtonCircle = $("#" + Obj.id + " ol li");
		
		
		//复制两个
		$("#" + Obj.id + " ul.slides li:last").clone(true).prependTo(ul);
		$("#" + Obj.id + " ul.slides li:eq(1)").clone(true).appendTo(ul);
		ul[0].style.left = -dqwz * boxWidth + "px";
		
		//点击事件
		buttonLeft.click(function(){
			ul.stop(false,true);
			TurnLeft();
		});
		buttonRight.click(function(){
			ul.stop(false,true);
			TurnRight();
		});
		ButtonCircle.click(function(){
			ul.stop(false,true);
			var index = $(this).index();
			Turn(index);
		});
		
		
		
		//滚动事件
		function TurnLeft(){
			clearInterval(zidong);
			dqwz --;
			var left = -dqwz * boxWidth + "px";
			ul.animate({left:left},"4000",function(){
				if(dqwz <= 0){
					dqwz = Len;
					left = -dqwz * boxWidth + "px";
					ul.css({left:left});
				}
				zidong = setInterval(function(){xh()},millisec);
			});
			if(dqwz <= 0){
				ChanageCircle(Len);
			}else{
				ChanageCircle(dqwz);
			}
			
		}
		
		function TurnRight(){
			clearInterval(zidong);
			dqwz ++;
			var left = -dqwz * boxWidth + "px";
			ul.animate({left:left},"4000",function(){
				if(dqwz > Len){
					dqwz = 1;
					left = -dqwz * boxWidth + "px";
					ul.css({left:left});
				}
				zidong = setInterval(function(){xh()},millisec);
			});
			if(dqwz > Len){
				ChanageCircle(1);
			}else{
				ChanageCircle(dqwz);
			}
			
		}
		
		function Turn(q){
			clearInterval(zidong);
			dqwz = q + 1;
			var left = -dqwz * boxWidth + "px";
			ul.animate({left:left},"4000",function(){
				zidong = setInterval(function(){xh()},millisec);
			});
			ChanageCircle(dqwz);
		}
		
		function ChanageCircle(q){
			ButtonCircle.eq(q-1).addClass("on").siblings("li").removeClass("on");
		}
		
		
		function xh(){
			dqwz ++;
			var left = -dqwz * boxWidth + "px";
			ul.animate({left:left},"4000",function(){
				if(dqwz > Len){
					dqwz = 1;
					left = -dqwz * boxWidth + "px";
					ul.css({left:left});
				}
			});
			if(dqwz > Len){
				ChanageCircle(1);
			}else{
				ChanageCircle(dqwz);
			}
		}
		
		var zidong = setInterval(function(){xh()},millisec);
	}
	
	
	
}