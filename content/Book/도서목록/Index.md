```dataviewjs
/***** 설정값 *****/
const SOURCE_FOLDER = "content/Book/도서목록";      // 책 노트 폴더
const LIMIT = 999;                           // 표기 최대 개수
const SORT = { field: "finish_read_date", order: "asc" }; // 정렬 기준

/***** 유틸 *****/
const getCoverPath = (p) => {
  let c = p.cover ?? p.cover_url ?? null;
  if (!c) return null;
  if (typeof c === "string") return c;
  if (c?.path) return c.path;
  if (Array.isArray(c) && c[0]?.path) return c[0].path;
  return null;
};
const fmtDate = (d) => d ? dv.date(d).toFormat("M월 d, yyyy") : "-";
const statusIcon = (s) => {
  if (!s) return "";
  const v = String(s).toLowerCase();
  if (v === "plan" || v === "todo" || v === "wish") return "dot";
  if (v === "dnf" || v === "drop" || v === "abandon") return "x";
  return "";
};

/***** 데이터 가져오기 *****/
let pages = dv.pages(`"${SOURCE_FOLDER}"`)
  .where(p => p.file && p.file.path !== dv.current().file.path);

if (SORT?.field) {
  pages = pages.sort(p => p[SORT.field] ?? null, SORT.order === "desc" ? "desc" : "asc");
}
if (LIMIT) pages = pages.limit(LIMIT);

/***** 루트 컨테이너 생성 *****/
const root = dv.el("div", "", { cls: "book-grid" });

/***** 카드 렌더링 *****/
for (const p of pages) {
  const card = root.createEl("div", { cls: "book-card" });

  // 표지
  const coverPath = getCoverPath(p);
  const coverEl = card.createEl("div", { cls: "cover-wrap" });
  if (coverPath) {
    coverEl.createEl("img", { attr: { src: coverPath, alt: p.title ?? p.file.name }, cls: "cover" });
  } else {
    coverEl.createEl("div", { text: "No Cover", cls: "cover placeholder" });
  }

  // 제목
  const titleWrap = card.createEl("div", { cls: "title" });
  titleWrap.append(dv.fileLink(p.file.path, p.title ?? p.file.name));

  // 메타
  const meta = card.createEl("div", { cls: "meta" });
  const left = meta.createEl("div", { cls: "meta-left" });
  left.createEl("div", { text: p.total_page ? String(p.total_page) : "-", cls: "meta-number" });
  left.createEl("div", { text: "페이지", cls: "meta-label" });

  const right = meta.createEl("div", { cls: "meta-right" });
  right.createEl("div", { text: fmtDate(p.finish_read_date), cls: "meta-date" });

  // 상태 아이콘
  const s = statusIcon(p.status);
  if (s) {
    const badge = card.createEl("div", { cls: `status-badge ${s}` });
  }
}
```
