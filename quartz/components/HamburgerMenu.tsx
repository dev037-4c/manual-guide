import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  title: string
}

const defaultOptions: Options = {
  title: "메뉴",
}

export default ((opts?: Partial<Options>) => {
  const options = { ...defaultOptions, ...opts }
  
  const HamburgerMenu: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
    return (
      <div class="hamburger-menu-container">
        <button 
          class="hamburger-menu-toggle" 
          id="hamburger-toggle"
          aria-label="메뉴 열기/닫기"
          aria-expanded="false"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
        
        <div class="hamburger-menu-overlay" id="hamburger-overlay">
          <nav class="hamburger-menu-nav" id="hamburger-nav">
            <div class="hamburger-menu-header">
              <h2>{options.title}</h2>
              <button 
                class="hamburger-menu-close" 
                id="hamburger-close"
                aria-label="메뉴 닫기"
              >
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
              </button>
            </div>
            
            <div class="hamburger-menu-content">
              <ul class="hamburger-menu-list">
                <li><a href="/" class="hamburger-menu-item">홈</a></li>
                <li><a href="/1.-회원" class="hamburger-menu-item">회원</a></li>
                <li><a href="/2.-과정" class="hamburger-menu-item">과정</a></li>
                <li><a href="/3.-콘텐츠" class="hamburger-menu-item">콘텐츠</a></li>
                <li><a href="/4.-사이트" class="hamburger-menu-item">사이트</a></li>
                <li><a href="/5.-서비스" class="hamburger-menu-item">서비스</a></li>
                <li><a href="/6.-시설" class="hamburger-menu-item">시설</a></li>
                <li><a href="/7.-주문결제" class="hamburger-menu-item">주문결제</a></li>
                <li><a href="/8.-통계" class="hamburger-menu-item">통계</a></li>
                <li><a href="/9.-설정" class="hamburger-menu-item">설정</a></li>
                <li><a href="/10.-시스템" class="hamburger-menu-item">시스템</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }

  return HamburgerMenu
}) satisfies QuartzComponentConstructor

