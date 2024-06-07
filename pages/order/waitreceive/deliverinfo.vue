<template>
	<scroll-view>
		<view class="content">
		<view class="box1">
			<view class="title">到达时间:</view>
			<view class="detail">预计将在 18:00 左右到达</view>
		</view>
		<view class="box2">
			<view class="title">配送员信息:</view>
			<view class="detail">姓名：夏小鱼</view>
			<view class="detail">电话：18226180501</view>
		</view>
		<view class="box3">
			<view class="title">店铺客服电话:</view>
			<view class="detail">021-1234567</view>
		</view>
		</view>
	</scroll-view>
</template>

<script>
</script>

<style>
	.content{
		display: flex;
		font-size:16px;
		flex-direction: column;
		justify-content:center;//主轴对齐
		grid-row-gap: 2rem;//行间距
		margin-left:25px;
		margin-top:25px;
	}
	.box1{
		flex-direction: column;
		display: flex;
		grid-row-gap: 1rem;//行间距
	}
	.box2{
		flex-direction: column;
		display: flex;
		grid-row-gap: 1rem;//行间距
	}
	.box3{
		flex-direction: column;
		display: flex;
		grid-row-gap: 1rem;//行间距
	}
	.title{
		font-weight: bold;
	}
</style>