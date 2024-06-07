<template>
	<view class="content">
		<van-cell-group>
			<van-cell title="头像" size="large">
				<van-image width="80rpx" height="80rpx" :src="avatarUrl" round />
			</van-cell>
			<van-cell title="昵称" :value="nickName" />
		</van-cell-group>
		<view class="cell-box">
			<van-cell-group>
				<van-cell title="手机号" :value="is_phone_bind" />
				<van-cell title="QQ" value="未绑定" />
				<van-cell title="微信" value="未绑定" />
				<van-cell title="微博" value="未绑定" />
			</van-cell-group>
			<view class="cell-box">
				<van-field type="textarea" placeholder=" " autosize label="签名" size="small"
					value="真正的朋友就像宝石，珍贵又稀少。虚伪的朋友就像树叶，哪里都找得到。" />
			</view>
		</view>
		
		
		<van-overlay :show="is_overlay_show"  lock-scroll @click="onClickHide" z-index="9">
			<view class="overlay">
					<van-icon name="passed" size="80rpx" class="overlay_tip"/>
					<view class="overlay_tip">修改成功</view>
			</view>
		</van-overlay>

		<button class="btn_save" @click="doSave">
			保存修改
		</button>
	</view>
</template>

<script>
	const {setStorageSync,getStorageSync} =require('@/api/common.js')
	export default {
		data() {
			return {
			is_overlay_show:false,
			nickName:'', //名称
			avatarUrl:'' ,//头像
			is_phone_bind:'',
			}
		},
		onLoad() {
			this.avatarUrl=getStorageSync('avatarUrl')
			this.nickName=getStorageSync('nickName')
			this.is_phone_bind=getStorageSync('bind_phone')
		},
		
		onShow() {
			
		},
		
		methods: {
			doSave(){
				//TODO：修改成功后提示修改成功
				this.is_overlay_show = true
				setTimeout(function() {
					this.is_overlay_show = false
					uni.navigateBack({
						delta: 1
					});
				}, 1000);
			},
			onClickHide(){
				this.is_overlay_show = false
			},
		}
	}
</script>

<style>
	.content {
		height: 100%;
		background-color: rgb(235, 235, 235);
	}

	.cell-box {
		margin: 20rpx 0;
	}

	.btn_save {
		margin-top: 100rpx;
		color: aliceblue;
		font-size: 40rpx;
		border-radius: 30px;
		width: 80%;
		background-image: linear-gradient(to right, rgb(255, 139, 36), rgb(254, 80, 5));
		position: fixed;
		left: 20px;
		right: 20px;
		bottom: 10%;
	}
	
	.overlay {
		position: absolute;
		background-color: rgb(41, 41, 41, 0.8);
		width: 200px;
		height: 200px;
		text-align: center;
		left: 50%; //起始是在body中，横向距左50%的位置
		top: 50%; //起始是在body中，纵向距上50%的位置，这个点相当于body的中心点，div的左上角的定位
		transform: translate(-50%, -50%); //水平、垂直都居中,也可以写成下面的方式
		border-radius: 20px;
		color: white;
		font-size: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.overlay_tip{
		padding: 10rpx 0;
	}
</style>
