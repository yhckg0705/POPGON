// References to DOM elements
const popgon = document.querySelector("#popgon");
const btn = document.querySelector("#btn");

// The two images of the POP GON
const openMouthImg = "open.png";
const closeMouthImg = "close.png";

// The two Popping sounds
const openMouthSound = new Audio("sound-open.mp3");
const closeMouthSound = new Audio("sound-close.mp3");

// Event Handlers (Desktops)
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

// Event Handers (Touch Screens)
btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})

// The functions which will perform the cool stuff
function openMouth() {
    popgon.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popgon.src = closeMouthImg;
    closeMouthSound.play();
}
