const backToTopButton = document.querySelector(".back-to-top");
const productLinks = document.querySelectorAll('a[href="#product"]');
const heroVideo = document.querySelector(".hero-video");

const toggleBackToTop = () => {
  if (!backToTopButton) return;

  if (window.scrollY > 520) {
    backToTopButton.classList.add("is-visible");
    return;
  }

  backToTopButton.classList.remove("is-visible");
};

backToTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

productLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.blur();
  });
});

heroVideo?.addEventListener("canplay", () => {
  heroVideo.dataset.hasVideo = "true";
});

heroVideo?.addEventListener("error", () => {
  heroVideo.removeAttribute("data-has-video");
});

window.addEventListener("scroll", toggleBackToTop, { passive: true });
toggleBackToTop();
