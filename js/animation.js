// GSAP Animation

window.addEventListener("DOMContentLoaded", () => {
  const activeMessageDiv = document.querySelector(".message.active div");
  showMessage(activeMessageDiv);
});
let i = 0;
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
