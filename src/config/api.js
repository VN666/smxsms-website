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
	/** 上传/删除 */
	imgs_upload: "api/upload/imgs",
	files_upload: "api/upload/files",
	imgs_delete: "api/upload/deleteImg",
	/** 新闻动态-通知公告 */
	news_notice_add: "api/news/notice/add",
	news_notice_query: "api/news/notice/query",
	news_notice_changeIsTop: "api/news/notice/changeIsTop",
	news_notice_del: "api/news/notice/del",
	news_notice_queryById: "api/news/notice/queryById",
	news_notice_edit: "api/news/notice/edit",
	news_notice_queryList: "api/news/notice/queryList",
	/** 新闻动态-媒体报道 */
	news_media_add: "api/news/media/add",
	news_media_query: "api/news/media/query",
	news_media_changeIsTop: "api/news/media/changeIsTop",
	news_media_edit: "api/news/media/edit",
	news_media_queryById: "api/news/media/queryById",
	news_media_del: "api/news/media/del",
	news_media_queryList: "api/news/media/queryList",
	/** 新闻动态-招生信息 */
	news_enroll_add: "api/news/enroll/add",
	news_enroll_query: "api/news/enroll/query",
	news_enroll_changeIsTop: "api/news/enroll/changeIsTop",
	news_enroll_del: "api/news/enroll/del",
	news_enroll_queryById: "api/news/enroll/queryById",
	news_enroll_edit: "api/news/enroll/edit",
	news_enroll_queryList: "api/news/enroll/queryList",
	/** 联系我们 */
	news_contact_query: "api/contact/query",
	news_contact_update: "api/contact/update",
	/** 关于二中-新闻动态 */
	about_profile_queryById: "api/about/profile/queryById",
	about_profile_edit: "api/about/profile/edit",
	/** 关于二中-内部机构 */
	about_organization_queryById: "api/about/organization/queryById",
	about_organization_edit: "api/about/organization/edit",
	/** 关于二中-师资概况 */
	about_team_queryById: "api/about/team/queryById",
	about_team_edit: "api/about/team/edit",
	/** 关于二中-二中校史 */
	about_history_queryById: "api/about/history/queryById",
	about_history_edit: "api/about/history/edit",
	/** 关于二中-校长寄语 */
	about_proverb_queryById: "api/about/proverb/queryById",
	about_proverb_edit: "api/about/proverb/edit",
	/** 关于二中-学校领导 */
	about_leader_queryById: "api/about/leader/queryById",
	about_leader_edit: "api/about/leader/edit",
	about_leader_add: "api/about/leader/add",
	about_leader_query: "api/about/leader/query",
	about_leader_del: "api/about/leader/del",
	about_leader_move: "api/about/leader/move",
	about_leader_queryList: "api/about/leader/queryList",
	/** 关于二中-名师风采 */
	about_outstanding_queryById: "api/about/outstanding/queryById",
	about_outstanding_edit: "api/about/outstanding/edit",
	about_outstanding_add: "api/about/outstanding/add",
	about_outstanding_query: "api/about/outstanding/query",
	about_outstanding_del: "api/about/outstanding/del",
	about_outstanding_move: "api/about/outstanding/move",
	about_outstanding_queryList: "api/about/outstanding/queryList",
	/** 关于二中-学校荣誉 */
	about_honor_add: "api/about/honor/add",
	about_honor_query: "api/about/honor/query",
	about_honor_changeIsTop: "api/about/honor/changeIsTop",
	about_honor_del: "api/about/honor/del",
	about_honor_edit: "api/about/honor/edit",
	about_honor_queryById: "api/about/honor/queryById",
	about_honor_queryList: "api/about/honor/queryList",
	/** 关于二中-校园风貌 */
	about_landscape_upload: "api/about/landscape/upload",
	about_landscape_query: "api/about/landscape/query",
	about_landscape_getTotal: "api/about/landscape/getTotal",
	about_landscape_del: "api/about/landscape/del",
	about_landscape_move: "api/about/landscape/move",
	about_landscape_edit: "api/about/landscape/edit",
	about_landscape_queryById: "api/about/landscape/queryById",
	/** 党团工会-党建动态 */
	group_party_add: "api/group/party/add",
	group_party_query: "api/group/party/query",
	group_party_changeIsTop: "api/group/party/changeIsTop",
	group_party_del: "api/group/party/del",
	group_party_queryById: "api/group/party/queryById",
	group_party_edit: "api/group/party/edit",
	group_party_queryList: "api/group/party/queryList",
	/** 党团工会-团建工作 */
	group_ccyl_add: "api/group/ccyl/add",
	group_ccyl_query: "api/group/ccyl/query",
	group_ccyl_changeIsTop: "api/group/ccyl/changeIsTop",
	group_ccyl_del: "api/group/ccyl/del",
	group_ccyl_queryById: "api/group/ccyl/queryById",
	group_ccyl_edit: "api/group/ccyl/edit",
	group_ccyl_queryList: "api/group/ccyl/queryList",
	/** 党团工会-工会活动 */
	group_union_add: "api/group/union/add",
	group_union_query: "api/group/union/query",
	group_union_changeIsTop: "api/group/union/changeIsTop",
	group_union_del: "api/group/union/del",
	group_union_queryById: "api/group/union/queryById",
	group_union_edit: "api/group/union/edit",
	group_union_queryList: "api/group/union/queryList",
	/** 党团工会-创优争先 */
	group_excellent_add: "api/group/excellent/add",
	group_excellent_query: "api/group/excellent/query",
	group_excellent_changeIsTop: "api/group/excellent/changeIsTop",
	group_excellent_del: "api/group/excellent/del",
	group_excellent_queryById: "api/group/excellent/queryById",
	group_excellent_edit: "api/group/excellent/edit",
	group_excellent_queryList: "api/group/excellent/queryList",

};

const url = Object.keys(api);

for (let key of url) {
	api[key] = baseUrl + api[key];
};

Vue.prototype.$api = api;

export default api;
