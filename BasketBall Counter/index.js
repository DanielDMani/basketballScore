let homeScore = 0
let guestScore = 0
let homeScoreDisplay = document.getElementById("homeScoreBoard")
let guestScoreDisplay = document.getElementById("guestScoreBoard")

function home(num){
    homeScore += num
    console.log(homeScore)
    homeScoreDisplay.innerText = homeScore
}

function guest(num){
    guestScore += num
    console.log(guestScore)
    guestScoreDisplay.innerText = guestScore
}

