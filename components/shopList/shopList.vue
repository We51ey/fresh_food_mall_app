<template>
	<view>
		<view>
			<form action="/">
				<van-search v-model="value" show-action placeholder="搜索您想要的商品和店铺" @search="onSearch" @cancel="onCancel" />
			</form>
		</view>
		<view v-for="(item,index) in shopList" :key="index">
			<view class="shopdetail">
				<image :src="item.shopimg"
					class="shopImg"></image>
				<view class="right">
					<view>
						<view class="up">
							<text>{{item.shopname}}</text>
							<view class="score">评分</view>
							<text class="txt">4.5</text>
						</view>
					</view>
					<view>
						<image class="img" src="https://s1.ax1x.com/2022/05/12/O0dGF0.png"></image>
						<image class="img" src="https://s1.ax1x.com/2022/05/12/O0dGF0.png"></image>
						<image class="img" src="https://s1.ax1x.com/2022/05/12/O0dGF0.png"></image>
						<image class="img" src="https://s1.ax1x.com/2022/05/12/O0dGF0.png"></image>
						<image class="img" src="https://s1.ax1x.com/2022/05/12/O0d2lD.png"></image>
					</view>
					<view class="down">
						<text class="xiaoliang">销量 2345678</text>
						<view>
							<image  class="imgPlane" src="https://s1.ax1x.com/2022/05/12/O0dhmd.png"></image>
							<text class="juli">1.7km</text>
						</view>
						<van-button round size="small" class="shop" custom-style="margin-top:-32rpx; margin-left:18rpx;height:56rpx;" @click="enterShop(index)">进店</van-button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				shopList:[
					{
						"id":1,
						"shopname":"逸品生鲜",
						"shopimg":"https://tse1-mm.cn.bing.net/th/id/OIP-C.ePz66GrceVvaUcUOYx5VYQHaFj?w=218&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"	
					},
					{
						"id":2,
						"shopname":"佳佳生鲜",
						"shopimg":"https://tse1-mm.cn.bing.net/th/id/R-C.97dd108291dfeb469f239d7b593cdd12?rik=%2bV35I6dg2efjwg&riu=http%3a%2f%2fimg3.donews.com%2fuploads%2fimg3%2fimg_pic_1515314440_0.png&ehk=NaCJ5sZaFFq75JpLPRN5dT45kI0vihrotfxL0jDaHjQ%3d&risl=&pid=ImgRaw&r=0"	
					},
					{
						"id":3,
						"shopname":"赵赵生鲜",
						"shopimg":"https://tse4-mm.cn.bing.net/th/id/OIP-C.Q-BDeDJ41j_lDLqB_E3aswHaEe?w=280&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"	
					},
					{
						"id":4,
						"shopname":"钱钱生鲜",
						"shopimg":"https://tse2-mm.cn.bing.net/th/id/OIP-C.QMa9hh_E8C2XxIWx8CNrsQHaD2?w=326&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"	
					},
					{
						"id":5,
						"shopname":"孙孙生鲜",
						"shopimg":"https://tse3-mm.cn.bing.net/th/id/OIP-C.0pbenHoxTqg5NFOqy74lcQHaE5?w=250&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"	
					},
					{
						"id":6,
						"shopname":"李李生鲜",
						"shopimg":"https://tse2-mm.cn.bing.net/th/id/OIP-C.X3xGAqNCRW88Dn9cxmJbLgHaFj?w=233&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"	
					},
					{
						"id":7,
						"shopname":"周周生鲜",
						"shopimg":"https://tse2-mm.cn.bing.net/th/id/OIP-C.294c-hwJVLn-RCTDe6-VMwHaEU?w=281&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"	
					},
				]
			};
		},
		methods:{
			enterShop(index){
				uni.navigateTo({
					url: '/pages/index/shopdetail/shopdetail?shopName='+encodeURIComponent(JSON.stringify(this.shopList[index].shopname))+'&shopImg='+encodeURIComponent(JSON.stringify(this.shopList[index].shopimg))
				})
			},
			onCancel(){
				
			}
		}
	}
</script>

<style>
	body{
		background:#F5F5F5;
	}
	.shopdetail {
		width: 100%;
		height: 64px;
		display: flex;
		flex-direction: row;
		padding: 5px;
		align-items: center;
		background:white;
		margin-bottom:5px;
	}

	.shopImg {
		width: 140rpx;
		height: 140rpx;
		margin-right:20rpx;
	}

	.up {
		position: relative;
		display: flex;
		flex-direction: row;
	}
	.score{
		width:62rpx;
		height:44rpx;
		color:white;
		background-color: grey;
		border-radius:6rpx;
		margin-left:40rpx;
		text-align:center;
		line-height:44rpx;
		font-size:24rpx;
	}
	.txt{
		margin-left:5px;
	}
	.right{
		display: flex;
		flex-direction: column;
	}
	.img{
		width:13px;
		height:13px;
		mix-blend-mode: multiply;
	}
	.imgPlane{
		width:20px;
		height:16px;
		margin-left:132rpx;
	}
	.down{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.shop{
		margin-left:5px;
	}
	.xiaoliang{
		color:#999999;
		font-size:24rpx;
	}
	.juli{
		font-size:27rpx;
	}
</style>
