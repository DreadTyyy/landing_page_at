// GSAP Animation

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const activeMessage1 = document.querySelector(".message-1");
    const dot = activeMessage1.querySelector(".dot");
    const activeMessageDiv = activeMessage1.querySelector("div");
    activeMessage1.classList.add("active");
    dot.classList.add("active");
    showMessage(activeMessageDiv);
  }, 10000);
});
let i = 0;
let epoch = 0;
function nextMessage() {
  const messages = document.querySelectorAll(".message");
  const activeMessage = document.querySelectorAll(".message.active");
  const activeDot = document.querySelector(".dot.active");
  i = i >= 2 ? 0 : i + 1;

  messages.forEach((message, index) => {
    if (activeMessage[0] === message) {
      message.classList.remove("active");
      activeDot.classList.remove("active");
    }
    if (index === i) {
      message.classList.add("active");
      message.children[0].classList.add("active");
    }
  });
  const activeMessageDiv = document.querySelector(".message.active div");
  showMessage(activeMessageDiv);
}
const showMessage = (objectToAnimate) => {
  gsap.from(objectToAnimate, {
    opacity: 0,
    x: -100,
    duration: 2.5,
    ease: "elastic",
    onComplete: setTimeout(() => {
      nextMessage();
    }, 4000),
  });
};
let tl = gsap.timeline({ once: true, delay: 2.5 });
tl.to(".dot-1", {
  keyframes: [
    { opacity: 0.5, scale: 1.2 },
    {
      opacity: 1,
      scale: 0.5,
      duration: 1,
      ease: "bounce.out",
      delay: -0.1,
    },
    { scale: 1, rotateY: 360, duration: 0.5, delay: 0.2 },
  ],
});
tl.to(".dot-2", {
  keyframes: [
    { opacity: 0.5, scale: 1.2 },
    {
      opacity: 1,
      scale: 0.5,
      duration: 1,
      ease: "bounce.out",
      delay: -0.1,
    },
    { scale: 1, rotateY: 360, duration: 0.5, delay: 0.2 },
  ],
});
tl.to(
  ".dot-3",
  {
    keyframes: [
      { opacity: 0.5, scale: 1.2 },
      {
        opacity: 1,
        scale: 0.5,
        duration: 1,
        ease: "bounce.out",
        delay: -0.1,
      },
      { scale: 1, rotateY: 360, duration: 0.5, delay: 0.2 },
    ],
  },
  "-=0.5"
);

// AOS Animation
const articleRealityCheck = document.querySelectorAll("#reality-check article");
articleRealityCheck.forEach((element, i) => {
  element.setAttribute("data-aos", "fade-up");
  element.setAttribute("data-aos-delay", i * 200);
  element.setAttribute("data-aos-offset", i * 50);
});

AOS.init({
  once: true,
  duration: 1000,
});
