// ======================================
//  REGULAR EVENTS 
// ======================================

var elementOne = document.getElementById('event1');
var elementOneFront = document.getElementById('event1-front');
var elementOneBack = document.getElementById('event1-back');


var elementTwo = document.getElementById('event2');
var elementTwoFront = document.getElementById('event2-front');
var elementTwoBack = document.getElementById('event2-back');


var elementThree = document.getElementById('event3');
var elementThreeFront = document.getElementById('event3-front');
var elementThreeBack = document.getElementById('event3-back');


var elementFour = document.getElementById('event4');
var elementFourFront = document.getElementById('event4-front');
var elementFourBack = document.getElementById('event4-back');



var elementFive = document.getElementById('event5');
var elementFiveFront = document.getElementById('event5-front');
var elementFiveBack = document.getElementById('event5-back');

// ======================================
//  SPECIAL EVENTS
// ======================================

var specialOne = document.getElementById('specialOne');
var specialOneFront = document.getElementById('specialOneFront');
var specialOneBack = document.getElementById('specialOneBack');

var specialTwo = document.getElementById('specialTwo');
var specialTwoFront = document.getElementById('specialTwoFront');
var specialTwoBack = document.getElementById('specialTwoBack');

// ======================================
//  SNOW & COVID
// ======================================

var snowButton = document.getElementById('snowBtn');
var snow = document.getElementById("snow");


// ======================================
//  EVENT LISTENERS
// ======================================


elementOne.addEventListener('click', eventOneOpen);
elementTwo.addEventListener('click', eventTwoOpen);
elementThree.addEventListener('click', eventThreeOpen);
elementFour.addEventListener('click', eventFourOpen);
elementFive.addEventListener('click', eventFiveOpen)

specialOne.addEventListener('click', specialOneOpen)
specialTwo.addEventListener('click', specialTwoOpen)

snowButton.addEventListener('click', snowing)

// ======================================
//  TOGGLE FUNCTIONS
// ======================================


function eventOneOpen() {
    elementOneFront.classList.toggle('open-one-front');
    elementOneBack.classList.toggle('open-one-back');
}

function eventTwoOpen() {
    elementTwoFront.classList.toggle('open-two-front');
    elementTwoBack.classList.toggle('open-two-back');
    elementTwo.classList.toggle('zindex');
}

function eventThreeOpen() {
    elementThreeFront.classList.toggle("open-three-front");
    elementThreeBack.classList.toggle('open-three-back');
    elementThree.classList.toggle('zindex');
}

function eventFourOpen() {
    elementFourFront.classList.toggle('open-four-front');
    elementFourBack.classList.toggle('open-four-back');
    elementFour.classList.toggle('zindex');
}

function eventFiveOpen() {
    elementFiveFront.classList.toggle('open-five-front');
    elementFiveBack.classList.toggle('open-five-back');
    elementFive.classList.toggle('zindex')
}


//  special events functions

function specialOneOpen() {
    specialOneBack.classList.toggle('open-special-one-back');
    specialOne.classList.toggle('zindex');
}

function specialTwoOpen() {
    specialTwoFront.classList.toggle('open-special-two-front');
    specialTwo.classList.toggle('zindex');
}

function snowing() {
    snow.classList.toggle('snow');
}