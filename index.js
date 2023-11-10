const headerDiv = document.querySelector("header");

const colorfulMenu = document.querySelector(".nav-mobile");

colorfulMenu.innerHTML = `
<div class="close-menu">
<i class="far fa-times-circle"></i>
</div>
<a href="index.html"><img src="assets/logo-nav.png" alt="Logo Corpus Memori" /></a>
<nav>
<ul>
  <li><a href="index.html">Accueil</a></li>
  <li><a href="piercing.html">Piercing</a></li>
  <li><a href="tattoo.html">Tattoo</a></li>
  <li><a href="">News</a></li>
  <li><a href="contact.html">Contact</a></li>
</ul>
</nav>
<div class="mobile-social">
<a href="https://www.facebook.com/corpusmemoripiercing/" target="_blank"
  ><i class="fab fa-facebook-f"></i
></a>
<a href="https://www.instagram.com/corpusmemori/" target="_blank"
  ><i class="fab fa-instagram"></i
></a>
<a href="https://www.instagram.com/corpusmemoripiercing/" target="_blank"
  ><i class="fab fa-instagram"></i
></a>
</div>
`;

headerDiv.innerHTML = `
<nav>
<a href="index.html"><img src="assets/logo-nav.png" alt="Logo Corpus Memori" /></a>
<ul>
  <li class="desktop"><a href="index.html">Accueil</a></li>
  <li class="desktop"><a href="piercing.html">Piercing</a></li>
  <li class="desktop"><a href="tattoo.html">Tattoo</a></li>
  <li class="desktop"><a href="">News</a></li>
  <li class="desktop"><a href="contact.html">Contact</a></li>
  <li class="mobile" id="button-menu">
    <a><i class="fas fa-bars"></i> <span>Menu</span> </a>
  </li>
</ul>
</nav>
`;

const buttonMenu = document.getElementById("button-menu");

buttonMenu.addEventListener("click", () => {
  if (colorfulMenu.classList.contains("visible")) {
    colorfulMenu.classList.add("slide-out");
    setTimeout(() => {
      colorfulMenu.classList.remove("visible");
      colorfulMenu.classList.remove("slide-out");
    }, 500);
  } else {
    colorfulMenu.classList.add("visible");
  }
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".nav-mobile") &&
    !event.target.closest("#button-menu") &&
    colorfulMenu.classList.contains("visible")
  ) {
    colorfulMenu.classList.add("slide-out");
    setTimeout(() => {
      colorfulMenu.classList.remove("visible");
      colorfulMenu.classList.remove("slide-out");
    }, 500);
  }
});

const closeMenu = document.querySelector(".nav-mobile .close-menu");

closeMenu.addEventListener("click", () => {
  colorfulMenu.classList.add("slide-out");
  setTimeout(() => {
    colorfulMenu.classList.remove("visible");
    colorfulMenu.classList.remove("slide-out");
  }, 500);
});
