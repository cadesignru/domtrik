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

/* Плашка MAX: всплывает, когда до блока «С нами работать выгодно» долистали, и дальше держится */

(() => {
  const widget = document.querySelector(".max-widget");
  const anchor = document.querySelector(".hero");
  if (!widget || !anchor) return;

  let ticking = false;

  const update = () => {
    ticking = false;
    const passed = anchor.getBoundingClientRect().bottom <= 0;
    widget.classList.toggle("is-visible", passed);
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
})();

/* Валидация формы «Оставить заявку» */

(() => {
  const form = document.querySelector(".modal-form");
  if (!form) return;

  const rules = {
    name: {
      test: (value) => value.trim().length >= 2,
      message: "Укажите имя",
    },
    email: {
      test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()),
      message: "Проверьте адрес почты",
    },
    phone: {
      test: (value) => (value.match(/\d/g) || []).length >= 10,
      message: "Укажите телефон — не меньше 10 цифр",
    },
  };

  const clearError = (field) => {
    field.classList.remove("is-invalid");
    field.removeAttribute("aria-invalid");
    const next = field.nextElementSibling;
    if (next && next.classList.contains("field-error")) next.remove();
    const label = field.closest(".modal-form__agree");
    if (label) {
      const after = label.nextElementSibling;
      if (after && after.classList.contains("field-error")) after.remove();
    }
  };

  const showError = (field, message) => {
    clearError(field);
    field.classList.add("is-invalid");
    field.setAttribute("aria-invalid", "true");
    const note = document.createElement("p");
    note.className = "field-error";
    note.textContent = message;
    const label = field.closest(".modal-form__agree");
    if (label) {
      note.classList.add("field-error--agree");
      label.after(note);
    } else {
      field.after(note);
    }
  };

  const validate = () => {
    let firstInvalid = null;

    Object.entries(rules).forEach(([name, rule]) => {
      const field = form.elements[name];
      if (!field) return;
      if (rule.test(field.value)) {
        clearError(field);
      } else {
        showError(field, rule.message);
        firstInvalid = firstInvalid || field;
      }
    });

    const agree = form.elements.agree;
    if (agree) {
      if (agree.checked) {
        clearError(agree);
      } else {
        showError(agree, "Подтвердите согласие на обработку данных");
        firstInvalid = firstInvalid || agree;
      }
    }

    return firstInvalid;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstInvalid = validate();
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    // Форма проверена. Отправку на сервер подключить здесь.
    form.dispatchEvent(new CustomEvent("form:valid", { bubbles: true }));
  });

  form.addEventListener("input", (event) => clearError(event.target));
  form.addEventListener("change", (event) => clearError(event.target));
})();
