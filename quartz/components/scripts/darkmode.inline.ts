// 다크모드 비활성화 - 항상 라이트모드로 강제 설정
const currentTheme = "light"
document.documentElement.setAttribute("saved-theme", currentTheme)
document.documentElement.setAttribute("data-theme", "light")

const emitThemeChangeEvent = (theme: "light" | "dark") => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  // 다크모드 비활성화 - 모든 테마 변경 기능 제거
  // 라이트모드로 강제 유지
  document.documentElement.setAttribute("saved-theme", "light")
  document.documentElement.setAttribute("data-theme", "light")
  localStorage.setItem("theme", "light")
  
  // 다크모드 버튼 이벤트 리스너 제거
  for (const darkmodeButton of document.getElementsByClassName("darkmode")) {
    darkmodeButton.style.display = "none"
  }
})
