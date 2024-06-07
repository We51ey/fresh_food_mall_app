<template>
	<view class="main">
		<scroll-view scroll-x="true" class="blank">
			<view class="sc">
				<image class="coupons"
					src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/eebd8630caa711ec948ca95ac26a558b.png">
				</image>
			</view>
			<view class="sc">
				<image class="coupons"
					src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/348fc7f0caa711ecb747918913a8a92c.png">
				</image>
			</view>
			<view class="sc">
				<image class="coupons"
					src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/b9c53b70caa811ec8e87978a429fb68e.png">
				</image>
			</view>
			<view class="sc">
				<image class="coupons"
					src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/b9d39350caa811ec856f35d7184769a9.png">
				</image>
			</view>
		</scroll-view>
	</view>
</template>
<style>
	swiper {
		height: 200rpx;
	}
	
	.coupons {
		height: 200rpx;
		width: 430rpx;
		display: inline-block;
	}
	scroll-view{
		white-space:nowrap;
		height:200rpx;
		width:750rpx;
		overflow: scroll;
	}
	.sc{
		display: inline-block;
	}
	.blank{
		overflow: scroll;
	}
</style>