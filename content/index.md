---
title: 안녕하세요! 이 매뉴얼에서는 관리자 홈페이지의 주요 기능과 사용법을 단계별로 안내합니다.
---


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
  text-align: center;
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

<div class="book-grid">

  <!-- 책 1 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="4.콘텐츠.md">
      <img src="_etc/books/harrypotter1.jpeg" alt="해리포터와 마법사의 돌" class="cover">
      </a>
    </div>
    <div class="title"><a href="4.콘텐츠.md">메인메뉴</a></div>
    <div class="meta">전체 / 소속 / 문자알림 / 이력관리</div>
    <div class="status-badge dot"></div>
  </div>

  <!-- 책 2 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="Book/도서목록/테스트.md">
      <img src="_etc/books/test.jpg" alt="테스트" class="cover">
      </a>
    </div>
    <div class="title"><a href="Book/도서목록/테스트.md">회원</a></div>
    <div class="meta">
      <div class="meta-left">
        <div class="meta-number">120</div>
        <div class="meta-label">페이지</div>
      </div>
      <div class="meta-right">
        <div class="meta-date">7월 15, 2025</div>
      </div>
    </div>
    <div class="status-badge x"></div>
  </div>

  <!-- 책 3 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="Book/도서목록/10배의 법칙.md">
      <img src="_etc/books/10x.jpg" alt="10배의 법칙" class="cover"></a>
    </div>
    <div class="title"><a href="Book/도서목록/10배의 법칙.md">과정</a></div>
    <div class="meta">
      <div class="meta-left">
        <div class="meta-number">200</div>
        <div class="meta-label">페이지</div>
      </div>
      <div class="meta-right">
        <div class="meta-date">9월 1, 2025</div>
      </div>
    </div>
    <div class="status-badge dot"></div>
  </div>

<!-- 책 4 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="Book/도서목록/10배의 법칙.md">
      <img src="_etc/books/10x.jpg" alt="10배의 법칙" class="cover"></a>
    </div>
    <div class="title"><a href="Book/도서목록/10배의 법칙.md">콘텐츠</a></div>
    <div class="meta">
      <div class="meta-left">
        <div class="meta-number">200</div>
        <div class="meta-label">페이지</div>
      </div>
      <div class="meta-right">
        <div class="meta-date">9월 1, 2025</div>
      </div>
    </div>
    <div class="status-badge dot"></div>
  </div>

<!-- 책 5 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="Book/도서목록/10배의 법칙.md">
      <img src="_etc/books/10x.jpg" alt="10배의 법칙" class="cover"></a>
    </div>
    <div class="title"><a href="Book/도서목록/10배의 법칙.md">사이트</a></div>
    <div class="meta">
      <div class="meta-left">
        <div class="meta-number">200</div>
        <div class="meta-label">페이지</div>
      </div>
      <div class="meta-right">
        <div class="meta-date">9월 1, 2025</div>
      </div>
    </div>
    <div class="status-badge dot"></div>
  </div>

<!-- 책 6 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="Book/도서목록/10배의 법칙.md">
      <img src="_etc/books/10x.jpg" alt="10배의 법칙" class="cover"></a>
    </div>
    <div class="title"><a href="Book/도서목록/10배의 법칙.md">서비스</a></div>
    <div class="meta">
      <div class="meta-left">
        <div class="meta-number">200</div>
        <div class="meta-label">페이지</div>
      </div>
      <div class="meta-right">
        <div class="meta-date">9월 1, 2025</div>
      </div>
    </div>
    <div class="status-badge dot"></div>
  </div>

<!-- 책 7 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="Book/도서목록/10배의 법칙.md">
      <img src="_etc/books/10x.jpg" alt="10배의 법칙" class="cover"></a>
    </div>
    <div class="title"><a href="Book/도서목록/10배의 법칙.md">시설</a></div>
    <div class="meta">
      <div class="meta-left">
        <div class="meta-number">200</div>
        <div class="meta-label">페이지</div>
      </div>
      <div class="meta-right">
        <div class="meta-date">9월 1, 2025</div>
      </div>
    </div>
    <div class="status-badge dot"></div>
  </div>

<!-- 책 8 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="Book/도서목록/10배의 법칙.md">
      <img src="_etc/books/10x.jpg" alt="10배의 법칙" class="cover"></a>
    </div>
    <div class="title"><a href="Book/도서목록/10배의 법칙.md">주문결제</a></div>
    <div class="meta">
      <div class="meta-left">
        <div class="meta-number">200</div>
        <div class="meta-label">페이지</div>
      </div>
      <div class="meta-right">
        <div class="meta-date">9월 1, 2025</div>
      </div>
    </div>
    <div class="status-badge dot"></div>
  </div>

<!-- 책 9 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="Book/도서목록/10배의 법칙.md">
      <img src="_etc/books/10x.jpg" alt="10배의 법칙" class="cover"></a>
    </div>
    <div class="title"><a href="Book/도서목록/10배의 법칙.md">통계</a></div>
    <div class="meta">
      <div class="meta-left">
        <div class="meta-number">200</div>
        <div class="meta-label">페이지</div>
      </div>
      <div class="meta-right">
        <div class="meta-date">9월 1, 2025</div>
      </div>
    </div>
    <div class="status-badge dot"></div>
  </div>
</div>
