$(document).ready(function() {
    let seconds = 00;
    let tens = 00;
    let interval;

    $("body").css({
        "background-color": "#262525"
    });

    $("h1").css({
        "border-bottom": "0.2rem solid #262525",
        "width": "40%"
    });

    $(".titles").css({
        "margin": "auto",
        "text-align": "center",
        "font-family": "arial",
        "color": "#363535",
    });

    $(".wrapper").css({
        "display": "block",
        "background": "linear-gradient(red, transparent), linear-gradient(to top left, lime, transparent), linear-gradient(to top right, blue, transparent)",
        "background-blend-mode": "screen",
        "padding-left": "0.5rem",
        "padding-right": "0.5rem",
        "padding-bottom": "5rem",
        "border-radius": "0.4rem",
        "transform": "rotate(35deg)"
    });

    $("button").addClass("button-style");
    $(".button-style").css({
        "display": "block",
        "background-color": "#3e403e",
        "color": "ghostwhite",
        "border": "none",
        "width": "8rem",
        "padding": "0.3rem",
        "border-radius": "0.3rem",
        "font-weight": "bold",
        "box-shadow": "2px 3px #888888",
        "margin-left": "auto",
        "margin-right": "auto",
        "margin-bottom": "3rem",
        "font-size": "18pt",
        "transform": "rotate(30deg)"
    });

    $("#tens, #seconds").css({
        "font-family": "arial",
        "font-weight": "bold",
    });

    $("#button-start").css({
        "transform": "rotate(65deg)",
    });

    $("#button-stop").css({
        "transform": "rotate(-75deg)",
    });

    $("#button-reset").css({
        "transform": "rotate(145deg)"
    });

    $("#button-start").on("click", function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        $(".timer-background").css("background-color", "#2cc731");
        function animLoop() {
            $(".timer-background").animate({opacity: "0.5"}, 500);
            $(".timer-background").animate({opacity: "1.0"}, 500, animLoop);
        }
        animLoop();
    });

    $("#button-stop").on("click", function() {
        clearInterval(interval);
        $(".timer-background").css("background-color", "#c73b2c");
        $(".timer-background").stop(true, true);
    });

    $("#button-reset").on("click", function() {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        $("#tens").html(tens);
        $("#seconds").html(seconds);
        $(".timer-background").css("background-color", "#787a78");
        $(".timer-background").stop(true, true);
    });

    // timer background
    $("p").addClass("timer-background");
    $(".timer-background").css("background-color", "#787a78");
    $(".timer-background").css("text-align", "center");
    $(".timer-background").css("width", "7rem");
    $(".timer-background").css({
        "display": "block",
        "margin-left": "7rem",
        "margin-right": "auto",
        "margin-bottom": "5rem",
        "width": "50%",
        "font-size": "32pt",
        "border": "0.2rem solid #262525",
        "border-radius": "0.2rem",
        "transform": "rotate(149deg)"
    });


    function startTimer() {
        tens++;

        if (tens < 9) {
            $("#tens").html("0" + tens);
        }

        if (tens > 9) {
            $("#tens").html(tens);
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $("#seconds").html("0" + seconds);
            tens = 0;
            $("#tens").html("0" + 0);
        }

        if (seconds > 9) {
            $("#seconds").html(seconds);
        }
    }
});