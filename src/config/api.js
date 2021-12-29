import Vue from "vue";

//const baseUrl = "https://shamiao.xyz/";
const baseUrl = "https://192.168.0.103:7777/"

const api = {

	/** 背景封面 */
	bg_imgs_add: "/api/bg/add",
	bg_imgs_query: "/api/bg/query",
	bg_imgs_query2: "/api/bg/query2",
	bg_imgs_getTotal: "/api/bg/getTotal",
	bg_imgs_del: "/api/bg/del",
	bg_imgs_move: "/api/bg/move",

	/** 上传/删除 */
	imgs_upload: "/api/upload/imgs",
	files_upload: "/api/upload/files",
	imgs_delete: "/api/upload/delete_img",
	media_upload: "/api/upload/media",
	files_delete: "/api/upload/delete_file",

	/** 学校概况-学校简介 */
	about_profile_queryById: "/api/about/profile/queryById",
	about_profile_edit: "/api/about/profile/edit",
	/** 学校概况-二中校史 */
	about_concept_queryById: "/api/about/concept/queryById",
	about_concept_edit: "/api/about/concept/edit",
	/** 学校概况-校长寄语 */
	about_proverb_queryById: "/api/about/proverb/queryById",
	about_proverb_edit: "/api/about/proverb/edit",
	/** 学校概况-领导风采 */
	about_leader_queryById: "/api/about/leader/queryById",
	about_leader_edit: "/api/about/leader/edit",
	about_leader_add: "/api/about/leader/add",
	about_leader_query: "/api/about/leader/query",
	about_leader_del: "/api/about/leader/del",
	about_leader_move: "/api/about/leader/move",
	about_leader_queryList: "/api/about/leader/queryList",
	/** 学校概况-学校荣誉 */
	about_honor_add: "/api/about/honor/add",
	about_honor_query: "/api/about/honor/query",
	about_honor_changeIsTop: "/api/about/honor/changeIsTop",
	about_honor_del: "/api/about/honor/del",
	about_honor_edit: "/api/about/honor/edit",
	about_honor_queryById: "/api/about/honor/queryById",
	about_honor_queryList: "/api/about/honor/queryList",

	/** 教学动态 */
	education_research_add: "/api/education/research/add",
	education_research_query: "/api/education/research/query",
	education_research_changeIsTop: "/api/education/research/changeIsTop",
	education_research_del: "/api/education/research/del",
	education_research_queryById: "/api/education/research/queryById",
	education_research_edit: "/api/education/research/edit",
	education_research_queryList: "/api/education/research/queryList",

	/** 德育教育-德育规划 */
	activity_planning_add: "/api/activity/planning/add",
	activity_planning_query: "/api/activity/planning/query",
	activity_planning_changeIsTop: "/api/activity/planning/changeIsTop",
	activity_planning_del: "/api/activity/planning/del",
	activity_planning_queryById: "/api/activity/planning/queryById",
	activity_planning_edit: "/api/activity/planning/edit",
	activity_planning_queryList: "/api/activity/planning/queryList",
	/** 德育教育-德育标兵 */
	activity_pacesetter_queryById: "/api/activity/pacesetter/queryById",
	activity_pacesetter_edit: "/api/activity/pacesetter/edit",
	activity_pacesetter_add: "/api/activity/pacesetter/add",
	activity_pacesetter_query: "/api/activity/pacesetter/query",
	activity_pacesetter_del: "/api/activity/pacesetter/del",
	activity_pacesetter_move: "/api/activity/pacesetter/move",
	activity_pacesetter_queryList: "/api/activity/pacesetter/queryList",
	/** 德育教育-健康教育 */
	activity_health_add: "/api/activity/health/add",
	activity_health_query: "/api/activity/health/query",
	activity_health_changeIsTop: "/api/activity/health/changeIsTop",
	activity_health_del: "/api/activity/health/del",
	activity_health_queryById: "/api/activity/health/queryById",
	activity_health_edit: "/api/activity/health/edit",
	activity_health_queryList: "/api/activity/health/queryList",
	/** 德育教育-班级文化 */
	activity_culture_add: "/api/activity/culture/add",
	activity_culture_query: "/api/activity/culture/query",
	activity_culture_changeIsTop: "/api/activity/culture/changeIsTop",
	activity_culture_del: "/api/activity/culture/del",
	activity_culture_queryById: "/api/activity/culture/queryById",
	activity_culture_edit: "/api/activity/culture/edit",
	activity_culture_queryList: "/api/activity/culture/queryList",
	/** 德育教育-班主任专栏 */
	activity_teacher_add: "/api/activity/teacher/add",
	activity_teacher_query: "/api/activity/teacher/query",
	activity_teacher_changeIsTop: "/api/activity/teacher/changeIsTop",
	activity_teacher_del: "/api/activity/teacher/del",
	activity_teacher_queryById: "/api/activity/teacher/queryById",
	activity_teacher_edit: "/api/activity/teacher/edit",
	activity_teacher_queryList: "/api/activity/teacher/queryList",
	/** 德育教育-体艺活动 */
	activity_gym_add: "/api/activity/gym/add",
	activity_gym_query: "/api/activity/gym/query",
	activity_gym_changeIsTop: "/api/activity/gym/changeIsTop",
	activity_gym_del: "/api/activity/gym/del",
	activity_gym_queryById: "/api/activity/gym/queryById",
	activity_gym_edit: "/api/activity/gym/edit",
	activity_gym_queryList: "/api/activity/gym/queryList",

	/** 校本研修 */
	training_study_add: "/api/training/study/add",
	training_study_query: "/api/training/study/query",
	training_study_changeIsTop: "/api/training/study/changeIsTop",
	training_study_del: "/api/training/study/del",
	training_study_queryById: "/api/training/study/queryById",
	training_study_edit: "/api/training/study/edit",
	training_study_queryList: "/api/training/study/queryList",

	/** 为您服务-后勤保障 */
	service_guarantee_add: "/api/service/guarantee/add",
	service_guarantee_query: "/api/service/guarantee/query",
	service_guarantee_changeIsTop: "/api/service/guarantee/changeIsTop",
	service_guarantee_del: "/api/service/guarantee/del",
	service_guarantee_queryById: "/api/service/guarantee/queryById",
	service_guarantee_edit: "/api/service/guarantee/edit",
	service_guarantee_queryList: "/api/service/guarantee/queryList",
	/** 为您服务-电教知识 */
	service_computer_add: "/api/service/computer/add",
	service_computer_query: "/api/service/computer/query",
	service_computer_changeIsTop: "/api/service/computer/changeIsTop",
	service_computer_del: "/api/service/computer/del",
	service_computer_queryById: "/api/service/computer/queryById",
	service_computer_edit: "/api/service/computer/edit",
	service_computer_queryList: "/api/service/computer/queryList",

	/** 团建活动 */
	group_ccyl_add: "/api/group/ccyl/add",
	group_ccyl_query: "/api/group/ccyl/query",
	group_ccyl_changeIsTop: "/api/group/ccyl/changeIsTop",
	group_ccyl_del: "/api/group/ccyl/del",
	group_ccyl_queryById: "/api/group/ccyl/queryById",
	group_ccyl_edit: "/api/group/ccyl/edit",
	group_ccyl_queryList: "/api/group/ccyl/queryList",

	/** 学校党建-理论学习 */
	party_all: "/api/party/all/queryList",
	party_theory_add: "/api/party/theory/add",
	party_theory_query: "/api/party/theory/query",
	party_theory_changeIsTop: "/api/party/theory/changeIsTop",
	party_theory_del: "/api/party/theory/del",
	party_theory_queryById: "/api/party/theory/queryById",
	party_theory_edit: "/api/party/theory/edit",
	party_theory_queryList: "/api/party/theory/queryList",
	/** 学校党建-组织建设 */
	party_construct_add: "/api/party/construct/add",
	party_construct_query: "/api/party/construct/query",
	party_construct_changeIsTop: "/api/party/construct/changeIsTop",
	party_construct_del: "/api/party/construct/del",
	party_construct_queryById: "/api/party/construct/queryById",
	party_construct_edit: "/api/party/construct/edit",
	party_construct_queryList: "/api/party/construct/queryList",
	/** 学校党建-组织生活 */
	party_life_add: "/api/party/life/add",
	party_life_query: "/api/party/life/query",
	party_life_changeIsTop: "/api/party/life/changeIsTop",
	party_life_del: "/api/party/life/del",
	party_life_queryById: "/api/party/life/queryById",
	party_life_edit: "/api/party/life/edit",
	party_life_queryList: "/api/party/life/queryList",
	/** 学校党建-制度建设 */
	party_institution_add: "/api/party/institution/add",
	party_institution_query: "/api/party/institution/query",
	party_institution_changeIsTop: "/api/party/institution/changeIsTop",
	party_institution_del: "/api/party/institution/del",
	party_institution_queryById: "/api/party/institution/queryById",
	party_institution_edit: "/api/party/institution/edit",
	party_institution_queryList: "/api/party/institution/queryList",
	/** 学校党建-台账管理 */
	party_book_add: "/api/party/book/add",
	party_book_query: "/api/party/book/query",
	party_book_changeIsTop: "/api/party/book/changeIsTop",
	party_book_del: "/api/party/book/del",
	party_book_queryById: "/api/party/book/queryById",
	party_book_edit: "/api/party/book/edit",
	party_book_queryList: "/api/party/book/queryList",
	/** 学校党建-活动项目 */
	party_project_add: "/api/party/project/add",
	party_project_query: "/api/party/project/query",
	party_project_changeIsTop: "/api/party/project/changeIsTop",
	party_project_del: "/api/party/project/del",
	party_project_queryById: "/api/party/project/queryById",
	party_project_edit: "/api/party/project/edit",
	party_project_queryList: "/api/party/project/queryList",
	/** 学校党建-阵地建设 */
	party_position_add: "/api/party/position/add",
	party_position_query: "/api/party/position/query",
	party_position_changeIsTop: "/api/party/position/changeIsTop",
	party_position_del: "/api/party/position/del",
	party_position_queryById: "/api/party/position/queryById",
	party_position_edit: "/api/party/position/edit",
	party_position_queryList: "/api/party/position/queryList",

	/** 职工之家 */
	union_staff_add: "/api/union/staff/add",
	union_staff_query: "/api/union/staff/query",
	union_staff_changeIsTop: "/api/union/staff/changeIsTop",
	union_staff_del: "/api/union/staff/del",
	union_staff_queryById: "/api/union/staff/queryById",
	union_staff_edit: "/api/union/staff/edit",
	union_staff_queryList: "/api/union/staff/queryList",

	/** 学校党建-创建会议 */
	establish_all: "/api/establish/all/queryList",
	establish_meeting_add: "/api/establish/meeting/add",
	establish_meeting_query: "/api/establish/meeting/query",
	establish_meeting_changeIsTop: "/api/establish/meeting/changeIsTop",
	establish_meeting_del: "/api/establish/meeting/del",
	establish_meeting_queryById: "/api/establish/meeting/queryById",
	establish_meeting_edit: "/api/establish/meeting/edit",
	establish_meeting_queryList: "/api/establish/meeting/queryList",
	/** 学校党建-学习大讲堂 */
	establish_classroom_add: "/api/establish/classroom/add",
	establish_classroom_query: "/api/establish/classroom/query",
	establish_classroom_changeIsTop: "/api/establish/classroom/changeIsTop",
	establish_classroom_del: "/api/establish/classroom/del",
	establish_classroom_queryById: "/api/establish/classroom/queryById",
	establish_classroom_edit: "/api/establish/classroom/edit",
	establish_classroom_queryList: "/api/establish/classroom/queryList",
	/** 学校党建-志愿者风采 */
	establish_volunteer_add: "/api/establish/volunteer/add",
	establish_volunteer_query: "/api/establish/volunteer/query",
	establish_volunteer_changeIsTop: "/api/establish/volunteer/changeIsTop",
	establish_volunteer_del: "/api/establish/volunteer/del",
	establish_volunteer_queryById: "/api/establish/volunteer/queryById",
	establish_volunteer_edit: "/api/establish/volunteer/edit",
	establish_volunteer_queryList: "/api/establish/volunteer/queryList",
	/** 学校党建-结对帮扶 */
	establish_two_add: "/api/establish/two/add",
	establish_two_query: "/api/establish/two/query",
	establish_two_changeIsTop: "/api/establish/two/changeIsTop",
	establish_two_del: "/api/establish/two/del",
	establish_two_queryById: "/api/establish/two/queryById",
	establish_two_edit: "/api/establish/two/edit",
	establish_two_queryList: "/api/establish/two/queryList",
	/** 学校党建-新时代文明时间活动 */
	establish_practice_add: "/api/establish/practice/add",
	establish_practice_query: "/api/establish/practice/query",
	establish_practice_changeIsTop: "/api/establish/practice/changeIsTop",
	establish_practice_del: "/api/establish/practice/del",
	establish_practice_queryById: "/api/establish/practice/queryById",
	establish_practice_edit: "/api/establish/practice/edit",
	establish_practice_queryList: "/api/establish/practice/queryList",
	/** 学校党建-文明之声 */
	establish_voice_add: "/api/establish/voice/add",
	establish_voice_query: "/api/establish/voice/query",
	establish_voice_changeIsTop: "/api/establish/voice/changeIsTop",
	establish_voice_del: "/api/establish/voice/del",
	establish_voice_queryById: "/api/establish/voice/queryById",
	establish_voice_edit: "/api/establish/voice/edit",
	establish_voice_queryList: "/api/establish/voice/queryList",

	/** 平安校园 */
	law_safe_add: "/api/law/safe/add",
	law_safe_query: "/api/law/safe/query",
	law_safe_changeIsTop: "/api/law/safe/changeIsTop",
	law_safe_del: "/api/law/safe/del",
	law_safe_queryById: "/api/law/safe/queryById",
	law_safe_edit: "/api/law/safe/edit",
	law_safe_queryList: "/api/law/safe/queryList",


	/** 登录相关 */
	login_ip_check: "/api/login/ipCheck",
	login_get_slideCode: "/api/login/getSlideCode",
	login_get_token: "/api/login/getToken",
	login: "/api/login/login",
	login_tool: "/api/login/loginTest",
	/** 用户信息 */
	user_get_userinfo: "/api/user/getUserInfo",

	download: "/api/download",

	/** 网站管理-部门管理 */
	system_department_query: "/api/system/department/query",
	system_department_queryById: "/api/system/department/queryById",
	system_department_add: "/api/system/department/add",
	system_department_edit: "/api/system/department/edit",
	system_department_del: "/api/system/department/del",
	system_department_isOne: "/api/system/department/isOne",

	/** 网站管理-账号管理 */
	system_account_query: "/api/system/account/query",
	system_account_queryById: "/api/system/account/queryById",
	system_account_add: "/api/system/account/add",
	system_account_edit: "/api/system/account/edit",
	system_account_del: "/api/system/account/del",
	system_account_isOne: "/api/system/account/isOne",
	system_account_userData: "/api/system/account/getAccountData",

	/** 网站管理-操作日志 */
	system_log_query: "/api/system/log/query",
	system_log_export: "/api/system/log/export",

	/** 联系我们 */
	news_contact_query: "/api/contact/query",
	news_contact_update: "/api/contact/update"

};

Vue.prototype.$api = api;

export default api;
