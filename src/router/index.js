
import index from "@/src/views/index/index";
import about from "@/src/views/about/index";
import admin from "@/src/admin/index";

import news from "@/src/views/news/index";
import news_campus_list from "@/src/views/news/news-campus-list";
import news_campus_detail from "@/src/views/news/news-campus-detail";
import news_notice_list from "@/src/views/news/news-notice-list";
import news_notice_detail from "@/src/views/news/news-notice-detail";
import news_media_list from "@/src/views/news/news-media-list";
import news_media_detail from "@/src/views/news/news-media-detail";
import news_enroll_list from "@/src/views/news/news-enroll-list";
import news_enroll_detail from "@/src/views/news/news-enroll-detail";


export default  [
	{
  		path: "/",
  		redirect: "/index"
	},
	{
		path: "/index",
		component: index
	},
	{
		path: "/about",
		component: about
	},
	{
		path: "/news",
		component: news,
		children: [
			{
				path: "",
				redirect: "campus-list"
			},
			{
				path: "campus-list",
				name: "newsCampusList",
				component: news_campus_list
			},
			{
				path: "campus-detail",
				name: "newsCampusDetail",
				component: news_campus_detail
			},
			{
				path: "notice-list",
				name: "newsNoticeList",
				component: news_notice_list
			},
			{
				path: "notice-detail",
				name: "newsNoticeDetail",
				component: news_notice_detail
			},
			{
				path: "media-list",
				name: "newsMediaList",
				component: news_media_list
			},
			{
				path: "media-detail",
				name: "newsMediaDetail",
				component: news_media_detail
			},
			{
				path: "enroll-list",
				name: "newsEnrollList",
				component: news_enroll_list
			},
			{
				path: "enroll-detail",
				name: "newsEnrollDetail",
				component: news_enroll_detail
			}
		]
	}
];
