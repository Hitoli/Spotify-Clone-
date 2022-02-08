var playbtn = document.getElementById("play-button");
var stopbtn = document.getElementById("stop-button");
var volumebtn = document.getElementById("volume-button");
var playbutn = document.getElementById("play-butn");
var stopbutn = document.getElementById("stop-butn");
var volumebutn = document.getElementById("volume-butn");
var replace = document.getElementById("replace");
var cover = document.getElementById("cover");

var wavesurfer = WaveSurfer.create({
    container: document.querySelector('#waveform'),
    waveColor: 'white',
    progressColor: '#1DB954',
    barWidth: 4,
    responsive: true,
    hideScrollbar: true,
    barRadius: 4,
    height: 100,
});

wavesurfer.load('songs1.mp3');

var wavesurfer2 = WaveSurfer.create({
    container: document.querySelector('#waveform2'),
    waveColor: 'white',
    progressColor: '#1DB954',
    barWidth: 4,
    responsive: true,
    hideScrollbar: true,
    barRadius: 4,
    height: 100,
});

wavesurfer2.load('songs2.mp3');

var wavesurfer3 = WaveSurfer.create({
    container: document.querySelector('#waveform3'),
    waveColor: 'white',
    progressColor: '#1DB954',
    barWidth: 4,
    responsive: true,
    hideScrollbar: true,
    barRadius: 4,
    height: 100,
});

wavesurfer3.load('songs3.mp3');

var wavesurfer4 = WaveSurfer.create({
    container: document.querySelector('#waveform4'),
    waveColor: 'white',
    progressColor: '#1DB954',
    barWidth: 4,
    responsive: true,
    hideScrollbar: true,
    barRadius: 4,
    height: 100,
});

wavesurfer4.load('songs4.mp3');



playbutn.onclick = function () {
    wavesurfer2.playPause();
    replace.src = "ludo-song.jpg";


    if (playbutn.src.includes("play-button.png")) {
        playbutn.src = "stop-button.png";
    }
    else {
        playbutn.src = "play-button.png";
    }



}

stopbutn.onclick = function () {
    wavesurfer2.stop();
}
volumebutn.onclick = function () {
    wavesurfer2.toggleMute();
    if (volumebutn.src.includes("volume-up-4-48.png")) {
        volumebutn.src = "mute-2-48.png";
    } else {
        volumebutn.src = "volume-up-4-48.png";
    }
}

playbtn.onclick = function () {
    wavesurfer.playPause();
    if (playbtn.src.includes("play-button.png")) {
        playbtn.src = "stop-button.png";
    }
    else {
        playbtn.src = "play-button.png";
    }
}
stopbtn.onclick = function () {
    wavesurfer.stop();
}
volumebtn.onclick = function () {
    wavesurfer.toggleMute();
    if (volumebtn.src.includes("volume-up-4-48.png")) {
        volumebtn.src = "mute-2-48.png";
    } else {
        volumebtn.src = "volume-up-4-48.png";
    }
}
