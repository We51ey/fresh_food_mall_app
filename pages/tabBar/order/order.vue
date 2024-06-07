<template>
	<view class="orderTabs">
		<!-- 设置全部订单头部导航栏
			sticky开启粘性布局
			swipeable开启滑动切换标签页
		-->
		<van-tabs sticky @click="orderTabs" :active="active" swipeable animated>
			<van-tab v-for="item in navArr" :title="item.title" :name="item.name" >
				<view class="navTabs">
					<van-swipe v-for="(datas,index) in showDatas" :key="datas.orderId">
						<view class="chengboxs">
						</view>

						<view class="dingdan">
							<view>订单号：{{datas.orderId}}</view>
							<view v-if="tagsShow">{{datas.orderStateText}}</view>
						</view>
						<!-- :desc="'订单号:'+datas.orderId" -->
						<van-card class="goods-card" :num="datas.orderNum" :price="formatPrice(datas.orderPrice)"
							:title="datas.orderTitle" :thumb="datas.thumb"
							@click.native="clickToDetail(datas.orderState)">
							<!-- <view slot="tags">
								<van-tag class="vantags" v-if="tagsShow" size="medium" :type="datas.orderType">
									{{datas.orderStateText}}
								</van-tag>
							</view> -->
						</van-card>
						<view>
							<view class="difbutton" v-if="datas.orderNum==1">
								<van-button round size="small" @click.native="cancelOrder()"><text
										style="color: grey;font-size:13px;">取消订单</text></van-button>
								<van-button round size="small" @click="" color="#FF7F50"><text
										style="color:white;font-size:13px;">付款</text></van-button>
							</view>

							<view class="difbutton" v-if="datas.orderNum==2">
								<van-button round size="small" @click=" "><text
										style="color: grey;font-size:13px;">联系商家</text></van-button>
								<van-button round size="small" @click="cui()" color="#FF7F50"><text
										style="color:white;font-size:13px;">催单</text></van-button>
							</view>

							<view class="difbutton" v-if="datas.orderNum==3">
								<van-button round size="small" @click="deliverInfo"><text
										style="color: grey;font-size:13px;">配送信息</text></van-button>
								<van-button round size="small" @click="confirmReceive()" color="#FF7F50"><text
										style="color:white;font-size:13px;">确认收货</text></van-button>
							</view>

							<view class="difbutton" v-if="datas.orderNum==5">
								<van-button round size="small" @click="deliverInfo"><text
										style="color: grey;font-size:13px;">配送信息</text></van-button>
								<van-button round size="small" @click="assess" color="#FF7F50"><text
										style="color:white;font-size:13px;">评价</text></van-button>
							</view>

							<view class="difbutton" v-if="datas.orderNum==4">
								<van-button round size="small" @click="deliverInfo"><text
										style="color: grey;font-size:13px;">配送信息</text></van-button>
							</view>
						</view>

					</van-swipe>
				</view>
			</van-tab>
		</van-tabs>

		<van-dialog id="van-dialog" />

		<van-overlay v-if="flag" :show="show" @click="close()">
			<div class="wrapper" @click="close()">
				<div class="block">催单成功</div>
			</div>
		</van-overlay>
		<van-overlay :show="shows" @click="closes()">
			<div class="wrapper" @click="closes()">
				<div class="again">商家已收到您的催单提醒！</div>
			</div>
		</van-overlay>

	</view>
</template>

<script>
	import Dialog from '@/wxcomponents/dist/dialog/dialog'
	const {
		setStorageSync,
		getStorageSync
	} = require('@/api/common.js')
	export default {
		data() {
			const flag = true;
			const shows = false;
			const show = false;
			return {
				show,
				shows,
				flag,
				active: 'all', //默认的显示状态
				showDatas: [], //需要显示的数据
				tagsShow: true,
				navArr: [{
						title: '全部',
						name: 'all'
					},
					{
						title: '待付款',
						name: 'dfk'
					},
					{
						title: '待发货',
						name: 'dfh'
					},
					{
						title: '待收货',
						name: 'dsh'
					},
					{
						title: '待评价',
						name: 'dpj'
					},
					{
						title: '已完成',
						name: 'ywc'
					}
				],
				navDatas: [{
						orderId: 202205130001,
						orderState: 'dfk',
						orderStateText: '等待付款',
						orderType: 'danger',
						orderTitle: '批发供应挪威冰岛开背红鱼红石斑鱼餐饮生鲜酒店食材',
						orderPrice: 19.00,
						orderNum: 1,
						thumb: 'https://gd4.alicdn.com/imgextra/i2/2200739606171/O1CN01JuZ6MI1vSMjlPa2Ft_!!2200739606171.jpg'
					},
					{
						orderId: 202205130002,
						orderState: 'dfh',
						orderStateText: '等待发货',
						orderType: 'primary',
						orderTitle: '佑仔食品 新季批发冷冻草莓整颗 批发奶茶商用 水果冰冻草莓',
						orderPrice: 29.00,
						orderNum: 2,
						thumb: 'https://img.alicdn.com/imgextra/i1/2208081554011/O1CN01eJTchZ1fV5MybcpFQ_!!0-item_pic.jpg_430x430q90.jpg'
					},
					{
						orderId: 202205130003,
						orderState: 'dsh',
						orderStateText: '等待收货',
						orderType: 'primary',
						orderTitle: '老汕记 谷饲雪花牛肉卷500g/盒烤肉火锅新鲜冷冻食品商户实体批发',
						orderPrice: 39.00,
						orderNum: 3,
						thumb: 'https://cbu01.alicdn.com/img/ibank/O1CN01GQsZ151grMEnzH7dG_!!2212947574195-0-cib.jpg'
					},
					{
						orderId: 202205130005,
						orderState: 'dpj',
						orderStateText: '等待评价',
						orderType: 'success',
						orderTitle: '鸡小胸 新鲜鸡胸肉冷冻小鸡脯肉1000g/袋小鸡胸肉速冻生鲜食材',
						orderPrice: 59.00,
						orderNum: 5,
						thumb: 'https://cbu01.alicdn.com/img/ibank/O1CN012yUKh31ZwfUCHWULx_!!2212545353259-0-cib.jpg'
					},
					{
						orderId: 202205130004,
						orderState: 'ywc',
						orderStateText: '已完成',
						orderType: 'warning',
						orderTitle: '麒麟大西瓜新鲜水果8424应季水果整箱大果甜薄皮现摘现发顺丰包邮',
						orderPrice: 49.00,
						orderNum: 4,
						thumb: '/static/xigua.jpg'
					},
				]
			}
		},
		onLoad() {
		},
		onShow() {
			console.log(getStorageSync('order_status')+'-----------')
			if (getStorageSync('order_status')!=null&&getStorageSync('order_status')!=undefined&&getStorageSync('order_status')!=''){
				this.active=getStorageSync('order_status')
			}
			setStorageSync('order_status','')
			console.log(this.active)
		},
		methods: {
			//标签切换
			orderTabs(e) {
				var that = this;
				that.showDatas = [];
				// console.log(e.detail);
				for (var i = 0; i < that.navDatas.length; i++) {
					if (e.detail.name == that.navDatas[i].orderState) {
						that.showDatas.push(that.navDatas[i])
					} else if (e.detail.name == 'all') {
						that.showDatas = that.navDatas
					}
				}
				// console.log(that.showDatas);
			},

			//计算价格
			formatPrice(price) {
				return price.toFixed(2);
			},
			//页面跳转
			clickToDetail: function(e) {
				if (e == 'dfk') {
					uni.navigateTo({
						url: "/pages/order/waitpay/paydetail"
					})
				} else if (e == 'dfh') {
					uni.navigateTo({
						url: "/pages/order/waitdispatch/dispatchdetail"
					})
				} else if (e == 'dsh') {
					uni.navigateTo({
						url: "/pages/order/waitreceive/receivedetail"
					})
				} else if (e == 'ywc') {
					uni.navigateTo({
						url: "/pages/order/success/success"
					})
				} else if (e == 'dpj') {
					uni.navigateTo({
						url: "/pages/order/waitassess/assessdetail"
					})
				}
			},

			cancelOrder() {
				Dialog.confirm({
						title: '取消订单',
						message: '确定要取消订单吗？'
					})
					.then(() => {
						// on confirm
					})
					.catch(() => {
						// on cancel
					});
			},
			chargeBack() {
				Dialog.confirm({
						title: '申请退款',
						message: '确定要申请退款吗？'
					})
					.then(() => {
						// on confirm
					})
					.catch(() => {
						// on cancel
					});
			},
			deliverInfo: function(e) {
				uni.navigateTo({
					url: "/pages/order/waitreceive/deliverinfo"
				})
			},
			confirmReceive() {
				Dialog.confirm({
						title: '确认收货',
						message: '在您确认收货前，请确保您已收到货！是否确认收货？'
					})
					.then(() => {
						// on confirm
					})
					.catch(() => {
						// on cancel
					});
			},
			assess: function(e) {
				uni.navigateTo({
					url: "/pages/order/waitassess/assess"
				})
			},

			//等待发货页面重复催单显示商家已收到提醒
			cui: function(e) {
				if (this.flag) {
					this.show = true;
					this.shows = false;
				} else {
					this.show = false;
					this.shows = true;
				}
			},
			close: function(e) {
				this.show = false;
				this.shows = false;
				this.flag = false;
			},
			closes: function(e) {
				this.show = false;
				this.shows = false;
				this.flag = false;
			},



		},

		onLoad: function(option) {
			this.active = option.active
			this.showDatas = [];
			this.showDatas = this.navDatas
			for (var i = 0; i < this.navDatas.length; i++) {
				if (option.active == this.navDatas[i].orderState) {
					this.showDatas.push(this.navDatas[i])
				} else if (option.active == 'all') {
					this.showDatas = this.navDatas
				}
			}
		},


	}
</script>

<style>
	.navTabs {
		width: 100%;
		height: 100%;
		margin-bottom: 5%;
	}

	.navTabs .goods-card {
		margin-bottom: 20rpx;
	}

	.vantags {
		position: absolute;
		top: -2rpx;
		right: -20rpx;
	}

	.chengboxs {
		margin-top: 10rpx;
	}

	.dingdan {
		font-size: 13px;
		height: 20px;
		display: flex;
		justify-content: space-between;
		margin: 15px;
		margin-bottom: 2px;
	}

	.difbutton {
		width: 98%;
		height: 48px;
		borer: 3px solid lightgrey;
		line-height: 48px;
		display: flex;
		justify-content: flex-end;
		grid-column-gap: 0.5rem;
	}

	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.block {
		width: 205px;
		height: 50px;
		background-color: #2E2E2E;
		font-size: 18px;
		color: #FAFAFA;
		text-align: center;
		line-height: 50px;
		border-radius: 15px;
		/* background-image: url(/static/assess.png); */
		/* mix-blend-mode: multiply; */
	}

	.again {
		width: 275px;
		height: 50px;
		background-color: #2E2E2E;
		font-size: 18px;
		color: #FAFAFA;
		text-align: center;
		line-height: 50px;
		border-radius: 15px;
	}
</style>
