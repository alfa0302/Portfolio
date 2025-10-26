// download resume
document.getElementById("resume-button").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "resume/AlfiyaN.pdf";
  link.download = "AlfiyaN.pdf";
  link.click();
});

// scroll down button text
const circleText = document.querySelector(".circle-text textPath");
const scrollDownButton = document.querySelector(".scroll-down");
scrollDownButton.addEventListener("mouseenter", () => {
  circleText.style.fill = "white";
});
scrollDownButton.addEventListener("mouseleave", () => {
  circleText.style.fill = " rgba(255, 255, 255, 0.2)";
});

// scrolldown button scroll
scrollDownButton.addEventListener("click", () => {
  window.scrollBy({
    top: 800,
    behavior: "smooth",
  });
});

const smallPolygon = document.getElementById("scene-small");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    smallPolygon.style.zIndex = 0;
  } else {
    smallPolygon.style.zIndex = 1;
  }
});
