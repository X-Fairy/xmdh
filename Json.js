/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'Leo yo',
		portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
}
/* 首页轮播图 */
const carouselList = [{
		src: "/static/temp/banner3.jpg",
		background: "rgb(203, 87, 60)",
	},
	{
		src: "/static/temp/banner2.jpg",
		background: "rgb(205, 215, 218)",
	},
	{
		src: "/static/temp/banner4.jpg",
		background: "rgb(183, 73, 69)",
	}
]
/* 商品列表 */
const goodsList = [{
		image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
		image2: "http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",
		image3: "http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",
		title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
		price: 179,
		sales: 61,
	},
	{
		image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",
		image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554013048&di=a3dc9fd1406dd7bad7fbb97b5489ec04&imgtype=jpg&er=1&src=http%3A%2F%2Fimg009.hc360.cn%2Fhb%2FnKo44ac2656F831c684507E3Da0E3a26841.jpg",
		image3: "http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg",
		title: "潘歌针织连衣裙",
		price: 78,
		sales: 16,
	},
	{
		image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg",
		image2: "http://m.360buyimg.com/n12/jfs/t247/42/1078640382/162559/3628a0b/53f5ad09N0dd79894.jpg%21q70.jpg",
		image3: "http://ikids.61kids.com.cn/upload/2018-12-29/1546070626796114.jpg",
		title: "巧谷2019春夏季新品新款女装",
		price: 108.8,
		sales: 5,
	}, {
		image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg",
		image2: "http://images.jaadee.com/images/201702/goods_img/30150_d85aed83521.jpg",
		image3: "http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg",
		title: "私萱连衣裙",
		price: 265,
		sales: 88,
	}, {
		image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
		image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
		image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
		title: "娇诗茹 ulzzang原宿风学生潮韩版春夏短",
		price: 422,
		sales: 137,
	}, {
		image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
		image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
		image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
		title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
		price: 179,
		sales: 95,
	},
]

/* 购物车 */
const cartList = [{
		id: 1,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553005139&di=3368549edf9eee769a9bcb3fbbed2504&imgtype=jpg&er=1&src=http%3A%2F%2Fimg002.hc360.cn%2Fy3%2FM01%2F5F%2FDB%2FwKhQh1T7iceEGRdWAAAAADQvqk8733.jpg',
		attr_val: '春装款 L',
		stock: 15,
		title: 'OVBE 长袖风衣',
		price: 278.00,
		number: 1
	},
	{
		id: 3,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '激光导航 扫拖一体',
		stock: 3,
		title: '科沃斯 Ecovacs 扫地机器人',
		price: 1348.00,
		number: 5
	},
	{
		id: 4,
		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
		attr_val: 'XL',
		stock: 55,
		title: '朵绒菲小西装',
		price: 175.88,
		number: 1
	},
	{
		id: 5,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		number: 1
	},
	{
		id: 6,
		image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
		attr_val: '樱花味润手霜 30ml',
		stock: 15,
		title: "欧舒丹（L'OCCITANE）乳木果",
		price: 128,
		number: 1
	},
	{
		id: 7,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
		attr_val: '特级 12个',
		stock: 7,
		title: '新疆阿克苏苹果 特级',
		price: 58.8,
		number: 10
	},
	{
		id: 8,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '激光导航 扫拖一体',
		stock: 15,
		title: '科沃斯 Ecovacs 扫地机器人',
		price: 1348.00,
		number: 1
	},
	{
		id: 9,
		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
		attr_val: 'XL',
		stock: 55,
		title: '朵绒菲小西装',
		price: 175.88,
		number: 1
	},
	{
		id: 10,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		number: 1
	},
	{
		id: 11,
		image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
		attr_val: '樱花味润手霜 30ml',
		stock: 15,
		title: "欧舒丹（L'OCCITANE）乳木果",
		price: 128,
		number: 1
	},
	{
		id: 12,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
		attr_val: '特级 12个',
		stock: 7,
		title: '新疆阿克苏苹果 特级',
		price: 58.8,
		number: 10
	},
	{
		id: 13,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg',
		attr_val: '春装款/m',
		stock: 15,
		title: '女装2019春秋新款',
		price: 420.00,
		number: 1
	}
];
//详情展示页面
const detailData = {
	title: '纯种金毛幼犬活体有血统证书',
	title2: '拆家小能手 你值得拥有',
	favorite: true,
	imgList: [{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
		},
		{
			src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
		},
	],
	episodeList: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
	],
	guessList: [{
			src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg',
			title: '猫眼指甲油',
			title2: '独树一帜的免照灯猫眼指甲'
		},
		{
			src: 'http://m.china-7.net/uploads/14778449362891.jpg',
			title: '创意屋',
			title2: '创意屋形上下双层高低床'
		},
		{
			src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg',
			title: 'MissCandy 指甲油',
			title2: '十分适合喜欢素净的妹纸，尽显淡雅的气质'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2108933440,2194129200&fm=214&gp=0.jpg	',
			title: 'RMK 2017星空海蓝唇釉',
			title2: '唇釉质地，上唇后很滋润。少女也会心动的蓝色，透明液体形状。'
		}
	],
	evaList: [{
			src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '楼上说的好有道理。'
		}
	]
}
const shareList = [{
		type: 1,
		icon: '/static/temp/share_wechat.png',
		text: '微信好友'
	},
	{
		type: 2,
		icon: '/static/temp/share_moment.png',
		text: '朋友圈'
	},
	{
		type: 3,
		icon: '/static/temp/share_qq.png',
		text: 'QQ好友'
	},
	{
		type: 4,
		icon: '/static/temp/share_qqzone.png',
		text: 'QQ空间'
	}
]
const lazyLoadList = [{
		src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
	},
	{
		src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
	},
	{
		src: 'http://img5.imgtn.bdimg.com/it/u=2904900134,438461613&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img1.imgtn.bdimg.com/it/u=1690475408,2565370337&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.99114.com/group1/M00/7F/99/wKgGS1kVrPGAe5LmAAU2KrJmb3Q923_600_600.jpg'
	},
	{
		src: 'http://img4.imgtn.bdimg.com/it/u=261047209,372231813&fm=26&gp=0.jpg'
	},
	{
		src: 'http://i2.17173cdn.com/i7mz64/YWxqaGBf/tu17173com/20150107/eMyVMObjlbcvDEv.jpg'
	},
	{
		src: 'http://img008.hc360.cn/m4/M02/E7/87/wKhQ6FSrfU6EfUoyAAAAAITAfyc280.jpg'
	},
	{
		src: 'http://pic1.win4000.com/wallpaper/d/5991569950166.jpg'
	},
	{
		src: 'http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6f061d950a7b0208f9fe945e60d9f2d3572cc85e.jpg'
	},
	{
		src: 'http://pic41.nipic.com/20140429/18169759_125841756000_2.jpg'
	},
	{
		src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg'
	},
	{
		src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg'
	},
	{
		src: 'http://b-ssl.duitang.com/uploads/item/201410/02/20141002111638_tXAzU.jpeg'
	},
	{
		src: 'http://img2.ph.126.net/C4JW6f57QWSB21-8jh2UGQ==/1762596304262286698.jpg'
	},
	{
		src: 'http://att.bbs.duowan.com/forum/201405/17/190257nzcvkkdg6w2e8226.jpg'
	},
	{
		src: 'http://attach.bbs.miui.com/forum/201504/10/223644v3intigyvva0vgym.jpg'
	},
	{
		src: 'http://pic1.win4000.com/mobile/3/57888a298d61d.jpg'
	},
]

const orderList = [{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
			}
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 9,
		goodsList: [{
			title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
			price: 179.5,
			image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
			number: 1,
			attr: '珊瑚粉 M'
		}]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2120460599/O1CN01LBPS4C1GINkwsOTXS_!!2120460599.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/i2/1069876356/TB2ocTQG4WYBuNjy1zkXXXGGpXa_!!1069876356.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2120460599/O1CN01YsmgwZ1GINkv38rkn_!!2120460599.jpg_430x430q90.jpg',
			},
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
			title: '回力女鞋高帮帆布鞋女学生韩版鞋子女2019潮鞋女鞋新款春季板鞋女',
			price: 69,
			image: 'https://img.alicdn.com/imgextra/i3/2128794607/TB2gzzoc41YBuNjy1zcXXbNcXXa_!!2128794607.jpg_430x430q90.jpg',
			number: 1,
			attr: '白色-高帮 39'
		}]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3358098495/O1CN01dhYyid2Ccl5MWLDok_!!3358098495.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/3358098495/O1CN01AWsnFA2Ccl5OzvqsL_!!3358098495.jpg_430x430q90.jpg',
			},
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://img.alicdn.com/imgextra/i4/3470687433/O1CN0124mMQOSERr18L1h_!!3470687433.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/i3/2888462616/O1CN01ERra5J1VCAbZaKI5n_!!0-item_pic.jpg_430x430q90.jpg',
			},
			{
				image: 'https://gd3.alicdn.com/imgextra/i3/819381730/O1CN01YV4mXj1OeNhQIhQlh_!!819381730.jpg_400x400.jpg',
			},
		]
	}

]
const cateList = [{
		id: 1,
		name: '手机数码'
	},
	{
		id: 2,
		name: '礼品鲜花'
	},
	{
		id: 3,
		name: '男装女装'
	},
	{
		id: 4,
		name: '母婴用品'
	},
	{
		id: 5,
		pid: 1,
		name: '手机通讯'
	},
	{
		id: 6,
		pid: 1,
		name: '运营商'
	},
	{
		id: 8,
		pid: 5,
		name: '全面屏手机',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 9,
		pid: 5,
		name: '游戏手机',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 10,
		pid: 5,
		name: '老人机',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 11,
		pid: 5,
		name: '拍照手机',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 12,
		pid: 5,
		name: '女性手机',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 14,
		pid: 6,
		name: '合约机',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 15,
		pid: 6,
		name: '选好卡',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 16,
		pid: 6,
		name: '办套餐',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 17,
		pid: 2,
		name: '礼品',
	},
	{
		id: 18,
		pid: 2,
		name: '鲜花',
	},
	{
		id: 19,
		pid: 17,
		name: '公益摆件',
		picture: '/static/temp/cate7.jpg'
	},
	{
		id: 20,
		pid: 17,
		name: '创意礼品',
		picture: '/static/temp/cate8.jpg'
	},
	{
		id: 21,
		pid: 18,
		name: '鲜花',
		picture: '/static/temp/cate9.jpg'
	},
	{
		id: 22,
		pid: 18,
		name: '每周一花',
		picture: '/static/temp/cate10.jpg'
	},
	{
		id: 23,
		pid: 18,
		name: '卡通花束',
		picture: '/static/temp/cate11.jpg'
	},
	{
		id: 24,
		pid: 18,
		name: '永生花',
		picture: '/static/temp/cate12.jpg'
	},
	{
		id: 25,
		pid: 3,
		name: '男装'
	},
	{
		id: 26,
		pid: 3,
		name: '女装'
	},
	{
		id: 27,
		pid: 25,
		name: '男士T恤',
		picture: '/static/temp/cate13.jpg'
	},
	{
		id: 28,
		pid: 25,
		name: '男士外套',
		picture: '/static/temp/cate14.jpg'
	},
	{
		id: 29,
		pid: 26,
		name: '裙装',
		picture: '/static/temp/cate15.jpg'
	},
	{
		id: 30,
		pid: 26,
		name: 'T恤',
		picture: '/static/temp/cate16.jpg'
	},
	{
		id: 31,
		pid: 26,
		name: '上装',
		picture: '/static/temp/cate15.jpg'
	},
	{
		id: 32,
		pid: 26,
		name: '下装',
		picture: '/static/temp/cate16.jpg'
	},
	{
		id: 33,
		pid: 4,
		name: '奶粉',
	},
	{
		id: 34,
		pid: 4,
		name: '营养辅食',
	},
	{
		id: 35,
		pid: 4,
		name: '童装',
	},
	{
		id: 39,
		pid: 4,
		name: '喂养用品',
	},
	{
		id: 36,
		pid: 33,
		name: '有机奶粉',
		picture: '/static/temp/cate17.jpg'
	},
	{
		id: 37,
		pid: 34,
		name: '果泥/果汁',
		picture: '/static/temp/cate18.jpg'
	},
	{
		id: 39,
		pid: 34,
		name: '面条/粥',
		picture: '/static/temp/cate20.jpg'
	},
	{
		id: 42,
		pid: 35,
		name: '婴童衣橱',
		picture: '/static/temp/cate19.jpg'
	},
	{
		id: 43,
		pid: 39,
		name: '吸奶器',
		picture: '/static/temp/cate21.jpg'
	},
	{
		id: 44,
		pid: 39,
		name: '儿童餐具',
		picture: '/static/temp/cate22.jpg'
	},
	{
		id: 45,
		pid: 39,
		name: '牙胶安抚',
		picture: '/static/temp/cate23.jpg'
	},
	{
		id: 46,
		pid: 39,
		name: '围兜',
		picture: '/static/temp/cate24.jpg'
	},
]
const cateData = [{
	"cls_id": "01",
	"cls_name": "家居百货",
	"child": {
		"101": {
			"cls_id": "0101",
			"cls_name": "杯类",
			"img": ["6970893335470", "6941595106170", "6939837616693"],
			"index": "101",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6970893335470.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595106170.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837616693.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}]
		},
		"102": {
			"cls_id": "0102",
			"cls_name": "厨房用品",
			"img": ["6939837608438", "6939837616686", "6939837609343"],
			"index": "102",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837608438.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837616686.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837609343.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}]
		},
		"103": {
			"cls_id": "0103",
			"cls_name": "居家用品",
			"img": ["6941196008859", "6941196078203", "6941196078210"],
			"index": "103",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196008859.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196078203.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196078210.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}]
		},
		"104": {
			"cls_id": "0104",
			"cls_name": "收纳用品",
			"img": ["6941196077657", "6941196077664", "6941196077671"],
			"index": "104",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196077657.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196077664.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196077671.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}]
		},
		"105": {
			"cls_id": "0105",
			"cls_name": "香氛日化",
			"img": ["6970893330062", "6941196092940", "6970893330536"],
			"index": "105",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6970893330062.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196092940.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970893330536.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}]
		},
		"106": {
			"cls_id": "0106",
			"cls_name": "纺织用品",
			"img": ["6941196090830", "6941196092438", "6941595108136"],
			"index": "106",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196090830.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196092438.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595108136.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}]
		},
		"107": {
			"cls_id": "0107",
			"cls_name": "一次性用品",
			"img": ["6939837633942", "6941196092209", "6939837612794"],
			"index": "107",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837633942.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196092209.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837612794.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}]
		},
		"108": {
			"cls_id": "0108",
			"cls_name": "儿童用品",
			"img": ["6970893337504", "6970893337627", "13000270"],
			"index": "108",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6970893337504.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970893337627.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/13000270.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}]
		},
		"109": {
			"cls_id": "0109",
			"cls_name": "季节产品",
			"img": ["6941595110665", "6939837627019", "6941595119163"],
			"index": "109",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941595110665.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837627019.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595119163.jpg?x-oss-process=style/80",
				"show": true,
				"loaded": false
			}]
		},
		"110": {
			"cls_id": "0110",
			"cls_name": "宠物用品",
			"img": null,
			"index": "110",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		},
		"111": {
			"cls_id": "0111",
			"cls_name": "个人护理",
			"img": null,
			"index": "111",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		}
	},
	"foods": [{
		"cls_id": "0101",
		"cls_name": "杯类",
		"img": ["6970893335470", "6941595106170", "6939837616693"],
		"index": "101",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6970893335470.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595106170.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837616693.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "0102",
		"cls_name": "厨房用品",
		"img": ["6939837608438", "6939837616686", "6939837609343"],
		"index": "102",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837608438.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837616686.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837609343.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "0103",
		"cls_name": "居家用品",
		"img": ["6941196008859", "6941196078203", "6941196078210"],
		"index": "103",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196008859.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196078203.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196078210.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "0104",
		"cls_name": "收纳用品",
		"img": ["6941196077657", "6941196077664", "6941196077671"],
		"index": "104",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196077657.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196077664.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196077671.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "0105",
		"cls_name": "香氛日化",
		"img": ["6970893330062", "6941196092940", "6970893330536"],
		"index": "105",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6970893330062.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196092940.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970893330536.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "0106",
		"cls_name": "纺织用品",
		"img": ["6941196090830", "6941196092438", "6941595108136"],
		"index": "106",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196090830.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196092438.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595108136.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "0107",
		"cls_name": "一次性用品",
		"img": ["6939837633942", "6941196092209", "6939837612794"],
		"index": "107",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837633942.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196092209.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837612794.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "0108",
		"cls_name": "儿童用品",
		"img": ["6970893337504", "6970893337627", "13000270"],
		"index": "108",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6970893337504.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970893337627.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/13000270.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "0109",
		"cls_name": "季节产品",
		"img": ["6941595110665", "6939837627019", "6941595119163"],
		"index": "109",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941595110665.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837627019.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595119163.jpg?x-oss-process=style/80",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "0110",
		"cls_name": "宠物用品",
		"img": null,
		"index": "110",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "0111",
		"cls_name": "个人护理",
		"img": null,
		"index": "111",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}]
}, {
	"cls_id": "02",
	"cls_name": "健康美容",
	"child": {
		"201": {
			"cls_id": "0201",
			"cls_name": "彩妆、香水、甲油",
			"img": ["6928441732455", "6934488908920", "6934488909019"],
			"index": "201",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6928441732455.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6934488908920.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6934488909019.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"202": {
			"cls_id": "0202",
			"cls_name": "护  肤",
			"img": ["6950079151285", "6922200824627", "6950079119636"],
			"index": "202",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6950079151285.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6922200824627.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6950079119636.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"203": {
			"cls_id": "0203",
			"cls_name": "美妆工具",
			"img": ["6941196089292", "6941196089339", "6941196089360"],
			"index": "203",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196089292.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196089339.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196089360.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"204": {
			"cls_id": "0204",
			"cls_name": "季节产品",
			"img": ["6941924324176", "6922200852422", "6936217741976"],
			"index": "204",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941924324176.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6922200852422.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6936217741976.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		}
	},
	"foods": [{
		"cls_id": "0201",
		"cls_name": "彩妆、香水、甲油",
		"img": ["6928441732455", "6934488908920", "6934488909019"],
		"index": "201",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6928441732455.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6934488908920.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6934488909019.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0202",
		"cls_name": "护  肤",
		"img": ["6950079151285", "6922200824627", "6950079119636"],
		"index": "202",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6950079151285.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6922200824627.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6950079119636.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0203",
		"cls_name": "美妆工具",
		"img": ["6941196089292", "6941196089339", "6941196089360"],
		"index": "203",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196089292.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196089339.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196089360.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0204",
		"cls_name": "季节产品",
		"img": ["6941924324176", "6922200852422", "6936217741976"],
		"index": "204",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941924324176.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6922200852422.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6936217741976.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}]
}, {
	"cls_id": "03",
	"cls_name": "饰品系列",
	"child": {
		"301": {
			"cls_id": "0301",
			"cls_name": "发夹",
			"img": ["6941595110504", "6941595109638", "6941595110511"],
			"index": "301",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941595110504.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595109638.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595110511.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"302": {
			"cls_id": "0302",
			"cls_name": "发圈",
			"img": ["6941196088615", "6941595103711", "6941595109560"],
			"index": "302",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196088615.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595103711.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595109560.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"303": {
			"cls_id": "0303",
			"cls_name": "发箍",
			"img": ["6941196064657", "6941595105074", "6941595110528"],
			"index": "303",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196064657.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595105074.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595110528.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"304": {
			"cls_id": "0304",
			"cls_name": "首饰",
			"img": ["6941196096689", "6941595106002", "6941595107344"],
			"index": "304",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196096689.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595106002.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595107344.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"305": {
			"cls_id": "0305",
			"cls_name": "10任选",
			"img": ["6941196087434", "6941595103742", "6941595113642"],
			"index": "305",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196087434.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595103742.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595113642.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"306": {
			"cls_id": "0306",
			"cls_name": "儿童头饰",
			"img": ["6941196089575", "6941196089599", "6941196089605"],
			"index": "306",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196089575.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196089599.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196089605.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"307": {
			"cls_id": "0307",
			"cls_name": "服装类",
			"img": ["6939010811259", "6970893330413", "6939010800789"],
			"index": "307",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939010811259.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970893330413.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939010800789.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"308": {
			"cls_id": "0308",
			"cls_name": "季节产品",
			"img": ["6939837600661", "6970574423465", "6970574421492"],
			"index": "308",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837600661.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970574423465.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970574421492.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"309": {
			"cls_id": "0309",
			"cls_name": "网红爆款区",
			"img": null,
			"index": "309",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		}
	},
	"foods": [{
		"cls_id": "0301",
		"cls_name": "发夹",
		"img": ["6941595110504", "6941595109638", "6941595110511"],
		"index": "301",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941595110504.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595109638.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595110511.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0302",
		"cls_name": "发圈",
		"img": ["6941196088615", "6941595103711", "6941595109560"],
		"index": "302",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196088615.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595103711.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595109560.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0303",
		"cls_name": "发箍",
		"img": ["6941196064657", "6941595105074", "6941595110528"],
		"index": "303",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196064657.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595105074.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595110528.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0304",
		"cls_name": "首饰",
		"img": ["6941196096689", "6941595106002", "6941595107344"],
		"index": "304",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196096689.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595106002.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595107344.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0305",
		"cls_name": "10任选",
		"img": ["6941196087434", "6941595103742", "6941595113642"],
		"index": "305",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196087434.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595103742.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595113642.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0306",
		"cls_name": "儿童头饰",
		"img": ["6941196089575", "6941196089599", "6941196089605"],
		"index": "306",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196089575.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196089599.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196089605.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0307",
		"cls_name": "服装类",
		"img": ["6939010811259", "6970893330413", "6939010800789"],
		"index": "307",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939010811259.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970893330413.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939010800789.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0308",
		"cls_name": "季节产品",
		"img": ["6939837600661", "6970574423465", "6970574421492"],
		"index": "308",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837600661.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970574423465.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970574421492.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0309",
		"cls_name": "网红爆款区",
		"img": null,
		"index": "309",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}]
}, {
	"cls_id": "04",
	"cls_name": "文体礼品",
	"child": {
		"401": {
			"cls_id": "0401",
			"cls_name": "文具",
			"img": ["6941595106361", "6941595106385", "6941595106415"],
			"index": "401",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941595106361.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595106385.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595106415.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"402": {
			"cls_id": "0402",
			"cls_name": "钟表",
			"img": ["6939837628016", "6941196042013", "6939837643552"],
			"index": "402",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837628016.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196042013.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837643552.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"403": {
			"cls_id": "0403",
			"cls_name": "体育用品",
			"img": ["6939837635748", "6939837601231", "6939837624483"],
			"index": "403",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837635748.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837601231.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837624483.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"404": {
			"cls_id": "0404",
			"cls_name": "办公学习",
			"img": ["6941595106453", "6970574422390", "6970574420891"],
			"index": "404",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941595106453.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970574422390.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970574420891.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"405": {
			"cls_id": "0405",
			"cls_name": "益智早教",
			"img": ["6941595114489", "6941196084334", "6941595114465"],
			"index": "405",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941595114489.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196084334.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595114465.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"406": {
			"cls_id": "0406",
			"cls_name": "礼品包装",
			"img": ["6941595110795", "6941595110788", "6941595110764"],
			"index": "406",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941595110795.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595110788.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595110764.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		}
	},
	"foods": [{
		"cls_id": "0401",
		"cls_name": "文具",
		"img": ["6941595106361", "6941595106385", "6941595106415"],
		"index": "401",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941595106361.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595106385.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595106415.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0402",
		"cls_name": "钟表",
		"img": ["6939837628016", "6941196042013", "6939837643552"],
		"index": "402",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837628016.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196042013.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837643552.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0403",
		"cls_name": "体育用品",
		"img": ["6939837635748", "6939837601231", "6939837624483"],
		"index": "403",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837635748.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837601231.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837624483.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0404",
		"cls_name": "办公学习",
		"img": ["6941595106453", "6970574422390", "6970574420891"],
		"index": "404",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941595106453.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970574422390.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970574420891.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0405",
		"cls_name": "益智早教",
		"img": ["6941595114489", "6941196084334", "6941595114465"],
		"index": "405",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941595114489.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196084334.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595114465.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0406",
		"cls_name": "礼品包装",
		"img": ["6941595110795", "6941595110788", "6941595110764"],
		"index": "406",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941595110795.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595110788.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595110764.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}]
}, {
	"cls_id": "05",
	"cls_name": "季节潮品",
	"child": {
		"501": {
			"cls_id": "0501",
			"cls_name": "伞类",
			"img": ["6939837628443", "6970893337870", "6939837612190"],
			"index": "501",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837628443.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970893337870.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837612190.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"502": {
			"cls_id": "0502",
			"cls_name": "鞋类",
			"img": ["6939837633874", "6939837633720", "6970893338006"],
			"index": "502",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837633874.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837633720.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970893338006.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"503": {
			"cls_id": "0503",
			"cls_name": "内衣",
			"img": ["6939837608131", "6939837628863", "6970893338167"],
			"index": "503",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837608131.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837628863.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970893338167.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"504": {
			"cls_id": "0504",
			"cls_name": "皮带",
			"img": ["6941595108884", "6941595108907", "6941595108914"],
			"index": "504",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941595108884.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595108907.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595108914.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"505": {
			"cls_id": "0505",
			"cls_name": "功能产品",
			"img": ["6939837675645", "6941595120466", "6941595111723"],
			"index": "505",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837675645.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595120466.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595111723.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"506": {
			"cls_id": "0506",
			"cls_name": "游泳产品",
			"img": ["6939010800536", "6939010801724", "6939010800543"],
			"index": "506",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939010800536.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939010801724.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939010800543.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"507": {
			"cls_id": "0507",
			"cls_name": "帽子",
			"img": ["6941595110252", "6941595110269", "6941595110283"],
			"index": "507",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941595110252.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595110269.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595110283.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"508": {
			"cls_id": "0508",
			"cls_name": "眼镜",
			"img": ["6939837641794", "6970574428415", "52000206"],
			"index": "508",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837641794.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970574428415.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/52000206.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"509": {
			"cls_id": "0509",
			"cls_name": "手套",
			"img": ["6939837675690", "6939837675706", "6939837622151"],
			"index": "509",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837675690.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837675706.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837622151.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"510": {
			"cls_id": "0510",
			"cls_name": "袜子",
			"img": ["6941196092698", "6941196092728", "6939837629778"],
			"index": "510",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196092698.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196092728.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837629778.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"511": {
			"cls_id": "0511",
			"cls_name": "围巾",
			"img": ["6941196060796", "6941196060802", "6941196070597"],
			"index": "511",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196060796.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196060802.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196070597.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		}
	},
	"foods": [{
		"cls_id": "0501",
		"cls_name": "伞类",
		"img": ["6939837628443", "6970893337870", "6939837612190"],
		"index": "501",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837628443.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970893337870.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837612190.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0502",
		"cls_name": "鞋类",
		"img": ["6939837633874", "6939837633720", "6970893338006"],
		"index": "502",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837633874.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837633720.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970893338006.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0503",
		"cls_name": "内衣",
		"img": ["6939837608131", "6939837628863", "6970893338167"],
		"index": "503",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837608131.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837628863.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970893338167.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0504",
		"cls_name": "皮带",
		"img": ["6941595108884", "6941595108907", "6941595108914"],
		"index": "504",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941595108884.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595108907.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595108914.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0505",
		"cls_name": "功能产品",
		"img": ["6939837675645", "6941595120466", "6941595111723"],
		"index": "505",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837675645.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595120466.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595111723.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0506",
		"cls_name": "游泳产品",
		"img": ["6939010800536", "6939010801724", "6939010800543"],
		"index": "506",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939010800536.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939010801724.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939010800543.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0507",
		"cls_name": "帽子",
		"img": ["6941595110252", "6941595110269", "6941595110283"],
		"index": "507",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941595110252.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595110269.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595110283.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0508",
		"cls_name": "眼镜",
		"img": ["6939837641794", "6970574428415", "52000206"],
		"index": "508",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837641794.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970574428415.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/52000206.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0509",
		"cls_name": "手套",
		"img": ["6939837675690", "6939837675706", "6939837622151"],
		"index": "509",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837675690.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837675706.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837622151.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0510",
		"cls_name": "袜子",
		"img": ["6941196092698", "6941196092728", "6939837629778"],
		"index": "510",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196092698.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196092728.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837629778.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0511",
		"cls_name": "围巾",
		"img": ["6941196060796", "6941196060802", "6941196070597"],
		"index": "511",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196060796.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196060802.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196070597.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}]
}, {
	"cls_id": "06",
	"cls_name": "精品包饰",
	"child": {
		"601": {
			"cls_id": "0601",
			"cls_name": "时尚包",
			"img": ["6941196094463", "6941595105661", "6939837632518"],
			"index": "601",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196094463.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595105661.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837632518.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"602": {
			"cls_id": "0602",
			"cls_name": "双肩包",
			"img": ["6939837630408", "6939837619342", "6970893336835"],
			"index": "602",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837630408.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837619342.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970893336835.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"603": {
			"cls_id": "0603",
			"cls_name": "钱包",
			"img": ["6941595108990", "6939837619816", "6941595101885"],
			"index": "603",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941595108990.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837619816.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595101885.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"604": {
			"cls_id": "0604",
			"cls_name": "随意小包",
			"img": ["6970893336675", "6939837635229", "61000346"],
			"index": "604",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6970893336675.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837635229.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/61000346.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"605": {
			"cls_id": "0605",
			"cls_name": "配饰",
			"img": ["6939837609480", "6939837632761", "6939837604393"],
			"index": "605",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837609480.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837632761.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837604393.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"606": {
			"cls_id": "0606",
			"cls_name": "行李箱",
			"img": ["6939837640421", "6939837637773", "6939837630033"],
			"index": "606",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837640421.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837637773.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837630033.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"607": {
			"cls_id": "0607",
			"cls_name": "功能大包",
			"img": ["6939837636240", "6939837635557", "6939837630071"],
			"index": "607",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837636240.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837635557.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837630071.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"614": {
			"cls_id": "0614",
			"cls_name": "儿童包包",
			"img": ["6941595101649", "6939837620027", "6941595101656"],
			"index": "614",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941595101649.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837620027.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595101656.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		}
	},
	"foods": [{
		"cls_id": "0601",
		"cls_name": "时尚包",
		"img": ["6941196094463", "6941595105661", "6939837632518"],
		"index": "601",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196094463.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595105661.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837632518.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0602",
		"cls_name": "双肩包",
		"img": ["6939837630408", "6939837619342", "6970893336835"],
		"index": "602",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837630408.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837619342.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970893336835.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0603",
		"cls_name": "钱包",
		"img": ["6941595108990", "6939837619816", "6941595101885"],
		"index": "603",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941595108990.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837619816.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595101885.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0604",
		"cls_name": "随意小包",
		"img": ["6970893336675", "6939837635229", "61000346"],
		"index": "604",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6970893336675.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837635229.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/61000346.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0605",
		"cls_name": "配饰",
		"img": ["6939837609480", "6939837632761", "6939837604393"],
		"index": "605",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837609480.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837632761.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837604393.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0606",
		"cls_name": "行李箱",
		"img": ["6939837640421", "6939837637773", "6939837630033"],
		"index": "606",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837640421.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837637773.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837630033.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0607",
		"cls_name": "功能大包",
		"img": ["6939837636240", "6939837635557", "6939837630071"],
		"index": "607",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837636240.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837635557.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837630071.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0614",
		"cls_name": "儿童包包",
		"img": ["6941595101649", "6939837620027", "6941595101656"],
		"index": "614",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941595101649.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837620027.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595101656.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}]
}, {
	"cls_id": "07",
	"cls_name": "儿童玩具",
	"child": {
		"704": {
			"cls_id": "0704",
			"cls_name": "模型玩具",
			"img": ["6970707190684", "6970707190899", "6970707190929"],
			"index": "704",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6970707190684.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970707190899.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970707190929.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"705": {
			"cls_id": "0705",
			"cls_name": "拼图积木",
			"img": ["6971619010138", "6971619010145", "6932691995423"],
			"index": "705",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6971619010138.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6971619010145.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6932691995423.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"706": {
			"cls_id": "0706",
			"cls_name": "益智玩具",
			"img": ["6952516803726", "6952516803078", "6970574421683"],
			"index": "706",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6952516803726.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6952516803078.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970574421683.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"707": {
			"cls_id": "0707",
			"cls_name": "季节产品",
			"img": ["6926205600774", "6924270302678", "6947806402635"],
			"index": "707",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6926205600774.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6924270302678.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6947806402635.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"708": {
			"cls_id": "0708",
			"cls_name": "潮流玩具",
			"img": ["6970643770070", "6946904786616", "6946904780423"],
			"index": "708",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6970643770070.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6946904786616.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6946904780423.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		}
	},
	"foods": [{
		"cls_id": "0704",
		"cls_name": "模型玩具",
		"img": ["6970707190684", "6970707190899", "6970707190929"],
		"index": "704",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6970707190684.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970707190899.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970707190929.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0705",
		"cls_name": "拼图积木",
		"img": ["6971619010138", "6971619010145", "6932691995423"],
		"index": "705",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6971619010138.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6971619010145.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6932691995423.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0706",
		"cls_name": "益智玩具",
		"img": ["6952516803726", "6952516803078", "6970574421683"],
		"index": "706",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6952516803726.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6952516803078.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970574421683.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0707",
		"cls_name": "季节产品",
		"img": ["6926205600774", "6924270302678", "6947806402635"],
		"index": "707",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6926205600774.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6924270302678.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6947806402635.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0708",
		"cls_name": "潮流玩具",
		"img": ["6970643770070", "6946904786616", "6946904780423"],
		"index": "708",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6970643770070.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6946904786616.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6946904780423.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}]
}, {
	"cls_id": "08",
	"cls_name": "毛绒公仔",
	"child": {
		"801": {
			"cls_id": "0801",
			"cls_name": "小号公仔",
			"img": ["6941196092216", "6939837607868", "6939837607912"],
			"index": "801",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196092216.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837607868.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837607912.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"802": {
			"cls_id": "0802",
			"cls_name": "中号公仔",
			"img": ["6941196081067", "6941595109881", "6941595109898"],
			"index": "802",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196081067.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595109881.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595109898.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"803": {
			"cls_id": "0803",
			"cls_name": "大号公仔",
			"img": ["6941196068327", "6941196085652", "6941196086741"],
			"index": "803",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196068327.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196085652.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196086741.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"809": {
			"cls_id": "0809",
			"cls_name": "版权公仔",
			"img": ["6941595109898", "6941196064633", "6941196056843"],
			"index": "809",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941595109898.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196064633.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196056843.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		}
	},
	"foods": [{
		"cls_id": "0801",
		"cls_name": "小号公仔",
		"img": ["6941196092216", "6939837607868", "6939837607912"],
		"index": "801",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196092216.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837607868.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837607912.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0802",
		"cls_name": "中号公仔",
		"img": ["6941196081067", "6941595109881", "6941595109898"],
		"index": "802",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196081067.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595109881.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595109898.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0803",
		"cls_name": "大号公仔",
		"img": ["6941196068327", "6941196085652", "6941196086741"],
		"index": "803",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196068327.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196085652.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196086741.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0809",
		"cls_name": "版权公仔",
		"img": ["6941595109898", "6941196064633", "6941196056843"],
		"index": "809",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941595109898.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196064633.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196056843.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}]
}, {
	"cls_id": "09",
	"cls_name": "数码配件",
	"child": {
		"901": {
			"cls_id": "0901",
			"cls_name": "手机配件",
			"img": ["6941196078913", "6941595119309", "6941595119323"],
			"index": "901",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196078913.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595119309.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595119323.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"902": {
			"cls_id": "0902",
			"cls_name": "充电设备",
			"img": ["6941196099376", "6941595103148", "6941595102950"],
			"index": "902",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196099376.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595103148.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941595102950.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"903": {
			"cls_id": "0903",
			"cls_name": "影音娱乐",
			"img": ["6939837610288", "6941196072133", "6939837631269"],
			"index": "903",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837610288.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196072133.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837631269.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"904": {
			"cls_id": "0904",
			"cls_name": "灯具",
			"img": ["6939837610271", "6970574420389", "6939837612763"],
			"index": "904",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6939837610271.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970574420389.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837612763.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"905": {
			"cls_id": "0905",
			"cls_name": "家用电器",
			"img": ["6970574429511", "6970574425353", "6970574421843"],
			"index": "905",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6970574429511.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970574425353.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6970574421843.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"906": {
			"cls_id": "0906",
			"cls_name": "电脑外设",
			"img": ["6970574423809", "16000573", "6939837605819"],
			"index": "906",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6970574423809.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/16000573.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6939837605819.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"907": {
			"cls_id": "0907",
			"cls_name": "季节产品",
			"img": ["6941196063889", "6941196083535", "6941196077978"],
			"index": "907",
			"lazy": [{
				"src": "http://img.xmvogue.com/thumb/6941196063889.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196083535.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}, {
				"src": "http://img.xmvogue.com/thumb/6941196077978.jpg?x-oss-process=style/80",
				"show": false,
				"loaded": false
			}]
		},
		"908": {
			"cls_id": "0908",
			"cls_name": "移动电源",
			"img": null,
			"index": "908",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		}
	},
	"foods": [{
		"cls_id": "0901",
		"cls_name": "手机配件",
		"img": ["6941196078913", "6941595119309", "6941595119323"],
		"index": "901",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196078913.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595119309.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595119323.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0902",
		"cls_name": "充电设备",
		"img": ["6941196099376", "6941595103148", "6941595102950"],
		"index": "902",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196099376.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595103148.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941595102950.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0903",
		"cls_name": "影音娱乐",
		"img": ["6939837610288", "6941196072133", "6939837631269"],
		"index": "903",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837610288.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196072133.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837631269.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0904",
		"cls_name": "灯具",
		"img": ["6939837610271", "6970574420389", "6939837612763"],
		"index": "904",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6939837610271.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970574420389.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837612763.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0905",
		"cls_name": "家用电器",
		"img": ["6970574429511", "6970574425353", "6970574421843"],
		"index": "905",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6970574429511.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970574425353.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6970574421843.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0906",
		"cls_name": "电脑外设",
		"img": ["6970574423809", "16000573", "6939837605819"],
		"index": "906",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6970574423809.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/16000573.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6939837605819.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0907",
		"cls_name": "季节产品",
		"img": ["6941196063889", "6941196083535", "6941196077978"],
		"index": "907",
		"lazy": [{
			"src": "http://img.xmvogue.com/thumb/6941196063889.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196083535.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}, {
			"src": "http://img.xmvogue.com/thumb/6941196077978.jpg?x-oss-process=style/80",
			"show": false,
			"loaded": false
		}]
	}, {
		"cls_id": "0908",
		"cls_name": "移动电源",
		"img": null,
		"index": "908",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}]
}, {
	"cls_id": "10",
	"cls_name": "休闲食品",
	"child": {
		"100101": {
			"cls_id": "100101",
			"cls_name": "糖果",
			"img": null,
			"index": "100101",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		},
		"100102": {
			"cls_id": "100102",
			"cls_name": "炒货",
			"img": null,
			"index": "100102",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		},
		"100103": {
			"cls_id": "100103",
			"cls_name": "坚果",
			"img": null,
			"index": "100103",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		},
		"100104": {
			"cls_id": "100104",
			"cls_name": "饼干",
			"img": null,
			"index": "100104",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		},
		"100105": {
			"cls_id": "100105",
			"cls_name": "膨化",
			"img": null,
			"index": "100105",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		},
		"100106": {
			"cls_id": "100106",
			"cls_name": "蜜饯果脯",
			"img": null,
			"index": "100106",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		},
		"100107": {
			"cls_id": "100107",
			"cls_name": "肉脯",
			"img": null,
			"index": "100107",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		},
		"100108": {
			"cls_id": "100108",
			"cls_name": "饮料",
			"img": null,
			"index": "100108",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		},
		"100109": {
			"cls_id": "100109",
			"cls_name": "其它",
			"img": null,
			"index": "100109",
			"lazy": [{
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}, {
				"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
				"show": true,
				"loaded": false
			}]
		}
	},
	"foods": [{
		"cls_id": "100101",
		"cls_name": "糖果",
		"img": null,
		"index": "100101",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "100102",
		"cls_name": "炒货",
		"img": null,
		"index": "100102",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "100103",
		"cls_name": "坚果",
		"img": null,
		"index": "100103",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "100104",
		"cls_name": "饼干",
		"img": null,
		"index": "100104",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "100105",
		"cls_name": "膨化",
		"img": null,
		"index": "100105",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "100106",
		"cls_name": "蜜饯果脯",
		"img": null,
		"index": "100106",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "100107",
		"cls_name": "肉脯",
		"img": null,
		"index": "100107",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "100108",
		"cls_name": "饮料",
		"img": null,
		"index": "100108",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "100109",
		"cls_name": "其它",
		"img": null,
		"index": "100109",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}]
}, {
	"cls_id": "14",
	"cls_name": "物料耗材",
	"foods": [{
		"cls_id": "14",
		"cls_name": "物料耗材",
		"index": "14",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "14",
		"cls_name": "物料耗材",
		"index": "14",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}, {
		"cls_id": "14",
		"cls_name": "物料耗材",
		"index": "14",
		"lazy": [{
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}, {
			"src": "http://dh.xmcpcn.com/Public/images/none.jpg",
			"show": true,
			"loaded": false
		}]
	}]
}]

export default {
	carouselList,
	cartList,
	detailData,
	lazyLoadList,
	userInfo,
	shareList,
	goodsList,
	orderList,
	cateList,
	cateData
}
