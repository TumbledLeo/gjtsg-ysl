"use strict";var root="./",loader=new resLoader({resources:[root+"images/zi.png",root+"images/jz_bg_01.png",root+"images/nav.png",root+"images/nav_list.png",root+"images/more.png",root+"images/return.png",root+"images/return1.png",root+"images/swiper-button-next.png",root+"images/swiper-button-prev.png",root+"images/load.jpg",root+"images/bg1.jpg",root+"images/bg2.jpg",root+"images/bg3.jpg",root+"images/bg4.jpg",root+"images/bg5.jpg",root+"images/bbg.jpg",root+"images/p0.jpg",root+"images/p1.jpg",root+"images/p2.jpg",root+"images/p3.jpg",root+"images/p4.jpg",root+"images/p5.jpg",root+"images/p6.jpg",root+"images/p7.jpg",root+"images/p8.jpg",root+"images/p9.jpg",root+"images/p10.jpg",root+"images/p11.jpg",root+"images/p12.jpg",root+"images/p13.jpg",root+"images/p14.jpg",root+"images/p0.jpg",root+"images/pp1.jpg",root+"images/pp2.jpg",root+"images/pp3.jpg",root+"images/pp4.jpg",root+"images/pp5.jpg",root+"images/pp6.jpg",root+"images/pp7.jpg",root+"images/pp8.jpg",root+"images/pp9.jpg",root+"images/pp10.jpg",root+"images/pp11.jpg",root+"images/pp12.jpg",root+"images/pp13.jpg",root+"images/pp14.jpg",root+"images/x1.jpg",root+"images/x2.jpg",root+"images/x3.jpg",root+"images/x4.jpg",root+"images/x5.jpg",root+"images/x6.jpg",root+"images/x7.jpg",root+"images/x8.jpg",root+"images/x9.jpg",root+"images/x10.jpg",root+"images/x11.jpg",root+"images/xx1.jpg",root+"images/xx2.jpg",root+"images/xx3.jpg",root+"images/xx4.jpg",root+"images/xx5.jpg",root+"images/xx6.jpg",root+"images/xx7.jpg",root+"images/xx8.jpg",root+"images/xx9.jpg",root+"images/xx10.jpg",root+"images/xx11.jpg",root+"images/r1.jpg",root+"images/r2.jpg",root+"images/r3.jpg",root+"images/r4.jpg",root+"images/r5.jpg",root+"images/r6.jpg",root+"images/r7.jpg",root+"images/r8.jpg",root+"images/r9.jpg",root+"images/r10.jpg",root+"images/r11.jpg",root+"images/rr1.jpg",root+"images/rr2.jpg",root+"images/rr3.jpg",root+"images/rr4.jpg",root+"images/rr5.jpg",root+"images/rr6.jpg",root+"images/rr7.jpg",root+"images/rr8.jpg",root+"images/rr9.jpg",root+"images/rr10.jpg",root+"images/rr11.jpg",root+"images/dd/dd1.jpg",root+"images/dd/dd2.jpg",root+"images/dd/dd3.jpg",root+"images/dd/dd4.jpg",root+"images/dd/dd5.jpg",root+"images/dd/dd6.jpg",root+"images/dd/dd7.jpg",root+"images/dd/dd8.jpg",root+"images/dd/dd9.jpg",root+"images/dd/dd10.jpg",root+"images/dd/dd11.jpg",root+"images/dd/dd12.jpg",root+"images/dd/dd13.jpg",root+"images/dd/dd14.jpg",root+"images/dd/dd15.jpg",root+"images/dd/dd16.jpg",root+"images/dd/dd17.jpg",root+"images/dd/dd18.jpg",root+"images/dd/dd19.jpg",root+"images/dd/dd20.jpg",root+"images/dd/dd21.jpg",root+"images/dd/dr1.jpg",root+"images/dd/dr2.jpg",root+"images/dd/dr3.jpg",root+"images/dd/dr4.jpg",root+"images/dd/dr5.jpg",root+"images/dd/dr6.jpg",root+"images/dd/dr7.jpg",root+"images/dd/dr8.jpg",root+"images/dd/dr9.jpg",root+"images/dd/dr10.jpg",root+"images/dd/dx1.jpg",root+"images/dd/dx2.jpg",root+"images/dd/dx3.jpg",root+"images/dd/dx4.jpg",root+"images/dd/dx5.jpg",root+"images/dd/dx6.jpg",root+"images/dd/dx7.jpg",root+"images/dd/dx8.jpg",root+"images/dd/dx9.jpg",root+"images/dd/dx10.jpg",root+"images/dd/dx11.jpg",root+"images/dd/dx12.jpg"],onStart:function(total){},onProgress:function(current,total){var percent=parseInt(current/total*100);$(".totals").text(percent+"%");var text=percent+"%";$(".he").css("left",text)},onComplete:function(total){$("#progress").fadeOut(),$(".enter").show(),setTimeout(function(){$(".l").animate({top:"0"},2e3),$(".r").animate({top:"100%"},2e3),$(".zt").animate({top:"2%",height:"100%"},2e3)},1e3)}});loader.start(),$(function(){var tag=!0;$(".nav").click(function(){tag=tag?($(".nav_list").stop().fadeIn(),!1):($(".nav_list").stop().fadeOut(),!0)}),$(".nav_list li.n").click(function(){2==$(this).index()?$.fn.fullpage.moveTo(5,0):3==$(this).index()?$.fn.fullpage.moveTo(4,0):4==$(this).index()?$.fn.fullpage.moveTo(3,0):5==$(this).index()?$.fn.fullpage.moveTo(2,0):6==$(this).index()&&$.fn.fullpage.moveTo(1,0),$(".nav_list").stop().fadeOut(),tag=!0}),$(".ysljj").click(function(){$(".bbg").fadeIn(),$(".nav_list").stop().fadeOut(),tag=!0;new IScroll(".wrapper1",{scrollbars:"custom",interactiveScrollbars:!0,resizeScrollbars:!1});$(".iScrollLoneScrollbar").css("overflow","initial")}),$(".yhyjj").click(function(){$(".bbgy").fadeIn(),$(".nav_list").stop().fadeOut(),tag=!0;new IScroll(".wrapper2",{scrollbars:"custom",interactiveScrollbars:!0,resizeScrollbars:!1});$(".iScrollLoneScrollbar").css("overflow","initial")}),$(".return").click(function(){$(".bbg").fadeOut(),$(".bbgy").fadeOut()}),$(".see1").click(function(){$(".chuang").fadeIn(1e3),$(".chuan").fadeOut(),$(".fly li").eq(0).fadeIn(3e3)}),$(".see2").click(function(){$(".chuang").fadeIn(1e3),$(".chuan").fadeOut(),$(".fly li").eq(1).fadeIn(3e3)}),$(".see3").click(function(){$(".chuang").fadeIn(1e3),$(".chuan").fadeOut(),$(".fly li").eq(2).fadeIn(3e3)}),$(".see4").click(function(){$(".chuang").fadeIn(1e3),$(".chuan").fadeOut(),$(".fly li").eq(3).fadeIn(3e3)}),$(".see5").click(function(){$(".chuang").fadeIn(1e3),$(".chuan").fadeOut(),$(".fly li").eq(4).fadeIn(3e3)});var swiper0=new Swiper(".swiper-container0",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!0,centeredSlides:!0,slidesPerView:1.3,pagination:".swiper-container0 .swiper-pagination",paginationClickable:!0,prevButton:".swiper-container0 .swiper-button-prev",nextButton:".swiper-container0 .swiper-button-next",observer:!0,observeParents:!0,roundLengths:!0,onInit:function(swiper){swiper.slides[2].className="swiper-slide swiper-slide-active"},breakpoints:{668:{slidesPerView:1}}}),swiper1=new Swiper(".swiper-container1",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!0,centeredSlides:!0,slidesPerView:1.3,pagination:".swiper-container1 .swiper-pagination",paginationClickable:!0,prevButton:".swiper-container1 .swiper-button-prev",nextButton:".swiper-container1 .swiper-button-next",observer:!0,observeParents:!0,roundLengths:!0,onInit:function(swiper){swiper.slides[2].className="swiper-slide swiper-slide-active"},breakpoints:{668:{slidesPerView:1}}}),swiper2=new Swiper(".swiper-container2",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!0,centeredSlides:!0,slidesPerView:1.3,pagination:".swiper-container2 .swiper-pagination",paginationClickable:!0,prevButton:".swiper-container2 .swiper-button-prev",nextButton:".swiper-container2 .swiper-button-next",observer:!0,observeParents:!0,roundLengths:!0,onInit:function(swiper){swiper.slides[2].className="swiper-slide swiper-slide-active"},breakpoints:{668:{slidesPerView:1}}}),swiper3=new Swiper(".swiper-container3",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!0,centeredSlides:!0,slidesPerView:1.3,pagination:".swiper-container3 .swiper-pagination",paginationClickable:!0,prevButton:".swiper-container3 .swiper-button-prev",nextButton:".swiper-container3 .swiper-button-next",observer:!0,observeParents:!0,roundLengths:!0,onInit:function(swiper){swiper.slides[2].className="swiper-slide swiper-slide-active"},breakpoints:{668:{slidesPerView:1}}}),swiper4=new Swiper(".swiper-container4",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!0,centeredSlides:!0,slidesPerView:1.3,pagination:".swiper-container4 .swiper-pagination",paginationClickable:!0,prevButton:".swiper-container4 .swiper-button-prev",nextButton:".swiper-container4 .swiper-button-next",observer:!0,observeParents:!0,roundLengths:!0,onInit:function(swiper){swiper.slides[2].className="swiper-slide swiper-slide-active"},breakpoints:{668:{slidesPerView:1}}}),arrys=[];arrys.push(swiper0),arrys.push(swiper1),arrys.push(swiper2),arrys.push(swiper3),arrys.push(swiper4),$(".btnbox .l_btn").click(function(){$(".fly li").fadeOut(),$(".chuang").fadeOut(),$(".chuan").fadeIn(),setTimeout(function(){swiper0.slideTo(1),swiper1.slideTo(1),swiper2.slideTo(1),swiper3.slideTo(1),swiper4.slideTo(1)},1e3)}),$(".btnbox .r_btn").click(function(){$(this).parents(".tip").find(".item");$(this).parents("li.sd").find(".iteminfobox").show();var num=arrys[$(this).parents("li.sd").index()];$(this).parents("li.sd").find(".iteminfobox .item").hide().eq(num.realIndex).fadeIn()}),$(".iteminfobox .item .close").click(function(){$(this).parent().parent().fadeOut()}),$(".tip .swiper-wrapper").click(function(){$(this).parents("li.sd").find(".iteminfobox").show();var num=arrys[$(this).parents("li.sd").index()];$(this).parents("li.sd").find(".iteminfobox .item").hide().eq(num.realIndex).fadeIn()}),$(".sj").click(function(){$(this).parents(".iteminfobox").find(".dt").fadeIn();for(var nums=$(this).parent(".item").index(),i=0;i<$(this).parents(".iteminfobox").find(".dt .swiper-container").length;i++){nums==$(this).parents(".iteminfobox").find(".dt .swiper-container").eq(i).attr("data")&&$(this).parents(".iteminfobox").find(".dt .swiper-container").eq(i).fadeIn()}}),$(".dt .close").click(function(){$(this).parent(".dt").fadeOut().find(".swiper-container").fadeOut()})}),$(function(){new Swiper(".swiper-container21",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container21 .swiper-button-prev",nextButton:".swiper-container21 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container22",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container22 .swiper-button-prev",nextButton:".swiper-container22 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container23",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container23 .swiper-button-prev",nextButton:".swiper-container23 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container24",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container24 .swiper-button-prev",nextButton:".swiper-container24 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container25",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container25 .swiper-button-prev",nextButton:".swiper-container25 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container26",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container26 .swiper-button-prev",nextButton:".swiper-container26 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container27",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container27 .swiper-button-prev",nextButton:".swiper-container27 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container28",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container28 .swiper-button-prev",nextButton:".swiper-container28 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container29",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container29 .swiper-button-prev",nextButton:".swiper-container29 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container291",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container291 .swiper-button-prev",nextButton:".swiper-container291 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container292",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container292 .swiper-button-prev",nextButton:".swiper-container292 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container293",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container293 .swiper-button-prev",nextButton:".swiper-container293 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container31",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container31 .swiper-button-prev",nextButton:".swiper-container31 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container32",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container32 .swiper-button-prev",nextButton:".swiper-container32 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container33",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container33 .swiper-button-prev",nextButton:".swiper-container33 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container34",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container34 .swiper-button-prev",nextButton:".swiper-container34 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container35",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container35 .swiper-button-prev",nextButton:".swiper-container35 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container36",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container36 .swiper-button-prev",nextButton:".swiper-container36 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container45",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container45 .swiper-button-prev",nextButton:".swiper-container45 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container42",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container42 .swiper-button-prev",nextButton:".swiper-container42 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container43",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container43 .swiper-button-prev",nextButton:".swiper-container43 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container44",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container44 .swiper-button-prev",nextButton:".swiper-container44 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container51",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container51 .swiper-button-prev",nextButton:".swiper-container51 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container52",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container52 .swiper-button-prev",nextButton:".swiper-container52 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container53",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container53 .swiper-button-prev",nextButton:".swiper-container53 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container61",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container61 .swiper-button-prev",nextButton:".swiper-container61 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container62",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container62 .swiper-button-prev",nextButton:".swiper-container62 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container63",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container63 .swiper-button-prev",nextButton:".swiper-container63 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container64",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container64 .swiper-button-prev",nextButton:".swiper-container64 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container65",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container65 .swiper-button-prev",nextButton:".swiper-container65 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container66",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container66 .swiper-button-prev",nextButton:".swiper-container66 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container67",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container67 .swiper-button-prev",nextButton:".swiper-container67 .swiper-button-next",observer:!0,observeParents:!0}),new Swiper(".swiper-container68",{autoplay:!1,speed:1e3,autoplayDisableOnInteraction:!1,loop:!1,centeredSlides:!0,slidesPerView:1,prevButton:".swiper-container68 .swiper-button-prev",nextButton:".swiper-container68 .swiper-button-next",observer:!0,observeParents:!0})});