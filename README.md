# dxy-ui
Learn how to build UI Toolkit based on vue. Js


### 一.环境搭建
> 1.初始化项目
>> npm init(创建package.json)
> 
> 2.安装webpack
>> 项目多了node_modules文件夹
>
> 3.配置基本webpack
>> 将webpack相关配置文件放在build目录中,在build目录中创建webpack.base.conf.js,webpack.dev.conf.js,webpack.prod.conf.js,build.js
>>>webpack.base.conf.js是最基础的打包配置,是开发环境和生产环境都要用到的配置
> 
>>>webpack.dev.conf.js开发环境要使用的配置
> 
>>>webpack.prod.conf.js生产环境要使用的而配置
> 
>>>build.js通过node接口进行打包的脚本
>
> 4.引入基础的 Loader
>> babel-loader
>>>首先安装 *babel-loader*、*babel-preset-env* 和 *babel-core*。需要注意的是，如果你的 *babel-loader* 是 7.x 版本的话，你的 *babel-core* 必须是 6.x 版本；如果你的 *babel-loader* 是 8.x 版本的话，你的 *babel-core* 必须是 7.x 版本。如果不这样的话，Webpack 会报错。
>>> babel-preset-env用来帮助我们配置babel,我们只需要告诉它我们的目标运行环境.
>>> babel-loader 可是使用他对js文件进行编译,并且可以指定哪些需要编译哪些不需要
>
>> file-loader
>>> 首先安装 *file-loader*,可以用来对图片\文件的压缩,打包.
>
>> vue-loader
>>> 首先安装 *vue-loader*, *css-loader*, *vue-style-loader*, *vue-template-compiler*
>>> 这里我们需要配置 *resolve.alias*, 不然webpack无法找到Vue模块
>>>> 首先在文件头部引入: 
>>>> `const VueLoaderPlugin = require('vue-loader/lib/plugin')`
>>>> 然后在 *plugins* 数组中添加这个插件对象
>>>> `new VueLoaderPlugin()`
>>>> 随后将resolve.alias配置如下
>>>> (```)
        {
          'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve(__dirname, '../src'),
        }
      (```)
>>>> 还要添加一个resolve.extensions属性,可以用来省略文件后缀
>>>> `extensions:['*', '.js', '.json', '.vue']`
>>>> 然后修改index.js文件如下
```

import Vue from 'vue';
import App from './App';

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});

```
>>>> 同级目录下创建App.vue
```
<template>
<h1>Hello World!</h1>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 16px;
}
</style>
```
>> 注: css-loader版本过高会导致webpack构建报错,暂不知道什么原因,我之前是2.x改为0.28就好了.而且在webpack+babel打包构建,可能会抛出语法错误.因为新的构建方式会加入"use stric",为了解决安装如下,
>>>    "babel-preset-stage-2": "6.22.0",
>>>    "babel-plugin-dynamic-import-node": "1.2.0",
>>>    "babel-plugin-transform-es2015-modules-commonjs": "6.26.0",
>> 并在.babelrc 中添加
```
"env": {
  "test": {
    "presets": ["env", "stage-2"],
    "plugins": ["transform-es2015-modules-commonjs", "dynamic-import-node"]
  }
}
```





