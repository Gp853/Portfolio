// Scroll-triggered fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Animate progress circles once visible
      const circle = entry.target.querySelector("circle.progress");
      if (circle) {
        const percentage = circle.getAttribute("data-percentage");
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;

        circle.style.strokeDasharray = `${circumference}`;
        circle.style.strokeDashoffset = `${offset}`;
      }
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% visible
});
window.addEventListener('load', () => {
  const avatar = document.getElementById('avatar-container');
  if (avatar) {
    // Wait for the popin animation to finish (1.2s), then start timer
    setTimeout(() => {
      // After 3 seconds visible, fade out avatar
      setTimeout(() => {
        avatar.style.opacity = '0';
        avatar.style.transform = 'translateY(50%)';
      }, 3000);

      // Optionally remove from DOM or hide completely after fade-out duration (0.6s)
      setTimeout(() => {
        avatar.style.display = 'none';
      }, 3600);
    }, 1200);
  }
});

// fade-in elements
document.querySelectorAll(".section, .projects-box, .internships-box, .skill").forEach(elem => {
  elem.classList.add("fade-in");
  observer.observe(elem);
});
