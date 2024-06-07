<template>
	<view>
	<view class="content1">
	  <van-row>
		  <van-col span="5" offset="1">
			  配送方式
		  </van-col>
		  <van-col span="5" offset="13">快递 配送</van-col>
	  </van-row>	
	</view>
	<div class="content2">
		<van-row>
			<van-col span="18" offset="1">
				我的留言：尽快发货！
			</van-col>
		</van-row>
		</div>
	<view class="content3">
		<van-row><van-col offset="1">快递配送费：0</van-col></van-row>
		<van-row><van-col offset="1">优惠券折扣：0</van-col></van-row>
		<van-row><van-col offset="1">积分抵扣：0</van-col></van-row>
	</view>
	
	</view>
</template>

<script>
	export default {
		methods: {
			
			}
		}
</script>

<style>
	.content1 {
		font-size:14px;
		width:100%;
		height:44px;
		background-color: white;
		line-height: 44px;
	
	}
	.content2 {
		font-size:14px;
		width:100%;
		height:44px;
		background-color: white;
		line-height: 44px;	
		border: 1px solid lightgrey;
	}
	.content3{
		font-size:14px;
		width:100%;
		height:90px;
		border:1px solid lightgrey;
		border-top:white;
		line-height: 30px;
	}
	
</style>
