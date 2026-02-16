// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-02-15 修改者：添加简历配置、国际化站点配置和菜单链接
import type { ResumeConfig, LocalizedSiteConfig, LocalizedMenuLinks, RecordConfig, ReadConfig } from '@/types'
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

export const readConfig: ReadConfig = {
	'zh-cn': [
		{
			title: "《局外人》",
			description: "《局外人》是法国作家加缪的成名作，同时也是存在主义文学的杰出作品之一，该书以一种客观记录式的“零度风格”，粗线条地描述了主人公默尔索在荒谬的世界中经历的种种荒谬的事，以及自身的荒诞体验。从参加母亲的葬礼到偶然成了杀人犯，再到被判处死刑，默尔索似乎对一切都无动于衷，他像一个象征性的符号，代表了一种普遍的存在，又像是一个血红色的灯塔，具有高度的警示性。然而，局外人现象的产生无疑是由这个世界本身所孕育的，默尔索的存在有其深刻的外部原因。",
			score: 10,
			link: "https://book.douban.com/subject/4908885/"
		},
		{
			title: "《邓小平时代》",
			description: "邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。",
			score: 9.9,
			link: "https://book.douban.com/subject/20424526/"
		}
	],
	en: [
		{
			title: "The Stranger",
			description: "The Stranger is the debut masterpiece of French writer Albert Camus, as well as one of the seminal works of existentialist literature. Written in an objective, documentary-style \"zero degree style\", the book outlines in broad strokes the absurd events that the protagonist Meursault experiences in an absurd world, along with his own existential experience of the absurd. From attending his mother's funeral, to accidentally becoming a murderer, and then being sentenced to death, Meursault seems indifferent to everything. He acts as a symbolic emblem representing a universal human condition, and also like a blood-red beacon with profound cautionary significance. Yet the emergence of the \"outsider\" phenomenon is undoubtedly bred by the world itself, and Meursault's existence has its deep-seated external causes.",
			score: 10,
			link: "https://book.douban.com/subject/4908885/"
		},
		{
			title: "Deng Xiaoping and the Transformation of China",
			description: `Deng Xiaoping profoundly shaped the course of both Chinese and world history, and transformed the destiny of every Chinese person in the contemporary era. To interpret Deng Xiaoping's political career and the logic behind his actions is to understand contemporary China, as well as the historical upheavals that underlie the fate of individuals. The monumental work Deng Xiaoping and the Transformation of China, completed by Professor Ezra F. Vogel of Harvard University after a decade of painstaking research, delivers a panoramic account of Deng Xiaoping's tumultuous life and China's arduous and eventful journey of reform and opening up. Grounded in a wealth of historical materials, pivotal domestic and overseas research findings, archival documents, and numerous exclusive interviews, the author conducts an in-depth analysis of Deng Xiaoping's personal character and governing style, and presents a comprehensive and original interpretation of the history of China's reform and opening up. Featuring a vast array of figures and events, the book includes a meticulous examination of the relationships between key figures including Mao Zedong, Zhou Enlai, Deng Xiaoping and Chen Yun, as well as in-depth analysis of landmark events and critical decisions: the Third Plenary Session of the 11th Central Committee, the transition of political power, the establishment of China-US diplomatic relations, initial explorations of political reform, the special economic zones, the"one country, two systems"principle, and Deng Xiaoping's southern tour in 1992. With rigorous argumentation, a clear narrative framework, incisive viewpoints and vivid narration, the book strives to root the words and deeds of historical figures in their specific historical context. It consistently offers unique and thought-provoking insights into the historical 进程 of reform and opening up, and has been widely hailed as a"monumental"work in the field of Deng Xiaoping studies. To understand this book is to understand this defining period of history, and to grasp the present and future of ourselves who"still live in the Deng Xiaoping era".`,
			score: 9.9,
			link: "https://book.douban.com/subject/20424526/"
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
		description: '这是赵文光的个人在线简历网站，基于 Astro 构建，支持中英文双语切换。网站完整展示工作经历、教育背景、专业技能、项目成果及资格证书，界面简洁美观，响应式设计适配各种设备，方便查阅与分享。',
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
			home: '这是赵文光的个人在线简历网站，基于 Astro 构建，支持中英文双语切换。网站完整展示工作经历、教育背景、专业技能、项目成果及资格证书，界面简洁美观，响应式设计适配各种设备，方便查阅与分享。',
			record: '赵文光的个人时间线记录，包括出生、高考、本科毕业和入职等重要人生节点。展示个人成长历程和关键事件的时间线。',
			read: '赵文光的阅读书单和书籍推荐，包括《局外人》、《邓小平时代》等经典著作的评分和详细介绍。分享个人阅读体验和书籍评价。',
			about: '了解本站基于astro-theme-pure主题开发，遵循Apache License 2.0协议，查看详细的修改记录和版权声明。项目来源、许可证信息及主要修改内容介绍。',
			now: '赵文光的当前状态页面，记录当前阅读的书籍、运动活动和所在地。展示个人当前的生活状态和兴趣爱好。'
		}
	},
	en: {
		author: 'Zhao Wenguang',
		title: 'Zhao Wenguang | Resume',
		description: 'Personal online resume website of Zhao Wenguang, built with Astro, supporting both Chinese and English. Features work experience, education, skills, projects and certificates with a clean, responsive design for easy viewing and sharing.',
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
				lang: 'zh-cn',
				url: '/zh-cn'
			}
		],
		pageDescriptions: {
			home: 'Personal online resume website of Zhao Wenguang, built with Astro, supporting both Chinese and English. Features work experience, education, skills, projects and certificates with a clean, responsive design for easy viewing and sharing.',
			record: 'Personal timeline record of Zhao Wenguang, including birth, college entrance exam, undergraduate graduation and career start. Shows personal growth journey and key life events timeline.',
			read: 'Reading list and book recommendations by Zhao Wenguang, including classics like The Stranger and Deng Xiaoping and the Transformation of China with ratings and detailed reviews. Shares personal reading experiences.',
			about: 'Learn about this site built on astro-theme-pure theme, following Apache License 2.0, view detailed modification records and copyright statements. Project source, license information and main modifications.',
			now: 'Current status page of Zhao Wenguang, recording currently reading books, sports activities and location. Shows personal current life status and interests.'
		}
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