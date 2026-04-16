// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-04-16 修改者：添加相册配置，支持本地图片和图床链接
import type { GalleryConfig } from './gallery.config'

export const galleryConfig: GalleryConfig = {
  'zh-cn': {
    // 排序方式可选：'config' | 'date_desc' | 'date_asc'
    // - config: 按下方 images 数组的顺序
    // - date_desc: 按日期降序（最新在前）
    // - date_asc: 按日期升序（最旧在前）
    settings: {
        sortBy: 'date_desc'
    },
    images: [
      {
        title: '雁荡山之行',
        description: '项目组织团建，雁荡山一日游',
        type: 'remote',
        src: 'https://i.imgant.com/v2/itEu9Gz.jpeg',
        alt: '雁荡山风景',
        date: '2023-04-29',
        tags: ['旅行', '团建']
      },
      {
        title: '钱塘江',
        description: '60公里骑行途中，拍摄于钱塘江大桥之上。',
        type: 'remote',
        src: 'https://i.imgant.com/v2/Eq9SaAy.jpeg',
        alt: '钱塘江',
        date: '2024-05-03',
        tags: ['旅行']
      },
      {
        title: '在建中的灵江特大桥',
        description: '在建的灵江特大桥于晨雾缭绕之中',
        type: 'remote',
        src: 'https://i.imgant.com/v2/fkd9kGc.jpeg',
        alt: '灵江特大桥',
        date: '2023-01-12',
        tags: ['工作']
      }
    ]
  },
  en: {
    settings: {
      sortBy: 'config'
    },
    images: [
      {
        title: 'Yandang Mountain Trip',
        description: 'Team building trip to Yandang Mountain',
        type: 'remote',
        src: 'https://i.imgant.com/v2/itEu9Gz.jpeg',
        alt: 'Yandang Mountain scenery',
        date: '2023-04-29',
        tags: ['Travel', 'Team Building']
      },
      {
        title: 'Qiantang River',
        description: 'Taken on Qiantang River Bridge during a 60km ride.',
        type: 'remote',
        src: 'https://i.imgant.com/v2/Eq9SaAy.jpeg',
        alt: 'Qiantang River',
        date: '2024-05-03',
        tags: ['Travel']
      },
      {
        title: 'Lingjiang Grand Bridge Under Construction',
        description: 'Lingjiang Grand Bridge under construction amid morning mist.',
        type: 'remote',
        src: 'https://i.imgant.com/v2/fkd9kGc.jpeg',
        alt: 'Lingjiang Grand Bridge',
        date: '2023-01-12',
        tags: ['Work']
      }
    ]
  }
}
