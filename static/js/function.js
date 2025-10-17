window.onload = function(){
	window.gbook = Gbook();
}
function Gbook(){
	var fun = function(){
		this.input = $(".Gbook input,.Gbook textarea");
		for(var i=0; i<4; i++){
			inputFor(i,this.input)
		}
		function inputFor(i,input){
			input[i].onfocus = function(){
				input[i].className = "focus";
			}
			input[i].onblur = function(){
				input[i].className = "";
			}
		}
		this.yanZheng = function(){
			if($("#name").val() == ""){
				$(".Gbook input,.Gbook textarea")[0].className = "focus";
				alert("姓名不能为空");
				return false;
			}else if($("#GBook_Tel").val() == ""){
				$(".Gbook input,.Gbook textarea")[1].className = "focus";
				alert("电话不能为空");
				return false;
			}else if($("#mail").val() == ""){
				$(".Gbook input,.Gbook textarea")[2].className = "focus";
				alert("邮箱不能为空");
				return false;
			}else if($("#GBook_Content").val() == ""){
				$(".Gbook input,.Gbook textarea")[3].className = "focus";
				alert("留言内容不能为空");
				return false;
			}else{
				return true;
			}
			
		}
	}
	return new fun();
}
