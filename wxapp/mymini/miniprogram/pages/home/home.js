// pages/home/home.js
const app = getApp();
let item1 = {
  "type": "1"
}
let item2 = {
  "type": "2"
}

let list = [{
  "id": "1",
  "src": "../../images/icon/i.png"
}, {
  "id": "2",
  "src": "../../images/icon/i.png"
}, {
  "id": "3",
  "src": "../../images/icon/i.png"
}, {
  "id": "4",
  "src": "../../images/icon/i.png"
}, {
  "id": "5",
  "src": "../../images/icon/i.png"
}, {
  "id": "6",
  "src": "../../images/icon/i.png"
}, {
  "id": "7",
  "src": "../../images/icon/i.png"
}, {
  "id": "8",
  "src": "../../images/icon/i.png"
}, {
  "id": "9",
  "src": "../../images/icon/i.png"
}, {
  "id": "10",
  "src": "../../images/icon/i.png"
}, {
  "id": "11",
  "src": "../../images/icon/i.png"
}, {
  "id": "12",
  "src": "../../images/icon/i.png"
}, {
  "id": "13",
  "src": "../../images/icon/i.png"
}, {
  "id": "14",
  "src": "../../images/icon/i.png"
}, {
  "id": "15",
  "src": "../../images/icon/i.png"
}, {
  "id": "16",
  "src": "../../images/icon/i.png"
}, {
  "id": "17",
  "src": "../../images/icon/i.png"
}, {
  "id": "18",
  "src": "../../images/icon/i.png"
}]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listlength: 3,
    itemlist1: [{
      "type": "1"
    }, {
      "type": "2"
    }, {
      "type": "2"
    }],
    itemlist2: [{
      "type": "2"
    }, {
      "type": "2"
    }, {
      "type": "2"
    }, ],
    a:0,
    b:0,
    tags: [{
      "id": "1",
      "tag": "精选",
      "tagType": true,
      "describe": "优选好物"
    }, {
      "id": "2",
      "tag": "https://7367-sgy-9ggwk16w06fc07df-1304723824.tcb.qcloud.la/%E5%B9%B4%E8%B4%A7%E8%8A%82logo.png?sign=ed0846071813265f7e0f92e6df7d73de&t=1612450910",
      "tagType": false,
      "describe": "办年货"
    }, {
      "id": "3",
      "tag": "乳品烘培",
      "tagType": true,
      "describe": "每日必买"
    }, {
      "id": "4",
      "tag": "医药健康",
      "tagType": true,
      "describe": "抗疫防护"
    }, {
      "id": "5",
      "tag": "鲜花蛋糕",
      "tagType": true,
      "describe": "节庆用礼"
    }, {
      "id": "6",
      "tag": "手机家电",
      "tagType": true,
      "describe": "科技前沿"
    }],
    bannerList: [{
        "id": "1",
        "src": "../../images/1.png"
      },
      {
        "id": "2",
        "src": "../../images/2.png"
      },
      {
        "id": "3",
        "src": "../../images/3.png"
      },
      {
        "id": "4",
        "src": "../../images/4.png"
      }
    ],
    navigate_type: '', //分类类型，是否包含二级分类
    slideWidth: '', //滑块宽
    slideLeft: 0, //滑块位置
    totalLength: '', //当前滚动列表总长
    slideShow: false,
    slideRatio: '',
    tlist: { // 展示的数据
      line1: [],
      line2: []
    },
    ad: "https://7367-sgy-9ggwk16w06fc07df-1304723824.tcb.qcloud.la/ad.png?sign=ebadf79dd3ee8ae9a65723408ecd2e89&t=1612512988",
    activeTypeId: 1
  },

  swiperChange: function (e) {
    var current = e.detail.current
    this.setData({
      swiperIndex: current + 1
    })
  },
  getRatio() {
    const _this = this;
    if (!_this.data.tlist || _this.data.tlist.length <= 5) {
      this.setData({
        slideShow: false
      })
    } else {
      let _totalLength = _this.data.tlist.line1.length * 150; //分类列表总长度
      let _ratio = 70 / _totalLength * (750 / this.data.windowWidth); //滚动列表长度与滑条长度比例
      let _showLength = 35; //当前显示红色滑条的长度(保留两位小数)
      this.setData({
        slideWidth: _showLength,
        totalLength: _totalLength,
        slideShow: true,
        slideRatio: _ratio
      })
    }
  },
  //slideLeft动态变化
  getleft(e) {
    this.setData({
      slideLeft: e.detail.scrollLeft * this.data.slideRatio
    })
  },
  // 格式化列表数据（从1行转为2行）
  formatListData(oldList) {

    let line1 = []
    let line2 = []

    // 数量超过5个
    if (oldList.length > 5) {
      oldList.forEach((item, index) => {
        console.log(item)
        if (index % 2 == 0) {
          // 偶数放第一行
          line1.push(item)
        } else {
          // 奇数放第二行
          line2.push(item)
        }
      });
    } else {
      // 数量不到5个全部放在第一行
      this.line1 = oldList
    }


    let tlist = {
      line1,
      line2
    }

    this.setData({
      tlist
    })
  },
  onLoad: function () {
    this.setData({
      swiperIndex: 1,
      activeTypeId: 1

    })
    const _this = this;

    // TODO: 获取数据

    // 格式化数据
    _this.formatListData(list);

    let systemInfo = wx.getSystemInfoSync();
    _this.setData({
      windowHeight: systemInfo.windowHeight - 35,
      windowWidth: systemInfo.windowWidth,
    })
    //计算比例
    _this.getRatio();
  },
  typeSwitch(e) {
    this.setData({
      activeTypeId: e.currentTarget.dataset.id
    })
    console.log(this.data.activeTypeId)
  },
  onReachBottom: function () {
    if (this.data.listlength < 20) {

      console.log(this.data.itemlist1)
      console.log(this.data.itemlist2)
      var arr1 = this.data.itemlist1,
        arr2 = this.data.itemlist2,
        a = Math.random()
      if (a < 0.5) {
        arr1.push(item1)
        this.data.a++
        arr2.push(item2)
      } else {
        arr2.push(item1)
        this.data.b++
        arr1.push(item2)
      }
      this.setData({
        itemlist1: arr1,
        itemlist2: arr2,
        listlength: this.data.listlength + 1,
      });
      console.log(this.data.itemlist1)
      console.log(this.data.itemlist2)
      console.log(this.data.b)
      console.log(this.data.a)
    }
    else{
      
    }
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      console.log('设置选中项 0')
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
})