const dropdown = document.getElementById("dropdown");
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownArrow = document.getElementById("dropdownArrow");
const navbar = document.getElementById("navbar");
const serviceIcon = document.getElementById("serviceIcon");
const serviceMenu = document.getElementById("serviceMenu");
const serviceOpen = document.getElementById("serviceOpen");
const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const cursor = document.getElementById("cursor");
const closePopup = document.getElementById("closePopup");
const wrocustext = document.getElementById("wrocustext");
const body = document.querySelector("body");
const animatefromBottomNavs = document.querySelectorAll(
  ".animatefromBottomNav"
);
const serviceTxtAnimates = document.querySelectorAll(".serviceTxtAnimate");
const numberAnimes = document.querySelectorAll(".numberAnimes");
let dropdownOpen = false;

dropdownBtn.addEventListener("click", (e) => {
  if (dropdownOpen) {
    dropdown.classList.add("h-0");
    dropdown.classList.remove("h-full");
    dropdownBtn.classList.remove("underline", "underline-1");
    dropdownArrow.classList.remove("rotate-180");
    body.classList.remove("h-screen", "overflow-hidden");
    dropdownOpen = false;
    serviceTxtAnimates.forEach((serviceTxtAnimate) => {
      serviceTxtAnimate.classList.add("translate-y-full", "opacity-0");
      serviceTxtAnimate.style.transition = "0s";
    });
  } else {
    dropdown.classList.remove("h-0");
    dropdown.classList.add("h-full");
    dropdownBtn.classList.add("underline");
    body.classList.add("h-screen", "overflow-hidden");
    dropdownArrow.classList.add("rotate-180");
    dropdownOpen = true;
    serviceTxtAnimates.forEach((serviceTxtAnimate) => {
      serviceTxtAnimate.classList.remove("translate-y-full", "opacity-0");
      serviceTxtAnimate.style.transition = "1s";
    });
  }
});

window.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("closeDropdown")) {
    dropdown.classList.add("h-0");
    dropdown.classList.remove("h-full");
    dropdownBtn.classList.remove("underline", "underline-1");
    dropdownArrow.classList.remove("rotate-180");
    body.classList.remove("h-screen", "overflow-hidden");
    dropdownOpen = false;
    serviceTxtAnimates.forEach((serviceTxtAnimate) => {
      serviceTxtAnimate.classList.add("translate-y-full", "opacity-0");
      serviceTxtAnimate.style.transition = "0s";
    });
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-slate-800");
  } else {
    navbar.classList.remove("bg-slate-800");
  }
});

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

let serviceMenuOpen = false;

serviceOpen.addEventListener("click", () => {
  if (serviceMenuOpen) {
    serviceIcon.classList.remove("rotate-[135deg]");
    serviceMenu.classList.add("h-0");
    serviceMenuOpen = false;
  } else {
    serviceIcon.classList.add("rotate-[135deg]");
    serviceMenu.classList.remove("h-0");
    serviceMenuOpen = true;
  }
});

openPopup.addEventListener("click", () => {
  popup.classList.remove("h-0");
  popup.classList.add("h-screen");
  body.classList.add("h-screen", "overflow-hidden");
  wrocustext.classList.remove("opacity-0");
  wrocustext.style.transition = "1.5s";
  animatefromBottomNavs.forEach((animatefromBottomNav) => {
    animatefromBottomNav.classList.remove("opacity-0", "translate-y-1/2");
    animatefromBottomNav.style.transition = "1s";
  });
});

closePopup.addEventListener("click", () => {
  popup.classList.add("h-0");
  popup.classList.remove("h-screen");
  body.classList.remove("h-screen", "overflow-hidden");
  wrocustext.classList.add("opacity-0");
  wrocustext.style.transition = "0s";
  animatefromBottomNavs.forEach((animatefromBottomNav) => {
    animatefromBottomNav.classList.add("opacity-0", "translate-y-1/2");
    animatefromBottomNav.style.transition = "0s";
  });
});

const animateFromBottoms = document.querySelectorAll(".animateFromBottom");
const animateOpacityFulls = document.querySelectorAll(".animateOpacityFull");

function animateFromBottom() {
  animateFromBottoms.forEach((animateFromBottom) => {
    const rect = animateFromBottom.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animateFromBottom.classList.remove("translate-y-1/2", "opacity-0");
      animateFromBottom.style.transition = "1s";
    } else {
      animateFromBottom.classList.add("translate-y-1/2", "opacity-0");
      animateFromBottom.style.transition = "0s";
    }
  });
}

function animateOpacityFull() {
  animateOpacityFulls.forEach((animateOpacityFull) => {
    const rect = animateOpacityFull.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animateOpacityFull.classList.remove("opacity-0");
      animateOpacityFull.style.transition = "1.5s";
    } else {
      animateOpacityFull.classList.add("opacity-0");
      animateOpacityFull.style.transition = "0s";
    }
  });
}

window.addEventListener("load", () => {
  animateFromBottom();
  animateOpacityFull();
});
window.addEventListener("scroll", () => {
  animateFromBottom();
  animateOpacityFull();
});

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
  cursor.classList.remove("hidden");
});

window.addEventListener("mouseout", () => {
  cursor.classList.add("hidden");
});
