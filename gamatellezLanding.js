window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 

window.onscroll = function() {
    onScrollFunction();
};

window.addEventListener('load', 
    function() {
        drawAboutMeImage();
        drawExperienceImage();
        drawMyWorkImage();
        addMenuButtonsHoverListener();
        backToHomeButton();

    }, false);
       
function drawAboutMeImage() {
    let canvas = document.getElementById("about-me-canvas");
    canvas.width = 250;
    canvas.height = 250;
    let context = canvas.getContext('2d');
    aboutMe = new AboutMeImage(context);
    aboutMe.draw();
}

function drawExperienceImage() {
    let canvas = document.getElementById("experience-canvas");
    canvas.width = 250;
    canvas.height = 250;
    let context = canvas.getContext('2d');
    experience = new ExperienceImage(context);
    experience.draw();
}

function drawMyWorkImage() {
    let canvas = document.getElementById("my-work-canvas");
    canvas.width = 250;
    canvas.height = 250;
    let context = canvas.getContext('2d');
    myWork = new MyWorkImage(context);
    myWork.draw();
}

function addMenuButtonsHoverListener() {
    
    const buttons = document.querySelectorAll(".menu-Button");
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseover', scaleCanvas, false);
        buttons[i].addEventListener('mouseout', scaleCanvas, false);
        buttons[i].addEventListener('click', scrollToDiv, false);
    }
}

function scaleCanvas() {
    const buttonId = this.getAttribute('id');
    let duration = "0.3s"

    if (buttonId == "about-me-button") {
        document.getElementById("about-me-canvas").style.transitionDuration = duration;
        document.getElementById("about-me-canvas").style.transform = event.type == "mouseover" ? "scale(1.3)" : "scale(1.0)"
    }
    if (buttonId == "experience-button") {
        document.getElementById("experience-canvas").style.transitionDuration = duration;
        document.getElementById("experience-canvas").style.transform = event.type == "mouseover" ? "scale(1.3)" : "scale(1.0)"
    }
    if (buttonId == "my-work-button") {
        document.getElementById("my-work-canvas").style.transitionDuration = duration;
        document.getElementById("my-work-canvas").style.transform = event.type == "mouseover" ? "scale(1.3)" : "scale(1.0)"
    }
}

function scrollToDiv() {
    const buttonId = this.getAttribute('id') 
    if (buttonId == "my-work-button") {
        document.getElementById("my-work-div").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
}

function backToHomeButton() {    
    let homeButton = document.getElementById("back-to-home-button")
    homeButton.addEventListener('click', function(){
        document.getElementById("intro-div").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }, false)
} 

function onScrollFunction() {
    if (window.pageYOffset > 50 || document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
        document.getElementById("back-to-home-button").style.display = "block";
    } else {
        document.getElementById("back-to-home-button").style.display = "none";
    }
}
