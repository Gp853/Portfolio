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

// Apply to all fade-in elements
document.querySelectorAll(".section, .projects-box, .internships-box, .skill").forEach(elem => {
  elem.classList.add("fade-in");
  observer.observe(elem);
});
