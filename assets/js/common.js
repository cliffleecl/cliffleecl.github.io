// ============================================================
// 共用腳本：注入導覽列與頁尾、主題切換、年份
// ⚠️ 全站共用：修改會影響所有頁面的導覽列 / 頁尾 / 主題行為
// ============================================================

// 導覽列連結（新增 / 調整頁面時只改這裡）
const NAV_LINKS = [
  { href: "index.html", label: "首頁" },
  { href: "index.html#about", label: "關於我" },
  { href: "index.html#skills", label: "技能" },
  { href: "index.html#talks", label: "演講" },
  { href: "projects.html", label: "作品" },
  { href: "contact.html", label: "聯絡" },
];

// 取得目前頁面檔名（根目錄視為 index.html）
function currentPage() {
  const file = location.pathname.split("/").pop();
  return file === "" ? "index.html" : file;
}

// 導覽列 HTML
function headerHTML() {
  const here = currentPage();
  const links = NAV_LINKS.map(
    (l) =>
      `<a href="${l.href}"${l.href === here ? ' class="is-active"' : ""}>${l.label}</a>`
  ).join("");
  return `
  <header class="nav">
    <div class="container nav__inner">
      <a href="index.html" class="nav__logo">Cliff&nbsp;Lee</a>
      <nav class="nav__links">${links}</nav>
      <button class="theme-toggle" id="themeToggle" aria-label="切換深淺色">🌙</button>
    </div>
  </header>`;
}

// 頁尾 HTML
function footerHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <p>© <span id="year"></span> Cliff Lee · 使用 GitHub Pages 架設</p>
    </div>
  </footer>`;
}

// 主題切換：預設為賽博龐克暗色，可切換到霓虹晝（淺色）
function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const root = document.documentElement;

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
}

// 注入共用區塊並初始化
document.body.insertAdjacentHTML("afterbegin", headerHTML());
document.body.insertAdjacentHTML("beforeend", footerHTML());
document.getElementById("year").textContent = new Date().getFullYear();
initTheme();
