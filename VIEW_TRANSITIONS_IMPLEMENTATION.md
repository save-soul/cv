# View Transitions 和客户端路由实现

## 概述
已成功为Astro项目实现View Transitions（视图过渡）和客户端路由机制。该实现提供了平滑的页面过渡效果，无需全页刷新。

## 主要更改

### 1. Astro配置更新 (`astro.config.mjs`)
- 添加了 `experimental.clientPrerender: true` 配置
- 启用了客户端预渲染以支持View Transitions

### 2. 基础布局更新 (`src/layouts/BaseLayout.astro`)
- 将过渡动画从 `slide` 改为 `fade`（更平滑的淡入淡出效果）
- 添加了内联JavaScript脚本处理View Transitions
- 脚本功能：
  - 检查浏览器是否支持View Transitions API
  - 拦截所有内部链接点击
  - 使用 `document.startViewTransition()` 进行平滑过渡
  - 排除外部链接和新标签页链接

### 3. CSS样式更新 (`src/styles/app.css`)
- 添加了View Transitions相关的CSS样式
- 定义了淡入淡出和滑动动画关键帧
- 添加了平滑滚动支持
- 包含减少运动偏好的媒体查询

### 4. 创建View Transitions工具脚本 (`src/utils/view-transitions.js`)
- 提供了更高级的View Transitions处理
- 包含内部链接检测逻辑
- 支持自定义过渡类
- 与现有组件集成

## 实现的功能

### 客户端路由
- 拦截所有内部链接点击
- 阻止默认的页面刷新行为
- 使用JavaScript动态更新页面内容和URL
- 保持浏览器历史记录

### 平滑过渡效果
- 淡入淡出过渡（默认）
- 支持滑动过渡
- 300毫秒的动画持续时间
- 缓动函数确保平滑性

### 智能链接处理
- 自动识别内部链接和外部链接
- 排除锚点链接（`#`）
- 排除新标签页链接（`target="_blank"`）
- 排除带有 `data-no-transition` 属性的链接

## 技术细节

### View Transitions API
使用现代的 `document.startViewTransition()` API，该API：
1. 捕获当前页面的截图
2. 执行页面更新
3. 创建新旧状态之间的动画过渡
4. 自动处理DOM更新和样式变化

### 浏览器兼容性
- 在支持View Transitions API的浏览器中工作（Chrome 111+，Edge 111+）
- 在不支持的浏览器中优雅降级为传统导航
- 通过特性检测确保兼容性

## 使用方法

### 基本使用
无需额外配置，所有内部链接自动启用View Transitions。

### 排除特定链接
```html
<a href="/external" data-no-transition>跳过过渡</a>
<a href="https://external.com" target="_blank">外部链接</a>
```

### 自定义过渡
在HTML元素上添加 `data-transition` 属性：
```html
<div data-transition="fade">淡入淡出过渡</div>
<div data-transition="slide">滑动过渡</div>
```

## 测试
1. 启动开发服务器：`bun run dev`
2. 访问 http://localhost:4321/
3. 点击导航菜单中的"Record"链接
4. 观察平滑的页面过渡效果
5. 使用浏览器后退/前进按钮测试历史记录

## 注意事项
- View Transitions API仍在实验阶段，但已被现代浏览器广泛支持
- 对于复杂动画，可能需要额外的CSS定制
- 确保页面内容在过渡期间保持可访问性
