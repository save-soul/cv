// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-02-15 修改者：添加简历配置、国际化站点配置和菜单链接
import type { ResumeConfig, LocalizedSiteConfig, LocalizedMenuLinks, RecordConfig } from '@/types'
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'
export const recordConfig: RecordConfig = {
	'zh-cn': [
		{
			title: "入职",
			description: "入职中国建筑土木建设有限公司",
			date: "2022年7月"
		},
		{
			title: "本科毕业",
			description: "取得统招普通高等学校本科毕业证书、学士学位证书",
			date: "2022年7月"
		},
		{
			title: "参加高考",
			description: "被河南理工大学交通工程专业录取",
			date: "2018年6月7日-8日"
		},
		{
			title: "出生",
			description: "2000年8月18日凌晨3时出生",
			date: "2000年8月18日"
		}
	],
	en: [
		{
			title: "Career Start",
			description: "Started career at China Construction Civil Engineering Co., Ltd.",
			date: "July 2022"
		},
		{
			title: "Undergraduate Graduation",
			description: "Obtained undergraduate diploma and bachelor's degree certificate from a regular higher education institution",
			date: "July 2022"
		},
		{
			title: "Gaokao Participation",
			description: "Admitted to the Transportation Engineering Program at Henan Polytechnic University",
			date: "June 7-8, 2018"
		},
		{
			title: "Birth",
			description: "Born at 3:00 a.m. on August 18, 2000",
			date: "August 18, 2000"
		}
	]
}
export const siteConfig: LocalizedSiteConfig = {
	'zh-cn': {
		// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
		author: '赵文光',
		// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
		title: '赵文光 | 个人简历',
		// Meta property used as the default description meta property
		description: '赵文光的个人简历',
		keywords: [
			'赵文光',
			'个人简历',
			'土木工程',
			'施工员',
			'基础设施建设'
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
		]
	},
	en: {
		author: 'Zhao Wenguang',
		title: 'Zhao Wenguang | Resume',
		description: 'Resume of Zhao Wenguang',
		keywords: [
			'Zhao Wenguang',
			'Resume',
			'Civil Engineering',
			'Construction Worker',
			'Infrastructure Construction'
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
				lang: 'zh-cn',
				url: '/zh-cn'
			}
		]
	}
}

export const resumeConfig: ResumeConfig = {
	'zh-cn': {
		name: '赵文光',
		gender: '男',
		birthday: '2000/08/18',
		about: '2000年8月18日生于河南项城，2018年参加高考并被河南理工大学交通工程专业录取，2022年完成全日制本科学业，取得普通高等学校本科毕业证书与学士学位证书。毕业后入职中国建筑土木建设有限公司担任施工员，负责道路、桥梁工程领域，核心负责项目内业资料的规范编制、整理归档与全流程管理，严格把控资料的准确性与完整性。',
		job: '施工员',
		address: '中国河南省项城市',
		email: 'withzeal@outlook.com',
		experiences: [
			{
				company: '中国建筑土木建设有限公司',
				image: '/src/assets/cccec.jpg',
				imageAlt: 'CCCEC',
				office: '施工员',
				date: '2022年7月至今',
				charges: [
					"熟悉内业资料的编制规范和要求，能够根据规范进行资料的编制。",
					"参与项目的资料编制工作，包括道路、桥梁等多个方面。",
					"负责内业资料的整理和整理工作，确保资料的准确性和完整性。"
				]
			}
		],
		educations: [
			{
				school: '河南理工大学',
				image: '/src/assets/hpu.jpg',
				imageAlt: 'HPU',
				date: '2018年9月 - 2022年6月',
				major: '交通工程',
				knowledges: [
					"交通工程基础理论",
					"交通工程专业知识",
					"道路桥梁工程",
				]
			}
		],
		projects: [
			{
				title: 'AstroPaper博客中文版',
				description: 'AstroPaper博客的中文版，使用Astro构建，美观、SEO友好，更适合中国人使用。',
				image: '',
				imageAlt: 'AstroPaper博客中文版',
				link: 'https://codeberg.org/blue-cape/astro-paper-zh'
			}
		],
		certificates: [
			{
				title: '普通话水平测试等级证书·二级甲等',
				date: '2021年12月11日',
				description: '普通话水平测试（Putonghua Shuiping Ceshi；PSC）是对应试人运用普通话的规范程度、熟练程度的口语考试。考试形式为口试。普通话水平等级分为三级六等，即一、二、三级，每个级别再分出甲乙两个等次；一级甲等为最高，三级乙等为最低。普通话水平测试不是口才的评定，而是对应试人掌握和运用普通话所达到的规范程度的测查和评定，是应试人的汉语标准语测试。应试人在运用普通话口语进行表达过程中所表现的语音、词汇、语法规范程度，是评定其所达到的水平等级的重要依据。',
				image: '/src/assets/psc.png',
				imageAlt: '普通话水平测试等级证书',
				link: 'https://www.cltt.org/#/webHome'
			}
		],
		skills: {
			language: [
				"汉语"
			],
			frontend: [
				"HTML",
				"CSS",
				"JavaScript",
				"Astro",
				"Nuxt.js",
				"Vue"
			],
			backend: [
				"Go",
				"Python",
				"C/C++",
			],
			others: [
				"Flutter",
			]
		},
		now: {
			reading: [
				"《省委班子》[许开祯]",
			],
			sports: [
				"步行", "跑步"
			],
			address: '中国河南省项城市'
		}
	},
	en: {
		name: 'Zhao Wenguang',
		gender: 'Male',
		birthday: '2000/08/18',
		about: 'Born on August 18, 2000 in Xiangcheng, Henan Province. He took the National College Entrance Examination (Gaokao) in 2018 and was admitted to the Transportation Engineering major at Henan Polytechnic University. In 2022, he completed his full-time undergraduate studies and obtained the undergraduate diploma and bachelor\'s degree certificate from a regular higher education institution. After graduation, he joined China Construction Civil Engineering Co., Ltd. as a Construction Worker, focusing on the field of road and bridge engineering. His core responsibilities include the standardized compilation, sorting and archiving, as well as full-process management of project internal documentation, with strict control over the accuracy and completeness of all materials.',
		job: 'Construction Worker',
		address: 'Xiangcheng, Henan, China',
		email: 'withzeal@outlook.com',
		experiences: [
			{
				company: 'China Construction Civil Engineering Co., Ltd.',
				image: '/src/assets/cccec.jpg',
				imageAlt: 'CCCEC',
				office: 'Construction Worker',
				date: 'July 2022 - Present',
				charges: [
					"Familiar with the compilation standards and requirements of internal documentation, able to compile materials according to specifications.",
					"Participate in project documentation work, including roads, bridges and other aspects.",
					"Responsible for organizing and managing internal documentation to ensure accuracy and completeness."
				]
			}
		],
		educations: [
			{
				school: 'Henan Polytechnic University',
				image: '/src/assets/hpu.jpg',
				imageAlt: 'HPU',
				date: 'September 2018 - June 2022',
				major: 'Traffic Engineering',
				knowledges: [
					"Traffic Engineering Fundamentals",
					"Traffic Engineering Professional Knowledge",
					"Road and Bridge Engineering",
				]
			}
		],
		projects: [
			{
				title: 'AstroPaper Blog Chinese Version',
				description: 'Chinese version of AstroPaper blog, built with Astro, beautiful, SEO-friendly, more suitable for Chinese users.',
				image: '',
				imageAlt: 'AstroPaper Blog Chinese Version',
				link: 'https://codeberg.org/blue-cape/astro-paper-zh'
			}
		],
		certificates: [
			{
				title: 'Putonghua Proficiency Test Certificate · Level 2A',
				date: 'December 11, 2021',
				description: 'The Putonghua Proficiency Test (PSC) is an oral examination that tests the standardization and proficiency of candidates in using Putonghua. The test format is oral. Putonghua proficiency levels are divided into three levels and six grades, namely levels one, two, and three, with each level further divided into grades A and B; Level 1A is the highest, and Level 3B is the lowest. The Putonghua proficiency test is not an assessment of eloquence, but a test and evaluation of the degree of standardization that candidates achieve in mastering and using Putonghua, which is a test of candidates\' Chinese standard language. The degree of standardization in pronunciation, vocabulary, and grammar that candidates demonstrate in the process of using Putonghua for oral expression is an important basis for evaluating the level they achieve.',
				image: '/src/assets/psc.png',
				imageAlt: 'Putonghua Proficiency Test Certificate',
				link: 'https://www.cltt.org/#/webHome'
			}
		],
		skills: {
			language: [
				"Chinese"
			],
			frontend: [
				"HTML",
				"CSS",
				"JavaScript",
				"Astro",
				"Nuxt.js",
				"Vue"
			],
			backend: [
				"Go",
				"Python",
				"C/C++",
			],
			others: [
				"Flutter",
			]
		},
		now: {
			reading: [
				"A Provincial Party Committee Team [Xu Kaizhen]",
			],
			sports: [
				"hike", "run"
			],
			address: 'Xiangcheng City, Henan Province, China'
		}
	}
}

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
			title: 'About',
			path: '/about',
			isBlank: false
		}
	]
}

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ['dracula', 'github-light'],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`
		}
		// return default selector
		return `[data-theme="${theme.name}"]`
	},
	useThemedScrollbars: false,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: 'none'
		},
		uiLineHeight: 'inherit',
		codeFontSize: '0.875rem',
		codeLineHeight: '1.7142857rem',
		borderRadius: '4px',
		codePaddingInline: '1rem',
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
	}
}