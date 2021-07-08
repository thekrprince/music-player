const title = document.querySelector('#title');
const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const cover = document.querySelector('#cover');

// Song titles
const songs = ['Thinkin', 'Cartoon', 'Prismo'];

// Keep track of songs
let songIndex = 2;

// Initially load song
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  img.src = `images/${song}.jpg`;
}
