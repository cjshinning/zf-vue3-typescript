## 安装typescript
- npm install typescript -g
- tsc --int 生成配置文件

- 希望可以直接运行ts（测试）
- code runner + npm install ts-node -g

> 全局编译，code runner 用node环境来执行ts
 


## 构建工具处理ts
- webpack 、 rollup
- 解析ts的方式，两种方式，ts插件来解析，也可以通过babel来解析
- rollup 一般情况会采用 rollup-plugin-typescript2
- webpack ts-loader / babel-pugin-typescript