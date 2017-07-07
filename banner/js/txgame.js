/**
 * Created by Owen on 2017/5/17.
 */
var content = $id("content");
var txrank = $id("txrank");
var u2 = $id("u2");
var u3 = $id("u3");
var u4 = $id("u4");
var lis2 = u2.children;
var lis3 = u3.children;
var lis4 = u4.children;
for(var i=0;i<lis2.length;i++){
  lis2[i].onmouseover = mouseover;
  lis2[i].onmouseout = mouseout;
}
for(var i=0;i<lis3.length;i++){
  lis3[i].onmouseover = mouseover;
  lis3[i].onmouseout = mouseout;
}
for(var i=0;i<lis4.length;i++){
  lis4[i].onmouseover = mouseover;
  lis4[i].onmouseout = mouseout;
}
function mouseover(){
  this.children[1].style.display = "none";
  this.children[2].style.display = "block";
  this.children[0].style.top = 0;
  this.style.height = "90px";
}
function mouseout(){
  this.children[1].style.display = "block";
  this.children[2].style.display = "none";
  this.children[0].style.top = "5px";
  this.style.height = "28px";
}
txrank.onmouseover = function(){
  content.style.display = "block";
}
txrank.onmouseout = function(){
  content.style.display = "none";
}

