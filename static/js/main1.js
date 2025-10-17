/* 技术支持js函数
 * Author:      牛天护
 * CreateTime:  2020/9/30 下午9:50:07 
 * LastEditor:  牛天护
 * ModifyTime:  2020/9/30 下午10:14:13 
 * Description: 
*/ 


 
(function(){
    var link = "http://www.seo1288.com/";
    var img = "//cdn.xchost.cn/jszc/zhanniu.png";
    var scriptList = document.getElementsByTagName('script');
    for( var i = 0; i < scriptList.length; i ++ ){
        var script = scriptList[i];
        var src = script.src.toLowerCase();
        if( src.indexOf('jszc/main.js') != '-1' ){
            document.write("技术支持：<a href='"+link+"' target='_blank' rel='nofollow'><img style='position:relative;top:10px;' src='"+img+"' /></a>");
        }
    }
}())