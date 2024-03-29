const menu = [
	{
		title: "网站首页",
		router: "/index",
		code: "smxsmx_index",
		children: []
	},
	{
		title: "学校概况",
		router: "/about",
		code: "smxsmx_about",
		children: [
			{
				title: "领导风采",
				router: "/about/leader-list"
			},
			{
				title: "学校简介",
				router: "/about/profile-content"
			},
			{
				title: "办学理念",
				router: "/about/school-concept"
			},
			{
				title: "校长寄语",
				router: "/about/proverb-content"
			},
			{
				title: "学校荣誉",
				router: "/about/honor-list"
			}
		]
	},
	{
		title: "教学动态",
		router: "/education",
		code: "smxsmx_education",
		children: []
	},
	{
		title: "德育活动",
		router: "/activity",
		code: "smxsmx_activity",
		children: [
			{
				title: "德育规划",
				router: "/activity/planning-list",
				code: ""
			},
			{
				title: "德育标兵",
				router: "/activity/pacesetter-list",
				code: ""
			},
			{
				title: "健康教育",
				router: "/activity/health-list",
				code: ""
			},
			{
				title: "班级文化",
				router: "/activity/culture-list",
				code: ""
			},
			{
				title: "班主任专栏",
				router: "/activity/teacher-list",
				code: ""
			},
			{
				title: "体艺活动",
				router: "/activity/gym-list",
				code: ""
			}
		]
	},
	{
		title: "校本研修",
		router: "/training",
		code: "smxsmx_training",
		children: []
	},
	{
		title: "为您服务",
		router: "/service",
		code: "smxsmx_service",
		children: [
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
	},
	{
		title: "团建活动",
		router: "/group",
		code: "smxsmx_group",
		children: []
	},
	{
		title: "学校党建",
		router: "/party",
		code: "smxsmx_party",
		children: [
			{
				title: "理论学习",
				router: "/party/theory-list",
				code: ""
			},
			{
				title: "组织建设",
				router: "/party/construct-list",
				code: ""
			},
			{
				title: "组织生活",
				router: "/party/life-list",
				code: ""
			},
			{
				title: "制度建设",
				router: "/party/institution-list",
				code: ""
			},
			{
				title: "台账管理",
				router: "/party/book-list",
				code: ""
			},
			{
				title: "活动项目",
				router: "/party/project-list",
				code: ""
			},
			{
				title: "阵地建设",
				router: "/party/position-list",
				code: ""
			}
		]
	},
	{
		title: "职工之家",
		router: "/union",
		code: "smxsmx_union",
		children: []
	},
	{
		title: "文明创建",
		router: "/establish",
		code: "smxsmx_establish",
		children: [
			{
				title: "创建会议",
				router: "/establish/meeting-list",
				code: ""
			},
			{
				title: "学习大讲堂",
				router: "/establish/classroom-list",
				code: ""
			},
			{
				title: "志愿者风采",
				router: "/establish/volunteer-list",
				code: ""
			},
			{
				title: "结对帮扶",
				router: "/establish/two-list",
				code: ""
			},
			{
				title: "文明实践活动",
				router: "/establish/practice-list",
				code: ""
			},
			{
				title: "文明之声",
				router: "/establish/voice-list",
				code: ""
			}
		]
	},
	{
		title: "平安校园",
		router: "/law",
		code: "smxsmx_law",
		children: []
	}
];

export default menu;
