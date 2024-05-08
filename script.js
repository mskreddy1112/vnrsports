document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery img');
    const progressBar = document.getElementById('progress');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, idx) => {
            if (idx === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
        progressBar.textContent = `${index + 1} / ${images.length}`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Change the interval (in milliseconds) as needed
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myHeader").style.backgroundColor = "rgba(51, 51, 51, 0.5)"; /* Change background color when scrolled */
        } else {
            document.getElementById("myHeader").style.backgroundColor = "rgba(51, 51, 51, 0.8)"; /* Revert back to initial background color */
        }
    }