
// first image carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next and previous controls for chagning the images
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("theimages");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

showSlides(slideIndex);

// seccond image carousel
let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next and previous controls for chagning the images
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("theimages2");
    let dots = document.getElementsByClassName("dot2");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
}

showSlides2(slideIndex2);


function openNewTab1() {
    window.open("https://www.bbc.com/news/articles/cx2rz08en2po", "_blank");
}

function openNewTab2() {
    window.open("https://www.innovationnewsnetwork.com/ocean-energy-will-lower-europeans-electricity-bills/60951/", "_blank");
}

function openNewTab3() {
    window.open("https://www.innovationnewsnetwork.com/eneroceans-w2power-floating-wind-ready-for-future-markets-now/57491/", "_blank");
}