<template>
	<view class="page">
		<view class="shop">
			<view class="primary">
				<view class="locationWrapper">
					<image class="iconLocate"
						src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/d75f1c20c9de11ec8b3f919a31bf0029.png" />
					<text class="location">上海</text>
				</view>
				<view class="wrapper">
					<image class="iconSearch"
						src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/d75e58d0c9de11ec8e3603bec717cfe9.png" />
					<text class="shopTitle">搜索您想要的商品和店铺</text>
				</view>
			</view>
			<view class="side">
				<image class="iconChat"
					src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/d75d9580c9de11ecb9b70bd30440673f.png" />
				<text class="tag">消息</text>
			</view>
		</view>
		<view class="labelWrapper">
			<carousel></carousel>
		</view>
		<view class="list">
			<view class="primaryItem0">
				<image class="iconLogo" @click="fruitClick"
					src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/d7644c40c9de11eca6e0ddc1246c2638.png" />
				<text class="word">新鲜水果</text>
			</view>
			<view class="primaryItem1">
				<image class="iconLogo1" @click="vegetableClick"
					src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/d76388f0c9de11ecbffe51e45d6e509b.png" />
				<text class="tag1">安心蔬菜</text>
			</view>
			<view class="primaryItem2">
				<image class="iconLogo2" @click="milkClick"
					src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/d76388f0c9de11ecbffe51e45d6e509b.png" />
				<text class="label1">牛奶酸奶</text>
			</view>
			<view class="primaryItem3">
				<image class="iconLogo3" @click="eggClick"
					src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/d76388f0c9de11ecbffe51e45d6e509b.png" />
				<text class="word1">肉蛋禽类</text>
			</view>
		</view>
		<view class="tagWrapper">
			<image class="ad"
				src="https://tse1-mm.cn.bing.net/th/id/OIP-C.kmNa041YVuiKr0qllIYIgQHaDQ?w=317&h=153&c=7&r=0&o=5&dpr=1.25&pid=1.7">
			</image>
		</view>
		<view class="list1V2">
			<text class="info">· 平台通用优惠券 ·</text>
			<view class="main">
				<scroll-view scroll-x="true" class="blank">
					<view class="sc">
						<image class="coupons"
							src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/eebd8630caa711ec948ca95ac26a558b.png">
						</image>
					</view>
					<view class="sc">
						<image class="coupons"
							src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/348fc7f0caa711ecb747918913a8a92c.png">
						</image>
					</view>
					<view class="sc">
						<image class="coupons"
							src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/b9c53b70caa811ec8e87978a429fb68e.png">
						</image>
					</view>
					<view class="sc">
						<image class="coupons"
							src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/b9d39350caa811ec856f35d7184769a9.png">
						</image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="shop_sss"><text>· 平台推荐店铺 ·</text></view>
		<view class="shop1">
			<view class="rowItem0">
				<view class="shopTitleWrapper">
					<image
						src="https://tse1-mm.cn.bing.net/th/id/OIP-C.ePz66GrceVvaUcUOYx5VYQHaFj?w=218&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7">
					</image>
				</view>
				<view class="wrapper1" @click="shopClick">
					<view class="group4">
						<text class="shopTitle2">生鲜传奇</text>
						<view class="tagWrapper1"><text class="tag5">评分</text></view>
					</view>
					<image class="logo"
						src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/d769ca80c9de11ec9424f72ca26ab424.png" />
					<text class="label4">销量235689</text>
				</view>
				<text class="count">4.5</text>
				<image class="iconPaperplane"
					src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/d76b7830c9de11ecb669b362e964508e.png" />
				<text class="word4">1.7km</text>
				<view class="wrapper2">
					<text class="tag6">No.1</text>
					<view class="tagWrapper2"><van-button round class="btn_enter" size="small" @click="enterShop">进店</van-button></view>
				</view>
			</view>
			<view class="rowItem1">
				<view class="shopTitleWrapper1">
					<image
						src="https://tse2-mm.cn.bing.net/th/id/OIP-C.X3xGAqNCRW88Dn9cxmJbLgHaFj?w=233&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7">
					</image>
				</view>
				<view class="wrapper3">
					<view class="group5">
						<text class="shopTitle4">谊品生鲜</text>
						<view class="tagWrapper3"><text class="tag8">评分</text></view>
					</view>
					<image class="logo1"
						src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/d769ca80c9de11ec9424f72ca26ab424.png" />
					<text class="label5">销量235689</text>
				</view>
				<text class="num2">4.5</text>
				<image class="iconPaperplane1"
					src="https://images.weserv.nl/?url=https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/d76b7830c9de11ecb669b362e964508e.png" />
				<text class="word5">1.7km</text>
				<view class="wrapper4">
					<text class="tag9">No.2</text>
					<view class="tagWrapper4"><van-button round class="btn_enter" size="small" @click="enterShop">进店</van-button></view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import carousel from '@/components/carousel/carousel.vue'
	import Vue from 'vue'
	export default {
		components: {
			carousel
		},
		data() {
			return {
				constants: {},
			}
		},
		methods: {
			//新鲜水果
			fruitClick: function(e) {
				uni.navigateTo({
					url: "/pages/index/fruit/fruit"
				})
			},
			//安心蔬菜
			vegetableClick: function(e) {
				uni.navigateTo({
					url: "/pages/index/vegetable/vegetable"
				})

			},
			//牛奶酸奶
			milkClick: function(e) {
				uni.navigateTo({
					url: "/pages/index/milk/milk"
				})
			},
			//肉蛋禽类
			eggClick: function(e) {
				uni.navigateTo({
					url: "/pages/index/egg/egg"
				})

			},
			enterShop:function(e){
				uni.navigateTo({
					url:"/pages/index/shopdetail/shopdetail"
				})
			}
		},

	}
</script>
<style scoped lang="css">
	@import './index.css';

	.ad {
		height: 146px;
		width: 375px;
	}

	swiper {
		height: 100px;
	}

	.coupons {
		height: 100px;
		width: 260px;
		display: inline-block;
	}
	scroll-view{
		white-space:nowrap;
		height:101px;
		width:750rpx;
		overflow: scroll;
	}
	.sc{
		display: inline-block;
	}
	.blank{
		overflow: scroll;
	}
	.btn_enter{
		margin-left:5px;
	}
</style>
