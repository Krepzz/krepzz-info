const songs = [
  {
    title: "Singing In My Sleep",
    artist: "Semisonic",
    album: "Feeling Strangely Fine (1998)",
    src: "audio/singinginmysleep.mp3",
    cover: "audio/albums/feelingstrangelyfine.jpg"
  },
  {
    title: "Dance, Dance",
    artist: "Fall Out Boy",
    album: "From Under the Cork Tree (2005)",
    src: "audio/dancedance.mp3",
    cover: "audio/albums/fromtheundercorktree.jpg"
  },
  {
    title: "Heart-Shaped Box",
    artist: "Nirvana",
    album: "In Utero (1993)",
    src: "audio/heartshapedbox.mp3",
    cover: "audio/albums/inutero.jpg"
  },
  {
    title: "Helena",
    artist: "My Chemical Romance",
    album: "Three Cheers for Sweet Revenge (2004)",
    src: "audio/helena.mp3",
    cover: "audio/albums/threecheersforsweetrevenge.jpg"
  },
  {
    title: "Little Sister",
    artist: "Queens of the Stone Age",
    album: "Lullabies to Paralyze (2005)",
    src: "audio/littlesister.mp3",
    cover: "audio/albums/lullabiestoparalyze.jpg"
  },
  {
    title: "Pretty Fly (for a White Guy)",
    artist: "The Offspring",
    album: "Americana (1998)",
    src: "audio/prettyfly.mp3",
    cover: "audio/albums/americana.jpg"
  },
];

let currentSong = 0;
const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const albumName = document.getElementById('album-name');
const albumCover = document.getElementById('album-cover');

function loadSong(index) {
  const song = songs[index];
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  albumName.textContent = song.album;
  albumCover.src = song.cover;
  audio.src = song.src;
}

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}

function stopSong() {
  audio.pause();
  audio.currentTime = 0;
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  playSong();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  playSong();
}

function setVolume(value) {
  audio.volume = value;
}

loadSong(currentSong);

const images = [
  "Images/skyblock.png",
  "Images/classroom.png",
  "Images/camp.png",
  "Images/straight.png"
];

let current = 0;

const sliderImg = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateImage() {
  sliderImg.src = images[current];
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateImage();
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateImage();
});
