
import index from "@/src/views/index/index";

import admin from "@/src/admin/index";

/** 新闻动态 */
import news from "@/src/views/news/index";
import news_campus_list from "@/src/views/news/news-campus-list";
import news_campus_detail from "@/src/views/news/news-campus-detail";
import news_notice_list from "@/src/views/news/news-notice-list";
import news_notice_detail from "@/src/views/news/news-notice-detail";
import news_media_list from "@/src/views/news/news-media-list";
import news_media_detail from "@/src/views/news/news-media-detail";
import news_enroll_list from "@/src/views/news/news-enroll-list";
import news_enroll_detail from "@/src/views/news/news-enroll-detail";
/** 关于二中 */
import about from "@/src/views/about/index";
import about_profile_content from "@/src/views/about/about-profile-content";
import about_leader_list from "@/src/views/about/about-leader-list";
import about_leader_detail from "@/src/views/about/about-leader-detail";
import about_proverb_content from "@/src/views/about/about-proverb-content";
import about_organization_content from "@/src/views/about/about-organization-content";
import about_team_content from "@/src/views/about/about-team-content";
import about_outstanding_list from "@/src/views/about/about-outstanding-list";
import about_outstanding_detail from "@/src/views/about/about-outstanding-detail";
import about_honor_list from "@/src/views/about/about-honor-list";
import about_honor_detail from "@/src/views/about/about-honor-detail";
import about_history_content from "@/src/views/about/about-history-content";
import about_landscape_list from "@/src/views/about/about-landscape-list";
import about_landscape_detail from "@/src/views/about/about-landscape-detail";
/** 党团工会 */
import group from "@/src/views/group/index";
import group_party_list from "@/src/views/group/group-party-list";
import group_party_detail from "@/src/views/group/group-party-detail";
import group_ccyl_list from  "@/src/views/group/group-ccyl-list";
import group_ccyl_detail from "@/src/views/group/group-ccyl-detail";
import group_union_list from "@/src/views/group/group-union-list";
import group_union_detail from "@/src/views/group/group-union-detail";
import group_excellent_list from "@/src/views/group/group-excellent-list";
import group_excellent_detail from "@/src/views/group/group-excellent-detail";

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
		component: about,
		children: [
			{
				path: "",
				redirect: "profile-content"
			},
			{
				path: "profile-content",
				name: "aboutProfileContent",
				component: about_profile_content
			},
			{
				path: "leader-list",
				name: "aboutLeaderList",
				component: about_leader_list
			},
			{
				path: "leader-detail",
				name: "aboutDetail",
				component: about_leader_detail
			},
			{
				path: "proverb-content",
				name: "aboutProverbContent",
				component: about_proverb_content
			},
			{
				path: "organization-content",
				name: "aboutOrganizationContent",
				component: about_organization_content
			},
			{
				path: "team-content",
				name: "aboutTeamContent",
				component: about_team_content
			},
			{
				path: "outstanding-list",
				name: "aboutOutstandingList",
				component: about_outstanding_list
			},
			{
				path: "outstanding-detail",
				name: "aboutOutstandingDetail",
				component: about_outstanding_detail
			},
			{
				path: "honor-list",
				name: "aboutHonorList",
				component: about_honor_list
			},
			{
				path: "honor-detail",
				name: "honorDetail",
				component: about_honor_detail
			},
			{
				path: "history-content",
				name: "aboutHistoryContent",
				component: about_history_content
			},
			{
				path: "landscape-list",
				name: "aboutLandscapeList",
				component: about_landscape_list
			},
			{
				path: "landscape-detail",
				name: "aboutLandscapeDetail",
				component: about_landscape_detail
			}
		]
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
	},
	{
		path: "/group",
		component: group,
		children: [
			{
				path: "",
				redirect: "party-list"
			},
			{
				path: "party-list",
				name: "groupPartyList",
				component: group_party_list
			},
			{
				path: "party-detail",
				name: "groupPartyDetail",
				component: group_party_detail
			},
			{
				path: "ccyl-list",
				name: "groupCcylList",
				component: group_ccyl_list
			},
			{
				path: "ccyl-detail",
				name: "groupCcylDetail",
				component: group_ccyl_detail
			},
			{
				path: "union-list",
				name: "groupUnionList",
				component: group_union_list
			},
			{
				path: "union-detail",
				name: "groupUnionDetail",
				component: group_union_detail
			},
			{
				path: "excellent-list",
				name: "groupExcellentList",
				component: group_excellent_list
			},
			{
				path: "excellent-detail",
				name: "groupExcellentDetail",
				component: group_excellent_detail
			}
		]
	}
];
