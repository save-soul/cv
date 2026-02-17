// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-02-17 修改者：从 site.config.ts 拆分出菜单配置
import type { LocalizedMenuLinks } from '@/types'

export const menuLinks: LocalizedMenuLinks = {
	'zh-cn': [
		{
			title: '博客',
			path: 'https://likeit.dev',
			isBlank: true
		},
		{
			title: '记录',
			path: '/zh-cn/record',
			isBlank: false
		},
		{
			title: '阅读',
			path: '/zh-cn/read',
			isBlank: false
		},
		{
			title: '现在',
			path: '/zh-cn/now',
			isBlank: false
		},
		{
			title: '关于',
			path: '/zh-cn/about',
			isBlank: false
		}
	],
	en: [
		{
			title: 'Blog',
			path: 'https://likeit.dev',
			isBlank: true
		},
		{
			title: 'Record',
			path: '/record',
			isBlank: false
		},
		{
			title: 'Read',
			path: '/read',
			isBlank: false
		},
		{
			title: 'Now',
			path: '/now',
			isBlank: false
		},
		{
			title: 'About',
			path: '/about',
			isBlank: false
		}
	]
}