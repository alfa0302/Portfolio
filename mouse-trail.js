// (() => {
//   const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

//   const dot = document.createElement("div");
//   dot.className = "cursor-dot";
//   document.body.appendChild(dot);

//   let x = innerWidth / 2,
//     y = innerHeight / 2;
//   gsap.set(dot, { x, y });

//   const moveX = gsap.quickTo(dot, "x", {
//     duration: reduce ? 0 : 0.5,
//     ease: "power3.out",
//   });
//   const moveY = gsap.quickTo(dot, "y", {
//     duration: reduce ? 0 : 0.5,
//     ease: "power3.out",
//   });

//   addEventListener(
//     "pointermove",
//     (e) => {
//       x = e.clientX;
//       y = e.clientY;
//       moveX(x);
//       moveY(y);
//     },
//     { passive: true }
//   );

//   addEventListener("mouseenter", () => {
//     gsap.to(dot, { autoAlpha: 1, duration: 0.8 });
//   });
// })();

const main = document.querySelector("main");
const cursor = document.querySelector("main .cursor");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1.5,
    ease: "power3.out",
  });
});
