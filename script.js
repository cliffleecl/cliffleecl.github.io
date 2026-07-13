// 顯示今年年份
document.getElementById("year").textContent = new Date().getFullYear();

// 主題切換：預設為賽博龐克暗色，可切換到霓虹晝（淺色）
const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

// 讀取先前偏好
const saved = localStorage.getItem("theme");
if (saved === "light") {
  root.setAttribute("data-theme", "light");
  toggle.textContent = "🌙";
} else {
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  if (isLight) {
    root.removeAttribute("data-theme");
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
