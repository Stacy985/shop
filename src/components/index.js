const themeButton = document.querySelector(".header__theme");
const page = document.querySelector(".page");
const search = document.querySelector(".header__search");
const facebok = document.querySelector(".header__facebok");
const insta = document.querySelector(".header__insta ");
const like = document.querySelector(".header__like");
const price = document.querySelector(".price__title");
const texts = document.querySelectorAll(".price__subtitle");
const buttons = document.querySelectorAll(".button");
const photoLarge = document.querySelector(".photo__large");
const photoPrews = document.querySelector(".photo__prew");
const iconInButtons = document.querySelector(".price__icon");
const links = document.querySelectorAll(".link");
const buttonAdd = document.querySelector(".price__add");
const logo = document.querySelector(".header__logo");
const item = document.querySelector(".footer__item");


themeButton.addEventListener("click", () => {
  page.classList.toggle("dark-theme");
  facebok.classList.toggle("dark-theme");
  insta.classList.toggle("dark-theme");
  like.classList.toggle("dark-theme");
  themeButton.classList.toggle("dark-theme");
  price.classList.toggle("dark-theme");
  item.classList.toggle("dark-theme")
  photoLarge.classList.toggle("dark-theme");
  search.classList.toggle("dark-theme");
  text.classList.toggle("dark-theme");
  buttonAdd.classList.toggle("dark-theme");
  logo.classList.toggle("dark-theme");

  Array.from(links).map((link) => link.classList.toggle('dark-theme'));
  Array.from(buttons).map((button) => button.classList.toggle('dark-theme'));


});
//button.classList.toggle("dark-theme");
//photoPrew.classList.toggle("dark-theme");
// iconInButton.classList.toggle("dark-theme");
// text.classList.toggle("dark-theme");