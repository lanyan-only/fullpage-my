$(document).ready(function() {
    $('#fullpage').fullpage({


    	// sectionsColor:["red","blue","yellow","#444598","#098774","#223459"],
    	controlArrows:true,
    	navigation:true,
    	anchors:["s1",'s2','s3','s4','s5','s6','s7','s8','s9','s10'],
    	navigationTooltips:['首页','视觉','交互','皮肤','功能','待办邮件','联系人邮件','科技','连接易信','马上体验'],
    	showActiveTooltip:false,//不显示信息，鼠标划上去显示
        afterLoad:function(link,index){  //link 为锚链接   index来到哪一屏
           var cw=document.documentElement.clientWidth;
           console.log(cw);
           if(link=="s1"){
              $(".bg1-2").css({bottom:0});
              $(".bg1-1").css({bottom:100});
              $(".mail").css({top:50});
              $(".hgroup").css({opacity:1,transform:"scale(1.1,1.1)"});
          }
          if(link="s2"){
             if(cw<520){
                $(".bg2-3").css({bottom:"0%"});
                $(".section2 strong").css({opacity:1,transform:"scale(1,1)",marginLeft:-96}); 
                $(".section2 h3").css({opacity:1,transform:"scale(1,1)"});
                $(".section2 .p1").css({opacity:1});              
              }else{
              $(".bg2-1").css({opacity:1,marginLeft:-608});
              $(".bg2-2").css({opacity:1,marginLeft:-280});
              $(".bg2-3").css({bottom:"15%"});
              $(".section2 strong").css({opacity:1,transform:"scale(1,1)",marginLeft:-256});
              $(".section2 h3").css({opacity:1,transform:"scale(1,1)"});
              $(".section2 .p1").css({opacity:1});
              }	
          }
          if(link="s3"){
            if(cw<520){
                $(".bg3-1").css({opacity:1});
                $(".bg3-2").css({opacity:1});
                $(".bg3-3").css({opacity:1,marginLeft:-36});
                $(".section3 strong").css({opacity:1,transform:"scale(1,1)",marginLeft:-96});
                $(".section3 .p3").css({opacity:1});
                $(".section3 h3").css({opacity:1,transform:"scale(1,1"});
              }else{
               $(".bg3-1").css({opacity:1});
               $(".bg3-2").css({opacity:1});
              $(".bg3-3").css({opacity:1,marginLeft:-126});
              $(".section3 strong").css({opacity:1,transform:"scale(1,1)",marginLeft:-256});
              $(".section3 .p3").css({opacity:1,marginLeft:-480});
              $(".section3 h3").css({opacity:1,transform:"scale(1,1"});
              }
          }
          if(link="s4"){
            if(cw<520){
              $(".bg4-1").css({bottom:"15%"});
              $(".bg4-2").css({bottom:"15%"});
              $(".bg4-3").css({bottom:"15%"});
              $(".section4 strong").css({opacity:1,transform:"scale(1,1)",marginLeft:-96});
              $(".section4 .p4").css({opacity:1});
              $(".section4 h3").css({opacity:1,transform:"scale(1,1"});
            }else{
              $(".bg4-1").css({bottom:"15%"});
              $(".bg4-2").css({bottom:"15%"});
              $(".bg4-3").css({bottom:"15%"});
              $(".section4 strong").css({opacity:1,transform:"scale(1,1)",marginLeft:-246});
              $(".section4 .p4").css({opacity:1});
              $(".section4 h3").css({opacity:1,transform:"scale(1,1"});
            }
          	
          }
          if(link="s5"){
          	$(".section5 strong").css({opacity:1,transform:"scale(1,1)",marginLeft:-246});
          	$(".section5 h3").css({opacity:1,transform:"scale(1,1"});
          	$(".bg5-1").css({opacity:1,marginLeft:-551});
          	$(".bg5-2").css({opacity:1,marginLeft:-253});
          	$(".bg5-3").css({opacity:1,marginLeft:45});
          	$(".bg5-4").css({opacity:1,marginLeft:345});
          }
          if(link="s6"){
          	$(".section6 strong").css({opacity:1,transform:"scale(1,1)"});
            $(".section6 h3").css({opacity:1,transform:"scale(1,1"});
          	 $(".bg6-1").css({opacity:1,top:0});
          	 $(".bg6-2").css({opacity:1,left:"50%"});
          	 $(".section6 .txt6").css({opacity:1,left:"50%"});
      
          }
          if(link="s7"){
          	$(".bg7-1").css({opacity:1,bottom:250});
            $(".bg7-2").css({opacity:1,bottom:350});
            $(".section7 strong").css({opacity:1,transform:"scale(1,1)"});
            $(".section7 h3").css({opacity:1,transform:"scale(1,1"});
          	$(".section7 .txt7").css({opacity:1,bottom:420});
          }
          if(link="s8"){
            $(".bg8-2").css({opacity:1,bottom:260,marginLeft:-280});
            $(".bg8-3").css({opacity:1,bottom:380,marginLeft:-430});
             $(".bg8-4").css({opacity:1,bottom:420,marginLeft:-510});
            $(".section8 strong").css({opacity:1,transform:"scale(1,1)"});
            $(".section8 h3").css({opacity:1,transform:"scale(1,1"});
          	$(".section8 .p8").css({opacity:1});

          }
          if(link="s9"){
             move(".section9 strong").set('opacity',1).x(-40).duration("2s").end();
             move(".section9 h3").set('opacity',1).x(-40).duration("2s").end();
             move(".bg9-1").set("opacity",1).x(400).duration("2s").end();
             move(".bg9-2").set("opacity",1).x(0).scale(1,1).duration("2s").end();
             move(".bg9-3").set("opacity",1).x(-400).duration("2s").end();
          }
          if(link="s10"){
          	move(".bg10-2").set("opacity",1).x(0).scale(1,1).duration("2s").end();
          	move(".bg10-3").set("opacity",1).x(0).scale(1,1).duration("2s").end();
            $(".go").css({opacity:1,top:'20%'});
          }
        },
        onLeave:function(index,nextIndex){
        //index  离开哪一屏   nextIndex去哪一屏  第三个参数是up和down，代表向上向下滑
          var cw=document.documentElement.clientWidth;
        	if(index=1){
              $(".bg1-2").css({bottom:-370});
              $(".bg1-1").css({bottom:-410});
              $(".mail").css({top:-26});
              $(".hgroup").css({opacity:0,transform:"scale(1,1)"});

           }
           if(index=2){
            if(cw<540){
              $(".section2 strong").css({opacity:0,transform:"scale(0,0)",marginLeft:256});
            }else{
              $(".bg2-1").css({opacity:0,marginLeft:-1108});
              $(".bg2-2").css({opacity:0,marginLeft:320});
              $(".bg2-3").css({bottom:"-40%"});
              $(".section2 strong").css({opacity:0,transform:"scale(0,0)",marginLeft:-256});
              $(".section2 h3").css({opacity:0,transform:"scale(0,0)"});
              $(".section2 .p1").css({opacity:0});
            }
           	
           }
           if(index=3){
           	$(".bg3-1").css({opacity:0});
           	$(".bg3-2").css({opacity:0});
           	$(".bg3-3").css({opacity:0,marginLeft:"50%"});
            $(".section3 strong").css({opacity:0,transform:"scale(0,0)",marginLeft:-256});
            $(".section3 .p3").css({opacity:0});
            $(".section3 h3").css({opacity:0,transform:"scale(0.5,0.5)"});
           }
           if(index=4){
   	       $(".bg4-1").css({bottom:-372});
   	       $(".bg4-2").css({bottom:-449});
   	       $(".bg4-3").css({bottom:-449});
   	        $(".section4 strong").css({opacity:0,transform:"scale(0,0)",marginLeft:-256});
            $(".section4 .p4").css({opacity:0});
            $(".section4 h3").css({opacity:0,transform:"scale(0.5,0.5)"});
           }
           if(index=5){
   	        $(".section5 strong").css({opacity:0,transform:"scale(0,0)",marginLeft:-256});
            $(".section5 h3").css({opacity:0,transform:"scale(0.5,0.5)"});
            $(".bg5-1").css({opacity:0,marginLeft:-851});
          	$(".bg5-2").css({opacity:0,marginLeft:-403});
            $(".bg5-3").css({opacity:0,marginLeft:195});
            $(".bg5-4").css({opacity:0,marginLeft:645});
           }
            if(index=6){
   	         $(".section6 strong").css({opacity:0,transform:"scale(0,0)"});
             $(".section6 h3").css({opacity:0,transform:"scale(0.5,0.5)"});
             $(".bg6-1").css({opacity:0,top:-454});
          	 $(".bg6-2").css({opacity:0,left:"10%"});
          	 $(".section6 .txt6").css({opacity:0,left:"90%"});
           }
           if(index=7){
           	$(".bg7-1").css({opacity:0,bottom:-201});
	   	    $(".bg7-2").css({opacity:0,bottom:-206});
	   	    $(".section7 strong").css({opacity:0,transform:"scale(0,0)"});
            $(".section7 h3").css({opacity:0,transform:"scale(0.5,0.5)"});
	   	    $(".section7 .txt7").css({opacity:0,bottom:-150});
           }
           if(index=8){
	   	    $(".bg8-2").css({opacity:0,bottom:160,marginLeft:-180});
	   	     $(".bg8-3").css({opacity:0,bottom:280,marginLeft:-330});
	   	     $(".bg8-3").css({opacity:0,bottom:320,marginLeft:-410});
	   	    $(".section8 strong").css({opacity:0,transform:"scale(0,0)"});
            $(".section8 h3").css({opacity:0,transform:"scale(0.5,0.5)"});
	   	    $(".section8 .p8").css({opacity:0});
           }
           if(index=9){
           	move(".section9 strong").set('opacity',0).x(0).duration("2s").end();
           	move(".section9 h3").set('opacity',0).x(0).duration("2s").end();
           	move(".bg9-1").set("opacity",0).x(0).duration("2s").end();
            move(".bg9-2").set("opacity",0).x(0).scale(0.1,0.1).duration("2s").end();
            move(".bg9-3").set("opacity",0).x(0).duration("2s").end();
           }
           if(index=10){
           	   move(".bg10-2").set("opacity",0).x(0).scale(0.1,0.1).duration("2s").end();
               move(".bg10-3").set("opacity",0).x(0).scale(0.1,0.1).duration("2s").end();
               $(".go").css({opacity:1,top:'75%'});
           }
        }
    });



});