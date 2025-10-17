// let scoreHome = document.getElementById("score-home");
// let score = 0;
// function add1() {
//     score = score+1
//     scoreHome.textContent = score;
// }

// function add2() {
//     score += 2
//     scoreHome.textContent = score;
// }

// function add3() {
//     score += 3
//     scoreHome.textContent = score;
// }

// let scoreGuest = document.getElementById("score-guest")
// let scores = 0
// function add11() {
//     scores += 1
//     scoreGuest.textContent = scores;
// }

// function add22() {
//     scores += 2
//     scoreGuest.textContent = scores;
// }

// function add33() {
//     scores += 3
//     scoreGuest.textContent = scores;
// }

let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");

let homeScore = 0;
let guestScore = 0;

scoreHome.textContent = homeScore;
scoreGuest.textContent = guestScore;

function addScore(team, points) {
    if(team === 'home') {
        homeScore += points;
        scoreHome.textContent = homeScore;
    } else if(team === 'guest') {
        guestScore += points;
        scoreGuest.textContent = guestScore;
    }
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    scoreHome.textContent = homeScore;
    scoreGuest.textContent = guestScore;
}