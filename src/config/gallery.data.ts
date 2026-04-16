// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-04-16 修改者：添加相册配置，支持本地图片和图床链接
import type { GalleryConfig } from './gallery.config'

export const galleryConfig: GalleryConfig = {
  'zh-cn': [
    {
      title: '项目截图',
      description: '个人作品集网站截图',
      type: 'local',
      src: '/images/project-screenshot.jpg',
      alt: '项目截图',
      date: '2026-04-10',
      tags: ['项目', '作品']
    },
    {
      title: '风景摄影',
      description: '周末外出拍摄的自然风景',
      type: 'remote',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      alt: '自然风景',
      date: '2026-04-08',
      tags: ['风景', '自然']
    },
    {
      title: '城市夜景',
      description: '城市灯光与建筑的结合',
      type: 'remote',
      src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800',
      alt: '城市夜景',
      date: '2026-04-05',
      tags: ['城市', '夜景']
    },
    {
      title: '咖啡时光',
      description: '工作之余的休闲时刻',
      type: 'remote',
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
      alt: '咖啡',
      date: '2026-04-01',
      tags: ['生活', '休闲']
    },
    {
      title: '技术会议',
      description: '参加技术分享会的留影',
      type: 'local',
      src: '/images/tech-meetup.jpg',
      alt: '技术会议',
      date: '2026-03-28',
      tags: ['技术', '会议']
    },
    {
      title: '旅行记忆',
      description: '云南旅行拍摄的蓝天白云',
      type: 'remote',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      alt: '旅行风景',
      date: '2026-03-20',
      tags: ['旅行', '风景']
    }
  ],
  en: [
    {
      title: 'Project Screenshot',
      description: 'Personal portfolio website screenshot',
      type: 'local',
      src: '/images/project-screenshot.jpg',
      alt: 'Project Screenshot',
      date: '2026-04-10',
      tags: ['Project', 'Work']
    },
    {
      title: 'Landscape Photography',
      description: 'Nature photography from weekend outing',
      type: 'remote',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      alt: 'Nature Landscape',
      date: '2026-04-08',
      tags: ['Nature', 'Landscape']
    },
    {
      title: 'City Night View',
      description: 'City lights and architecture',
      type: 'remote',
      src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800',
      alt: 'City Night View',
      date: '2026-04-05',
      tags: ['City', 'Night']
    },
    {
      title: 'Coffee Time',
      description: 'Relaxing moments between work',
      type: 'remote',
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
      alt: 'Coffee',
      date: '2026-04-01',
      tags: ['Life', 'Leisure']
    },
    {
      title: 'Tech Conference',
      description: 'Photo from tech meetup',
      type: 'local',
      src: '/images/tech-meetup.jpg',
      alt: 'Tech Conference',
      date: '2026-03-28',
      tags: ['Tech', 'Conference']
    },
    {
      title: 'Travel Memory',
      description: 'Blue sky and white clouds from Yunnan trip',
      type: 'remote',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      alt: 'Travel Landscape',
      date: '2026-03-20',
      tags: ['Travel', 'Landscape']
    }
  ]
}
