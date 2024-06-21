const closeMenu = document.getElementById("closeMenu");
const menuBox = document.getElementById("menuBox");
const openMenu = document.getElementById("openMenu");
const heroImage = document.getElementById("heroImage");
const movableImgs = document.querySelectorAll(".movableImg");
const heroTxts = document.querySelectorAll(".heroTxt");
const opacityZeros = document.querySelectorAll(".opacityZero");
const animateFromLefts = document.querySelectorAll(".animateFromLeft");
const animateFromRights = document.querySelectorAll(".animateFromRight");
const animateFromBottoms = document.querySelectorAll(".animateFromBottom");
const animateScales = document.querySelectorAll(".animateScale");

openMenu.addEventListener("click", () => {
  menuBox.classList.remove("hidden");
  openMenu.classList.add("hidden");
});

closeMenu.addEventListener("click", () => {
  menuBox.classList.add("hidden");
  openMenu.classList.remove("hidden");
});

window.addEventListener("mousemove", (event) => {
  movableImgs.forEach((movableImg) => {
    const x = event.clientX;
    movableImg.style.left = `${x}px`;
  });
});

window.addEventListener("scroll", heroTxtAnimation);
window.addEventListener("load", heroTxtAnimation);

function heroTxtAnimation() {
  heroTxts.forEach((heroTxt) => {
    const rect = heroTxt.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      heroTxt.classList.remove("translate-y-full", "opacity-0");
      heroTxt.style.transition = "1.5s";
    } else {
      heroTxt.classList.add("translate-y-full", "opacity-0");
      heroTxt.style.transition = "0s";
    }
  });
}

window.addEventListener("scroll", opacityZeroFnc);
window.addEventListener("load", opacityZeroFnc);

function opacityZeroFnc() {
  opacityZeros.forEach((opacityZero) => {
    const rect = opacityZero.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      opacityZero.classList.remove("opacity-0");
      opacityZero.style.transition = "2s";
    } else {
      opacityZero.classList.add("opacity-0");
      opacityZero.style.transition = "0s";
    }
  });
}

window.addEventListener("scroll", animateFromLeftFnc);
window.addEventListener("load", animateFromLeftFnc);

function animateFromLeftFnc() {
  animateFromLefts.forEach((animateFromLeft) => {
    const rect = animateFromLeft.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animateFromLeft.classList.remove("-translate-x-full", "opacity-0");
      animateFromLeft.style.transition = "1.5s";
    } else {
      animateFromLeft.classList.add("-translate-x-full", "opacity-0");
      animateFromLeft.style.transition = "0s";
    }
  });
}

window.addEventListener("scroll", animateFromBottomFnc);
window.addEventListener("load", animateFromBottomFnc);

function animateFromBottomFnc() {
  animateFromBottoms.forEach((animateFromBottom) => {
    const rect = animateFromBottom.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animateFromBottom.classList.remove("translate-y-full", "opacity-0");
      animateFromBottom.style.transition = "1.5s";
    } else {
      animateFromBottom.classList.add("translate-y-full", "opacity-0");
      animateFromBottom.style.transition = "0s";
    }
  });
}

window.addEventListener("scroll", animateFromRightFnc);
window.addEventListener("load", animateFromRightFnc);

function animateFromRightFnc() {
  animateFromRights.forEach((animateFromRight) => {
    const rect = animateFromRight.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animateFromRight.classList.remove("translate-x-full", "opacity-0");
      animateFromRight.style.transition = "1.5s";
    } else {
      animateFromRight.classList.add("translate-x-full", "opacity-0");
      animateFromRight.style.transition = "0s";
    }
  });
}

window.addEventListener("scroll", animateScaleFnc);
window.addEventListener("load", animateScaleFnc);

function animateScaleFnc() {
  animateScales.forEach((animateScale) => {
    const rect = animateScale.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animateScale.classList.remove("scale-0", "opacity-0");
      animateScale.style.transition = "1s";
    } else {
      animateScale.classList.add("scale-0", "opacity-0");
      animateScale.style.transition = "0s";
    }
  });
}
