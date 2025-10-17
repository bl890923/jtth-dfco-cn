function gd( par ){
	var obj = {};				//封装对象
	obj.speed = par.speed;		//速度
	obj.step = par.step;		//步长
	obj.rows = par.rows			//行数
	
	obj.box = document.getElementById(par.box);		//获取盒子dom
	
	//初始化框架
	obj.box.innerHTML = obj.box.innerHTML + obj.box.innerHTML;
	
	//获取ul
	obj.uls = obj.box.getElementsByTagName("ul");
	
	//获取li
	var lis = obj.uls[0].getElementsByTagName("li");
	//li个数
	var liCount = lis.length;
	//li宽度
	var liWidth = lis[0].offsetWidth + parseFloat(getStyle(lis[0], 'margin-left')) + parseFloat(getStyle(lis[0], 'margin-right'));
	//ul宽度
	obj.ulWidth = liWidth * liCount / obj.rows;
	//设置宽度
	obj.uls[0].style.width = obj.ulWidth + 'px';
	obj.uls[1].style.width = obj.ulWidth + 'px';
	//设置位置
	obj.left0 = 0;
	obj.left1 = obj.ulWidth;
	obj.uls[1].style.left = obj.left1 + 'px';
	//主体函数
	var loopFor = function(){
		if( obj.left0 <= -obj.ulWidth){
			obj.left0 = obj.ulWidth
		}
		if( obj.left1 <= -obj.ulWidth){
			obj.left1 = obj.ulWidth
		}
		obj.left0 -= obj.step;
		obj.left1 -= obj.step;
		obj.uls[0].style.left = obj.left0 + 'px';
		obj.uls[1].style.left = obj.left1 + 'px';
	}
	
	//鼠标悬浮效果
	obj.box.onmouseover = function(){
		obj.step = 0;
	}
	
	//鼠标挪开
	obj.box.onmouseout = function(){
		obj.step = par.step;
	}
	
	setInterval(loopFor,obj.speed);	//开始执行
}




function getStyle(element, attr){
	if(element.currentStyle){
		return element.currentStyle[attr];
	}else{
		return window.getComputedStyle(element,null)[attr];
	}
}
