const totalConfetti = 100;
for (let i = 0; i < totalConfetti; i++) {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDelay = Math.random() * 3 + "s";
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
  document.body.appendChild(confetti);
}

// Musik: tombol play
const playButton = document.getElementById("playButton");
const bgMusic = document.getElementById("bgMusic");

playButton.addEventListener("click", () => {
  bgMusic.play();
  playButton.style.display = "none";
});

