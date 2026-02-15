// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-02-15 修改者：添加国际化工具函数，支持中英文切换
import type { Locale, LocalizedResumeConfig } from '@/types'
import { resumeConfig } from '../site.config'
import { i18n, defaultLocale } from '@/i18n'

export function getCurrentLocale(url?: URL): Locale {
  // 服务端渲染时从URL路径获取语言
  if (url) {
    const pathname = url.pathname
    if (pathname.startsWith('/zh-cn')) {
      return 'zh-cn'
    }
    return 'en'
  }
  
  // 客户端从URL获取语言
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname
    if (pathname.startsWith('/zh-cn')) {
      return 'zh-cn'
    }
    return 'en'
  }
  
  return defaultLocale
}

export function getLocalizedResumeConfig(locale?: Locale): LocalizedResumeConfig {
  const currentLocale = locale || getCurrentLocale()
  return resumeConfig[currentLocale]
}

export function getI18nText(key: string, locale?: Locale): string {
  const currentLocale = locale || getCurrentLocale()
  const keys = key.split('.')
  let value: any = i18n[currentLocale]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}

export function isCurrentLocale(locale: Locale): boolean {
  return getCurrentLocale() === locale
}

export function getAlternateLanguageUrl(currentUrl: URL): string {
  const currentLocale = getCurrentLocale(currentUrl)
  const pathname = currentUrl.pathname
  
  if (currentLocale === 'zh-cn') {
    // Switch to English: remove /zh-cn prefix
    if (pathname.startsWith('/zh-cn')) {
      const newPath = pathname.replace('/zh-cn', '') || '/'
      return newPath
    }
    return '/'
  } else {
    // Switch to Chinese: add /zh-cn prefix
    const newPath = '/zh-cn' + (pathname === '/' ? '' : pathname)
    return newPath
  }
}