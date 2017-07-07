/**
 * Created by wuyan on 2017/5/17.
 */
onload= function () {
    function $id(id){
        return document.getElementById(id);
    }
//轮播图首页第一个JS现在开始！
    var lunbo = $id("lunbo");
//获取轮播图模块
    var inner1 = $id("inner1");
    var ul1 = inner1.children[0];
    var imgWidth = ul1.children[0].offsetWidth;
    var currentindex = 0;
    var lis = lunbo.children[2].children;

    //第一个功能，鼠标经过选定图片
    for(var i=0;i<lis.length;i++) {
        lis[i].onmouseover = onmouseoverHandle;
        lis[i].index=i;
    }
    function onmouseoverHandle(){
        var target = this.index*imgWidth*-1;
        currentindex = this.index;
        animate6(ul1,{left:target})
        for(var j=0;j<lis.length;j++){
            lis[j].className = "";
        }
        this.className = "active";
    }
    //往左走的函数
    function goRight(){
        if(currentindex == ul1.children.length - 1){
            currentindex = 0;
            ul1.style.left = 0;
        }
        currentindex++;
        var target = currentindex*imgWidth*-1;
        animate6(ul1,{left:target})
        for(var j = 0; j < lis.length ; j++){
            lis[j].className = "";
        }
        if(currentindex==ul1.children.length-1){
            lis[0].className = "active";
        }else{
            lis[currentindex].className = "active";
        }
        //lis[currentindex].className = "active";
    }
    //自动轮播功能
    lunbo.time = setInterval(goRight,2000)
    lunbo.onmouseover = function () {
        clearInterval(lunbo.time);
    }
    lunbo.onmouseout = function () {
        lunbo.time = setInterval(goRight,2000)
    }
    //------------------------切换官方与合作轮播图
    var btn = $id("btn");
    var btnLeft = btn.children[0];
    var btnRight = btn.children[1];
    var inner2 = $id("inner2");
    var numbox2 = $id("numbox2");
    var lis2 = numbox2.children;
    var ul2 = inner2.children[0];
    var currentindex2 = 0;
    btnRight.onclick = function () {
        btnLeft.className = "btn-left fl";
        btnRight.className = "btn-right fl active";
        inner1.style.display = "none";
        inner2.style.display = "";
        numbox2.style.display = "";
        lunbo.children[2].style.display = "none";
    }
    //-------------官方的轮播图函数
    for(var a=0;a<lis2.length;a++) {
        lis2[a].onmouseover = onmouseoverHandle2;
        lis2[a].index=a;
    }

    function onmouseoverHandle2(){
        var target = this.index*imgWidth*-1;
        currentindex2 = this.index;
        animate6(ul2,{left:target})
        for(var b=0;b<lis2.length;b++){
            lis2[b].className = ""
        }
        this.className = "active";
    }
    function goRight2(){
        if(currentindex2 == ul2.children.length - 1){
            currentindex2 = 0;
            ul2.style.left = 0;
        }
        currentindex2++;
        var target = currentindex2*imgWidth*-1;
        animate6(ul2,{left:target});
        for(var j = 0; j < lis2.length ; j++){
            lis2[j].className = "";
        }
        if(currentindex2==ul1.children.length-1){
            lis2[0].className = "active";
        }else{
            lis2[currentindex2].className = "active";
        }
    }
    lunbo.timer = setInterval(goRight2,3000)
    lunbo.onmouseover = function () {
        clearInterval(lunbo.timer);
    }
    lunbo.onmouseout = function () {
        lunbo.timer = setInterval(goRight2,3000)
    }
    //切换右边按钮
    btnLeft.onclick = function () {
        btnLeft.className = "btn-left fl active";
        btnRight.className = "btn-right fl";
        inner1.style.display = "";
        inner2.style.display = "none";
        numbox2.style.display = "none"
        lunbo.children[2].style.display = "";
    }


//    资料站模块JS代码
    var qnav = $id("qnav");
    var qnavs = qnav.getElementsByTagName("div");
    var qnav_lis = qnav.children;
    var is = qnav.getElementsByTagName("i");
    var spans = qnav.getElementsByTagName("span");

//    var timer=null;
    for(var c =0;c<qnav_lis.length;c++){
        //qnavs[c].index =c;
        qnav_lis[c].index = c;
        qnav_lis[c].onmouseover = toYellow;
        qnav_lis[c].onmouseout = toNull;
    }
    function toYellow(){
        for(var i =0;i<qnavs.length;i++){
            animate6(qnavs[this.index],{opacity:1});
            animate6(is[this.index],{top:-30});
            animate6(spans[this.index],{top:40});
        }
    }
    function toNull(){
        for(var i =0;i<qnavs.length;i++){
            animate6(qnavs[this.index],{opacity:0});
            animate6(is[this.index],{top:"35"});
            animate6(spans[this.index],{top:70});
        }
    }
//-------------------新闻列表的轮播
    var contr = $id("contr");
    var contrLis = contr.getElementsByTagName("li");
    var infoContent = $id("infoContent");
    var infoUls = infoContent.children;
    var ulWidth = infoUls[0].offsetWidth;
    var currentIndex3=0;
    for(var d =0;d<contrLis.length;d++){
        contrLis[d].onmouseover = changeUl;
        contrLis[d].index = d;
    }
    function changeUl(){
        currentIndex3 = this.index;
        var target = currentIndex3*ulWidth*-1;
        animate6(infoContent,{left:target});
    }


//    英雄介绍的JS
    var weapons = $id("weapon").children;
    var allheros = $id("allinfo").children;
    for(var i=0;i<weapons.length;i++){
        weapons[i].onclick = toShow;
        weapons[i].index = i;
    }
    function toShow(){
        for(var j = 0;j<allheros.length;j++){
            allheros[j].children[0].style.left="-200px";
            allheros[j].children[1].style.right="-200px";
        }
        animate6(allheros[this.index].children[0],{left:0});
        animate6(allheros[this.index].children[1],{right:0});
    }
}
//----------------------JQ函数写在这----------------



