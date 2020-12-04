
// ======================================
//  SNOW & COVID
// ======================================

var snowButton = document.getElementById('snowBtn');
var snow = document.getElementById("snow");

snowButton.addEventListener('click', snowing)

function snowing() {
    snow.classList.toggle('snow');
}


// ======================================
//  Navigation 
// ======================================

var hamburgerMenu = document.getElementById("btnMenu");
var navigation = document.getElementById("nav");


hamburgerMenu.addEventListener('click', showNav)
hamburgerMenu.addEventListener('click', btnAnimation)


function showNav() {
    navigation.classList.toggle("show-nav")
}

function btnAnimation() {
    hamburgerMenu.classList.toggle("btn-animation")
}

// ======================================
//  EVENTS 
// ======================================

// EVENT-1

document.getElementById('eventOneLeft').addEventListener('click', function () {
    document.getElementById('infoOneEventLeft').classList.toggle('grid-show');
    document.getElementById('card-one-left').classList.toggle('card-expanded');
    document.getElementById('lineOneLeft').classList.toggle('line-animation');

    if (window.innerWidth < 820) {
        document.getElementById('card-one-right').classList.toggle('showAndHide');
    }
})

document.getElementById('eventOneRight').addEventListener('click', function () {
    document.getElementById('infoOneEventRight').classList.toggle('grid-show');
    document.getElementById('card-one-right').classList.toggle('card-expanded');
    document.getElementById('lineOneRight').classList.toggle('line-animation');

})

// EVENT-2

document.getElementById('eventTwoLeft').addEventListener('click', function () {
    document.getElementById('infoTwoEventLeft').classList.toggle('grid-show');
    document.getElementById('card-two-left').classList.toggle('card-expanded');
    document.getElementById('lineTwoLeft').classList.toggle('line-animation');
    if (window.innerWidth < 820) {
        document.getElementById('card-two-right').classList.toggle('showAndHide');
    }
})

document.getElementById('eventTwoRight').addEventListener('click', function () {
    document.getElementById('infoTwoEventRight').classList.toggle('grid-show');
    document.getElementById('card-two-right').classList.toggle('card-expanded');
    document.getElementById('lineTwoRight').classList.toggle('line-animation');
})

// EVENT-3

document.getElementById('eventThreeLeft').addEventListener('click', function () {
    document.getElementById('infoThreeEventLeft').classList.toggle('grid-show');
    document.getElementById('card-three-left').classList.toggle('card-expanded');
    document.getElementById('lineThreeLeft').classList.toggle('line-animation');
    if (window.innerWidth < 820) {
        document.getElementById('card-three-right').classList.toggle('showAndHide');
    }
})

document.getElementById('eventThreeRight').addEventListener('click', function () {
    document.getElementById('infoThreeEventRight').classList.toggle('grid-show');
    document.getElementById('card-three-right').classList.toggle('card-expanded');
    document.getElementById('lineThreeRight').classList.toggle('line-animation');
})

// EVENT-4

document.getElementById('eventFourLeft').addEventListener('click', function () {
    document.getElementById('infoFourEventLeft').classList.toggle('grid-show');
    document.getElementById('card-four-left').classList.toggle('card-expanded');
    document.getElementById('lineFourLeft').classList.toggle('line-animation');
    if (window.innerWidth < 820) {
        document.getElementById('card-four-right').classList.toggle('showAndHide');
    }
})

document.getElementById('eventFourRight').addEventListener('click', function () {
    document.getElementById('infoFourEventRight').classList.toggle('grid-show');
    document.getElementById('card-four-right').classList.toggle('card-expanded');
    document.getElementById('lineFourRight').classList.toggle('line-animation');
})


// ======================================
//  CALENDAR
// ======================================

document.getElementById('clickNovember').addEventListener('click', function () {
    document.getElementById('imgNovember').classList.toggle('showAndHide');
    document.getElementById('imgDecember').classList.toggle('showAndHide');
    document.getElementById('clickNovember').classList.toggle('calendarColors');
    document.getElementById('clickDecember').classList.toggle('calendarColors');

})

document.getElementById('clickDecember').addEventListener('click', function () {
    document.getElementById('imgNovember').classList.toggle('showAndHide');
    document.getElementById('imgDecember').classList.toggle('showAndHide');
    document.getElementById('clickNovember').classList.toggle('calendarColors');
    document.getElementById('clickDecember').classList.toggle('calendarColors');
})

// function expandOneLeft() {
//     infoOneEventLeft.classList.toggle('grid-show')
// }




