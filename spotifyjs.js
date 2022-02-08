var playbtn = document.getElementById("play-button");
var stopbtn = document.getElementById("stop-button");
var volumebtn = document.getElementById("volume-button");
var playbutn = document.getElementById("play-butn");
var stopbutn = document.getElementById("stop-butn");
var volumebutn = document.getElementById("volume-butn");

var cover = document.getElementById("cover");
var replace = document.getElementById("replace");

playbtn.addEventListener('click', function (replace) {
    replace.target.classList.toggle('song-cover');
    console.log("hi");
})

