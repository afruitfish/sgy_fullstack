const app = getApp();
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      "pagePath": "/pages/home/home",
      "text": "首页",
      "iconPath": "/images/icon/home.png",
      "selectedIconPath": "/images/icon/home.png"
    },
    {
      "pagePath": "/pages/lock/lock",
      "text": "签到",
      "iconPath": "/images/icon/lock.png",
      "selectedIconPath": "/images/icon/lock.png"
    }, {
      "pagePath": "/pages/order/order",
      "text": "订单",
      "iconPath": "/images/icon/order.png",
      "selectedIconPath": "/images/icon/order.png"
    }, {
      "pagePath": "/pages/mine/mine",
      "text": "我的",
      "iconPath": "/images/icon/mine.png",
      "selectedIconPath": "/images/icon/mine.png"
    }],
    //适配IphoneX的屏幕底部横线
    isIphoneX: app.globalData.isIphoneX
  },
  attached() {},
  methods: {
    switchTab(e) {
      const dataset = e.currentTarget.dataset
      const path = dataset.path
      const index = dataset.index
      //如果是特殊跳转界面
      if (this.data.list[index].isSpecial) {
        wx.navigateTo({
          url: path
        })
      } else {
        //正常的tabbar切换界面
        wx.switchTab({
          url: path
        })
        this.setData({
          selected: index
        })
      }
    }
  }
})