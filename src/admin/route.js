import admin from "./index";
/** 新闻快讯 */
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
/** 封面背景 */
import admin_bg from "./components/bg/index";
/** 联系我们 */
import admin_contact from "./components/contact/index";
/** 关于二中 */
import profile_content from "./components/about/profile-content";
import organization_content from "./components/about/organization-content";
import team_content from "./components/about/team-content";
import history_content from "./components/about/history-content";
import proverb_content from "./components/about/proverb-content";
import leader_list from "./components/about/leader-list";
import outstanding_list from "./components/about/outstanding-list";
import honor_list from "./components/about/honor-list";
import honor_add from "./components/about/honor-add";
import honor_edit from "./components/about/honor-edit";
import landscape_list from "./components/about/landscape-list";
/** 党团工会 */
import party_list from "./components/group/party-list";
import party_add from "./components/group/party-add";
import party_edit from "./components/group/party-edit";
import ccyl_list from "./components/group/ccyl-list";
import ccyl_add from "./components/group/ccyl-add";
import ccyl_edit from "./components/group/ccyl-edit";
import union_list from "./components/group/union-list";
import union_add from "./components/group/union-add";
import union_edit from "./components/group/union-edit";
import excellent_list from "./components/group/excellent-list";
import excellent_add from "./components/group/excellent-add";
import excellent_edit from "./components/group/excellent-edit";


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
				path: "admin-contact",
				name: "adminContact",
				component: admin_contact
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
				component: media_add
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
			},
			{
				path: "profile-content",
				name: "profileContent",
				component: profile_content
			},
			{
				path: "organization-content",
				name: "organizationContent",
				component: organization_content
			},
			{
				path: "team-content",
				name: "teamContent",
				component: team_content
			},
			{
				path: "history-content",
				name: "historyContent",
				component: history_content
			},
			{
				path: "proverb-content",
				name: "proverbContent",
				component: proverb_content
			},
			{
				path: "leader-list",
				name: "leaderList",
				component: leader_list
			},
			{
				path: "outstanding-list",
				name: "outstandingList",
				component: outstanding_list
			},
			{
				path: "honor-list",
				name: "honorList",
				component: honor_list
			},
			{
				path: "honor-add",
				name: "honorAdd",
				component: honor_add
			},
			{
				path: "honor-edit",
				name: "honorEdit",
				component: honor_edit
			},
			{
				path: "landscape-list",
				name: "landscapeList",
				component: landscape_list
			},
			{
				path: "party-list",
				name: "partyList",
				component: party_list
			},
			{
				path: "party-add",
				name: "partyAdd",
				component: party_add
			},
			{
				path: "party-edit",
				name: "partyEdit",
				component: party_edit
			},
			{
				path: "ccyl-list",
				name: "ccylList",
				component: ccyl_list
			},
			{
				path: "ccyl-add",
				name: "ccylAdd",
				component: ccyl_add
			},
			{
				path: "ccyl-edit",
				name: "ccylEdit",
				component: ccyl_edit
			},
			{
				path: "union-list",
				name: "unionList",
				component: union_list
			},
			{
				path: "union-add",
				name: "unionAdd",
				component: union_add
			},
			{
				path: "union-edit",
				name: "unionEdit",
				component: union_edit
			},
			{
				path: "excellent-list",
				name: "excellentList",
				component: excellent_list
			},
			{
				path: "excellent-add",
				name: "excellentAdd",
				component: excellent_add
			},
			{
				path: "excellent-edit",
				name: "excellentEdit",
				component: excellent_edit
			}
		]
	}
];
