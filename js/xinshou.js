/**
 * Created by wu on 2017/5/20.
 */


//for(var i=0;i<snav.length;i++){
//  snav[i].onmouseover=mouseover;
//}
//function mouseover(){
//  this.style.background="#01b8a9";
//}


//var dhead = $id("dhead");
//var article=$id("article-fstpart");
//var myd=$id("myd");
//var vido=$id("vido");
//  $(function(){
//    var snav = $("#snav");
//    var dhead=$("#dhead");
//   $(window).on("scroll",function(){
//     var y=$(window).scrollTop();
//     var height = dhead.css("top")+snav.top("top");
//     if(y>height){
//       snav.css("position","fixed").css("top",0);
//     }else{
//       snav.css("position","");
//     }
//   });
//  });
var snav = $id("snav");
var banner = $id("banner");
var header = $id("header");
var myd=$id("myd");
var vido=$id("vido");

function getScroll(){
  return {
    top:window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
    left:window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
  };
}
document.onscroll=function(){
  //console.log(scrollTop);//约90
  //滚动的高度
  var scrollTop = getScroll().top;
  //获取滚动后的最大高度
  //var heightMax=snav.offsetHeight+banner.offsetHeight;
  var heightMax=header.offsetHeight;
  if(scrollTop>heightMax){
//      snav.style.position="fixed";
    snav.className="snav fixed"
//      article.style.marginTop=snav.offsetHeight+"px";
//      vido.style.paddingTop=snav.offsetHeight+"px";
//        myd.style.paddingTop=snav.offsetHeight+"px";
  }else{
    snav.className="snav";
//      article.style.marginTop=""+"px";
//      myd.style.marginTop=""+"px";
//      vido.style.paddingTop=""+"px";
//    myd.style.paddingTop=0;
  }
  //console.log(heightMax);
}
$(function(){
    $("#images img").hover(function(){
      $(this).stop().animate({width:100,height:400,},1000);
      $(this).siblings().stop().animate({width:62,height:290},1000);
    },function(){
      $("#images img").stop().animate({width:62,height:300},1000);
    })

  //$("#images img").hover(function(){
  //  $(this).css({width:100,height:400});
  //  $(this).siblings().css({width:62,height:275});
  //},function(){
  //  $("#images img").css({width:62,height:300});
  //});

  //console.log($("#snav a"));


    $("#snav a").hover(function(){
      $(this).css({"background":"#01b8a9"});
      $(this).css({"color":"white","font-weight":600});
      $(this).parent().siblings().children().css({"background":"#aeaeae"});
      $(this).parent().siblings().children().css({"color":"white","font-weight":500});
      //console.log($(this).parent().siblings().children());
    },function(){
      $("#snav a").css({"background":"#aeaeae"});
      $("#snav a").css({"color":"white","font-weight":500});
      //$(this).parent().siblings().children().css({"color":"#f0f2f2"});
      //$(this).css({"color":"white"});
      //$(this).parent().siblings().children().css({"background":""});
      //console.log($(this).parent().siblings().children());
    });

});
