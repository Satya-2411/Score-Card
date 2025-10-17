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