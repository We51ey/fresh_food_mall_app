<template>
	<view class="content">
		
		<image class="logo" src="/static/fresh_logo.png"></image>
		<view class="text-area">
			<van-field left-icon="manager" placeholder="请输入您的手机号码" border="true" label=" " :value="phone" @change="phone=$event.detail"
				title-width="5px" />
			<van-field left-icon="lock" placeholder="请输入您的登录密码" border="true" password label=" " :value="password" @change="password=$event.detail"
				title-width="5px" />
		</view>

		<view class="extra-btn">
			<span class="remember">
				<van-checkbox :value="checked" @change="onChange">
					记住我
				</van-checkbox>
			</span>
			<span class="forget" @click="toForgetPage">忘记密码?</span>
		</view>
		<view class="btns">
			<button class="btn_register" @click="toRegisterPage">注册</button>
			<button class="btn_login" @click="checkLogin">登录</button>
		</view>

		<view class="other_icon">
			<view class="other_text">其他登录方式</view>
			<van-row>
				<van-col span="8">
					<van-icon name="qq" />
					
				</van-col span="8">
				<van-col span="8">
					<van-icon name="wechat" />
				</van-col span="8">
				<van-col span="8">
					<van-icon name="weibo" />
				</van-col span="8">

			</van-row>
			<van-row>
				<van-col span="8">QQ</van-col>
				<van-col span="8">微信</van-col>
				<van-col span="8">微博</van-col>
			</van-row>
		</view>
		
		<van-toast id="van-toast" />
		<van-toast id="custom-selector" />
	</view>
</template>

<script>
	import Toast from '@/wxcomponents/dist/toast/toast';
	const {setStorageSync,getStorageSync} =require('@/api/common.js')
	export default {
		data() {
			return {
				title: 'Hello',
				checked: true,
				phone:'',
				password:'',
				
			}
		},
		onLoad() {
			
		},
		onLaunch() {
			
			console.log(getStorageSync('bind_phone'))
			console.log(getStorageSync('password'))
			console.log('================')
		},
		onShow() {
			
		},
		methods: {
			
			// 获取用户名称 获取用户头像
			getUserProfile() {
				wx.getUserProfile({
					desc: '用于登录授权', // 声明获取用户个人信息后的用途，后续会展示在弹窗中
					success: (res) => {
						//存储用户头像 名称
						setStorageSync('avatarUrl',res.userInfo.avatarUrl)
						setStorageSync('nickName',res.userInfo.nickName)
						setStorageSync('bind_phone',this.phone)
						setStorageSync('password',this.password)
						setStorageSync('address_data',[
					{
						id:0,
						name:'张三',
						phone:'223142123',
						province:'上海',
						city:'上海市',
						county:'闵行区',
						address_detail:'浦江镇江龙路满香园4号902室',
					},{
						id:1,
						name:'李四',
						phone:'223142123',
						province:'上海',
						city:'上海市',
						county:'闵行区',
						address_detail:'浦江镇江龙路满香园4号902室',
					},{
						id:2,
						name:'王五',
						phone:'223142123',
						province:'',
						city:'',
						county:'',
						address_detail:'浦江镇江龙路满香园4号902室'
					},
				])
						const toast = Toast.loading({
						  duration: 0, // 持续展示 toast
						  forbidClick: true,
						  message: '加载中',
						  selector: '#custom-selector',
						});
						
						let second = 2;
						const timer = setInterval(() => {
						  second--;
						  if (second) {
							  if(second==2){
								  toast.setData({
								    message: '加载中',
								  });
							  }else{
								  toast.setData({
								    message: '登录成功',
								  });
							  }
						    
						  } else {
						    clearInterval(timer);
						    Toast.clear();
							this.toIndexPage()
						  }
						}, 1000);
					}
				})
			},
			//记住密码选项
			onChange() {
				this.checked = !this.checked
			},
			//重定向到注册页面
			toRegisterPage() {
				uni.redirectTo({
					url: 'register'
				})
			},
			
			
			
			//登录，跳转到主页 
			toIndexPage() {
				//判断手机号和密码 
				console.log(this.phone)
				console.log(this.password)
				// this.getUserProfile()
				uni.switchTab({
					url: '/pages/tabBar/index/index'
				})
			},
			//重定向到忘记密码页面
			toForgetPage() {
				uni.redirectTo({
					url: 'forget'
				})
			},
			
			checkLogin(){
				if(this.phone===''||this.password===''){
					Toast.fail('手机号或密码不可为空');
				}else{
					var reg=/^1[3456789]\d{9}$/;
					if(!reg.test(this.phone)){
						Toast.fail('请输入有效的手机号码');
					}else{
						console.log('----------------')
						console.log(getStorageSync('bind_phone'))
						console.log(getStorageSync('password'))
						console.log('----------------')
						if((getStorageSync('bind_phone')===''||getStorageSync('bind_phone')===undefined||getStorageSync('bind_phone')===null)){
							this.getUserProfile()
						}else{
							if(this.phone===getStorageSync('bind_phone')&&this.password===getStorageSync('password')){
								this.getUserProfile()
							}else{
								Toast.fail('手机号或密码错误');
							}
						}
					}
				}
			},
		}
	}
</script>

<style>
	.content {
		height: 100%;
		margin: 0 20px;
		align-items: center;
		text-align: center;
		justify-content: center;
		/* color: rgb(153, 153, 153); */
	}

	.logo {
		height: 200rpx;
		width: 300rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.extra-btn {
		margin-top: 15px;
		margin-bottom: 30px;
		margin-left: 5%;
		margin-right: 5%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/* align-items: flex-start; */
	}

	.btns {
		margin-top: 60px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.btn_register {
		font-size: 16px;
		border-radius: 20px;
		width: 34%;
		background-color: rgb(65,165,238);
		color: white;

	}

	.btn_login {
		font-size: 16px;
		border-radius: 20px;
		width: 34%;
		background-color: rgb(65,165,238);
		color: white;
	}

	.other_icon {
		margin: 20px 0;
		/* text-align: center; */
		position: fixed;
		left: 20px;
		right: 20px;
		bottom: 2%;
	}

	.other_text {
		margin-bottom: 20px;
	}
</style>
