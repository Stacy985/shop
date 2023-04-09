const themeButton = document.querySelector(".header__theme");
const page = document.querySelector(".page");
const link = document.querySelector(".link");
const facebok = document.querySelector(".header__facebok");
const insta = document.querySelector(".header__insta ");
const like = document.querySelector(".header__like");
const price = document.querySelector(".price__title");
const text = document.querySelector(".price__subtitle");
const button = document.querySelector(".button");
const photoLarge = document.querySelector(".photo__large");
const photoPrew = document.querySelector(".photo__prew");

/* function darkTheme () {
  const darkMode = localStorage.getItem('page_dark-theme') === true;
  localStorage.setItem('page_dark-theme', !darkMode);
  page.classList.toggle('page_dark-theme', !darkMode);
} */

themeButton.addEventListener("click", () => {
  page.classList.toggle("dark-theme");
  link.classList.toggle("dark-theme");
  facebok.classList.toggle("dark-theme");
  insta.classList.toggle("dark-theme");
  like.classList.toggle("dark-theme");
  themeButton.classList.toggle("dark-theme");
  price.classList.toggle("dark-theme");
  text.classList.toggle("dark-theme");
  button.classList.toggle("dark-theme");
  photoLarge.classList.toggle("dark-theme");
  photoPrew.classList.toggle("dark-theme");

});

/*   themeButton.addEventListener('click', darkTheme); */
