import request from '@/common/index';
const content = {
	// 获取banner
	hIndex() {
		return new Promise(resolve => {
			request.post('/index.php/Home/Index/index', '', res => {
				resolve(res)
			})
		})
	},
	// 新品上线
	hNew(data, params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/Category/new_goods?p=' + data.page + "&num=" + data.downNum, params, res => {
				resolve(res)
			})
		})
	},
	// 最近补货
	hBu(data, params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/Category/bu_goods?p=' + data.page + "&num=" + data.downNum, params, res => {
				resolve(res)
			})
		})
	},
	// 特惠商品
	hDis(data, params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/Promotion/dis?p=' + data.page + "&num=" + data.downNum, params, res => {
				resolve(res)
			})
		})
	},
	// 地区最畅销
	hSale(data, params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/Category/get_province_sale?p=' + data.page + "&num=" + data.downNum, params, res => {
				resolve(res)
			})
		})
	},
	// 猜你喜欢
	hLike() {
		return new Promise(resolve => {
			request.post('/Home/Category/get_sale/', '', res => {
				resolve(res)
			})
		})
	},
	// 添加购物车
	addShop(data) {
		let params = {
			max_buy: 40
		};
		return new Promise(resolve => {
			request.post('/index.php/Home/Cart/addCart?sn=' + data.item_no + "&num=" + data.allNum, params, res => {
				resolve(res)
			})
		})
	},
	// 商品详情
	product(id) {
		return new Promise(resolve => {
			request.post('/index.php/Home/Goods/index/id/' + id, "", res => {
				resolve(res)
			})
		})
	},
	// 收藏
	addLike(params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/Collect/addcollect', params, res => {
				resolve(res)
			})
		})
	},
	// 取消收藏
	deleteLike(params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/Collect/delcollect', params, res => {
				resolve(res)
			})
		})
	},

	// 购物车详细
	cartData(data) {
		let params = {
			cart_times: 129600,
			p: data.page
		}
		return new Promise(resolve => {
			request.post("/index.php/Home/Cart/index_new?num=" + data.downNum, params, res => {
				resolve(res)
			})
		})
	},
	// 获取余额
	money(params) {
		return new Promise(resolve => {
			request.post('/Home/Index/get_amt?hdid=' + params.hdid, "", res => {
				resolve(res)
			})
		})
	},
	// 获取积分
	integral() {
		return new Promise(resolve => {
			request.post('/index.php/Home/User/integralindex', "", res => {
				resolve(res)
			})
		})
	},
	// 获取代金券
	dis() {
		return new Promise(resolve => {
			request.post('/index.php/Home/Coupon/index', "", res => {
				resolve(res)
			})
		})
	},
	// 购物车数量
	changenum(content) {
		return new Promise(resolve => {
			request.post("/index.php/Home/Cart/changenum?sn=" + content.item_no + "&num=" + content.num, "", res => {
				resolve(res)
			})
		})
	},
	// 商品分类
	category(data, item) {

		return new Promise(resolve => {
			request.post("/index.php/Home/Category/appindex?id=" + data.listId + "&pagesize=" + data.pagesize + "&p=" + data.page +
				"&num=" + data.downNum, item, res => {
					resolve(res)
				})
		})
	},
	// 获取公告
	artData(id) {
		return new Promise(resolve => {
			request.post("/Home/Article/show?id=" + id, "", res => {
				resolve(res)
			})
		})
	},
	// 单件删除
	cartDele(item) {
		return new Promise(resolve => {
			request.post("/Home/Cart/delGoods?sn=" + item.item_no, item.id, res => {
				resolve(res)
			})
		})
	},
	//全部删除
	cartAlldele(user) {
		return new Promise(resolve => {
			request.post("/index.php/Home/Cart/clear?uid=" + user.uid, "", res => {
				resolve(res)
			})
		})
	},
	// 购物车结算
	cartJiesuan(params) {
		return new Promise(resolve => {
			request.post("/index.php/Home/Cart/app_jiesuan", params, res => {
				resolve(res)
			})
		})
	},
	// 获取搜索数据
	searchData(data) {
		let params = {
			type: 'app'
		}
		return new Promise(resolve => {
			request.post('/index.php/Home/Category/search?ser_key=' + data.text + "&p=" + data.page + "&num=" + data.downNum,
				params, res => {
					resolve(res)
				})
		})
	},
	// 库存查询
	queryRep(data, params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/User/appStock?code=' + data.p_num, params, res => {
				resolve(res)
			})
		})
	},
	// 售后列表
	saleData() {
		return new Promise(resolve => {
			request.post('/index.php/Home/User/shouhou', "", res => {
				resolve(res)
			})
		})
	},
	// 售后详情
	saleView(params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/User/shouhou_view?mid=' + params.mid, "", res => {
				resolve(res)
			})
		})
	},
	// 撤销售后
	saleDele(data) {
		return new Promise(resolve => {
			request.post("/Home/User/shouhou_del?id=" + data.mid, "", res => {
				resolve(res)
			})
		})
	},
	// 新增售后
	saleAdd(params) {
		return new Promise(resolve => {
			request.arry("/index.php/Home/User/shouhou_add", params, res => {
				resolve(res)
			})
		})
	},
	// 售后扫描
	saleScan(data) {
		return new Promise(resolve => {
			request.arry("/index.php/Home/User/getItemInfo?item_no=" + data.result, "", res => {
				resolve(res)
			})
		})
	},
	// 售后名称
	saleName(data) {
		return new Promise(resolve => {
			request.post("/index.php/Home/User/getItemInfo?item_no=" + data.value, "", res => {
				resolve(res)
			})
		})
	},
	// 物流列表
	logisList(data) {
		return new Promise(resolve => {
			request.post("/index.php/Home/User/sh_express_list?p=" + data.p, "", res => {
				resolve(res)
			})
		})
	},
	// 物流详情
	logisData(data) {

		return new Promise(resolve => {
			request.post('/index.php/Home/User/sh_express_view?mid=' + data.mid, "", res => {
				resolve(res)
			})
		})
	},
	// 获取已通过物流
	logisView() {
		return new Promise(resolve => {
			request.post('/index.php/Home/User/sh_express', "", res => {
				resolve(res)
			})
		})
	},
	logisAdd() {
		return new Promise(resolve => {
			request.post('/index.php/Home/User/sh_express', "", res => {
				resolve(res)
			})
		})
	},
	// 订单列表（未确认）
	orderHa(data) {
		return new Promise(resolve => {
			request.post('/index.php/Home/User/orderList?p=' + data.page, "", res => {
				resolve(res)
			})
		})
	},
	// 订单详情（未确认）
	orderHaView(data) {
		return new Promise(resolve => {
			request.post('/index.php/Home/User/orderView/sn/' + data.sn, "", res => {
				resolve(res)
			})
		})
	},
	// 订单列表（已确认）
	orderHd(data) {
		return new Promise(resolve => {
			request.post('/index.php/Home/Hd/orderList?p=' + data.page, "", res => {
				resolve(res)
			})
		})
	},
	// 订单详情（已确认）
	orderHdView(data) {
		return new Promise(resolve => {
			request.post('/index.php/Home/Hd/orderView/sn/' + data.sn, "", res => {
				resolve(res)
			})
		})
	},
	// 收藏列表
	colList() {
		return new Promise(resolve => {
			request.post("/index.php/Home/Collect/index", "", res => {
				resolve(res)
			})
		})
	},
	// 收藏单件删除
	colDele(data) {
		return new Promise(resolve => {
			request.post("/index.php/Home/Collect/delcollect", data, res => {
				resolve(res)
			})
		})
	},
	// 收藏清空
	colDeleAll() {
		return new Promise(resolve => {
			request.post("/index.php/Home/Collect/clear", "", res => {
				resolve(res)
			})
		})
	},
	// 地址
	address() {
		return new Promise(resolve => {
			request.post("/index.php/Home/User/Address", "", res => {
				resolve(res)
			})
		})
	},
	// 商品分类
	categories_app() {
		return new Promise(resolve => {
			request.post("/index.php/Home/Category/categories_tree3", "", res => {
				resolve(res)
			})
		})
	},
	// 销售图表
	marketRank(params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/User/ranking', params, res => {
				resolve(res)
			})
		})
	},
	// 销售详情
	marketView(params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/User/mysale', params, res => {
				resolve(res)
			})
		})
	},
	// 库存图表
	reqRank() {
		return new Promise(resolve => {
			request.post('/index.php/Home/User/allstock', "", res => {
				resolve(res)
			})
		})
	},
	// 库存详情
	reqView(data, params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/User/appStock?code=' + data.p_num, params, res => {
				resolve(res)
			})
		})
	},
	// 自动更新
	Version(params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/Version/index', params, res => {
				resolve(res)
			})
		})
	},
	// 领取免费商品
	orders(params) {
		return new Promise(resolve => {
			request.post('/index.php/Home/Order/success', params, res => {
				resolve(res)
			})
		})
	},
	// 提交免费商品
	create_free_order(params) {
		return new Promise(resolve => {
			request.arry('/index.php/Home/Order/create_free_order', params, res => {
				resolve(res)
			})
		})
	},
}
export default content
