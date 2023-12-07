const menuIcon = document.querySelector(".menu-icon");
const cancel_Icon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", () => {
  document.querySelector(".navBar").style.display = "block";
  document.querySelector(".menu-icon").style.display = "none";
  document.querySelector(".close-icon").style.display = "block";
});

cancel_Icon.addEventListener("click", () => {
  document.querySelector(".navBar").style.display = "none";
  document.querySelector(".menu-icon").style.display = "block";
  document.querySelector(".close-icon").style.display = "none";
});
