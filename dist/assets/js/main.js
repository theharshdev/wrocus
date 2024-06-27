const dropdown = document.getElementById("dropdown");
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownArrow = document.getElementById("dropdownArrow");
const navbar = document.getElementById("navbar");
const body = document.querySelector("body");
let dropdownOpen = false;

dropdownBtn.addEventListener("click", (e) => {
  if (dropdownOpen) {
    dropdown.classList.add("h-0");
    dropdown.classList.remove("h-full");
    dropdownBtn.classList.remove("underline", "underline-1");
    dropdownArrow.classList.remove("rotate-180");
    body.classList.remove("h-screen", "overflow-hidden");
    dropdownOpen = false;
  } else {
    dropdown.classList.remove("h-0");
    dropdown.classList.add("h-full");
    dropdownBtn.classList.add("underline");
    body.classList.add("h-screen", "overflow-hidden");
    dropdownArrow.classList.add("rotate-180");
    dropdownOpen = true;
  }
});

window.addEventListener("click", (e) => {
  let target = e.target;
  console.log(target);
  if (target.classList.contains("closeDropdown")) {
    dropdown.classList.add("h-0");
    dropdown.classList.remove("h-full");
    dropdownBtn.classList.remove("underline", "underline-1");
    dropdownArrow.classList.remove("rotate-180");
    body.classList.remove("h-screen", "overflow-hidden");
    dropdownOpen = false;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-white", "border-b", "border-zinc-200");
  } else {
    navbar.classList.remove("bg-white", "border-b", "border-zinc-200");
  }
});
