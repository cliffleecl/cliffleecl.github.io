# cliffleecl.github.io

Cliff Lee 的個人網站，使用 [GitHub Pages](https://pages.github.com/) 架設。

🔗 網址：https://cliffleecl.github.io

## 內容

一個簡潔、響應式的個人首頁，包含以下區塊：

- **首屏 (Hero)** — 頭像、自我介紹與行動按鈕
- **關於我** — 背景與經歷
- **技能** — 技術標籤
- **作品 / 專案** — 專案卡片
- **聯絡** — Email、GitHub、LinkedIn 等連結

支援深色 / 淺色模式切換（會記住偏好），並針對手機與桌機自動調整版面。

## 檔案結構

| 檔案 | 說明 |
|------|------|
| `index.html` | 頁面結構與內容 |
| `style.css` | 樣式與設計變數（含深色模式、RWD） |
| `script.js` | 深/淺色切換與頁尾年份 |

## 本機預覽

直接用瀏覽器打開 `index.html` 即可，或啟動一個簡易伺服器：

```bash
# Python 3
python -m http.server 8000
# 開啟 http://localhost:8000
```

## 部署

推送到 GitHub 後，於 repo 的 **Settings → Pages** 選擇 `main` 分支作為來源即可自動發佈。

## 授權

見 [LICENSE.md](LICENSE.md)。
