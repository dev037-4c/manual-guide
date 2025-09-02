---
title: LX2 매뉴얼 목차
---
<style>
  .book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }

  /* 카드 컨테이너 */
  .book-card {
    background: transparent;
    width: 200px;
    height: 260px;
    perspective: 1000px; /* 원근감 */
    margin: 0 auto;
  }

  /* 내부 래퍼 */
  .book-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  /* hover 시 뒤집힘 */
  .book-card:hover .book-card-inner {
    transform: rotateY(180deg);
  }

  .book-card-front,
  .book-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
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
    background: #ffff;
  }

  /* 뒷면 */
  .book-card-back {
    background: linear-gradient(135deg, #fffff);
    color: #111;
    transform: rotateY(180deg);
    text-align: center;
    font-size: 14px;
  }

  .book-card-back a.card-back-link {
	  display: block;
	  width: 100%;
	  height: 100%;
	  color: inherit; /* 글씨 색 유지 */
	  text-decoration: none; /* 밑줄 제거 */
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
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

.book-card-back .meta a {
  display: block;         /* 한 줄씩 배치 */
  color: inherit;         /* 글씨 색 유지 */
  text-decoration: none;  /* 밑줄 제거 */
  margin-bottom: 6px;     /* 줄 간격 */
  font-weight: 500;
}

.book-card-back .meta a:last-child {
  margin-bottom: 0;       /* 마지막 항목은 margin 제거 */
}

.book-card-back .meta a:hover {
  text-decoration: underline;
}

.book-card-back .meta .category {
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 4px;
  font-size: 13px;
}

.book-card-back .meta.flex-container {
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  gap: 20px; /* 왼쪽/오른쪽 간격 */
  text-align: left; /* 텍스트 왼쪽 정렬 */
}

.book-card-back .meta.flex-column {
  display: flex;
  flex-direction: column;
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

<!-- 책 2 -->
<div class="book-card">
  <div class="book-card-inner">
    <div class="book-card-front">
      <div class="cover-wrap">
        <img src="_etc/books/member.png" alt="회원" class="cover">
      </div>
      <div class="title">회원</div>
    </div>
    <div class="book-card-back">
  <div class="meta flex-container">
    <!-- 왼쪽 영역 -->
    <div class="flex-column">
      <div class="category">전체</div>
      <a href="회원-학습자.md">회원-학습자</a>
      <a href="회원-교수자.md">회원-교수자</a>
      <a href="회원-조교.md">회원-조교</a>
      <a href="회원-소속담당자.md">회원-소속 담당자</a>
      <a href="회원-운영관리자.md">회원-운영관리자</a>

      <div class="category">소속</div>
      <a href="소속관리.md">소속관리</a>
    </div>

    <!-- 오른쪽 영역 -->
    <div class="flex-column">
      <div class="category">문자알림</div>
      <a href="문자알림-발송하기.md">문자알림-발송하기</a>
      <a href="문자알림-발송내역.md">문자알림-발송내역</a>
      <a href="문자알림-자주쓰는메시지.md">문자알림-자주 쓰는 메시지</a>
    </div>
  </div>
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
        <a href="3.과정.md" class="card-back-link">
          <div class="meta">분류 / 템플릿 / 운영과정 / 패키지 / 기수 / 현황</div>
          <div class="status-badge dot"></div>
        </a>
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
        <a href="4.콘텐츠.md" class="card-back-link">
          <div class="meta">학습 / 시험 / 과제 / 설문 / 토론</div>
          <div class="status-badge dot"></div>
        </a>
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
        <a href="5.사이트.md" class="card-back-link">
          <div class="meta">메뉴관리 / 팝업 / 배너 / 게시판 / 템플릿 / 메인화면 표시 / 분석</div>
          <div class="status-badge dot"></div>
        </a>
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
        <a href="6.서비스.md" class="card-back-link">
          <div class="meta">커뮤니티 / 포인트 / 이벤트 / 쿠폰 / 일반설문 / 일반시험 / 마이크로러닝</div>
          <div class="status-badge dot"></div>
        </a>
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
        <a href="7.시설.md" class="card-back-link">
          <div class="meta">강의동 / 강의동 예약 / 스튜디오 / 스튜디오 예약</div>
          <div class="status-badge dot"></div>
        </a>
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
        <a href="8.주문결제.md" class="card-back-link">
          <div class="meta">결제현황 / 환불취소</div>
          <div class="status-badge dot"></div>
        </a>
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
        <a href="9.통계.md" class="card-back-link">
          <div class="meta">대시보드 / 학습현황 / 운영현황 / 수료현황 / 이메일발송 / SMS발송 / 설문현황 / 검색 키워드 / 분석</div>
          <div class="status-badge dot"></div>
        </a>
      </div>
    </div>
  </div>

</div>
