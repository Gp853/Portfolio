document.addEventListener('mousemove', (e) => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);
});

// Placeholder for any future interactivity
console.log("Portfolio site loaded successfully.");
