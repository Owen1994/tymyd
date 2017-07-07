onload= function () {
    function animate(element,target) {
        clearInterval(element.timer);
        var step = 40;
        element.timer = setInterval(function(){
            var currentLeft = element.offsetLeft;
            var temp = currentLeft < target ? step : - step;
            currentLeft += temp;
            if (  Math.abs(target - currentLeft) <= Math.abs(step) ){
                clearInterval(element.timer);
                element.style.left = target + "px";
            }else {
                element.style.left = currentLeft + "px";
            }
        },20);
    }


    function getStyle(element, attr) {
        return element.currentStyle ? element.currentStyle[attr] : window.getComputedStyle(element, null)[attr] || 0;
    }


    function animatev2(element, json, fn) {
        clearInterval(element.timer);
        element.timer = setInterval(function() {
            var flag = true;
            for (var key in json) {
                if (key == "opacity") {
                    var current = getStyle(element, key) * 100 || 0;
                    var target = json[key] * 100;
                    var step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current += step;
                    element.style[key] = current / 100;
                } else if (key == "zIndex") {
                    element.style[key] = json[key];
                } else {
                    var current = parseInt(getStyle(element, key)) || 0;
                    var target = json[key];
                    var step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current += step;
                    element.style[key] = current + "px";
                }
                if (current != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(element.timer);
                (typeof fn == "function") && fn();
            }
        }, 20);
    }

    function animate3(element, json, fn) {
        clearInterval(element.timer);
        element.timer = setInterval(function() {
            var flag = true;
            for (var key in json) {
                if (key == "opacity") {
                    var current = getStyle(element, key) * 100 || 0;
                    var target = json[key] * 100;
                    var step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current += step;
                    element.style[key] = current / 100;
                } else if (key == "zIndex") {
                    element.style[key] = json[key];
                } else if (key == "transform"){
                    var current = getStyle(element, key) * 100 || 0;
                    var target = json[key]* 100;
                    var step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current += step;
                    element.style[key] ="scale("+current / 100+")"  ;
                } else {
                    var current = parseInt(getStyle(element, key)) || 0;
                    var target = json[key];
                    var step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current += step;
                    element.style[key] = current + "px";
                }
                if (current != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(element.timer);
                (typeof fn == "function") && fn();
            }
        }, 20);
    }

    //
    //else if (key == "transform"){
    //    var current = getStyle(element, key) * 100 || 0;
    //    var target = json[key] * 100;
    //    var step = (target - current) / 10;
    //    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //    current += step;
    //    element.style[key] ="scale("+current/ 100+")"  ;

//С�ֲ�ͼ
    function $class(className){
        return document.getElementsByClassName(className);
    }

    var right = $class("right");
    var inner = $class("inner");
    var ul = document.getElementById("ul");
    var lis = ul.children;
    var list = document.getElementById("list");
    var is = list.children;
    var imgWidth = lis[0].offsetWidth;

    var currentIndex = 0;

    //Բ��ָ��ͼƬЧ��
    for(var i = 0; i < is.length ; i++){
        is[i].index = i;
        is[i].onmouseover = mouseOverHandle;
    }
    function mouseOverHandle(){
        var target = this.index * imgWidth * -1;
        animate(ul,target);
        for(var j = 0; j < is.length ; j++){
            is[j].removeAttribute("class");
        }
        this.className = "current";
    }


    setInterval(function(){
        if(currentIndex==lis.length-1){
            currentIndex = 0;
            ul.style.left = 0;
        }
        currentIndex++;
        var target = currentIndex*imgWidth*-1;
        animate(ul,target)

//     СԲ��
        for(var i=0;i<is.length;i++){
            is[i].removeAttribute("class");
        }
        if(currentIndex == lis.length-1){
            is[0].className = "current";
        }else{
            is[currentIndex].className = "current";
        }

    },2000);



    //onload = function(){
    //ȫ������ ���ʳ��� ������Ч
    function $id(id){
        return document.getElementById(id)
    }

    //���ܣ�1���������a��ǩ�ڣ����ŵ�ǰli��ǩ�ڵ�span��ǩ�ı���ͼ����p��ǩ�ı�����ɫ
    //       2������Ƴ�a��ǩ�ڣ��ָ�ԭ��������

    //��ȡul
    //var ul_shendao = $id("shendao");
    ////��ȡ���е�a
    //var as = ul_shendao.getElementsByTagName("a");
    //
    ////console.log(as)
    ////��ȡ���е�li��ǩ
    //var lis_shendao = ul_shendao.children;
    //var spans =ul_shendao.getElementsByTagName("span");
    ////console.log(spans)
    //var ps = ul_shendao.getElementsByClassName("xq");
    ////����a��ǩ
    //for(var i=0;i<as.length;i++){
    //     as[i].index = i;
    //
    //    as[i].onmouseover = function(){
    //        for(var j=0;j<as.length;j++){
    //            ps[j].style.backgroundColor = "#2fc3a3";
    //            //animate3(spans[j],{"transform":(20,0)})
    //            spans[j].style.transform = "scale(0)";
    //        }
    //        ps[this.index].style.backgroundColor = "black";
    //        //animate3(spans[this.index],{"transform":(0,20)});
    //        spans[this.index].style.transform = "scale(2)";
    //    };
    //    as[i].onmouseout = function(){
    //        for(var j=0;j<as.length;j++){
    //            ps[j].style.backgroundColor = "#2fc3a3";
    //            //animate3(spans[j],{"transform":(20,0)})
    //            spans[j].style.transform = "scale(0)";
    //        }
    //    }
    //}
    function animate9(element,obj,callback){
        clearInterval(element.timer);
        element.timer=setInterval(function () {
            var flag = true;
            for(var attr in obj){
                if(attr =="opacity"){
                    //Ϊ����͸���ȸ����׵ļ��㣬���Ƕ��Ŵ�100�����бȽϺ��ٽ��бȽ�
                    var target  = Math.floor(obj[attr]*100);
                    var current = Math.floor(parseFloat(getStyle(element,attr))*100);
                    //�жϷ����ͬʱ���Ѳ����𽥼��٣�
                    var step = (target-current)/10;
                    //�жϷ���֮��Ҫ���ݷ������ȡ����Ϊ�˱�֤����Ŀ�꣬��������������򣬾�����ȡ����-1����������������򣬾ͱ���ȡ����1��
                    step = target>current?Math.ceil(step):Math.floor(step);
                    //ÿһ���ı仯
                    current+=step;
                    //    ���¸�ֵ
                    element.style[attr] = current/100;
                }else if(attr=="zIndex"){
                    var target = obj[attr];
                    element.style[attr] = target;
                }else{
                    var target = obj[attr];
                    var current = parseFloat(getStyle(element,attr));
                    var step = (target - current) / 5;
                    step = target > current ? Math.ceil(step) : Math.floor(step);
                    current += step;
                    element.style[attr] = current + "px";
                }
                if(current!=target){
                    flag = false;
                }
            }
            if(flag){
                clearInterval(element.timer);
                callback&&callback();
            }
        },20)
    }
//    ԲȦ��Ч

    var shendaoLis = $id("shendao").children;
    var abc=document.querySelectorAll('.abc')[0];
    for(var i = 0;i<shendaoLis.length;i++){
        shendaoLis[i].onmouseover = toBig;
        shendaoLis[i].onmouseout = toSmall;
        shendaoLis[i].index = i;
    }
    function toBig(){
        console.log(1);
        animate9(shendaoLis[this.index].children[0],{width:355,height:355,top:-30,left:-75,zIndex:0,opacity:0.8});
        //animate9(shendaoLis[this.index].children[1],{zIndex:1})
    }
    function toSmall(){
        animate9(shendaoLis[this.index].children[0],{width:0,height:0,top:150,left:100,zIndex:0})
    }

//�������λ


}

//�ַ�����Ч����




