<template>
	<view class="content">
		<van-row>
		  <van-col span="9" offset="3">收货人：摸鱼酱</van-col>
		  <van-col span="7" offset="4">18226180501</van-col>
		</van-row>
		<van-row class="middle">
		  <van-col span="2" offset="1" style="font-size: 16px;"><van-icon name="location" size="26" /></van-col>
		  <van-col span="20" style="font-size: 14px;">\n收货地址：上海上海市闵行区浦江镇江龙路满香园4号902室</van-col>
		</van-row>
		<image src="/static/xianxian.png" style="width: 100%;height: 5px;">
			
		<!-- </image><image style="width:16px;height:24px;" src="/static/dw.png" ></image> -->
	</view>
</template>

<script>
</script>

<style>
	.content{
		width:100%;
		height:91px;
		background-color: white;
		line-height: 59rpx;	
		margin-top: 8px;
		/* display: flex; */
		/* justify-content: space-around; */
	}
	.middle{
		line-height: 38rpx;
	}
	
</style>