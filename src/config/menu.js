const menu = [
	{
		title: "网站首页",
		router: "/index",
		code: "smxsmx_index",
		children: []
	},
	{
		title: "关于二中",
		router: "/about",
		code: "smxsmx_about",
		children: [
			{
				title: "学校简介",
				router: "/about/profile-content"
			},
			{
				title: "学校领导",
				router: "/about/leader-list"
			},
			{
				title: "校长寄语",
				router: "/about/proverb-content"
			},
			{
				title: "内部机构",
				router: "/about/organization-content"
			},
			{
				title: "师资概况",
				router: "/about/team-content"
			},
			{
				title: "名师风采",
				router: "/about/outstanding-list"
			},
			{
				title: "学校荣誉",
				router: "/about/honor-list"
			},
			{
				title: "二中校史",
				router: "/about/history-content"
			},
			{
				title: "校园风貌",
				router: "/about/landscape-list"
			}
		]
	},
	{
		title: "新闻动态",
		router: "/news",
		code: "smxsmx_news",
		children: [
			{
				title: "新闻快讯",
				router: "/news/campus-list",
				code: ""
			},
			{
				title: "通知公告",
				router: "/news/notice-list",
				code: ""
			},
			{
				title: "媒体报道",
				router: "/news/media-list",
				code: ""
			},
			{
				title: "招生信息",
				router: "/news/enroll-list",
				code: ""
			}
		]
	},
	{
		title: "党团工会",
		router: "/group",
		code: "smxsmx_group",
		children: [
			{
				title: "党建动态",
				router: "/group/party-list",
				code: ""
			},
			{
				title: "团建工作",
				router: "/group/ccyl-list",
				code: ""
			},
			{
				title: "工会活动",
				router: "/group/union-list",
				code: ""
			},
			{
				title: "创先争优",
				router: "/group/excellent-list",
				code: ""
			}
		]
	},
	{
		title: "教学科研",
		router: "/education",
		code: "smxsmx_education",
		children: [
			{
				title: "教研动态",
				router: "/education/research-list",
				code: ""
			},
			{
				title: "教学案例",
				router: "/education/case-list",
				code: ""
			},
			{
				title: "教学反思",
				router: "/education/summary-list",
				code: ""
			},
			{
				title: "教学课件",
				router: "/education/ppt-list",
				code: ""
			},
			{
				title: "试题集锦",
				router: "/education/paper-list",
				code: ""
			},
			{
				title: "特色教育",
				router: "/education/feature-list",
				code: ""
			}
		]
	},
	{
		title: "学生天地",
		router: "/student",
		code: "smxsmx_student",
		children: [
			{
				title: "班级活动",
				router: "/student/activity-list",
				code: ""
			},
			{
				title: "荣誉表彰",
				router: "/student/prize-list",
				code: ""
			},
			{
				title: "纪律卫生",
				router: "/student/flag-list",
				code: ""
			},
			{
				title: "学生作品",
				router: "/student/exhibition-list",
				code: ""
			},
			{
				title: "毕业留念",
				router: "/student/graduation-list",
				code: ""
			}
		]
	},
	{
		title: "家长学校",
		router: "/parent",
		code: "smxsmx_parent",
		children: [
			{
				title: "活动掠影",
				router: "/parent/pratice-list",
				code: ""
			},
			{
				title: "家教知识",
				router: "/parent/knowledge-list",
				code: ""
			},
			{
				title: "学校沟通",
				router: "/parent/communication-list",
				code: ""
			}
		]
	},
	{
		title: "七彩校园",
		router: "/school",
		code: "smxsmx_school",
		children: [
			{
				title: "活动报道",
				router: "/school/display-list",
				code: ""
			}
		]
	},
	{
		title: "幸福教育",
		router: "/happy",
		code: "smxsmx_happy",
		children: [
			{
				title: "幸福理念",
				router: "/happy/idea-list",
				code: ""
			},
			{
				title: "幸福感言",
				router: "/happy/speech-list",
				code: ""
			},
			{
				title: "幸福教育活动",
				router: "/happy/exercise-list",
				code: ""
			}
		]
	},
	{
		title: "为您服务",
		router: "/service",
		code: "smxsmx_service",
		children: [
			{
				title: "办事指南",
				router: "/service/guide-list",
				code: ""
			},
			{
				title: "后勤保障",
				router: "/service/guarantee-list",
				code: ""
			},
			{
				title: "电教知识",
				router: "/service/computer-list",
				code: ""
			}
		]
	}

];

export default menu;
