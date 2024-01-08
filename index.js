document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener("scroll", function() {
        var aboutMeSection = document.querySelector('.about__me');
        var aboutMePosition = aboutMeSection.getBoundingClientRect().top;

        var offset = window.innerHeight * 0.7;

        if(aboutMePosition < offset) {
            aboutMeSection.classList.add("fade-in");
        }
    });
});