/**
 * Created by wuyan on 2017/5/12.
 */
//获取元素的函数
function getStyle(element,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(element,null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}
function $id(id) {
    return document.getElementById(id);
}
//缓冲动画函数
function animate6(element,obj,callback){
    clearInterval(element.timer);
    element.timer=setInterval(function () {
        var flag = true;
        for(var attr in obj){
            if(attr =="opacity"){
                //为了让透明度更容易的计算，我们都放大100倍进行比较后再进行比较
                var target  = Math.floor(obj[attr]*100);
                var current = Math.floor(parseFloat(getStyle(element,attr))*100);
                //判断方向的同时，把步长逐渐减少；
                var step = (target-current)/10;
                //判断方向之后，要根据方向进行取整，为了保证到达目标，如果是往负数方向，就往下取整到-1，如果是往正数方向，就必须取整到1；
                step = target>current?Math.ceil(step):Math.floor(step);
                //每一步的变化
                current+=step;
            //    重新赋值
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