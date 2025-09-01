---
title: LX2 매뉴얼 목차
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
  justify-content: center;
  align-items: center;
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
	    <a href="1.메인메뉴.md">
      <img src="_etc/books/mainmenu.png" alt="메인메뉴" class="cover">
      </a>
    </div>
    <div class="title"><a href="1.메인메뉴.md">메인메뉴</a></div>
    <div class="meta">메인메뉴 삭제 후 index.md로 교체</div>
    <div class="status-badge dot"></div>
  </div>

  <!-- 책 2 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="2.회원.md">
      <img src="_etc/books/member.png" alt="회원" class="cover">
      </a>
    </div>
    <div class="title"><a href="2.회원.md">회원</a></div>
    <div class="meta">전체 / 소속 / 문자알림 / 이력관리</div>
    <div class="status-badge dot"></div>
  </div>

  <!-- 책 3 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="3.과정.md">
      <img src="_etc/books/harrypotter1.jpeg" alt="과정" class="cover">
      </a>
    </div>
    <div class="title"><a href="3.과정.md">과정</a></div>
    <div class="meta">분류 / 템플릿 / 운영과정 / 패키지 / 기수 / 현황</div>
    <div class="status-badge dot"></div>
  </div>

<!-- 책 4 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="4.콘텐츠.md">
      <img src="_etc/books/content.png" alt="콘텐츠" class="cover">
      </a>
    </div>
    <div class="title"><a href="4.콘텐츠.md">콘텐츠</a></div>
    <div class="meta">학습 / 시험 / 과제 / 설문 / 토론</div>
    <div class="status-badge dot"></div>
  </div>

<!-- 책 5 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="5.사이트.md">
      <img src="_etc/books/site.png" alt="사이트" class="cover">
      </a>
    </div>
    <div class="title"><a href="5.사이트.md">사이트</a></div>
    <div class="meta">메뉴관리 / 팝업 / 배너 / 게시판 / 템플릿 / 메인화면 표시 / 분석</div>
    <div class="status-badge dot"></div>
  </div>

<!-- 책 6 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="6.서비스.md">
      <img src="_etc/books/service.png" alt="서비스" class="cover">
      </a>
    </div>
    <div class="title"><a href="6.서비스.md">서비스</a></div>
    <div class="meta">커뮤니티 / 포인트 / 이벤트 / 쿠폰 / 일반설문 / 일반시험 / 마이크로러닝</div>
    <div class="status-badge dot"></div>
  </div>

<!-- 책 7 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="7.시설.md">
      <img src="_etc/books/facility.png" alt="시설" class="cover">
      </a>
    </div>
    <div class="title"><a href="7.시설.md">시설</a></div>
    <div class="meta">강의동 / 강의동 예약 / 스튜디오 / 스튜디오 예약</div>
    <div class="status-badge dot"></div>
  </div>

<!-- 책 8 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="8.주문결제.md">
      <img src="_etc/books/harrypotter1.jpeg" alt="주문결제" class="cover">
      </a>
    </div>
    <div class="title"><a href="8.주문결제.md">주문결제</a></div>
    <div class="meta">결제현황 / 환불취소</div>
    <div class="status-badge dot"></div>
  </div>

<!-- 책 9 -->
  <div class="book-card">
    <div class="cover-wrap">
	    <a href="9.통계.md">
      <img src="_etc/books/harrypotter1.jpeg" alt="통계" class="cover">
      </a>
    </div>
    <div class="title"><a href="9.통계.md">통계</a></div>
    <div class="meta">대시보드 / 학습현황 / 운영현황 / 수료현황 / 이메일발송 / SMS발송 / 설문현황 / 검색 키워드 / 분석</div>
    <div class="status-badge dot"></div>
  </div>
