<template>
	<view class="content">
		<view class="top">
			<view>共收藏了 {{shop_list.length}} 家店铺</view>
			<view @click="doOption">{{option}}</view>
		</view>

		<van-checkbox-group :value="check_result" @change="onCheckboxChange">
			<view class="detail" v-for="(item,index) in shop_list">
				<view class="shop">
					<view :class="left_style">
						<van-checkbox :name="item.shop_id" />
					</view>
					<view class="left">
						<van-image width="180rpx" height="180rpx" :src="item.shop_img" />
					</view>
					<view class="right">
						<view class="right_top">
							<view class="shop_name">{{item.shop_name}}</view>
							<view class="shop_grade">
								<van-tag type="primary">评分</van-tag>
								{{item.shop_rate}}
							</view>
						</view>
						<view class="right_mid">
							<van-rate :value="item.shop_rate" readonly allow-half />
						</view>
						<view class="right_bottom">
							<view class="right_bottom_left">
								销量{{item.shop_sales}}
							</view>
							<view class="right_bottom_right">
								<van-icon name="guide-o" size="30rpx" />
								<view class="distance">{{item.shop_distance}}km</view>
								<view :class="right_style">
									<button class="enter_shop_button">进店</button>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</van-checkbox-group>


		<van-popup :show="is_popup_show" :overlay="false" position="bottom">
			<view class="popup_show">
				<van-checkbox :value="is_all_checked" @change="checkAll" class="popup_checkbox">全选</van-checkbox>
				<button class="btn_delete" @click="doDelete">删除</button>
			</view>
		</van-popup>
		<van-toast id="van-toast" />
	</view>
</template>

<script>
	import Toast from '@/wxcomponents/dist/toast/toast.js'
	export default {
		data() {
			return {
				check_result: [],
				option: '编辑',
				left_style: 'hide_left',
				right_style: '',
				is_popup_show: false,
				is_all_checked: false,
				shop_list: [{
						shop_id: "0",
						shop_img: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.b2Mw7d-5gpPt8wjdJvfP1gAAAA?w=247&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
						shop_name: '店铺名称1',
						shop_rate: 4.5,
						shop_sales: 2345678,
						shop_distance: 1.7,
					},
					{
						shop_id: "1",
						shop_img: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.b2Mw7d-5gpPt8wjdJvfP1gAAAA?w=247&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
						shop_name: '店铺名称2',
						shop_rate: 4.5,
						shop_sales: 2345678,
						shop_distance: 1.7,
					},
					{
						shop_id: "2",
						shop_img: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.b2Mw7d-5gpPt8wjdJvfP1gAAAA?w=247&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
						shop_name: '店铺名称3',
						shop_rate: 4.5,
						shop_sales: 2345678,
						shop_distance: 1.7,
					},
				]
			}
		},

		methods: {
			//全选按钮
			checkAll(e) {
				this.is_all_checked = e.detail
				if (this.is_all_checked) {
					if (this.check_result.length < this.shop_list.length) {
						this.check_result = []
						for (let i = 0; i < this.shop_list.length; i++) {
							this.check_result.push(this.shop_list[i].shop_id)
						}
					}
				} else {
					this.check_result = []
				}
			},

			hidePopup() {
				this.is_popup_show = false
			},

			showPopup() {
				this.is_popup_show = true
			},

			onCheckboxChange(e) {
				this.check_result = e.detail
				if (this.check_result.length === this.shop_list.length) {
					this.is_all_checked = true
				}else{
					this.is_all_checked = false
				}
				
			},
			doOption() {
				if (this.option == '编辑') {
					//左边show
					this.left_style = 'show_checkbox'
					this.right_style = 'hide_right'
					this.option = '完成'
					this.showPopup()
				} else {
					//左边hide
					this.left_style = 'hide_left'
					this.right_style = 'show_enter_shop_button'
					this.option = '编辑'
					this.hidePopup()
				}
				console.log(this.option)
			},
			doDelete() {
				var check_result_tmp=this.check_result
				this.shop_list=this.shop_list.filter(function(item) {
					return !(item.shop_id in check_result_tmp)
				})
				console.log(check_result_tmp.length)
				console.log(this.shop_list.length)
				if(check_result_tmp.length>0){
					
					Toast.success('删除成功')
					this.check_result=[]
				}
			},
			dateFormat(date){
			    return moment(date).format("YYYY-MM-DD")
			}
		}
	}
</script>

<style>
	.content {
		font-size: 32rpx;
		height: 100%;
		margin-bottom: 20rpx;
		background-color: rgb(235, 235, 235);
	}

	.detail {
		padding-left: 20rpx;
		background-color: white;
		margin-bottom: 10rpx;
	}

	.distance {
		margin-right: 10rpx;
	}

	.show_checkbox {
		width: 120rpx;
		/* padding: 20rpx; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		transition: width 0.3s;
	}

	.hide_left {
		width: 0;
		/* padding: 20rpx; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		transition: width 0.3s;
	}

	.show_enter_shop_button {
		width: 120rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		background-color: white;
		font-size: 24rpx;
		transition: width 0.3s;
	}

	.hide_right {
		width: 0;
		margin-left: 20rpx;
		border-radius: 20rpx;
		background-color: white;
		font-size: 24rpx;
		transition: width 0.3s;
	}




	.top {
		padding: 20rpx 20rpx;
		border-bottom: 3rpx rgb(235, 235, 235) solid;
		background-color: white;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.shop {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.left {
		padding: 20rpx;
		padding-left: 0;
		height: 100%;
	}

	.right {
		width: 100%;
		padding: 20rpx 5rpx;
		padding-right: 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.right_top {
		padding-top: 10rpx;
		display: flex;
		flex-direction: row;
	}

	.shop_grade {
		margin-left: 40rpx;
	}


	.right_bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

	}

	.right_bottom_left {
		font-size: 30rpx;
		color: rgb(153, 153, 153);
	}

	.right_bottom_right {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text-align: center;
	}

	.enter_shop_button {
		width: 120rpx;
		margin-left: 20rpx;
		border-radius: 20rpx;
		border: 2rpx rgb(235, 235, 235) solid;
		background-color: white;
		font-size: 24rpx;
		transition: width 0.3s;
	}


	.popup_show {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text-align: center;
		align-items: center;
	}

	.btn_delete {
		background-color: rgb(153, 153, 153);
		border-radius: 0;
		margin: 0;
		width: 30%;
		font-size: 34rpx;
		color: white;
	}

	.popup_checkbox {
		padding: 0 20rpx;
		font-size: 34rpx;
	}

	button::after {
		border: none;
	}
</style>
