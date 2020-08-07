//canvas full
function resize(){
    let mobilecanvas = document.getElementById('canvas');
    mobilecanvas.width = window.innerWidth;
    mobilecanvas.height = window.innerHeight;
}

// resize => canvas full
/*
function resize(){    
$("#canvas").outerHeight($(window).height()-$("#canvas").offset().top- Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
}
*/

// resize => reload
$(document).ready(function() {
    resize() //init resize for mobile
    $(window).on("resize", function() {
        console.log("resize")
        resize()
        //location.reload('/')
    });
});
// scroll down
$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        window.location.replace("http://sunrin.graphics/2020/exhibition/");
    }
});

