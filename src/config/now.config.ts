// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-02-17 修改者：从 resume.config.ts 拆分出现在配置
import type { NowConfig } from '@/types'

export const nowConfig: NowConfig = {
	'zh-cn': {
		reading: [
			"《怪屋》[阿加莎·克里斯蒂]"
		],
		sports: [
			"步行", "跑步", "力量训练"
		],
		address: '中国上海市'
	},
	en: {
		reading: [
			"Crooked House [Agatha Christie]"
		],
		sports: [
			"walking", "running", "strength training"
		],
		address: 'Shanghai, China'
	}
}