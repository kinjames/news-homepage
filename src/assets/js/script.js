const mobileMenu = document.querySelector(".mobile-menu");
const menuBtn = document.querySelector(".menu");
const menuImg = document.querySelector("menu-img");

// import img from '../../images/icon-menu-close.svg'

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hide")) {
    mobileMenu.classList.remove("hide");
    mobileMenu.styles.display = "block";
    menuImg.src = "../../images/icon-menu-close.svg";
  }
});
