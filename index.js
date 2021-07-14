function day2Date(days){
	let result
	if(days){
	   	result = new Date()
	    result.setTime(result.getTime() + days*24*60*60*1000)	
	}
	return result
}

module.exports = {
	setCookie: function({key, value, days, path = '/', domain}) {
		if(key) throw 'The key must not be none!'
		if(value) console.warn('The cookies value is none!')
		let expires = day2Date(days)
	    let cookie = key + "="+ escape (value) + ";path="+path
	    if(expires) cookie += ';expires=' + expires.toGMTString()
	    if(domain) cookie += ';domain=' + domain
	    console.log('setCookie------->',cookie)
	    document.cookie = cookie
    },
	getCookie: function(name) {
		var arr
		if(name){
	    	arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"))
		}
	    if (arr.length) {
	    	return unescape(arr[2])
	    }
	    return null
	},
	delCookie: function (name) {
	    let exp = new Date();
	    exp.setTime(exp.getTime() - 1);
	    var value = getCookie(name);
	    if (value != null) {
	        // 这里删除操作其实是将expires过期时间设置为当前时间，使cookie立即过期
	        document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
	    }
	}
}