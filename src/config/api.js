import Vue from "vue";

//const baseUrl = "https://shamiao.xyz/";
const baseUrl = "https://192.168.0.103:1314/"

const api = {
	news_campus_add: "api/news/campus/add",
	news_campus_query: "api/news/campus/query",
	imgs_upload: "api/imgs/upload"
};

const url = Object.keys(api);

for (let key of url) {
	api[key] = baseUrl + api[key];
};

Vue.prototype.$api = api;

export default api;
