import admin_router from "@/src/admin/route.js";

import index from "@/src/views/index/index";

import admin from "@/src/admin/index";
import login from "@/src/views/login/index";
import loginTool from "@/src/views/login/loginTool";

/** 关于概况 */
import about from "@/src/views/about/index";
import about_profile_content from "@/src/views/about/about-profile-content";
import about_leader_list from "@/src/views/about/about-leader-list";
import about_leader_detail from "@/src/views/about/about-leader-detail";
import about_proverb_content from "@/src/views/about/about-proverb-content";
import about_honor_list from "@/src/views/about/about-honor-list";
import about_honor_detail from "@/src/views/about/about-honor-detail";
import about_school_concept from "@/src/views/about/about-school-concept";
/** 教学科研 */
import education from "@/src/views/education/index";
import education_research_list from "@/src/views/education/education-research-list";
import education_research_detail from "@/src/views/education/education-research-detail";
/** 德育活动 */
import activity from "@/src/views/activity/index";
import activity_planning_list from "@/src/views/activity/activity-planning-list";
import activity_planning_detail from "@/src/views/activity/activity-planning-detail";
import activity_pacesetter_list from "@/src/views/activity/activity-pacesetter-list";
import activity_pacesetter_detail from "@/src/views/activity/activity-pacesetter-detail";
import activity_health_list from "@/src/views/activity/activity-health-list";
import activity_health_detail from "@/src/views/activity/activity-health-detail";
import activity_culture_list from "@/src/views/activity/activity-culture-list";
import activity_culture_detail from "@/src/views/activity/activity-culture-detail";
import activity_teacher_list from "@/src/views/activity/activity-teacher-list";
import activity_teacher_detail from "@/src/views/activity/activity-teacher-detail";
import activity_gym_list from "@/src/views/activity/activity-gym-list";
import activity_gym_detail from "@/src/views/activity/activity-gym-detail";
/** 校本研修 */
import training from "@/src/views/training/index";
import training_study_list from "@/src/views/training/training-study-list";
import training_study_detail from "@/src/views/training/training-study-detail";
/** 为您服务 */
import service from "@/src/views/service/index";
import service_computer_list from "@/src/views/service/service-computer-list";
import service_computer_detail from "@/src/views/service/service-computer-detail";
import service_guarantee_list from "@/src/views/service/service-guarantee-list";
import service_guarantee_detail from "@/src/views/service/service-guarantee-detail";
/** 团建活动 */
import group from "@/src/views/group/index";
import group_ccyl_list from  "@/src/views/group/group-ccyl-list";
import group_ccyl_detail from "@/src/views/group/group-ccyl-detail";
/** 学校党建 */
import party from "@/src/views/party/index";
import party_theory_list from "@/src/views/party/party-theory-list";
import party_theory_detail from "@/src/views/party/party-theory-detail";
import party_construct_list from "@/src/views/party/party-construct-list";
import party_construct_detail from "@/src/views/party/party-construct-detail";
import party_life_list from "@/src/views/party/party-life-list";
import party_life_detail from "@/src/views/party/party-life-detail";
import party_institution_list from "@/src/views/party/party-institution-list";
import party_institution_detail from "@/src/views/party/party-institution-detail";
import party_book_list from "@/src/views/party/party-book-list";
import party_book_detail from "@/src/views/party/party-book-detail";
import party_project_list from "@/src/views/party/party-project-list";
import party_project_detail from "@/src/views/party/party-project-detail";
import party_position_list from "@/src/views/party/party-position-list";
import party_position_detail from "@/src/views/party/party-position-detail";
/** 职工之家 */
import union from "@/src/views/union/index";
import union_staff_list from "@/src/views/union/union-staff-list";
import union_staff_detail from "@/src/views/union/union-staff-detail";
/** 文明创建 */
import establish from "@/src/views/establish/index";
import establish_meeting_list from "@/src/views/establish/establish-meeting-list";
import establish_meeting_detail from "@/src/views/establish/establish-meeting-detail";
import establish_classroom_list from "@/src/views/establish/establish-classroom-list";
import establish_classroom_detail from "@/src/views/establish/establish-classroom-detail";
import establish_volunteer_list from "@/src/views/establish/establish-volunteer-list";
import establish_volunteer_detail from "@/src/views/establish/establish-volunteer-detail";
import establish_two_list from "@/src/views/establish/establish-two-list";
import establish_two_detail from "@/src/views/establish/establish-two-detail";
import establish_practice_list from "@/src/views/establish/establish-practice-list";
import establish_practice_detail from "@/src/views/establish/establish-practice-detail";
import establish_voice_list from "@/src/views/establish/establish-voice-list";
import establish_voice_detail from "@/src/views/establish/establish-voice-detail";


/** 平安校园 */
import law from "@/src/views/law/index";
import law_safe_list from "@/src/views/law/law-safe-list";
import law_safe_detail from "@/src/views/law/law-safe-detail";


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
				redirect: "leader-list"
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
				path: "honor-list",
				name: "aboutHonorList",
				component: about_honor_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "honor-detail",
				name: "aboutHonorDetail",
				component: about_honor_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "school-concept",
				name: "aboutSchoolConcept",
				component: about_school_concept,
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
			}
		]
	},
	{
		path: "/activity",
		component: activity,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "planning-list"
			},
			{
				path: "planning-list",
				name: "activityPlanningList",
				component: activity_planning_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "planning-detail",
				name: "activityPlanningDetail",
				component: activity_planning_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "pacesetter-list",
				name: "activityPacesetterList",
				component: activity_pacesetter_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "pacesetter-detail",
				name: "activityPacesetterDetail",
				component: activity_pacesetter_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "health-list",
				name: "activityHealthList",
				component: activity_health_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "health-detail",
				name: "activityHealthDetail",
				component: activity_health_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "culture-list",
				name: "activityCultureList",
				component: activity_culture_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "culture-detail",
				name: "activityCultureDetail",
				component: activity_culture_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "teacher-list",
				name: "activityTeacherList",
				component: activity_teacher_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "teacher-detail",
				name: "activityTeacherDetail",
				component: activity_teacher_detail,
				meta: { auth: false, code: ""}
			},
			{
				path: "gym-list",
				name: "activityGymList",
				component: activity_gym_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "gym-detail",
				name: "activityGymDetail",
				component: activity_gym_detail,
				meta: { auth: false, code: "" }
			}
		]
	},
	{
		path: "/training",
		component: training,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "study-list"
			},
			{
				path: "study-list",
				name: "trainingStudyList",
				component: training_study_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "study-detail",
				name: "trainingStudyDetail",
				component: training_study_detail,
				meta: { auth: false, code: "" }
			}
		]
	},
	{
		path: "/service",
		component: service,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "guarantee-list"
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
	},
	{
		path: "/group",
		component: group,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "ccyl-list"
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
			}
		]
	},
	{
		path: "/party",
		component: party,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "theory-list"
			},
			{
				path: "theory-list",
				name: "partyTheoryList",
				component: party_theory_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "theory-detail",
				name: "partyTheoryDetail",
				component: party_theory_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "construct-list",
				name: "partyConstructList",
				component: party_construct_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "construct-detail",
				name: "partyConstructDetail",
				component: party_construct_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "life-list",
				name: "partyLifeList",
				component: party_life_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "life-detail",
				name: "partyLifeDetail",
				component: party_life_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "institution-list",
				name: "partyInstitutionList",
				component: party_institution_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "institution-detail",
				name: "partyInstitutionDetail",
				component: party_institution_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "book-list",
				name: "partyBookList",
				component: party_book_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "book-detail",
				name: "partyBookDetail",
				component: party_book_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "project-list",
				name: "partyProjectList",
				component: party_project_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "project-detail",
				name: "partyProjectDetail",
				component :party_project_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "position-list",
				name: "partyPositionList",
				component: party_position_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "position-detail",
				name: "partyPositionDetail",
				component: party_position_detail,
				meta: { auth: false, code: "" }
			}
		]
	},
	{
		path: "/union",
		component: union,
		meta: {  auth: false, code: ""},
		children: [
			{
				path: "",
				redirect: "staff-list"
			},
			{
				path: "staff-list",
				name: "unionStaffList",
				component: union_staff_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "staff-detail",
				name: "unionStaffDetail",
				component: union_staff_detail,
				meta: { auth: false, code: "" }
			}
		]
	},
	{
		path: "/establish",
		component: establish,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "meeting-list"
			},
			{
				path: "meeting-list",
				name: "establishMeetingList",
				component: establish_meeting_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "meeting-detail",
				name: "establishMeetingDetail",
				component: establish_meeting_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "classroom-list",
				name: "establishClassroomList",
				component: establish_classroom_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "classroom-detail",
				name: "establishClassroomDetail",
				component: establish_classroom_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "volunteer-list",
				name: "establishVolunteerList",
				component: establish_volunteer_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "volunteer-detail",
				name: "establishVolunteerDetail",
				component: establish_volunteer_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "two-list",
				name: "establishTwoList",
				component: establish_two_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "two-detail",
				name: "establishTwoDetail",
				component: establish_two_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "practice-list",
				name: "establishPracticeList",
				component: establish_practice_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "practice-detail",
				name: "establishPracticeDetail",
				component: establish_practice_detail,
				meta: { auth: false, code: "" }
			},
			{
				path: "voice-list",
				name: "establishVoiceList",
				component: establish_voice_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "voice-detail",
				name: "establishVoiceDetail",
				component: establish_voice_detail,
				meta: { auth: false, code: "" }
			}
		]
	},
	{
		path: "/law",
		component: law,
		meta: { auth: false, code: "" },
		children: [
			{
				path: "",
				redirect: "safe-list"
			},
			{
				path: "safe-list",
				name: "lawSafeList",
				component: law_safe_list,
				meta: { auth: false, code: "" }
			},
			{
				path: "safe-detail",
				name: "lawSafeDetail",
				component: law_safe_detail,
				mata: { auth: false, code: "" }
			}
		]
	}
];

const routes = new Set([...fe_router, ...admin_router]);

export default routes;
