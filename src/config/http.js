import axios from "axios";
import Vue from "vue";
import whiteList from "./whiteList.js";
import router from "../router/index.js";
import store from "@/src/store/index.js";

const _this = Vue.prototype;

// 创建请求实例
const req = axios.create({
	baseURL: process.env.NODE_ENV === "development" ? "/" : process.env.HOST,
	// timeout: 60000 * 5000,
	timeout: 30000,
	headers: {"X-Requested-With": "XMLHttpRequest"}
});



req.interceptors.request.use((req) => {
	if (!whiteList.includes(req.url)) {
		req.headers["Authorization"] = Vue.prototype.$utils.getCookie("Authorization");
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
	if (err.response.status === 401 || err.response === 403) {
		window.location.href = window.location.origin + "/login";
	}
	return Promise.reject(err);
});

Vue.prototype.$http = req;

export default req;
