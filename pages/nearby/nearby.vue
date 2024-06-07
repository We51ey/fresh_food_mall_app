<template>
	<view>
		<view>
			<form action="/">
				<van-search v-model="value" show-action placeholder="搜索您想要的商品和店铺" @search="onSearch" @cancel="onCancel" />
			</form>
		</view>
		<view class="shopdetail">
			<image
				src="https://s.cn.bing.net/th?id=OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
				class="shopImg"></image>
			<view class="right">
				<view>
					<view class="up">
						<text>店铺名称</text>
						<view class="primary">评分</view>
						<text class="txt">4.5</text>
					</view>
				</view>
				<view>
					<image class="img" src="https://img-blog.csdnimg.cn/905988e28f8f4436ba5a11e78a4b5e6e.png"></image>
					<image class="img" src="https://img-blog.csdnimg.cn/905988e28f8f4436ba5a11e78a4b5e6e.png"></image>
					<image class="img" src="https://img-blog.csdnimg.cn/905988e28f8f4436ba5a11e78a4b5e6e.png"></image>
					<image class="img" src="https://img-blog.csdnimg.cn/905988e28f8f4436ba5a11e78a4b5e6e.png"></image>
					<image class="img" src="https://img-blog.csdnimg.cn/a7d9f2cf09d34001b892803824ed5d22.png"></image>
				</view>
				<view class="down">
					<text>销量 2345678</text>
					<view>
						<image  class="img" src="https://img-blog.csdnimg.cn/06b76861f281455981d700b9783ef475.png"></image>
						<text>1.7km</text>
					</view>
					<van-button round size="small" class="shop">进店</van-button>
				</view>
			</view>
		</view>
		<view class="shopdetail">
			<image
				src="https://s.cn.bing.net/th?id=OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
				class="shopImg"></image>
			<view class="right">
				<view>
					<view class="up">
						<text>店铺名称</text>
						<view class="score">评分</view>
						<text class="txt">4.5</text>
					</view>
				</view>
				<view>
					<image class="img" src="https://img-blog.csdnimg.cn/905988e28f8f4436ba5a11e78a4b5e6e.png"></image>
					<image class="img" src="https://img-blog.csdnimg.cn/905988e28f8f4436ba5a11e78a4b5e6e.png"></image>
					<image class="img" src="https://img-blog.csdnimg.cn/905988e28f8f4436ba5a11e78a4b5e6e.png"></image>
					<image class="img" src="https://img-blog.csdnimg.cn/905988e28f8f4436ba5a11e78a4b5e6e.png"></image>
					<image class="img" src="https://img-blog.csdnimg.cn/a7d9f2cf09d34001b892803824ed5d22.png"></image>
				</view>
				<view class="down">
					<text>销量 2345678</text>
					<view>
						<image  class="img" src="https://img-blog.csdnimg.cn/06b76861f281455981d700b9783ef475.png"></image>
						<text>1.7km</text>
					</view>
					<van-button round size="small" class="shop">进店</van-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	body{
		background:#CCCCCC;
	}
	.shopdetail {
		width: 100%;
		height: 80px;
		display: flex;
		flex-direction: row;
		padding: 5px;
		align-items: center;
		background:white;
		margin-bottom:5px;
	}

	.shopImg {
		width: 80px;
		height: 80px;
	}

	.up {
		position: relative;
		display: flex;
		flex-direction: row;
	}
	.score{
		width:50px;
		height:22px;
		color:white;
		background-color: grey;
		border-radius:3px;
		margin-left:5px;
		text-align:center;
		line-height:22px;
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
	.down{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.shop{
		margin-left:5px;
	}
</style>
