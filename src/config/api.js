import Vue from "vue";

//const baseUrl = "https://shamiao.xyz/";
const baseUrl = "https://192.168.0.103:7777/"

const api = {
	/** 新闻动态-新闻快讯 */
	news_campus_add: "api/news/campus/add",
	news_campus_query: "api/news/campus/query",
	news_campus_changeIsTop: "api/news/campus/changeIsTop",
	news_campus_del: "api/news/campus/del",
	news_campus_edit: "api/news/campus/edit",
	news_campus_queryById: "api/news/campus/queryById",
	news_campus_queryList: "api/news/campus/queryList",
	/** 背景封面 */
	bg_imgs_upload: "api/bg/upload",
	bg_imgs_query: "api/bg/query",
	bg_imgs_getTotal: "api/bg/getTotal",
	bg_imgs_del: "api/bg/del",
	bg_imgs_move: "api/bg/move",
	/** 上传 */
	imgs_upload: "api/upload/imgs",
	files_upload: "api/upload/files",
	/** 新闻动态-通知公告 */
	news_notice_add: "api/news/notice/add",
	news_notice_query: "api/news/notice/query",
	news_notice_changeIsTop: "api/news/notice/changeIsTop",
	news_notice_del: "api/news/notice/del",
	news_notice_queryById: "api/news/notice/queryById",
	news_notice_edit: "api/news/notice/edit",
	news_notice_queryList: "api/news/notice/queryList",
};

const url = Object.keys(api);

for (let key of url) {
	api[key] = baseUrl + api[key];
};

Vue.prototype.$api = api;

export default api;
