//applying animations with intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const animation = entry.target.dataset.animation;
    if (entry.isIntersecting) {
      entry.target.classList.add(animation);
    }
    //  else {
    //   entry.target.classList.remove(animation);
    // }
  });
});

const animatedElements = document.querySelectorAll(".animated");
animatedElements.forEach((element) => {
  observer.observe(element);
});

//download resume
document.getElementById("resume-download").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "resume/AlfiyaN.pdf";
  link.download = "AlfiyaN.pdf";
  link.click();
});
