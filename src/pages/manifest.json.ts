import type { APIRoute } from 'astro'
import { i18n } from '@/i18n'

export const GET: APIRoute = ({ params, request }) => {
  // 获取当前语言，如果没有指定则默认为英文
  const url = new URL(request.url)
  const pathname = url.pathname
  const isZhCN = pathname.startsWith('/zh-cn/')
  
  const locale = isZhCN ? 'zh-cn' : 'en'
  
  const manifest = {
    name: i18n[locale].site.pages.home,
    short_name: isZhCN ? '赵文光' : 'Zhao Wenguang',
    icons: [
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/favicon/apple-touch-icon.png',
        sizes: '1350x1350',
        type: 'image/png'
      },
      {
        src: '/favicon/favicon.ico',
        sizes: '512x512',
        type: 'image/x-icon'
      }
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone'
  }

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}