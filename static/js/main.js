/* 备案号添加js函数
 * Author:      牛天护
 * CreateTime:  2020/9/30 下午9:50:07 
 * LastEditor:  牛天护
 * ModifyTime:  2020/9/30 下午10:14:13 
 * Description: 
*/ 

(function(){
    var link = "https://beian.miit.gov.cn/";
    var scriptList = document.getElementsByTagName('script');
    for( var i = 0; i < scriptList.length; i ++ ){
        var script = scriptList[i];
        var src = script.src.toLowerCase();
        if( src.indexOf('beian/main.js') != '-1' ){
            var beiAnNum = script.getAttribute('num');
            document.write("备案号：<a href='"+link+"' rel='nofollow' target='_blank'>"+beiAnNum+"</a>");
        }
    }
}())
