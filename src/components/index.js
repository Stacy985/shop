const themeButton = document.querySelector(".header__theme");
const page = document.querySelector(".page");
const search = document.querySelector(".header__search");
const facebok = document.querySelector(".header__facebok");
const insta = document.querySelector(".header__insta ");
const like = document.querySelector(".header__like");
const price = document.querySelector(".price__title");
const text = document.querySelector(".price__subtitle");
const button = document.querySelector(".button");
const photoLarge = document.querySelector(".photo__large");
const photoPrew = document.querySelector(".photo__prew");
const iconInButton = document.querySelector(".price__icon");
const links = document.querySelectorAll(".link");
const buttonAdd = document.querySelector(".price__add");
links.forEach(function (link) {
  themeButton.addEventListener("click", function (ex) {
    links.classList.toggle(".dark-theme");
  });
});

/* function darkTheme () {
  const darkMode = localStorage.getItem('page_dark-theme') === true;
  localStorage.setItem('page_dark-theme', !darkMode);
  page.classList.toggle('page_dark-theme', !darkMode);
} */

themeButton.addEventListener("click", () => {
  page.classList.toggle("dark-theme");
  facebok.classList.toggle("dark-theme");
  insta.classList.toggle("dark-theme");
  like.classList.toggle("dark-theme");
  themeButton.classList.toggle("dark-theme");
  price.classList.toggle("dark-theme");
  text.classList.toggle("dark-theme");
  button.classList.toggle("dark-theme");
  photoLarge.classList.toggle("dark-theme");
  photoPrew.classList.toggle("dark-theme");
  search.classList.toggle("dark-theme");
  iconInButton.classList.toggle("dark-theme");
  buttonAdd.classList.toggle("dark-theme");
});
