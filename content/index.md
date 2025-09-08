---
title: LX2 매뉴얼 목차
---
<style>
/* ===== 레이아웃 ===== */
.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto; /* 가운데 정렬 */
}

/* ===== 카드 기본 ===== */
.book-card {
  width: 200px;
  height: 300px;
  perspective: 1000px; /* 3D 원근감 */
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
  box-shadow: 0 6px 18px rgba(0, 0, 0, .15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  object-fit: contain;   /* 이미지 잘림 방지 */
  background-color: #fff;
  transform: scale(0.85); /* 살짝 축소 */
}

/* ===== 제목 & 메타 ===== */
.title {
  margin-top: 8px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}

.meta {
  margin-top: 6px;
  font-size: 12px;
  color: #111;
  text-align: center;
}

.book-card-back .meta a {
  display: block;
  padding: 8px 10px;
  margin-bottom: 6px;
  font-weight: 500;
  text-decoration: none;
  color: #111;
  font-size: 13px;
  background: #f5f5f5;  /* 연한 회색 배경 */
  border-radius: 6px;
  text-align: center;
  transition: background 0.2s, color 0.2s;
  word-break: keep-all; /* 글자 줄 바꿈 시 단어 유지 */
}

.book-card-back .meta a:last-child {
  margin-bottom: 0;
}

.book-card-back .meta a:hover {
  background: #e0e0e0;
  color: #000;
}

.book-card-back .meta .category {
  font-weight: 600;
  margin: 10px 0 6px;
  font-size: 13px;
}

/* 두 칼럼 레이아웃 */
.meta.two-column {
  display: flex;
  gap: 10px;
}

.meta.two-column > .column {
  flex: 1;
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
  <img src="_etc/books/메인메뉴.png" alt="메인 배너">
</div>

<div class="book-grid">

  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <img src="_etc/books/회원.png" alt="회원" class="cover">
        </div>
        <div class="title">회원</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column">
          <div class="column">
            <div class="category">전체</div>
            <a href="회원-학습자.md">학습자</a>
            <a href="회원-교수자.md">교수자</a>
            <a href="회원-조교.md">조교</a>
            <a href="회원-소속담당자.md">소속 담당자</a>
            <a href="회원-운영관리자.md">운영관리자</a>
            <div class="category">소속</div>
            <a href="소속관리.md">소속관리</a>
          </div>
          <div class="column">
            <div class="category">문자알림</div>
            <a href="문자알림-발송하기.md">발송하기</a>
            <a href="문자알림-발송내역.md">발송내역</a>
            <a href="문자알림-자주쓰는메시지.md">자주 쓰는 메시지</a>
          </div>
        </div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <img src="_etc/books/과정.png" alt="과정" class="cover">
        </div>
        <div class="title">과정</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column"></div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <img src="_etc/books/콘텐츠.png" alt="콘텐츠" class="cover">
        </div>
        <div class="title">콘텐츠</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column">
          <div class="column">
            <div class="category">학습</div>
            <a href="학습-그룹.md">그룹</a>
            <a href="학습-콘텐츠.md">콘텐츠</a>
            <div class="category">시험</div>
            <a href="시험-출제그룹.md">출제그룹</a>
            <a href="시험-시험지.md">시험지</a>
            <a href="시험-문항.md">문항</a>
          </div>
          <div class="column">
            <div class="category">과제</div>
            <a href="과제.md">과제관리</a>
            <div class="category">설문</div>
            <a href="설문-설문지.md">설문지</a>
            <a href="설문-문항.md">문항</a>
            <div class="category">토론</div>
            <a href="토론.md">토론관리</a>
          </div>
        </div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <img src="_etc/books/사이트.png" alt="사이트" class="cover">
        </div>
        <div class="title">사이트</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column"></div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <img src="_etc/books/서비스.png" alt="서비스" class="cover">
        </div>
        <div class="title">서비스</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column"></div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <img src="_etc/books/시설.png" alt="시설" class="cover">
        </div>
        <div class="title">시설</div>
      </div>
      <div class="book-card-back">
        <div class="meta">
        <div class="column">
            <a href="강의동.md">강의동</a>
            <a href="강의실예약.md">강의실 예약</a>
            <a href="스튜디오.md">스튜디오</a>
            <a href="스튜디오예약.md">스튜디오 예약</a>
          </div>
          </div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <img src="_etc/books/주문결제.png" alt="주문결제" class="cover">
        </div>
        <div class="title">주문결제</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column"></div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <img src="_etc/books/통계.png" alt="통계" class="cover">
        </div>
        <div class="title">통계</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column"></div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <img src="_etc/books/설정_.png" alt="설정" class="cover">
        </div>
        <div class="title">설정</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column">
          <div class="column">
            <a href="기본.md">기본</a>
            <a href="과정.md">과정</a>
            <div class="category">보안</div>
            <a href="보안-기본.md">기본</a>
            <a href="보안-API.md">API</a>
            <a href="메뉴.md">메뉴</a>
          </div>
          <div class="column">
            <div class="category">템플릿</div>
            <a href="템플릿-수료증.md">수료증</a>
            <a href="템플릿-수강신청서.md">수강신청서</a>
            <a href="템플릿-썸네일.md">썸네일</a>
            <a href="템플릿-자동알림.md">자동알림</a>
            <a href="게시판.md">게시판</a>
            <a href="약관관리.md">약관 관리</a>
            <a href="그리드.md">그리드</a>
            <a href="언어.md">언어</a>
          </div>
        </div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <img src="_etc/books/시스템.png" alt="시스템" class="cover">
        </div>
        <div class="title">시스템</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column"></div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

</div>

