import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../plugins/emitters/ogImage"
export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // Url of current page
    const socialUrl =
      fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug!)

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={cfg.pageTitle} />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />
        
        {/* Force light mode only */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.documentElement.setAttribute('saved-theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
          `
        }} />
        
        {/* Mobile optimization script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Touch optimization
            if ('ontouchstart' in window) {
              document.documentElement.classList.add('touch-device');
            }
            
            // Prevent zoom on input focus (iOS)
            document.addEventListener('touchstart', function() {}, {passive: true});
            
            // Optimize scrolling
            document.documentElement.style.scrollBehavior = 'smooth';
          `
        }} />
        
        {/* Hamburger menu script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // 햄버거 메뉴 기능 (모바일 전용)
            document.addEventListener('DOMContentLoaded', function() {
              // 모바일에서만 햄버거 메뉴 동작
              if (window.innerWidth > 768) return;
              
              const toggle = document.getElementById('hamburger-toggle');
              const overlay = document.getElementById('hamburger-overlay');
              const nav = document.getElementById('hamburger-nav');
              const close = document.getElementById('hamburger-close');
              const menuItems = document.querySelectorAll('.hamburger-menu-item');
              
              if (!toggle || !overlay || !nav) return;
              
              // 현재 페이지 URL 가져오기
              const currentPath = window.location.pathname;
              
              // 현재 페이지 메뉴 아이템 활성화
              menuItems.forEach(item => {
                if (item.getAttribute('href') === currentPath || 
                    (currentPath === '/' && item.getAttribute('href') === '/') ||
                    (currentPath !== '/' && item.getAttribute('href')?.includes(currentPath.replace('/', '')))) {
                  item.classList.add('active');
                }
              });
              
              // 메뉴 열기
              function openMenu() {
                toggle.classList.add('active');
                overlay.classList.add('active');
                toggle.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
              }
              
              // 메뉴 닫기
              function closeMenu() {
                toggle.classList.remove('active');
                overlay.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                toggle.focus();
              }
              
              // 토글 버튼 클릭
              toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (toggle.classList.contains('active')) {
                  closeMenu();
                } else {
                  openMenu();
                }
              });
              
              // 닫기 버튼 클릭
              if (close) {
                close.addEventListener('click', function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  closeMenu();
                });
              }
              
              // 오버레이 클릭으로 닫기
              overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                  closeMenu();
                }
              });
              
              // ESC 키로 닫기
              document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && overlay.classList.contains('active')) {
                  closeMenu();
                }
              });
              
              // 메뉴 아이템 클릭 시 닫기
              menuItems.forEach(item => {
                item.addEventListener('click', function() {
                  if (item.getAttribute('href') !== currentPath) {
                    setTimeout(closeMenu, 150);
                  }
                });
              });
              
              // 윈도우 리사이즈 시 메뉴 닫기
              window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && overlay.classList.contains('active')) {
                  closeMenu();
                }
              });
            });
          `
        }} />

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
