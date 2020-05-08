<template>
	<view class="content">
		<view class="empty" v-if="mvc.cartoon==true">

			<view class="">
				{{i18n.hint1}}
			</view>
			<view style="color: #01AAEF;" @click="navSale">
				{{i18n.hint2}}
			</view>
		</view>

		<view v-else>
			<view class="row b-b">
				<text class="tit">{{i18n.name}}</text>
				<input class="input" type="text" v-model="mvc.form.express_name" :placeholder="i18n.pla1" placeholder-class="placeholder" />
			</view>
			<view class="row b-b">
				<text class="tit">{{i18n.number}}</text>
				<input class="input" type="number" v-model="mvc.form.express_number" :placeholder="i18n.pla2" placeholder-class="placeholder" />
			</view>

			<view class="row b-b">
				<text class="tit">{{i18n.fee}}</text>
				<input class="input" type="number" v-model="mvc.form.express_fee" :placeholder="i18n.pla3" placeholder-class="placeholder" />
			</view>
			<view class="row b-b" style="height: 150upx;">
				<text class="tit">{{i18n.img}}</text>
				<image :src="mvc.form.express_img" mode="" @click="upload" class="uploadImg"></image>
			</view>
			<view class="addcard">
				<view class="s-header box-border" v-for="(item,index) in mvc.expressList" :key="index">
					<image :src="item.img" mode="" class="s-header-img" @error="imageError(item,index)"></image>
					<view class="s-text">
						<view>
							{{i18n.item_no}}: {{item.item_no}}
						</view>
						<view>
							{{i18n.item_name}}: {{item.item_name}}
						</view>
						<view class="sales">
							<view>
								{{i18n.qty}}：{{item.tqty}}
							</view>
							<view class="salesNum">
								<text>{{i18n.num}}：</text>
								<input type="text" v-model="item.num" class="salesInput input" style="height: 30upx;" />
							</view>
						</view>
					</view>

				</view>
			</view>
			<view>
				<button class="xi-btn" @click="confirm">{{i18n.submit}}</button>
			</view>
		</view>
	</view>

</template>

<script>
	import '@/common/uni.css';
	import api from '@/common/index.js';
	let mvc = {
		form: {
			express_name: '',
			express_number: '',
			express_fee: '',
			express_img: "../../static/addHeadIcon.png",
			express_imgName: ''
		},
		expressList: [],
		cartoon: false
	}
	export default {
		data() {
			return {
				mvc: {
					form: {
						express_name: '',
						express_number: '',
						express_fee: '',
						express_img: "../../static/addHeadIcon.png",
						express_imgName: ''
					},
					expressList: [],
					cartoon: false
				}
			}
		},
		onLoad() {
			let that = this;
			setTimeout(function() {
				api.pageTitle(that.$t('addsend').title);
				that.loadData();
			},300)
		},
		onShow() {

		},
		computed: {
			i18n() {
				return this.$t('addsend');
			}
		},
		methods: {
			loadData() {

				let that = this;
				that.$ajax.logisView().then(res => {
					let list = res.list;
					list.forEach(function(item, index) {
						item.img = that.$store.getters.imgShow + '/thumb/' + item.item_no + '.jpg?x-oss-process=style/300';
						item.num = "";
					})
					mvc.expressList = res.list;

					if (mvc.expressList.length == 0) {
						mvc.cartoon = true;
					}
					that.mvc = mvc;
				})
			},
			confirm() {

				let data = mvc.form;
				let that = this;

				if (!data.express_name) {
					this.$api.msg(that.$t('addsend').p1);
					return;
				}
				if (!data.express_number) {
					this.$api.msg(that.$t('addsend').p2);
					return;
				}
				if (!data.express_fee) {
					this.$api.msg(that.$t('addsend').p3);
					return;
				}
				if (data.express_img == "../../static/addHeadIcon.png") {
					this.$api.msg(that.$t('addsend').p5);
					return;
				}
				let list = mvc.expressList;

				let params = {
					item_no: [],
					num: [],
					express_name: data.express_name,
					express_number: data.express_number,
					express_fee: data.express_fee,
					express_img: data.express_imgName
				};
				if (mvc.expressList.length == 0) {
					that.$api.msg(that.$t('addsend').p4)
				};
				list.forEach(function(item, index) {
					params.item_no.push(item.item_no);
					params.num.push(item.num)
				})
				console.log(params);
				api.arry("/index.php/Home/User/sh_express_add", params, function(res) {
					that.$api.msg(that.$t('index').msg3);
					uni.navigateBack({
						delta: 1
					})
				})
			},
			imageError(key, index) {
				key.img = 'http://dh.xmcpcn.com/Public/images/none.jpg';
			},
			upload() {
				let user = uni.getStorageSync('userinfo');
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						// console.log(tempFilePaths[0])
						const uploadTask = uni.uploadFile({
							url: 'https://api.xmvogue.com/index.php/Home/User/uppic',
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								"hdid": user.hdid,
								"tmp_name": "ximei.jpg",
								"uid": user.uid,
								"sign": user.token
							},
							success: (uploadFileRes) => {
								let imgType = uploadFileRes.data;
								imgType = imgType.split("/")
								this.form.express_img = 'http://ximiphoto.oss-cn-hangzhou.aliyuncs.com/shouhou/' + uploadFileRes.data +
									'?x-oss-process=style/300'
								this.form.express_imgName = imgType[1];
								that.$api.msg(that.$t('sale_add').hint8);
							}
						});
						uploadTask.onProgressUpdate((res) => {
							// console.log('上传进度' + res.progress);
							// console.log('已经上传的数据长度' + res.totalBytesSent);
							// console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);

							// 测试条件，取消上传任务。
							if (res.progress == 100) {

							}
						});
					}
				});
			},
			navSale() {
				uni.navigateTo({
					url: "/pages/sale-add/sale-add"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		height: 100upx;
		background: #fff;

		.tit {
			flex-shrink: 0;
			width: 200upx;
			font-size: 30upx;
			color: $font-color-dark;
		}

		.placeholder {
			font-size: 28upx;
		}

		.input {
			flex: 1;
			font-size: 28upx;
			color: $font-color-dark;
		}

		.uploadImg {
			width: 100upx;
			height: 100upx;
		}

	}

	.default-row {
		margin-top: 16upx;

		.tit {
			flex: 1;
		}

		switch {
			transform: translateX(16upx) scale(.9);
		}
	}

	.add-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: #7AC5CD;
		border-radius: 10upx;

	}

	.s-textarea {
		display: flex;
		background: white;
		padding: 0 30upx;
		height: 150upx;

		.tit {
			flex-shrink: 0;
			width: 150upx;
			font-size: 30upx;
			color: $font-color-dark;
			line-height: 150upx;
		}

		.uni-textarea {
			height: 150upx;
			overflow: hidden;
		}
	}

	.s-radio {
		width: 100%;
		display: flex;
		justify-content: space-around;
		border: 1px solid #eeeeee;
	}

	.uni-list-cell,
	.uni-list {
		position: static;
	}

	.express {
		padding: 30upx;
		background: white;
	}



	.sales {
		display: flex;


		.salesNum {
			display: flex;
			margin-left: 30upx;

			.salesInput {
				width: 100upx;
				height: 20upx;
				border: 1px solid #eeeeee;
				border-radius: 5upx
			}
		}
	}



	.addcard {
		padding: 0 30upx 120upx 30upx;

	}

	%section {
		background: white;
		border-radius: 10upx;
		width: 100%;
		padding: 20upx;

	}

	.s-header {
		@extend %section;
		display: flex;
		justify-content: left;
		margin: 10upx 0;
		position: relative;

		image {
			width: 120upx;
			height: 110upx;
			border-radius: 10upx;
			margin: 0 15upx;
		}

		.s-text {

			view {
				font-size: 26upx;

			}

		}


	}

	.empty {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: $page-color-base;
		padding-bottom: 120upx;
	}
</style>
