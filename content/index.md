---
title: LX2 매뉴얼 V2
date:
version: v2.0.0
build: 2025.09.19
---

<!-- 모바일 가독성 & 반응형 타이포GRAPHY -->
<style>
/* === Mobile Typography Tuning (≤980px) === */
@media (max-width: 980px){
  /* 히어로 레이아웃: 세로 스택 + 중앙 정렬 */
  .lx2-hero__inner{
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    row-gap: 16px;
  }

  /* 강제 줄바꿈 제거로 자연스러운 줄바꿈 유도 */
  .lx2-hero__content br{ display:none; }

  /* 제목: 화면에 맞춰 유동 크기 */
  .lx2-hero__title{
    margin: 0;
    font-size: clamp(24px, 7vw, 36px);
    line-height: 1.15;
    letter-spacing: -0.015em;
  }
  /* 강조 텍스트(LX2)만 살짝 더 크게 */
  .lx2-title-accent{
    display:inline;
    font-size: 1.12em;
    letter-spacing: -0.01em;
  }

  /* 설명문: 가독 폭 제한 + 유동 크기 */
  .lx2-hero__desc{
    margin: 8px 0 0;
    font-size: clamp(14px, 3.8vw, 16px);
    line-height: 1.5;
    max-width: 32ch;
    opacity: .95;
  }

  /* 카드 텍스트도 유동 크기 */
  .lx2-card__text{
    font-size: clamp(13px, 3.6vw, 15px);
  }

  /* 하단 문구/버튼은 흐름에 맞게 배치 */
  .lx2-hero__copyright{
    position: static;
    margin-top: 12px;
    text-align: center;
    font-size: clamp(12px, 3.2vw, 13px);
  }
  .lx2-pdf-card{
    position: static;
    margin-top: 10px;
  }
  .lx2-pdf-card .pdf-link{
    font-size: clamp(11px, 3.2vw, 13px);
    padding: 6px 10px;
  }

  /* 아이콘 살짝 축소(옵션) */
  .lx2-card__icon{ width: 34px; height: 34px; }
  .lx2-card__icon svg{ width: 20px; height: 20px; }
}
</style>

<!-- 햄버거 메뉴 버튼 -->
<button class="lx2-hamburger" aria-label="메뉴 열기" aria-controls="quartz-sidebar-left" aria-expanded="false">
  <span class="bars"><span></span></span>
</button>

<script>
(() => {
  const body = document.body
  const btn  = document.querySelector('.lx2-hamburger')
  const drawer = document.querySelector('.sidebar.left')        // 좌측 메뉴 컨테이너
  let overlay = document.getElementById('menuOverlay')          // 이미 있으면 재사용

  if (!btn || !drawer) return

  // 오버레이가 없으면 생성
  if (!overlay) {
    overlay = document.createElement('div')
    overlay.id = 'menuOverlay'
    document.body.appendChild(overlay)
  }

  const open = () => {
    body.classList.add('menu-open')
    btn.classList.add('is-active')
    btn.setAttribute('aria-expanded', 'true')
    body.style.overflow = 'hidden' // 배경 스크롤 잠금
  }
  const close = () => {
    body.classList.remove('menu-open')
    btn.classList.remove('is-active')
    btn.setAttribute('aria-expanded', 'false')
    body.style.overflow = ''
  }
  const toggle = () => (body.classList.contains('menu-open') ? close() : open())

  btn.addEventListener('click', toggle)
  overlay.addEventListener('click', close)

  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close() })

  drawer.addEventListener('click', (e) => {
    const a = e.target.closest('a')
    if (a) close()
  })

  const mq = window.matchMedia('(min-width: 981px)')
  const onChange = () => { if (mq.matches) close() }
  mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange)
})();
</script>

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
    © 4CSoft. All Rights Reserved. <br><
