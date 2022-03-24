const array = [
  { name: "Stairway to Heaven", band: "Led Zeppelin" },
  { name: "Yellow Submarine", band: "Beatles" },
  { name: "Back in Black", band: "AC DC" },
  { name: "Yesterday", band: "Beatles" },
  { name: "Thunderstruck", band: "AC DC" },
];

const songName = document.querySelector(".song");
const bandName = document.querySelector(".band");
const btn = document.querySelector(".new");

function generateSong() {
  const songIndex = Math.floor(Math.random() * array.length);
  const newSong = array[songIndex];
  songName.innerHTML = newSong.name.toUpperCase();
  bandName.innerHTML = newSong.band;
}

btn.addEventListener("click", generateSong);

generateSong();
