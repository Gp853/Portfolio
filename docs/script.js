function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.innerHTML = "✦";

  const style = star.style;
  const anim = "fall-" + (1 + Math.floor(Math.random() * 3));
  const left = Math.random() * 100 + "vw";
  const delay = Math.random() * 3 + "s";

  style.left = left;
  style.top = "-20px";
  style.animation = `${anim} 2.5s linear ${delay}`;

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 3000);
}

setInterval(createStar, 500);

function createGlowPoint(x, y) {
  const glow = document.createElement("div");
  glow.className = "glow-point";
  glow.style.left = `${x}px`;
  glow.style.top = `${y}px`;

  document.body.appendChild(glow);

  setTimeout(() => {
    glow.remove();
  }, 1000);
}

document.addEventListener("mousemove", (e) => {
  createGlowPoint(e.clientX, e.clientY);
});
