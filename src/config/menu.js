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
		code: "",
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
		code: "",
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
		title: "科学科研",
		router: "",
		code: "",
		children: [
			{
				title: "教研动态",
				router: "",
				code: ""
			},
			{
				title: "教学案例",
				router: "",
				code: ""
			},
			{
				title: "教学反思",
				router: "",
				code: ""
			},
			{
				title: "教学课件",
				router: "",
				code: ""
			},
			{
				title: "试题集锦",
				router: "",
				code: ""
			},
			{
				title: "名师风采",
				router: "",
				code: ""
			},
			{
				title: "特色教育",
				router: "",
				code: ""
			}
		]
	},
	{
		title: "学生天地",
		router: "",
		code: "",
		children: [
			{
				title: "班级活动",
				router: "",
				code: ""
			},
			{
				title: "荣誉表彰",
				router: "",
				code: ""
			},
			{
				title: "纪律卫生",
				router: "",
				code: ""
			},
			{
				title: "学生座屏",
				router: "",
				code: ""
			},
			{
				title: "毕业留念",
				router: "",
				code: ""
			}
		]
	},
	{
		title: "家长学校",
		router: "",
		code: "",
		children: [
			{
				title: "活动掠影",
				router: "",
				code: ""
			},
			{
				title: "教教专区",
				router: "",
				code: ""
			},
			{
				title: "学校沟通",
				router: "",
				code: ""
			}
		]
	},
	{
		title: "七彩校园",
		router: "",
		code: "",
		children: [
			{
				title: "校园活动",
				router: "",
				code: ""
			},
			{
				title: "校园活动",
				router: "",
				code: ""
			},
			{
				title: "学校活动",
				router: "",
				code: ""
			}
		]
	},
	{
		title: "幸福教育",
		router: "",
		code: "",
		children: [
			{
				title: "幸福理念",
				router: "",
				code: ""
			},
			{
				title: "幸福感言",
				router: "",
				code: ""
			},
			{
				title: "幸福教育活动",
				router: "",
				code: ""
			}
		]
	},
	{
		title: "为您服务",
		router: "",
		code: "",
		children: [
			{
				title: "办事指南",
				router: "",
				code: ""
			},
			{
				title: "后勤保障",
				router: "",
				code: ""
			},
			{
				title: "电教知识",
				router: "",
				code: ""
			}
		]
	}

];

export default menu;
