---
title: 안녕하세요! 이 매뉴얼에서는 관리자 홈페이지의 주요 기능과 사용법을 단계별로 안내합니다.
---
# 책 카드뷰

```{=html}
<style>
.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}

.book-card {
  position: relative;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  padding: 8px;
}

.cover-wrap {
  width: 100%;
  aspect-ratio: 3/4;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
}

.cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover.placeholder {
  color: #aaa;
  font-size: 14px;
}

.title {
  margin-top: 6px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
}

.meta {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  font-size: 12px;
  color: #666;
}

.status-badge.dot::before {
  content: "🔴";
  position: absolute;
  left: 6px;
  bottom: 6px;
}

.status-badge.x::before {
  content: "❌";
  position: absolute;
  left: 6px;
  bottom: 6px;
}
</style>

<div id="book-grid" class="book-grid"></div>

<script>
const SOURCE_DATA = "Book/books.json";
const LIMIT = 999;
const SORT_FIELD = "finish_read_date";
const SORT_ORDER = "asc";

const fmtDate = (d) => {
  if (!d) return "-";
  const dt = new Date(d);
  return `${dt.getMonth()+1}월 ${dt.getDate()}, ${dt.getFullYear()}`;
};

const statusIcon = (s) => {
  if (!s) return "";
  const v = String(s).toLowerCase();
  if (["plan","todo","wish"].includes(v)) return "dot";
  if (["dnf","drop","abandon"].includes(v)) return "x";
  return "";
};

fetch(SOURCE_DATA)
  .then(res => res.json())
  .then(pages => {
    pages.sort((a,b) => {
      const va = a[SORT_FIELD] ?? "";
      const vb = b[SORT_FIELD] ?? "";
      if (SORT_ORDER === "asc") return va > vb ? 1 : -1;
      else return va < vb ? 1 : -1;
    });

    if (LIMIT) pages = pages.slice(0, LIMIT);

    const root = document.getElementById("book-grid");

    pages.forEach(p => {
      const card = document.createElement("div");
      card.className = "book-card";

      const coverWrap = document.createElement("div");
      coverWrap.className = "cover-wrap";
      if (p.cover_url) {
        const img = document.createElement("img");
        img.src = p.cover_url;
        img.alt = p.title;
        img.className = "cover";
        coverWrap.appendChild(img);
      } else {
        const placeholder = document.createElement("div");
        placeholder.className = "cover placeholder";
        placeholder.innerText = "No Cover";
        coverWrap.appendChild(placeholder);
      }
      card.appendChild(coverWrap);

      const titleWrap = document.createElement("div");
      titleWrap.className = "title";
      const a = document.createElement("a");
      a.href = p.file_path || "#";
      a.innerText = p.title;
      titleWrap.appendChild(a);
      card.appendChild(titleWrap);

      const meta = document.createElement("div");
      meta.className = "meta";

      const left = document.createElement("div");
      left.className = "meta-left";
      const pagesNum = document.createElement("div");
      pagesNum.className = "meta-number";
      pagesNum.innerText = p.total_page ?? "-";
      const pagesLabel = document.createElement("div");
      pagesLabel.className = "meta-label";
      pagesLabel.innerText = "페이지";
      left.appendChild(pagesNum);
      left.appendChild(pagesLabel);

      const right = document.createElement("div");
      right.className = "meta-right";
      const dateEl = document.createElement("div");
      dateEl.className = "meta-date";
      dateEl.innerText = fmtDate(p.finish_read_date);
      right.appendChild(dateEl);

      meta.appendChild(left);
      meta.appendChild(right);
      card.appendChild(meta);

      const s = statusIcon(p.status);
      if (s) {
        const badge = document.createElement("div");
        badge.className = `status-badge ${s}`;
        card.appendChild(badge);
      }

      root.appendChild(card);
    });
  })
  .catch(err => console.error(err));
</script>
