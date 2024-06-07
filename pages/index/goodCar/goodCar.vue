<template>
	<view>
		<view class="upBox">
			<text>共{{count}}件商品</text>
		</view>
		<view class="goodItem" v-for="(item,index) in goodList" :key="item.id" v-if="item.number>0">
			<checkbox-group @change="checkClick(item)">
				<checkbox :checked="item.isChecked" class="round"></checkbox>
			</checkbox-group>
			<image :src="item.goodImg" class="imgGood"></image>
			<view class="itemRight">
				<text>{{item.goodInfo}}</text>
				<view class="itemDetail">
					<text class="itemMoney">18.9</text>
					<van-stepper :value="item.number" @change="goodNumberChange(item.id,$event)"></van-stepper>
				</view>
			</view>
		</view>
		<view class="noMore">
			<text>没有更多了</text>
		</view>
		<view>
			<youhuiquanTxt :txt="txt"></youhuiquanTxt>
		</view>
		<view>
			<goodList></goodList>
		</view>
		<view class="sumBox">
			<van-row>
				<van-col span="16">
					<view class="footLeft">
						<checkbox-group @change="checkAll">
							<checkbox :checked="allChecked" class="round">全选</checkbox>
						</checkbox-group>
						<text>共{{money}}元</text>
					</view>
				</van-col>
				<van-col span="8">
					<view>
						<van-button size="large" color="#666666" @click="ensureOrder">去结算</van-button>
					</view>
				</van-col>
			</van-row>
		</view>
	</view>
</template>

<script>
	import youhuiquanTxt from '@/components/txt/youhuiquan.vue'
	import goodList from '@/components/goodList/goodList.vue'
	import goodsBuy from '@/components/single/single.vue'
	export default {
		components: {
			youhuiquanTxt,
			goodList,
			goodsBuy
		},
		data() {
			return {
				txt: "· 店铺推荐 ·",
				goodList: null,
				allChecked: false,
				realGoodList: [],
				isChecked_2: false,
				count: 0,
				money: 0
			};
		},
		methods: {
			onShow() {
				this.goodList = wx.getStorageSync('goodList_2')
				this.goodList.map(item => {
					item.isChecked = false
				})
				this.allChecked = false
				this.money = 0
				this.realGoodList = []
				wx.removeStorageSync('priorList')
			},
			onUnload(){
				var sum=0
				this.goodList.map(item => {
					sum = sum + item.number * 18.9
				})
				this.money = sum.toFixed(1)
				wx.setStorageSync('sumMoney', this.money)
			},
			onLoad(option) {
				wx.removeStorageSync('priorList')
				this.goodList = wx.getStorageSync('goodList_2')
				for (let i = 0; i < this.goodList.length; i++) {
					if (this.goodList[i].number > 0) {
						this.count = this.count + 1
					}
				}
			},
			//单个商品的选择
			checkClick(item) {
				this.goodList[item.id].isChecked = !item.isChecked
				var count = 0
				var count1=0
				this.goodList.map(item=>{
					if(item.number>0){
						count=count+1
					}
				})
				this.goodList.map(item=>{
					if(item.isChecked){
						count1=count1+1
					}
				})
				if(count1==count){
					this.allChecked=true
				}
				if (!item.isChecked) {
					this.allChecked = false
				} else {
					if (count === this.goodList.length) {
						this.allChecked = true
					} {
						this.allChecked = false
					}
				}
				//计算money值
				var sum = 0
				this.goodList.map(item => {
					if (item.isChecked) {
						sum = sum + item.number * 18.9
					}
				})
				this.money = sum.toFixed(1)
			},
			//全选和全不选
			checkAll() {
				this.allChecked = !this.allChecked
				if (this.allChecked) {
					this.goodList.map(item => {
						item.isChecked = true
					})
					var sum = 0
					this.goodList.map(item => {
						sum = sum + item.number * 18.9
					})
					this.money = sum.toFixed(1)
				} else {
					this.goodList.map(item => {
						item.isChecked = false
					})
					this.money = 0
				}

			},
			goodNumberChange(id, e) {
				this.goodList[id].number = e.detail
				wx.setStorageSync('goodList_2', this.goodList)
				this.goodList = wx.getStorageSync('goodList_2')
				var sum = 0
				this.goodList.map(item => {
					sum = sum + item.number * 18.9
				})
				wx.setStorageSync('sumMoney', this.money)
				this.money = sum.toFixed(1)
				if (this.allChecked == true) {
					this.money = sum.toFixed(1)
				}
				var count=0
				this.goodList.map(item=>{
					if(item.isChecked){
						count=count+1
					}
				})
				console.log(count)
				if(count==0){
					this.money=0
				}
			},
			ensureOrder() {
				var count = 0
				if (this.allChecked) {
					this.realGoodList = []
					wx.getStorageSync('goodList_2').map(item => {
						if (item.number > 0) {
							this.realGoodList.push(item)
						}
					})
					wx.setStorageSync('priorList', this.realGoodList)
				} else {
					this.goodList.map(item => {
						if (item.isChecked) {
							this.realGoodList.push(item)
							wx.setStorageSync('priorList', this.realGoodList)
						}
					})
					this.realGoodList.map(item => {
						if (!item.isChecked) {
							count = count + 1
						}
					})
				}

				if (count == this.realGoodList.length && this.allChecked == false) {
					uni.showToast({
						title: '您还未选择商品',
						duration: 2000,
						icon: 'none'
					})
				} else {
					uni.navigateTo({
						url: '/pages/index/ensureOrder/ensureOrder'
					})
				}

			}
		}
	}
</script>

<style>
	.upBox {
		width: 100%;
		height: 85rpx;
		line-height: 85rpx;
		border-bottom: 1px solid #CCCCCC;
	}

	.noMore {
		width: 100%;
		height: 50rpx;
		background: #F6F6F6;
		text-align: center;
	}

	.footLeft {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20rpx;
		border-top: 1px solid #CCCCCC;
		height: 60rpx;
		background-color: white;
	}

	.carImg {
		width: 50rpx;
		height: 50rpx;
	}

	.imgGood {
		width: 489rpx;
		height: 207rpx;
	}

	.goodItem {
		display: flex;
		flex-direction: row;
		padding: 20rpx;
		align-items: center;
	}

	.itemDetail {
		margin-top: -7rpx;
		margin-left: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.itemRight {
		display: flex;
		flex-direction: column;
	}

	.itemMoney {
		margin-right: 67rpx;
	}

	.sumBox {
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
	}
</style>
