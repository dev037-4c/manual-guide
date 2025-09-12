---
title: LX2 매뉴얼 목차
---
<style>
/* ===== 레이아웃 ===== */
.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

/* ===== 카드 기본 ===== */
.book-card {
  width: 250px;
  height: 300px;
  perspective: 1000px;
  margin: 0 auto;
}

.book-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.book-card:hover .book-card-inner {
  transform: rotateY(180deg);
}

.book-card-front,
.book-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

/* 앞면 */
.book-card-front {
  background: #fff;
}

/* 뒷면 */
.book-card-back {
  background: #fff;
  color: #111;
  transform: rotateY(180deg);
  text-align: center;
  font-size: 14px;
  padding-top: 10px;
}

/* ===== 표지 이미지 ===== */
.cover-wrap {
  width: 90%;
  aspect-ratio: 3/4;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.cover {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(0.85);
}

/* ===== 제목 ===== */
.title {
  margin-top: 8px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}

/* ===== 뒷면 링크 ===== */
.meta {
  width: 100%;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.meta .category {
  font-weight: 600;
  margin-bottom: 6px;
}

.meta a {
  display: block;
  padding: 6px 8px;
  background: #f5f5f5;
  border-radius: 6px;
  text-decoration: none;
  color: #111;
  font-size: 13px;
  word-break: keep-all;
  transition: background 0.2s, color 0.2s;
  text-align: center;
}

.meta a:hover {
  background: #e0e0e0;
  color: #000;
}

/* 두 컬럼 배치 */
.meta.two-column {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}

.meta.two-column .column {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* ===== 배너 ===== */
.page-banner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 20px;
  border-radius: 12px;
  overflow: hidden;
}

.page-banner img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>

<div class="page-banner">
  <img src="_etc/books/메인화면.png" alt="메인 배너">
</div>

