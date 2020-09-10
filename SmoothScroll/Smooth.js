$(document).ready(function(){
    $('.navbar-brand').click(function(e){
        e.preventDefault();
        var TargetToSmooth = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(TargetToSmooth).offset().top
        }, 700);
    });
    $('.btn').click(function(e){
        e.preventDefault();
        var TargetToSmooth = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(TargetToSmooth).offset().top
        }, 1000);
    });
});