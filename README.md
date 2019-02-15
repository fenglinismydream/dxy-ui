# dxy-ui
Learn how to build UI Toolkit based on vue. Js


### 1.环境搭建
> 1.初始化项目
>> npm init(创建package.json)
> 
> 2.安装webpack
>> 项目多了node_modules文件夹
>
> 3.配置基本webpack
>> 将webpack相关配置文件放在build目录中,在build目录中创建webpack.base.conf.js,webpack.dev.conf.js,webpack.prod.conf.js,build.js
>>>webpack.base.conf.js是最基础的打包配置,是开发环境和生产环境都要用到的配置
>>>webpack.dev.conf.js开发环境要使用的配置
>>>webpack.prod.conf.js生产环境要使用的而配置
>>>build.js通过node接口进行打包的脚本
