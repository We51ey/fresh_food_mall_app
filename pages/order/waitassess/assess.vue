<template>
	<scroll-view>
		<view class="first">
			<image style="width:57px;height:57px;"
				src="https://img.alicdn.com/imgextra/i1/2208081554011/O1CN01eJTchZ1fV5MybcpFQ_!!0-item_pic.jpg_430x430q90.jpg">
			</image>
			<text>商品评分</text>
			<van-rate></van-rate>
			<!-- <van-icon name="star" size="25" @click=" " />
			<van-icon name="star" size="25" />
			<van-icon name="star" size="25" />
			<van-icon name="star-o" size="25" />
			<van-icon name="star-o" size="25" /> -->
		</view>
		<view class="second">
			<!--  -->
			<!--style="van-field-text-area-min-height:200px;"  -->
			<!-- <van-config-provider  :theme-vars="themeVars" > -->
			<!-- <van-cell-group inset>
			  <van-field
			    v-model="message"
			    rows="10"
				autosize		  
			    type="textarea"
			    placeholder="快来说说您对本产品的想法吧~"
				
			  />
			</van-cell-group> -->
			<!-- </van-config-provider> -->
			<!-- <text style="color: lightgrey;font-size: 14px;">快来说说您对本产品的想法吧~</text> -->
			<view class="uni-textarea">
				<textarea v-model="text" placeholder="快来说说您对本产品的想法吧~" />
			</view>

			<view>
				<image src="/static/shangchuan.png" style="width: 88px;height:88px;position: absolute;bottom:0px;">
				</image>
			</view>

		</view>
		<view class="last">
			<text> 配送评分</text>
			<text> </text>
			<van-rate></van-rate>
			<!-- <van-icon name="star" size="25" @click=" " />
			<van-icon name="star" size="25" />
			<van-icon name="star" size="25" />
			<van-icon name="star-o" size="25" />
			<van-icon name="star-o" size="25" /> -->
		</view>

		<view class="final">
			<van-button type="primary" block color="#FF7F50" @click="showUp()">立即评价</van-button>
		</view>

		<van-overlay :show="show" @click="close()">
			<div class="wrapper" @click="close()">
				<div class="block" />
			</div>
		</van-overlay>

	</scroll-view>
</template>

<script>
	export default {		 
		data() {
			const show = false;
			return {
				show
			}
		},
		methods: {
			showUp: function(e) {
				this.show = true;
			},
			close: function(e) {
				this.show = false;
			}
		},
		
	}
</script>

<style>
	.first {
		width: 100%;
		height: 70px;
		font-size: 15px;
		background-color: white;
		border-bottom: 1px solid lightgrey;
		display: grid;
		align-items: center; //侧轴单行居中
		justify-items: center;
		/* 分别占 20% 20% 10% 10% 10% 10% 10% 10%*/
		/* 分别占 20% 20% 50% 10%*/
		grid-template-columns: 1fr 1fr 2.5fr 0.5fr;
	}

	.second {
		width: 100%;
		height: 200px;
		background-color: white;
		border-bottom: 1px solid lightgrey;
		position: relative;
		padding: 8px;
	}

	.last {
		width: 100%;
		height: 60px;
		background-color: white;
		border-bottom: 1px solid lightgrey;
		font-size: 15px;
		display: grid;
		align-items: center; //侧轴单行居中
		justify-items: center;
		/* 分别占 20% 20% 10% 10% 10% 10% 10% 10%*/
		/* 分别占 20% 20% 50% 10%*/
		grid-template-columns: 1fr 1fr 2.5fr 0.5fr;
	}

	.final {
		width: 100%;
		position: fixed;
		bottom: 0px;
	}

	/* :root {
	  --van-field-text-area-min-height:200px;
	} */
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.block {
		width: 140px;
		height: 140px;
		background-color: #fff;
		background-image: url(/static/assess.png);
		/* mix-blend-mode: multiply; */
	}
</style>
