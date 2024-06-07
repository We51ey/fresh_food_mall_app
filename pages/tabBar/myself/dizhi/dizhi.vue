<template>
	<view class="content">
		<view class="main" v-for="(item,index) in address_data" :key=index>
			<view class="top">
				<view>{{item.name}}</view>
				<view>{{item.phone}}</view>
			</view>
			<view class="mid">{{item.province}}{{item.city}}{{item.county}}{{item.address_detail}}</view>
			<view class="bottom">
				<van-radio-group :value="radio" @change="onChange(item.id)">
					<van-radio :name="item.id">默认地址</van-radio>
				</van-radio-group>
				<view class="option">
					<view @click="doEdit(item)">
						<van-icon name="records" size="32rpx" />编辑
					</view>
					<view @click="doDelete(item.id)">
						<van-icon name="delete-o" size="32rpx" />删除
					</view>
				</view>
			</view>
		</view>
		
		
		
		
		<view class="upBox">
			<van-cell title="新增收货地址" is-link size="large" icon="https://i.postimg.cc/02nDvBHX/image.png"
				@click="addressShow" custom-style="background:#F6F6F6"></van-cell>
			<!-- 弹出层 -->
			<van-popup :show="address_show" @close="addressPopup(null)" position="bottom" 
				closeable overlay="false">
				<view class="addressUp">{{option}}</view>
				<view class="address_add">
					<van-cell-group>
						<van-field label="收货人" placeholder="名字" border="true" :value="name" @change="name=$event.detail">
						</van-field>
						<view @click="cityPickerShow">
							<van-field label="选择地区" placeholder="请选择" border="true" type="number" :value="city_pick"   readonly >
							</van-field>
						</view>
						
						<van-field label="联系电话" placeholder="手机或固定号码" border="true" :value='phone' @change="phone=$event.detail">
						</van-field>
						<van-field label="详细地址" placeholder="如街道,楼层,门牌号等" :border="true" :value='address_detail' @change="address_detail=$event.detail">
						</van-field>
						<van-field label="邮政编码" placeholder="邮政编码(选填)" border="true" :value='mail_code' @change="mail_code=$event.detail">
						</van-field>
					</van-cell-group>
					<button class="address_add_confirm" @click="addressPopup">确定</button>
				</view>
			</van-popup>
		</view>
		
		
		<van-popup :show="city_picker_show"  position="bottom" custom-style="height:800rpx;" overlay="false" z-index="20000">
			<van-area 
			:area-list="areaList"
			@confirm="cityPickerPopup" 
			@cancel="cityPickerPopup(null)"
			/>
		</van-popup>
		
		
		<van-dialog id="van-dialog" />
		
	</view>
</template>

<script>
	const {setStorageSync,getStorageSync} =require('@/api/common.js')
	import { areaList } from '@vant/area-data';
	import Dialog from '@/wxcomponents/dist/dialog/dialog.js';
	export default {
		data() {
			return {
				checked: true, //选择默认地址
				radio: 0, //默认地址选项
				address_show: false,
				city_picker_show:false,
				areaList, //地区List
				name:'', //收货人
				phone:'', //联系电话
				city_pick:[],
				address_detail:'', //详细地址
				mail_code:'',
				address_data:null,
				option:'新增收货地址',
				option_id:null
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.address_data=getStorageSync('address_data')
		},
		methods: {
			onChange(id) {
				this.checked = !this.checked
				this.radio =id
			},
			
			addressShow() {
				this.option='新增收货地址'
				this.address_show = true
			},
			
			addressPopup(value) {
				if(value){
					if(this.name&&this.phone&&this.address_detail&&this.city_pick.length){
						// 新增收货地址
						if(this.option=='新增收货地址'){
							console.log(111)
							//TODO:存储新增地址  提示新增成功
							this.address_data.push({
								id:this.address_data.length==0?0:this.address_data[this.address_data.length-1].id+1,
								name:this.name,
								phone:this.phone,
								province:this.city_pick[0],
								city:this.city_pick[1],
								county:this.city_pick[2],
								address_detail:this.address_detail
							})				
						}
						// 编辑收货地址
						else{
							for(var i=0;i<this.address_data.length;i++){
								if(this.address_data[i].id==this.option_id){
									console.log(this.option_id)
									console.log(this.name)
									this.address_data[i].name=this.name
									this.address_data[i].phone=this.phone
									this.address_data[i].province=this.city_pick[0]
									this.address_data[i].city=this.city_pick[1]
									this.address_data[i].county=this.city_pick[2]
								}
							}
						}
						this.address_show = false
						this.name=''
						this.phone=''
						this.address_detail=''
						this.mail_code=''
						this.city_pick=[]
						setStorageSync("address_data",this.address_data)
					}else{
						//TODO：信息填写不完整
						console.log('请填写完整')
					}
				}else{
					this.address_show = false
					this.name=''
					this.phone=''
					this.address_detail=''
					this.mail_code=''
					this.city_pick=[]
				}
			},
			
			
			
			cityPickerShow(){
				this.city_picker_show=true
			},
			cityPickerPopup(value){
				this.city_picker_show=false
				if(value){
					this.city_pick=[]
					for(var i=0;i<value.detail.values.length;i++){
						this.city_pick.push(value.detail.values[i].name)
						console.log(value.detail.values[i].name)
					}
				}else{
					console.log('取消')
				}
			},
			// 修改地址
			doEdit(item){
				this.option='编辑收货地址'
				this.option_id=item.id
				this.address_show=true
				this.name=item.name
				this.phone=item.phone
				this.address_detail=item.address_detail
				this.mail_code=item.mail_code
				this.city_pick=[item.province,item.city,item.county]
			
			},
			// 删除地址
			doDelete(id){
				console.log(id)
				console.log(this.address_data)
				// console.log(id)
				Dialog.confirm({
				  title: '删除地址',
				  message: '确定要删除这条收货地址吗？',
				})
				  .then(() => {
				    // on confirm
					this.address_data=this.address_data.filter(function(item){
						return item.id!=id
					})
					// 永远选择第一个
					if(this.address_data.length>0){
						this.radio=this.address_data[0].id
					}
					setStorageSync('address_data',this.address_data)
				  })
				  .catch(() => {
				    // on cancel
				  });
			}
		}
	}
</script>

<style>
	.content {
		height: 100%;
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: start;
		background-color: rgb(235, 235, 235);
	}

	.main {
		background-color: white;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-bottom: 10rpx;
	}

	.top {
		font-size: 32rpx;
		padding: 20rpx 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.mid {
		font-size: 26rpx;
		padding: 20rpx 20rpx;
		padding-top: 0;
	}

	.bottom {
		padding: 20rpx 20rpx;
		border: 5rpx rgb(235, 235, 235) solid;
		display: flex;
		flex-direction: row;
		font-size: 30rpx;
		justify-content: space-between;
	}

	.option {
		font-size: 30rpx;
		width: 30%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}





	.address_add{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	

	.addressUp {
		padding: 30rpx 0;
		background-color: #F2F2F2;
		border-bottom: 2rpx solid #BFBFBF;
		text-align: center;
	}
	.address_add_confirm{
		margin-top: 40rpx;
		width: 100%;
		color: white;
		background-color: rgb(253,108,1);
		border-radius: 0;
	}
</style>
