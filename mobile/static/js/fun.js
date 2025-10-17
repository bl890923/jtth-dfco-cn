(function () {
    var recalc = function(){
    	var clientWidth = document.documentElement.clientWidth;
	    if (!clientWidth) return;
	    if (clientWidth<640){
	        document.documentElement.style.fontSize = 120 * (clientWidth / 640) + "px";
	    }else{
	        document.documentElement.style.fontSize = "120px";
	    }
    }
    window.addEventListener("resize", recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
})();

window.onload = function(){
	/*var SearchMove = function(q){
    	var box = document.getElementsByClassName("search")[0];
    	box.style.top = q;
    }
    document.getElementsByClassName("search_hl")[0].onclick = function(){SearchMove("0");}
    document.getElementsByClassName("close")[0].onclick = function(){SearchMove("-100%");}
    */
    
    //Swiper banner
    var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
		pagination: '.swiper-pagination',
		paginationClickable :true,
	})   
    
    
    //导航
    document.getElementsByClassName("nav-btn")[0].onclick = function(){
    	document.getElementsByClassName("nav")[0].style.right = "0";
    	document.getElementsByClassName("header")[0].style.left = "-220px";
    	document.getElementsByClassName("footer")[0].style.left = "-220px";
    	document.getElementsByClassName("boxOut")[0].style.left = "-220px";
    	document.getElementsByClassName("box")[0].style.left = "-220px";
    };
    document.getElementsByClassName("boxOut")[0].onclick = function(){
    	document.getElementsByClassName("nav")[0].style.right = "-220px";
    	document.getElementsByClassName("header")[0].style.left = "0";
    	document.getElementsByClassName("footer")[0].style.left = "0";
    	document.getElementsByClassName("boxOut")[0].style.left = "-100%";
    	document.getElementsByClassName("box")[0].style.left = "0";
    };
	
	if(innerWidth > innerHeight){
		document.getElementsByClassName("header")[0].style.position="relative";
		document.getElementsByClassName("content")[0].style.padding = 0;
		document.getElementsByClassName("footer")[0].style.position="relative";
	}else{
		document.getElementsByClassName("header")[0].style.position="fixed";
		document.getElementsByClassName("content")[0].style.padding = "0.75rem 0";
		document.getElementsByClassName("footer")[0].style.position="fixed";
	}
    
	/*判断手机站
		
		if(navigator.appVersion.indexOf("Mobile") >= 0){
			location.href = "";
		}
	
	*/
	
}

window.onresize = function(){
	if(innerWidth > innerHeight){
		document.getElementsByClassName("header")[0].style.position="relative";
		document.getElementsByClassName("content")[0].style.padding = 0;
		document.getElementsByClassName("footer")[0].style.position="relative";
	}else{
		document.getElementsByClassName("header")[0].style.position="fixed";
		document.getElementsByClassName("content")[0].style.padding = "0.75rem 0";
		document.getElementsByClassName("footer")[0].style.position="fixed";
	}
}