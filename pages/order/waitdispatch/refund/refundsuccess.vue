<template>
	<view>
		<view class="first">
			<view class="left">
				<view class="box1"><text>等待商家回复</text></view>
			</view>
			<view class="right">
				<image style="width:54px; height:74px;margin-top:8px;margin-right:40px" src="/static/wawa.png"></image>
			</view>
		</view>

		<view>
			<van-card :price="formatPrice(29.00)" :title="'佑仔食品 新季批发冷冻草莓整颗 批发奶茶商用 水果冰冻草莓'"
				:thumb="'https://img.alicdn.com/imgextra/i1/2208081554011/O1CN01eJTchZ1fV5MybcpFQ_!!0-item_pic.jpg_430x430q90.jpg'"
				:num="2"></van-card>
			<view class="shenqing">
				<van-button round color="grey" size="small" @click="cancelBack()"><text
						style="color: white;">取消退款</text>
				</van-button>
				<van-button round size="small" @click=""><text style="color: grey;">退款中</text>
				</van-button>
			</view>
			<van-dialog id="van-dialog" />
		</view>

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
		<view class="final">
			<van-row>
				<van-col offset="1">
					退款原因：不想要了
				</van-col>
			</van-row>
			<van-row>
				<van-col offset="1">
					退款金额：29.00元
				</van-col>
			</van-row>
			<van-row>
				<van-col offset="1">
					申请时间：2022-05-13 08:35
				</van-col>
			</van-row>
			<van-row>
				<van-col offset="1">
					售后单号：SH202205130835926
				</van-col>
			</van-row>
		</view>


		<view class="buttondetail">
			<van-button round size="small" @click=""><text style="color: grey;font-size:14px;">联系客服</text>
			</van-button>
			<van-button round size="small" @click="cancelBack()" color="gray"><text style="color:white;font-size:14px;">取消退款</text>
			</van-button>
		</view>

	</view>
</template>

<script>
	import carddetail from '@/components/orderdetail/carddetail.vue'
	import orderdetail from '@/components/orderdetail/orderdetail.vue'
	import Dialog from '@/wxcomponents/dist/dialog/dialog'

	export default {
		components: {
			carddetail,
			orderdetail,
		},
		methods: {
			//计算价格
			formatPrice(price) {
				return price.toFixed(2);
			},
			cancelBack() {
				Dialog.confirm({
						title: '取消退款',
						message: '确定要取消退款吗？'
					})
					.then(() => {
						// on confirm
					})
					.catch(() => {
						// on cancel
					});
			}
		}

	}
</script>

<style>
	.first {
		width: 100%;
		height: 90px;
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
		line-height: 100px;
	}

	.box1 {
		font-size: 16px;
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
	}

	.final {
		font-size: 14px;
		height: 100px;
		line-height: 25px;
		border: 1px solid lightgrey;
		border-bottom: 3px solid lightgrey;
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
		grid-column-gap: 0.5rem;
	}
</style>
