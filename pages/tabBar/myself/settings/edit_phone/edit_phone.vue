<template>
	<view class="content">
		<view class="text-area">
			<van-field placeholder="请输入您的手机号码" border="false" title-width="5px" :value="phone"
				@change="phone=$event.detail" />
			<van-field right-icon="eye-o" placeholder="请输入密码" border="false" password title-width="5px"
				:value="password" @change="password=$event.detail" />
			<van-field right-icon="eye-o" placeholder="请再次输入密码" border="false" password title-width="5px"
				:value="password2" @change="password2=$event.detail" />
			<van-cell-group>
				<van-field center clearable placeholder="请输入短信验证码" border="false" use-button-slot>
					<van-button slot="button" size="small" color="rgb(218,226,228)" class="code">
						获取验证码
					</van-button>
				</van-field>
			</van-cell-group>
			<view class="tip">
				<span>
					绑定成功，可以使用手机号和密码登录
				</span>
			</view>
			<button class="btn_register" @click="doConfirm">
				确定
			</button>
		</view>
		<van-overlay :show="is_overlay_show" lock-scroll>
			<view class="overlay">
				<van-icon name="passed" size="80rpx" class="overlay_tip" />
				<view class="overlay_tip">绑定成功</view>
			</view>
		</van-overlay>
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
				title: 'Hello',
				is_overlay_show: false,
				phone: '',
				password: '',
				password2: '',
			}
		},
		onLoad() {

		},
		methods: {
			//点击确定按钮，显示弹窗， 1s 后进行页面跳转
			doConfirm() {
				var reg = /^1[3456789]\d{9}$/;
				if (!reg.test(this.phone)) {
					Toast('请输入有效的手机号码');
				} else {
					if (this.password === '' && this.password2 === '') {
						console.log('请输入密码')
						Toast('请输入密码');
					} else {
						if (this.password != this.password2) {
							console.log('两次密码不一致')
							Toast('两次密码不一致');
						} else {
							setStorageSync('bind_phone', this.phone)
							setStorageSync('password', this.password)


							this.phone = null
							this.is_overlay_show = true
							setTimeout(function() {
								this.is_overlay_show = false
								uni.switchTab({
									url: '/pages/tabBar/index/index'
								})
							}, 1000);
						}
					}
				}
			}
		}
	}
</script>

<style>
	.content {
		height: 100%;
		margin: 0 20px;
		align-items: center;
		/* text-align: center; */
		justify-content: center;
	}

	.tip {
		margin-top: 10px;
		font-size: 14;
		color: rgb(22, 155, 213);
	}

	.overlay {
		position: absolute;
		background-color: rgba(41, 41, 41, 0.8);
		width: 150px;
		height: 150px;
		text-align: center;
		left: 50%; //起始是在body中，横向距左50%的位置
		top: 50%; //起始是在body中，纵向距上50%的位置，这个点相当于body的中心点，div的左上角的定位
		transform: translate(-50%, -50%); //水平、垂直都居中,也可以写成下面的方式
		z-index: 2;
		border-radius: 20px;
		color: white;
		font-size: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.overlay_tip {
		padding: 10rpx 0;
	}

	.btn_register {
		margin-top: 40px;
		font-size: 16px;

		color: rgb(102, 102, 102);
		background-color: rgb(228, 228, 228);
	}
</style>
