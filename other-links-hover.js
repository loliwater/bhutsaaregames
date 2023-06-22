//js codes for current condition when user hovers the text

//Unlimited power
function hovertrigger() {
    var power = document.getElementById("hov");
    power.style.color = "white";
    power.innerHTML = "Can You Do Math In Mind?";
    power.style.textDecoration = "underline"
}

function hoverouttrigger() {

    var p = document.getElementById("hov");
    p.innerHTML = "Math Mind Game";
    p.style.color = "white"
    p.style.textDecoration = "none"
}

//Best Anime to watch
function animehoverin() {
    var anime = document.getElementById("best-anime");
    anime.style.color = "#white";
    anime.innerHTML = "Test You General Knowledge";
    anime.style.textDecoration = "underline"
}

function animehoverout() {
    var anime = document.getElementById("best-anime");
    anime.innerHTML = "GK Quiz";
    anime.style.color = "white"
    anime.style.textDecoration = "none"
}
//Facebook

function fb() {
    var fb = document.getElementById("fb");
    fb.innerHTML = "Try Out Your Luck";
    fb.style.color = "white"
    fb.style.textDecoration = "underline";
    // fb.style.textAlign = "center";
}

function fbout() {
    var fb = document.getElementById("fb");
    fb.innerHTML = "Rock Paper Scissor"
    fb.style.color = "white"
    fb.style.textDecoration = "none"
}