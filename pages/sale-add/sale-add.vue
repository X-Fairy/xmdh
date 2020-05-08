<template>
	<view>
		<view style="background-color: white;">
			<view class="radioclass">
				<view v-for="(item,index) in mvc.radioList" :key="index">
					<view class="saleradio">
						<view class="yticon iconsale checkbox" :class="{iconsaleActive: item.checked}" @click="check(index)"></view>
						<view class="left">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="row b-b">
			<text class="tit">{{i18n.code}}</text>
			<input class="input" type="text" v-model="mvc.form.item_no" :placeholder="i18n.hint2" placeholder-class="placeholder"
			 style="width:50%;" @blur="changeinput" @input="loadType" />
			<text class="icon scan" @click="onScan"></text>
		</view>
		<view class="row b-b">
			<text class="tit">{{i18n.qty}}</text>
			<input class="input" type="number" v-model="mvc.form.num" :placeholder="i18n.hint3" placeholder-class="placeholder" />
		</view>

		<view class="s-textarea">
			<view class="tit">{{i18n.reason}}</view>
			<view class="uni-textarea" style="padding: 0 10px;">
				<textarea v-model="mvc.form.reason" :placeholder="i18n.hint4" placeholder-style="font-size:28upx;color: #999999;"
				 style="padding:12upx 0px;" />
		</view>
			
		</view>
		
	   <view class="addcard">
	    	<view class="box-border" v-for="(item,index) in mvc.addList" :key="index">
	    		<view class="s-header">
	    			<image :src="item.img" mode="" class="s-header-img" ></image>
	    			<view class="s-text">
						<view>
							{{item.item_name}}
						</view>
	    				<view>
	    					{{i18n.code}}: {{item.item_no}}
	    				</view>
	    				
	    			</view>
	    			<view class="del-btn yticon icon-fork" @click="deleteCartItem(item, index)">
	    			</view>
	    		</view>
				<view class="row b-b" style="border-top:1px solid #EEEEEE">
					<text class="tit">{{i18n.reason}}:</text>
					<input class="input" type="text" v-model="item.reason"  placeholder-class="placeholder" />
				</view>
				<view class="uploadinfo">
					<text class="tit">{{i18n.photo}}:</text>
					<view class="imgFlex">
						<view class="uploadImg" v-for='(data,j) in item.pics' :key="j">
							<image :src="data" mode="" class="uploadImg"></image>
						</view>
						<image src="../../static/addHeadIcon.png" mode="" @click="upload(item,index)" class="uploadImg"></image>
					</view>
				</view>
	    	</view>
	    </view>
	
		<view class="s-bottom">
			<button type="primary" class="s-bottom-btn" @click="bindadd">{{i18n.add}}</button>
			<button type="primary" class="s-bottom-btn" @click="confirm">{{i18n.submit}}</button>
		</view>
	</view>
</template>

<script>
	import '@/common/uni.css';
	import api from '@/common/index.js';
	var mvc={
		radioType:false,
		radioList: [],
		addList:[],
		form: {
			item_no: '',
			num: '',
			reason:"",
			item_name:""
			
		},
		scrollTop:0,
		current: -1,
		navHeight:0
	}
	export default {
		data() {
			return {
			title: 'radio 单选框',
			mvc:{
				radioType:false,
				radioList: [],
				addList:[],
				form: {
					item_no: '',
					num: '',
					reason:"",
					item_name:""
					
				},
				scrollTop:0,
				current: -1,
				navHeight:0
				}
			}
			
		},
		onLoad(option){
			let that=this;
			setTimeout(function(){
				mvc=that.mvc;
				api.pageTitle(that.$t('sale_add').title)
				mvc.radioList=that.$t('sale_add').radioList;
				let form=[];
				uni.setStorageSync('list',form);
				let num=0;
				uni.setStorageSync('radio',num);
				that.getTitleHeight();
			},300)
			
		},
		computed:{
			i18n(){
				return this.$t('sale_add')
			}
		},
		onShow(){
			
		},
		methods: {
			getTitleHeight() {
				let that = this;
				uni.getSystemInfo({
					success: res => {
						console.log(res.screenHeight)
						if (res.screenHeight < 750) {
							mvc.navHeight = "450px";
							that.mvc=mvc;
							return false;
						}
						if (res.screenHeight < 950) {
							mvc.navHeight = "550px"
							that.mvc=mvc;
							return false;
						}
						if (res.screenHeight > 1000) {
							mvc.navHeight = "600px";
							that.mvc=mvc;
							return false;
						}
					}
				})
			},
			//选中状态处理
			check(index) {
				let that=this;
				let list=mvc.radioList;
				let num=1;
				let radio = uni.getStorageSync('radio');
				if(radio==99){
					that.mvc=mvc;
					return false;
				}
				if(radio==0){
					uni.setStorageSync('radio',num);
					mvc.radioType=true;
					mvc.radioList[index].checked = !mvc.radioList[index].checked;
					that.mvc=mvc;
				}else{
				uni.setStorageSync('radio',num);
				mvc.radioType=true;
				uni.showModal({
					content: that.$t('sale_add').hint5,
					cancelText:that.$t('index').cancel,
					confirmText:that.$t('index').confirm,
					success: (e) => {
						if (e.confirm) {
							let arry=[];
							var formData={
								item_no: '',
								num: '',
								reason:"",
								item_name:"",		
							};
							mvc.form=formData
							uni.setStorageSync('list',arry);
							mvc.addList=[];
							list.forEach(function(item,k){
								item.checked=false;
							})
							mvc.radioList[index].checked = !mvc.radioList[index].checked;
						}
					}
				});
				that.mvc=mvc;
			}
			},
			loadType(){
				
				if(!mvc.radioType){
					this.$api.msg(this.$t('sale_add').hint1)
				}
				
			},
			//提交商品
			confirm(){
				let that=this;
				let list =mvc.addList;
				let radioList=mvc.radioList;
				let typeNum;
				radioList.forEach(function(item,k){
					if(item.checked==true){
						typeNum=item.value;
					}
				});
				let params={
					item_no:[],
					reason:[],
					type:typeNum,
					aqty:[],
				};
				if(mvc.addList.length==0){
					that.$api.msg(this.$t('sale_add').hint9)
					return false;
				};
				list.forEach(function(item,index){
					params.item_no.push(item.item_no);
					params.reason.push(item.reason)
					params.aqty.push(item.num)
				})
				that.$ajax.saleAdd(params).then(res=>{
					uni.showToast({
						title: that.$t('sale_add').hint8
					})
					let num=1;
					uni.setStorageSync('radio',num);
					setTimeout(function(){
						uni.navigateBack({
							delta: 1
						});
					},800)
				})
				// api.arry("/index.php/Home/User/shouhou_add",params,function(res){
					
				// })
			},
			// 扫描二维码
			onScan() {
				let that=this;
				uni.scanCode({
					success: function(res) {
				     mvc.form.item_no=res.result;
					 that.$ajax.saleScan().then(res=>{
						 if(mvc.current+1==2){
							 mvc.form.num=1;
						 }else{
							 mvc.form.num=res.purchase_spec;
						 }
						 mvc.form.item_name=res.item_name;
						 })
					}
			    })
			},
			// 添加商品
			bindadd(){
            
				var that=this;
				var arry = uni.getStorageSync('list');
				console.log(arry)
				if(!mvc.radioType){
					this.$api.msg(that.$t('sale_add').hint1);
					return false;
				}
				
				
				if(!mvc.form.item_no){
					that.$api.msg(that.$t('sale_add').hint2);
					return false;
				}else{
					for(var i=0;arry.length>i;i++){
						if(arry[i].item_no==mvc.form.item_no){
							that.$api.msg(that.$t('sale_add').hint6);
							return false;
						}					
					}					
				}
				
				if(!mvc.form.num){
					that.$api.msg(that.$t('sale_add').hint3);
					return false;
				}
				mvc.form.pics=[];		
				arry.push(mvc.form);
				arry.forEach(function(item,index){
					item.img=that.$store.getters.imgShow + '/thumb/' + item.item_no + '.jpg?x-oss-process=style/300';
					
				});
				
				uni.setStorageSync('list',arry);
				var synclist= uni.getStorageSync('list');
				mvc.addList=synclist
				var formData={
					item_no: '',
					num: '',
					reason:"",
					item_name:""					
				};
				mvc.form=formData;
				this.mvc=mvc;
			},
			//获取商品名称
			changeinput(e){
				var that=this;
				var form = mvc.form;
				var arry=mvc.addList;
				let params={
					value:e.detail.value
				}
				that.$ajax.saleName(params).then(res=>{
					let radioList=mvc.radioList;
					let typeNum;
					radioList.forEach(function(item,k){
					if(item.checked==true){
						typeNum=item.value
						}
					})
					if(typeNum==2){
						mvc.form.num=1
						
					}else{
						mvc.form.num=res.purchase_spec;
					}
					mvc.form.item_name=res.item_name;
					that.mvc=mvc;
				})
				// api.post("/index.php/Home/User/getItemInfo?item_no="+e.detail.value,"",function(res){
					
				// })
			},
			//删除商品
			deleteCartItem(item, index) {
				let that = this;
				let list = mvc.addList;
				let arry =uni.getStorageSync('list');
				arry.splice(index, 1);
				mvc.addList.splice(index, 1);
                uni.setStorageSync('list',arry);
			},
			// 上传图片
			upload(item,index) {
				let user = uni.getStorageSync('userinfo');
				let that=this;
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						// console.log(tempFilePaths[0])
						const uploadTask = uni.uploadFile({
							url: 'https://api.xmvogue.com/index.php/Home/User/uppic?item_no='+item.item_no,
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								"hdid": user.hdid,
								"tmp_name": "ximei.jpg",
								"uid": user.uid,
								"sign": user.token
							},
							success: (uploadFileRes) => {
								let upImg= 'http://ximiphoto.oss-cn-hangzhou.aliyuncs.com/shouhou/' + uploadFileRes.data +'?x-oss-process=style/300';
								item.pics.push(upImg)
								let arry=mvc.addList;
								uni.setStorageSync('list',arry);
								uni.showToast({
									title: that.$t('sale_add').hint7
								})
								let num=99;
                                uni.setStorageSync('radio',num);
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
		},
		onBackPress() {
		let num=1;
		uni.setStorageSync('radio',num);
			
		
		}
	}
</script>

<style lang="scss">
	
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}
@font-face {
		font-family: 'HMfont-home';
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUwAAsAAAAACYQAAATiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqGIIUfATYCJAMUCwwABCAFhG0HTBsvCFGULk6O7EvIyYYekQTabRkvs9JQlpOfvbz+1w0unHdih8IPlwYu4AVBACgA4uH/9+u3z5U379/5org3yCbRNLs0TaKRlgiVSijeWJ0ZzLkS8ATx4uJbug0r1xUTOxd9mfzfzds2S/CDZkfhmJYuWtoBxfFZL4IIA64H/mPJWu72FLRrSwILKJD3gF64BW9vv7R5KJkFkhucBIGHkb7CQCuN+2J7wEW5MG3HhhW6HBxL/bQGy7P/doos6rDCB3x+oAeKyjXQQDeQDdDmvmHs8iIPE2hWsQcPRsanAzmFPioQN0WCEiCXMCsVxaEXuoKFRXxS9el1ugn46H1//OUaPUnN9InHLkfwQfCPoC/wfGQuOQiS4Zxgy8jYASjE/UL3TZJBbAdJTf49KXsBTS9JP/Z87p9PPQpFviFtM/7hUYQkEx1dPY6we1Xl4CSWONIIGgXUFDJJ/ITG9aLrgoYZwH9iN9BxG/BUA6HMVLhWiqL0GSwFVQtCCg0N4i1nIMRg+YoQ7DiNUp/h0D2DegTXPPDCAA2eBIUO3zeEGCyMBc6dQSrMEHXkjt7crEb70fBpdPgwnJ3WXLiGseANevw48+HD9I07tWu+LR7aQu17FENdc5qbH2euvmCVdcVtzmgOD2lS2x6ZPHoYj6bbNTUxdZ+4LVh0OHBxO9p4sv2UxZYdek+eZG3ZowcXT1umD2ac1Upv/uhRxrQG5L/ogFB8ZrZjbkgzY6ZdI316MEqnGlTex6bSXlnWjjtYDt2yKewCsPZho9TCNgvV3l5XunGmnt2MFAY3ahCFzds7dlgpbtrWvtXzbVyr3TGuqtNm7/E2vyv2rbpWt9WJ7N2OvRmR8fa9wuwfiDdEte1dwG3bvZyqtR0+l2KXAS2D5Kx9pLrNoW14p2QSdJ0av54B4C9CaGQX17XEkMTV7erp/js2rFi30u5aavFXV3C8ZmcVdLBYMXXhXzrk9XAOkxZlVsXXVVAp6yihE4w6oyK5tiCx0O7/UvQGXeT7hxpr1zaTtXu/lJ547PMStWJlzom+b2xlVrB2DEBo7f2go5mb5qqt+zHe4f0JbOxuAXZ/ASef3b6Vys9UxIvnoRJui5XNgLd2x45GSwM+P/ER1j+HCT8gGKRz7vdUawPwiQpQeQLRzrsZ2pVnBBT+KWzP+dX2ad/g0053TwGMkh/necfNcxAApBepCoCRC8zPf6+f8fAI+ViknPzlsIDv9DGF0mZq/4hGY8nPVFEQoxfMyXRLLVKtJZbyq1cGvBLpf1P1C/lnvR5Gu9C4kNBbiCAZWAlZbwOyYHdANbQLOr090GwXtXxoDktSlDFs0wMgTNsDyaSvkE27hSzYV1At8hU605GhORPxhkOb4hpyLCnhCN+4tMFYxGOqaNPGIb84lQhqKkrYuMyjZBJWLAoauzg6p5NRpIqwQ0wR1wpcOY42plmm0jgSHEcqKhjjapYpIzzOUchx1b5OTnTRBznymEqAHMAiSnAIPmOlGhgT4WFUoZ3mHJT5+lSEQI0KJdiKurJgJoIlJmrfmAtHzg2QUeqqRnWX0l2sloArDofGw2gsRiVjkdBJVBgxhrHq4n5lCB6OI2GHSDVfTqgR3VTtOL228h63QKNvUSNFjhI1Ov2DEqZBZO8ouxK2VsQj0otIIOSkV47hlQMAAAA=') format('woff2')
	}

	.icon {
		font-family: 'HMfont-home' !important;
		font-size: 40upx;
		font-style: normal;
		position: absolute;

		&.scan {
			position: absolute;
			right: 30upx;
			top: 10%;
z-index:20;
			&:before {
				content: "\e64b";
			}
		}

	}
	.checkbox {
		
		
		
		font-size: 50upx;
		line-height: 1;
		padding:0upx 2upx;
		color: $font-color-disabled;
		background: #fff;
		border-radius: 50px;
	}
	.iconsaleActive{
		color: #42baf2;
	}
	.checked {
		
	}
	
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color:#7AC5CD;
		border-radius: 10upx;
		
	}
	.s-textarea{
		display: flex;
		background: white;
		padding:0 30upx;
		height: 150upx;
		.tit{
			flex-shrink: 0;
			width: 150upx;
			font-size: 30upx;
			color: $font-color-dark;
			line-height: 150upx;
		}
		.uni-textarea{
			height: 150upx;
			    overflow: hidden;
			}
	}
		
	.s-radio{
		width: 100%;
		display: flex;
		justify-content: space-around;
		border:1px solid #eeeeee; 
	}
	.uni-list-cell,.uni-list {
		position: static;
		
    }
	.addcard{
		
		padding: 0 30upx 120upx 30upx;
	}
	
	%section {
		background: white;
		border-radius: 10upx;
		width: 100%;
		padding: 20upx;
	
	}
	.s-bottom {
			display: flex;
			position: fixed;
			bottom: 0;
			width: 100%;
			z-index: 10;
			.s-bottom-btn {
				width: 50%;
				background-color: #F7F7F7;
				border: #999;
				font-size: 28upx;
				color: #6F6F6F;
				border-radius: 0;
				border-top:none;
			}
	.s-bottom-btn:after {
				
				border-radius: 0;
		
			}
			.button-hover {
				background-color: #DDDDDD;
	
			}
		}
	.s-header {
		@extend %section;
		display: flex;
		justify-content: left;
	
	position:relative;
		image {
			width: 120upx;
			height: 110upx;
			border-radius: 10upx;
			margin: 0 15upx;
		}
	
		.s-text {
			font-size: 28upx;
	
	
		}
		.del-btn{
			position: absolute;
			top :0;
			right: 1%;
		}
		.yticon{
			color: red;
			font-weight: bold;
		}
	}
	
	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		height: 80upx;
		background: #fff;
	
		.tit {
			flex-shrink: 0;
			width: 150upx;
			font-size: 28upx;
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
	.box-border{
		margin: 10upx 0;
	}
	.scroll-Y{
		
		padding-bottom: 100upx;
	}
	.uploadinfo {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		
		background: #fff;
	
		.tit {
			flex-shrink: 0;
			width: 150upx;
			font-size: 28upx;
			color: $font-color-dark;
		}
	
		.imgFlex {
			display: flex;
			align-items: center;
	
			flex-wrap: wrap;
			padding: 10upx;
	
			.uploadImg {
				margin: 5upx;
				width: 110upx;
				height: 110upx;
			}
		}
	
	
	
	}
	.radioclass{
		display: flex;
		justify-content: space-around;
		height: 100upx;
		padding: 25upx 0;
		border: 1px solid #eeeeee;
	}
	.saleradio{
		display: flex;
	}
</style>
