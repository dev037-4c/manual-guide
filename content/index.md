---
title: 안녕하세요! 이 매뉴얼에서는 관리자 홈페이지의 주요 기능과 사용법을 단계별로 안내합니다.
---
# 책 카드뷰

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
// ==== 책 데이터 직접 작성 (JSON 대신 코드 안에 포함) ====
const books = [
  {
    title: "해리포터와 마법사의 돌",
    cover_url: "_etc/books/harrypotter1.jpeg",
    total_page: 350,
    finish_read_date: "2025-08-28",
    status: "plan",
    file_path: "Book/도서목록/해리포터.md"
  },
  {
    title: "테스트",
    cover_url: "_etc/books/test.jpg",
    total_page: 120,
    finish_read_date: "2025-07-15",
    status: "dnf",
    file_path: "Book/도서목록/테스트.md"
  },
  {
    title: "10배의 법칙",
    cover_url: "_etc/books/10x.jpg",
    total_page: 200,
    finish_read_date: "2025-09-01",
    status: "wish",
    file_path: "Book/도서목록/10배의 법칙.md"
  }
];

// ==== 유틸 함수 ====
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

// ==== 카드 렌더링 ====
const root = document.getElementById("book-grid");

// 정렬 (finish_read_date 기준)
books.sort((a,b) => new Date(a.finish_read_date) - new Date(b.finish_read_date));

books.forEach(p => {
  const card = document.createElement("div");
  card.className = "book-card";

  // 표지
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

  // 제목
  const titleWrap = document.createElement("div");
  titleWrap.className = "title";
  const a = document.createElement("a");
  a.href = p.file_path || "#";
  a.innerText = p.title;
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
</script>
