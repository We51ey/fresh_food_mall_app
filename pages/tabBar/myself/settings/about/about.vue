<template>
	<view class="content">

		<view class="title">
			健立达医疗
		</view>
		<van-image width="700rpx" height="350rpx" fit="contain" src="/static/about.png" />
		<view class="text-area">
			<view class="param_title">一、健立达简介</view>

			<view class="param">
				上海健立达医疗科技有限公司（以下简称“健立达医疗”）是一家拥有国家药监局批准的生产医疗器械的和经营医疗器械（一类二类三类）资质，并同时拥有销售准字号、食字号、健字号的集科研、生产、销售于一体的现代化企业。健立达公司立足上海，经十年辛勤耕耘、稳固发展，在上海医疗器械界，享有盛誉。
			</view>
			<view class="param_1">旗下品牌：安脐儿、荷丝缇等。</view>

			<view class="param_title">二、健立达发展的终极目标</view>
			<view class="param_1">立足上海，面向中国，走向世界。</view>
			<view class="param_title">三、健立达的经营特色</view>
			<view class="param_1">
				<van-row>
					1、以满足客户的健康需求为宗旨。
				</van-row>
				<van-row>
					2、我们公司与多家国内知名快递公司合作（顺丰、EMS、宅急送、如风达），所有产品免费快捷送货上门。
				</van-row>
				<van-row>
					3、具备一流的售后服务，为客户排除及解答购买产品后的各种疑问及困扰。
				</van-row>
				<van-row>
					4、健立达商城作为我司特别推出电子商务便捷平台。
				</van-row>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeNames: null,
			}
		},
		methods: {
			onChange(event) {
			      this.activeNames=event.detail
			  },
		}
	}
</script>

<style>
	.content {
		height: 100%;
		margin: 0 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* text-align: center; */
		justify-content: flex-start;
	}

	.text-area {
		margin: 20rpx 0;
	}

	.title {
		padding: 40rpx 0;
		font-size: 40rpx;
		font-weight: bold;
	}

	.param {
		padding: 20rpx 0;
		display: block;
		text-indent: 58rpx;
	}

	.param_1 {
		padding: 40rpx 0;
	}

	.param_title {
		color: rgb(255, 153, 0);
	}
</style>
