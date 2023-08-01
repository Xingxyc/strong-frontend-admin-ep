## 技术栈

| 框架 | 说明 | 版本 |
| --- | --- | --- |
| [Vue](https://staging-cn.vuejs.org/) | Vue 框架 | 3.3.4 |
| [Vite](https://cn.vitejs.dev//) | 开发与构建工具 | 4.4.7 |
| [Element Plus](https://element-plus.org/zh-CN/) | Element Plus | 2.3.8 |
| [TypeScript](https://www.typescriptlang.org/docs/) | JavaScript 的超集 | 5.1.6 |
| [pinia](https://pinia.vuejs.org/) | Vue 存储库 替代 vuex5 | 2.1.6 |
| [vueuse](https://vueuse.org/) | 常用工具集 | 10.2.1 |
| [vue-i18n](https://kazupon.github.io/vue-i18n/zh/introduction.html/) | 国际化 | 9.2.2 |
| [vue-router](https://router.vuejs.org/) | Vue 路由 | 4.2.4 |
| [unocss](https://uno.antfu.me/) | 原子 css | 0.54.0 |
| [iconify](https://icon-sets.iconify.design/) | 在线图标库 | 3.1.1 |
| [wangeditor](https://www.wangeditor.com/) | 富文本编辑器 | 5.1.23 |

## 开发工具

推荐 VS Code 开发，配合插件如下：

| 插件名                        | 功能                        |
| ----------------------------- | --------------------------- |
| TypeScript Vue Plugin (Volar) | 用于 TypeScript 的 Vue 插件 |
| Vue Language Features (Volar) | Vue3.0 语法支持             |
| unocss                        | unocss for vscode           |
| Iconify IntelliSense          | Iconify 预览和搜索          |
| i18n Ally                     | 国际化智能提示              |
| Stylelint                     | Css 格式化                  |
| Prettier                      | 代码格式化                  |
| ESLint                        | 脚本代码检查                |
| DotENV                        | env 文件高亮                |

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
