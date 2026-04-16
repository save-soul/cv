import { siteConfig } from '@/config'
import type { Locale } from '@/types'

// 默认使用中文配置

export function getFormattedDate(
	date: string | number | Date,
	options?: Intl.DateTimeFormatOptions,
	locale?: Locale
) {
	const currentSiteConfig = locale ? siteConfig[locale] : siteConfig['zh-cn']
	
	if (typeof options !== 'undefined') {
		return new Date(date).toLocaleDateString(currentSiteConfig.date.locale, {
			...(currentSiteConfig.date.options as Intl.DateTimeFormatOptions),
			...options
		})
	}

	const dateFormat = new Intl.DateTimeFormat(currentSiteConfig.date.locale, currentSiteConfig.date.options)
	return dateFormat.format(new Date(date))
}
