```{=html}
<div id="book-grid" class="book-grid"></div>

<script>
// ==== 설정값 ====
const SOURCE_DATA = "content/Book/도서목록.json"; // JSON 형식으로 변환된 책 데이터
const LIMIT = 999;
const SORT_FIELD = "finish_read_date";
const SORT_ORDER = "asc";

// ==== 유틸 ====
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

// ==== 데이터 로드 ====
fetch(SOURCE_DATA)
  .then(res => res.json())
  .then(pages => {
    // 현재 페이지 제외 가능 (옵션)
    // pages = pages.filter(p => p.file_path !== CURRENT_PAGE);

    // 정렬
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

      // 표지
      const coverWrap = document.createElement("div");
      coverWrap.className = "cover-wrap";
      if (p.cover_url) {
        const img = document.createElement("img");
        img.src = p.cover_url;
        img.alt = p.title || p.file_name;
        img.className = "cover";
        coverWrap.appendChild(img);
      } else {
        const placeholder = document.createElement("div");
        placeholder.className = "cover placeholder";
        placeholder.innerText = "No Cover";
        coverWrap.appendChild(placeholder);
      }
      card.appendChild(coverWrap);

      // 제목
      const titleWrap = document.createElement("div");
      titleWrap.className = "title";
      const a = document.createElement("a");
      a.href = p.file_path || "#";
      a.innerText = p.title || p.file_name;
      titleWrap.appendChild(a);
      card.appendChild(titleWrap);

      // 메타
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

      // 상태 아이콘
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

```
