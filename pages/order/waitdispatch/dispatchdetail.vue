<template>
	<view>
		<view class="first">
			<view class="left">
				<view><text>\n</text></view>
				<view class="box1"><text>等待商家发货</text></view>
				<view><text class="box2">\n您的商品打包中，请耐心等待哦</text></view>
			</view>
			<view class="right">
				<image style="width:54px; height:74px;margin-top:8px;margin-right:40px" src="/static/wawa.png"></image>
			</view>
		</view>
		<addressdetail></addressdetail>

		<view>
			<van-card :price="formatPrice(29.00)" :title="'佑仔食品 新季批发冷冻草莓整颗 批发奶茶商用 水果冰冻草莓'"
				:thumb="'https://img.alicdn.com/imgextra/i1/2208081554011/O1CN01eJTchZ1fV5MybcpFQ_!!0-item_pic.jpg_430x430q90.jpg'"
				:num="2">
			</van-card>

			<view class="shenqing">
				<van-button round size="small" @click="chargeBack()"><text style="color: grey;">申请退款</text>
				</van-button>
			</view>

			<van-dialog id="van-dialog" />

		</view>

		<!-- 	<van-popup v-model:show="show">内容
					<!-- <van-picker :columns="columns" @change="onChange" confirm-button-text='确定' cancel-button-text='取消' :show-toolbar='true' :default-index="2"/> -->
		<!-- </van-popup> -->

		<orderdetail></orderdetail>
		<view class="content4">
			<van-row>
				<van-col offset="14">实付款：29.00元</van-col>
			</van-row>
		</view>
		<view class="last">
			<van-row>
				<van-col offset="1">
					订单编号：202205130830926
				</van-col>
			</van-row>
			<van-row>
				<van-col offset="1">
					创建时间：2022-05-13 08:30
				</van-col>
			</van-row>
			<van-row>
				<van-col offset="1">
					付款时间：2022-05-13 08:35
				</van-col>
			</van-row>
		</view>

		<view class="buttondetail">
			<van-button round size="small" @click=""><text style="color: grey;font-size:14px;">联系商家</text>
			</van-button>
			<van-button round size="small" @click="cui()" color="#FF7F50"><text
					style="color:white;font-size:14px;">催单</text></van-button>
		</view>

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
	import addressdetail from '@/components/orderdetail/addressdetail.vue'
	import carddetail from '@/components/orderdetail/carddetail.vue'
	import orderdetail from '@/components/orderdetail/orderdetail.vue'
	import Dialog from '@/wxcomponents/dist/dialog/dialog'

	export default {
		components: {
			addressdetail,
			carddetail,
			orderdetail,
		},
		data() {
			const flag = true;
			const shows = false; 
			const show = false;
			return {
				show,
				shows,
				flag,
			}
		},
		methods: {
			cui: function(e) {
				if(this.flag){
					this.show=true;
					this.shows=false;
				}else{
					this.show=false;
					this.shows=true;
				}
			},
			close: function(e) {
				this.show = false;
				this.shows = false;
				this.flag=false;
			},
			closes: function(e) {
				this.show = false;
				this.shows = false;
				this.flag=false;
			},
			

			//计算价格
			formatPrice(price) {
				return price.toFixed(2);
			},

			chargeBack() {
				Dialog.confirm({
						title: '申请退款',
						message: '确定要申请退款吗？'
					})
					.then(() => {
						// on confirm
						uni.navigateTo({
							url: "/pages/order/waitdispatch/refund/refunddetail"
						})						
					})
					.catch(() => {
						// on cancel
					});
			},

		}
	}
</script>

<style>
	.first {
		width: 100%;
		height: 100px;
		background: linear-gradient(to right, #FF8000, #FF4500);
		display: flex;
		justify-content: space-around;
	}

	.left {
		width: 80%;
		height: 90px;
		color: #fff;
		margin-left: 15px;
		float: left;
	}

	.box1 {
		font-size: 16px;
		margin-bottom: -10px;
	}

	.box2 {
		font-size: 14px;
	}

	.content4 {
		font-size: 16px;
		color: red;
		width: 100%;
		height: 44px;
		line-height: 44px;
		border: 1px solid lightgrey;
		border-top: white;
	}

	.last {
		width: 100%;
		height: 78px;
		border: 3px solid lightgrey;
		font-size: 14px;
		line-height: 26px;
		border-left-color: white;
		border-bottom: 5px solid lightgrey;
	}

	.buttondetail {
		width: 98%;
		height: 48px;
		borer: 3px solid lightgrey;
		line-height: 48px;
		display: flex;
		justify-content: flex-end;
		grid-column-gap: 0.5rem;
	}

	.shenqing {
		background-color: #FAFAFA;
		display: flex;
		justify-content: flex-end;
		padding: 5px;
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
