const {
	fly
} = require('@/utils/http.js')
const {
	mock,
	Random
} = require('@/utils/mock.js');
async function getFreeweather(city) {
	// 通过for循环生成数组
	// let arr = [];
	// for(let i = 0; i< 100; i++){
	// 	arr.push(mock())
	// }
	// return mock({
	//        'list|1-10': [{
	//            'id|+1': 1,
	// 		'price|0-500': 1
	//        }]
	//    })
	return await fly.get(`/he/freeweather?city=${city}`)
}
// // 登录
// async function login(){
// 	return await fly.post(`/login`,)
// }
// async function getGoodsList(){
// 	return await fly.post(`/good/list`,)
// }
// async function getGoodDetail(){
// 	// return await fly.get(`/good/detail?id=1`,)
// 	return await fly.get(`/good/detail`,{
// 		id: 1
// 	})
// }

// 设置缓存
function setStorageSync(k, v) {
	wx.setStorageSync(k,v)
	console.log(k +'   '+ v)
}

// 获取缓存
function getStorageSync(k) {
	// console.log(wx.getStorageSync(k))
	return wx.getStorageSync(k)
}

function formateDate(date, fmt){
	var o = {
	    "M+" : date.getMonth()+1,                 //月份
	    "d+" : date.getDate(),                    //日
	    "h+" : date.getHours(),                   //小时
	    "m+" : date.getMinutes(),                 //分
	    "s+" : date.getSeconds(),                 //秒
	    "q+" : Math.floor((date.getMonth()+3)/3), //季度
	    "S"  : date.getMilliseconds()             //毫秒
	  };
	  if(/(y+)/.test(fmt)) {
	    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
	  }
	  for(var k in o) {
	    if(new RegExp("("+ k +")").test(fmt)){
	      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
	    }
	  }
	  return fmt
}

module.exports = {
	getStorageSync,
	setStorageSync,
	formateDate
}
