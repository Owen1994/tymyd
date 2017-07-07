/**
 * Created by Owen on 2017/5/18.
 */

    //二维码部分
var myd = $id("myd");
var offwx = $id("offwx");
var img1 = $id("img1");
var img2 = $id("img2");
myd.onclick = function () {
  img1.style.display = "block";
  img2.style.display = "none";
  myd.style.color = "#fff";
  offwx.style.color = "#959595";
}
offwx.onclick = function () {
  img1.style.display = "none";
  img2.style.display = "block";
  myd.style.color = "#959595";
  offwx.style.color = "#fff";
}



    //手风琴部分
var lengs = document.getElementsByClassName("leng");
var trcomms = document.getElementsByClassName("trcomm");
for(var i=0;i<lengs.length;i++){
  lengs[i].index = i;
  var current = 0;
  lengs[i].onclick = function () {
    //for(var j=0;j<lengs.length;j++){
    //  lengs[j].style.backgroundPosition = window.getComputedStyle(lengs[j],null).backgroundPosition;
    //  var curbac = parseInt(window.getComputedStyle(this,null).backgroundPosition)-408;
    //  var curbac = parseInt(window.getComputedStyle(this,null).backgroundPosition)+408;
    //this.style.backgroundPosition = curbac+'px'+' 0';
    //console.log(this.style.backgroundPosition);
    //}
    for(var j=0;j <= this.index;j++){
      animate(trcomms[j],j*68);
    }
    for(var j = this.index+1;j <= lengs.length-1;j++){
      animate(trcomms[j],391+j*68);
    }
  }
}
function animate(element,target) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var current = element.offsetLeft;
    var step = (target - current)/10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    current += step;
    element.style.left = current + "px";
    if(current == target){
      clearInterval(element.timer);
    }
  },10);
}


//视频，壁纸，音乐等版块效果
var rimgs = document.getElementsByClassName("rimg");
var texs = document.getElementsByClassName("tex");
var rtexs = document.getElementsByClassName("rtex");
for(var i=0;i<rtexs.length;i++){
  rtexs[i].index = i;
  rtexs[i].onmouseover = function () {
    animate1(rimgs[this.index],-90);
    animate1(texs[this.index],54)
  }
  rtexs[i].onmouseout = function () {
    animate1(rimgs[this.index],20);
    animate1(texs[this.index],91);
  }
}
function animate1(element,target) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var current = element.offsetTop;
    var step = (target - current)/10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    current += step;
    element.style.top = current + "px";
    if(current == target){
      clearInterval(element.timer);
    }
  },20);
}


//文字轮播图切换效果
var lbs = document.getElementsByClassName("lb");
var lb1s = document.getElementsByClassName("lb1");
var lbtx = document.getElementById("lbtx");
var lbtx1 = document.getElementById("lbtx1");
for(var i=0;i<lbs.length;i++){
  lbs[i].index = i;
  lbs[i].onclick = function(){
    for(var j=0;j<lbs.length;j++){
      lbs[j].className = "lb";
    }
    lbs[this.index].className = "lb active";
    var target = 20 - this.index*370;
    animate2(lbtx,target);
  }
}
for(var i=0;i<lb1s.length;i++){
  lb1s[i].index = i;
  lb1s[i].onclick = function(){
    for(var j=0;j<lb1s.length;j++){
      lb1s[j].className = "lb1";
    }
    lb1s[this.index].className = "lb1 active";
    var target = 20 - this.index*370;
    animate2(lbtx1,target);
  }
}
function getstyle(element,attr){
  if( window.getComputedStyle ){
    return window.getComputedStyle(element,null)[attr];
  }else{
    return element.currentStyle[attr];
  }
}
function animate2(element,target){
  clearInterval(element.time);
  element.time = setInterval(function () {
    var current = parseInt(getstyle(element,"left"));
    var step = (target - current)/10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    current += step;
    element.style.left = current + "px";
    if(current == target){
      clearInterval(element.time);
    }
  },5);
}


