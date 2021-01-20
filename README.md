# react 框架封装
## 项目创建
    ├──  yarn create create-app 项目名称  --template typescript
## 目录结构
    ├── README.md 项目介绍

    ├── package.json npm包配置文件，里面定义了项目的npm脚本，依赖包等信息

    ├── package-lock 上线锁定版本信息

    ├── gitignore 这个是git的选择性上传的配置文件

    ├── src 源码目录 这个目录里边放的是我们开放的源代码

        │ ├── assets 目录里面放所有的资源文件。

        │ ├── components 目录里存放公共的组件。

        │ ├── pages 目录里存放公共的组件。

            | ├── menusize antd的Menu列表

        │ ├── utils 用于定义公共工具函数。

            │ ├── store redux的封装文件。

            │ ├── router router导航的封装文件。

            │ ├── axios axios封装文件。

        │ ├── App.css

        │ ├── App.js 这个文件相当于一个方法模块，也是一个简单的模块化编程

        │ ├── index.css

        │ ├── index.js 这个就是项目的入口文件  因为当前项目中使用了antd 使用严格模式会出现警告，因此删除了<StrictMode> 取消了严格模式

        │ ├── serviceWorker.js 这个是用于写移动端开发的，PWA必须用到这个文件，有了这个文件，就相当于有了离线浏览的功能。当前项目中没有 该文件已被删除

        | ├── reportWebVital.js 性能监测工具，在此未做深入研究 具体可以百度搜索https://bit.ly/CRA-vitals 该文件已被删除

        | ├── setupTests.js 单元测试工具，在此未做深入研究 具体可以百度搜索https://github.com/testing-library/jest-dom 该文件已被删除

        | ├── App.test.js 简单而完整的React DOM测试实用程序 具体可以搜索https://www.npmjs.com/package/@testing-library/react。 该文件已被删除

        | ├── react-app-env.d.ts 简单而完整的React DOM测试实用程序 具体可以搜索https://www.npmjs.com/package/@testing-library/react。 该文件已被删除

    ├── public 公共文件，里边有公用模板和图标等一些东西。
        这里提醒一下 放入public文件下的资源webpack将不会处理他。相反，它将被复制到构建文件夹中

        | ├── favicon.ico : 这个是网站或者说项目的图标，一般在浏览器标签页的左上角显示。你可以自己图标注意我之后做过测试发现你如果注释掉index.html的引入图标代码图标依旧会显示React的logo图标

        | ├── index.html : 首页的模板文件，我们可以试着改动一下，就能看到结果。 
                           注意再React中如果要引入public文件夹中的资源，需要使用名为 PUBLIC_URL 的特殊变量。例如
                           <link rel="icon" href="%PUBLIC_URL%/favicon.ico" type="image/x-icon">　　
                           官方文档详细解释：https://www.html.cn/create-react-app/docs/using-the-public-folder/                

        | ├── mainifest.json：移动端配置文件。

## 安装依赖
    ├── yarn add antd //安装antd
 