<template>
	<view>
		<view class="first">
			<view class="left">
				<view><text>\n</text></view>
				<view class="box1"><text>等待买家付款</text></view>
				<view><text class="box2">\n 14分钟59秒后未支付，订单将自动删除</text></view>
			</view>
			<view class="right">
				<image style="width:54px; height:74px;margin-top:8px;" src="/static/wawa.png"></image>
			</view>
		</view>
		
		<addressdetail></addressdetail>
		
		<van-card :price="formatPrice(19.00)" :title="'批发供应挪威冰岛开背红鱼红石斑鱼餐饮生鲜酒店食材'"
			:thumb="'https://gd4.alicdn.com/imgextra/i2/2200739606171/O1CN01JuZ6MI1vSMjlPa2Ft_!!2200739606171.jpg'"
			:num="1">
		</van-card>
		
			<!-- <carddetail></carddetail> -->
			<orderdetail></orderdetail>
			
		<view class="content4">
			<van-row>
				<van-col offset="13">实际应付：19.00元</van-col>
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
				订单创建时间：2022-05-13 08:30
			</van-col>				
		</van-row>
		
		</view>
		<view class="buttondetail">
					<van-button round size="small" @click=""><text style="color: grey;font-size:14px;">联系商家</text></van-button>
					<van-button round size="small" @click="cancelOrder()"><text style="color: grey;font-size:14px;">取消订单</text></van-button>
					<van-button round size="small" @click="" color="#FF7F50"><text style="color:white;font-size:14px;">付款</text></van-button>
		</view>
		<van-dialog id="van-dialog" />
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
			orderdetail
		},
		methods:{
		cancelOrder(){
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
		  
		  //计算价格
		  formatPrice(price) {
		  	return price.toFixed(2);
		  },
		  
		}
	}
</script>

<style>
	.first {
		width: 100%;
		height: 100px;
		background: linear-gradient(to right,#FF8000,#FF4500);
		display: flex;
		justify-content: space-around;
	}

	.left {
		width: 80%;
		height: 90px;
		color: #fff;
		float: left;
		margin-left: 15px;
	}

	.box1 {
		font-size: 16px;
		margin-bottom: -10px;
	}

	.box2 {
		font-size: 14px;
	}
	.last{
		width:375px;
		height:56px;
		border:3px solid lightgrey;
		font-size:14px;
		line-height:26px;
		border-left-color: white;
	}
	.buttondetail{
		width:98%;
		height:48px;
		borer:3px solid lightgrey;
		line-height:48px;
		/* border-top: 3px solid lightgrey; */
		display: flex;
		justify-content: flex-end;
		grid-column-gap: 0.5rem;
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
</style>
