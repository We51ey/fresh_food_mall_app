<template>
	<view class="content" >
		<view class="block" v-for="item in comments_data">
			<view class="user_info">
				<view class="user_logo">
					<van-image width="80rpx" height="80rpx" :src="avatarUrl" round/>
				</view>
				<view class="user_name">{{nickName}}</view>
			</view>
			<view class="date">{{item.date}}</view>
			<view class="comments">{{item.comments}}</view>
			<view class="goods">
				<view class="goods_img">
					<van-image width="200rpx" height="200rpx" src="https://img.alicdn.com/imgextra/i2/3311258085/O1CN01NX4kSk29ays4O9iG6_!!3311258085.jpg_430x430q90.jpg" />
				</view>
				<view class="goods_detail">
					<view class="goods_name">{{item.goods_name}}</view>
					<view class="goods_price">￥{{item.goods_price}}</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	const {setStorageSync,getStorageSync,formateDate} =require('@/api/common.js')
	export default {
		data() {
			return {
				avatarUrl:'',
				nickName:'',
				comments_data:[
					{
						index:'1',
						date:formateDate(new Date(),'yyyy-MM-dd'),
						comments:'大家撒旦吉萨客户的就撒开回复科技孵化迪斯科解放换位思考',
						goods_img:'',
						goods_name:'商品名称商品名称商品名称商品名称',
						goods_price:188.9,
					},
					{
						index:'2',
						date:formateDate(new Date(),'yyyy-MM-dd'),
						comments:'大家撒旦吉萨客户的就撒开回复科技孵化迪斯科解放换位思考',
						goods_img:'',
						goods_name:'商品名称商品名称商品名称商品名称',
						goods_price:188.9,
					},
					{
						index:'3',
						date:formateDate(new Date(),'yyyy-MM-dd'),
						comments:'大家撒旦吉萨客户的就撒开回复科技孵化迪斯科解放换位思考',
						goods_img:'',
						goods_name:'商品名称商品名称商品名称商品名称',
						goods_price:188.9,
					},
					
				]
			}
		},
		onLoad() {
			this.avatarUrl=getStorageSync('avatarUrl')
			this.nickName=getStorageSync('nickName')
		},
		methods: {
			
		}
	}
</script>

<style>
	.content {
		height: 100%;
		background-color: rgb(235, 235, 235);
	}

	.block {
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: left;
		margin-bottom: 20rpx;
	}

	.user_info {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		padding: 20rpx;
	}

	.date {
		color: rgb(153, 153, 153);
		font-size: 24rpx;
		padding: 0 20rpx;
	}

	.comments {
		padding: 20rpx;
		font-size: 32rpx;

	}

	.goods {
		padding: 20rpx 20rpx;
		background-color: rgb(250, 250, 250);
	}

	.user-name {
		font-size: 30rpx;
	}

	.goods {
		height: 100%;
		font-size: 34rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.goods_name {
		height: 100%;
	}

	.goods_price {
		height: 100%;
		font-size: 40rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.goods_img {
		padding: 10rpx;
	}

	.goods_detail {
		padding: 10rpx 20rpx;
		height: 200rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.user_logo {
		padding-right: 20rpx;
	}
</style>
