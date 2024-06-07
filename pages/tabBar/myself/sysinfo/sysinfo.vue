<template>
	<view class="content" >
		<view class="info" v-for="item in system_info">
				<view class="detail">{{item.detail}}</view>
				<view class="date">{{item.date}}</view>
		</view>
	</view>
</template>

<script>
	const {formateDate} =require('@/api/common.js')
	export default {
		data() {
			return {
				system_info:[
					{
						index:'1',
						detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin',
						date:formateDate(new Date(),'yyyy-MM-dd hh:mm')
					},
					{
						index:'2',
						detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin',
						date:formateDate(new Date(),'yyyy-MM-dd hh:mm')
					},
					{
						index:'3',
						detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin',
						date:formateDate(new Date(),'yyyy-MM-dd hh:mm')
					},
					{
						index:'4',
						detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin',
						date:formateDate(new Date(),'yyyy-MM-dd hh:mm')
					},
				]
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
	.info{
		width: 95%;
		border-radius: 10rpx;
		padding: 20rpx 20rpx;
		background-color: white;
		display: flex;
		flex-direction: column;
		margin: 10rpx 20rpx;		
	}
	.detail{
		padding-bottom: 20rpx;
		font-size: 30rpx;
		width: 100%;
	}
	.date{
		color: rgb(153,153,153);
		font-size: 28rpx;
	}
</style>
