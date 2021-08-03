$(function(){
    $(window).scroll(function () { 
        p = $('html,body');
        var offset = $('.content1').offset();
        var top = offset.top;
        var left = offset.left;

        var offset1 = $('.content2').offset();
        var top1 = offset1.top;
        var left1 = offset1.left;

        var offset2 = $('.contact').offset();
        var top2 = offset2.top;
        var left2 = offset2.left;
       // console.log( "scrollTop:" + p.scrollTop() );
        if(p.scrollTop() > 300){
            console.log( "OKIE" );
            $('nav.navbar.navbar-default').addClass('transform');
        }
        if(p.scrollTop() == 0){
            $('nav.navbar.navbar-default').removeClass('transform');
        }
        $('.star i.fa.fa-star').css( {transform: 'rotate(' + p.scrollTop() + 'deg)' });

        if(p.scrollTop() >= top -200){
            $('.sp').addClass('xuathien');
            $('.content1 hr').addClass('daira');
        }
        else{
            $('.sp').removeClass('xuathien');
            $('.content1 hr').removeClass('daira');
        }

        if(p.scrollTop() >= top1 -200){
            $('.content2 p').addClass('ani');
        }
        else{
            $('.content2 p').removeClass('ani');
        }

        if(p.scrollTop() >= top2 -200){
            $('.contact h1').addClass('tora');
        }
        else{
            $('.contact h1').removeClass('tora');
        }

    });

    $('.nut1').click(function (e) { 
        var offset = $('.content1').offset();
        var top = offset.top;
        var left = offset.left;
        
        console.log(top);
        $("html, body").animate({scrollTop : top},1000);
        return false;
    });

    $('.nut2').click(function (e) { 
        var offset = $('.content2').offset();
        var top = offset.top;
        var left = offset.left;
        
        console.log(top);
        $("html, body").animate({scrollTop : top},1000);
        return false;
    });

    $('.nut3').click(function (e) { 
        var offset = $('.contact').offset();
        var top = offset.top;
        var left = offset.left;
        
        console.log(top);
        $("html, body").animate({scrollTop : top},1000);
        return false;
    });

    $('.navbar-brand').click(function (e) { 
        var offset = $('.carosel').offset();
        var top = offset.top;
        var left = offset.left;
        
        console.log(top);
        $("html, body").animate({scrollTop : top},1000);
        return false;
    });

})