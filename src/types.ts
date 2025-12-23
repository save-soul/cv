export type Language = {
	lang: string
	url: string
}

export type Locale = 'en' | 'zh-cn'
export type SiteConfig = {
	author: string
	title: string
	year: string
	description: string
	keywords: string[]
	lang: string
	ogLocale: string
	date: {
		locale: string | string[] | undefined
		options: Intl.DateTimeFormatOptions
	}
	blog: string
	umamiID: string
	otherLanguages:Language[]
}

export type LocalizedSiteConfig = {
	'zh-cn': SiteConfig
	en: SiteConfig
}

export type MenuLink = {
	title: string
	path: string
}

export type LocalizedMenuLinks = {
	'zh-cn': MenuLink[]
	en: MenuLink[]
}

export type LocalizedResumeConfig = {
	name: string
	gender: string
	birthday: string
	job: string
	address: string
	email: string
	about: string
	experiences:{
		company: string
		image: string
		imageAlt: string
		office: string
		date: string
		charges:string[]
	}[]
	educations:{
		school: string
		image: string
		imageAlt: string
		major:string
		date: string
		knowledges:string[]
	}[]
	projects:{
		title: string
		description: string
		image: string
		imageAlt: string
		link: string
	}[]
	certificates:{
		title: string
		date: string
		description: string
		image: string
		imageAlt: string
		link: string
	}[]
	skills:{
		language: string[]
		frontend: string[]
		backend: string[]
		others: string[]
	}
	now:{
		reading: string[]
		sports: string[]
		address: string
	}
}

export type ResumeConfig = {
	'zh-cn': LocalizedResumeConfig
	en: LocalizedResumeConfig
}

export type PaginationLink = {
	url: string
	text?: string
	srLabel?: string
}

export type SiteMeta = {
	description?: string
	ogImage?: string | undefined
	articleDate?: string | undefined
}
