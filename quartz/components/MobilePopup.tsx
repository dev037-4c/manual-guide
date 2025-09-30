import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/mobile-popup.scss"
import script from "./scripts/mobile-popup.inline"

export default (() => {
  const MobilePopup: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`mobile-popup-container ${displayClass ?? ""}`}>
        {/* Explorer 팝업 */}
        <div class="mobile-popup" data-type="explorer" aria-hidden="true">
          <div class="popup-header">
            <h3>파일 목록</h3>
            <button class="popup-close" aria-label="팝업 닫기">×</button>
          </div>
          <div class="popup-content">
            <div id="explorer-popup-content">
              {/* Explorer 컴포넌트가 여기에 렌더링됩니다 */}
            </div>
          </div>
        </div>

        {/* Graph 팝업 */}
        <div class="mobile-popup" data-type="graph" aria-hidden="true">
          <div class="popup-header">
            <h3>관계도</h3>
            <button class="popup-close" aria-label="팝업 닫기">×</button>
          </div>
          <div class="popup-content">
            <div id="graph-popup-content">
              {/* Graph 컴포넌트가 여기에 렌더링됩니다 */}
            </div>
          </div>
        </div>
      </div>
    )
  }

  MobilePopup.css = style
  MobilePopup.afterDOMLoaded = script as any
  return MobilePopup
}) satisfies QuartzComponentConstructor
