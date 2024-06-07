<template>
	<view class="main">
		<view class="title">
			<view class="num">0</view>
			<view>积分</view>
		</view>

		<van-tabs animated swipeable line-width="60px">
			<!-- 获取记录 -->
			<van-tab title="获取记录">
				<view class="content">
					<view class="info" v-for="item in get_record">
						<view class="info_left">
							<view class="detail">{{item.detail}}</view>
							<view class="date">{{item.date}}</view>
						</view>
						<view class="info_right">
							<view>+{{item.get_credits}}积分</view>
						</view>
					</view>
				</view>
			</van-tab>
			<!-- 使用记录 -->
			<van-tab title="使用记录">
				<view class="content">
					<view class="info" v-for="item in user_record">
						<view class="info_left">
							<view class="detail">订单：{{item.order}}</view>
							<view class="detail">抵扣金额：{{item.deduction}}元</view>
							<view class="date">{{item.date}}</view>
						</view>
						<view class="info_right">
							<view>-{{item.user_credits}}积分</view>
						</view>
					</view>
				</view>
			</van-tab>
			<!-- 使用规则 -->
			<van-tab title="使用规则">
				<view class="content">
					<view class="info">
						<view class="rules">
							<view class="detail" >a)  积分专属邮乐,仅限邮乐网内使用;</view>
							<view class="detail">b)  积分可以累积,2年内有效;</view>
							<view class="detail">c)  买家在邮乐网消费购物可以获得积分,积分返点比例为:除3C产品外的所有商品均以2元:1积分计,3C产品以10元:1积分计,购买的商品页面中显示积分为零的商品不享受积分获取;</view>
							<view class="detail">d)  积分的数值精确到个位(小数点后全部舍弃,不进行四舍五入),例如:**101元的商品,返50(101*0.5=50.5)个积分;</view>
							<view class="detail">e)  买家在完成该笔交易(订单状态为“已签收”)后才能得到此笔交易的相应积分,如购买商品参加店铺其他优惠,则优惠的金额部分不享受积分获取;</view>
							<view class="detail">f)  买家在邮乐购物付款时可以使用积分,100积分抵扣1元。使用时最多可抵扣应付订单总额的30%或200元人民币,这两个条件以先达到的为准进行抵扣;</view>
						</view>
						
					</view>
				</view>
			</van-tab>
		</van-tabs>



	</view>
</template>

<script>
	const {formateDate} =require('@/api/common.js')
	export default {
		data() {
			return {
				get_record:[
					{
						index:'1',
						detail:'签到获得',
						date:formateDate(new Date(),'yyyy-MM-dd hh:mm'),
						get_credits:5,
					},
					{
						index:'2',
						detail:'签到获得',
						date:formateDate(new Date(),'yyyy-MM-dd hh:mm'),
						get_credits:5,
					},
					{
						index:'3',
						detail:'签到获得',
						date:formateDate(new Date(),'yyyy-MM-dd hh:mm'),
						get_credits:5,
					},
					{
						index:'4',
						detail:'签到获得',
						date:formateDate(new Date(),'yyyy-MM-dd hh:mm'),
						get_credits:5,
					},
				],
				user_record:[
					{
						index:'1',
						order:'291704261137926',
						deduction:50,
						date:formateDate(new Date(),'yyyy-MM-dd hh:mm'),
						user_credits:500
					},
					{
						index:'2',
						order:'291704261137926',
						deduction:50,
						date:formateDate(new Date(),'yyyy-MM-dd hh:mm'),
						user_credits:500
					},
					{
						index:'3',
						order:'291704261137926',
						deduction:50,
						date:formateDate(new Date(),'yyyy-MM-dd hh:mm'),
						user_credits:500
					},
					{
						index:'4',
						order:'291704261137926',
						deduction:50,
						date:formateDate(new Date(),'yyyy-MM-dd hh:mm'),
						user_credits:500
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.main {
		height: 100%;
		background-color: rgb(235, 235, 235);
	}

	.title {
		background-color: aliceblue;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 250rpx;
		display: flex;
		text-align: center;
		flex-direction: column;
		justify-content: center;
	}

	.num {
		font-size: 40rpx;
		padding-bottom: 30rpx;
	}

	.content {
		height: 100%;
		align-items: center;
		display: flex;
		flex-direction: column;
		/* text-align: center; */
		justify-content: start;
		padding: 10rpx 20rpx;
		margin: 0 20rpx;
	}

	.info {
		width: 95%;
		border-radius: 10rpx;
		padding: 20rpx 40rpx;
		background-color: white;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 10rpx 10rpx;
	}

	.info_right {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.detail {
		padding-bottom: 20rpx;
		font-size: 30rpx;
	}

	.date {
		color: rgb(153, 153, 153);
		font-size: 28rpx;
	}
</style>
