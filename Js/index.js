$(document).ready(function () {
    let larghezza_schermo= $(window).width();

    $(".SearchInput").focusin(function () {
        $(".InputSearchFiles").css("border-bottom", "2px solid red");
    });

    $(".SearchInput").focusout(function () {
        $(".InputSearchFiles").css("border-bottom", "2px solid grey");
    });

    let altezza_img = $("#ImgCamp").height();

    if(larghezza_schermo <= 1080){
        $(".AAA").css("height", 600);
        $(".SecondRowImage").css("height", 300);
        $(".colimage").css("height", 600 );
    }else{
        $(".SecondRowImage").css("height", 186);
        $(".AAA").css("height", 373);
        $(".colimage").css("height", altezza_img);
    }


    let larghezza_img = $(".SecondRowImage").width();
    $(".colimage").width(larghezza_img);


    $(window).resize(function (){
        larghezza_schermo= $(window).width();
        $(".SearchInput").focusin(function (){
            $(".InputSearchFiles").css("border-bottom", "2px solid red");
        });

        $(".SearchInput").focusout(function (){
            $(".InputSearchFiles").css("border-bottom", "2px solid grey");
        });
        let altezza_img = $("#ImgCamp").height();
        if(larghezza_schermo <= 1080){
        $(".AAA").css("height", 600);
        $(".SecondRowImage").css("height", 300);
        $(".colimage").css("height", 600);
        }else{
        $(".AAA").css("height", 373);
        $(".SecondRowImage").css("height", 186);
        $(".colimage").css("height", altezza_img);
        }

        let larghezza_img = $(".SecondRowImage").width();
        $(".colimage").width(larghezza_img);

    });

    window.onscroll = function() {
        let larg= $(window).width();
        scrollFunction();
        if(larg > 1080){
        scrollFunction1();
        }
        };

});

function scrollFunction() {
    let mybutton = $("#Buttontop");
    if ($(window).scrollTop()) {
        mybutton.css("display", "block")
    } else {
        mybutton.css("display", "none")
    }
}
function topFunction() {
    window.scrollTo(0,0)
}

function scrollFunction1() {
    if ($(window).scrollTop()) {
        $("#nav").css("height", "40px");
        $("#todis1").css("display", "none");
        $("#todis2").css("display", "none");
        $("#RowToCenter").css("flex-direction", "row-reverse");
        $(".SecondRowHeader").css("margin-top", "0px");
        $(".SecondRowHeader").css("margin-left","-30px");
        $(".SecondRowHeader").css("margin-right","20px");
        $("#frh").css("justify-content", "end");
        $(".IconPlus").css("margin-left", "30px");
        $("#logo").css("line-height", "1.2");
        $("#logo").css("width", "13%");
    } else {
        $("#nav").css("height", "100px");
        $("#todis1").css("display", "flex");
        $("#todis2").css("display", "flex");
        $("#RowToCenter").css("flex-direction", "column");
        $(".SecondRowHeader").css("margin-top", "45px");
        $(".SecondRowHeader").css("margin-left","0px");
        $(".SecondRowHeader").css("margin-right","0px");
        $(".IconPlus").css("margin-left", "30px");
        $("#frh").css("justify-content", "space-between");
        $("#logo").css("line-height", "2");
        $("#logo").css("width", "17%");
    }
};




