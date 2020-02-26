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
/** 教学科研 */
import research_list from "./components/education/research-list";
import research_add from "./components/education/research-add";
import research_edit from "./components/education/research-edit";
import case_list from "./components/education/case-list";
import case_add from "./components/education/case-add";
import case_edit from "./components/education/case-edit";
import summary_list from "./components/education/summary-list";
import summary_add from "./components/education/summary-add";
import summary_edit from "./components/education/summary-edit";
import ppt_list from "./components/education/ppt-list";
import ppt_add from "./components/education/ppt-add";
import ppt_edit from "./components/education/ppt-edit";
import paper_list from "./components/education/paper-list";
import paper_add from "./components/education/paper-add";
import paper_edit from "./components/education/paper-edit";
import feature_list from "./components/education/feature-list";
import feature_add from "./components/education/feature-add";
import feature_edit from "./components/education/feature-edit";
/** 学生天地 */
import activity_list from "./components/student/activity-list";
import activity_add from "./components/student/activity-add";
import activity_edit from "./components/student/activity-edit";
import prize_list from "./components/student/prize-list";
import prize_add from "./components/student/prize-add";
import prize_edit from "./components/student/prize-edit";
import flag_list from "./components/student/flag-list";
import flag_add from "./components/student/flag-add";
import flag_edit from "./components/student/flag-edit";
import exhibition_list from "./components/student/exhibition-list";
import exhibition_add from "./components/student/exhibition-add";
import exhibition_edit from "./components/student/exhibition-edit";
import graduation_list from "./components/student/graduation-list";
import graduation_add from "./components/student/graduation-add";
import graduation_edit from "./components/student/graduation-edit";
/** 家长学校 */
import pratice_list from "./components/parent/pratice-list";
import pratice_add from "./components/parent/pratice-add";
import pratice_edit from "./components/parent/pratice-edit";
import knowledge_list from "./components/parent/knowledge-list";
import knowledge_add from "./components/parent/knowledge-add";
import knowledge_edit from "./components/parent/knowledge-edit";
import communication_list from "./components/parent/communication-list";
import communication_add from "./components/parent/communication-add";
import communication_edit from "./components/parent/communication-edit";
/** 七彩校园 */
import display_list from "./components/school/display-list";
import display_add from "./components/school/display-add";
import display_edit from "./components/school/display-edit";
/** 幸福教育 */
import idea_list from "./components/happy/idea-list";
import idea_add from "./components/happy/idea-add";
import idea_edit from "./components/happy/idea-edit";
import speech_list from "./components/happy/speech-list";
import speech_add from "./components/happy/speech-add";
import speech_edit from "./components/happy/speech-edit";
import exercise_list from "./components/happy/exercise-list";
import exercise_add from "./components/happy/exercise-add";
import exercise_edit from "./components/happy/exercise-edit";
/** 为您服务 */
import guide_list from "./components/service/guide-list";
import guide_add from "./components/service/guide-add";
import guide_edit from "./components/service/guide-edit";
import guarantee_list from "./components/service/guarantee-list";
import guarantee_add from "./components/service/guarantee-add";
import guarantee_edit from "./components/service/guarantee-edit";
import computer_list from "./components/service/computer-list";
import computer_add from "./components/service/computer-add";
import computer_edit from "./components/service/computer-edit";



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
			},
			{
				path: "research-list",
				name: "researchList",
				component: research_list
			},
			{
				path: "research-add",
				name: "researchAdd",
				component: research_add
			},
			{
				path: "research-edit",
				name: "researchEdit",
				component: research_edit
			},
			{
				path: "case-list",
				name: "caseList",
				component: case_list
			},
			{
				path: "case-add",
				name: "caseAdd",
				component: case_add
			},
			{
				path: "case-eidt",
				name: "caseEdit",
				component: case_edit
			},
			{
				path: "summary-list",
				name: "summaryList",
				component: summary_list
			},
			{
				path: "summary-add",
				name: "summaryAdd",
				component: summary_add
			},
			{
				path: "summary-edit",
				name: "summaryEdit",
				component: summary_edit
			},
			{
				path: "ppt-list",
				name: "pptList",
				component: ppt_list
			},
			{
				path: "ppt-add",
				name: "pptAdd",
				component: ppt_add
			},
			{
				path: "ppt-edit",
				name: "pptEdit",
				component: ppt_edit
			},
			{
				path: "paper-list",
				name: "paperList",
				component: paper_list
			},
			{
				path: "paper-add",
				name: "paperAdd",
				component: paper_add
			},
			{
				path: "paper-edit",
				name: "paperEdit",
				component: paper_edit
			},
			{
				path: "feature-list",
				name: "featureList",
				component: feature_list
			},
			{
				path: "feature-add",
				name: "featureAdd",
				component: feature_add
			},
			{
				path: "feature-edit",
				name: "featureEdit",
				component: feature_edit
			},
			{
				path: "activity-list",
				name: "activityList",
				component: activity_list
			},
			{
				path: "activity-add",
				name: "activityAdd",
				component: activity_add
			},
			{
				path: "activity-edit",
				name: "activityEdit",
				component: activity_edit
			},
			{
				path: "prize-list",
				name: "prizeList",
				component: prize_list
			},
			{
				path: "prize-add",
				name: "prizeAdd",
				component: prize_add
			},
			{
				path: "prize-edit",
				name: "prizeEdit",
				component: prize_edit
			},
			{
				path: "flag-list",
				name: "flagList",
				component: flag_list
			},
			{
				path: "flag-add",
				name: "flagAdd",
				component: flag_add
			},
			{
				path: "flag-edit",
				name: "flagEdit",
				component: flag_edit
			},
			{
				path: "exhibition-list",
				name: "exhibitionList",
				component: exhibition_list
			},
			{
				path: "exhibition-add",
				name: "exhibitionAdd",
				component: exhibition_add
			},
			{
				path: "exhibition-edit",
				name: "exhibitionEdit",
				component: exhibition_edit
			},
			{
				path: "graduation-list",
				name: "graduationList",
				component: graduation_list
			},
			{
				path: "graduation-add",
				name: "graduationAdd",
				component: graduation_add
			},
			{
				path: "graduation-edit",
				name: "graduationEdit",
				component: graduation_edit
			},
			{
				path: "pratice-list",
				name: "praticeList",
				component: pratice_list
			},
			{
				path: "pratice-add",
				name: "praticeAdd",
				component: pratice_add
			},
			{
				path: "pratice-edit",
				name: "praticeEdit",
				component: pratice_edit
			},
			{
				path: "knowledge-list",
				name: "knowledgeList",
				component: knowledge_list
			},
			{
				path: "knowledge-add",
				name: "knowledgeAdd",
				component: knowledge_add
			},
			{
				path: "knowledge-edit",
				name: "knowledgeEdit",
				component: knowledge_edit
			},
			{
				path: "communication-list",
				name: "communicationList",
				component: communication_list
			},
			{
				path: "communication-add",
				name: "communicationAdd",
				component: communication_add
			},
			{
				path: "communication-edit",
				name: "communicationEdit",
				component: communication_edit
			},
			{
				path: "display-list",
				name: "displayList",
				component: display_list
			},
			{
				path: "display-add",
				name: "displayAdd",
				component: display_add
			},
			{
				path: "display-edit",
				name: "displayEdit",
				component: display_edit
			},
			{
				path: "idea-list",
				name: "ideaList",
				component: idea_list
			},
			{
				path: "idea-add",
				name: "ideaAdd",
				component: idea_add
			},
			{
				path: "idea-edit",
				name: "ideaEdit",
				component: idea_edit
			},
			{
				path: "speech-list",
				name: "speechList",
				component: speech_list
			},
			{
				path: "speech-add",
				name: "speechAdd",
				component: speech_add
			},
			{
				path: "speech-edit",
				name: "speechEdit",
				component: speech_edit
			},
			{
				path: "exercise-list",
				name: "exerciseList",
				component: exercise_list
			},
			{
				path: "exercise-add",
				name: "exerciseAdd",
				component: exercise_add
			},
			{
				path: "exercise-edit",
				name: "exerciseEdit",
				component: exercise_edit
			},
			{
				path: "guide-list",
				name: "guideList",
				component: guide_list
			},
			{
				path: "guide-add",
				name: "guideAdd",
				component: guide_add
			},
			{
				path: "guide-edit",
				name: "guideEdit",
				component: guide_edit
			},
			{
				path: "guarantee-list",
				name: "guaranteeList",
				component: guarantee_list
			},
			{
				path: "guarantee-add",
				name: "guaranteeAdd",
				component: guarantee_add
			},
			{
				path: "guarantee-edit",
				name: "guaranteeEdit",
				component: guarantee_edit
			},
			{
				path: "computer-list",
				name: "computerList",
				component: computer_list
			},
			{
				path: "computer-add",
				name: "computerAdd",
				component: computer_add
			},
			{
				path: "computer-edit",
				name: "computerEdit",
				component: computer_edit
			}
		]
	}
];
