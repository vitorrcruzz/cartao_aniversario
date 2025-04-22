const openBtn = document.getElementById("openBtn");
const introTitle = document.querySelector(".intro-title");
const introText = document.querySelector(".intro-text");
const surpriseContent = document.getElementById("surpriseContent");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const body = document.body;
const sigil = document.querySelector(".sigil");

openBtn.addEventListener("click", () => {
  introTitle.style.display = "none";
  introText.style.display = "none";
  openBtn.style.display = "none";
  surpriseContent.classList.remove("hidden");

  if (body.classList.contains("supernatural-theme")) {
    sigil.classList.remove("hidden");
  }
});

toggleThemeBtn.addEventListener("click", () => {
  body.classList.toggle("supernatural-theme");
  body.classList.toggle("cute-theme");

  if (body.classList.contains("supernatural-theme")) {
    toggleThemeBtn.textContent = "Estilo Fofinho";
  } else {
    toggleThemeBtn.textContent = "Estilo Supernatural";
  }
});
