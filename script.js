let songs = [
  "assets/sample1.mp3",
  "assets/sample2.mp3",
  "assets/sample3.mp3"
];

let currentSong = 0;
let audio = document.getElementById("audioPlayer");

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  audio.src = songs[currentSong];
  audio.play();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  audio.src = songs[currentSong];
  audio.play();
}
