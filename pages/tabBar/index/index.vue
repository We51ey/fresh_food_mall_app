<template>
	<view>
		<view class="upBox">
			<van-row>
				<van-col span="3">
					<image src="https://s1.ax1x.com/2022/05/12/O0reKO.png" class="pos"></image>
				</van-col>
				<van-col span="18">
					<van-search placeholder="搜索想要的商品和店铺" @cancel="onCancel" show-action></van-search>
				</van-col>
				<van-col span="3">
					<image src="https://s1.ax1x.com/2022/05/12/O0raZQ.png" class="weixin"></image>
				</van-col>
			</van-row>
		</view>
		<view>
			<carousel></carousel>
		</view>
		<view class="middleBox">
			<van-row>
				<van-col span="6">
					<image src="https://s1.ax1x.com/2022/05/12/O0rDGq.png" class="iconType" @click="iconClick1"></image>
				</van-col>
				<van-col span="6">
					<image src="https://s1.ax1x.com/2022/05/12/O0r6MT.png" class="iconType" @click="iconClick2"></image>
				</van-col>
				<van-col span="6">
					<image src="https://s1.ax1x.com/2022/05/12/O0rcsU.png" class="iconType" @click="iconClick3"></image>
				</van-col>
				<van-col span="6">
					<image src="https://s1.ax1x.com/2022/05/12/O0rfo9.png" class="iconType" @click="iconClick4"></image>
				</van-col>
			</van-row>
		</view>
		<view>
			<image class="av"
				src="https://tse1-mm.cn.bing.net/th/id/OIP-C.kmNa041YVuiKr0qllIYIgQHaDQ?w=317&h=153&c=7&r=0&o=5&dpr=1.25&pid=1.7">
			</image>
		</view>
		<view>
			<youhuiquanTxt :txt="txt1"></youhuiquanTxt>
		</view>
		<view>
			<youhuiquan></youhuiquan>
		</view>
		<view>
			<youhuiquanTxt :txt="txt2"></youhuiquanTxt>
		</view>
		<view class="shopItem" v-for="(item,index) in shopList" :key="index">
			<view>
				<image :src="item.shopImg" class="shopImg"></image>
			</view>
			<view class="shopRight">
				<view class="itemUp">
					<text>{{item.shopName}}</text>
					<view class="score">评分</view>
					<text>4.5</text>
					<text class="firstRank">No.{{item.rank}}</text>
				</view>
				<view>
					<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
					<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
					<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
					<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
					<image src="https://s1.ax1x.com/2022/05/12/O0djmj.png" class="mark"></image>
				</view>
				<view class="itemBottom">
					<text class="xiaoliang">销量 2345678</text>
					<image src="https://s1.ax1x.com/2022/05/12/O0dhmd.png" class="plane"><text class="juli">1.7km</text></image>
					<van-button size="mini" round @click="shopEnter(index)" custom-style="margin-top:-16rpx; border:1rpx solid #CCCCCC; margin-left:20rpx;">进店</van-button>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import carousel from '@/components/carousel/carousel.vue'
	import youhuiquanTxt from '@/components/txt/youhuiquan.vue'
	import youhuiquan from '@/components/youhuiquan/youhuiquan.vue'
	var API = require('../../../utils/shop.js')
	export default {
		components: {
			carousel,
			youhuiquanTxt,
			youhuiquan
		},
		data() {
			return {
				txt1: "· 平台通用优惠券 ·",
				txt2: "· 平台推荐店铺 ·",
				shopList:null
			}
		},
		onLoad() {
			var shopList=null
			API.ajax('', function(res) {
				shopList=res.data
			})
			console.log(shopList)
			this.shopList=shopList
			console.log(this.shopList)
		},
		methods: {
			onCancel() {

			},
			iconClick1() {
				uni.navigateTo({
					url: "/pages/index/fruit/fruit"
				})
			},
			iconClick2() {
				uni.navigateTo({
					url: "/pages/index/vegetable/vegetable"
				})
			},
			iconClick3() {
				uni.navigateTo({
					url: "/pages/index/milk/milk"
				})
			},
			iconClick4() {
				uni.navigateTo({
					url: "/pages/index/egg/egg"
				})
			},
			shopEnter(index) {
				uni.navigateTo({
					url: '/pages/index/shopdetail/shopdetail?shopName='+encodeURIComponent(JSON.stringify(this.shopList[index].shopName))+'&shopImg='+encodeURIComponent(JSON.stringify(this.shopList[index].shopImg))
				})
			}
		}
	}
</script>

<style>
	.upBox {
		/* display: flex;
		flex-direction: row; */
	}
	.pos{
		width:40rpx;
		height:40rpx;
		margin-top:44rpx;
		margin-left:38rpx;
	}
	.weixin{
		width:40rpx;
		height:40rpx;
		margin-top:44rpx;
		margin-left:27rpx;
	}

	.iconImg {
		width: 50rpx;
		height: 50rpx;
		margin-top: 30rpx;
		margin-left:22rpx;
		margin-right:25rpx;
	}

	.iconMes {
		width: 50rpx;
		height: 50rpx;
		margin-top: 30rpx;
		margin-left: 60rpx;
	}

	.middleBox {
		text-align: center;
		margin-top: 20rpx;
		padding-top: 15rpx;
		padding-bottom: 15rpx;
	}

	.iconType {
		width: 100rpx;
		height: 100rpx;
		border: 1px solid #cccccc;
		border-radius: 50%;
	}

	.av {
		width: 100%;
		height: 300rpx;
	}

	.shopItem {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 157rpx;
		padding: 20rpx;
		border: 1px solid #cccccc;
		margin-bottom: 10rpx;
	}

	.shopImg {
		width: 150rpx;
		height: 150rpx;
		margin-right:15rpx;
	}

	.itemUp {
		display: flex;
		flex-direction: row;
	}

	.mark {
		width: 30rpx;
		height: 30rpx;
		mix-blend-mode: multiply;
	}

	.shopRight {
		display: flex;
		flex-direction: column;
	}

	.plane {
		width: 44rpx;
		height: 37rpx;
		margin-top: 7rpx;
		margin-left: 137rpx;
	}

	.itemBottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.score {
		background: #999999;
		border-radius: 10rpx;
		margin-left: 50rpx;
		color:white;
		margin-right:10rpx;
		font-size:32rpx;
	}

	.firstRank {
		margin-left: 150rpx;
	}
	.xiaoliang{
		color:#ADADAD;
		font-size:24rpx;
	}
	.juli{
		font-size:30rpx;
	}
</style>
