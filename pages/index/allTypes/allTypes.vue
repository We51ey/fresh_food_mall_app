<template>
	<van-tabs :active="active" @change="onChange">
		<view v-for="(item1,index1) in types" :key="index1">
			<van-tab :title="item1.name">
				<view>
					<van-row>
						<van-col span="12" v-for="(item,index) in goodList_Type" :key="item.id">
							<view class="goodBox">
								<image class="goodImg" :src="item.goodImg"></image>
								<text>{{item.goodInfo}}</text>
								<view class="downDetail">
									<view>￥18.9/斤</view>
									<view>
										<image class="carImg" src="https://s1.ax1x.com/2022/05/12/O0axJK.png"
											@click="goodCarClick(item.id)"></image>
									</view>
								</view>
							</view>
						</van-col>
					</van-row>
				</view>
			</van-tab>
		</view>
	</van-tabs>
</template>

<script>
	import goodList from '@/components/goodList/goodList.vue'
	var API = require('../../../utils/shop.js')
	export default {
		components: {
			goodList
		},
		data() {
			return {
				index: null,
				types: null,
				goodList: null,
				goodList_Type: [],
				goodList_2:null,
				active: null,
				sumMoney: null
			};
		},
		methods: {
			onLoad(option) {
				var types = null
				var goodList = null
				API.ajax('', function(res) {
					types = res.types
					goodList = res.goodList
				})
				this.types = types
				this.goodList = goodList
				this.active = parseInt(option.index)
				for (let i = 0; i < this.goodList.length; i++) {
					if (this.goodList[i].type == '蔬菜类') {
						this.goodList_Type.push(this.goodList[i])
					}
				}
				//前一界面传过来的总价格
				this.sumMoney = parseFloat(wx.getStorageSync('sumMoney'))
				this.goodList_2=wx.getStorageSync('goodList_2')
			},
			onChange: function(e) {
				this.goodList_Type = []
				for (let i = 0; i < this.goodList.length; i++) {
					if (this.goodList[i].type == e.detail.title) {
						this.goodList_Type.push(this.goodList[i])
					}
				}
			},
			goodCarClick(id) {
				uni.showToast({
					title: '已加入购物车',
					duration: 2000,
					icon: 'success'
				})
				this.goodList_2[id].number = this.goodList_2[id].number + 1
				this.sumMoney = this.sumMoney + 18.9
				console.log(this.sumMoney)
				//更新缓存中的总价格
				wx.setStorageSync('sumMoney', this.sumMoney)
				//更新缓存中的购物车列表
				wx.setStorageSync('goodList_2',this.goodList_2)
			}
		}
	}
</script>

<style>
	.van-tab {
		flex: none !important;

	}

	.goodBox {
		padding: 10rpx;
	}

	.goodImg {
		width: 100%;
		height: 307rpx;

	}

	.downDetail {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 10px;
	}

	.carImg {
		width: 50rpx;
		height: 50rpx;
	}
</style>
