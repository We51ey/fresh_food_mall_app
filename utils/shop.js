let API_HOST = "http://xxx.com/xxx";
let DEBUG = true; //切换数据入口
var Mock = require('./mock')
const Random = require('./mock').Random

function ajax(data = '', fn, method = "get", header = {}) {
	if (!DEBUG) {
		wx.request({
			url: config.API_HOST + data,
			method: method ? method : 'get',
			data: {},
			header: header ? header : {
				"Content-Type": "application/json"
			},
			success: function(res) {
				fn(res);
			}
		});
	} else {
		// 模拟数据
		var res = Mock.mock({
			'data|4': [{
				'shopImg|1': [
					"https://tse1-mm.cn.bing.net/th/id/OIP-C.ePz66GrceVvaUcUOYx5VYQHaFj?w=218&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"https://tse4-mm.cn.bing.net/th/id/OIP-C.Q-BDeDJ41j_lDLqB_E3aswHaEe?w=259&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"https://tse1-mm.cn.bing.net/th/id/OIP-C.l90QgpHf60afI517WTzdEgHaFJ?w=275&h=190&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"https://tse3-mm.cn.bing.net/th/id/OIP-C.drFldnin61inF8s8ExoVgwHaFm?w=247&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"https://tse3-mm.cn.bing.net/th/id/OIP-C.feO3UMNLRucPw_zT8oNcLAHaFM?w=231&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"https://tse3-mm.cn.bing.net/th/id/OIP-C.k8-0Zkt1KIQPwRGI8EQ41wHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"https://tse4-mm.cn.bing.net/th/id/OIP-C.Yf3Hy_mYolA5la99QSZSDwHaE7?w=239&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"https://tse3-mm.cn.bing.net/th/id/OIP-C._AjmV6RJAbbwLxTTGsufDgHaEW?w=286&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"https://tse4-mm.cn.bing.net/th/id/OIP-C.b2Mw7d-5gpPt8wjdJvfP1gAAAA?w=247&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					
				],
				'shopName|1': ['赵赵生鲜', '钱钱生鲜', '孙孙生鲜', '丽丽生鲜', '周周生鲜', "吴吴生鲜", "郑郑生鲜", "王王生鲜"],
				'rank|+1': 1
			}],
			'types|6': [{
				'span': 8,
				'name|+1': ['蔬菜类', '水果类', '海鲜类', '海贝类', '普甜放心肉', '更多∨']
			}],
			'types_2|14': [{
				'id|+1': 0,
				'name|+1': ['蔬菜类', '水果类', '海鲜类', '海贝类', '普甜放心肉', '鸡鸭肉类', '面制品类', '禽蛋类', '冻品类', '熟食类',
					'豆制品类', '干果类', '鲜奶类', '收起∧'
				]
			}],
			'goodList|9': [{
				'id|+1':[0,1,2,3,4,5,6,7,8],
				'goodImg|+1': [
					"https://img.alicdn.com/imgextra/i2/3311258085/O1CN01NX4kSk29ays4O9iG6_!!3311258085.jpg_430x430q90.jpg",
					"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2939922051/O1CN01gv1Cuv1R1P52R7YND_!!2939922051.jpg_430x430q90.jpg",
					"https://img.alicdn.com/imgextra/i3/2271279753/O1CN01GxvCzG2LuvYdat4ZR_!!2271279753.jpg_430x430q90.jpg",
					"https://img.alicdn.com/imgextra/i4/2200590357415/O1CN01SDGByg24e7Xz605xZ_!!0-item_pic.jpg_430x430q90.jpg",
					"https://gd3.alicdn.com/imgextra/i2/2528567960/O1CN01y7gJBu28fjRGW2yUX_!!2528567960.jpg_400x400.jpg",
					"https://gd3.alicdn.com/imgextra/i2/2711674509/O1CN010LyN2n1jBAbFKtwE3_!!2711674509.jpg_400x400.jpg",
					"https://gd1.alicdn.com/imgextra/i2/2211420500945/O1CN01S8vTUd1Iqr1DsV2qP_!!2211420500945.jpg_400x400.jpg",
					"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3499860862/O1CN01ps84PI1IEq8vX9v0q_!!3499860862.jpg_430x430q90.jpg",
					"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/3499860862/O1CN01bquflz1IEq9sEqWcA_!!3499860862.jpg_430x430q90.jpg"
				],
				"goodInfo|+1":[
					"泰国榴莲金枕头带壳榴莲应季水果热带鲜果整箱榴莲",
					"海南妃子笑荔枝新鲜现摘5斤装应季水果当季整箱包邮",
					"海南大台农芒果新鲜9斤当季水果现摘热带芒果小台芒",
					"东北冻梨大黑梨正宗大冻梨冬梨延边苹果梨4斤大果",
					"新疆西红柿沙瓤新鲜水果自然熟普罗旺斯生吃番茄蔬菜",
					"新鲜黄瓜蔬菜带刺青瓜脆嫩孕妇生吃水果无农药农家现摘",
					"红魔虾特大鲜活刺身级低温甜虾非莫桑比克西班牙甜虾",
					"海兔子满籽墨鱼仔新鲜海兔鲜活带籽笔管鱼大乌贼",
					"扇贝肉带黄新鲜扇贝鲜活特大冷冻海鲜水产红贝"
				],
				"number|+1":[0,0,0,0,0,0,0,0,0],
				"type|+1":['水果类','水果类','水果类','水果类','蔬菜类','蔬菜类','海鲜类','海鲜类','海贝类'],
				"isChecked|+1":[false,false,false,false,false,false,false,false,false],
				"moreImg|+1":[
					[
						"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2213943936531/O1CN012MNvs81y7FSUqt2ab_!!2213943936531.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/i2/3311258085/O1CN01cXNOtB29aykbbnG7r_!!3311258085.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/i2/3311258085/O1CN01NX4kSk29ays4O9iG6_!!3311258085.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/i2/3311258085/O1CN014jynnO29ayweo4rwv_!!3311258085.jpg_430x430q90.jpg"
					],
					[
						"https://gd1.alicdn.com/imgextra/i1/1729844975/O1CN01M1A9mf1mcb1vEpuzU_!!1729844975.jpg_400x400.jpg",
						"https://gd4.alicdn.com/imgextra/i4/1729844975/O1CN01Zj1kw11mcb67lsvmj_!!1729844975.jpg_400x400.jpg",
						"https://gd2.alicdn.com/imgextra/i2/1729844975/O1CN0147G4nj1mcb6rXrKMU_!!1729844975.jpg_400x400.jpg",
						"https://gd1.alicdn.com/imgextra/i2/0/O1CN01K7Mlqj1mcbBPewRei_!!0-item_pic.jpg_400x400.jpg"
					],
					[
						"https://img.alicdn.com/imgextra/i3/2271279753/O1CN01GxvCzG2LuvYdat4ZR_!!2271279753.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/i3/2271279753/O1CN01KCa4Xo2LuvYgai9Rd_!!2271279753.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/i3/2271279753/O1CN01y2maDX2LuvYgajYs1_!!2271279753.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/i3/2271279753/O1CN01sVPvin2LuvYVyTmo0_!!2271279753.jpg_430x430q90.jpg"
					],
					[
						"https://img.alicdn.com/imgextra/i2/2200590357415/O1CN014zLBa824e7SAX6HH3_!!2200590357415.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/i4/2200590357415/O1CN01SVUi2424e7S69OQdj_!!2200590357415.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/i2/2200590357415/O1CN01VKHgdE24e7RxBH3Ot_!!2200590357415.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/i2/2200590357415/O1CN01dBA7jD24e7S2vxf3c_!!2200590357415.jpg_430x430q90.jpg"
					],
					[
						"https://gd1.alicdn.com/imgextra/i1/2528567960/O1CN01fHoZ1P28fjM59akcJ_!!2528567960.jpg_400x400.jpg",
						"https://gd3.alicdn.com/imgextra/i3/2528567960/O1CN01VlINBE28fjM3nj8Rx_!!2528567960.jpg_400x400.jpg",
						"https://gd4.alicdn.com/imgextra/i4/2528567960/O1CN013ELQZ928fjMBcSvss_!!2528567960.jpg_400x400.jpg",
						"https://gd3.alicdn.com/imgextra/i2/2528567960/O1CN01y7gJBu28fjRGW2yUX_!!2528567960.jpg",
					],
					[
						"https://gd2.alicdn.com/imgextra/i2/2711674509/O1CN017GepK71jBASMOkHmG_!!2711674509.png_400x400.jpg",
						"https://gd2.alicdn.com/imgextra/i2/2711674509/O1CN01ziyxet1jBARyebn6q_!!2711674509.jpg_400x400.jpg",
						"https://gd4.alicdn.com/imgextra/i4/2711674509/O1CN01cMJaLQ1jBARmKa9ow_!!2711674509.jpg_400x400.jpg",
						"https://gd4.alicdn.com/imgextra/i4/2711674509/O1CN01L8k7T31jBARqM688G_!!2711674509.jpg_400x400.jpg"
					],
					[
						"https://gd3.alicdn.com/imgextra/i3/2211420500945/O1CN01PMOWWm1Iqr2Bk88ws_!!2211420500945.jpg_400x400.jpg",
						"https://gd1.alicdn.com/imgextra/i1/2211420500945/O1CN01cPjP501Iqr2KCeuO3_!!2211420500945.jpg_400x400.jpg",
						"https://gd4.alicdn.com/imgextra/i4/2211420500945/O1CN01O8KX6C1Iqr2IF2hbj_!!2211420500945.jpg_400x400.jpg",
						"https://gd2.alicdn.com/imgextra/i2/2211420500945/O1CN01Zhgj361Iqr2Hyh2KT_!!2211420500945.jpg_400x400.jpg"
					],
					[
						"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/3499860862/O1CN01WfbvEW1IEq4YMSfqT_!!3499860862.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/3499860862/O1CN01vjKkOX1IEq4btRLVa_!!3499860862.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/3499860862/O1CN01OEgJi21IEq4dxNcSa_!!3499860862.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/3499860862/O1CN01rNjmWB1IEq4VL1dCU_!!3499860862.jpg_430x430q90.jpg"
					],
					[
						"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/3499860862/O1CN01bM3VhA1IEq4BWY1Se_!!3499860862.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/3499860862/O1CN01nVbyaO1IEq4HDk4qH_!!3499860862.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3499860862/O1CN01rjTRMN1IEq4FhxA5D_!!3499860862.jpg_430x430q90.jpg",
						"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/3499860862/O1CN01wCw7ZR1IEq4HjvBKY_!!3499860862.jpg_430x430q90.jpg"
					]
				]
			}]
		})
		fn(res);
	}
}
module.exports = {
	ajax: ajax
}
