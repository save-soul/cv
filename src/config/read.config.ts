// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-02-17 修改者：从 site.config.ts 拆分出阅读配置
import type { ReadConfig } from '@/types'

export const readConfig: ReadConfig = {
	'zh-cn': [
		{
			title: "《邓小平时代》",
			opinion: "主要写了邓小平以及在其领导下的变革中的中国，记录的邓小平比我之前想象中的邓小平来说显得更平凡、真实。另外，作者有时在评价邓小平时会拉踩一下前任。😂",
			score: 9.9,
			link: "https://book.douban.com/subject/20424526/"
		},
    {
      title:"《汴京之围》",
      opinion:"讲述了北宋如何在3年内从奢侈繁华到靖康之耻的过程，相对来说没那么枯燥，可以详细了解这段历史。可惜本书主要讲述靖康之耻，北宋灭亡，两帝北上后的南宋建立过程一笔带过。"
    }
	],
	en: [
		{
			title: "Deng Xiaoping and the Transformation of China",
			opinion: `It mainly focuses on Deng Xiaoping and China’s transformation under his leadership. The portrayal of Deng Xiaoping in the book feels more ordinary and authentic than the image I had before. Also, the author sometimes takes subtle jabs at his predecessors when evaluating him.😂`,
			score: 9.9,
			link: "https://book.douban.com/subject/20424526/"
		},
    {
      title: "1126 Bianjing: Foreign Affairs, Wars and People of the Late Northern Song Dynasty",
      opinion: `It depicts how the prosperous Northern Song Dynasty collapsed into the Jingkang Humiliation within just three years. The narrative is far from tedious and offers a thorough look into this chapter of history. Regrettably, the book centers heavily on the fall of Bianjing and the Northern Song’s demise, barely touching on the establishment of the Southern Song after the two emperors were captured and exiled northward.`,
      score: null
    }
	]
}