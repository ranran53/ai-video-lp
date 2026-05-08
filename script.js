const CTA_LINK = "https://note.com/";

const ctaLinks = document.querySelectorAll("[data-cta-link]");
const backToTopButton = document.querySelector(".back-to-top");

ctaLinks.forEach((link) => {
  link.href = CTA_LINK;
  link.addEventListener("click", () => link.blur());
});

const toggleBackToTop = () => {
  if (!backToTopButton) return;
  backToTopButton.classList.toggle("is-visible", window.scrollY > 520);
};

backToTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", toggleBackToTop, { passive: true });
toggleBackToTop();
