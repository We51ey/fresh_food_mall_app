<template>
	<view>
	<van-card :price="formatPrice(188.9)" :title="'佑仔食品 新季批发冷冻草莓整颗 批发奶茶商用 水果冰冻草莓'"
		:thumb="'https://img.alicdn.com/imgextra/i1/2208081554011/O1CN01eJTchZ1fV5MybcpFQ_!!0-item_pic.jpg_430x430q90.jpg'"
		:num="2">
	</van-card>
	</view>
</template>

<script>
	export default {
		methods: {
			//计算价格
			formatPrice(price) {
				return price.toFixed(2);
			}
		}
	}
</script>

<style>
	.content {
		
	}
</style>
