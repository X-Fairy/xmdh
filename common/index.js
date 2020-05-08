const api = 'https://api.xmvogue.com';
// const api="http://172.21.8.128/XMapi/api";
const now = Date.now || function() {
	return new Date().getTime();
};
var loadsatus = 1
const isArray = Array.isArray || function(obj) {
	return obj instanceof Array;
};
//post请求
function postRequest(url, params, success, fail) {
	this.post(url, params, success, fail)

}
const userinfo = uni.getStorageSync('userinfo');
//POST请求
function post(url, params, success, fail) {
	let that = this;
	const data = uni.getStorageSync('userinfo');
	const lang = uni.getStorageSync('lang');
	// console.log(data)
	let cooking = {
		uid: data.uid,
		hdid: data.hdid,
		sign: data.token,
		oversea: data.oversea
	}
	// 海外版本语言切换
	if (lang != "") {
		cooking.lang = lang.lang
	}
	// 购物车
	if (params.src) {
		params.uname = data.username;
	}
	//合并参数
	params = Object.assign(cooking, params);
	uni.request({
		url: api + url,
		method: 'POST',
		header: {
			'Content-type': 'application/x-www-form-urlencoded'
		},
		data: params,
		success: res => {
			// console.log(res.data)
			if (res.statusCode == 200) {
				if (loadsatus == 2) {
					uni.hideLoading();
				}
				// console.log(res.data)
				success(res.data) //回调
			} else {
				uni.hideLoading();
				uni.showModal({
					content: "网络异常,请重新加载",
					success: (e) => {
						if (e.confirm) {
							load("重新加载")
							loadsatus = 2
							setTimeout(function() {
								post(url, params, success, fail)
							}, 1000)
						} else {
							console.log("取消")
						}
					}
				})
			}
		},
		fail: (res) => {
			console.log(res);
			uni.hideLoading();
			uni.showModal({
				content: "网络异常,请重新加载",
				success: (e) => {
					if (e.confirm) {
						load("重新加载")
						loadsatus = 2
						setTimeout(function() {
							post(url, params, success, fail)
						}, 1000)
					}
				}
			})
			if (res.errMsg == "request:fail timeout") {
				return false;
			};
			fail(res) //回调
		},
		complete: function() {}
	});
}



//GET请求
function market(url, params, success, fail) {
	let that = this;
	const data = uni.getStorageSync('userinfo');
	//获取用户信息
	let cooking = {
		uid: data.uid,

		sign: data.token,
	}
	//合并参数
	params = Object.assign(cooking, params);

	uni.request({
		url: api + url,
		method: 'POST',
		header: {
			'Content-type': 'application/x-www-form-urlencoded'
		},
		data: params,
		success: res => {
			console.log(res);
			success(res) //回调
		},
		fail: (res) => {
			console.log(res);
			fail(res) //回调
			uni.hideLoading();

		},
		complete: function() {}
	});
}




//测试数据
function ceshi(url, params, success, fail) {
	let that = this;
	const data = uni.getStorageSync('userinfo');
	let cooking = {
		uid: data.uid,
		hdid: data.hdid,
		sign: data.token,
		oversea: data.oversea,
	}

	if (cooking.oversea == "1") {
		cooking.lang = data.lang
	};

	if (data == "") {
		if (!params.version) {
			uni.showToast({
				title: '请登录后操作',
				image: "../../static/msg.png",
				duration: 1500
			});
			setTimeout(function() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}, 1500)
			return false;
		}

	}
	//合并参数
	params = Object.assign(cooking, params);
	uni.request({
		url: "http://172.21.8.128/api" + url,
		method: 'POST',
		header: {
			'Content-type': 'application/x-www-form-urlencoded'
		},
		data: params,
		success: res => {
			// console.log(res);
			success(res.data) //回调
		},
		fail: (res) => {
			console.log(res);
			fail(res) //回调
			uni.hideLoading();

		},
		complete: function() {}
	});
}

// 原生js模拟jquery ajax
// function ajax() {
// 	var ajaxData = {
// 		type: arguments[0].type || "GET",
// 		url: arguments[0].url || "",
// 		async: arguments[0].async || "true",
// 		data: arguments[0].data || null,
// 		dataType: arguments[0].dataType || "text",
// 		contentType: arguments[0].contentType || "application/x-www-form-urlencoded",
// 		beforeSend: arguments[0].beforeSend || function() {},
// 		success: arguments[0].success || function() {},
// 		error: arguments[0].error || function() {}
// 	}
// 	ajaxData.beforeSend()
// 	var xhr = createxmlHttpRequest();
// 	xhr.responseType = ajaxData.dataType;
// 	xhr.open(ajaxData.type, ajaxData.url, ajaxData.async);
// 	xhr.setRequestHeader("Content-Type", ajaxData.contentType);
// 	xhr.send(convertData(ajaxData.data));
// 	xhr.onreadystatechange = function() {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				ajaxData.success(xhr.response)
// 			} else {
// 				ajaxData.error()
// 			}
// 		}
// 	}
// }
// 
// function createxmlHttpRequest() {
// 	if (window.ActiveXObject) {
// 		return new ActiveXObject("Microsoft.XMLHTTP");
// 	} else if (window.XMLHttpRequest) {
// 		return new XMLHttpRequest();
// 	}
// }
// 


function convertData(data) {
	if (typeof data === 'object') {
		var convertResult = "";
		var n = 0;
		for (var c in data) {
			if (typeof(data[c]) == "string" || typeof(data[c]) == "number") {
				convertResult += c + "=" + data[c] + "&";
			}
			if (typeof(data[c]) == 'object') {
				for (var i in data[c]) {
					convertResult += c + "[]=" + data[c][i] + "&";
				}
			}
		}
		console.log(convertResult)
		convertResult = convertResult.substring(0, convertResult.length - 1)
		return convertResult;
	} else {
		return data;
	}
}

function arry(url, params, success, fail) {
	let that = this;
	const data = uni.getStorageSync('userinfo');
	//获取用户信息
	let cooking = {
		uid: data.uid,
		hdid: data.hdid,
		sign: data.token,
	}
	//合并参数
	params = Object.assign(cooking, params);
	uni.request({
		url: api + url,
		method: 'POST',
		header: {
			'Content-type': 'application/x-www-form-urlencoded'
		},
		data: convertData(params),
		success: res => {
			// console.log(res);
			success(res) //回调
		},
		fail: (res) => {
			// console.log(res);
			fail(res) //回调

			uni.hideLoading();
		},
		complete: function() {}
	});
};

// 格式化时间
function formatDate(date) {

	var date = new Date(date * 1000); //如果date为13位不需要乘1000
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	return `${M}月${D}日`;

}


// 获取字符串长度
function strlen(str) {
	var len = 0;
	for (var i = 0; i < str.length; i++) {
		var c = str.charCodeAt(i);
		//单字节加1 
		if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
			len++;
		} else {
			len += 2;
		}
	}
	return len;
}



//发送消息
function send() {
	const data = uni.getStorageSync('userinfo');
	const pages = getCurrentPages();
	let url = pages[0].route.split("/");
	let test = '{"user_id":"' + data.hdid + '","user_name":"' + data.username + '","page":"' + url[2] + '","src":"app"}'
	let msg = {
		class: "Xmorder",
		action: "connect",
		content: test
	}
	let params = JSON.stringify(msg);
	console.log(params);
	uni.sendSocketMessage({
		data: params,
		success: function(res) {
			console.log(res)
		},
		fail: function(res) {
			console.log(res)
		}
	})
};


// webscoket
let lockReconnect = false; //避免重复连接
let ws = null; //WebSocket的引用
let wsUrl = "wss://sw.xmvogue.com"; //这个要与后端提供的相同
function createWebSocket() {
	try {
		uni.connectSocket({
			url: wsUrl
		});
		initEventHandle();
	} catch (e) {
		// reconnect(wsUrl);
	}
}
// 连接失败
function reconnect(url) {
	if (lockReconnect) return;
	lockReconnect = true;
	//没连接上会一直重连，设置延迟避免请求过多
	setTimeout(function() {
		createWebSocket(wsUrl);
		console.log("正在重连，当前时间" + new Date())
		lockReconnect = false;
	}, 5000); //这里设置重连间隔(ms)


}
/*********************初始化开始**********************/
function initEventHandle() {
	// 连接成功建立后响应
	uni.onSocketOpen(function(res) {
		console.log("成功连接到" + wsUrl);
		setTimeout(function() {
			send();
		}, 2000);
		//心跳检测重置
		heartCheck.reset().start();
	});

	// 收到服务器消息后响应
	uni.onSocketMessage(function(res) {
		let list = res.data.split("arg:");
		let data = JSON.parse(list[1])
		console.log(data);
		//如果获取到消息，心跳检测重置
		//拿到任何消息都说明当前连接是正常的
		// heartCheck.reset().start();
		//Json转换成Object
		// var msg = eval('(' + e.data + ')');
		// if (msg.message == "heartBeat") {
		// 	//忽略心跳的信息，因为只要有消息进来，断线重连就会重置不会触发
		// } else {
		// 	//处理消息的业务逻辑
		// }
	});


	// 连接关闭后响应
	uni.onSocketClose(function(res) {
		console.log('WebSocket 已关闭！');
		reconnect(wsUrl); //重连
	});
	uni.onSocketError(function(res) {
		reconnect(wsUrl); //重连
	});

}
/***************初始化结束***********************/
//心跳检测
var heartCheck = {
	timeout: 15000, //毫秒
	timeoutObj: null,
	serverTimeoutObj: null,
	reset: function() {
		clearTimeout(this.timeoutObj);
		clearTimeout(this.serverTimeoutObj);
		return this;
	},
	start: function() {
		var self = this;
		this.timeoutObj = setTimeout(function() {
			//这里发送一个心跳，后端收到后，返回一个心跳消息，
			//onmessage拿到返回的心跳就说明连接正常

			uni.sendSocketMessage({
				data: "keep",
				success: function(res) {
					// console.log(res);
					heartCheck.reset().start();
				},
				fail: function(res) {
					console.log(res)
				}
			})
			self.serverTimeoutObj = setTimeout(function() { //如果超过一定时间还没重置，说明后端主动断开了
				uni.onSocketClose(function(res) {
					console.log('WebSocket 已关闭！');
					reconnect(wsUrl); //重连
				}); //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
			}, self.timeout)
		}, this.timeout)
	}
}



// 客户端app更新
function getclient() {
	// console.log("更新")
	plus.runtime.getProperty(plus.runtime.appid, (wgtinfo) => {
		// console.log(wgtinfo.version); //应用版本号
		// 判断当前系统
		let status = "";
		if (plus.os.name.toLowerCase() == "android") {
			status = 1; // 当前系统为安卓
		} else {
			status = 2; // 当前系统为ios
		}
		let params = {
			version: wgtinfo.version,
			type: status
		}
		post("/index.php/Home/Version/index", params, function(res) {
			console.log(res)
			if (res.id) {
				uni.navigateTo({
					url: '/pages/update/update'
				});
			}
		})
	})
}


// 服务器端app更新
function getserver() {
	plus.screen.lockOrientation('portrait-primary') //竖屏正方向锁定
	plus.runtime.getProperty(plus.runtime.appid, (wgtinfo) => {
		console.log(wgtinfo.version); //应用版本号
		let status = "";
		let params = "";
		if (plus.os.name.toLowerCase() == "android") {
			status = 1; // 当前系统为安卓
			params = {
				type: status,
				version: wgtinfo.version,
				link: "https://service.dcloud.net.cn/build/download/8cccfbe0-b8e5-11e9-8095-1f7572572025",
				text: '请求余额接口/增加新品上线商品列表/我的库存增加查询搜索关键字/我的订单增加已确认和未确定订单'
			}
		} else {
			status = 2; // 当前系统为ios
			params = {
				type: status,
				version: wgtinfo.version,
				link: "https://service.dcloud.net.cn/build/download/8cccfbe0-b8e5-11e9-8095-1f7572572025",
				text: 'ios更新了'
			}
		}
		post("/index.php/Home/Version/check_version", params, function(res) {

		})
	})
}

// 获取一周前
function weekend() {
	let inputTime = new Date(new Date - 7 * 24 * 3600 * 100);
	const date = new Date(inputTime);
	var Y = date.getFullYear();
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	return `${Y}-${M}-${D}`;
}

// 获取一个月前
function month() {
	var date = new Date(); //如果date为13位不需要乘1000
	date.setMonth(date.getMonth() - 1);
	var Y = date.getFullYear();
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	return `${Y}-${M}-${D}`;
}

// 获取昨天
function yesterday() {
	let inputTime = new Date(new Date - 1000 * 60 * 60 * 24);
	const date = new Date(inputTime);
	var Y = date.getFullYear();
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	return `${Y}-${M}-${D}`;
}
// 获取今天
function newdata() {
	const date = new Date();
	var Y = date.getFullYear();
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	return `${Y}-${M}-${D}`;
}
// 修改页面标题

function pageTitle(name) {
	uni.setNavigationBarTitle({
		title: name
	});
}
// 加载
function load(data) {
	uni.showLoading({
		title: data
	});
}


function formatDateTime(timestamp) {
	var date = new Date(timestamp * 1000);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	return y + '/' + m + '/' + d + ' ' + h + ':' + minute + ':' + second;
};
export default {
	api,
	now,
	isArray,
	postRequest: postRequest,
	post: post,
	market: market,
	ceshi: ceshi,
	arry: arry,
	formatDate: formatDate,
	strlen: strlen,
	send: send,
	createWebSocket: createWebSocket,
	getclient: getclient,
	getserver: getserver,
	weekend: weekend,
	month: month,
	yesterday: yesterday,
	newdata: newdata,
	pageTitle: pageTitle,
	load: load,
	userinfo: userinfo,
	formatDateTime: formatDateTime
}
