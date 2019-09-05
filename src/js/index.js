let root = "./";
// 加载
let loader = new resLoader({
    resources: [
        root + 'images/zi.png',
        root + 'images/jz_bg_01.png',
        root + 'images/nav.png',
        root + 'images/nav_list.png',
        root + 'images/more.png',
        root + 'images/return.png',
        root + 'images/return1.png',
        root + 'images/swiper-button-next.png',
        root + 'images/swiper-button-prev.png',

        root + 'images/load.jpg',
        root + 'images/bg1.jpg',
        root + 'images/bg2.jpg',
        root + 'images/bg3.jpg',
        root + 'images/bg4.jpg',
        root + 'images/bg5.jpg',
        root + 'images/bbg.jpg',
       
        

        root + 'images/p0.jpg',
        root + 'images/p1.jpg',
        root + 'images/p2.jpg',
        root + 'images/p3.jpg',
        root + 'images/p4.jpg',
        root + 'images/p5.jpg',
        root + 'images/p6.jpg',
        root + 'images/p7.jpg',
        root + 'images/p8.jpg',
        root + 'images/p9.jpg',
        root + 'images/p10.jpg',
        root + 'images/p11.jpg',
        root + 'images/p12.jpg',
        root + 'images/p13.jpg',
        root + 'images/p14.jpg',
        root + 'images/p0.jpg',
        root + 'images/pp1.jpg',
        root + 'images/pp2.jpg',
        root + 'images/pp3.jpg',
        root + 'images/pp4.jpg',
        root + 'images/pp5.jpg',
        root + 'images/pp6.jpg',
        root + 'images/pp7.jpg',
        root + 'images/pp8.jpg',
        root + 'images/pp9.jpg',
        root + 'images/pp10.jpg',
        root + 'images/pp11.jpg',
        root + 'images/pp12.jpg',
        root + 'images/pp13.jpg',
        root + 'images/pp14.jpg',


        root + 'images/x1.jpg',
        root + 'images/x2.jpg',
        root + 'images/x3.jpg',
        root + 'images/x4.jpg',
        root + 'images/x5.jpg',
        root + 'images/x6.jpg',
        root + 'images/x7.jpg',
        root + 'images/x8.jpg',
        root + 'images/x9.jpg',
        root + 'images/x10.jpg',
        root + 'images/x11.jpg',
        root + 'images/xx1.jpg',
        root + 'images/xx2.jpg',
        root + 'images/xx3.jpg',
        root + 'images/xx4.jpg',
        root + 'images/xx5.jpg',
        root + 'images/xx6.jpg',
        root + 'images/xx7.jpg',
        root + 'images/xx8.jpg',
        root + 'images/xx9.jpg',
        root + 'images/xx10.jpg',
        root + 'images/xx11.jpg',

        root + 'images/r1.jpg',
        root + 'images/r2.jpg',
        root + 'images/r3.jpg',
        root + 'images/r4.jpg',
        root + 'images/r5.jpg',
        root + 'images/r6.jpg',
        root + 'images/r7.jpg',
        root + 'images/r8.jpg',
        root + 'images/r9.jpg',
        root + 'images/r10.jpg',
        root + 'images/r11.jpg',
        root + 'images/rr1.jpg',
        root + 'images/rr2.jpg',
        root + 'images/rr3.jpg',
        root + 'images/rr4.jpg',
        root + 'images/rr5.jpg',
        root + 'images/rr6.jpg',
        root + 'images/rr7.jpg',
        root + 'images/rr8.jpg',
        root + 'images/rr9.jpg',
        root + 'images/rr10.jpg',
        root + 'images/rr11.jpg',

        root + 'images/dd/dd1.jpg',
        root + 'images/dd/dd2.jpg',
        root + 'images/dd/dd3.jpg',
        root + 'images/dd/dd4.jpg',
        root + 'images/dd/dd5.jpg',
        root + 'images/dd/dd6.jpg',
        root + 'images/dd/dd7.jpg',
        root + 'images/dd/dd8.jpg',
        root + 'images/dd/dd9.jpg',
        root + 'images/dd/dd10.jpg',
        root + 'images/dd/dd11.jpg',
        root + 'images/dd/dd12.jpg',
        root + 'images/dd/dd13.jpg',
        root + 'images/dd/dd14.jpg',
        root + 'images/dd/dd15.jpg',
        root + 'images/dd/dd16.jpg',
        root + 'images/dd/dd17.jpg',
        root + 'images/dd/dd18.jpg',
        root + 'images/dd/dd19.jpg',
        root + 'images/dd/dd20.jpg',
        root + 'images/dd/dd21.jpg',

        root + 'images/dd/dr1.jpg',
        root + 'images/dd/dr2.jpg',
        root + 'images/dd/dr3.jpg',
        root + 'images/dd/dr4.jpg',
        root + 'images/dd/dr5.jpg',
        root + 'images/dd/dr6.jpg',
        root + 'images/dd/dr7.jpg',
        root + 'images/dd/dr8.jpg',
        root + 'images/dd/dr9.jpg',
        root + 'images/dd/dr10.jpg',

        
        root + 'images/dd/dx1.jpg',
        root + 'images/dd/dx2.jpg',
        root + 'images/dd/dx3.jpg',
        root + 'images/dd/dx4.jpg',
        root + 'images/dd/dx5.jpg',
        root + 'images/dd/dx6.jpg',
        root + 'images/dd/dx7.jpg',
        root + 'images/dd/dx8.jpg',
        root + 'images/dd/dx9.jpg',
        root + 'images/dd/dx10.jpg',
        root + 'images/dd/dx11.jpg',
        root + 'images/dd/dx12.jpg',

       
    ],
    onStart: function (total) {
        // 开始的回调
    },
    onProgress: function (current, total) {
        // 加载中的回调
        var percent = parseInt(current / total * 100);
        $('.totals').text(percent+'%');
        var text = percent+'%';
        $('.he').css('left',text);
    },
    onComplete: function (total) {
        // 加载完的回调
        $('#progress').fadeOut();

        /* if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
            new WOW().init();
        } */
        $('.enter').show();
        setTimeout(function(){
          $('.l').animate({top:"0"},2000);
          $('.r').animate({top:"100%"},2000);
         $('.zt').animate({top:"2%",height:"100%"},2000);
        },1000);
    }
});
loader.start();

$(function(){
    /* $('.go').click(function(){
        $('.enter').fadeOut();
    }); */
    /* 导航 */
  let tag = true;
  $('.nav').click(function(){
    if(tag){
      $('.nav_list').stop().fadeIn();
      tag = false;
    }else{
      $('.nav_list').stop().fadeOut();
      tag = true;
    }
  });
  $('.nav_list li.n').click(function(){
    /* console.log($(this).index());
    $.fn.fullpage.moveTo($(this).index()-1, 0); */
    if($(this).index()==2){
      $.fn.fullpage.moveTo(5,0);
    }else if($(this).index()==3){
      $.fn.fullpage.moveTo(4,0);
    }else if($(this).index()==4){
      $.fn.fullpage.moveTo(3,0);
    }else if($(this).index()==5){
      $.fn.fullpage.moveTo(2,0);
    }else if($(this).index()==6){
      $.fn.fullpage.moveTo(1,0);
    }
    $('.nav_list').stop().fadeOut();
      tag = true;
  });
  $('.ysljj').click(function(){
    $('.bbg').fadeIn();
    $('.nav_list').stop().fadeOut();
    tag = true;
    var myScroll = new IScroll('.wrapper1', {
    //    scrollbars: true,
    scrollbars: 'custom',
    interactiveScrollbars:true,
    resizeScrollbars: false,//大小固定
    });
    $('.iScrollLoneScrollbar').css("overflow","initial");
  });
  $('.yhyjj').click(function(){
    $('.bbgy').fadeIn();
    $('.nav_list').stop().fadeOut();
    tag = true;
    var myScroll = new IScroll('.wrapper2', {
        //    scrollbars: true,
        scrollbars: 'custom',
        interactiveScrollbars:true,
        resizeScrollbars: false,//大小固定
        });
        $('.iScrollLoneScrollbar').css("overflow","initial");
  });
  $('.return').click(function(){
    $('.bbg').fadeOut();
    $('.bbgy').fadeOut();
  });

     /* 第一屏 */
     $('.see1').click(function(){
        $('.chuang').fadeIn(1000);
        $('.chuan').fadeOut();
        $('.fly li').eq(0).fadeIn(3000);
      });
      
      /* 第二屏 */
      $('.see2').click(function(){
        $('.chuang').fadeIn(1000);
        $('.chuan').fadeOut();
        $('.fly li').eq(1).fadeIn(3000);
      });
      /* 第三屏 */
      $('.see3').click(function(){
        $('.chuang').fadeIn(1000);
        $('.chuan').fadeOut();
        $('.fly li').eq(2).fadeIn(3000);
      });
       /* 第四屏 */
       $('.see4').click(function(){
        $('.chuang').fadeIn(1000);
        $('.chuan').fadeOut();
        $('.fly li').eq(3).fadeIn(3000);
       });
       /* 第五屏 */
       $('.see5').click(function(){
        $('.chuang').fadeIn(1000);
        $('.chuan').fadeOut();
        $('.fly li').eq(4).fadeIn(3000);
       });
       var swiper0 = new Swiper('.swiper-container0', {
        autoplay: false,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.3,
        pagination: '.swiper-container0 .swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-container0 .swiper-button-prev',
        nextButton: '.swiper-container0 .swiper-button-next',
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        roundLengths : true, //防止文字模糊
        onInit: function (swiper) {
            swiper.slides[2].className = "swiper-slide swiper-slide-active";
        },
        breakpoints: {
            668: {
                slidesPerView: 1,
            }
        }
    });
    var swiper1 = new Swiper('.swiper-container1', {
        autoplay: false,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.3,
        pagination: '.swiper-container1 .swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-container1 .swiper-button-prev',
        nextButton: '.swiper-container1 .swiper-button-next',
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
      
        roundLengths : true, //防止文字模糊
        onInit: function (swiper) {
            swiper.slides[2].className = "swiper-slide swiper-slide-active";
        },
        breakpoints: {
            668: {
                slidesPerView: 1,
            }
        }
    });
    var swiper2 = new Swiper('.swiper-container2', {
        autoplay: false,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.3,
        pagination: '.swiper-container2 .swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-container2 .swiper-button-prev',
        nextButton: '.swiper-container2 .swiper-button-next',
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        roundLengths : true, //防止文字模糊
        onInit: function (swiper) {
            swiper.slides[2].className = "swiper-slide swiper-slide-active";
        },
        breakpoints: {
            668: {
                slidesPerView: 1,
            }
        }
    });
    var swiper3 = new Swiper('.swiper-container3', {
        autoplay: false,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.3,
        pagination: '.swiper-container3 .swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-container3 .swiper-button-prev',
        nextButton: '.swiper-container3 .swiper-button-next',
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        roundLengths : true, //防止文字模糊
        onInit: function (swiper) {
            swiper.slides[2].className = "swiper-slide swiper-slide-active";
        },
        breakpoints: {
            668: {
                slidesPerView: 1,
            }
        }
    });
    var swiper4 = new Swiper('.swiper-container4', {
        autoplay: false,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.3,
        pagination: '.swiper-container4 .swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-container4 .swiper-button-prev',
        nextButton: '.swiper-container4 .swiper-button-next',
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        roundLengths : true, //防止文字模糊
        onInit: function (swiper) {
            swiper.slides[2].className = "swiper-slide swiper-slide-active";
        },
        breakpoints: {
            668: {
                slidesPerView: 1,
            }
        }
    });
    var arrys = [];
    arrys.push(swiper0);
    arrys.push(swiper1);
    arrys.push(swiper2);
    arrys.push(swiper3);
    arrys.push(swiper4);
    $('.btnbox .l_btn').click(function () {
        $('.fly li').fadeOut();
        $('.chuang').fadeOut();
        $('.chuan').fadeIn();
        setTimeout(function(){
            swiper0.slideTo(1);
        swiper1.slideTo(1);
        swiper2.slideTo(1);
        swiper3.slideTo(1);
        swiper4.slideTo(1);
        },1000);
    });
    $('.btnbox .r_btn').click(function () {
        // 当前轮播图索引
       // alert(swiper.realIndex);
        var arr = $(this).parents('.tip').find('.item');
        $(this).parents('li.sd').find('.iteminfobox').show();
/*         console.log(arrys); */
        var num = arrys[$(this).parents('li.sd').index()]; 
        $(this).parents('li.sd').find('.iteminfobox .item').hide().eq(num.realIndex).fadeIn();
    });
    $('.iteminfobox .item .close').click(function () {
        $(this).parent().parent().fadeOut();
    });
    $('.tip .swiper-wrapper').click(function () {
        // 当前轮播图索引
        // alert(swiper.realIndex);
        //var arr = $('.iteminfobox .item');
        // console.log(arr)
        // $('.iteminfobox').show() 
        $(this).parents('li.sd').find('.iteminfobox').show();
        var num = arrys[$(this).parents('li.sd').index()]; 
        $(this).parents('li.sd').find('.iteminfobox .item').hide().eq(num.realIndex).fadeIn();
        }) 
   /*  图集 */
   $('.sj').click(function(){
    $(this).parents('.iteminfobox').find('.dt').fadeIn();
    var nums = $(this).parent(".item").index();

    for(var i=0;i<$(this).parents('.iteminfobox').find('.dt .swiper-container').length;i++){
      var datas = $(this).parents('.iteminfobox').find('.dt .swiper-container').eq(i).attr('data');
      if(nums==datas){
        $(this).parents('.iteminfobox').find('.dt .swiper-container').eq(i).fadeIn();
      }
    }
    });
    $('.dt .close').click(function(){
        $(this).parent('.dt').fadeOut().find('.swiper-container').fadeOut();
      }); 
});
      /* 实景图轮播 */
      $(function(){
        var swiper21 = new Swiper('.swiper-container21', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container21 .swiper-button-prev',
            nextButton: '.swiper-container21 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper22 = new Swiper('.swiper-container22', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container22 .swiper-button-prev',
            nextButton: '.swiper-container22 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper22 = new Swiper('.swiper-container23', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container23 .swiper-button-prev',
            nextButton: '.swiper-container23 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper22 = new Swiper('.swiper-container24', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container24 .swiper-button-prev',
            nextButton: '.swiper-container24 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper22 = new Swiper('.swiper-container25', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container25 .swiper-button-prev',
            nextButton: '.swiper-container25 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper22 = new Swiper('.swiper-container26', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container26 .swiper-button-prev',
            nextButton: '.swiper-container26 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper22 = new Swiper('.swiper-container27', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container27 .swiper-button-prev',
            nextButton: '.swiper-container27 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper22 = new Swiper('.swiper-container28', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container28 .swiper-button-prev',
            nextButton: '.swiper-container28 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper22 = new Swiper('.swiper-container29', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container29 .swiper-button-prev',
            nextButton: '.swiper-container29 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper22 = new Swiper('.swiper-container291', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container291 .swiper-button-prev',
            nextButton: '.swiper-container291 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper22 = new Swiper('.swiper-container292', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container292 .swiper-button-prev',
            nextButton: '.swiper-container292 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper22 = new Swiper('.swiper-container293', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container293 .swiper-button-prev',
            nextButton: '.swiper-container293 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container31', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container31 .swiper-button-prev',
            nextButton: '.swiper-container31 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container32', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container32 .swiper-button-prev',
            nextButton: '.swiper-container32 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container33', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container33 .swiper-button-prev',
            nextButton: '.swiper-container33 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container34', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container34 .swiper-button-prev',
            nextButton: '.swiper-container34 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container35', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container35 .swiper-button-prev',
            nextButton: '.swiper-container35 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container36', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container36 .swiper-button-prev',
            nextButton: '.swiper-container36 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        /* var swiper31 = new Swiper('.swiper-container41', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container41 .swiper-button-prev',
            nextButton: '.swiper-container41 .swiper-button-next',
            observer: true, 
            observeParents: true, 
        }); */
        var swiper31 = new Swiper('.swiper-container45', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container45 .swiper-button-prev',
            nextButton: '.swiper-container45 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container42', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container42 .swiper-button-prev',
            nextButton: '.swiper-container42 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container43', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container43 .swiper-button-prev',
            nextButton: '.swiper-container43 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container44', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container44 .swiper-button-prev',
            nextButton: '.swiper-container44 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container51', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container51 .swiper-button-prev',
            nextButton: '.swiper-container51 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container52', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container52 .swiper-button-prev',
            nextButton: '.swiper-container52 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container53', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container53 .swiper-button-prev',
            nextButton: '.swiper-container53 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });

        var swiper31 = new Swiper('.swiper-container61', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container61 .swiper-button-prev',
            nextButton: '.swiper-container61 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container62', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container62 .swiper-button-prev',
            nextButton: '.swiper-container62 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container63', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container63 .swiper-button-prev',
            nextButton: '.swiper-container63 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container64', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container64 .swiper-button-prev',
            nextButton: '.swiper-container64 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container65', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container65 .swiper-button-prev',
            nextButton: '.swiper-container65 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container66', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container66 .swiper-button-prev',
            nextButton: '.swiper-container66 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container67', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container67 .swiper-button-prev',
            nextButton: '.swiper-container67 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
        var swiper31 = new Swiper('.swiper-container68', {
            autoplay: false,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: false,
            centeredSlides: true,
            slidesPerView: 1,
            prevButton: '.swiper-container68 .swiper-button-prev',
            nextButton: '.swiper-container68 .swiper-button-next',
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
    });
/* $(function () {
    // tab切换
    function tabCtrl(ele) {
        $(ele + '>.tabContents>.tabContent').hide().eq(0).show();
        $(ele + '>.tabs>.tab').eq(0).addClass('cur');
        $(ele + '>.tabs>.tab').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            if ($(this).hasClass('cur')) {
                return;
            }
            $(this).addClass('cur').siblings().removeClass('cur');
            let me = $(this);
            let index = 0;
            $(ele + '>.tabs>.tab').each(function (i) {
                if (me.get(0) === $(this).get(0)) {
                    index = i;
                }
            });
            $(ele + '>.tabContents>.tabContent').hide().eq(index).fadeIn();
        });
    }

    tabCtrl('#jmjq');
    tabCtrl('.fmjq');
    tabCtrl('#zczy');
    tabCtrl('#jmjx');

    // 主演
    let swiper_zy = new Swiper('.zy .swiper-container', {
        navigation: {
            nextEl: '.zy .swiper-button-next',
            prevEl: '.zy .swiper-button-prev',
        },
        observer: true,
        observeParents: true
    });

    let swiper_jmjx = new Swiper('.jmjx .swiper-container', {
        slidesPerView: 'auto',
        direction: 'vertical',
        freeMode: true,
        scrollbar: {
            el: '.jmjx .swiper-scrollbar',
            draggable: true
        },
        mousewheel: true,
        observer: true,
        observeParents: true,
    });
    // swiper_jmjx.scrollbar.$el.css('width','8px');

    let swiper_wmsx = new Swiper('.wmsx .swiper-container', {
        effect: 'flip',
        speed:800,
        navigation: {
            nextEl: '.wmsx .swiper-button-next',
            prevEl: '.wmsx .swiper-button-prev',
        },
        loop: true
    });

    //导航
    let isClick = false;
    $('.nav a').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        isClick = true;
        $('html,body').animate({scrollTop: $(this.hash).offset().top - 100}, 600, function () {
            isClick = false;
        });
        // 修改颜色
        $(this).parent().siblings().removeClass('cur');
        $(this).parent().addClass('cur');
    });

    let t;
    let t0 = $('#jmjq').offset().top - 200;
    let t1 = $('#zczy').offset().top - 200;
    let t2 = $('#jmjx').offset().top - 200;
    let t3 = $('#wmsx').offset().top - 200;
    let t4 = $('#mtzs').offset().top - 200;
    console.log(t0);
    console.log(t1);
    console.log(t2);
    console.log(t3);
    console.log(t4);
    $(window).scroll(function () {
        t = $(window).scrollTop();
        if (!isClick) {
            if (t >= 0 && t < t0) {
                $('nav li').removeClass('cur');
            } else if (t >= t0 && t < t1) {
                $('nav li').removeClass('cur');
                $('nav li').eq(0).addClass('cur');
            } else if (t >= t1 && t < t2) {
                $('nav li').removeClass('cur');
                $('nav li').eq(1).addClass('cur');
            }
            else if (t >= t2 && t < t3) {
                $('nav li').removeClass('cur');
                $('nav li').eq(2).addClass('cur');
            }
            else if (t >= t3 && t < t4) {
                $('nav li').removeClass('cur');
                $('nav li').eq(3).addClass('cur');
            }
            else if (t >= t4) {
                $('nav li').removeClass('cur');
                $('nav li').eq(4).addClass('cur');
            }
            //    返回顶部
            if (t > t1) {
                $('.back').fadeIn();
            } else {
                $('.back').fadeOut();
            }
        }
    });

    // 返回顶部
    $('.back').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('html,body').animate({scrollTop: 0}, 600);
    });

    let music = document.getElementById('music');
    let isMusicPlay = true;
    $('#music-btn').click(function () {
        if ($(this).hasClass('on')) {
            music.pause();
            $(this).removeClass('on');
            isMusicPlay = false;
        } else {
            music.play();
            $(this).addClass('on');
            isMusicPlay = true;
        }
    });

    // 视频
    let video = document.getElementById('video');
    $('.video_btn').on('click',function (e) {
        e.preventDefault();
        $('.dialog_video').fadeIn();
        if(isMusicPlay){
            music.pause();
        }
    });

    $('.close_btn').on('click',function (e) {
        e.preventDefault();
        $('.dialog_video').fadeOut();
        video.pause();
        if(isMusicPlay){
            music.play();
        }
    });

    let video2 = document.getElementById('video_2');
    video2.addEventListener('play',function () {
        if (isMusicPlay) {
            music.pause();
        }
    });

    video2.addEventListener('pause',function () {
        if (isMusicPlay) {
            music.play();
        }
    });
});


$(function(){
    $(document).on('mousewheel DOMMouseScroll', onMouseScroll);
function onMouseScroll(e){
    e.preventDefault();
    var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    var delta = Math.max(-1, Math.min(1, wheel) );
    if(delta<0){//向下滚动
        console.log('向下滚动');
    }else{//向上滚动
        console.log('向上滚动');
    } 
    window.event? window.event.cancelBubble = true : e.stopPropagation();   
}
}); */