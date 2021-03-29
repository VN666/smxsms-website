const menu = [
	{
		title: "网站首页",
		router: "/index",
		code: "smxsmx_index",
		children: []
	},
	{
		title: "二中概况",
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
		title: "二中团建",
		router: "/group",
		code: "smxsmx_group",
		children: []
	},
	{
		title: "二中党建",
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
		title: "职工之家",
		router: "/union",
		code: "smxsmx_union",
		children: []
	},
	{
		title: "二中创建",
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
		title: "二中安法",
		router: "/law",
		code: "smxsmx_law",
		children: []
	}
];

export default menu;
