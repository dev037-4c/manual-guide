---
title: LX2 매뉴얼 V2
date:
version: v2.0.0
build: 2025.09.19
---

<!-- ✅ 통합 스타일 -->
<style>
/* ===== Hero 기본 ===== */
.lx2-hero {
  position: relative;
  padding: clamp(40px, 6vw, 72px) 0;
  background: linear-gradient(135deg, #1f2a44 0%, #293b65 60%, #3556b1 100%);
  color: #fff;
}

.lx2-hero__inner {
  width: min(1180px, 92vw);
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-template-columns: 1.15fr 1fr;
  column-gap: clamp(20px, 5vw, 48px);
}

.lx2-hero__content { display: grid; row-gap: 10px; }
.lx2-hero__title {
  margin: 0;
  font-size: clamp(28px, 4.4vw, 44px);
  line-height: 1.15;
}
.lx2-hero__desc {
  margin: 8px 0 0;
  font-size: clamp(14px, 1.6vw, 18px);
  opacity: .92;
}

/* ===== 카드 컨테이너/카드 기본(데스크톱: 격자) ===== */
.lx2-hero__cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: clamp(14px, 2.2vw, 20px);
  align-items: stretch;
}

.lx2-card {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 18px;
  text-decoration: none;
  color: inherit;
  background: rgba(255,255,255,.08);
  -webkit-backdrop-filter: saturate(160%) blur(6px);
  backdrop-filter: saturate(160%) blur(6px);
  transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease;
  box-shadow: 0 8px 24px rgba(0,0,0,.14);
}
.lx2-card:hover { transform: translateY(-2px); background: rgba(255,255,255,.12); }
.lx2-card__icon { display: inline-flex; }
.lx2-card__text { line-height: 1.25; }

/* ===== PDF 버튼 카드 ===== */
.lx2-pdf-card {
  margin: 16px 0 0;
}
.pdf-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  background: #ffffff1a;
  color: #fff;
  padding: 10px 14px;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,.16);
  transition: transform .2s ease, background .2s ease;
}
.pdf-link:hover { transform: translateY(-2px); background: #ffffff29; }
.pdf-text { font-weight: 600; }
.pdf-version {
  margin-left: 6px;
  font-size: 12px;
  opacity: .9;
}

/* ===== 저작권 ===== */
.lx2-hero__copyright {
  margin-top: 16px;
  font-size: 12px;
  opacity: .9;
  line-height: 1.5;
}

/* ===== 모바일(≤980px): 가로 스크롤 정렬 ===== */
@media (max-width: 980px) {
  .lx2-hero__inner {
    grid-template-columns: 1fr;
    row-gap: 22px;
  }

  .lx2-hero__cards {
    display: flex;                 /* 격자 → 가로 플렉스 */
    overflow-x: auto;
    overflow-y: hidden;
    gap: 12px;
    padding: 2px 2px 6px;
    scroll-snap-type: x mandatory; /* 카드 스냅 */
    -webkit-overflow-scrolling: touch;
  }

  .lx2-card {
    min-width: clamp(200px, 72vw, 280px); /* 화면 폭 기준 카드 폭 */
    flex: 0 0 auto;
    scroll-snap-align: start;
  }

  /* 스크롤바(가시성 최소화) */
  .lx2-hero__cards::-webkit-scrollbar { height: 6px; }
  .lx2-hero__cards::-webkit-scrollbar-thumb { background: rgba(255,255,255,.35); border-radius: 4px; }
  .lx2-hero__cards::-webkit-scrollbar-track { background: transparent; }

  /* 보조 여백 */
  .lx2-pdf-card { margin-top: 8px; }
  .lx2-hero__copyright { margin-top: 12px; }
}

/* ===== 아주 작은 화면(≤420px) 미세 튜닝 ===== */
@media (max-width: 420px) {
  .lx2-card { min-width: 86vw; padding: 12px 14px; }
  .lx2-card__text b { font-size: 0.95rem; }
}
</style>


<!-- 오버레이 -->
<div class="menu-overlay" id="menuOverlay"></div>

<section class="lx2-hero">
  <div class="lx2-hero__inner">
    <div class="lx2-hero__content">
      <h1 class="lx2-hero__title" style="color:#fff !important;-webkit-text-fill-color:#fff !important">
        통합학습관리시스템<br> 
        <span class="lx2-title-accent" style="color:#fff !important;-webkit-text-fill-color:#fff !important">
          LX2
        </span>
      </h1>
      <p class="lx2-hero__desc" style="color:#fff !important;-webkit-text-fill-color:#fff !important">
        수많은 기관에 적용되어 운영 중인 가장 안정적인<br>
        통합 교육시스템
      </p>
    </div>

    <div class="lx2-hero__cards">
      <a class="lx2-card edu" href="https://www.4csoft.com/" target="_blank">
        <span class="lx2-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="none" stroke="#2D9CDB" stroke-width="2"/>
            <text x="12" y="12" text-anchor="middle" dominant-baseline="middle" font-size="8" font-family="Arial, sans-serif" fill="#2D9CDB">4C</text>
          </svg>
        </span>
        <span class="lx2-card__text"><b>포씨소프트<br>공식 홈페이지</b></span>
      </a>

      <a class="lx2-card tech" href="https://lx2.kr/common/greeting.do" target="_blank">
        <span class="lx2-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#9B51E0"/>
            <polygon points="10,8 16,12 10,16" fill="#fff"/>
          </svg>
        </span>
        <span class="lx2-card__text"><b>LX2 체험하기</b></span>
      </a>

      <a class="lx2-card eff" href="https://www.instagram.com/4csoft_lx2/" target="_blank">
        <span class="lx2-card__icon" aria-hidden="true">
          <svg role="img" viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" border-radius="18">
            <title>Instagram</title>
            <defs>
              <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F58529"/>
                <stop offset="30%" stop-color="#DD2A7B"/>
                <stop offset="60%" stop-color="#8134AF"/>
                <stop offset="100%" stop-color="#515BD4"/>
              </linearGradient>
            </defs>
            <path fill="url(#instaGradient)" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z"/>
            <path fill="url(#instaGradient)" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instaGradient)"/>
          </svg>
        </span>
        <span class="lx2-card__text"><b>LX2 공식<br>인스타그램</b></span>
      </a>

      <a class="lx2-card sec" href="https://blog.naver.com/lx2-4cosft" target="_blank">
        <span class="lx2-card__icon" aria-hidden="true">
          <svg role="img" viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
            <title>Naver</title>
            <path d="M3 3h5.5l4.5 7V3H21v18h-5.5l-4.5-7v7H3z" fill="#03C75A"/>
          </svg>
        </span>
        <span class="lx2-card__text"><b>LX2 기능<br>가이드 블로그</b></span>
      </a>
    </div>
  </div>

  <div class="lx2-pdf-card">
    <a href="/pdfs/LX2_guide.pdf" target="_blank" class="pdf-link">
      <span class="pdf-icon">
        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#FF4B4B"/>
          <text x="12" y="16" font-size="9" font-family="Arial, sans-serif" fill="#fff" text-anchor="middle" font-weight="bold">PDF</text>
        </svg>
      </span>
      <span class="pdf-text">PDF 다운로드</span>
      <span class="pdf-version">v2.0.0</span>
    </a>
  </div>

  <div class="lx2-hero__copyright">
    본 저작물의 모든 권리는 <strong>㈜포씨소프트(4CSoft)</strong>에 있습니다.<br>
    © 4CSoft. All Rights Reserved. <br><br>2025. 09. 22
  </div>
</section>
