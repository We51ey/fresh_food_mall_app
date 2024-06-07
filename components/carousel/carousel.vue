<template>
	<!-- 首页的轮播图 -->
	<view class="content">
		<view class='home'>
			<swiper indicator-dots circular autoplay interval=3000>
				<swiper-item v-for="(item,index) in swipers" :key="index">
					<image :src="item"></image>
				</swiper-item>

			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: [
					"https://tse2-mm.cn.bing.net/th/id/OIP-C.Mv3a3vvR5aKgIlPlxdCE3wHaDS?w=327&h=155&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					'https://sitecdn.sdongpo.com/wordpress-upyun/2020/04/2c11fc9c769b74eb465c8104208c4d78.png',
					"https://tse3-mm.cn.bing.net/th/id/OIP-C.AJj68ytUNRzvwfi0T_rftQHaC9?w=298&h=140&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"https://tse3-mm.cn.bing.net/th/id/OIP-C.qDZyESWQfiRXT11HwqdmIgHaD9?w=341&h=182&c=7&r=0&o=5&dpr=1.25&pid=1.7"
				]
			}
		},
		methods: {

		}
	}
</script>
<style>
	swiper {
		width: 100%;
		height: 357rpx;
	}

	image {
		width: 100%;
		height: 100%;
	}
</style>
