import type { ResumeConfig, LocalizedSiteConfig } from '@/types'
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'

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
		about: '作为一名工地施工员，日复一日地验筋、协调班组、填写施工日志。这些琐碎而重复的工作，让我对现场的流程有了一定的了解，但也仅止于此。近年来，行业下行，项目减少，身边的同事陆续转行，留下的人则面临更重的任务与更不确定的未来。长期异地奔波，与家人聚少离多，让我不断质疑这份工作的意义。我看不清方向，也不知道该往哪里走。继续留在工地，体力和精力已不如从前；转行，又担心缺乏其他行业的技能。这种悬在半空的感觉，让我感到深深的疲惫和迷茫。',
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
				"《沧浪之水》[阎真]",
			],
			sports: [
				"跳绳",
				"拉力绳"
			],
			address: '中国上海市'
		}
	},
	en: {
		name: 'Zhao Wenguang',
		gender: 'Male',
		birthday: '2000/08/18',
		about: 'As a construction site clerk, my days are filled with the repetitive tasks of checking reinforcements, coordinating with construction teams, and filling out construction logs. While these tasks have given me a certain understanding of on-site procedures, that’s about as far as it goes. In recent years, with the industry facing a downturn and fewer projects, colleagues around me have left one after another. Those who remain are burdened with heavier workloads and a more uncertain future. The long-term pattern of working away from home, with little time spent with family, constantly makes me question the meaning of this job. I can’t see a clear path forward. Staying on the construction site is becoming physically and mentally tougher as I’m not as resilient as I used to be; yet, transitioning to another field feels risky due to a lack of skills elsewhere. This feeling of being stuck in limbo leaves me deeply weary and lost.',
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
				"Water of the Canglang River [Yan Zhen]",
			],
			sports: [
				"Jump rope​​",
				"Resistance band",
			],
			address: 'China, Shanghai'
		}
	}
}

export const menuLinks = {
	'zh-cn': [
		{
			title: '博客',
			path: 'https://likeit.dev'
		}
	],
	en: [
		{
			title: 'Blog',
			path: 'https://likeit.dev'
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
