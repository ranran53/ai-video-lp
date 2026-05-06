const backToTopButton = document.querySelector(".back-to-top");
const productLinks = document.querySelectorAll('a[href="#product"]');

const toggleBackToTop = () => {
  if (window.scrollY > 520) {
    backToTopButton.classList.add("is-visible");
    return;
  }

  backToTopButton.classList.remove("is-visible");
};

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

productLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.blur();
  });
});

window.addEventListener("scroll", toggleBackToTop, { passive: true });
toggleBackToTop();
