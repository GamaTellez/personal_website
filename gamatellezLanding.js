window.addEventListener('load', 
    function() {
        drawAboutMeImage();
        drawExperienceImage();
        drawMyWorkImage();
        addButtonsHoverListener();

    }, false);
       
function drawAboutMeImage() {
    let canvas = document.getElementById("aboutMeCanvas");
    canvas.width = 250;
    canvas.height = 250;
    let context = canvas.getContext('2d');
    aboutMe = new AboutMeImage(context);
    aboutMe.draw();
}

function drawExperienceImage() {
    let canvas = document.getElementById("experienceCanvas");
    canvas.width = 250;
    canvas.height = 250;
    let context = canvas.getContext('2d');
    experience = new ExperienceImage(context);
    experience.draw();
}

function drawMyWorkImage() {
    let canvas = document.getElementById("myWorkCanvas");
    canvas.width = 250;
    canvas.height = 250;
    let context = canvas.getContext('2d');
    myWork = new MyWorkImage(context);
    myWork.draw();
}

function addButtonsHoverListener() {
    const buttons = document.querySelectorAll(".menuButton");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseover', scaleCanvas, false);
        buttons[i].addEventListener('mouseout', scaleCanvas, false);
    }
}

function scaleCanvas() {
    const buttonId = this.getAttribute('id');
    let duration = "0.3s"

    if (buttonId == "aboutMeButton") {
        document.getElementById("aboutMeCanvas").style.transitionDuration = duration;
        document.getElementById("aboutMeCanvas").style.transform = event.type == "mouseover" ? "scale(1.3)" : "scale(1.0)"
    }
    if (buttonId == "experienceButton") {
        document.getElementById("experienceCanvas").style.transitionDuration = duration;
        document.getElementById("experienceCanvas").style.transform = event.type == "mouseover" ? "scale(1.3)" : "scale(1.0)"
    }
    if (buttonId == "myWorkButton") {
        document.getElementById("myWorkCanvas").style.transitionDuration = duration;
        document.getElementById("myWorkCanvas").style.transform = event.type == "mouseover" ? "scale(1.3)" : "scale(1.0)"
    }
}



