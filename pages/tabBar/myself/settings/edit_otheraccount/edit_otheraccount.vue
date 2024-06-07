<template>
	<view class="content">
		<view class="block">
			<view class="info">
				<van-icon name="info-o" size="100rpx"/>
				<view class="detail">
					<view class="account">已绑定手机号{{is_bind}}</view>
					<view class="date" v-if="phone=='未绑定'">当前状态：{{phone}}</view>
					<view class="date" v-else>绑定时间：{{date}}</view>
				</view>
			</view>
		</view>
		
		<view class="block">
			<view class="info">
				<van-icon name="info-o" size="100rpx"/>
				<view class="detail">
					<view class="account">已绑定QQ：1103658808</view>
					<view class="date">绑定时间：{{date}}</view>
				</view>
			</view>
			
			<view class="border">
				<view class="border_dashed"></view>
			</view>
			
			<view class="info">
				<van-icon name="info-o" size="100rpx"/>
				<view class="detail">
					<view class="account">已绑定微信</view>
					<view class="date">当前状态：未绑定</view>
				</view>
			</view>
			
			<view class="border">
				<view class="border_dashed"></view>
			</view>
			
			<view class="info">
				<van-icon name="info-o" size="100rpx"/>
				<view class="detail">
					<view class="account">已绑定微博</view>
					<view class="date">当前状态：未绑定</view>
				</view>
			</view>
			
			<view class="border">
				<view class="border_dashed"></view>
			</view>
			
			<view class="info">
				<view class="tip">
					取消勾选，将解除绑定状态，并需要短信验证！
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
				show:false,
				phone: null,
				is_bind:'',
				date:formateDate(new Date(),'yyyy-MM-dd hh:mm'),
			}
		},
		onShow() {
			this.phone=getStorageSync("bind_phone")
			if(this.phone!='未绑定'){
				this.is_bind=":"+this.phone
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content {
		height: 100%;
		align-items: center;
		display: flex;
		flex-direction: column;
		/* text-align: center; */
		justify-content:start;
		background-color: rgb(235, 235, 235);
		padding: 20rpx 20rpx;
	}
	
	.block{
		width: 100%;
		margin: 20rpx 20rpx;
	}
	.info{
		border-radius: 10rpx;
		padding: 40rpx 40rpx;
		background-color: white;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.detail{
		margin-left: 20rpx;
		font-size: 36rpx;
		
	}

	.date{
		font-size: 30rpx;
		color: rgb(153, 153, 153);
	}
	
	.tip{
		font-size: 30rpx;
		text-align: center;
		color: red;
	}
	.border{
		height: 3rpx;
		border: 3rpx white dashed;
		margin: 0 auto;
		background-color: white;
	}
	.border_dashed{
		width: 90%;
		height: 5rpx;
		border: 5rpx rgb(235,235,235) dashed;
		margin: 0 auto;
		background-color: white;
	}
</style>
