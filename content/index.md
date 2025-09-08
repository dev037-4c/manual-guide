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
  width: 250px;       /* 가로 확대 */
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
  margin-top: 10px;
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
  flex: 1 1 45%; /* 한 줄에 2컬럼 배치 */
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

  <!-- 회원 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap"><img src="_etc/books/회원.png" alt="회원" class="cover"></div>
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
      </div>
    </div>
  </div>

  <!-- 과정 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap"><img src="_etc/books/과정.png" alt="과정" class="cover"></div>
        <div class="title">과정</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column"></div>
      </div>
    </div>
  </div>

  <!-- 콘텐츠 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap"><img src="_etc/books/콘텐츠.png" alt="콘텐츠" class="cover"></div>
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
      </div>
    </div>
  </div>

  <!-- 사이트 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap"><img src="_etc/books/사이트.png" alt="사이트" class="cover"></div>
        <div class="title">사이트</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column"></div>
      </div>
    </div>
  </div>

  <!-- 서비스 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap"><img src="_etc/books/서비스.png" alt="서비스" class="cover"></div>
        <div class="title">서비스</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column"></div>
      </div>
    </div>
  </div>

  <!-- 시설 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap"><img src="_etc/books/시설.png" alt="시설" class="cover"></div>
        <div class="title">시설</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column">
          <div class="column">
            <div class="category">건물</div>
            <a href="강의동.md">강의동</a>
            <a href="강의실예약.md">강의실 예약</a>
            <a href="스튜디오.md">스튜디오</a>
            <a href="스튜디오예약.md">스튜디오 예약</a>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- 주문결제 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap"><img src="_etc/books/주문결제.png" alt="주문결제" class="cover"></div>
        <div class="title">주문결제</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column"></div>
      </div>
    </div>
  </div>

  <!-- 통계 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap"><img src="_etc/books/통계.png" alt="통계" class="cover"></div>
        <div class="title">통계</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column"></div>
      </div>
    </div>
  </div>

  <!-- 설정 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap"><img src="_etc/books/설정_.png" alt="설정" class="cover"></div>
        <div class="title">설정</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column">
          <div class="column">
            <div class="category">기본</div>
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
      </div>
    </div>
  </div>

  <!-- 시스템 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap"><img src="_etc/books/시스템.png" alt="시스템" class="cover"></div>
        <div class="title">시스템</div>
      </div>
      <div class="book-card-back">
        <div class="meta two-column"></div>
      </div>
    </div>
  </div>

</div>
