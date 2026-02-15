// 原项目：astro-theme-pure (Apache-2.0)
// 原作者：cworld1 (https://github.com/cworld1)
// 修改记录：
// 2026-02-15 修改者：添加国际化文本，包括页脚的原项目署名和协议信息
export type Locale = 'en' | 'zh-cn'

export const defaultLocale: Locale = 'en'

export const i18n = {
  'zh-cn': {
    // 网站信息
    site: {
      title: '赵文光 | 个人简历',
      description: '赵文光的个人简历'
    },
    // 页脚
    footer: {
      copyright: '版权所有',
      builtWith: '使用',
      and: '和',
      built: '构建',
      lastUpdated: '最后更新于',
      basedOn: '基于',
      licensedUnder: '遵循'
    },
    // 章节标题
    sections: {
      about: '关于我',
      experience: '工作经历',
      education: '教育背景',
      projects: '项目经历',
      certificates: '证书',
      skills: '技能',
      now: '现在',
      contact: '联系方式'
    },
    // 技能子分类
    skillCategories: {
      language: '语言',
      frontend: '前端',
      backend: '后端',
      others: '其他'
    },
    // 现在子分类
    nowCategories: {
      reading: '阅读',
      sports: '运动',
      address: '地址'
    },
    // 其他常用文本
    common: {
      viewMore: '查看更多',
      download: '下载',
      email: '邮箱',
      phone: '电话',
      address: '地址',
      website: '网站',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      inDevelopment: '正在开发中...',
      ageUnit: '岁'
    }
  },
  en: {
    // Site information
    site: {
      title: 'Zhao Wenguang | Resume',
      description: 'Zhao Wenguang\'s Resume'
    },
    // Footer
    footer: {
      copyright: 'Copyright',
      builtWith: 'Built with',
      and: 'and',
      built: 'built',
      lastUpdated: 'Last updated',
      basedOn: 'Based on',
      licensedUnder: 'licensed under'
    },
    // Section titles
    sections: {
      about: 'About Me',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      certificates: 'Certificates',
      skills: 'Skills',
      now: 'Now',
      contact: 'Contact'
    },
    // Skill categories
    skillCategories: {
      language: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      others: 'Others'
    },
    // Now categories
    nowCategories: {
      reading: 'Reading',
      sports: 'Sports',
      address: 'Address'
    },
    // Other common texts
    common: {
      viewMore: 'View More',
      download: 'Download',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      website: 'Website',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      inDevelopment: 'In Development...',
      ageUnit: ' years old'
    }
  }
} as const

export function getI18nText(key: string, locale: Locale): string {
  const keys = key.split('.')
  let value: any = i18n[locale]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}