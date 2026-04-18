// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-02-15 修改者：配置国际化支持、Markdown处理和集成插件
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
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
			filename: 'sitemap.xml',
			filter: () => true,
			customPages: [
				'https://zwg.me/',
				'https://zwg.me/about/',
				'https://zwg.me/gallery/',
				'https://zwg.me/now/',
				'https://zwg.me/read/',
				'https://zwg.me/record/',
				'https://zwg.me/zh-cn/',
				'https://zwg.me/zh-cn/about/',
				'https://zwg.me/zh-cn/gallery/',
				'https://zwg.me/zh-cn/now/',
				'https://zwg.me/zh-cn/read/',
				'https://zwg.me/zh-cn/record/'
			]
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
