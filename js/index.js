function load() {
    let ss = document.getElementById("carousel");
    ss.style.margin = "0";
}

function loaded() {
    let length = 100;
    let length1 = 150;
    let length2 = 300;
    let length3 = 700;
    let length4 = 850;
    var img = document.getElementById("img");
    var h = document.getElementById("head");
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");
    var card3 = document.getElementById("card3");
    var card4 = document.getElementById("card4");
    var card5 = document.getElementById("card5");
    var ele = document.getElementById("nav");
    var l = document.getElementById("links");
    var link = document.getElementsByClassName("link");
    var heading = document.getElementById("heading");
    var carousel = document.getElementById("carousel");
    if (pageYOffset >= length) {
        img.style.height = "95%";
        ele.style.backgroundColor = "#102543";
        heading.style.color = "white";
        heading.style.height = "70px";
        ele.style.height = "70px";
        l.style.height = "70px";
        link[0].style.color = "white";
        link[1].style.color = "white";
        link[2].style.color = "white";
        carousel.style.paddingBottom = "100px";
    }
    else {
        img.style.height = "100%";
        heading.style.height = "100px";
        ele.style.height = "100px";
        ele.style.backgroundColor = "white";
        heading.style.color = "#102543";
        l.style.height = "100px";
        link[0].style.color = "#102543";
        link[1].style.color = "#102543";
        link[2].style.color = "#102543";   
        // var str = "<div class='img'><img id='img' src='images/bitlogo.jpg' alt='BIT Logo'></div><h2 id='heading'>Student Feedback System</h2><div class='links' id='links'><a href='#' class='active link'>Home</a><a href='#' class='link'>About Us</a><a href='#' class='link'>Contact Us</a></div>";          
        // ele.innerHTML = str;
    }
    if (pageYOffset >= length1) {
        h.style.marginLeft = "0%";
        h.style.color = "#102543";
    }
    else {
        h.style.marginLeft = "90%";
        h.style.color = "#E4EDF9";
    }
    if (pageYOffset >= length2) {
        card1.style.marginRight = "20px";
        card2.style.marginLeft = "20px";
    }
    else {
        card1.style.marginRight = "200px";
        card2.style.marginLeft = "200px";
    }
    if (pageYOffset >= length3) {
        card3.style.marginRight = "20px";
        card4.style.marginLeft = "20px";
    }
    else {
        card3.style.marginRight = "200px";
        card4.style.marginLeft = "200px";
    }
    if (pageYOffset >= length4) {
        card5.style.marginTop = "20px";
    }
    else {
        card5.style.marginTop = "200px";
    }
}