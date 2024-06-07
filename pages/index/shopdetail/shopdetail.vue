<template>
	<view>
		<view class="upBox">
			<view>
				<form action="/">
					<van-search v-model="value" show-action placeholder="搜索您想要的商品" @search="onSearch"
						custom-style="background:#F7F8FA;" @cancel="onCancel" />
				</form>
			</view>
			<van-row>
				<van-col span="16">
					<view class="up">
						<image :src="shopImg" class="shopimg"></image>
						<view class="con_up">
							<view class="detail">
								<text class="shopname">{{shopName}}</text>
								<view class="score">评分</view>
								<text class="four">4.5</text>
							</view>
							<view>
								<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
								<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
								<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
								<image src="https://s1.ax1x.com/2022/05/12/O0dTtP.png" class="mark"></image>
								<image src="https://s1.ax1x.com/2022/05/12/O0djmj.png" class="mark"></image>
							</view>
						</view>
					</view>
				</van-col>
				<van-col span="8">
					<view class="right">
						<view class="shoucang">
							<text class="shou">{{isShouCang}}</text>
							<image :src="aixinImg" class="aixin" @click="aixin"></image>
						</view>
						<view><text class="xiao">销量 2345678</text></view>
					</view>
				</van-col>
			</van-row>
		</view>
		<view>
			<youhuiquanTxt :txt="txt"></youhuiquanTxt>
		</view>
		<view>
			<youhuiquan></youhuiquan>
		</view>
		<view class="middleBox">
			<van-row>
				<van-col span="8" v-for="(item,index) in tempList" :key="index">
					<van-button size="large" @click="getIndex(index)">{{item.name}}</van-button>
				</van-col>
			</van-row>
		</view>
		<view>
			<youhuiquanTxt :txt="txt_2"></youhuiquanTxt>
		</view>
		<view>
			<van-row>
				<van-col span="12" v-for="(item,index) in goodList" :key="index">
					<view class="goodBox">
						<image class="goodImg" :src="item.goodImg" @click="goodDetailClick(index)"></image>
						<text class="goodIntro">{{item.goodInfo}}</text>
						<view class="downDetail">
							<view>￥18.9/斤</view>
							<view>
								<image class="carImg" src="https://s1.ax1x.com/2022/05/12/O0axJK.png"
									@click="getMoney(index)"></image>
							</view>
						</view>
					</view>
				</van-col>
			</van-row>
		</view>
		<view class="footBtn">
			<van-row>
				<van-col span="16">
					<view class="footLeft">
						<image class="carImg" :src="goodCarImg" @click="goodCarClick">
						</image>
						<text class="moneyTxt">{{money}}</text>
					</view>
				</van-col>
				<van-col span="8">
					<view>
						<van-button size="large" color="#666666" custom-style="height:100rpx;" @click="ensureOrder">{{calculate}}
						</van-button>
					</view>
				</van-col>
			</van-row>
		</view>
		<view class="bottomBox"></view>
	</view>
</template>

<script>
	import youhuiquanTxt from '@/components/txt/youhuiquan.vue'
	import youhuiquan from '@/components/youhuiquan/youhuiquan.vue'
	var API = require('../../../utils/shop.js')
	export default {
		components: {
			youhuiquanTxt,
			youhuiquan
		},
		data() {
			return {
				goodCarImg: "https://s1.ax1x.com/2022/05/12/O0axJK.png",
				isShouCang: "收藏",
				isAiXin: true,
				aixinImg: "https://s1.ax1x.com/2022/05/12/O0Dj2V.png",
				shopImg: null,
				shopName: null,
				calculate: "50元起送",
				tempMoney: 0,
				money: "购物车是空的哦~",
				txt: "· 优惠券 ·",
				txt_2: "· 全部商品 ·",
				activeNames: null,
				tag: "false",
				types: null,
				types_2: null,
				tempList: null,
				goodList: null,
				goodList_2: null
			};
		},
		methods: {
			onLoad(option) {
				var types = null
				var types_2 = null
				var goodList_1 = null
				var goodList_2 = null
				API.ajax('', function(res) {
					types = res.types
					types_2 = res.types_2
					goodList_1 = res.goodList.slice(0, 4)
					goodList_2 = res.goodList
				})
				this.types = types
				this.types_2 = types_2
				this.goodList = goodList_1
				this.goodList_2 = goodList_2
				this.shopName = JSON.parse(decodeURIComponent(option.shopName))
				this.shopImg = JSON.parse(decodeURIComponent(option.shopImg))
				//页面加载，将总价格传入缓存
				wx.setStorageSync('sumMoney', 0)
				//页面加载将购物车传入缓存
				wx.setStorageSync('goodList_2',this.goodList_2)
			},
			onShow: function(e) {
				console.log('11111111111111111111111111111111111111111111111111111111')
				this.tempList = this.types
				//处理页面传递价格逻辑
				this.tempMoney = parseFloat(wx.getStorageSync('sumMoney'))
				if(this.tempMoney>0){
					this.goodCarImg="https://s1.ax1x.com/2022/05/12/O0rpb4.png"
					this.money = "共" + this.tempMoney.toFixed(1) + "元"
					this.calculate = "去结算"
				}
				//处理购物车商品列表逻辑
				this.goodList_2=wx.getStorageSync('goodList_2')
				//计算价格
				var sum=0
				wx.getStorageSync('goodList_2').map(item=>{
					sum=sum+item.number*18.9
				})
				this.sumMoney=sum
				wx.setStorageSync('sumMoney',sum)
				wx.removeStorageSync('priorList')
			},
			onHide(){
				this.tempMoney = parseFloat(wx.getStorageSync('sumMoney'))
			},
			onChange(e) {
				this.activeNames = e.detail
			},
			getIndex(index) {
				if (index == 5 && this.tempList[index].name == '更多∨') {
					this.tempList = this.types_2
				} else if (index == 13) {
					this.tempList = this.types
				} else {
					//页面跳转具体种类，更新总价格
					wx.setStorageSync('sumMoney', this.tempMoney)
					//页面跳转具体种类，更新购物车
					wx.setStorageSync('goodList_2',this.goodList_2)
					uni.navigateTo({
						url: "/pages/index/allTypes/allTypes?index=" + index
					})
				}
			},
			getMoney(index) {
				uni.showToast({
					title: '已加入购物车',
					duration: 2000,
					icon: 'success'
				})
				this.tempMoney = this.tempMoney + 18.9
				this.money = "共" + this.tempMoney.toFixed(1) + "元"
				this.goodList_2[index].number = this.goodList_2[index].number + 1
				wx.setStorageSync('sumMoney',this.tempMoney)
				wx.setStorageSync('goodList_2',this.goodList_2)
				if (this.tempMoney > 0) {
					this.goodCarImg = "https://s1.ax1x.com/2022/05/12/O0rpb4.png"
				}
			},
			goodCarClick: function(index) {
				uni.navigateTo({
					url: "/pages/index/goodCar/goodCar?goodList=" + encodeURIComponent(JSON.stringify(this.goodList_2))
				})
			},
			goodDetailClick: function(index) {
				uni.navigateTo({
					url: "/pages/index/goodDetail/goodDetail?goodList=" + encodeURIComponent(JSON.stringify(
						this.goodList_2)) + '&index=' + index
				})
			},
			aixin() {

				if (this.isAiXin == true) {
					this.isAiXin = false
					this.aixinImg = "https://s1.ax1x.com/2022/05/12/O0ri5R.png"
					this.isShouCang = "已收藏"
				} else {
					this.isAiXin = true
					this.aixinImg = "https://s1.ax1x.com/2022/05/12/O0Dj2V.png"
					this.isShouCang = "收藏"
				}
			},
			onCancel() {

			},
			ensureOrder(){
				uni.navigateTo({
					url:'/pages/index/ensureOrder/ensureOrder'
				})
			}
		}
	}
</script>

<style>
	.upBox {
		background: #F7F8FA;
	}

	.up {
		display: flex;
		flex-direction: row;
		padding: 10rpx;
	}

	.shopimg {
		width: 170rpx;
		height: 170rpx;
		margin-right: 20rpx;
	}

	.con_up {
		display: flex;
		flex-direction: column;
		font-size: 33rpx;
	}

	.score {
		width: 63rpx;
		height: 33rpx;
		background: #999999;
		font-size: 24rpx;
		border-radius: 3px;
		margin-left: 21rpx;
		margin-top: 19rpx;
		margin-right: 4rpx;
		text-align: center;
		color: white;
	}

	.mark {
		width: 30rpx;
		height: 30rpx;
		mix-blend-mode: multiply;
	}

	.detail {
		display: flex;
		flex-direction: row;
		margin-bottom: 10rpx;
	}

	.aixin {
		width: 30rpx;
		height: 30rpx;
		margin-top: 9rpx;
		margin-left: 15rpx;
		margin-bottom: 22rpx;
		margin-right: 20rpx;
	}

	.shopname {
		font-size: 36rpx;
		margin-top: 10rpx;
	}

	.shou {
		font-size: 30rpx;
	}

	.right {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		height: 170rpx;
		padding-top: 20rpx;
	}

	.shoucang {
		display: flex;
		flex-direction: row;
	}

	.middleBox {
		text-align: center;
	}

	.collapse {
		width: 100rpx;
		height: 50rpx;
	}

	.collapse_item {
		width: 100rpx;
		height: 60rpx;
	}

	.goodBox {
		padding: 10rpx;
		/* background:red; */
	}

	.downDetail {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 10px;
	}

	.goodImg {
		width: 100%;
		height: 307rpx;

	}

	.carImg {
		width: 50rpx;
		height: 50rpx;
		margin-top: 10rpx;
		margin-right: 20rpx;
	}

	.footLeft {
		padding: 20rpx;
		border-top: 1px solid #CCCCCC;
		height: 60rpx;
		background-color: #cccccc;
		line-height: 60rpx;
	}

	.footBottom {
		width: 100%;
		height: 30rpx;
		background-color: grey;
	}

	.footBtn {
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
	}

	.bottomBox {
		width: 100%;
		height: 100rpx;
		background-color: white;
	}

	.xiao {
		color: #AAAAAA;
		font-size: 24rpx;
		margin-right: 20rpx;
	}

	.four {
		margin-top: 10rpx;
		margin-left: 10rpx;
	}

	.goodIntro {
		font-size: 30rpx;
	}

	.moneyTxt {
		margin-top: 10rpx;
		margin-left: 10rpx;
	}
</style>
