// 모바일 팝업 스크립트
export default function mobilePopupScript() {
  const popups = document.querySelectorAll('.mobile-popup') as NodeListOf<HTMLElement>
  const closeButtons = document.querySelectorAll('.popup-close') as NodeListOf<HTMLButtonElement>

  // 팝업 열기 함수
  function openPopup(popup: HTMLElement | null) {
    if (!popup) return
    popup.classList.add('open')
    popup.setAttribute('aria-hidden', 'false')
    document.body.style.overflow = 'hidden'
  }

  // 팝업 닫기 함수
  function closePopup(popup: HTMLElement | null) {
    if (!popup) return
    popup.classList.remove('open')
    popup.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = ''
  }

  // 모든 팝업 닫기
  function closeAllPopups() {
    popups.forEach(popup => closePopup(popup))
  }

  // 닫기 버튼 이벤트
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popup = button.closest('.mobile-popup') as HTMLElement
      closePopup(popup)
    })
  })

  // 팝업 배경 클릭으로 닫기
  popups.forEach(popup => {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        closePopup(popup)
      }
    })
  })

  // ESC 키로 팝업 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllPopups()
    }
  })

  // 윈도우 리사이즈 시 팝업 닫기
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
      closeAllPopups()
    }
  })
}
