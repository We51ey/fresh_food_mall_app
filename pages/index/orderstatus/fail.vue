<template>
	<view>
		<view class="success">
			<image src="https://i.postimg.cc/3NzMTxwm/22.png" mode="" class="bc_image"></image>
			<view>
				<image src="https://i.postimg.cc/59sNrBSW/2.png" class="success_image"></image>
			</view>
			<view>
				<van-button
					custom-style="width:280rpx;height:80rpx;color:white;background:#08A6EC; border-radius:10rpx; margin-left:50rpx;margin-top:70rpx;">
					查看订单</van-button>
				<van-button
					custom-style="width:280rpx;height:80rpx;color:white;background:#FD7101; border-radius:10rpx; margin-left:88rpx;margin-top:70rpx;">
					继续支付</van-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageURL: 'https://i.postimg.cc/fLjFvXJB/11.png'
			}
		}
	}
</script>

<style>
	body {}

	.bc_image {
		z-index: -1;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
	}

	.success_image {
		width: 300rpx;
		height: 400rpx;
		mix-blend-mode: multiply;
		margin-left: 250rpx;
		margin-top: 100rpx;

	}
</style>
