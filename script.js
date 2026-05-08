const CTA_LINK = "https://note.com/";

document.querySelectorAll("[data-cta-link]").forEach((link) => {
  link.href = CTA_LINK;
  link.addEventListener("click", () => link.blur());
});
