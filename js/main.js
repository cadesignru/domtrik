document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;

  const id = link.getAttribute("href");
  if (id.length < 2) return;

  const target = document.querySelector(id);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* Модальные окна */

const modals = (() => {
  let opener = null;

  const open = (id) => {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.hidden = false;
    document.body.classList.add("is-modal-open");
    const focusable = modal.querySelector("input, button, a[href]");
    if (focusable) focusable.focus();
  };

  const close = (modal) => {
    modal.hidden = true;
    if (!document.querySelector(".modal:not([hidden])")) {
      document.body.classList.remove("is-modal-open");
    }
    if (opener) {
      opener.focus();
      opener = null;
    }
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-modal-open]");
    if (trigger) {
      event.preventDefault();
      opener = trigger;
      open(trigger.dataset.modalOpen);
      return;
    }

    const closer = event.target.closest("[data-modal-close]");
    if (closer) {
      const modal = closer.closest(".modal");
      if (modal) close(modal);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const modal = document.querySelector(".modal:not([hidden])");
    if (modal) close(modal);
  });

  return { open, close };
})();

/* Галерея сертификатов: наполняется, когда появятся сканы */

document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const stage = gallery.querySelector(".gallery__stage");
  const slides = Array.from(stage.querySelectorAll("img"));
  if (!slides.length) return;

  gallery.setAttribute("data-gallery-ready", "");
  let index = 0;

  const render = () => {
    slides.forEach((slide, i) => {
      slide.hidden = i !== index;
    });
  };

  const step = (delta) => {
    index = (index + delta + slides.length) % slides.length;
    render();
  };

  gallery.querySelector("[data-gallery-prev]").addEventListener("click", () => step(-1));
  gallery.querySelector("[data-gallery-next]").addEventListener("click", () => step(1));
  render();
});
