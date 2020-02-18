import axios from "axios";
import Vue from "vue";

// 创建请求实例
const req = axios.create({
	baseURL: process.env.NODE_ENV === "development" ? "/" : process.env.HOST,
	timeout: 20000,
	headers: {"X-Requested-With": "XMLHttpRequest"}
});



req.interceptors.request.use((req) => {
	if (false) {
		req.headers["Authorization"] = Vue.prototype.$utils.getToken();
	}

	if (req.reqType === "formData") {
		req.headers["Content-Type"] = "multipart/form-data";
	}
	return req;
}, (err) => {

	return Promise.reject(err);
});

req.interceptors.response.use((res) => {
	return res.data;

}, (err) => {

	return Promise.reject(err);
});

Vue.prototype.$http = req;

export default req;
