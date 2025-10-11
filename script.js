const songs = [
  {
    title: "No One Knows",
    artist: "Queens of the Stone Age",
    album: "Songs for the Deaf (2002)",
    src: "audio/nooneknows.mp3",
    cover: "audio/albums/songsforthedeaf.png"
  },
  {
    title: "Black Hole Sun",
    artist: "Soundgarden",
    album: "Superunknown (1994)",
    src: "audio/blackholesun.mp3",
    cover: "audio/albums/superunknown.jpg"
  },
  {
    title: "Freak on a Leash",
    artist: "Korn",
    album: "Follow the Leader (1998)",
    src: "audio/freakonaleash.mp3",
    cover: "audio/albums/followtheleader.jpg"
  }
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
