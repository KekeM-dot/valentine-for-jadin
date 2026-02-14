const songs = [
  { title: "Speechless 💕", file: "music/song1.mp3" },
  { title: "Superpowers 😍", file: "music/song3.mp3" },
  { title: "Talk You Through It 🎀", file: "music/song4.mp3" },
  { title: "Anointed 💝", file: "music/song2.mp3" },
  { title: "Satisfaction 🌺", file: "music/song5.mp3" },
  { title: "Pretty Little Birds 💞", file: "music/song6.mp3" }
];

let index = 0;
let playing = false;

const audio = document.getElementById("audio");
const record = document.getElementById("record");
const needle = document.getElementById("needle");
const songTitle = document.getElementById("songTitle");

audio.src = songs[index].file;
songTitle.innerText = songs[index].title;

function togglePlay() {
  if (playing) {
    audio.pause();
    record.classList.remove("spin");
    needle.classList.remove("playing");
  } else {
    audio.play();
    record.classList.add("spin");
    needle.classList.add("playing");
  }
  playing = !playing;
}

function nextSong() {
  index = (index + 1) % songs.length;
  changeSong();
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  changeSong();
}

function changeSong() {
  audio.src = songs[index].file;
  songTitle.innerText = songs[index].title;
  audio.play();
  record.classList.add("spin");
  needle.classList.add("playing");
  playing = true;
}
