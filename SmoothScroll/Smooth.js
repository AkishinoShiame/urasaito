$(document).ready(function(){
    $('html, body').scrollTop(0);
    $('.navbar-brand').click(function(e){
        e.preventDefault();
        var TargetToSmooth = $(this).attr('alt');
        $('html, body').animate({
            scrollTop: $(TargetToSmooth).offset().top
        }, 700);
    });
    $('.btn').click(function(e){
        e.preventDefault();
        var TargetToSmooth = $(this).attr('alt');
        $('html, body').animate({
            scrollTop: $(TargetToSmooth).offset().top
        }, 500);
    });
});