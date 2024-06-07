 const Fly = require("@/utils/fly.js");
const fly=new Fly(); //创建fly实例

console.log(fly)
/**
 * 在fly.config中配置的baseURL会应用到所有的http请求
 * 当在请求拦截器中设置request.baseURL之后，会覆盖fly.config中的域名
 * fly中添加的baseURL用来做通用的请求，拦截器中的baseURL通常做一些第三方请求处理
 */
fly.config.baseURL = 'https://way.jd.com'
//添加请求拦截器
fly.interceptors.request.use((request)=>{
	// 请求的配置
	// body自动将参数拼接到了get请求的后面
	/**
	 * get请求的参数拼接在URL后面，叫做查询字符串
	 * post请求，参数可以放在URL后面，也可以放在body中
	 */
    return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
		console.info('**************success****************')
		console.log(response)
        return response.data
    },
    (err) => {
		console.error('**************error****************')
		console.log(err)
		// 10x 发送请求，还未得到回应
		// 20x 请求成功 200 201
		// 30x 请求被重定向
		
		
		// 当发生40x错误的时候，找找自己的原因
		// 当发生50x错误的时候，直接丢给服务端
        //发生网络错误后会走到这里
		// 404 请求不存在
		// 401 身份验证失败
		// 400 请求参数错误
		
		// 500 服务器错误，没有返回内容
        //return Promise.resolve("ssss")
    }
)
	
module.exports = {
	fly
}