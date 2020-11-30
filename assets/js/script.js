
// ======================================
//  SNOW & COVID
// ======================================

var snowButton = document.getElementById('snowBtn');
var snow = document.getElementById("snow");

// ======================================
//  Navigation 
// ======================================

var hamburgerMenu = document.getElementById("btnMenu");
var navigation = document.getElementById("nav");

// ======================================
//  EVENTS 
// ======================================



var eventOneLeft = document.getElementById('eventOneLeft');
var eventOneRight = document.getElementById('eventOneRight');

// ======================================
//  EVENT LISTENERS
// ======================================


snowButton.addEventListener('click', snowing)

hamburgerMenu.addEventListener('click', showNav)
hamburgerMenu.addEventListener('click', btnAnimation)



// ======================================
//  TOGGLE FUNCTIONS
// ======================================



function snowing() {
    snow.classList.toggle('snow');
}

function showNav() {
    navigation.classList.toggle("show-nav")
}

function btnAnimation() {
    hamburgerMenu.classList.toggle("btn-animation")
}

function expandOneLeft() {
    infoOneEventLeft.classList.toggle('grid-show')
}

document.getElementById('eventOneLeft').addEventListener('click', function () {
    document.getElementById('infoOneEventLeft').classList.toggle('grid-show');
    document.getElementById('card-one-left').classList.toggle('card-expanded');
    document.getElementById('lineOneLeft').classList.toggle('line-animation');
})

document.getElementById('eventOneRight').addEventListener('click', function () {
    document.getElementById('infoOneEventRight').classList.toggle('grid-show');
    document.getElementById('card-one-right').classList.toggle('card-expanded');
    document.getElementById('lineOneRight').classList.toggle('line-animation');
})

