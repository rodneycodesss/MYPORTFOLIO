const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    navbar.style.opacity = "0.7"; // Reduce visibility
  } else {
    navbar.style.opacity = "1"; // Full visibility
  }
});