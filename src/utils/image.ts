import type { ImageMetadata } from 'astro'

/**
 * 获取图像导入的glob对象
 */
export function getImageGlob() {
  return import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{jpeg,jpg,png,gif}')
}

/**
 * 验证图像路径是否存在
 */
export function validateImagePath(imagePath: string | undefined, images: Record<string, () => Promise<{ default: ImageMetadata }>>) {
  if (imagePath && !images[imagePath]) {
    throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`)
  }
}

/**
 * 获取图像源函数
 */
export function getImageSource(imagePath: string | undefined, images: Record<string, () => Promise<{ default: ImageMetadata }>>) {
  if (!imagePath) return undefined
  return images[imagePath]()
}