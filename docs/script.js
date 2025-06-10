function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.innerHTML = "✦";

  const left = Math.random() * window.innerWidth;
  const top = -30;
  star.style.left = `${left}px`;
  star.style.top = `${top}px`;

  const animation = `fall-${Math.floor(Math.random() * 3) + 1}`;
  star.style.animation = `${animation} 2s ease-in-out forwards`;

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 2000);
}

setInterval(createStar, 400);
