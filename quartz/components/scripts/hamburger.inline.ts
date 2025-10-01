// 햄버거 메뉴 기능
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('hamburger-toggle') as HTMLButtonElement
  const overlay = document.getElementById('hamburger-overlay') as HTMLElement
  const nav = document.getElementById('hamburger-nav') as HTMLElement
  const close = document.getElementById('hamburger-close') as HTMLButtonElement
  const menuItems = document.querySelectorAll('.hamburger-menu-item') as NodeListOf<HTMLAnchorElement>
  
  if (!toggle || !overlay || !nav) return
  
  // 현재 페이지 URL 가져오기
  const currentPath = window.location.pathname
  
  // 현재 페이지 메뉴 아이템 활성화
  menuItems.forEach(item => {
    if (item.getAttribute('href') === currentPath || 
        (currentPath === '/' && item.getAttribute('href') === '/') ||
        (currentPath !== '/' && item.getAttribute('href')?.includes(currentPath.replace('/', '')))) {
      item.classList.add('active')
    }
  })
  
  // 메뉴 열기
  function openMenu() {
    toggle.classList.add('active')
    overlay.classList.add('active')
    toggle.setAttribute('aria-expanded', 'true')
    document.body.style.overflow = 'hidden'
    
    // 포커스 트랩 설정
    const focusableElements = nav.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>
    
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }
  }
  
  // 메뉴 닫기
  function closeMenu() {
    toggle.classList.remove('active')
    overlay.classList.remove('active')
    toggle.setAttribute('aria-expanded', 'false')
    document.body.style.overflow = ''
    toggle.focus()
  }
  
  // 토글 버튼 클릭
  toggle.addEventListener('click', function(e) {
    e.preventDefault()
    e.stopPropagation()
    
    if (toggle.classList.contains('active')) {
      closeMenu()
    } else {
      openMenu()
    }
  })
  
  // 닫기 버튼 클릭
  if (close) {
    close.addEventListener('click', function(e) {
      e.preventDefault()
      e.stopPropagation()
      closeMenu()
    })
  }
  
  // 오버레이 클릭으로 닫기
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      closeMenu()
    }
  })
  
  // ESC 키로 닫기
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeMenu()
    }
  })
  
  // 메뉴 아이템 클릭 시 닫기
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      // 같은 페이지 링크가 아닌 경우에만 닫기
      if (item.getAttribute('href') !== currentPath) {
        setTimeout(closeMenu, 150) // 약간의 지연으로 부드러운 전환
      }
    })
  })
  
  // 윈도우 리사이즈 시 메뉴 닫기
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && overlay.classList.contains('active')) {
      closeMenu()
    }
  })
  
  // 터치 제스처 지원 (스와이프로 닫기)
  let startX = 0
  let startY = 0
  
  nav.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
  })
  
  nav.addEventListener('touchmove', function(e) {
    if (!overlay.classList.contains('active')) return
    
    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY
    const diffX = startX - currentX
    const diffY = startY - currentY
    
    // 수평 스와이프가 수직 스와이프보다 클 때만 닫기
    if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50) {
      closeMenu()
    }
  })
})

