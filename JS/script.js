// Scroll Plugin
gsap.registerPlugin(ScrollTrigger);

// Calling HTML Elements
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const getStartedBtn = document.querySelector(".get-started-btn");
const featureItem = document.querySelectorAll(".feature-item");
const featureGrid = document.querySelector(".feature-grid");
const loginModal = document.querySelector("#login-modal");
const loginBtn = document.querySelector("#login-btn-id");
const closeBtn = document.querySelector(".close");
const loginForm = document.querySelector("#login-form");
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

gsap.from(h1, {
  y: 50,
  opacity: 0,
  duration: 1,
});

gsap.from(p, {
  y: 30,
  opacity: 0,
  delay: 0.3,
  duration: 1,
});

gsap.from(getStartedBtn, {
  scale: 0.8,
  opacity: 0,
  delay: 0.6,
  duration: 0.5,
});

// Section Fade-ins
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});

// Feature Card Animations
gsap.from(featureItem, {
  scrollTrigger: {
    trigger: featureGrid,
    start: "top 90%",
  },
  y: 30,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
});

// Modal
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target == loginModal) {
    loginModal.style.display = "none";
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Demo login successful!");
  loginModal.style.display = "none";
});

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    burger.classList.remove("active");
  });
});
