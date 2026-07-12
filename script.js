// 顯示今年年份
document.getElementById("year").textContent = new Date().getFullYear();

// 深淺色切換
const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

// 讀取先前偏好
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  root.setAttribute("data-theme", "dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.removeAttribute("data-theme");
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});
