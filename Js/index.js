
var display_mappa = 0;
var display_mehr = 0;
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



    $(window).on("resize",function (){
        larghezza_schermo= $(window).width();

        $(".SearchInput").focusin(function (){
            $(".InputSearchFiles").css("border-bottom", "2px solid red");
        });

        $(".SearchInput").focusout(function (){
            $(".InputSearchFiles").css("border-bottom", "2px solid grey");
        });
        let altezza_img = $("#ImgCamp").height();
        if(larghezza_schermo <= 1080){
            if(display_mehr == 1){
                $("#Buttontop").css("display", "none");
                $(".ADV2").css("display", "none");
                $("#mehr").css("top","70px!important");
                $(".MainContainer").css("display", "none");
                $(".Footer").css("display", "none");
                $(".LastPart").css("display", "none");
                $(".BottomMap").css("display", "none");
                $(".BottomMehr").css("display", "none");
            }else{
                $("#Buttontop").css("display", "flex");
                $(".MainContainer").css("display", "flex");
                $(".ADV2").css("display", "flex");
                $(".Footer").css("display", "flex");
                $(".LastPart").css("display", "flex");
                $(".BottomMap").css("display", "flex");
                $(".BottomMehr").css("display", "flex");
            }
            if (display_mappa == 1){
                mappa();
            }
            $(".AAA").css("height", 600);
            $(".SecondRowImage").css("height", 300);
            $(".colimage").css("height", 600);
        }else{
            $(".MainContainer").css("display", "flex");
            $(".Footer").css("display", "flex");
            $(".LastPart").css("display", "flex");
            $(".BottomMap").css("display", "flex");
            $(".BottomMehr").css("display", "flex");
            $(".AAA").css("height", 373);
            $(".SecondRowImage").css("height", 186);
            $(".colimage").css("height", altezza_img);
        }

        if(larghezza_schermo <= 1080){
            $("#logo").css("line-height", "2");
        }else{
            $(".HeaderWrapper").css("height", "100px");
            $("#logo").css("line-height", "auto");
        }

        let larghezza_img = $(".SecondRowImage").width();
        $(".colimage").width(larghezza_img);

        //Larghezza Footer che si adatta alla larghezza del MainWrapper
        let larghezza_mainwrapper = $(".MainWrapper").width();
        $(".Footer").width(larghezza_mainwrapper);

        //Dimensione mappa e mehr in base alla larghezza dell'HeaderWrapper + altezza dal top
        let larghezza_headerwrapper = $(".HeaderWrapper").width();
        let altezza_headerwrapper = $(".HeaderWrapper").height();
        $("#map").width(larghezza_headerwrapper);
        $("#mehr").width(larghezza_headerwrapper);
        let position_headerwrapper = $(".HeaderWrapper").position();
        $("#map").css("top", position_headerwrapper.top + altezza_headerwrapper + 40);
        $("#map").css("left", altezza_headerwrapper.left);
        $("#mehr").css("top", position_headerwrapper.top + altezza_headerwrapper + 40);
        $("#mehr").css("left", altezza_headerwrapper.left);

        fix();

    });


    window.onscroll = function(){
        let larg= $(window).width();
        scrollFunction();
        if(larg > 1080) {
            scrollFunction1();
            setTimeout(function (){
            let larghezza_headerwrapper = $(".HeaderWrapper").width();
            let altezza_headerwrapper = $(".HeaderWrapper").height();
            $("#map").width(larghezza_headerwrapper);
            $("#mehr").width(larghezza_headerwrapper);
            let position_headerwrapper = $(".HeaderWrapper").position();
            $("#map").css("top", position_headerwrapper.top + altezza_headerwrapper + 40);
            $("#map").css("left", altezza_headerwrapper.left);
            $("#mehr").css("top", position_headerwrapper.top + altezza_headerwrapper + 40);
            $("#mehr").css("left", altezza_headerwrapper.left);
            },200);
        }
    };

    //Larghezza Footer che si adatta alla larghezza del MainWrapper
    let larghezza_mainwrapper = $(".MainWrapper").width();
    $(".Footer").width(larghezza_mainwrapper);

    //Dimensione mappa e mehr in base alla larghezza dell'HeaderWrapper + altezza dal top
    let larghezza_headerwrapper = $(".HeaderWrapper").width();
    let altezza_headerwrapper = $(".HeaderWrapper").height();
    $("#map").width(larghezza_headerwrapper);
    $("#mehr").width(larghezza_headerwrapper);
    let position_headerwrapper = $(".HeaderWrapper").position();
    $("#map").css("top", position_headerwrapper.top + altezza_headerwrapper + 40);
    $("#map").css("left", altezza_headerwrapper.left);
    $("#mehr").css("top", position_headerwrapper.top + altezza_headerwrapper + 40);
    $("#mehr").css("left", altezza_headerwrapper.left);
});
var display_mehr = 0;
function scrollFunction() {
    larghezza_schermo = $(window).width();
    let mybutton = $("#Buttontop");
    if ($(window).scrollTop()) {
        if(display_mehr == 0 || larghezza_schermo > 1080){
        mybutton.css("display", "flex");
        }
    } else{
        mybutton.css("display", "none");
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
        //$(".SecondRowHeader").css("margin-left","-30px");
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
    return true;

};


// Funzione per mostrare/nascondere la mappa

function mappa(){
    if(display_mappa == 0) {
        $("#map").css("display", "flex");
        $("#DropDownMappa").css("transform", "rotate(180deg)");
        display_mappa = 1;
    }else{
        $("#map").css("display", "none");
        $("#DropDownMappa").css("transform", "rotate(360deg)");
        display_mappa = 0;
    }
}

function seleziona_zona(id){
    $(".Zona").attr("src", "img/Mappa/" + id + ".png");
}

// Funzione per mostrare/nascondere il menu mehr

function mehr(){
    larghezza_schermo= $(window).width();
    if(display_mehr == 0) {
        if(larghezza_schermo <= 1080){
        topFunction();
        $(".ADV2").css("display", "none");
        //PROVA INIZIA DA QUI
        $(".MainContainer").css("display", "none");
        $(".Footer").css("display", "none");
        $(".LastPart").css("display", "none");
        $(".BottomMap").css("display", "none");
        $(".BottomMehr").css("display", "none");
        //PROVA FINISCE QUI
        }else{
            $("#mehr").css("position", "absolute");
        }
        $("#mehr").css("display", "flex");
        $("#DropDownMehr").css("transform", "rotate(180deg)");
        $("#hamburger").attr("src", "img/menu_open.png");
        display_mehr = 1;
    }else{
        $(".ADV2").css("display", "flex");
        $("#mehr").css("display", "none");

        $(".MainContainer").css("display", "flex");
        $(".Footer").css("display", "flex");
        $(".LastPart").css("display", "flex");
        $(".BottomMap").css("display", "flex");
        $(".BottomMehr").css("display", "flex");

        $("#DropDownMehr").css("transform", "rotate(360deg)");
        $("#hamburger").attr("src", "img/menu_close.png");
        display_mehr = 0;
    }
}
function fix(){
    let i=0;
    while(i<2){
        setTimeout(function(){
            let altezza_headerwrapper = $(".HeaderWrapper").height();
            let position_headerwrapper = $(".HeaderWrapper").position();
            $("#mehr").css("top", position_headerwrapper.top + altezza_headerwrapper + 40);
        }, 200);
        i++;
    }
}