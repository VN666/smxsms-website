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
/** 网站管理 */
import department_list from "./components/system/department-list";
import account_list from "./components/system/account-list";
import account_add from "./components/system/account-add";
import account_edit from "./components/system/account-edit";


export default [
	{
		path: "/admin",
		component: admin,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "campus-list",
			},
			{
				path: "campus-list",
				name: "campusList",
				meta: { auth: true, code: "admin_news_campus" },
				component: campus_list
			},
			{
				path: "campus-add",
				name: "campusAdd",
				meta: { auth: true, code: "admin_news_campus" },
				component: campus_add
			},
			{
				path: "campus-edit",
				name: "campusEdit",
				meta: { auth: true, code: "admin_news_campus" },
				component: campus_edit
			},
			{
				path: "admin-bg",
				name: "adminBg",
				meta: { auth: true, code: "admin_bg" },
				component: admin_bg
			},
			{
				path: "admin-contact",
				name: "adminContact",
				meta: { auth: true, code: "admin_service_contact" },
				component: admin_contact
			},
			{
				path: "notice-list",
				name: "noticeList",
				meta: { auth: true, code: "admin_news_notice" },
				component: notice_list
			},
			{
				path: "notice-edit",
				name: "noticeEdit",
				meta: { auth: true, code: "admin_news_notice" },
				component: notice_edit
			},
			{
				path: "notice-add",
				name: "noticeAdd",
				code: "admin_news_notice",
				component: notice_add
			},
			{
				path: "media-list",
				name: "mediaList",
				meta: { auth: true, code: "admin_news_media" },
				component: media_list
			},
			{
				path: "media-edit",
				name: "mediaEdit",
				meta: { auth: true, code: "admin_news_media" },
				component: media_edit
			},
			{
				path: "media-add",
				name: "mediaAdd",
				meta: { auth: true, code: "admin_news_media" },
				component: media_add
			},
			{
				path: "enroll-list",
				name: "enrollList",
				meta: { auth: true, code: "admin_news_enroll" },
				component: enroll_list
			},
			{
				path: "enroll-edit",
				name: "enrollEdit",
				meta: { auth: true, code: "admin_news_enroll" },
				component: enroll_edit
			},
			{
				path: "enroll-add",
				name: "enrollAdd",
				meta: { auth: true, code: "admin_news_enroll" },
				component: enroll_add
			},
			{
				path: "profile-content",
				name: "profileContent",
				meta: { auth: true, code: "admin_about_profile" },
				component: profile_content
			},
			{
				path: "organization-content",
				name: "organizationContent",
				meta: { auth: true, code: "admin_about_organization" },
				component: organization_content
			},
			{
				path: "team-content",
				name: "teamContent",
				meta: { auth: true, code: "admin_about_team" },
				component: team_content
			},
			{
				path: "history-content",
				name: "historyContent",
				meta: { auth: true, code: "admin_about_history" },
				component: history_content
			},
			{
				path: "proverb-content",
				name: "proverbContent",
				meta: { auth: true, code: "admin_about_proverb" },
				component: proverb_content
			},
			{
				path: "leader-list",
				name: "leaderList",
				meta: { auth: true, code: "admin_about_leader" },
				component: leader_list
			},
			{
				path: "outstanding-list",
				name: "outstandingList",
				meta: { auth: true, code: "admin_about_outstanding" },
				component: outstanding_list
			},
			{
				path: "honor-list",
				name: "honorList",
				meta: { auth: true, code: "admin_about_honor" },
				component: honor_list
			},
			{
				path: "honor-add",
				name: "honorAdd",
				meta: { auth: true, code: "admin_about_honor" },
				component: honor_add
			},
			{
				path: "honor-edit",
				name: "honorEdit",
				meta: { auth: true, code: "admin_about_honor" },
				component: honor_edit
			},
			{
				path: "landscape-list",
				name: "landscapeList",
				meta: { auth: true, code: "admin_about_landscape" },
				component: landscape_list
			},
			{
				path: "party-list",
				name: "partyList",
				meta: { auth: true, code: "admin_group_party" },
				component: party_list
			},
			{
				path: "party-add",
				name: "partyAdd",
				meta: { auth: true, code: "admin_group_party" },
				component: party_add
			},
			{
				path: "party-edit",
				name: "partyEdit",
				meta: { auth: true, code: "admin_group_party" },
				component: party_edit
			},
			{
				path: "ccyl-list",
				name: "ccylList",
				meta: { auth: true, code: "admin_group_ccyl" },
				component: ccyl_list
			},
			{
				path: "ccyl-add",
				name: "ccylAdd",
				meta: { auth: true, code: "admin_group_ccyl" },
				component: ccyl_add
			},
			{
				path: "ccyl-edit",
				name: "ccylEdit",
				meta: { auth: true, code: "admin_group_ccyl" },
				component: ccyl_edit
			},
			{
				path: "union-list",
				name: "unionList",
				meta: { auth: true, code: "admin_group_union" },
				component: union_list
			},
			{
				path: "union-add",
				name: "unionAdd",
				meta: { auth: true, code: "admin_group_union" },
				component: union_add
			},
			{
				path: "union-edit",
				name: "unionEdit",
				meta: { auth: true, code: "admin_group_union" },
				component: union_edit
			},
			{
				path: "excellent-list",
				name: "excellentList",
				meta: { auth: true, code: "admin_group_excellent" },
				component: excellent_list
			},
			{
				path: "excellent-add",
				name: "excellentAdd",
				meta: { auth: true, code: "admin_group_excellent" },
				component: excellent_add
			},
			{
				path: "excellent-edit",
				name: "excellentEdit",
				meta: { auth: true, code: "admin_group_excellent" },
				component: excellent_edit
			},
			{
				path: "research-list",
				name: "researchList",
				meta: { auth: true, code: "admin_education_research" },
				component: research_list
			},
			{
				path: "research-add",
				name: "researchAdd",
				meta: { auth: true, code: "admin_education_research" },
				component: research_add
			},
			{
				path: "research-edit",
				name: "researchEdit",
				meta: { auth: true, code: "admin_education_research" },
				code: "",
				component: research_edit
			},
			{
				path: "case-list",
				name: "caseList",
				meta: { auth: true, code: "admin_education_case" },
				component: case_list
			},
			{
				path: "case-add",
				name: "caseAdd",
				meta: { auth: true, code: "admin_education_case" },
				component: case_add
			},
			{
				path: "case-eidt",
				name: "caseEdit",
				meta: { auth: true, code: "admin_education_case" },
				component: case_edit
			},
			{
				path: "summary-list",
				name: "summaryList",
				meta: { auth: true, code: "admin_education_summary" },
				component: summary_list
			},
			{
				path: "summary-add",
				name: "summaryAdd",
				meta: { auth: true, code: "admin_education_summary" },
				component: summary_add
			},
			{
				path: "summary-edit",
				name: "summaryEdit",
				meta: { auth: true, code: "admin_education_summary" },
				component: summary_edit
			},
			{
				path: "ppt-list",
				name: "pptList",
				meta: { auth: true, code: "admin_education_ppt" },
				component: ppt_list
			},
			{
				path: "ppt-add",
				name: "pptAdd",
				meta: { auth: true, code: "admin_education_ppt" },
				component: ppt_add
			},
			{
				path: "ppt-edit",
				name: "pptEdit",
				meta: { auth: true, code: "admin_education_ppt" },
				component: ppt_edit
			},
			{
				path: "paper-list",
				name: "paperList",
				meta: { auth: true, code: "admin_education_paper" },
				component: paper_list
			},
			{
				path: "paper-add",
				name: "paperAdd",
				meta: { auth: true, code: "admin_education_paper" },
				component: paper_add
			},
			{
				path: "paper-edit",
				name: "paperEdit",
				meta: { auth: true, code: "admin_education_paper" },
				component: paper_edit
			},
			{
				path: "feature-list",
				name: "featureList",
				meta: { auth: true, code: "admin_education_feature" },
				component: feature_list
			},
			{
				path: "feature-add",
				name: "featureAdd",
				meta: { auth: true, code: "admin_education_feature" },
				component: feature_add
			},
			{
				path: "feature-edit",
				name: "featureEdit",
				meta: { auth: true, code: "admin_education_feature" },
				component: feature_edit
			},
			{
				path: "activity-list",
				name: "activityList",
				meta: { auth: true, code: "admin_student_activity" },
				component: activity_list
			},
			{
				path: "activity-add",
				name: "activityAdd",
				meta: { auth: true, code: "admin_student_activity" },
				component: activity_add
			},
			{
				path: "activity-edit",
				name: "activityEdit",
				meta: { auth: true, code: "admin_student_activity" },
				component: activity_edit
			},
			{
				path: "prize-list",
				name: "prizeList",
				meta: { auth: true, code: "admin_student_prize" },
				component: prize_list
			},
			{
				path: "prize-add",
				name: "prizeAdd",
				meta: { auth: true, code: "admin_student_prize" },
				component: prize_add
			},
			{
				path: "prize-edit",
				name: "prizeEdit",
				meta: { auth: true, code: "admin_student_prize" },
				component: prize_edit
			},
			{
				path: "flag-list",
				name: "flagList",
				meta: { auth: true, code: "admin_student_flag" },
				component: flag_list
			},
			{
				path: "flag-add",
				name: "flagAdd",
				meta: { auth: true, code: "admin_student_flag" },
				component: flag_add
			},
			{
				path: "flag-edit",
				name: "flagEdit",
				meta: { auth: true, code: "admin_student_flag" },
				component: flag_edit
			},
			{
				path: "exhibition-list",
				name: "exhibitionList",
				meta: { auth: true, code: "admin_student_exhibition" },
				component: exhibition_list
			},
			{
				path: "exhibition-add",
				name: "exhibitionAdd",
				meta: { auth: true, code: "admin_student_exhibition" },
				component: exhibition_add
			},
			{
				path: "exhibition-edit",
				name: "exhibitionEdit",
				meta: { auth: true, code: "admin_student_exhibition" },
				component: exhibition_edit
			},
			{
				path: "graduation-list",
				name: "graduationList",
				meta: { auth: true, code: "admin_student_graduation" },
				component: graduation_list
			},
			{
				path: "graduation-add",
				name: "graduationAdd",
				meta: { auth: true, code: "admin_student_graduation" },
				component: graduation_add
			},
			{
				path: "graduation-edit",
				name: "graduationEdit",
				meta: { auth: true, code: "admin_student_graduation" },
				component: graduation_edit
			},
			{
				path: "pratice-list",
				name: "praticeList",
				meta: { auth: true, code: "admin_parent_pratice" },
				component: pratice_list
			},
			{
				path: "pratice-add",
				name: "praticeAdd",
				meta: { auth: true, code: "admin_parent_pratice" },
				component: pratice_add
			},
			{
				path: "pratice-edit",
				name: "praticeEdit",
				meta: { auth: true, code: "admin_parent_pratice" },
				component: pratice_edit
			},
			{
				path: "knowledge-list",
				name: "knowledgeList",
				meta: { auth: true, code: "admin_parent_knowledge" },
				component: knowledge_list
			},
			{
				path: "knowledge-add",
				name: "knowledgeAdd",
				meta: { auth: true, code: "admin_parent_knowledge" },
				component: knowledge_add
			},
			{
				path: "knowledge-edit",
				name: "knowledgeEdit",
				meta: { auth: true, code: "admin_parent_knowledge" },
				component: knowledge_edit
			},
			{
				path: "communication-list",
				name: "communicationList",
				meta: { auth: true, code: "admin_parent_communication" },
				component: communication_list
			},
			{
				path: "communication-add",
				name: "communicationAdd",
				meta: { auth: true, code: "admin_parent_communication" },
				component: communication_add
			},
			{
				path: "communication-edit",
				name: "communicationEdit",
				meta: { auth: true, code: "admin_parent_communication" },
				component: communication_edit
			},
			{
				path: "display-list",
				name: "displayList",
				meta: { auth: true, code: "admin_school_display" },
				component: display_list
			},
			{
				path: "display-add",
				name: "displayAdd",
				meta: { auth: true, code: "admin_school_display" },
				component: display_add
			},
			{
				path: "display-edit",
				name: "displayEdit",
				meta: { auth: true, code: "admin_school_display" },
				component: display_edit
			},
			{
				path: "idea-list",
				name: "ideaList",
				meta: { auth: true, code: "admin_happy_idea" },
				component: idea_list
			},
			{
				path: "idea-add",
				name: "ideaAdd",
				meta: { auth: true, code: "admin_happy_idea" },
				component: idea_add
			},
			{
				path: "idea-edit",
				name: "ideaEdit",
				meta: { auth: true, code: "admin_happy_idea" },
				component: idea_edit
			},
			{
				path: "speech-list",
				name: "speechList",
				meta: { auth: true, code: "admin_happy_speech" },
				component: speech_list
			},
			{
				path: "speech-add",
				name: "speechAdd",
				meta: { auth: true, code: "admin_happy_speech" },
				component: speech_add
			},
			{
				path: "speech-edit",
				name: "speechEdit",
				meta: { auth: true, code: "admin_happy_speech" },
				component: speech_edit
			},
			{
				path: "exercise-list",
				name: "exerciseList",
				meta: { auth: true, code: "admin_happy_exercise" },
				component: exercise_list
			},
			{
				path: "exercise-add",
				name: "exerciseAdd",
				meta: { auth: true, code: "admin_happy_exercise" },
				component: exercise_add
			},
			{
				path: "exercise-edit",
				name: "exerciseEdit",
				meta: { auth: true, code: "admin_happy_exercise" },
				component: exercise_edit
			},
			{
				path: "guide-list",
				name: "guideList",
				meta: { auth: true, code: "admin_service_guide" },
				component: guide_list
			},
			{
				path: "guide-add",
				name: "guideAdd",
				meta: { auth: true, code: "admin_service_guide" },
				component: guide_add
			},
			{
				path: "guide-edit",
				name: "guideEdit",
				meta: { auth: true, code: "admin_service_guide" },
				component: guide_edit
			},
			{
				path: "guarantee-list",
				name: "guaranteeList",
				meta: { auth: true, code: "admin_service_guarantee" },
				component: guarantee_list
			},
			{
				path: "guarantee-add",
				name: "guaranteeAdd",
				meta: { auth: true, code: "admin_service_guarantee" },
				component: guarantee_add
			},
			{
				path: "guarantee-edit",
				name: "guaranteeEdit",
				meta: { auth: true, code: "admin_service_guarantee" },
				component: guarantee_edit
			},
			{
				path: "computer-list",
				name: "computerList",
				meta: { auth: true, code: "admin_service_computer" },
				component: computer_list
			},
			{
				path: "computer-add",
				name: "computerAdd",
				meta: { auth: true, code: "admin_service_computer" },
				component: computer_add
			},
			{
				path: "computer-edit",
				name: "computerEdit",
				meta: { auth: true, code: "admin_service_computer" },
				component: computer_edit
			},
			{
				path: "department-list",
				name: "departmentList",
				meta: { auth: true, code: "admin_system_department" },
				component: department_list
			},
			{
				path: "account-list",
				name: "accountList",
				meta: { auth: true, code: "admin_system_account" },
				component: account_list
			},
			{
				path: "account-add",
				name: "accountAdd",
				meta: { auth: true, code: "admin_system_account" },
				component: account_add
			},
			{
				path: "account-edit",
				name: "accountEdit",
				meta: { auth: true, code: "admin_system_account" },
				code: "",
				component: account_edit
			}
		]
	}
];
