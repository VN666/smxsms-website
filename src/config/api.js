import Vue from "vue";

//const baseUrl = "https://shamiao.xyz/";
const baseUrl = "https://192.168.0.103:7777/"

const api = {
	/** 新闻动态-新闻快讯 */
	news_campus_add: "/api/news/campus/add",
	news_campus_query: "/api/news/campus/query",
	news_campus_changeIsTop: "/api/news/campus/changeIsTop",
	news_campus_del: "/api/news/campus/del",
	news_campus_edit: "/api/news/campus/edit",
	news_campus_queryById: "/api/news/campus/queryById",
	news_campus_queryList: "/api/news/campus/queryList",



	/** 背景封面 */
	bg_imgs_add: "/api/bg/add",
	bg_imgs_query: "/api/bg/query",
	bg_imgs_getTotal: "/api/bg/getTotal",
	bg_imgs_del: "/api/bg/del",
	bg_imgs_move: "/api/bg/move",

	/** 上传/删除 */
	imgs_upload: "/api/upload/imgs",
	files_upload: "/api/upload/files",
	imgs_delete: "/api/upload/delete_img",
	media_upload: "/api/upload/media",
	files_delete: "/api/upload/delete_file",



	/** 二中概况-学校简介 */
	about_profile_queryById: "/api/about/profile/queryById",
	about_profile_edit: "/api/about/profile/edit",
	/** 二中概况-二中校史 */
	about_concept_queryById: "/api/about/concept/queryById",
	about_concept_edit: "/api/about/concept/edit",
	/** 二中概况-校长寄语 */
	about_proverb_queryById: "/api/about/proverb/queryById",
	about_proverb_edit: "/api/about/proverb/edit",
	/** 二中概况-领导风采 */
	about_leader_queryById: "/api/about/leader/queryById",
	about_leader_edit: "/api/about/leader/edit",
	about_leader_add: "/api/about/leader/add",
	about_leader_query: "/api/about/leader/query",
	about_leader_del: "/api/about/leader/del",
	about_leader_move: "/api/about/leader/move",
	about_leader_queryList: "/api/about/leader/queryList",
	/** 二中概况-学校荣誉 */
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



	/** 二中团建 */
	group_ccyl_add: "/api/group/ccyl/add",
	group_ccyl_query: "/api/group/ccyl/query",
	group_ccyl_changeIsTop: "/api/group/ccyl/changeIsTop",
	group_ccyl_del: "/api/group/ccyl/del",
	group_ccyl_queryById: "/api/group/ccyl/queryById",
	group_ccyl_edit: "/api/group/ccyl/edit",
	group_ccyl_queryList: "/api/group/ccyl/queryList",



	/** 职工之家 */
	union_staff_add: "/api/union/staff/add",
	union_staff_query: "/api/union/staff/query",
	union_staff_changeIsTop: "/api/union/staff/changeIsTop",
	union_staff_del: "/api/union/staff/del",
	union_staff_queryById: "/api/union/staff/queryById",
	union_staff_edit: "/api/union/staff/edit",
	union_staff_queryList: "/api/union/staff/queryList",




	/** 二中安法 */
	law_safe_add: "/api/law/safe/add",
	law_safe_query: "/api/law/safe/query",
	law_safe_changeIsTop: "/api/law/safe/changeIsTop",
	law_safe_del: "/api/law/safe/del",
	law_safe_queryById: "/api/law/safe/queryById",
	law_safe_edit: "/api/law/safe/edit",
	law_safe_queryList: "/api/law/safe/queryList",


	/** 学生天地-班级活动 */
	student_activity_add: "/api/student/activity/add",
	student_activity_query: "/api/student/activity/query",
	student_activity_changeIsTop: "/api/student/activity/changeIsTop",
	student_activity_del: "/api/student/activity/del",
	student_activity_queryById: "/api/student/activity/queryById",
	student_activity_edit: "/api/student/activity/edit",
	student_activity_queryList: "/api/student/activity/queryList",
	/** 学生天地-荣誉表彰 */
	student_prize_add: "/api/student/prize/add",
	student_prize_query: "/api/student/prize/query",
	student_prize_changeIsTop: "/api/student/prize/changeIsTop",
	student_prize_del: "/api/student/prize/del",
	student_prize_queryById: "/api/student/prize/queryById",
	student_prize_edit: "/api/student/prize/edit",
	student_prize_queryList: "/api/student/prize/queryList",
	/** 学生天地-纪律卫生 */
	student_flag_add: "/api/student/flag/add",
	student_flag_query: "/api/student/flag/query",
	student_flag_changeIsTop: "/api/student/flag/changeIsTop",
	student_flag_del: "/api/student/flag/del",
	student_flag_queryById: "/api/student/flag/queryById",
	student_flag_edit: "/api/student/flag/edit",
	student_flag_queryList: "/api/student/flag/queryList",
	/** 学生天地-学生作品 */
	student_exhibition_add: "/api/student/exhibition/add",
	student_exhibition_query: "/api/student/exhibition/query",
	student_exhibition_changeIsTop: "/api/student/exhibition/changeIsTop",
	student_exhibition_del: "/api/student/exhibition/del",
	student_exhibition_queryById: "/api/student/exhibition/queryById",
	student_exhibition_edit: "/api/student/exhibition/edit",
	student_exhibition_queryList: "/api/student/exhibition/queryList",
	/** 学生天地-毕业留念 */
	student_graduation_add: "/api/student/graduation/add",
	student_graduation_query: "/api/student/graduation/query",
	student_graduation_changeIsTop: "/api/student/graduation/changeIsTop",
	student_graduation_del: "/api/student/graduation/del",
	student_graduation_queryById: "/api/student/graduation/queryById",
	student_graduation_edit: "/api/student/graduation/edit",
	student_graduation_queryList: "/api/student/graduation/queryList",
	/** 家长学校-活动掠影 */
	parent_pratice_add: "/api/parent/pratice/add",
	parent_pratice_query: "/api/parent/pratice/query",
	parent_pratice_changeIsTop: "/api/parent/pratice/changeIsTop",
	parent_pratice_del: "/api/parent/pratice/del",
	parent_pratice_queryById: "/api/parent/pratice/queryById",
	parent_pratice_edit: "/api/parent/pratice/edit",
	parent_pratice_queryList: "/api/parent/pratice/queryList",
	/** 家长学校-家教知识 */
	parent_knowledge_add: "/api/parent/knowledge/add",
	parent_knowledge_query: "/api/parent/knowledge/query",
	parent_knowledge_changeIsTop: "/api/parent/knowledge/changeIsTop",
	parent_knowledge_del: "/api/parent/knowledge/del",
	parent_knowledge_queryById: "/api/parent/knowledge/queryById",
	parent_knowledge_edit: "/api/parent/knowledge/edit",
	parent_knowledge_queryList: "/api/parent/knowledge/queryList",
	/** 家长学校-学校沟通 */
	parent_communication_add: "/api/parent/communication/add",
	parent_communication_query: "/api/parent/communication/query",
	parent_communication_changeIsTop: "/api/parent/communication/changeIsTop",
	parent_communication_del: "/api/parent/communication/del",
	parent_communication_queryById: "/api/parent/communication/queryById",
	parent_communication_edit: "/api/parent/communication/edit",
	parent_communication_queryList: "/api/parent/communication/queryList",
	/** 幸福教育-幸福理念 */
	happy_idea_add: "/api/happy/idea/add",
	happy_idea_query: "/api/happy/idea/query",
	happy_idea_changeIsTop: "/api/happy/idea/changeIsTop",
	happy_idea_del: "/api/happy/idea/del",
	happy_idea_queryById: "/api/happy/idea/queryById",
	happy_idea_edit: "/api/happy/idea/edit",
	happy_idea_queryList: "/api/happy/idea/queryList",
	/** 幸福教育-幸福感言 */
	happy_speech_add: "/api/happy/speech/add",
	happy_speech_query: "/api/happy/speech/query",
	happy_speech_changeIsTop: "/api/happy/speech/changeIsTop",
	happy_speech_del: "/api/happy/speech/del",
	happy_speech_queryById: "/api/happy/speech/queryById",
	happy_speech_edit: "/api/happy/speech/edit",
	happy_speech_queryList: "/api/happy/speech/queryList",
	/** 幸福教育-幸福教育活动 */
	happy_exercise_add: "/api/happy/exercise/add",
	happy_exercise_query: "/api/happy/exercise/query",
	happy_exercise_changeIsTop: "/api/happy/exercise/changeIsTop",
	happy_exercise_del: "/api/happy/exercise/del",
	happy_exercise_queryById: "/api/happy/exercise/queryById",
	happy_exercise_edit: "/api/happy/exercise/edit",
	happy_exercise_queryList: "/api/happy/exercise/queryList",


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

	/** 新闻动态-通知公告 */
	news_notice_add: "/api/news/notice/add",
	news_notice_query: "/api/news/notice/query",
	news_notice_changeIsTop: "/api/news/notice/changeIsTop",
	news_notice_del: "/api/news/notice/del",
	news_notice_queryById: "/api/news/notice/queryById",
	news_notice_edit: "/api/news/notice/edit",
	news_notice_queryList: "/api/news/notice/queryList",
	/** 新闻动态-媒体报道 */
	news_media_add: "/api/news/media/add",
	news_media_query: "/api/news/media/query",
	news_media_changeIsTop: "/api/news/media/changeIsTop",
	news_media_edit: "/api/news/media/edit",
	news_media_queryById: "/api/news/media/queryById",
	news_media_del: "/api/news/media/del",
	news_media_queryList: "/api/news/media/queryList",
	/** 新闻动态-招生信息 */
	news_enroll_add: "/api/news/enroll/add",
	news_enroll_query: "/api/news/enroll/query",
	news_enroll_changeIsTop: "/api/news/enroll/changeIsTop",
	news_enroll_del: "/api/news/enroll/del",
	news_enroll_queryById: "/api/news/enroll/queryById",
	news_enroll_edit: "/api/news/enroll/edit",
	news_enroll_queryList: "/api/news/enroll/queryList",
	/** 联系我们 */
	news_contact_query: "/api/contact/query",
	news_contact_update: "/api/contact/update"

};

Vue.prototype.$api = api;

export default api;
