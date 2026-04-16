// 相册配置类型定义
export type GalleryImage = {
  // 图片标题
  title: string
  // 图片描述（可选）
  description?: string
  // 图片来源类型：'local' | 'remote'
  type: 'local' | 'remote'
  // 当 type 为 'local' 时，路径相对于 public/images 目录
  // 当 type 为 'remote' 时，为完整的图片 URL（图床链接）
  src: string
  // 图片替代文本
  alt: string
  // 发布时间
  date: string
  // 分类标签
  tags?: string[]
  // 缩略图URL（可选，如果不提供则使用 src）
  thumbnail?: string
}

export type LocalizedGalleryConfig = GalleryImage[]

export type GalleryConfig = {
  'zh-cn': LocalizedGalleryConfig
  en: LocalizedGalleryConfig
}
