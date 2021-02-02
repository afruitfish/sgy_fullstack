//获取应用实例
let app = getApp();

// 模拟数据
let list = []
let listLength = 17;
for (let i = 0; i <= listLength; i++) {
	list.push(i)
}

Page({
	data: {
		navigate_type: '', //分类类型，是否包含二级分类
		slideWidth: '', //滑块宽
		slideLeft: 0, //滑块位置
		totalLength: '', //当前滚动列表总长
		slideShow: false,
		slideRatio: '',
		tlist: { // 展示的数据
			line1: [],
			line2: []
		}
	},
	onLoad: function() {
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
	//根据分类获取比例
	getRatio() {
		const _this = this;
		if (!_this.data.tlist || _this.data.tlist.length <= 5) {
			this.setData({
				slideShow: false
			})
		} else {
			let _totalLength = _this.data.tlist.line1.length * 150; //分类列表总长度
			let _ratio = 230 / _totalLength * (750 / this.data.windowWidth); //滚动列表长度与滑条长度比例
			let _showLength = 750 / _totalLength * 230; //当前显示红色滑条的长度(保留两位小数)
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
	}
})
