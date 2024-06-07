<template>
	<view class="main">

		<van-tabs animated swipeable line-width="60px" :active="active" @change="onChange">
			<!-- 未使用 -->
			<van-tab title="未使用">
				<view class="unuse">
					<view class="bar">demo</view>
					<view class="info_top">
						<view class="detail_left">
							生鲜优惠券
						</view>
						<view class="detal_right">
							<view class="yuan">
								<view class="icon-yuan">￥</view>
								<view>50</view>
							</view>
							<view class="extra">可跨店铺使用</view>
						</view>
					</view>
					<view class="info_bottom">
						<view>满200减50</view>
						<view>有效期：2017.5.19 ~ 2017.6.19</view>
					</view>
				</view>
				<view class="unuse">
					<view class="bar">demo</view>
					<view class="info_top">
						<view class="detail_left">
							生鲜优惠券
						</view>
						<view class="detal_right">
							<view class="yuan">
								<view class="icon-yuan">￥</view>
								<view>50</view>
							</view>
							<view class="extra">可跨店铺使用</view>
						</view>
					</view>
					<view class="info_bottom">
						<view>满200减50</view>
						<view>有效期：2017.5.19 ~ 2017.6.19</view>
					</view>
				</view>
			</van-tab>
			<!-- 已使用 -->
			<van-tab title="已使用">
				<view class="used">
					<!-- <view class="img">
						<image class="img_detail" src="/../../../../static/shiyong.png"></image>
					</view> -->
					<view class="bar">demo</view>
					<view class="info_top">
						<view class="detail_left">
							生鲜优惠券
						</view>
						<view class="detal_right">
							<view class="yuan">
								<view class="icon-yuan">￥</view>
								<view>50</view>
							</view>
							<view class="extra">可跨店铺使用</view>
						</view>
					</view>
					<view class="info_bottom">
						<view>满200减50</view>
						<view>有效期：2017.5.19 ~ 2017.6.19</view>
					</view>
				</view>
				<view class="used">
					<!-- <view class="img">
						<image class="img_detail" src="/../../../../static/shiyong.png"></image>
					</view> -->
					<view class="bar">demo</view>
					<view class="info_top">
						<view class="detail_left">
							生鲜优惠券
						</view>
						<view class="detal_right">
							<view class="yuan">
								<view class="icon-yuan">￥</view>
								<view>50</view>
							</view>
							<view class="extra">可跨店铺使用</view>
						</view>
					</view>
					<view class="info_bottom">
						<view>满200减50</view>
						<view>有效期：2017.5.19 ~ 2017.6.19</view>
					</view>
				</view>
				<view class="used">
					<!-- <view class="img">
						<image class="img_detail" src="/../../../../static/shiyong.png"></image>
					</view> -->
					<view class="bar">demo</view>
					<view class="info_top">
						<view class="detail_left">
							生鲜优惠券
						</view>
						<view class="detal_right">
							<view class="yuan">
								<view class="icon-yuan">￥</view>
								<view>50</view>
							</view>
							<view class="extra">可跨店铺使用</view>
						</view>
					</view>
					<view class="info_bottom">
						<view>满200减50</view>
						<view>有效期：2017.5.19 ~ 2017.6.19</view>
					</view>
				</view>
			</van-tab>
			<!-- 已过期 -->
			<van-tab title="已过期">

				<view class="outdate">
					<view class="bar">demo</view>
					<view class="info_top">
						<view class="detail_left">
							生鲜优惠券
						</view>
						<view class="detal_right">
							<view class="yuan">
								<view class="icon-yuan">￥</view>
								<view>50</view>
							</view>
							<view class="extra">可跨店铺使用</view>
						</view>
					</view>
					<view class="info_bottom">
						<view>满200减50</view>
						<view>有效期：2017.5.19 ~ 2017.6.19</view>
					</view>
				</view>
				<view class="outdate">
					<view class="bar">demo</view>
					<view class="info_top">
						<view class="detail_left">
							生鲜优惠券
						</view>
						<view class="detal_right">
							<view class="yuan">
								<view class="icon-yuan">￥</view>
								<view>50</view>
							</view>
							<view class="extra">可跨店铺使用</view>
						</view>
					</view>
					<view class="info_bottom">
						<view>满200减50</view>
						<view>有效期：2017.5.19 ~ 2017.6.19</view>
					</view>
				</view>
				<view class="outdate">
					<view class="bar">demo</view>
					<view class="info_top">
						<view class="detail_left">
							生鲜优惠券
						</view>
						<view class="detal_right">
							<view class="yuan">
								<view class="icon-yuan">￥</view>
								<view>50</view>
							</view>
							<view class="extra">可跨店铺使用</view>
						</view>
					</view>
					<view class="info_bottom">
						<view>满200减50</view>
						<view>有效期：2017.5.19 ~ 2017.6.19</view>
					</view>
				</view>
				<view class="outdate">
					<view class="bar">demo</view>
					<view class="info_top">
						<view class="detail_left">
							生鲜优惠券
						</view>
						<view class="detal_right">
							<view class="yuan">
								<view class="icon-yuan">￥</view>
								<view>50</view>
							</view>
							<view class="extra">可跨店铺使用</view>
						</view>
					</view>
					<view class="info_bottom">
						<view>满200减50</view>
						<view>有效期：2017.5.19 ~ 2017.6.19</view>
					</view>
				</view>


			</van-tab>
		</van-tabs>



	</view>
</template>

<script>
	const {
		formateDate
	} = require('@/api/common.js')
	export default {
		data() {
			return {
				active: 0,
				img_url: '',
			}
		},
		methods: {
			onChange(event) {
				console.log(event.detail.name)
				if (event.detail.name == 1) {
					this.img_url = '/../../../../static/shiyong.png'
				} else if (event.detail.name == 2) {
					this.img_url = '/../../../../static/guoqi.png'
				} else {
					this.img_url = ''
				}
				console.log(this.img_url)
			}
		}
	}
</script>

<style>
	.main {
		height: 100%;
		background-color: rgb(235, 235, 235);
	}

	.img {
		position: fixed;
		top: -600rpx;
		bottom: 50rpx;
		margin: auto;
		width: 100%;
		height: 150rpx;
		background-repeat: no-repeat;
		text-align: center;
		z-index: 3;
	}

	.img_detail {
		width: 150rpx;
		height: 150rpx;
	}

	.outdate {
		border-radius: 15rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		padding: 10rpx 0;
		margin: 20rpx 20rpx;
		background: url('@/static/guoqi.png') no-repeat 30% 50%/ contain, radial-gradient(circle at 0 50%, transparent 15rpx, white 15rpx) top left,  radial-gradient(circle at 100% 50%, transparent 15rpx, white 15rpx) bottom right;
		background-size: 150rpx 150rpx,50% 100%, 50% 100%;
		background-repeat: no-repeat;
		background-position:50% 50% , 0 50%, 100% 100%;
	}
	
	
	.used {
		border-radius: 15rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		padding: 10rpx 0;
		margin: 20rpx 20rpx;
		background: url('@/static/shiyong.png') no-repeat 30% 50%/ contain, radial-gradient(circle at 0 50%, transparent 15rpx, white 15rpx) top left,  radial-gradient(circle at 100% 50%, transparent 15rpx, white 15rpx) bottom right;
		background-size: 150rpx 150rpx,50% 100%, 50% 100%;
		background-repeat: no-repeat;
		background-position:50% 50% , 0 50%, 100% 100%;
	}
	
	.unuse {
		border-radius: 15rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		padding: 10rpx 0;
		margin: 20rpx 20rpx;
		background:  radial-gradient(circle at 0 50%, transparent 15rpx, white 15rpx) top left,  radial-gradient(circle at 100% 50%, transparent 15rpx, white 15rpx) bottom right;
		background-size: 50% 100%, 50% 100%;
		background-repeat: no-repeat;
		background-position: 0 50%, 100% 100%;
	}
	

	.bar {
		width: 100%;
		font-size: 14rpx;
		border-radius: 15rpx 15rpx 0 0;
		background-color: rgb(153, 153, 153);
		margin-top: -10rpx;
		color: rgb(153, 153, 153);
	}

	.info_top {
		/* border-top: 5rpx rgb(153,153,153) solid; */
		/* background-color: white; */
		border-radius: 15rpx;
		border-bottom: 5rpx rgb(235, 235, 235) dashed;
		padding: 20rpx 40rpx;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.detail_left {
		font-size: 40rpx;
	}

	.detal_right {
		font-size: 40rpx;
	}

	.extra {
		color: rgb(153, 153, 153);
		font-size: 30rpx;
	}

	.yuan {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.icon-yuan {
		font-size: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.info_bottom {
		/* background-color: white; */
		border-radius: 15rpx;
		font-size: 25rpx;
		padding: 40rpx 40rpx;
	}
</style>
