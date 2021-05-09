老vue项目添加typescript支持

先说一下我的vue版本
```
"vue": "^2.6.11"
@vue/cli 4.5.11
```
### 1.添加依赖（我用yarn，也可以用npm）
```
yarn add --dev @types/node typescript ts-loader
```
### 2.初始化`tsconfig.json`
执行`yarn run tsc --init`，自动生成配置文件

### 3.修改webpack配置
- 1.根目录创建`config`文件夹
- 2.`config`目录下创建`vue.config.js`
- 3.添加`ts-loader`，[vue-cli配置webpack文档](https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F)
```js
// config/vue.config.js
module.exports= {
    chainWebpack: config => {
        config.module.test(/\.tsx?$/).use('ts-loader')
        .loader('ts-loader').end();
    }
}
```
### 4.根目录下添加ts声明文件
格式以`my-`开头，例如`my-xxx.d.ts`

声明文件的目的只告诉ts，遇到`.vue`文件交给vue进行处理
```js
// my-vue.d.ts
import Vue from 'vue';

declare module '*.vue'{
    export default Vue;
}
```

### 5.运行，测试
`yarn run serve`