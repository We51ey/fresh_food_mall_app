<template>
	<view>
	<view class="first">
		<view class="left">
		<view><text>\n</text></view>
		<view class="box1"><text>交易成功</text></view>
		<view><text class="box2">\n买家已确认收货</text></view>
	    </view>
		<view><image style="width:54px; height:74px;margin-top:8px;"
		 src="/static/wawa.png"></image></view>
	</view>
	
	<addressdetail></addressdetail>
	
	<van-card :price="formatPrice(59.00)" :title="'鸡小胸 新鲜鸡胸肉冷冻小鸡脯肉1000g/袋小鸡胸肉速冻生鲜食材'"
		:thumb="'https://cbu01.alicdn.com/img/ibank/O1CN012yUKh31ZwfUCHWULx_!!2212545353259-0-cib.jpg'"
		:num="5">
	</van-card>
	
	<!-- <carddetail></carddetail> -->
	<orderdetail></orderdetail>
	
	<view class="content4">
		<van-row>
			<van-col offset="14">实付款：59.00元</van-col>
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
		<van-row>
			<van-col offset="1">
				发货时间：2022-05-13 08:50
			</van-col>
		</van-row>
		<van-row>
			<van-col offset="1">
				成交时间：2022-05-13 08:55
			</van-col>
		</van-row>
	</view>
	<view class="buttondetail">
				<van-button round size="small" @click=""><text style="color: grey;font-size:14px;">联系商家</text>
				</van-button>
				<van-button round size="small" @click="deliverInfo"><text style="color: grey;font-size:14px;">配送信息</text>
				</van-button>
				<van-button round size="small" @click="assess" color="#FF7F50"><text
						style="color:white;font-size:14px;">评价</text></van-button>
	</view>
	
	</view>
</template>

<script>
	import addressdetail from '@/components/orderdetail/addressdetail.vue'
	import carddetail from '@/components/orderdetail/carddetail.vue'
	import orderdetail from '@/components/orderdetail/orderdetail.vue'
	export default {
		components: {
			addressdetail,
			carddetail,
			orderdetail,
		},
		data() {
			return {
				constants: {},
			}
		},
		methods:{
			deliverInfo: function(e){
						  uni.navigateTo({
						  	url: "/pages/order/waitreceive/deliverinfo"
						  })
			},
			assess: function(e){
						  uni.navigateTo({
						  	url: "/pages/order/waitassess/assess"
						  })
			},
			//计算价格
			formatPrice(price) {
				return price.toFixed(2);
			},
			
		}
	}
</script>

<style>
	.first{
		width: 100%;
		height:100px;
		background: #FE600D;
	}
	.left{
		width:75%;
		height:90px;
		color:#fff;
		margin-left: 15px;
		float: left;
	}
	.box1{
		font-size:16px;
		margin-bottom: -10px;
	}
	.box2{
		font-size:14px;
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
		height: 120px;
		border: 1px solid lightgrey;
		font-size: 14px;
		line-height: 23px;
		border-left-color: white;
		padding-top: 12px;
	}
	.buttondetail {
		width: 98%;
		height: 48px;
		borer: 3px solid lightgrey;
		line-height: 44px;
		display: flex;
		justify-content:flex-end;
		grid-column-gap: 0.5rem;
	}
	
</style>