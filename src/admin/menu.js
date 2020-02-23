export const menu = [
	{
		title: "返回门户",
		code: "admin_home",
		icon: "el-icon-s-home",
		path: "index"
	},
	{
		title: "背景封面",
		code: "admin_bg",
		path: "admin-bg",
		icon: "el-icon-picture"
	},
	{
		title: "关于二中",
		code: "admin_about",
		path: "admin-about",
		icon: "el-icon-school",
		children: [
			{
				title: "学校简介",
				path: "profile-content",
				code: "about_profile_contetn"
			},
			{
				title: "学校领导",
				path: "leader-list",
				code: "about_leader_list"
			},
			{
				title: "校长寄语",
				path: "proverb-content",
				code: "about_proverb_content"
			},
			{
				title: "内部机构",
				path: "organization-content",
				code: "about_organization_content"
			},
			{
				title: "师资概况",
				path: "team-content",
				code: "about_team_content"
			},
			{
				title: "名师风采",
				path: "outstanding-list",
				code: "about_outstanding_list"
			},
			{
				title: "学校荣誉",
				path: "honor-list",
				code: "about_honor_list"
			},
			{
				title: "二中校史",
				path: "history-content",
				code: "about_history_content"
			},
			{
				title: "校园风貌",
				path: "landscape-list",
				code: "about_landscape_list"
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
				code: "admin_news_recruit"
			}
		]
	},
	{
		title: "党团工会",
		path: "",
		code: "admin_group",
		icon: "el-icon-star-on",
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
		title: "联系我们",
		path: "admin_contact",
		icon: "el-icon-phone",
		path: "admin-contact",
		code: "admin_contact"
	}
];
