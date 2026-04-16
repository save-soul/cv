// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-04-16 修改者：添加相册配置，支持本地图片和图床链接
import type { GalleryConfig } from './gallery.config'

export const galleryConfig: GalleryConfig = {
  'zh-cn': [
    {
      title: '雁荡山之行',
      description: '项目组织团建，雁荡山一日游',
      type: 'remote',
      src: 'https://i.imgant.com/v2/itEu9Gz.jpeg',
      alt: '雁荡山风景',
      date: '2026-04-16',
      tags: ['旅行', '团建']
    }
  ],
  en: [
    {
      title: 'Yandang Mountain Trip',
      description: 'Team building trip to Yandang Mountain',
      type: 'remote',
      src: 'https://i.imgant.com/v2/itEu9Gz.jpeg',
      alt: 'Yandang Mountain scenery',
      date: '2026-04-16',
      tags: ['Travel', 'Team Building']
    }
  ]
}
