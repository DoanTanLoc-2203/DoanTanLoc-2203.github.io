$(function(){
     $(window).resize(function () { 
        var docao = $(window).height();
        $('.top1').css({'height':docao});
     })
     $('.nutmenu').click(function (e) { 
         $('.menu').addClass('menura');
         return false;
         
     })
     $('.tat').click(function (e) { 
         $('.menu').removeClass('menura');
         return false;
     })

     $('a.btn.btn-default.topbtn').click(function (e) {
        var offset = $('.content1').offset();
        var top = offset.top;
        var left = offset.left;
        $("html, body").animate({ scrollTop: top }, 1500);
        return false;
     })

     $('.menu ul li:nth-child(1)').click(function (e) {
        $("html, body").animate({ scrollTop:0 }, 1500);
        return false;
     })

     $('.menu ul li:nth-child(2)').click(function (e) {
        var offset = $('.content1').offset();
        var top = offset.top;
        var left = offset.left;
       $("html, body").animate({ scrollTop:top }, 1500);
       return false;
    })

    $('.menu ul li:nth-child(3)').click(function (e) {
        var offset = $('.content2').offset();
        var top = offset.top;
        var left = offset.left;
       $("html, body").animate({ scrollTop:top }, 1500);
       return false;
    })

    $('.menu ul li:nth-child(4)').click(function (e) {
        var offset = $('.content4').offset();
        var top = offset.top;
        var left = offset.left;
       $("html, body").animate({ scrollTop:top }, 1500);
       return false;
    })

    $('.menu ul li:nth-child(5)').click(function (e) {
        var offset = $('.map').offset();
        var top = offset.top;
        var left = offset.left;
       $("html, body").animate({ scrollTop:top }, 1500);
       return false;
    })
})  
 