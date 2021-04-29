# 什么是前端路由
    路由描述的是UPL和UI之间的映射关系,这种映射关系是单向的，URL变化引起UI更新，而且无需刷新

# 如何实现前端路由
核心问题：
    1. 改变URL页面不刷新
    2. 如何检测URL变化了

- hash
    因为早浏览器url地址栏哈希值本身就不会触发页面刷新，
    所以通过js 拿到hash值的变更结果后可以动态的判断页面上要展示的html片段
- history
    pushState replaceState
    popState
    因为h5中具备一个history对象，该对象中的pushState方法可以向URL后面拼接参数而不造成页面刷新，又因为history
    对象中popState方法支持我们监听到url的变化，所以只需要将a标签默认跳转事件阻止掉，借助pushState方法模拟url的跳转
    就能判断url变化动态决定要渲染的UI
