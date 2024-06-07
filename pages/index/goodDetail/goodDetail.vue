<template>
	<view>
		<view class="middleBox">
			<view class="content">
				<view class='home'>
					<swiper indicator-dots circular autoplay interval=3000>
						<swiper-item v-for="(item,index) in swipers" :key="index">
							<image :src="item"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="goodDetail">
				<text class="txtCon">{{goodList[index].goodInfo}}</text>
			</view>
			<van-row class="middleInfo">
				<van-col span="8">￥18.9/斤</van-col>
				<van-col span="8" class="txt11">2000人购买</van-col>
				<van-col span="8" class="txt11">库存123456</van-col>
			</van-row>
		</view>
		<view>

			<van-cell title="查看全部评价" icon="chat-o" is-link="true" link-type="navigateTo"
				url="/pages/index/Allevaluation/Allevaluation"></van-cell>
		</view>
		<view class="evalutation">
			<youhuiquanTxt :txt="txt1"></youhuiquanTxt>
		</view>
		<view v-for="(item,index) in swipers" :key="index" class="imgList">
			<image :src="item" class="imgDetail"></image>
		</view>
		<view class="footBox">
			<van-row>
				<van-col span="12">
					<van-button size="large" color="#999999" @click="goodCarClick(index)">加入购物车</van-button>
				</van-col>
				<van-col span="12">
					<van-button size="large" color="#666666" @click="goodBuyClick">立即购买</van-button>
					<van-popup :show="show" @close="onClose" position="bottom" closeable
						custom-style="width:100%; height:429rpx;overflow:visible"
						close-icon="https://s1.ax1x.com/2022/05/12/O0DVBQ.png">
						<view class="fatherPopBox">
							<view class="popupBox">
								<view class="imgContainer">
									<image :src="goodList[index].goodImg" class="singleImg"></image>
								</view>
								<view class="goodInfo">
									<text class="goodInfo1">{{goodList[index].goodInfo}}</text>
									<text>￥18.9/斤</text>
								</view>
							</view>
							<view class="popupBottom">
								<text>购买数量:</text>
								<van-stepper :value="goodList[index].number" @change="changeNumber"></van-stepper>
							</view>
							<van-button custom-style="width:100%; height:80rpx;background:#666666"
								@click="ensure(goodList[index],goodList[index].number)">确定
							</van-button>
						</view>

					</van-popup>
				</van-col>
			</van-row>
		</view>

	</view>
</template>

<script>
	import carousel from '@/components/carousel/carousel.vue'
	import youhuiquanTxt from '@/components/txt/youhuiquan.vue'
	export default {
		components: {
			youhuiquanTxt
		},
		data() {
			return {
				goodList: null,
				index: null,
				swipers: null,
				txt1: "· 商品详情 ·",
				show: false,
				sumMoney: 0,
				buyNumber: 0
			}
		},
		methods: {
			onLoad(option) {
				this.goodList = JSON.parse(decodeURIComponent(option.goodList))
				this.index = parseInt(option.index)
				this.swipers = this.goodList[this.index].moreImg
				wx.removeStorageSync('priorList')
			},
			envaluteClick() {

			},
			//加入购物车
			goodCarClick(index) {
				uni.showToast({
					title: '已加入购物车',
					duration: 2000,
					icon: 'success'
				})
				this.goodList[index].number = this.goodList[index].number + 1
				this.sumMoney = wx.getStorageSync('sumMoney')
				wx.setStorageSync('goodList_2', this.goodList)
				this.sumMoney = this.sumMoney + 18.9
				wx.setStorageSync('sumMoney', this.sumMoney)
			},
			goodBuyClick() {
				this.show = true
			},
			onClose() {
				this.show = false
			},
			ensure(i, number) {
				var list = []
				console.log(wx.getStorageSync('priorList'))
				if (wx.getStorageSync('priorList') == []) {
					wx.getStorageSync('goodList_2').map(item => {
						if (item.id == i.id && item.number == 0) {
							console.log('222222222222222')
							item.number = 1
							list.push(item)
						} else if (item.id == i.id && this.buyNumber!=0) {
							console.log('3333333333333333')
							item.number = this.buyNumber
							list.push(item)
						}else if(item.id == i.id && this.buyNumber==0){
							console.log('44444444444444444')
							list.push(item)
						}
					})
				} else {
					wx.getStorageSync('goodList_2').map(item => {
						if (item.id == i.id) {
							item.number = this.buyNumber
							list.push(item)
						}
					})
				}
				wx.setStorageSync('priorList', list)
				uni.navigateTo({
					url: "/pages/index/ensureOrder/ensureOrder"
				})
			},
			changeNumber(e) {
				const list = []
				wx.getStorageSync('goodList_2').map(item => {
					if (item.id == this.index) {
						list.push(item)
					}
				})
				list[0].number = e.detail
				wx.setStorageSync('priorList', list)
				this.buyNumber = e.detail


			}
		}
	}
</script>

<style>
	.middleBox {
		border-bottom: 7rpx solid #F5F5F5;
	}

	swiper {
		width: 100%;
		height: 434rpx;
	}

	image {
		width: 100%;
		height: 100%;
	}

	.imgDetail {
		width: 100%;
		height: 434rpx;
	}

	.evalutation {
		border-top: 7rpx solid #F5F5F5;
	}

	.footBox {
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
	}

	.singleImg {
		width: 200rpx;
		height: 200rpx;

	}

	.imgContainer {
		width: 230rpx;
		height: 230rpx;
		margin-top: -30rpx;
		margin-left: 30rpx;
		text-align: center;
		background-color: white;
		border-radius: 20rpx;
		padding-top: 17rpx;

	}

	.goodInfo {
		width: 344rpx;
		height: 268rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 20rpx;
		padding-top: 12rpx;
	}

	.popupBox {
		display: flex;
		flex-direction: row;
	}

	.popupBottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.fatherPopBox {
		display: flex;
		flex-direction: column;
	}

	.bottomBox {
		width: 100%;
		height: 500rpx;
		background-color: red;
	}

	.txtCon {
		font-size: 38rpx;
	}

	.goodDetail {
		padding-left: 23rpx;
		padding-right: 10rpx;
		margin-bottom: 10rpx;
	}

	.middleInfo {
		text-align: center;
	}

	.txt11 {
		font-size: 24rpx;
		line-height: 53rpx;
	}

	.imgList {
		border-top: 9rpx solid #F5F5F5;
	}

	.goodInfo1 {
		font-size: 40rpx;
	}
</style>
