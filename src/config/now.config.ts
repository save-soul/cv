// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-02-17 修改者：从 resume.config.ts 拆分出现在配置
import type { NowConfig } from '@/types'

export const nowConfig: NowConfig = {
	'zh-cn': {
		reading: [
			"《一百个人的十年》[冯骥才]", 
			"《中国近百年政治史》[李剑农]"
		],
		sports: [
			"步行", "跑步"
		],
		address: '中国上海市'
	},
	en: {
		reading: [
			"A Provincial Party Committee Team [Feng Jicai]",
			"The Political History of China, 1840–1928[Li Jiannong]"
		],
		sports: [
			"hike", "run"
		],
		address: 'Shanghai City, China'
	}
}