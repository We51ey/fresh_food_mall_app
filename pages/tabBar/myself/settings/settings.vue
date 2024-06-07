<template>
	<view class="content">
		<view>
			<van-cell icon="user-o" is-link title="个人资料" link-type="navigateTo"
				url="/pages/tabBar/myself/personinfo/personinfo" />
		</view>
		<view @click="changePassword">
			<van-cell icon="location-o" is-link title="修改密码" />
		</view>
		<view @click="checkIsBind">
			<van-cell icon="phone-o" is-link title="手机号" :value="is_phone_bind"
				 />
		</view>
		<view>
			<van-cell icon="location-o" is-link title="第三方账号管理" link-type="navigateTo"
				url="/pages/tabBar/myself/settings/edit_otheraccount/edit_otheraccount" />
		</view>
		<view>
			<van-cell icon="location-o" is-link title="关于我们" link-type="navigateTo"
				url="/pages/tabBar/myself/settings/about/about" />
		</view>


		<van-popup :show="is_show_popup" @close="onClickHide"
			custom-style="border-radius: 20rpx;  padding: 40rpx ;text-align: center;background-color: rgba(0, 0, 0, 0.6);color: white;width:500rpx;"
			closeable>
			请先绑定手机
		</van-popup>
	</view>
</template>

<script>
	const {
		setStorageSync,
		getStorageSync
	} = require('@/api/common.js')
	export default {
		data() {
			return {
				is_phone_bind: '未绑定',
				is_show_popup: false,
				timer: null
			}
		},
		onShow() {
			this.is_phone_bind = getStorageSync("bind_phone")
		},
		methods: {
			noop() {},

			onClickHide() {
				this.is_show_popup = false
			},
			onClickShow() {
				this.is_show_popup = true
			},
			changePassword() {
				if (this.is_phone_bind == '未绑定') {
					this.onClickShow()
				} else {
					uni.navigateTo({
						url: '/pages/tabBar/myself/settings/edit_password/edit_password'
					})
				}
			},
			checkIsBind(){
				if(this.is_phone_bind==='未绑定'){
					uni.navigateTo({
						url:"/pages/tabBar/myself/settings/edit_phone/edit_phone"
					})
				}
			}
		}
	}
</script>

<style>
	.content {
		height: 100%;
		align-items: center;
		/* text-align: center; */
		justify-content: center;
	}

	.wrapper {
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 40rpx 100rpx;
		background-color: rgba(0, 0, 0, 0.6);
		color: white;

	}
</style>
