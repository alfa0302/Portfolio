gsap.registerPlugin(ScrollTrigger);

// home circle rotation
const circle = document.querySelector(".text-circle");
window.addEventListener("scroll", () => {
  const angle = window.scrollY * 0.5;
  gsap.to(circle, {
    rotate: angle + "deg",
    duration: 0.1,
    // ease: "power3.out",
  });
});

const projects = document.querySelectorAll(".project-item");
projects.forEach((item) => {
  const desc = item.querySelector(".description");
  const icons = item.querySelectorAll(".project-code i");
  const progress = item.querySelector(".progress");
  item.addEventListener("mouseenter", () => {
    gsap.to(desc, {
      opacity: 1,
      duration: 0.5,
      y: -10,
      ease: "power2.out",
    });
    gsap.to(progress, {
      scaleX: 1,
      duration: 0.5,
    });
    gsap.to(icons, {
      fontSize: 28,
      duration: 0.5,
      color: "rgb(255, 152, 0)",
    });
  });
  item.addEventListener("mouseleave", () => {
    gsap.to(desc, {
      opacity: 0,
      duration: 0.5,
      y: 0,
      ease: "power2.out",
    });
    gsap.to(progress, {
      scaleX: 0,
      duration: 0.5,
    });
    gsap.to(icons, {
      fontSize: 20,
      duration: 0.5,
      color: "rgba(255, 255, 255, 0.4)",
    });
  });
});

gsap.fromTo(
  ".mil-lines",
  { yPercent: -15 },
  {
    yPercent: 15,
    duration: 7,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  }
);

// line animation
const svg = document.getElementById("wavy");
const path = document.getElementById("curve");

function mouseToSvg(e) {
  const pt = svg.createSVGPoint();
  pt.x = e.clientX;
  pt.y = e.clientY;
  return pt.matrixTransform(svg.getScreenCTM().inverse());
}
svg.addEventListener("mousemove", (e) => {
  const p = mouseToSvg(e);
  const y = Math.max(20, Math.min(180, p.y));

  const d = `M 10 100 Q 500 ${y} 990 100`;
  gsap.to(path, {
    attr: { d },
    duration: 0.2,
    ease: "power3.out",
    // overwrite: true,
  });
});
svg.addEventListener("mouseleave", () => {
  gsap.to(path, {
    attr: { d: "M 10 100 Q 500 100 990 100" },
    duration: 0.3,
    ease: "elastic.out(1,0.2",
  });
});

// home section
gsap.from(".home-section-animate", {
  opacity: 0,
  y: 20,
  duration: 3,
  // delay: 1,
});
// about section
gsap.from(".about-section-text-animate", {
  opacity: 0,
  y: 5,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top 90%",
    // markers: true,
  },
});
gsap.from(".skill-list ul li", {
  opacity: 0,
  y: 5,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".skill-list",
    start: "top 80%",
    // markers: true,
  },
});
// projects section
gsap.from(".project-section-text-animate", {
  opacity: 0,
  y: 5,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    // markers: true,
  },
});
//contact section
gsap.from(".contact-section-text-animate", {
  opacity: 0,
  y: 5,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 50%",
    // markers: true,
  },
});
