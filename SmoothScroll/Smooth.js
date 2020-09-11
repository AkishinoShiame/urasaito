$(document).ready(function(){
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

    var ObjectFrame = document.getElementById('object');
    ObjectFrame.onload = function(){
        ObjectFrame.contentWindow.scrollTop(0,200);
    }
});