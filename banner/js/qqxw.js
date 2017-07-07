var xw = $id("xw");
var xwB = $id("xwbig");
xw.onmouseover = function(){
  xw.children[0].style.display = "none";
  xwB.style.display = "block";
}
xw.onmouseout = function(){
  xw.children[0].style.display = "block";
  xwB.style.display = "none";
}