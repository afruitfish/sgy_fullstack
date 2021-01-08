# 向樱空学习 技术实力

    通过源码和成功方法
1. 框架
 weui 让小程序更像原生框架
 比 vant 小一些

2. 导航的自定义
3. 全局引入组件
  app.js  app.wxss  app.json
4. 全局启用下拉刷新 onPulldownRefresh
    耗时操作,stop 模仿app中下拉操作
    有点鲁莽这应该只在有列表页面启用
5. 图片都放image会让程序变大 放到cdn
  减少小程序体积
6. color-ui 好,随心随性
  flex justify-center padding
  text-white text-blue
  margin-tb-sm lg text-xl