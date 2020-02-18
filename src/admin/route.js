import admin from "./index";
import campus_list from "./components/news/campus-list";
import campus_add from "./components/news/campus-add";
import campus_edit from "./components/news/campus-edit";
import notice_list from "./components/news/notice-list";
import notice_add from "./components/news/notice-add";
import notice_edit from "./components/news/notice-edit";
import media_list from "./components/news/media-list";
import media_add from "./components/news/media-add";
import media_edit from "./components/news/media-edit";
import enroll_list from "./components/news/enroll-list";
import enroll_edit from "./components/news/enroll-edit";
import enroll_add from "./components/news/enroll-add";

import admin_bg from "./components/bg/index";

export default [
	{
		path: "/admin",
		component: admin,
		children: [
			{
				path: "",
				redirect: "campus-list",
			},
			{
				path: "campus-list",
				name: "campusList",
				component: campus_list
			},
			{
				path: "campus-add",
				name: "campusAdd",
				component: campus_add
			},
			{
				path: "campus-edit",
				name: "campusEdit",
				component: campus_edit
			},
			{
				path: "admin-bg",
				name: "adminBg",
				component: admin_bg
			},
			{
				path: "notice-list",
				name: "noticeList",
				component: notice_list
			},
			{
				path: "notice-edit",
				name: "noticeEdit",
				component: notice_edit
			},
			{
				path: "notice-add",
				name: "noticeAdd",
				component: notice_add
			},
			{
				path: "media-list",
				name: "mediaList",
				component: media_list
			},
			{
				path: "media-edit",
				name: "mediaEdit",
				component: media_edit
			},
			{
				path: "media-add",
				name: "mediaAdd",
				component: media_edit
			},
			{
				path: "enroll-list",
				name: "enrollList",
				component: enroll_list
			},
			{
				path: "enroll-edit",
				name: "enrollEdit",
				component: enroll_edit
			},
			{
				path: "enroll-add",
				name: "enrollAdd",
				component: enroll_add
			}
		]
	}
];
