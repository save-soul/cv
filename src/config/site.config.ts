// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-02-17 修改者：从 site.config.ts 拆分出站点配置
import type { LocalizedSiteConfig } from '@/types'

export const siteConfig: LocalizedSiteConfig = {
	'zh-cn': {
		// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
		author: '赵文光',
		// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
		title: '赵文光 | 个人简历',
		// Meta property used as the default description meta property
		description: '赵文光的个人在线简历网站，基于Astro构建，支持中英文双语。展示工作经历、教育背景、专业技能、项目成果和资格证书，响应式设计适配各种设备。',
		keywords: [
			'赵文光',
			'个人简历',
			'在线简历',
			'简历网站',
			'Astro简历',
			'中英文简历',
			'响应式简历'
		],
		year: "2025",
		// HTML lang property, found in src/layouts/Base.astro L:18
		lang: 'zh-CN',
		// Meta property, found in src/components/BaseHead.astro L:42
		ogLocale: 'zh-CN',
		// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
		date: {
			locale: 'zh-CN',
			options: {
				day: 'numeric',
				month: 'short',
				year: 'numeric'
			}
		},
		blog: "https://likeit.dev",
		umamiID: 'd19eb582-64d8-43df-abce-c00f541ac833',
		otherLanguages: [
			{
				lang: 'en',
				url: '/'
			}
		],
		pageDescriptions: {
			home: '赵文光的个人在线简历网站，基于Astro构建，支持中英文双语。展示工作经历、教育背景、专业技能、项目成果和资格证书，响应式设计适配各种设备。',
			record: '赵文光的个人时间线记录，包括出生、高考、本科毕业和入职等重要人生节点。展示个人成长历程和关键事件的时间线。',
			read: '赵文光的阅读书单和书籍推荐，包括《局外人》、《邓小平时代》等经典著作的评分和详细介绍。分享个人阅读体验和书籍评价。',
			about: '了解本站基于astro-theme-pure主题开发，遵循Apache License 2.0协议，查看详细的修改记录和版权声明。项目来源、许可证信息及主要修改内容介绍。',
			now: '赵文光的当前状态页面，记录当前阅读的书籍、运动活动和所在地。展示个人当前的生活状态和兴趣爱好。'
		},
		schemaOrg: {
			person: {
				name: '赵文光',
				alternateName: 'Zhao Wenguang',
				jobTitle: '软件工程师',
				description: '赵文光的个人在线简历网站，基于Astro构建，支持中英文双语。展示工作经历、教育背景、专业技能、项目成果和资格证书，响应式设计适配各种设备。',
				knowsAbout: ['软件开发', 'Web开发', 'Astro', 'JavaScript', 'TypeScript']
			},
			website: {
				name: '赵文光 | 个人简历',
				description: '赵文光的个人在线简历网站，基于Astro构建，支持中英文双语。展示工作经历、教育背景、专业技能、项目成果和资格证书，响应式设计适配各种设备。'
			}
		}
	},
	en: {
		author: 'Zhao Wenguang',
		title: 'Zhao Wenguang | Resume',
		description: 'Zhao Wenguang\'s online resume built with Astro. Bilingual Chinese/English site showcasing work experience, education, skills, projects, and certificates with responsive design.',
		keywords: [
			'Zhao Wenguang',
			'resume',
			'online resume',
			'CV website',
			'Astro resume',
			'bilingual resume',
			'responsive resume'
		],
		year: "2025",
		lang: 'en',
		ogLocale: 'en_US',
		date: {
			locale: 'en-US',
			options: {
				day: 'numeric',
				month: 'short',
				year: 'numeric'
			}
		},
		blog: "https://likeit.dev",
		umamiID: 'd19eb582-64d8-43df-abce-c00f541ac833',
		otherLanguages: [
			{
				lang: 'zh-CN',
				url: '/zh-cn'
			}
		],
		pageDescriptions: {
			home: 'Zhao Wenguang\'s online resume built with Astro. Bilingual Chinese/English site showcasing work experience, education, skills, projects, and certificates with responsive design.',
			record: 'Personal timeline record of Zhao Wenguang, including birth, college entrance exam, undergraduate graduation and career start. Shows personal growth journey and key life events timeline.',
			read: 'Reading list and book recommendations by Zhao Wenguang, including classics like The Stranger and Deng Xiaoping and the Transformation of China with ratings and detailed reviews. Shares personal reading experiences.',
			about: 'Learn about this site built on astro-theme-pure theme, following Apache License 2.0, view detailed modification records and copyright statements. Project source, license information and main modifications.',
			now: 'Current status page of Zhao Wenguang, recording currently reading books, sports activities and location. Shows personal current life status and interests.'
		},
		schemaOrg: {
			person: {
				name: 'Zhao Wenguang',
				alternateName: '赵文光',
				jobTitle: 'Software Engineer',
				description: 'Zhao Wenguang\'s online resume built with Astro. Bilingual Chinese/English site showcasing work experience, education, skills, projects, and certificates with responsive design.',
				knowsAbout: ['Software Development', 'Web Development', 'Astro', 'JavaScript', 'TypeScript']
			},
			website: {
				name: 'Zhao Wenguang | Resume',
				description: 'Zhao Wenguang\'s online resume built with Astro. Bilingual Chinese/English site showcasing work experience, education, skills, projects, and certificates with responsive design.'
			}
		}
	}
}