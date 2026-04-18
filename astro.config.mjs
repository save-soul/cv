// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-02-15 修改者：配置国际化支持、Markdown处理和集成插件
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './src/utils/remarkReadingTime.ts'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeExternalLinks from 'rehype-external-links'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	site: 'https://zwg.me/',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh-cn'],
		routing: {
			prefixDefaultLocale: false
		}
	},
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		mdx(),
		icon(),
		sitemap({
			// 根据 i18n 配置生成多语言 sitemap
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en-US',
					'zh-cn': 'zh-CN'
				}
			},
			// 自定义过滤函数，可排除特定页面
			filter: (page) => {
				// 排除 manifest.json 等非页面路由
				return !page.includes('/manifest.json')
			}
		})
	],
	markdown: {
		remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: '_blank',
					rel: ['nofollow, noopener, noreferrer']
				}
			]
		],
		remarkRehype: {
			footnoteLabelProperties: {
				className: ['']
			}
		}
	},
	prefetch: true
})
