import admin_router from "@/src/admin/route.js";

import index from "@/src/views/index/index";

import admin from "@/src/admin/index";
import login from "@/src/views/login/index";
import loginTool from "@/src/views/login/loginTool";

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
/** 教学科研 */
import education from "@/src/views/education/index";
import education_research_list from "@/src/views/education/education-research-list";
import education_research_detail from "@/src/views/education/education-research-detail";
import education_case_list from "@/src/views/education/education-case-list";
import education_case_detail from "@/src/views/education/education-case-detail";
import education_summary_list from "@/src/views/education/education-summary-list";
import education_summary_detail from "@/src/views/education/education-summary-detail";
import education_ppt_list from "@/src/views/education/education-ppt-list";
import education_ppt_detail from "@/src/views/education/education-ppt-detail";
import education_paper_list from "@/src/views/education/education-paper-list";
import education_paper_detail from "@/src/views/education/education-paper-detail";
import education_feature_list from "@/src/views/education/education-feature-list";
import education_feature_detail from "@/src/views/education/education-feature-detail";
/** 学生天地 */
import student from "@/src/views/student/index";
import student_activity_list from "@/src/views/student/student-activity-list";
import student_activity_detail from "@/src/views/student/student-activity-detail";
import student_exhibition_list from "@/src/views/student/student-exhibition-list";
import student_exhibition_detail from "@/src/views/student/student-exhibition-detail";
import student_flag_list from "@/src/views/student/student-flag-list";
import student_flag_detail from "@/src/views/student/student-flag-detail";
import student_graduation_list from "@/src/views/student/student-graduation-list";
import student_graduation_detail from "@/src/views/student/student-graduation-detail";
import student_prize_list from "@/src/views/student/student-prize-list";
import student_prize_detail from "@/src/views/student/student-prize-detail";
/** 家长学校 */
import parent from "@/src/views/parent/index";
import parent_communication_list from "@/src/views/parent/parent-communication-list";
import parent_communication_detail from "@/src/views/parent/parent-communication-detail";
import parent_knowledge_list from "@/src/views/parent/parent-knowledge-list";
import parent_knowledge_detail from "@/src/views/parent/parent-knowledge-detail";
import parent_pratice_list from "@/src/views/parent/parent-pratice-list";
import parent_pratice_detail from "@/src/views/parent/parent-pratice-detail";
/** 七彩校园 */
import school from "@/src/views/school/index";
import school_display_list from "@/src/views/school/school-display-list";
import school_display_detail from "@/src/views/school/school-display-detail";
/** 幸福教育 */
import happy from "@/src/views/happy/index";
import happy_exercise_list from "@/src/views/happy/happy-exercise-list";
import happy_exercise_detail from "@/src/views/happy/happy-exercise-detail";
import happy_idea_list from "@/src//views/happy/happy-idea-list";
import happy_idea_detail from "@/src/views/happy/happy-idea-detail";
import happy_speech_list from "@/src/views/happy/happy-speech-list";
import happy_speech_detail from "@/src/views/happy/happy-speech-detail";
/** 为您服务 */
import service from "@/src/views/service/index";
import service_computer_list from "@/src/views/service/service-computer-list";
import service_computer_detail from "@/src/views/service/service-computer-detail";
import service_guarantee_list from "@/src/views/service/service-guarantee-list";
import service_guarantee_detail from "@/src/views/service/service-guarantee-detail";
import service_guide_list from "@/src/views/service/service-guide-list";
import service_guide_detail from "@/src/views/service/service-guide-detail";

const fe_router = [
	{
  		path: "/",
  		redirect: "/index"
	},
	{
		path: "/index",
		component: index,
		meta: { auth: false, code: "" }
	},
	{
		path: "/login",
		component: login,
		meta: { auth: false, code: "" }
	},
	{
		path: "/loginTool",
		component: loginTool,
		meta: { auth: false, code: "" }
	},
	{
		path: "/about",
		component: about,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "profile-content"
			},
			{
				path: "profile-content",
				name: "aboutProfileContent",
				component: about_profile_content,
				meta: { auth: false, code: "" }
			},
			{
				path: "leader-list",
				name: "aboutLeaderList",
				component: about_leader_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "leader-detail",
				name: "aboutDetail",
				component: about_leader_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "proverb-content",
				name: "aboutProverbContent",
				component: about_proverb_content,
				meta: { auth: false, code: "" }
			},
			{
				path: "organization-content",
				name: "aboutOrganizationContent",
				component: about_organization_content,
				meta: { auth: false, code: "" }
			},
			{
				path: "team-content",
				name: "aboutTeamContent",
				component: about_team_content,
				meta: { auth: false, code: "" }
			},
			{
				path: "outstanding-list",
				name: "aboutOutstandingList",
				component: about_outstanding_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "outstanding-detail",
				name: "aboutOutstandingDetail",
				component: about_outstanding_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "honor-list",
				name: "aboutHonorList",
				component: about_honor_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "honor-detail",
				name: "honorDetail",
				component: about_honor_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "history-content",
				name: "aboutHistoryContent",
				component: about_history_content,
				meta: { auth: false, code: "" }
			},
			{
				path: "landscape-list",
				name: "aboutLandscapeList",
				component: about_landscape_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "landscape-detail",
				name: "aboutLandscapeDetail",
				component: about_landscape_detail,
				meta: { auth: false, code: "" }
			}
		]
	},
	{
		path: "/news",
		component: news,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "campus-list"
			},
			{
				path: "campus-list",
				name: "newsCampusList",
				component: news_campus_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "campus-detail",
				name: "newsCampusDetail",
				component: news_campus_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "notice-list",
				name: "newsNoticeList",
				component: news_notice_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "notice-detail",
				name: "newsNoticeDetail",
				component: news_notice_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "media-list",
				name: "newsMediaList",
				component: news_media_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "media-detail",
				name: "newsMediaDetail",
				component: news_media_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "enroll-list",
				name: "newsEnrollList",
				component: news_enroll_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "enroll-detail",
				name: "newsEnrollDetail",
				component: news_enroll_detail,
				meta: { auth: false, code: "" }
			}
		]
	},
	{
		path: "/group",
		component: group,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "party-list"
			},
			{
				path: "party-list",
				name: "groupPartyList",
				component: group_party_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "party-detail",
				name: "groupPartyDetail",
				component: group_party_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "ccyl-list",
				name: "groupCcylList",
				component: group_ccyl_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "ccyl-detail",
				name: "groupCcylDetail",
				component: group_ccyl_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "union-list",
				name: "groupUnionList",
				component: group_union_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "union-detail",
				name: "groupUnionDetail",
				component: group_union_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "excellent-list",
				name: "groupExcellentList",
				component: group_excellent_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "excellent-detail",
				name: "groupExcellentDetail",
				component: group_excellent_detail,
				meta: { auth: false, code: "" }
			}
		]
	},
	{
		path: "/education",
		component: education,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "research-list"
			},
			{
				path: "research-list",
				name: "educationResearchList",
				component: education_research_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "research-detail",
				name: "educationResearchDetail",
				component: education_research_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "summary-list",
				name: "educationSummaryList",
				component: education_summary_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "summary-detail",
				name: "educationSummaryDetail",
				component:education_summary_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "case-list",
				name: "educationCaseList",
				component: education_case_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "case-detail",
				name: "educationCaseDetail",
				component: education_case_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "feature-list",
				name: "educationFeatureList",
				component: education_feature_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "feature-detail",
				name: "educationFeatureDetail",
				component: education_feature_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "paper-list",
				name: "educationPaperList",
				component: education_paper_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "paper-detail",
				name: "educationPaperDetail",
				component: education_paper_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "ppt-list",
				name: "educationPptList",
				component: education_ppt_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "ppt-detail",
				name: "educationPptDetail",
				component: education_ppt_detail,
				meta: { auth: false, code: "" }
			}
		]
	},
	{
		path: "/student",
		component: student,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "activity-list"
			},
			{
				path: "activity-list",
				name: "studentActivityList",
				component: student_activity_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "activity-detail",
				name: "studentActivityDetail",
				component: student_activity_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "exhibition-list",
				name: "studentExhibitionList",
				component: student_exhibition_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "exhibition-detail",
				name: "studentExhibitionDetail",
				component: student_exhibition_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "flag-list",
				name: "studentFlagList",
				component: student_flag_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "flag-detail",
				name: "studentFlagDetail",
				component: student_flag_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "graduation-list",
				name: "studentGraduationList",
				component: student_graduation_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "graduation-detail",
				name: "studentGraduationDetail",
				component: student_graduation_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "prize-list",
				name: "studentPrizeList",
				component: student_prize_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "prize-detail",
				name: "studentPrizeDetail",
				component: student_prize_detail,
				meta: { auth: false, code: "" }
			}
		]
	},
	{
		path: "/parent",
		component: parent,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "pratice-list"
			},
			{
				path: "pratice-list",
				name: "parentPraticeList",
				component: parent_pratice_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "pratice-detail",
				name: "parentPraticeDetail",
				component: parent_pratice_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "communication-list",
				name: "parentCommunicationList",
				component: parent_communication_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "communication-detail",
				name: "parentCommunicationDetail",
				component: parent_communication_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "knowledge-list",
				name: "parentKnowledgeList",
				component: parent_knowledge_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "knowledge-detail",
				name: "parentKnowledgeDetail",
				component: parent_knowledge_detail,
				meta: { auth: false, code: "" }
			},
		]
	},
	{
		path: "/school",
		component: school,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "display-list"
			},
			{
				path: "display-list",
				name: "schoolDisplayList",
				component: school_display_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "display-detail",
				name: "schoolDisplayDetail",
				component: school_display_detail,
				meta: { auth: false, code: "" }
			}
		]
	},
	{
		path: "/happy",
		component: happy,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "idea-list"
			},
			{
				path: "idea-list",
				name: "happyIdeaList",
				component: happy_idea_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "idea-detail",
				name: "happyIdeaDetail",
				component: happy_idea_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "speech-list",
				name: "happySpeechList",
				component: happy_speech_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "speech-detail",
				name: "happySpeechDetail",
				component: happy_speech_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "exercise-list",
				name: "happyExerciseList",
				component: happy_exercise_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "exercise-detail",
				name: "happyExerciseDetail",
				component: happy_exercise_detail,
				meta: { auth: false, code: "" }
			},
		]
	},
	{
		path: "/service",
		component: service,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "guide-list"
			},
			{
				path: "guide-list",
				name: "serviceGuideList",
				component: service_guide_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "guide-detail",
				name: "serviceGuideDetail",
				component: service_guide_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "guarantee-list",
				name: "serviceGuaranteeList",
				component: service_guarantee_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "guarantee-detail",
				name: "serviceGuaranteeDetail",
				component: service_guarantee_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "computer-list",
				name: "serviceComputerList",
				component: service_computer_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "computer-detail",
				name: "serviceComputerDetail",
				component: service_computer_detail,
				meta: { auth: false, code: "" }
			}
		]
	}
];

const routes = new Set([...fe_router, ...admin_router]);

export default routes;
