<template>
	<view class="content">
		<view class="top-icon">
			<view @click="toSettingPage">
				<van-icon name="setting-o" size="50rpx"/>
			</view>
			<view @click="toPersonalInfoPage">
				<van-icon name="edit" size="50rpx"/>
			</view>
		</view>
		<view class="user-info">
			<van-image round width="100" height="100" :src="avatarUrl"></van-image>
			<view class="user-name">{{nickName}}</view>
			<view class="user-tip">真正的朋友就像宝石，珍贵又稀少。虚伪的朋友就像树叶，哪里都找得到。</view>
			<button :class="is_sign_in?'sign-in-end':'sign-in'" @click="doSignIn">
				{{is_sign_in_tip}}
			</button>
		</view>
		<view class="grid-box">
			<view class="grid">
				<van-grid column-num="5" square clickable>
					<van-grid-item icon="notes-o" text="待付款" @click="toOrder('dfk')" />
					<van-grid-item icon="shop-o" text="待发货" @click="toOrder('dfh')"/>
					<van-grid-item icon="logistics" text="待收货" @click="toOrder('dsh')"/>
					<van-grid-item icon="comment-o" text="待评价" @click="toOrder('dpj')"/>
					<van-grid-item icon="gold-coin-o" text="售后" @click="toOrder('all')"/>
				</van-grid>
			</view>
			<view class="grid">
				<van-grid column-num="3" square class="grid" clickable>
					<van-grid-item icon="medal-o" text="我的积分" link-type="navigateTo"
						url="/pages/tabBar/myself/jifen/jifen" />
					<van-grid-item icon="coupon-o" text="我的优惠券" link-type="navigateTo"
						url="/pages/tabBar/myself/youhuiquan/youhuiquan" />
					<van-grid-item icon="location-o" text="我的地址" link-type="navigateTo"
						url="/pages/tabBar/myself/dizhi/dizhi" />
					<van-grid-item icon="records" text="我的评价" link-type="navigateTo"
						url="/pages/tabBar/myself/pinglun/pinglun" />
					<van-grid-item icon="star-o" text="我的收藏" link-type="navigateTo"
						url="/pages/tabBar/myself/shoucang/shoucang" />
					<van-grid-item icon="other-pay" text="系统消息" link-type="navigateTo"
						url="/pages/tabBar/myself/sysinfo/sysinfo" />
				</van-grid>
			</view>
			<view class="grid">
				<van-grid column-num="1">
					<van-grid-item use-slot>
						<view class="footer-tip">投诉热线：021-123456</view>
					</van-grid-item>
				</van-grid>
			</view>
		</view>

		<van-overlay :show="show_overlay">
			<view class="overlay">
				<view class="overlay_tip">
					<view class="success">恭喜你! 签到成功!</view>
					<view>
						<view class="jifen">+5</view>
						<view>积分</view>
					</view>
				</view>
				<button class="btn_confirm" @click="signInConfirm">确定</button>
			</view>
		</van-overlay>
	</view>
</template>

<script>
	const {setStorageSync,getStorageSync} =require('@/api/common.js')
	export default {
		data() {
			return {
				is_sign_in: false,
				is_sign_in_tip: "签到",
				show_overlay: false,
				nickName:'', //名称
				avatarUrl:'' ,//头像,
				demo:'',
			}
		},
		onLoad() {
			this.avatarUrl=getStorageSync('avatarUrl')
			// getStorage('avatarUrl')
			this.nickName=getStorageSync('nickName')
			this.demo=getStorageSync('bind_phone')
			console.log('myself'+this.avatarUrl)
			// getStorage('nickName')
			// this.avatarUrl= wx.getStorageSync('avatarUrl')
			// this.nickName= wx.getStorageSync('nickName')
		},
		
		onShow() {
			console.log(this.is_sign_in)
		},
		
		methods: {
			doSignIn() {
				if(this.is_sign_in==false){
					this.is_sign_in = true
					this.is_sign_in_tip = "已签到"
					this.show_overlay = true
				}
			},
			signInConfirm() {
				this.show_overlay = false
			},
			toSettingPage() {
				uni.navigateTo({
					url: "/pages/tabBar/myself/settings/settings"
				});
			},
			toPersonalInfoPage() {
				uni.navigateTo({
					url: '/pages/tabBar/myself/personinfo/personinfo'
				});
			},
			toOrder(value){
				console.log(value)
				setStorageSync('order_status',value)
				uni.switchTab({
					url:'/pages/tabBar/order/order'
				})
			}

		}
	}
</script>

<style>
	.content {
		height: 100%;
	}

	.top-icon {
		margin: 0 3%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.user-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin: 20rpx 20%;
		color: rgb(102, 102, 102);
	}

	.user-tip {
		font-size: 28rpx;
		padding: 10rpx 0;
	}

	.sign-in {
		margin-top: 20rpx;
		color: aliceblue;
		font-size: 30rpx;
		border-radius: 30px;
		width: 200rpx;
		background-image: linear-gradient(to right, rgb(255, 139, 36), rgb(254, 80, 5));
	}

	.sign-in-end {
		margin-top: 20rpx;
		color: aliceblue;
		font-size: 30rpx;
		border-radius: 30px;
		width: 200rpx;
		background-image: linear-gradient(to right, rgb(152, 152, 152), rgb(102, 102, 102));
	}

	.grid-box {
		background-color: rgb(235, 235, 235);
	}

	.grid {
		padding-bottom: 20rpx;
	}

	.footer-tip {
		font-size: 28rpx;
	}


	.overlay {
		position: absolute;
		background-color: rgba(255, 255, 255, 1);
		width: 500rpx;
		height: 500rpx;
		text-align: center;
		left: 50%; //起始是在body中，横向距左50%的位置
		top: 50%; //起始是在body中，纵向距上50%的位置，这个点相当于body的中心点，div的左上角的定位
		transform: translate(-50%, -50%); //水平、垂直都居中,也可以写成下面的方式
		z-index: 2;
		border-radius: 15px;
		color: black;
		font-size: 40rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.success{
		padding: 30rpx 0;
	}

	.jifen {
		font-size: 60rpx;
		padding-top: 30rpx;
	}

	.overlay_tip {
		padding: 30rpx 60rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.btn_confirm {
		color: aliceblue;
		font-size: 40rpx;
		border-radius: 0 0 15px 15px;
		width: 100%;
		text-align: center;
		background-image: linear-gradient(to right, rgb(255, 139, 36), rgb(254, 80, 5));
	}
</style>
