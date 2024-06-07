<script>
	const {setStorageSync,getStorageSync} =require('@/api/common.js')
	export default {
		onLaunch: function() {
			console.log('App Launch')
			setStorageSync('bind_phone','18352860250')
			setStorageSync('password','123456')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	@import "/wxcomponents/dist/common/index.wxss";

	checkbox.round .wx-checkbox-input,
	checkbox.round .uni-checkbox-input {
		border-radius: 100upx;
	}

	page {
		height: 100%;
	}
</style>
