<template>
	<view class="uni-numbox">
		<view class="uni-numbox__minus" :class="{'uni-numbox--disabled': disableSubtract||disabled}" @click="_calcValue('subtract')">-</view>
		<input class="uni-numbox__value" type="number" :disabled="disabled" :value="inputValue" @blur="_onBlur" :focus="focus">
		<view class="uni-numbox__plus" :class="{'uni-numbox--disabled': disableAdd||disabled}" @click="_calcValue('add')">+</view>
	</view>
</template>
<script>
	export default {
		name: 'uni-number-box',
		props: {
			value: {
				type: Number,
				default: 1
			},
			index: {
				type: Number,
				default: 0
			},
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 500
			},
			step: {
				type: Number,
				default: 1
			},
			disabled: {
				type: Boolean,
				default: false
			},
			focus: {
				type: Boolean,
				default: false
			},
			code: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				inputValue: this.value,
				status: 0
			}
		},
		computed: {
			disableSubtract() {
				return this.inputValue <= this.min
			},
			disableAdd() {
				return this.inputValue >= this.max
			}
		},
		watch: {
			value(val) {
				this.inputValue = val;
			},
			inputValue(val) {
				const data = {
					number: val,
					index: this.index
				}
				this.$emit('change', data);
			}
		},
		methods: {
			// 编辑
			_calcValue(type) {
				this.status = type
				if (this.disabled) {
					return
				}
				const scale = this._getDecimalScale()
				let value = this.inputValue * scale
				let step = this.step * scale
				if (type === 'subtract') {
					value -= step
				} else if (type === 'add') {
					value += step
				}
				if (value < this.min || value > this.max) {
					return
				}
				if (this.type == "cart") {
					let content = {
						item_no: this.code,
						num: value / scale
					}
					console.log(content)
					this.$ajax.changenum(content).then(res => {
						if (res.result == "success") {
							this.inputValue = value / scale;
						} else {
							this.$api.msg(res.msg);
						}
					})
				} else {
					this.inputValue = value / scale;
				}

			},
			_getDecimalScale() {
				let scale = 1
				// 浮点型
				if (~~this.step !== this.step) {
					scale = Math.pow(10, (this.step + '').split('.')[1].length)
				}
				return scale
			},
			// input
			_onBlur(event) {
				console.log(event)
				let value = event.detail.value
				if (!value) {
					this.inputValue = 0
					return
				}
				value = +value;
				if (value > this.max) {
					value = this.max
				} else if (value < this.min) {
					value = this.min
				}
				this.inputValue = value
			}
		}
	}
</script>
<style lang="scss">
	$numbox-btn-width:60upx;
	$numbox-input-width:80upx;
	$numbox-height:55upx;
	$uni-font-size-xxl:40upx;

	.uni-numbox {
		display: inline-flex;
		flex-direction: row;
		justify-content: flex-start;
		height: $numbox-height;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			transform-origin: center;
			box-sizing: border-box;
			pointer-events: none;
			top: -50%;
			left: -50%;
			right: -50%;
			bottom: -50%;
			border: 1px solid $uni-border-color;
			border-radius: $uni-border-radius-lg;
			transform: scale(.5);
		}

		&__minus,
		&__plus {
			margin: 0;
			background-color: $uni-bg-color-grey;
			width: $numbox-btn-width;
			font-size: $uni-font-size-xxl;
			height: 100%;
			line-height: $numbox-height;
			text-align: center;
			color: $uni-text-color;
			position: relative;
		}

		&__value {
			position: relative;
			background-color: $uni-bg-color;
			width: $numbox-input-width;
			height: 100%;
			text-align: center;
			font-size: 30upx;
			line-height: 55upx;

			&:after {
				content: '';
				position: absolute;
				transform-origin: center;
				box-sizing: border-box;
				pointer-events: none;
				top: -50%;
				left: -50%;
				right: -50%;
				bottom: -50%;
				border-style: solid;
				border-color: $uni-border-color;
				border-left-width: 1px;
				border-right-width: 1px;
				border-top-width: 0;
				border-bottom-width: 0;
				transform: scale(.5);
			}
		}

		&--disabled {
			color: $uni-text-color-disable;
		}
	}

	input {
		padding: 0;

	}
</style>
