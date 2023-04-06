$(document).ready(function () {


    $(".SearchInput").focusin(function () {
        $(".InputSearchFiles").css("border-bottom", "2px solid red");
    });

    $(".SearchInput").focusout(function () {
        $(".InputSearchFiles").css("border-bottom", "2px solid grey");
    });

    let altezza_img = $("#ImgCamp").height();
    $(".SecondRowImage").css("height", altezza_img);

    let larghezza_img = $(".SecondRowImage").width();
    $(".FirstRowImage").width(larghezza_img);

    window.onscroll = function() {scrollFunction(); scrollFunction1(); };



});

function scrollFunction() {
    let mybutton = $("#Buttontop");
    if ($(window).scrollTop() > 20 ) {
        mybutton.css("display", "block")
    } else {
        mybutton.css("display", "none")
    }
}
function topFunction() {
    window.scrollTo(0,0)
}

function scrollFunction1() {
    if ($(window).scrollTop() > 80) {
        $("#nav").css("padding", "0px 40px");
        $("#todis1").css("display", "none");
        $("#todis2").css("display", "none");
        $("#RowToCenter").css("flex-direction", "row-reverse");
        $("#frh").css("justify-content", "end");
        $("#logo").css("line-height", "1.4");
        $("#logo").css("width", "auto");
    } else {
        $("#nav").css("padding", "20px 40px");
        $("#todis1").css("display", "flex");
        $("#todis2").css("display", "flex");
        $("#RowToCenter").css("flex-direction", "column");
        $("#frh").css("justify-content", "space-between");
        $("#logo").css("line-height", "2");
        $("#logo").css("width", "15%");
    }
};




