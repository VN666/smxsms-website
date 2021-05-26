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
		icon: "el-icon-picture-outline",
		menuCode: "bg",
	},
	{
		title: "二中概况",
		code: "admin_about",
		path: "admin-about",
		icon: "el-icon-school",
		menuCode: "about",
		children: [
			{
				title: "领导风采",
				path: "leader-list",
				code: "admin_about_leader",
				menuCode: "leader"
			},
			{
				title: "学校简介",
				path: "profile-content",
				code: "admin_about_profile",
				menuCode: "profile"
			},
			{
				title: "办学理念",
				path: "concept-content",
				code: "admin_about_concept",
				menuCode: "concept"
			},
			{
				title: "校长寄语",
				path: "proverb-content",
				code: "admin_about_proverb",
				menuCode: "proverb"
			},
			{
				title: "学校荣誉",
				path: "honor-list",
				code: "admin_about_honor",
				menuCode: "honor"
			}
		]
	},
	{
		title: "教学动态",
		code: "admin_education",
		path: "admin-education",
		icon: "el-icon-reading",
		menuCode: "research"
	},
	{
		title: "德育活动",
		code: "admin_activity",
		path: "admin-activity",
		icon: "el-icon-bangzhu",
		menuCode: "activity",
		children: [
			{
				title: "德育规划",
				path: "planning-list",
				code: "admin_activity_planning",
				menuCode: "planning"
			},
			{
				title: "德育标兵",
				path: "pacesetter-list",
				code: "admin_activity_pacesetter",
				menuCode: "pacesetter"
			},
			{
				title: "健康教育",
				path: "health-list",
				code: "admin_activity_health",
				menuCode: "health"
			},
			{
				title: "班级文化",
				path: "culture-list",
				code: "admin_activity_culture",
				menuCode: "culture"
			},
			{
				title: "班主任专栏",
				path: "teacher-list",
				code: "admin_activity_teacher",
				menuCode: "teacher"
			},
			{
				title: "体艺活动",
				path: "gym-list",
				code: "admin_activity_gym",
				menuCode: "gym"
			}
		]
	},
	{
		title: "校本研修",
		code: "admin_training",
		path: "admin-training",
		icon: "el-icon-thumb",
		menuCode: "study"
	},
	{
		title: "为您服务",
		code: "admin_service",
		path: "admin-service",
		icon: "el-icon-help",
		menuCode: "service",
		children: [
			{
				title: "后勤保障",
				path: "guarantee-list",
				code: "admin_service_guarantee",
				menuCode: "guarantee"
			},
			{
				title: "电教知识",
				path: "computer-list",
				code: "admin_service_computer",
				menuCode: "computer"
			}
		]
	},
	{
		title: "二中团建",
		code: "admin_group",
		path: "admin-group",
		icon: "el-icon-brush",
		menuCode: "ccyl"
	},
	{
		title: "二中党建",
		code: "admin_party",
		path: "admin-party",
		icon: "el-icon-sunny",
		menuCode: "party",
		children: [
			{
				title: "理论学习",
				path: "theory-list",
				code: "admin_party_theory",
				menuCode: "theory"
			},
			{
				title: "组织建设",
				path: "construct-list",
				code: "admin_party_construct",
				menuCode: "construct"
			},
			{
				title: "组织生活",
				path: "life-list",
				code: "admin_party_life",
				menuCode: "life"
			},
			{
				title: "制度建设",
				path: "institution-list",
				code: "admin_party_institution",
				menuCode: "institution"
			},
			{
				title: "台账管理",
				path: "book-list",
				code: "admin_party_book",
				menuCode: "book"
			},
			{
				title: "活动项目",
				path: "project-list",
				code: "admin_party_project",
				menuCode: "project"
			},
			{
				title: "阵地建设",
				path: "position-list",
				code: "admin_party_position",
				menuCode: "position"
			}
		]
	},
	{
		title: "职工之家",
		code: "admin_union",
		path: "admin-union",
		icon: "el-icon-refrigerator",
		menuCode: "staff"
	},
	{
		title: "二中创建",
		code: "admin_establish",
		path: "admin-establish",
		icon: "el-icon-aim",
		menuCode: "establish",
		children: [
			{
				title: "创建会议",
				path: "meeting-list",
				code: "admin_establish_meeting",
				menuCode: "meeting"
			},
			{
				title: "学习大讲堂",
				path: "classroom-list",
				code: "admin_establish_classroom",
				menuCode: "classroom"
			},
			{
				title: "志愿者风采",
				path: "volunteer-list",
				code: "admin_establish_volunteer",
				menuCode: "volunteer"
			},
			{
				title: "结对帮扶",
				path: "two-list",
				code: "admin_establish_two",
				menuCode: "two"
			},
			{
				title: "新时代文明实践活动",
				path: "practice-list",
				code: "admin_establish_practice",
				menuCode: "practice"
			},
			{
				title: "文明之声",
				path: "voice-list",
				code: "admin_establish_voice",
				menuCode: "voice"
			}
		]
	},
	{
		title: "二中安法",
		code: "admin_law",
		path: "admin-law",
		icon: "el-icon-guide",
		menuCode: "safe"
	},

	{
		title: "联系我们",
		path: "admin_contact",
		icon: "el-icon-phone",
		path: "admin-contact",
		code: "admin_contact",
		menuCode: "contact"
	},
	{
		title: "网站管理",
		code: "admin_system",
		path: "admin-system",
		icon: "el-icon-monitor",
		menuCode: "system",
		children: [
			{
				title: "操作日志",
				path: "log-list",
				code: "admin_system_log",
				menuCode: "log"
			},
			{
				title: "科室管理",
				path: "department-list",
				code: "admin_system_department",
				menuCode: "department"
			},
			{
				title: "账号管理",
				path: "account-list",
				code: "admin_system_account",
				menuCode: "account"
			}
		]
	}
];
