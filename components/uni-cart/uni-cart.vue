<template>
	<view class="uni-collapse">
		<slot />
	</view>
</template>
<script>
	export default {
		name: 'UniCollapse',
		props: {
			accordion: { // 是否开启手风琴效果
				type: Boolean,
				default: false
			}
		},
		data() {
			return {}
		},
		provide() {
			return {
				collapse: this
			}
		},
		created() {
			this.childrens = []
		},
		methods: {
			onChange() {
				let activeItem = []
				this.childrens.forEach((vm, index) => {
					if (vm.isOpen) {
						activeItem.push(vm.nameSync)
					}
				})
				
				this.$emit('change', activeItem)
			}
		}
	}
</script>
<style>
	@charset "UTF-8";

	.uni-collapse {
		
		width: 100%;
		display: flex;
		flex-direction: column;
		transition: all .3s
	}

	
</style>