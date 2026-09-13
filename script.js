const EMAIL = "utkarsh6624.codes@gmail.com";

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const emailLink = document.getElementById("email-link");
const emailText = document.getElementById("email-text");
if (emailLink && emailText) {
  emailText.textContent = EMAIL;
  emailLink.href = "mailto:" + EMAIL;
}

const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const id = link.getAttribute("href");
    const target = id ? document.querySelector(id) : null;
    if (!target) {
      return;
    }
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
