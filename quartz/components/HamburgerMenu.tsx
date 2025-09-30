import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/hamburger.scss"
import script from "./scripts/hamburger.inline"

export default (() => {
  const HamburgerMenu: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`hamburger-menu ${displayClass ?? ""}`}>
        {/* 햄버거 토글 버튼 */}
        <button 
          class="hamburger-toggle"
          aria-label="메뉴 열기"
          aria-expanded="false"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>

        {/* 모바일 메뉴 오버레이 */}
        <div class="mobile-menu-overlay" aria-hidden="true"></div>

        {/* 모바일 메뉴 컨테이너 */}
        <div class="mobile-menu-container" aria-hidden="true">
          <div class="mobile-menu-content">
            {/* 상단 컨트롤 (검색, 다크모드, 리더모드) */}
            <div class="mobile-menu-top-controls">
              <div class="mobile-search-container">
                <div class="search">
                  <input 
                    type="text" 
                    placeholder="검색..." 
                    aria-label="검색"
                  />
                </div>
              </div>
              
              <div class="mobile-control-buttons">
                <button class="mobile-control-btn" aria-label="다크모드 토글">
                  <span>🌙</span>
                </button>
                <button class="mobile-control-btn" aria-label="리더모드 토글">
                  <span>📖</span>
                </button>
              </div>
            </div>

            {/* 네비게이션 버튼들 */}
            <div class="mobile-menu-navigation">
              <button 
                class="mobile-menu-button"
                onClick={() => (window as any).openExplorerPopup?.()}
                aria-label="목록 팝업 열기"
              >
                <span class="button-icon">📁</span>
                <span class="button-text">파일 목록 보기</span>
              </button>
              
              <button 
                class="mobile-menu-button"
                onClick={() => (window as any).openGraphPopup?.()}
                aria-label="관계도 팝업 열기"
              >
                <span class="button-icon">🕸️</span>
                <span class="button-text">관계도 보기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  HamburgerMenu.css = style
  HamburgerMenu.afterDOMLoaded = script as any
  return HamburgerMenu
}) satisfies QuartzComponentConstructor
