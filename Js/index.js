$(document).ready(function () {
    $(".SearchInput").focusin(function() {
        $(".InputSearchFiles").css("border-bottom", "2px solid red");
    });
    $(".SearchInput").focusout(function() {
        $(".InputSearchFiles").css("border-bottom", "2px solid grey");
    });

    var altezza_img = $("#ImgCamp").height();
    $(".SecondRowImage").css("height", altezza_img);
    var larghezza_img = $(".SecondRowImage").width();
    $(".FirstRowImage").width(larghezza_img);
});

function backToTop() {
    $("html, body").animate({scrollTop: 0}, 1000);
}