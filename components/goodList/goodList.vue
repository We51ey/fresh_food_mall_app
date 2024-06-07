<template>
	<view>
		<van-row>
			<van-col span="12" v-for="(item,index) in goodList" :key="index">
				<view class="goodBox">
					<image class="goodImg" :src="item.goodImg"></image>
					<text>{{item.goodInfo}}</text>
					<view class="downDetail">
						<view>￥188.9/斤</view>
						<view><image class="carImg" src="https://s1.ax1x.com/2022/05/12/O0axJK.png"></image></view>
					</view>
				</view>
			</van-col>
		</van-row>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				goodList:[
					{
						goodImg:"https://cbu01.alicdn.com/img/ibank/2020/387/998/16752899783_1969057949.jpg",
						goodInfo:"批发供应挪威冰岛开背红鱼红石斑鱼餐饮生鲜酒店食材",
						number:0
					},
					{
						goodImg:"https://cbu01.alicdn.com/img/ibank/O1CN013yexlV1INXfoNMga1_!!3343290881-0-cib.jpg",
						goodInfo:"佑仔食品 新季批发冷冻草莓整颗 批发奶茶商用 水果冰冻草莓",
						number:0
					},
					{
						goodImg:"https://cbu01.alicdn.com/img/ibank/O1CN01GQsZ151grMEnzH7dG_!!2212947574195-0-cib.jpg",
						goodInfo:"老汕记 谷饲雪花牛肉卷500g/盒烤肉火锅新鲜冷冻食品商户实体批发",
						number:0
					},{
						goodImg:"https://cbu01.alicdn.com/img/ibank/O1CN012yUKh31ZwfUCHWULx_!!2212545353259-0-cib.jpg",
						goodInfo:"鸡小胸 新鲜鸡胸肉冷冻小鸡脯肉1000g/袋小鸡胸肉速冻生鲜食材",
						number:0
					}
					
				]
			}
		}
	}
</script>

<style>
	.goodBox{
		padding:10rpx;
	}
	.goodImg{
		width:100%;
		height:307rpx;
		
	}
	.downDetail{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top:10px;
	}
	.carImg{
		width:50rpx;
		height:50rpx;
	}
</style>