# 电商小程序开发
   前端

   - 前端框架 vant
      1. npm i @vant/weapp -s --production 来自有赞,微信生态为长
      2. npm init -y 安装第三方插件
      3. 构建
         miniprogram_npm 
         @vant/weapp/button/index
   - API在哪里
      商品列表
      apifm-wxapic提供数据
   - 电商项目感觉
      搜索
      导航
      banners
      推荐
      商品列表
   - 总结一下搜索体验 
      placeholder + padding-left + bindinput + bindConfirm + search 图标

- 业务
   1. 搜索
   2. tabber (前端)  条件筛选业务(后端查询参数？order=price)
   3. 列表业务 wx:for
               data:{
                  goods:[]
               }
      apifm
      /goods?order=&page=${n}&size=20   []; keyword
      
