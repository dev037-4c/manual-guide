---
title: LX2 매뉴얼 목차
---
<style>
.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  justify-items: center;
}

/* 카드 컨테이너 */
.book-card {
  width: 200px;
  height: 260px;
  perspective: 1000px; 
}

/* 내부 카드 */
.book-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

/* hover 시 뒤집기 */
.book-card:hover .book-card-inner {
  transform: rotateY(180deg);
  }

/* 앞/뒷면 공통 */
.book-card-front,
.book-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 앞면 */
.book-card-front {
  background: #fff;
  padding: 8px;
}

/* 뒷면 */
.book-card-back {
  background: linear-gradient(135deg, #4facfe 0%, #7366ff 100%);
  color: #111;
  transform: rotateY(180deg);
  padding: 12px;
  text-align: center;
  font-size: 14px;
}

/* 표지 */
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

/* 제목 */
.title {
  margin-top: 6px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
}

/* 메타 정보 */
.meta {
  margin-top: 6px;
  font-size: 12px;
  color: #111;
  text-align: center;
}

/* 상태 아이콘 */
.status-badge.dot::before {
  content: "🔴";
}

.status-badge.x::before {
  content: "❌";
}

</style>

<div class="book-grid">

  <!-- 책 1 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <a href="1.메인메뉴.md">
            <img src="_etc/books/mainmenu.png" alt="메인메뉴" class="cover">
          </a>
        </div>
        <div class="title"><a href="1.메인메뉴.md">메인메뉴</a></div>
      </div>
      <div class="book-card-back">
        <div class="meta">메인메뉴 삭제 후 index.md로 교체</div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <!-- 책 2 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <a href="2.회원.md">
            <img src="_etc/books/member.png" alt="회원" class="cover">
          </a>
        </div>
        <div class="title"><a href="2.회원.md">회원</a></div>
      </div>
      <div class="book-card-back">
        <div class="meta">전체 / 소속 / 문자알림 / 이력관리</div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <!-- 책 3 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <a href="3.과정.md">
            <img src="_etc/books/process.png" alt="과정" class="cover">
          </a>
        </div>
        <div class="title"><a href="3.과정.md">과정</a></div>
      </div>
      <div class="book-card-back">
        <div class="meta">분류 / 템플릿 / 운영과정 / 패키지 / 기수 / 현황</div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <!-- 책 4 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <a href="4.콘텐츠.md">
            <img src="_etc/books/content.png" alt="콘텐츠" class="cover">
          </a>
        </div>
        <div class="title"><a href="4.콘텐츠.md">콘텐츠</a></div>
      </div>
      <div class="book-card-back">
        <div class="meta">학습 / 시험 / 과제 / 설문 / 토론</div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <!-- 책 5 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <a href="5.사이트.md">
            <img src="_etc/books/site.png" alt="사이트" class="cover">
          </a>
        </div>
        <div class="title"><a href="5.사이트.md">사이트</a></div>
      </div>
      <div class="book-card-back">
        <div class="meta">메뉴관리 / 팝업 / 배너 / 게시판 / 템플릿 / 메인화면 표시 / 분석</div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <!-- 책 6 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <a href="6.서비스.md">
            <img src="_etc/books/service.png" alt="서비스" class="cover">
          </a>
        </div>
        <div class="title"><a href="6.서비스.md">서비스</a></div>
      </div>
      <div class="book-card-back">
        <div class="meta">커뮤니티 / 포인트 / 이벤트 / 쿠폰 / 일반설문 / 일반시험 / 마이크로러닝</div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <!-- 책 7 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <a href="7.시설.md">
            <img src="_etc/books/facility.png" alt="시설" class="cover">
          </a>
        </div>
        <div class="title"><a href="7.시설.md">시설</a></div>
      </div>
      <div class="book-card-back">
        <div class="meta">강의동 / 강의동 예약 / 스튜디오 / 스튜디오 예약</div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <!-- 책 8 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <a href="8.주문결제.md">
            <img src="_etc/books/orderpayment.png" alt="주문결제" class="cover">
          </a>
        </div>
        <div class="title"><a href="8.주문결제.md">주문결제</a></div>
      </div>
      <div class="book-card-back">
        <div class="meta">결제현황 / 환불취소</div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

  <!-- 책 9 -->
  <div class="book-card">
    <div class="book-card-inner">
      <div class="book-card-front">
        <div class="cover-wrap">
          <a href="9.통계.md">
            <img src="_etc/books/statistice.png" alt="통계" class="cover">
          </a>
        </div>
        <div class="title"><a href="9.통계.md">통계</a></div>
      </div>
      <div class="book-card-back">
        <div class="meta">대시보드 / 학습현황 / 운영현황 / 수료현황 / 이메일발송 / SMS발송 / 설문현황 / 검색 키워드 / 분석</div>
        <div class="status-badge dot"></div>
      </div>
    </div>
  </div>

</div>
