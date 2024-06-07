<template>
	<view>
		<view class="upBox">
			<van-cell is-link icon="https://s1.ax1x.com/2022/05/12/O0reKO.png" @click="addressAddClick"
				custom-style="background:#F6F6F6">
				<view class="addressView"><text class="addressBig">收货人：{{name}}</text>
					<text class="addressBig">{{phone}}</text>
				</view>
				<view class="addressShouhuo"><text class="addressSmall">收货地址：{{address}}</text></view>
			</van-cell>
			<van-popup :show="addressShow" @close="addressPopup(null)" position="bottom" custom-style="height:740rpx;"
				closeable>
				<view class="addressUp"><text>新增收货地址</text></view>
				<view>
					<van-cell-group>
						<van-field label="收货人" placeholder="名字" :border="true" :value="name"
							@change="name=$event.detail">
						</van-field>
						<view @click="cityPickerShow">
							<van-field label="选择地区" placeholder="请选择" border="true" type="number" readonly
								:value="city_pick">
							</van-field>
						</view>
						<van-field label="联系电话" placeholder="手机或固定号码" :border="true" type="number" :value='phone'
							@change="phone=$event.detail">
						</van-field>
						<van-field label="详细地址" placeholder="如街道,楼层,门牌号等" :border="true" :value='address_detail'
							@change="address_detail=$event.detail">
						</van-field>
						<van-field label="邮政编码" placeholder="邮政编码(选填)" :border="true" :value='mail_code'
							@change="mail_code=$event.detail">
						</van-field>
					</van-cell-group>
					<button class="address_add_confirm" @click="addressPopup('确定')">确定</button>
				</view>
			</van-popup>
		</view>
		<!-- 地区弹出层 -->
		<van-popup :show="city_picker_show" position="bottom" custom-style="height:800rpx;" overlay="false"
			z-index="20000">
			<van-area :area-list="areaList" @confirm="cityPickerPopup" @cancel="cityPickerPopup(null)" />
		</van-popup>

		<view>
			<view class="waitBox">
				<view>
					<van-icon name="manager" />生鲜传奇
				</view>
				<text>等待付款</text>
			</view>
			<view v-for="(item,index) in waitList" class="goodBox">
				<image :src="item.goodImg" class="imgBox"></image>
				<view class="goodBoxRight">
					<text>{{item.goodInfo}}</text>
					<view class="goodBoxBottom">
						<text>￥18.9</text>
						<van-stepper :value="item.number" class="stepper" @change="goodNumberChange(item.id,$event)">
						</van-stepper>
					</view>
				</view>
			</view>
		</view>
		<view>
			<view class="dilivery">
				<text>配送方式</text>
				<text>快递配送</text>
			</view>
		</view>
		<view class="buyer">
			<text class="buyTxt1">买家留言： <text class="buyTxt2">（选填）在这里留下您的建议和要求</text></text>
		</view>
		<view>
			<view class="moneyBox">共{{count}}件商品 小计：<text class="money">￥{{money}}</text></view>
		</view>
		<view class="diliveryMoney">
			<text>快递配送费：<text class="develeryTxt">￥0.0</text></text>
		</view>
		<view class="youhuiquan">
			<view @click="youhuiquanClick">优惠券抵扣：<text class="youhuiquanTxt">￥0.0</text>
				<van-icon name="arrow" />
			</view>
			<van-popup :show="youhuiquanShow" @close="youhuiquanChange" closeable position="bottom"
				custom-style="height:728rpx;">
				<view class="addressUp"><text>选择优惠券</text></view>
				<view>
					<view class="youhuiquan_popup">
						<text>店铺优惠券：满50减5</text>
						<van-checkbox show="true" shape="square"></van-checkbox>
					</view>
					<view class="youhuiquan_popup">
						<text>店铺优惠券：满100减20</text>
						<van-checkbox show="false" shape="square"></van-checkbox>
					</view>
					<view class="youhuiquan_popup">
						<text>通用优惠券：满50减5</text>
						<van-checkbox show="false" shape="square"></van-checkbox>
					</view>
					<view class="youhuiquan_popup">
						<text>通用优惠券：满100减20</text>
						<van-checkbox show="false" shape="square"></van-checkbox>
					</view>
					<view class="youhuiquan_popup">
						<text>不使用优惠券</text>
						<van-checkbox show="false" shape="square"></van-checkbox>
					</view>
					<view>
						<van-button custom-style="width:100%;height:100rpx; color:white; background:#666666;">确定
						</van-button>
					</view>
				</view>
			</van-popup>
		</view>
		<view class="jifen">
			<text>积分可抵扣：<text class="jifenTxt">￥0</text></text>
			<van-checkbox show="true" shape="square" custom-style="border-color:#FD7800"></van-checkbox>
		</view>
		<view class="footBox">
			<van-row>
				<van-col span="16">
					<view class="sumMoney">合计：<text>￥{{money}}</text></view>
				</van-col>
				<van-col span="8">
					<view class="orderSubmit" @click="orderClick">提交订单</view>
				</van-col>
				<van-popup :show="show" @close="closePopup" position="bottom"
					custom-style="width:100%;height: 370rpx; background:#F2F2F2; padding:0rpx;">
					<view>
						<van-button custom-style="width:100%;height:100rpx; margin-bottom:30rpx; background:white;"
							@click="zhifu">
							微信支付
						</van-button>
						<van-button custom-style="width:100%;height:100rpx;margin-bottom:30rpx;background:white;"
							@click="zhifu">
							支付宝支付
						</van-button>
						<van-button custom-style="width:100%;height:130rpx; background:#666666;" @click="quxiao">
							取消
						</van-button>
					</view>
				</van-popup>
				<van-popup :show="showKeyboard" @close="onCloseKeyboard" custom-style="width:650rpx;height:500rpx;margin-top:-200rpx;" closeable
					close-icon-position="top-left">
					<view class="mimaBox">
						<view class="mimaBoxUp">
							<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
								custom-style="margin-top:-10rpx;margin-right:10rpx;" />
							<text class="mimaTxt">请输入支付密码</text>
						</view>
						<view class="mimaBoxMiddle">
							<view>
								<text class="app">生鲜APP</text>
							</view>
							<view>
								<text class="maoyeye">￥{{money}}</text>
							</view>
						</view>
						<view>
							<van-cell title="工商银行储蓄卡(5964)" is-link></van-cell>
						</view>
						<view class="footBoxMima">
							<view class="num_list_box" v-for="(item,index) in passwordList" :key="index">
								<view class="num_box" :style="index==0?'border-left: 1px solid #ada9a9;':''">
									<view v-if="item">*</view>
								</view>
							</view>
						</view>
					</view>
				</van-popup>
				<!-- 付款键盘 -->
				<van-popup :show="showKeyboard" position="bottom" overlay="false" custom-style="height: 188px;"
					@close="onCloseKeyboard">
					<view class="numeric_keypad_wrap">
						<view class="numeric_keypad">
							<div class="kc">
								<view v-for="(item,index) in numList" :key="index">
									<span class="kc_span" @click="handleNum" :data-index="item">{{item}}</span>
								</view>
								<span style="background-color: #eeeeee" @click="handleNum" class="kc_span"></span>
								<span @click="handleNum" data-index="0" class="kc_span">0</span>
								<span style="background-color: #eeeeee" @click="handleNumDel" class="kc_span">
									<image src="/static/删除.png" class="kc_image"></image>
								</span>
							</div>
						</view>
					</view>
				</van-popup>

			</van-row>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showKeyboard: false,
				numList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				passwordList: ['', '', '', '', '', ''],
				passwordIndex: 0,
				mima: false,
				address: '',
				name: '',
				phone: '',
				address_detail: '',
				mail_code: '',
				city: '',
				county: '',
				province: '',
				city_picker_show: false,
				option: '新增收货地址',
				address_data: [],
				addressShow: false,
				areaList: {
					province_list: {
						110000: '北京市',
						120000: '天津市',
					},
					city_list: {
						110100: '北京市',
						120100: '天津市',
					},
					county_list: {
						110101: '东城区',
						110102: '西城区',
						// ....
					},
				},
				count: 0,
				money: 0,
				sumMoney: 0,
				show: false,
				isCityshow: false,
				youhuiquanShow: false,
				city_pick: [],
				waitList: []
			}
		},
		components: {
			// areaLists
		},
		methods: {
			onLoad() {
				this.waitList = []
				this.realList = []
				this.realList = wx.getStorageSync('priorList')
				if (this.realList != []) {
					console.log('11111111')
					console.log(this.realList)
					this.waitList = this.realList
					var sum = 0
					this.waitList.map(item => {
						sum = sum + item.number * 18.9
					})
					this.money = sum.toFixed(1)
					this.count = this.waitList.length
				} else {
					console.log('222222222')
					this.money = parseFloat(wx.getStorageSync('sumMoney')).toFixed(1)
					var list = wx.getStorageSync('goodList_2')
					list.map(item => {
						if (item.number > 0) {
							this.waitList.push(item)
						}
					})
					this.count = this.waitList.length
				}

				this.count = this.waitList.length
				this.address_data = wx.getStorageSync('address_data')
				this.name = this.address_data[this.address_data.length - 1].name
				this.phone = this.address_data[this.address_data.length - 1].phone
				this.city = this.address_data[this.address_data.length - 1].city
				this.county = this.address_data[this.address_data.length - 1].county
				this.province = this.address_data[this.address_data.length - 1].province
				this.address_detail = this.address_data[this.address_data.length - 1].address_detail
				this.address = this.city + this.province + this.county + this.address_detail
			},
			orderClick() {
				this.show = true

			},
			closePopup() {
				this.show = false
			},
			addressAddClick() {
				this.addressShow = true
			},
			addressPopup(value) {
				if (value == null) {
					this.addressShow = false
					this.name = ''
					this.phone = ''
					this.address_detail = ''
					this.mail_code = ''
					this.city_pick = []
				} else {
					// 新增收货地址
					//TODO:存储新增地址  提示新增成功
					this.address_data.push({
						id: this.address_data.length == 0 ? 0 : this.address_data[this.address_data
							.length - 1].id + 1,
						name: this.name,
						phone: this.phone,
						province: this.city_pick[0],
						city: this.city_pick[1],
						county: this.city_pick[2],
						address_detail: this.address_detail
					})
					this.addressShow = false
					setStorageSync("address_data", this.address_data)
				}
			},
			onConfirm(e) {
				this.isCityshow = false;
				this.city = e.detail.values[0].name + '/' + e.detail.values[1].name + '/' + e.detail.values[2]
					.name;
				this.MerchantList = []
				this.MerchantListSon = []
			},
			youhuiquanClick() {
				this.youhuiquanShow = true
				console.log('111')
			},
			youhuiquanChange() {
				this.youhuiquanShow = false
				console.log('222')
			},
			goodNumberChange(id, e) {
				console.log(this.waitList)
				this.waitList[id].number = e.detail
				var list = wx.getStorageSync('goodList_2')
				list[id].number = e.detail
				wx.setStorageSync('goodList_2', list)
				var sum = 0
				this.waitList.map(item => {
					sum = sum + item.number * 18.9
				})
				this.money = sum.toFixed(1)
				wx.setStorageSync('sumMoney', this.money)
			},
			cityPickerShow() {
				this.city_picker_show = true
			},
			cityPickerPopup(value) {
				this.city_picker_show = false
				if (value) {
					this.city_pick = []
					for (var i = 0; i < value.detail.values.length; i++) {
						this.city_pick.push(value.detail.values[i].name)
						console.log(value.detail.values[i].name)
					}
				} else {
					console.log('取消')
				}
			},
			quxiao() {
				this.show = false
			},
			zhifu() {
				this.mima = true
				this.show = false
				this.showKeyboard=true
			},
			closeMima() {
				this.mima = false
			},
			// 关闭支付键盘
			onCloseKeyboard() {
				this.showKeyboard=false
				this.passwordList=['','','','','','']
				this.passwordIndex=0
			},
			// 输入支付密码
			handleNum(e) {
				const num = e.currentTarget.dataset.index;
				if( this.passwordIndex >= 6 ) 
				  return
				this.passwordList[this.passwordIndex] = num;
				this.passwordIndex=this.passwordIndex+1
				if(this.passwordIndex==6){
					var str=''
					this.passwordList.forEach((item,index)=>{
						str+=item
					})
					this.endOfTheOrder(str)
				}
				console.log(this.passwordList)
			},
			// 输入支付密码时删除
			handleNumDel() {
				this.passwordList[this.passwordIndex-1]=''
				this.passwordIndex=this.passwordIndex-1
			},
			//结束订单
			endOfTheOrder(str) {
				this.passwordList=['','','','','','']
				this.showKeyboard=false
				uni.navigateTo({
					url:'/pages/index/orderstatus/success'
				})
				
			}


		}
	}
</script>

<style>
	.num_list_box {
		width: 90%;
		margin: 0 auto;
	}

	.num_box {
		margin-bottom: 30px;
		float: left;
		width: 40px;
		height: 40px;
		border-top: 1px solid #ada9a9;
		border-right: 1px solid #ada9a9;
		border-bottom: 1px solid #ada9a9;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
	}

	.addressShouhuo {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		font-size: 29rpx;
		color: black;
	}

	.addressView {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: black;
	}

	.upBox {
		border-bottom: 10rpx dashed #cccccc;
	}

	.waitBox {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 10rpx 20rpx;
		height: 74rpx;
		align-items: center;
	}

	.goodBox {
		display: flex;
		flex-direction: row;
		background-color: #FAFAFA;
		border: 3rpx solid #F0F0F0;
		padding: 20rpx;
		border-bottom: 10rpx solid #F0F0F0;
	}

	.goodBoxRight {
		display: flex;
		flex-direction: column;
		margin-left: 30rpx;
	}

	.goodBoxBottom {
		margin-top: 77rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.imgBox {
		width: 400rpx;
		height: 200rpx;
	}

	.dilivery {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-left: 20rpx;
		padding-right: 20rpx;
		border-bottom: 3rpx solid #cccccc;
		height: 85rpx;
	}

	.buyer {
		padding-left: 20rpx;
		border-bottom: 3rpx solid #cccccc;
		height: 85rpx;
		line-height: 85rpx;
	}

	.buyTxt2 {
		color: #cccccc;
		font-size: 32rpx;
	}

	.money {
		color: #FD7800;
	}

	.moneyBox {
		display: flex;
		flex-direction: row;
		padding-left: 297rpx;
		border-bottom: 3rpx solid #cccccc;
		height: 85rpx;
		align-items: center;
	}

	.diliveryMoney {
		border-bottom: 3rpx solid #cccccc;
		height: 85rpx;
		line-height: 85rpx;
		padding-left: 20rpx;
	}

	.develeryTxt {
		color: #FD7800;
	}

	.youhuiquan {
		border-bottom: 3rpx solid #cccccc;
		height: 85rpx;
		line-height: 85rpx;
		padding-left: 20rpx;
	}

	.youhuiquanTxt {
		color: #FD7800;
		margin-right: 332rpx;
	}

	.jifen {
		border-bottom: 3rpx solid #cccccc;
		height: 85rpx;
		line-height: 85rpx;
		padding-left: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.jifenTxt {
		color: #FD7800;
	}

	.orderSubmit {
		background-color: #666666;
		color: white;
		text-align: center;
		height: 108rpx;
		line-height: 108rpx;
	}

	.sumMoney {
		height: 106rpx;
		line-height: 108rpx;
		padding-left: 142rpx;
		border-bottom: 1rpx solid #CCCCCC;
	}

	.footBox {
		height: 60rpx;
	}

	.addressUp {
		height: 82rpx;
		background-color: #F2F2F2;
		border-bottom: 2rpx solid #BFBFBF;
		text-align: center;
		line-height: 106rpx;
	}

	.youhuiquan_popup {
		height: 108rpx;
		padding: 0rpx 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2rpx solid #cccccc;
	}

	.address_add_confirm {
		margin-top: 40rpx;
		width: 100%;
		color: white;
		background-color: #666666;
		border-radius: 0;
	}

	.mimaBoxUp {
		width: 100%;
		height: 100rpx;
		padding-left: 82rpx;
		line-height: 100rpx;
		border-bottom: 2rpx solid #E7E7E7;
		padding-top: 10rpx;

	}

	.mimaTxt {
		margin-top: 2rpx;
	}

	.mimaBoxMiddle {
		height: 150rpx;
		width: 100%;
		text-align: center;
		border-bottom: 2rpx solid #E7E7E7;
		line-height: 63rpx;

	}

	.maoyeye {
		font-size: 67rpx;
	}

	.app {
		font-size: 30rpx;
	}

	.inputMima {
		float: right;
		margin-right: 2rpx;
		font-size: 1rpx;
		line-height: 1.5rpx;
		margin-left: -2rpx;
	}

	.footBoxMima {
		margin-top: 20rpx;
	}

	/* // 键盘 */
	.numeric_keypad {
		width: 100%;
		background-color: #e2e1e1;
		position: absolute;
		bottom: 0;
		display: flex;
		justify-content: center;
	}

	.kc {
		width: 100%;
		float: left;
	}

	.kc_span {
		float: left;
		width: 32.7%;
		height: 45px;
		line-height: 45px;
		font-size: 18px;
		text-align: center;
		font-weight: bold;
		background-color: white;
		border: 1px solid #eeeeee;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.kc_image {
		width: 25px;
		height: 25px;
	}

	/* // 密码框 */
	.paymentCode_box {
		width: 300px;
		height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}

	.one {
		font-weight: bold;
		font-size: 18px;
	}

	.two {
		margin-top: 10px;
		font-size: 15px;
	}
</style>
