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
		path: "admin_bg",
		icon: "el-icon-picture",
		path: ""
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
		code: "admin_party",
		icon: "el-icon-star-on",
		children: [
			{
				title: "党建动态",
				path: "",
				code: "admin_party_trend"
			},
			{
				title: "团建工作",
				path: "",
				code: "admin_party_youth"
			},
			{
				title: "工会活动",
				path: "",
				code: "admin_party_union"
			},
			{
				title: "创先争优",
				path: "",
				code: "admin_party_honour"
			}
		]
	}
];
