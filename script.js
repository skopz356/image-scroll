$(document).ready(function(){


    var bodyHeight = $("body").height()-$(window).height();
    console.log(`Body height ${bodyHeight}`);
    let height = $('.title').height();
    $(window).scroll(function(){
        let  scrolled = (bodyHeight - $(window).scrollTop())/10;
        lheight = height/100*scrolled;
        console.log("percent"+$('.title').height()/100);
        console.log("height"+lheight);
        $('.title').css('height', lheight+"px");
    });

});