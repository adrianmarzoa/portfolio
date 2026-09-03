let lang = localStorage.getItem("lang") || "en";

function applyLang() {
  document.documentElement.lang = lang;
  langBtn.textContent = lang === "en" ? "ES" : "EN";
  document.querySelectorAll("[data-en]").forEach(el => el.textContent = el.getAttribute("data-" + lang));
}

function toggleLang() {
  lang = lang === "en" ? "es" : "en";
  localStorage.setItem("lang", lang);
  applyLang();
}

applyLang();
