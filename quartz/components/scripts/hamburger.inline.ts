// 햄버거 메뉴 스크립트
export default function hamburgerScript() {
  const hamburgerToggle = document.querySelector('.hamburger-toggle') as HTMLButtonElement
  const mobileMenuContainer = document.querySelector('.mobile-menu-container') as HTMLElement
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay') as HTMLElement
  const body = document.body

  if (!hamburgerToggle || !mobileMenuContainer || !mobileMenuOverlay) {
    return
  }

  // 메뉴 열기
  function openMenu() {
    body.classList.add('menu-open')
    hamburgerToggle?.setAttribute('aria-expanded', 'true')
    mobileMenuContainer?.setAttribute('aria-hidden', 'false')
    
    // 스크롤 방지
    body.style.overflow = 'hidden'
    
    // 애니메이션 완료 후 포커스 설정
    setTimeout(() => {
      const firstButton = mobileMenuContainer?.querySelector('.mobile-menu-button') as HTMLElement
      if (firstButton) {
        firstButton.focus()
      }
    }, 400)
  }

  // 메뉴 닫기
  function closeMenu() {
    body.classList.remove('menu-open')
    hamburgerToggle?.setAttribute('aria-expanded', 'false')
    mobileMenuContainer?.setAttribute('aria-hidden', 'true')
    
    // 스크롤 복원
    body.style.overflow = ''
    
    // 햄버거 버튼으로 포커스 복원
    setTimeout(() => {
      hamburgerToggle?.focus()
    }, 400)
  }

  // 햄버거 버튼 클릭 이벤트
  hamburgerToggle.addEventListener('click', () => {
    const isOpen = body.classList.contains('menu-open')
    if (isOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  })

  // 오버레이 클릭으로 메뉴 닫기
  mobileMenuOverlay.addEventListener('click', closeMenu)

  // 키보드 네비게이션
  document.addEventListener('keydown', (e) => {
    if (body.classList.contains('menu-open')) {
      if (e.key === 'Escape') {
        closeMenu()
      } else if (e.key === 'Tab') {
        // 메뉴 내에서 탭 순환
        const focusableElements = mobileMenuContainer?.querySelectorAll(
          'button, input, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>
        
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0]
          const lastElement = focusableElements[focusableElements.length - 1]
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }
  })

  // 윈도우 리사이즈 시 메뉴 닫기
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800 && body.classList.contains('menu-open')) {
      closeMenu()
    }
  })

  // 메뉴 버튼 클릭 피드백 함수
  function addClickFeedback(button: HTMLElement) {
    button.classList.add('clicked')
    setTimeout(() => {
      button.classList.remove('clicked')
    }, 200)
  }

  // 메뉴 버튼들에 클릭 이벤트 추가
  const menuButtons = document.querySelectorAll('.mobile-menu-button')
  menuButtons.forEach(button => {
    button.addEventListener('click', () => {
      addClickFeedback(button as HTMLElement)
    })
  })

  // 팝업 열기 함수들을 전역으로 등록
  ;(window as any).openExplorerPopup = () => {
    const explorerPopup = document.querySelector('.mobile-popup[data-type="explorer"]') as HTMLElement
    if (explorerPopup) {
      explorerPopup.classList.add('open')
      explorerPopup.setAttribute('aria-hidden', 'false')
      document.body.style.overflow = 'hidden'
    }
  }

  ;(window as any).openGraphPopup = () => {
    const graphPopup = document.querySelector('.mobile-popup[data-type="graph"]') as HTMLElement
    if (graphPopup) {
      graphPopup.classList.add('open')
      graphPopup.setAttribute('aria-hidden', 'false')
      document.body.style.overflow = 'hidden'
    }
  }
}
