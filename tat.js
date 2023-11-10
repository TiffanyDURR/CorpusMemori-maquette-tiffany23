const sectionDIV = document.querySelector(".compCON-1");
const buttonDIV = document.querySelector(".faq");

buttonDIV.addEventListener("click", () => {
  sectionDIV.classList.toggle("visible");
});
