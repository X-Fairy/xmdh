<template>
	<view>
		<view class="heardinfo">
			<view style="font-size: 35upx;font-weight: bold;">
				{{mvc.logList.express_name}}快递
			</view>
			<view>
				{{mvc.logList.addtime}}
			</view>
		</view>
		<view class="content">
			<view class="logistics box-border">

				<view class="">
					物流单号：{{mvc.logList.express_number}}
				</view>
				<uni-steps :options="mvc.list2" :active="mvc.active" direction="column" />
			</view>
			<view v-for="(item,index) in mvc.detaList" :key="index" class="detaList box-border">
				<view class="s-header">
					<!-- <view class="s-img">
						<image :src="item.img" mode="" @error="imageError('detaList', index)"></image>
					</view> -->
					<imglazy :url="item.url" :sty="imglazyStyle"></imglazy>
					<view class="s-text title">
						<view class="clamp">
							商品名称:{{item.item_name}}
						</view>
						<view>
							商品编号: {{item.item_no}}
						</view>
					</view>
				</view>
				<!-- 	<view class="hr">
				</view> -->
				<view class="s-content">
					<view class="s-satus">
						<view>
							退回数:{{item.qdqty}}
						</view>
						<view>
							清点数:{{item.qty}}
						</view>
						<view>
							上账数:{{item.szqty}}
						</view>
						<view>
							退款额:￥{{item.amt}}
						</view>
					</view>
				</view>
			</view>
			<view class="s-content">
				<view class="uploadinfo">
					<text class="tit">面单图片:</text>
					<view class="imgFlex" v-if="mvc.logList.express_img!=null">
						<image :src="mvc.logList.express_url" mode="" class="uploadImg" @tap="previewImage(mvc.logList.express_img)"></image>
					</view>
					<view v-else>
						无
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import api from '@/common/index.js';
	import imglazy from '@/components/img-lazy/img-lazy.vue';
	let mvc = {
		detaList: [],
		active: 1,
		list2: [{
			title: '门店发货'
		}, {
			title: '仓库签收'
		}],
		logList: [],
		mid: ''
	}
	export default {
		components: {
			uniSteps,
			imglazy
		},
		data() {
			return {
				imglazyStyle: 'border-radius: 10upx;',
				mvc: {
					detaList: [],
					active: 1,
					list2: [{
						title: '门店发货'
					}, {
						title: '仓库签收'
					}],
					logList: [],
				}

			}
		},
		onLoad(optins) {
			let that = this;
			setTimeout(function() {
				mvc.mid = optins.id;
				that.loadData()
			})

		},
		methods: {
			loadData() {
				let that = this;
				const params = uni.getStorageSync('userinfo');
				let data = {
					mid: mvc.mid
				}
				that.$ajax.logisData(data).then(res => {
					let list = res.list;
					list.forEach(function(item, index) {
						item.img = that.$store.getters.imgShow + '/thumb/' + item.item_no + '.jpg?x-oss-process=style/80';

					})
					if (res.info.express_img != null) {
						res.info.express_url = that.$store.getters.imgShow + '/shouhou/' + params.hdid + "/" + res.info.express_img +
							'?x-oss-process=style/80'
					}
					mvc.logList = res.info;
					mvc.detaList = list;
					mvc.list2[1].desc = res.info.oper_date
					mvc.active = parseInt(res.info.type - 1);
					that.mvc = mvc;
				})

			},
			imageError(key, index) {
				mvc[key][index].img = 'http://dh.xmcpcn.com/Public/images/none.jpg';
			},
			previewImage(item) {
				let that = this;
				let params = uni.getStorageSync('userinfo');
				let img = that.$store.getters.imgShow + '/shouhou/' + params.hdid + "/" + item +
					'?x-oss-process=style/800'
				let urlList = [];
				urlList.push(img)
				uni.previewImage({
					current: img,
					urls: urlList
				})
			}
		}
	}
</script>

<style lang="scss">
	%flex-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.detaList {
		margin: 15upx 0;

	}

	page {
		background: #f8f8f8;
		font-size: 28upx;
	}

	.hr {

		border-bottom: 1px dashed #ccc;
		width: 100%;
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

		.lazy {
			width: 135;
			height: 125upx;
			padding-right: 10upx;
		}

		.s-img {
			width: 24%;
			height: 125upx;
			padding-right: 20upx;

			image {
				border-radius: 10upx;
				width: 100%;
				height: 125upx;

			}
		}

		.s-text {
			width: 70%;
			font-size: 28upx;
			flex: 2;
		}
	}

	.s-content {
		@extend %section;


		.s-satus {
			display: flex;
			justify-content: space-around;

			view {
				width: 50%;
				text-align: center;
				background-color: #eeeeee;
				border: 1px solid white;
				height: 55upx;
				line-height: 55upx;
				border-radius: 10upx;
				font-size: 23upx;
			}
		}
	}

	.logistics {
		@extend %section;

	}

	.uploadinfo {
		display: flex;

		.imgFlex {
			width: 100upx;
			height: 100upx;
			margin: 0 10upx;

			image {
				width: 100%;
				height: 100upx;
			}
		}
	}

	.heardinfo {
		background-color: #40a8ea;
		width: 100%;
		height: 220upx;
		color: white;
		padding: 60upx;

	}
</style>
