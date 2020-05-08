<template>
	<view>


		<view class="content">
			<view class="upload-info">
				<form @submit="formSubmit">
					<view class="uni-form-item uni-column">
						<label>{{i18n.Remote}} ID：</label>
						<input class="uni-input" name="ID" :placeholder="i18n.inputId" style="width: 100%;">
					</view>
					<view class="uni-form-item uni-column">
						<label>{{i18n.password}}：</label>
						<input type="password" id="remotepass" name="remotepass" class="uni-input" :placeholder="i18n.inputPass" style="width: 100%;">
					</view>
					<view class="uni-form-item uni-column">
						<label>{{i18n.qq}}：</label>
						<input type="number" id="qq" name="qq" class="uni-input" :placeholder="i18n.inputQQ" style="width: 100%;">
					</view>
					<view class="uni-form-item uni-column">
						<label>{{i18n.telephone}}：</label>
						<input type="number" id="tel" name="tel" class="uni-input" :placeholder="i18n.inputTel" style="width: 100%;">
					</view>
					<view class="uni-form-item uni-column">
						<label>{{i18n.problem}}：</label>
						<textarea id="problem" name="problem" rows="5" :placeholder="i18n.inputProblem" style="height: 100upx;"></textarea>
					</view>
					<view class="uni-form-item uni-column image-info">
						<label>{{i18n.upload}}：</label>
						<image :src="mvc.src" mode="" @click="upload"></image>
					</view>
					<button formType="submit" class="xi-btn">{{i18n.submit}}</button>
				</form>
			</view>
		</view>
	</view>
</template>

<script>
	import api from "@/common/index.js";
	
	let mvc = {
		pics: "",
		src: "../../static/addHeadIcon.png"
	}
	export default {
		
		data() {
			return {
				mvc: {
					pics: "",
					src: "../../static/addHeadIcon.png"
				}
			};
		},
		computed: {
			i18n() {
				return this.$t('technology')
			}
		},
		onLoad() {
			api.pageTitle(this.$t('technology').title)
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			formSubmit(res) {
				var data = res.detail.value;
				if (!data.ID) {

					this.$api.msg(this.$t('technology').inputId);
					return;
				}
				if (!data.remotepass) {
					this.$api.msg(this.$t('technology').inputPass);
					return;
				}
				if (!data.qq) {
					this.$api.msg(this.$t('technology').inputQQ);
					return;
				}
				if (!data.tel) {
					this.$api.msg(this.$t('technology').inputTel);
					return;
				}
				if (!data.problem) {
					this.$api.msg(this.$t('technology').inputProblem);
					return;
				}
				if (!mvc.pics) {
					this.$api.msg(this.$t('technology').inputImg);
					return;
				}
				const params = uni.getStorageSync('userinfo');
				let param = {
					uname: params.username,
					problem: data.problem,
					tel: data.tel,
					qq: data.qq,
					remotepass: data.remotepass,
					pics: mvc.pics
				};
				api.post('/index.php/Home/User/supporter', param, (res) => {
					that.$api.msg(that.$t('index').msg3);
					uni.navigateBack({
						delta: 1
					});
				})
			},
			upload() {
				let user = uni.getStorageSync('userinfo');
				let that=this;
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
								// console.log(uploadFileRes);
								// console.log(uploadFileres);
								mvc.pics = 'http://ximiphoto.oss-cn-hangzhou.aliyuncs.com/shouhou/' + uploadFileRes.data +
									'?x-oss-process=style/300'
								mvc.src = mvc.pics;
								that.mvc = mvc;
								uni.showToast({
									title: "上传成功"
								})
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
			}
		}
	}
</script>

<style lang="scss">
	@font-face {
		font-family: 'HMfont-home';
		src: url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2')
	}

	.icon {
		font-family: 'HMfont-home' !important;
		font-size: 40upx;
		font-style: normal;
		color: #fa436a;
		margin-bottom: 10px;

		&.img {
			&:before {
				content: "\e712";
			}
		}
	}

	page,
	.content {
		background: $page-color-base;
		height: 100%;
	}

	.upload-info {
		background: #FFFFFF;
		margin-top: 20upx;
		padding-left: 10upx;
		padding-right: 10upx;
		border-bottom: 1px solid #DDDDDD;

		.uni-form-item {
			display: flex;
			flex-direction: row;
			padding: 20upx;
			border-bottom: 1px solid #DDDDDD;

			label {
				width: 25%;
				font-size: 26upx;
				display: inline-block;
				margin-top: 10upx;
				margin-right: 30upx;
			}

			input,
			textarea {
				font-size: 28upx;
				width: 75%;
			}

			textarea {
				margin-top: 15upx; // font-size: 15upx;

			}

			.uni-input {
				padding: 0upx 0;
				margin-top: 10upx;

			}
		}

		.image-info {
			border-bottom: none;

			image {
				width: 100upx;
				height: 100upx;
			}
		}


	}
</style>
