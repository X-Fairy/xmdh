<template>
	<view class="container">
		<!-- <view class="left-bottom-sign"></view> -->
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>

		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				{{i18n.companyName}}
			</view>
			<view class="welcome">
				{{i18n.project}}
			</view>
			<view class="input-content">
				<view v-if="app==2">
					{{language}}
					<switch color="#FFCC33" style="transform:scale(0.7)" @change="switchChange" :checked="langStatus" />
					<!-- <view class="uni-form-item">
						<view style="margin-right:10upx ;">Image: </view>
						<radio-group name="radio" @change="radioChange">
							<label>
								<radio value="img" />CN
							</label>
							<label>
								<radio value="hwimg" checked="true" />International
							</label>
						</radio-group>
					</view> -->
				</view>
				<view class="input-item">
					<text class="tit">{{i18n.user}}</text>
					<input type="text" :value="name" :placeholder="i18n.userMsg" data-key="name" @input="nameChange" @click="addname" />
				</view>

				<view class="history" v-if="hisHdid==true">
					<view style="display: flex;justify-content: space-between;">
						<view>
							{{i18n.history}}：
						</view>
						<view class="">
							<text class="del-btn yticon icon-fork" @click="close"></text>
						</view>
					</view>
					<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
						<view class="hiscolor">
							<view v-for="(item,index) in hisList" :key='index' @click="bindhis(item.name)">
								<view class="histext">
									{{item.name}}
								</view>
							</view>
						</view>


					</scroll-view>
				</view>

				<view class="input-item">
					<text class="tit">{{i18n.pass}}</text>
					<input type="password" :value="pass" :placeholder="i18n.passMsg" data-key="pass" @input="inputChange" />
				</view>

				<view class="uni-form-item uni-column">
					<checkbox-group name="checkbox" @click="bindcheckbox">
						<label style="float:right ;" class="save">
							<checkbox value="checkbox" />{{i18n.save}}
						</label>

					</checkbox-group>
				</view>

			</view>
			<button class="confirm-btn" @click="toLogin" :disabled="logining">{{i18n.login}}</button>

			<!-- <view class="forget-section">
				忘记密码?
			</view> -->
		</view>
		<!-- <view class="register-section">
			还没有账号?
			<text @click="toRegist">马上注册</text>
		</view> -->
	</view>
</template>

<script>
	import index from '@/common/index.js';

	import md5 from '@/common/md5.min.js';
	import {
		mapMutations
	} from 'vuex';

	export default {

		data() {
			return {
				app: 1,
				name: '',
				pass: '',
				logining: false,
				scrollTop: 0,
				hisHdid: false,
				hisList: [],
				checkbox: false,
				language: '中文',
				langStatus: true,
				images: 'hwimg'
			}
		},
		computed: {
			i18n() {
				return this.$t('login')
			}
		},
		onShow() {
			this.hisHdid = false
		},
		onLoad() {
			// console.log("用户信息"+uni.getStorageSync('userinfo'))
			// 判断历史记录
			let arry = uni.getStorageSync('namehistory');
			//uni.removeStorageSync('namehistory');
			console.log(arry)
			if (arry == "") {
				let username = [];
				uni.setStorageSync('namehistory', username);
			} else {
				this.hisList = arry
			}
			// 判断语言
			if (this.$store.state.app == "2") {
				this.app = 2;
				var lang = uni.getStorageSync('lang');
				if (lang) {
					console.log(lang.locale)
					if (lang.locale == "zh") {
						this.language = "English";
						this.langStatus = false;
					}
					if (lang.locale == "en") {
						this.language = "中文";
						this.langStatus = false;
					}
				} else {
					this.$i18n.locale = 'en';
					this.language = "中文";
					this.langStatus = false;
				}
			}
			//#ifdef APP-PLUS
			this.address();
			// #endif
		},
		methods: {
			...mapMutations(['login']),

			inputChange(e) {
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			// 修改语言
			switchChange(e) {
				let that = this;
				let data = {
					locale: ''
				}
				if (this.language == "English") {
					this.language = "中文";
					this.langStatus = true
					this.$i18n.locale = 'en';
					data.locale = "en"
				} else {
					this.langStatus = true
					this.language = "English";
					this.$i18n.locale = 'zh';
					data.locale = "zh"
				};
				uni.setStorageSync('lang', data);
			},
			// 监控input输入
			nameChange(e) {
				const key = e.currentTarget.dataset.key;
				let value = e.detail.value;
				this[key] = e.detail.value;
				this.pass = "";

			},
			bindcheckbox() {
				this.checkbox = !this.checkbox;

			},
			radioChange(evt) {
				this.images = evt.detail.value;
			},
			// 点击input触发历史记录
			addname() {
				let username = uni.getStorageSync('namehistory');
				console.log(username.length)
				if (username.length != 0) {
					this.hisList = username;
					this.hisHdid = true
				}

			},

			navBack() {
				uni.navigateBack();
			},
			toRegist() {

			},
			bindhis(data) {
				this.name = data;
				this.pass = "";
				this.hisHdid = false;
			},
			close() {
				this.hisHdid = false
			},
			// 获取当前位置
			address() {
				// 手机换机运行
				let that = this
				plus.geolocation.getCurrentPosition(function getinfo(position) {
					if (position.address.country != "中国") {
						that.$i18n.locale = 'en'
					}

				})
			},
			// 提交登录
			async toLogin() {

				let that = this;
				const {
					name,
					pass
				} = this;
				uni.hideKeyboard();
				//验证手机号码
				if (name == "") {
					uni.showToast({
						title: that.$t('login').userMsg,
						icon: "none"
					});
					return false;
				}
				//验证手机号码
				if (pass == "") {
					uni.showToast({
						title: that.$t('login').passMsg,
						icon: "none"
					});
					return false;
				}


				uni.request({
					url: index.api + '/index.php/Home/Login/index',
					method: 'post',
					data: {
						user: name,
						pass: pass,
						images: that.images
					},
					header: {
						'Content-type': 'application/x-www-form-urlencoded'
					},
					success: eve => {
						const content = eve.data.data;
						// 登录成功

						if (eve.data.res == 'ok') {
							if (that.$store.state.app == "2") {
								// 获取语言
								let langdata = {
									locale: '',
									lang: ''
								}
								if (that.language == "English") {
									langdata.locale = "zh";
									langdata.lang = 'Chinese';
								} else {
									langdata.locale = "en";
									langdata.lang = 'English';

								}
								uni.setStorageSync('lang', langdata);
							}
							// 获取用户信息
							let user = {
								uid: content.uid,
								hdid: content.hdid,
								username: content.uname,
								token: md5(content.uid + content.hdid + "ximi"),
								isvip: content.isvip,
								oversea: content.oversea
							};
							// 更新登录状态
							that.login(user);
							if (that.checkbox == true) {
								console.log("需要保存")
								// 保存历史缓存
								let hidvalue = that.name;
								let arry = {
									name: hidvalue
								};

								let username = uni.getStorageSync('namehistory');
								// 当用户名历史记录为空时
								if (username.length == 0) {
									// console.log("进入1")
									username.push(arry);
								} else {
									// console.log("进入2");
									// 当用户名历史记录不为空时
									let ifname = 1
									for (let i = 0; i < username.length; i++) {
										switch (username[i].name) {
											case hidvalue:

												ifname = 2;
												break;

										}
									}
									if (ifname == 1) {

										username.push(arry);
									}

								} // 保存用户名历史记录
								uni.setStorageSync('namehistory', username);
								// console.log(uni.getStorageSync('namehistory'))
							}
							let wsUrl = "wss://sw.xmvogue.com";
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
												console.log(res);
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
							// 连接WebSocket
							uni.connectSocket({
								url: wsUrl
							});
							// 连接成功
							uni.onSocketOpen(function(res) {
								console.log("成功连接到" + wsUrl);
								setTimeout(function() {
									const data = uni.getStorageSync('userinfo');
									const pages = getCurrentPages();
									let url = pages[0].route.split("/");
									let test = '{"user_id":"' + data.hdid + '","user_name":"' + data.username + '","page":"' + url[2] +
										'","src":"app"}'
									let msg = {
										class: "Xmorder",
										action: "connect",
										content: test
									}
									let params = JSON.stringify(msg);
									uni.sendSocketMessage({
										data: params,
										success: function(res) {
											console.log(params);
											heartCheck.reset().start()
										},
										fail: function(res) {

										}
									})
								}, 2000);
							});

							// 服务器返回消息
							uni.onSocketMessage(function(res) {
								let list = res.data.split("arg:");
								let data = JSON.parse(list[1])
								console.log(data);
							});
							//#ifdef APP-PLUS
							// 客户端app检测更新	
							index.getclient();

							//服务器端app检测更新	
							// index.getserver();
							// #endif
							// 跳转主页
							uni.switchTab({
								url: '/pages/index/index'
							});
						} else {
							that.$api.msg(eve.data.msg)
						}


					},
					fail: res => {
						console.log(res)
					},
					complete: function() {}
				});
			}
		}

	}
</script>

<style lang='scss'>
	page {
		background: #fff;
	}

	.container {
		padding-top: 115px;
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}

	.wrapper {
		position: relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}

	.back-btn {
		position: absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: $font-color-dark;
	}

	.left-top-sign {
		font-size: 120upx;
		color: $page-color-base;
		position: relative;
		left: -16upx;
	}

	.right-top-sign {
		position: absolute;
		top: 80upx;
		right: -30upx;
		z-index: 95;

		&:before,
		&:after {
			display: block;
			content: "";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}

		&:before {
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}

		&:after {
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}

	.left-bottom-sign {
		position: absolute;
		left: -270upx;
		bottom: -320upx;
		border: 100upx solid #d0d1fd;
		border-radius: 50%;
		padding: 180upx;
	}

	.welcome {
		position: relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0, 0, 0, .3);
	}

	.input-content {
		padding: 0 60upx;
	}

	.input-item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 30upx;
		background: $page-color-light;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 20upx;

		&:last-child {
			margin-bottom: 0;
		}

		.tit {
			height: 50upx;
			line-height: 56upx;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}

		input {
			height: 60upx;
			font-size: 30upx;
			color: $font-color-dark;
			width: 100%;
		}
	}

	.confirm-btn {
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 20upx;
		background: $uni-color-primary;
		color: #fff;
		font-size: $font-lg;

		&:after {
			border-radius: 100px;
		}
	}

	.forget-section {
		font-size: $font-sm+2upx;
		color: $font-color-spec;
		text-align: center;
		margin-top: 40upx;
	}

	.register-section {
		position: absolute;
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;

		text {
			color: $font-color-spec;
			margin-left: 10upx;
		}
	}

	.scroll-Y {
		height: 130upx;
	}

	.history {
		position: absolute;
		top: 54%;
		border: 1px solid #f5f5f5;
		height: 200upx;
		background: white;
		z-index: 9999;
		opacity: 1;
		transition: opacity 0.4s linear;
		width: 630upx;
		background-color: #f5f5f5;
		border-radius: 10upx;
		color: #999999;
		padding: 5upx 20upx;
	}

	.hiscolor {
		margin: 20upx 0 10upx 0upx;

		.histext {
			font-size: $font-sm;
			line-height: 0;
			height: 45upx;
			padding: 5upx;
			line-height: 45upx;
			&:hover {
				background-color: #DDDDDD;
			
			}
		}
		
		
	}
</style>
