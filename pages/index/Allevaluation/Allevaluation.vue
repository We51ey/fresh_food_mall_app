<template>
	<view>
		<view class="upBox">
			<view>
				<van-row>
					<van-col span="8">
						<text class="score">4.8</text><text>分</text>
					</van-col>
					<van-col span="16">
						<view class="goodScore">
							<text>商品评分:</text>
							<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
							<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
							<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
							<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
							<image src="https://s1.ax1x.com/2022/05/12/O0djmj.png" class="mark"></image>
						</view>
						<view class="logicScore">
							<text>物流评分:</text>
							<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
							<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
							<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
							<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
							<image src="https://s1.ax1x.com/2022/05/12/O0djmj.png" class="mark"></image>
						</view>
					</van-col>
				</van-row>
			</view>
		</view>
		<view class="itemE"  v-for="(item,index) in list">
			<view>
				<image src="https://s1.ax1x.com/2022/05/12/O0wVB9.png" class="imgPeople"></image>
			</view>
			<view class="nickname">
				<text class="txt1">用户昵称：夕阳红</text>
				<text class="txt1">评价内容：个大、味美、口感质嫩、回购中</text>
				<text class="txt1 txt2">2016-09-09 15:18 </text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[1,2,3,4,5,6,7]
			}
		}
	}
	
</script>

<style>
	.upBox{
		width:100%;
		text-align: center;
		font-size:40rpx;
	}
	.score{
		font-size:79rpx;
	}
	.mark{
		width:13px;
		height:13px;
		mix-blend-mode: multiply;
	}
	.goodScore{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.logicScore{
		display: flex;
		flex-direction: row;
		align-items: center;
		
	}
	.itemE{
		display: flex;
		flex-direction: row;
		border-top:3rpx solid #cccccc;
		border-bottom:3rpx solid #cccccc;
		align-items: center;
		
	}
	.imgPeople{
		width:50rpx;
		height:50rpx;
		margin-right:30rpx;
	}
	.nickname{
		display: flex;
		flex-direction: column;
	}
	.txt1{
		margin-bottom:10rpx;
	}
	.txt2{
		font-size:30rpx;
		color:#cccccc;
	}
</style>