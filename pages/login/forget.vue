<template>
	<view class="content">
		<view class="text-area">
			<van-field  placeholder="请输入您的手机号码" border="false"  title-width="5px" />
			<van-field right-icon="eye-o" placeholder="请输入新密码" border="false" password  title-width="5px" />
			<van-field right-icon="eye-o" placeholder="请再次输入密码" border="false" password  title-width="5px" />
			<van-cell-group>
			  <van-field
			    center
			    clearable
			    placeholder="请输入短信验证码"
			    border="false"
			    use-button-slot
			  >
			    <van-button slot="button" size="small" color="rgb(218,226,228)" class="code">
			      获取验证码
			    </van-button>
			  </van-field>
			</van-cell-group>
			<view class="tip"><span>完成后需要重新登录</span></view>
			<button class="btn_register" @click="doConfirm">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				checked: true,
			}
		},
		onLoad() {
		},
		methods: {
			
			//修改密码 确认按钮 重定向到登录页面
			doConfirm(){
				//TODO:修改密码相关逻辑判断
				console.log('doConfirm')
				uni.reLaunch({
					url: '/pages/login/login'
				})
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
	.tip{
		margin-top: 10px;
		font-size: 14px;
		color: rgb(22,155,213);
		
	}
	.btn_register{
		margin-top: 40px;
		font-size: 16px;
		
		color: rgb(102,102,102);
		background-color: rgb(228,228,228);
	}
	
</style>
