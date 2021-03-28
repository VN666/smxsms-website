import Vue from "Vue";

const _this = Vue.prototype;


export const menu = [
	{
		title: "返回门户",
		code: "home",
		icon: "el-icon-s-home",
		path: "/index"
	},
	{
		title: "背景封面",
		code: "admin_bg",
		path: "admin-bg",
		icon: "el-icon-picture-outline"
	},
	{
		title: "二中概况",
		code: "admin_about",
		path: "admin-about",
		icon: "el-icon-school",
		children: [
			{
				title: "领导风采",
				path: "leader-list",
				code: "admin_about_leader"
			},
			{
				title: "学校简介",
				path: "profile-content",
				code: "admin_about_profile"
			},
			{
				title: "办学理念",
				path: "concept-content",
				code: "admin_about_concept"
			},
			{
				title: "校长寄语",
				path: "proverb-content",
				code: "admin_about_proverb"
			},
			{
				title: "学校荣誉",
				path: "honor-list",
				code: "admin_about_honor"
			}
		]
	},
	{
		title: "教研动态",
		code: "admin_education",
		path: "admin-education",
		icon: "el-icon-data-analysis"
	},
	{
		title: "德育活动",
		code: "admin_activity",
		path: "admin-activity",
		icon: "el-icon-orange",
		children: [
			{
				title: "德育规划",
				path: "planning-list",
				code: "admin_activity_planning"
			},
			{
				title: "德育标兵",
				path: "pacesetter-list",
				code: "admin_activity_pacesetter"
			},
			{
				title: "健康教育",
				path: "health-list",
				code: "admin_activity_health"
			},
			{
				title: "班级文化",
				path: "culture-list",
				code: "admin_activity_culture"
			},
			{
				title: "班主任专栏",
				path: "teacher-list",
				code: "admin_activity_teacher"
			},
			{
				title: "体艺活动",
				path: "gym-list",
				code: "admin_activity_gym"
			}
		]
	},
	{
		title: "校本研修",
		code: "admin_training",
		path: "admin-training",
		icon: "el-icon-data-analysis"
	},
	{
		title: "为您服务",
		code: "admin_service",
		path: "admin-service",
		icon: "el-icon-help",
		children: [
			{
				title: "后勤保障",
				path: "guarantee-list",
				code: "admin_service_guarantee"
			},
			{
				title: "电教知识",
				path: "computer-list",
				code: "admin_service_computer"
			}
		]
	},
	{
		title: "新闻动态",
		code: "admin_news",
		icon: "el-icon-notebook-2",
		children: [
			{
				title: "新闻快讯",
				path: "campus-list",
				code: "admin_news_campus"
			},
			{
				title: "通知公告",
				path: "notice-list",
				code: "admin_news_notice"
			},
			{
				title: "媒体报道",
				path: "media-list",
				code: "admin_news_media"
			},
			{
				title: "招生信息",
				path: "enroll-list",
				code: "admin_news_enroll"
			}
		]
	},
	{
		title: "党团工会",
		code: "admin_group",
		path: "admin-group",
		icon: "el-icon-star-off",
		children: [
			{
				title: "党建动态",
				path: "party-list",
				code: "admin_group_party"
			},
			{
				title: "团建工作",
				path: "ccyl-list",
				code: "admin_group_ccyl"
			},
			{
				title: "工会活动",
				path: "union-list",
				code: "admin_group_union"
			},
			{
				title: "创先争优",
				path: "excellent-list",
				code: "admin_group_excellent"
			}
		]
	},
	{
		title: "学生天地",
		code: "admin_student",
		path: "admin-student",
		icon: "el-icon-basketball",
		children: [
			{
				title: "班级活动",
				path: "activity-list",
				code: "admin_student_activity"
			},
			{
				title: "荣誉表彰",
				path: "prize-list",
				code: "admin_student_prize"
			},
			{
				title: "纪律卫生",
				path: "flag-list",
				code: "admin_student_flag"
			},
			{
				title: "学生作品",
				path: "exhibition-list",
				code: "admin_student_exhibition"
			},
			{
				title: "毕业留念",
				path: "graduation-list",
				code: "admin_student_graduation"
			}
		]
	},
	{
		title: "家长学校",
		code: "admin_parent",
		path: "admin-parent",
		icon: "el-icon-user",
		children: [
			{
				title: "活动掠影",
				path: "pratice-list",
				code: "admin_parent_pratice"
			},
			{
				title: "家教知识",
				path: "knowledge-list",
				code: "admin_parent_knowledge"
			},
			{
				title: "学校沟通",
				path: "communication-list",
				code: "admin_parent_communication"
			}
		]
	},
	{
		title: "幸福教育",
		code: "",
		path: "admin-happy",
		icon: "el-icon-ship",
		children: [
			{
				title: "幸福理念",
				path: "idea-list",
				code: "admin_happy_idea"
			},
			{
				title: "幸福感言",
				path: "speech-list",
				code: "admin_happy_speech"
			},
			{
				title: "幸福教育活动",
				path: "exercise-list",
				code: "admin_happy_exercise"
			}
		]
	},
	{
		title: "联系我们",
		path: "admin_contact",
		icon: "el-icon-phone",
		path: "admin-contact",
		code: "admin_service_contact"
	},
	{
		title: "网站管理",
		code: "admin_system",
		path: "admin-system",
		icon: "el-icon-monitor",
		children: [
			{
				title: "科室管理",
				path: "department-list",
				code: "admin_system_department"
			},
			{
				title: "账号管理",
				path: "account-list",
				code: "admin_system_accoumnt"
			}
		]
	}
];
