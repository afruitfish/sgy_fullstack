# 基于百度大脑做node AI 应用

 - node 项目搭建 project 开发工绪
    1. 运行在后端
    npm 命令集
    - npm init 初始化命令
        package.json
        scripts
        -y (默认)
    - npm run dev 
        node index.js 
    - npm yarn 都叫包管理工具 
        大量第三方 库
    - npm i -g baidu-aip-sdk
        安装 全局
        不带 -g 为当前项目
    - node_modules 目录
- AI 作为黑盒子 
    SDK 
- fs 模块
    1. 语言内置模块
        fs.readFile/writeFile/isDirectory/status
    2. url,callback 异步
        先处理错误，err第一位
        data 数据 