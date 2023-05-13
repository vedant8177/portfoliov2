const hamburgerMenu = document.querySelector("#hamburgerMenu");
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const hamburgerCloseBtn = document.querySelector("#hamburgerCloseBtn");
const burgerNavLinks = document.querySelectorAll(".burger-nav-links");
const copyrightYear = document.querySelector("#copyright-year");
let d = new Date;
let latestYear = d.getFullYear();

copyrightYear.innerHTML = latestYear;

burgerNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.add("hidden");
    hamburgerMenu.classList.remove("flex");
  });
});

hamburgerBtn.addEventListener("click", () => {
  hamburgerMenu.classList.remove("hidden");
  hamburgerMenu.classList.add("flex");
});

hamburgerCloseBtn.addEventListener("click", () => {
  hamburgerMenu.classList.add("hidden");
  hamburgerMenu.classList.remove("flex");
});

const cards = document.querySelectorAll(".project-card");
const moreBtn = document.querySelector("#moreBtn");

for (let i = 0; i < 3; i++) {
  cards[i].classList.remove('hidden');
}

moreBtn.addEventListener('click', () => {
  for (let i = 3; i < cards.length; i++) {
    cards[i].classList.remove('hidden')
  }
  moreBtn.classList.add('hidden');
});

const loader = document.querySelector('.loader-container');
window.addEventListener('load', () => {
  loader.classList.add('hiddenX');
})

function certificationBE() {
  window.open('https://www.freecodecamp.org/certification/vedantssj/back-end-development-and-apis', '_blank');
}
function certificationFE() {
  window.open('https://www.freecodecamp.org/certification/vedantssj/responsive-web-design', '_blank');
}
function certificationJS() {
  window.open('https://www.freecodecamp.org/certification/vedantssj/javascript-algorithms-and-data-structures', '_blank');
}