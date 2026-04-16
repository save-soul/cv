// 相册配置类型定义

// 图片排序方式
export type GallerySortType = 'config' | 'date_desc' | 'date_asc'

// 单张图片配置
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

// 相册设置
export type GallerySettings = {
  // 排序方式：'config' | 'date_desc' | 'date_asc'
  // - config: 按 gallery.data.ts 中的配置顺序
  // - date_desc: 按日期降序（最新在前）
  // - date_asc: 按日期升序（最旧在前）
  sortBy?: GallerySortType
}

// 本地化相册配置
export type LocalizedGalleryConfig = {
  images: GalleryImage[]
  settings?: GallerySettings
}

export type GalleryConfig = {
  'zh-cn': LocalizedGalleryConfig
  en: LocalizedGalleryConfig
}
