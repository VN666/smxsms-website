
import index from "@/src/views/index/index";

import admin from "@/src/admin/index";
import login from "@/src/views/login/index";

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
		path: "/login",
		component: login
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
	},
	{
		path: "/education",
		component: education,
		children: [
			{
				path: "",
				redirect: "research-list"
			},
			{
				path: "research-list",
				name: "educationResearchList",
				component: education_research_list
			},
			{
				path: "research-detail",
				name: "educationResearchDetail",
				component: education_research_detail
			},
			{
				path: "summary-list",
				name: "educationSummaryList",
				component: education_summary_list
			},
			{
				path: "summary-detail",
				name: "educationSummaryDetail",
				component:education_summary_detail
			},
			{
				path: "case-list",
				name: "educationCaseList",
				component: education_case_list
			},
			{
				path: "case-detail",
				name: "educationCaseDetail",
				component: education_case_detail
			},
			{
				path: "feature-list",
				name: "educationFeatureList",
				component: education_feature_list
			},
			{
				path: "feature-detail",
				name: "educationFeatureDetail",
				component: education_feature_detail
			},
			{
				path: "paper-list",
				name: "educationPaperList",
				component: education_paper_list
			},
			{
				path: "paper-detail",
				name: "educationPaperDetail",
				component: education_paper_detail
			},
			{
				path: "ppt-list",
				name: "educationPptList",
				component: education_ppt_list
			},
			{
				path: "ppt-detail",
				name: "educationPptDetail",
				component: education_ppt_detail
			}
		]
	},
	{
		path: "/student",
		component: student,
		children: [
			{
				path: "",
				redirect: "activity-list"
			},
			{
				path: "activity-list",
				name: "studentActivityList",
				component: student_activity_list
			},
			{
				path: "activity-detail",
				name: "studentActivityDetail",
				component: student_activity_detail
			},
			{
				path: "exhibition-list",
				name: "studentExhibitionList",
				component: student_exhibition_list
			},
			{
				path: "exhibition-detail",
				name: "studentExhibitionDetail",
				component: student_exhibition_detail
			},
			{
				path: "flag-list",
				name: "studentFlagList",
				component: student_flag_list
			},
			{
				path: "flag-detail",
				name: "studentFlagDetail",
				component: student_flag_detail
			},
			{
				path: "graduation-list",
				name: "studentGraduationList",
				component: student_graduation_list
			},
			{
				path: "graduation-detail",
				name: "studentGraduationDetail",
				component: student_graduation_detail
			},
			{
				path: "prize-list",
				name: "studentPrizeList",
				component: student_prize_list
			},
			{
				path: "prize-detail",
				name: "studentPrizeDetail",
				component: student_prize_detail
			}
		]
	},
	{
		path: "/parent",
		component: parent,
		children: [
			{
				path: "",
				redirect: "pratice-list"
			},
			{
				path: "pratice-list",
				name: "parentPraticeList",
				component: parent_pratice_list
			},
			{
				path: "pratice-detail",
				name: "parentPraticeDetail",
				component: parent_pratice_detail
			},
			{
				path: "communication-list",
				name: "parentCommunicationList",
				component: parent_communication_list
			},
			{
				path: "communication-detail",
				name: "parentCommunicationDetail",
				component: parent_communication_detail
			},
			{
				path: "knowledge-list",
				name: "parentKnowledgeList",
				component: parent_knowledge_list
			},
			{
				path: "knowledge-detail",
				name: "parentKnowledgeDetail",
				component: parent_knowledge_detail
			},
		]
	},
	{
		path: "/school",
		component: school,
		children: [
			{
				path: "",
				redirect: "display-list"
			},
			{
				path: "display-list",
				name: "schoolDisplayList",
				component: school_display_list
			},
			{
				path: "display-detail",
				name: "schoolDisplayDetail",
				component: school_display_detail
			}
		]
	},
	{
		path: "/happy",
		component: happy,
		children: [
			{
				path: "",
				redirect: "idea-list"
			},
			{
				path: "idea-list",
				name: "happyIdeaList",
				component: happy_idea_list
			},
			{
				path: "idea-detail",
				name: "happyIdeaDetail",
				component: happy_idea_detail
			},
			{
				path: "speech-list",
				name: "happySpeechList",
				component: happy_speech_list
			},
			{
				path: "speech-detail",
				name: "happySpeechDetail",
				component: happy_speech_detail
			},
			{
				path: "exercise-list",
				name: "happyExerciseList",
				component: happy_exercise_list
			},
			{
				path: "exercise-detail",
				name: "happyExerciseDetail",
				component: happy_exercise_detail
			},
		]
	},
	{
		path: "/service",
		component: service,
		children: [
			{
				path: "",
				redirect: "guide-list"
			},
			{
				path: "guide-list",
				name: "serviceGuideList",
				component: service_guide_list
			},
			{
				path: "guide-detail",
				name: "serviceGuideDetail",
				component: service_guide_detail
			},
			{
				path: "guarantee-list",
				name: "serviceGuaranteeList",
				component: service_guarantee_list
			},
			{
				path: "guarantee-detail",
				name: "serviceGuaranteeDetail",
				component: service_guarantee_detail
			},
			{
				path: "computer-list",
				name: "serviceComputerList",
				component: service_computer_list
			},
			{
				path: "computer-detail",
				name: "serviceComputerDetail",
				component: service_computer_detail
			}
		]
	}
];
