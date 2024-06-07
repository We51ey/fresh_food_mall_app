<template>
	<view>
		<view class="first">
			<view class="head">
				选择退货数量：
			</view>
			<view class="card">
				<view class="left">
					<image style="width:80px;height:80px;"
						src="https://img.alicdn.com/imgextra/i1/2208081554011/O1CN01eJTchZ1fV5MybcpFQ_!!0-item_pic.jpg_430x430q90.jpg">
					</image>
				</view>
				<view class="box">
					<view class="box1">佑仔食品 新季批发冷冻草莓整颗 批发奶茶商用 水果冰冻草莓</view>
					<view class="box2">
						<text style="color: red;">￥29.00</text>
						<van-stepper v-model="valueOne" />
					</view>
				</view>
			</view>
		</view>
		<view>
			<image src="/static/refundline.png" style="height: 12px;width: 100%;"></image>
		</view>

		<view class="content">
			<view class="uni-showActionSheet" @click="reason">
				<text>退款/货原因</text>
				<text style="color: red;">*</text>
				<van-field readonly is-link v-model="value" @click="reason"></van-field>
			</view>
			
			<view><text>退款金额</text><text style="color: red;">*</text></view>
			<!-- 允许输入数字，调起带符号的纯数字键盘 -->
			<van-field v-model="number" type="number" placeholder="29.00" />

			<view><text>退款说明</text></view>

			<view><text>\n</text></view>
			<view class="uni-textarea">
				<textarea v-model="text" placeholder=" 退款说明" />
			</view>

		</view>
		<!-- <view><image src="/static/picture.png" style="width:99%;height:120px;"></image></view> -->
		<view class="submitCss">
			<van-button round block @click="submitSuccess" color="#FF7F50"><text>提交申请</text>
			</van-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			const valueOne = 1;
			return {
				valueOne,
				buttonRect: {},
				value: "请选择",
				showPicker: false,
			}
		},

		methods: {
			submitSuccess: function(e) {
				uni.navigateTo({
					url: "/pages/order/waitdispatch/refund/refundsuccess"
				})
			},

			reason: function(e) {
				const that = this;
				uni.showActionSheet({
					title: '退款原因',
					itemList: ['多拍了', '不想要了', '拍错了', '其他原因'],
					itemColor: '#999999',
					popover: {
						top: that.buttonRect.top * 2 + that.buttonRect.height,
						left: that.buttonRect.left + that.buttonRect.width / 2
					},
					success: e => {
						let i = e.tapIndex
						switch (i) {
							case 0:
								this.title = '多拍了';
								this.value = '多拍了';
								break;

							case 1:
								this.title = '不想要了';
								this.value = '不想要了';
								break;

							case 2:
								this.title = '拍错了';
								this.value = '拍错了';
								break;

							case 3:
								this.title = '其他原因';
								this.value = '其他原因';
								break;

							default:
								break;
						};
						
						uni.showToast({
							title: this.title,
							icon: 'none',
						});

					}
				});
			},
			
		}
		
	}
</script>

<style>
	.first {
		background-color: white;
		height: 120px;
		display: flex;
		flex-direction: column; //主轴为y轴
		justify-content: space-between; //先贴两边再贴边 在平分剩余空间（重要）
		margin: 6px;
	}

	.head {}

	.card {
		display: flex;
		flex-direction: row; //主轴为x轴
	}

	.left {}

	.box {
		margin-left: 6px;
		display: flex;
		flex-direction: column; //主轴为y轴
		justify-content: space-between; //先贴两边再贴边 在平分剩余空间（重要）
	}

	.box1 {}

	.box2 {
		font-size: 16px;
		display: flex;
		flex-direction: row; //主轴为x轴
		justify-content: space-between; //先贴两边再贴边 在平分剩余空间（重要）
	}

	.content {
		font-size: 14px;
		display: flex;
		flex-direction: column; //主轴为y轴
		margin: 6px;
	}

	.submitCss {
		position: absolute;
		bottom: 0;
		width: 100%;
	}
 
</style>
