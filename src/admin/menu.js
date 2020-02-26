export const menu = [
	{
		title: "返回门户",
		code: "home",
		icon: "el-icon-s-home",
		path: "index"
	},
	{
		title: "背景封面",
		code: "bg",
		path: "admin-bg",
		icon: "el-icon-picture-outline"
	},
	{
		title: "关于二中",
		code: "about",
		path: "admin-about",
		icon: "el-icon-school",
		children: [
			{
				title: "学校简介",
				path: "profile-content",
				code: "profile"
			},
			{
				title: "学校领导",
				path: "leader-list",
				code: "leader"
			},
			{
				title: "校长寄语",
				path: "proverb-content",
				code: "proverb"
			},
			{
				title: "内部机构",
				path: "organization-content",
				code: "organization"
			},
			{
				title: "师资概况",
				path: "team-content",
				code: "team"
			},
			{
				title: "名师风采",
				path: "outstanding-list",
				code: "about_outstanding"
			},
			{
				title: "学校荣誉",
				path: "honor-list",
				code: "honor"
			},
			{
				title: "二中校史",
				path: "history-content",
				code: "history"
			},
			{
				title: "校园风貌",
				path: "landscape-list",
				code: "landscape"
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
				code: "campus"
			},
			{
				title: "通知公告",
				path: "notice-list",
				code: "notice"
			},
			{
				title: "媒体报道",
				path: "media-list",
				code: "media"
			},
			{
				title: "招生信息",
				path: "enroll-list",
				code: "enroll"
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
				code: "party"
			},
			{
				title: "团建工作",
				path: "ccyl-list",
				code: "ccyl"
			},
			{
				title: "工会活动",
				path: "union-list",
				code: "union"
			},
			{
				title: "创先争优",
				path: "excellent-list",
				code: "excellent"
			}
		]
	},
	{
		title: "教学科研",
		code: "education",
		path: "admin-education",
		icon: "el-icon-data-analysis",
		children: [
			{
				title: "教研动态",
				path: "research-list",
				code: "research"
			},
			{
				title: "教学案例",
				path: "case-list",
				code: "case"
			},
			{
				title: "教学反思",
				path: "summary-list",
				code: "summary"
			},
			{
				title: "教学课件",
				path: "ppt-list",
				code: "ppt"
			},
			{
				title: "试题集锦",
				path: "paper-list",
				code: "paper"
			},
			{
				title: "特色教育",
				path: "feature-list",
				code: "feature"
			}
		]
	},
	{
		title: "学生天地",
		code: "student",
		path: "admin-student",
		icon: "el-icon-basketball",
		children: [
			{
				title: "班级活动",
				path: "activity-list",
				code: "activity"
			},
			{
				title: "荣誉表彰",
				path: "prize-list",
				code: "prize"
			},
			{
				title: "纪律卫生",
				path: "flag-list",
				code: "flag"
			},
			{
				title: "学生作品",
				path: "exhibition-list",
				code: "exhibition"
			},
			{
				title: "毕业留念",
				path: "graduation-list",
				code: "graduation"
			}
		]
	},
	{
		title: "家长学校",
		code: "parent",
		path: "admin-parent",
		icon: "el-icon-user",
		children: [
			{
				title: "活动掠影",
				path: "pratice-list",
				code: "pratice"
			},
			{
				title: "家教知识",
				path: "knowledge-list",
				code: "knowledge"
			},
			{
				title: "学校沟通",
				path: "communication-list",
				code: "communication"
			}
		]
	},
	{
		title: "七彩校园",
		code: "school",
		path: "admin-school",
		icon: "el-icon-orange",
		children: [
			{
				title: "活动报道",
				path: "display-list",
				code: "display"
			}
		]
	},
	{
		title: "幸福教育",
		code: "admin_happy",
		path: "admin-happy",
		icon: "el-icon-ship",
		children: [
			{
				title: "幸福理念",
				path: "idea-list",
				code: "idea"
			},
			{
				title: "幸福感言",
				path: "speech-list",
				code: "speech"
			},
			{
				title: "幸福教育活动",
				path: "exercise-list",
				code: "exercise"
			}
		]
	},
	{
		title: "为您服务",
		code: "service",
		path: "admin-service",
		icon: "el-icon-help",
		children: [
			{
				title: "办事指南",
				path: "guide-list",
				code: "guide"
			},
			{
				title: "后勤保障",
				path: "guarantee-list",
				code: "guarantee"
			},
			{
				title: "电教知识",
				path: "computer-list",
				code: "computer"
			}
		]
	},



	{
		title: "联系我们",
		path: "admin_contact",
		icon: "el-icon-phone",
		path: "admin-contact",
		code: "contact"
	}
];
