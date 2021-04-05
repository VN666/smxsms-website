import admin from "./index";

/** 封面背景 */
import admin_bg from "./components/bg/index";
/** 联系我们 */
import admin_contact from "./components/contact/index";
/** 二中概况 */
import profile_content from "./components/about/profile-content";
import concept_content from "./components/about/concept-content";
import proverb_content from "./components/about/proverb-content";
import leader_list from "./components/about/leader-list";
import honor_list from "./components/about/honor-list";
import honor_add from "./components/about/honor-add";
import honor_edit from "./components/about/honor-edit";
/** 教学动态 */
import research_list from "./components/education/research-list";
import research_add from "./components/education/research-add";
import research_edit from "./components/education/research-edit";
/** 德育活动 */
import planning_list from "./components/activity/planning-list";
import planning_add from "./components/activity/planning-add";
import planning_edit from "./components/activity/planning-edit";
import pacesetter_list from "./components/activity/pacesetter-list";
import health_list from "./components/activity/health-list";
import health_add from "./components/activity/health-add";
import health_edit from "./components/activity/health-edit";
import culture_list from "./components/activity/culture-list";
import culture_add from "./components/activity/culture-add";
import culture_edit from "./components/activity/culture-edit";
import teacher_list from "./components/activity/teacher-list";
import teacher_add from "./components/activity/teacher-add";
import teacher_edit from "./components/activity/teacher-edit";
import gym_list from "./components/activity/gym-list";
import gym_add from "./components/activity/gym-add";
import gym_edit from "./components/activity/gym-edit";
/** 校本研修 */
import study_list from "./components/training/study-list";
import study_add from "./components/training/study-add";
import study_edit from "./components/training/study-edit";
/** 为您服务 */
import guarantee_list from "./components/service/guarantee-list";
import guarantee_add from "./components/service/guarantee-add";
import guarantee_edit from "./components/service/guarantee-edit";
import computer_list from "./components/service/computer-list";
import computer_add from "./components/service/computer-add";
import computer_edit from "./components/service/computer-edit";
/** 二中团建 */
import ccyl_list from "./components/group/ccyl-list";
import ccyl_add from "./components/group/ccyl-add";
import ccyl_edit from "./components/group/ccyl-edit";
/** 二中党建 */
import theory_list from "./components/party/theory-list";
import theory_add from "./components/party/theory-add";
import theory_edit from "./components/party/theory-edit";
import construct_list from "./components/party/construct-list";
import construct_add from "./components/party/construct-add";
import construct_edit from "./components/party/construct-edit";
import life_list from "./components/party/life-list";
import life_add from "./components/party/life-add";
import life_edit from "./components/party/life-edit";
import institution_list from "./components/party/institution-list";
import institution_add from "./components/party/institution-add";
import institution_edit from "./components/party/institution-edit";
import book_list from "./components/party/book-list";
import book_add from "./components/party/book-add";
import book_edit from "./components/party/book-edit";
import project_list from "./components/party/project-list";
import project_add from "./components/party/project-add";
import project_edit from "./components/party/project-edit";
import position_list from "./components/party/position-list";
import position_add from "./components/party/position-add";
import position_edit from "./components/party/position-edit";
/** 职工之家 */
import staff_list from "./components/union/staff-list";
import staff_add from "./components/union/staff-add";
import staff_edit from "./components/union/staff-edit";
/** 二中创建 */
import meeting_list from "./components/establish/meeting-list";
import meeting_add from "./components/establish/meeting-add";
import meeting_edit from "./components/establish/meeting-edit";
import classroom_list from "./components/establish/classroom-list";
import classroom_add from "./components/establish/classroom-add";
import classroom_edit from "./components/establish/classroom-edit";
import volunteer_list from "./components/establish/volunteer-list";
import volunteer_add from "./components/establish/volunteer-add";
import volunteer_edit from "./components/establish/volunteer-edit";
import two_list from "./components/establish/two-list";
import two_add from "./components/establish/two-add";
import two_edit from "./components/establish/two-edit";
import practice_list from "./components/establish/practice-list";
import practice_add from "./components/establish/practice-add";
import practice_edit from "./components/establish/practice-edit";
import voice_list from "./components/establish/voice-list";
import voice_add from "./components/establish/voice-add";
import voice_edit from "./components/establish/voice-edit";
/** 二中安法 */
import safe_list from "./components/law/safe-list";
import safe_add from "./components/law/safe-add";
import safe_edit from "./components/law/safe-edit";
/** 网站管理 */
import department_list from "./components/system/department-list";
import account_list from "./components/system/account-list";
import account_add from "./components/system/account-add";


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
				path: "admin-bg",
				name: "adminBg",
				meta: { auth: true, code: "admin_bg" },
				component: admin_bg
			},
			{
				path: "admin-contact",
				name: "adminContact",
				meta: { auth: true, code: "admin_contact" },
				component: admin_contact
			},
			{
				path: "profile-content",
				name: "profileContent",
				meta: { auth: true, code: "admin_about_profile" },
				component: profile_content
			},

			{
				path: "concept-content",
				name: "conceptContent",
				meta: { auth: true, code: "admin_about_concept" },
				component: concept_content
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
				path: "admin-education",
				redirect: "research-list"
			},
			{
				path: "research-list",
				name: "researchList",
				meta: { auth: true, code: "admin_education" },
				component: research_list
			},
			{
				path: "research-add",
				name: "researchAdd",
				meta: { auth: true, code: "admin_education" },
				component: research_add
			},
			{
				path: "research-edit",
				name: "researchEdit",
				meta: { auth: true, code: "admin_education" },
				code: "",
				component: research_edit
			},
			{
				path: "planning-list",
				name: "planningList",
				meta: { auth: true, code: "admin_activity_planning" },
				component: planning_list
			},
			{
				path: "planning-add",
				name: "planningAdd",
				meta: { auth: true, code: "admin_activity_planning" },
				component: planning_add
			},
			{
				path: "planning-edit",
				name: "planningEdit",
				meta: { auth: true, code: "admin_activity_planning" },
				component: planning_edit
			},
			{
				path: "pacesetter-list",
				name: "pacesetterList",
				meta: { auth: true, code: "admin_activity_pacesetter" },
				component: pacesetter_list
			},
			{
				path: "health-list",
				name: "healthList",
				meta: { auth: true, code: "admin_activity_health" },
				component: health_list
			},
			{
				path: "health-add",
				name: "healthAdd",
				meta: { auth: true, code: "admin_activity_health" },
				component: health_add
			},
			{
				path: "health-edit",
				name: "healthEdit",
				meta: { auth: true, code: "admin_activity_health" },
				component: health_edit
			},
			{
				path: "culture-list",
				name: "cultureList",
				meta: { auth: true, code: "admin_activity_culture" },
				component: culture_list
			},
			{
				path: "culture-add",
				name: "cultureAdd",
				meta: { auth: true, code: "admin_activity_culture" },
				component: culture_add
			},
			{
				path: "culture-edit",
				name: "cultureEdit",
				meta: { auth: true, code: "admin_activity_culture" },
				component: culture_edit
			},
			{
				path: "teacher-list",
				name: "teacherList",
				meta: { auth: true, code: "admin_activity_teacher" },
				component: teacher_list
			},
			{
				path: "teacher-add",
				name: "teacherAdd",
				meta: { auth: true, code: "admin_activity_teacher" },
				component: teacher_add
			},
			{
				path: "teacher-edit",
				name: "teacherEdit",
				meta: { auth: true, code: "admin_activity_teacher" },
				component: teacher_edit
			},
			{
				path: "gym-list",
				name: "gymList",
				meta: { auth: true, code: "admin_activity_gym" },
				component: gym_list
			},
			{
				path: "gym-add",
				name: "gymAdd",
				meta: { auth: true, code: "admin_activity_gym" },
				component: gym_add
			},
			{
				path: "gym-edit",
				name: "gymEdit",
				meta: { auth: true, code: "admin_activity_gym" },
				component: gym_edit
			},
			{
				path: "admin-training",
				redirect: "study-list"
			},
			{
				path: "study-list",
				name: "studyList",
				meta: { auth: true, code: "admin_training" },
				component: study_list
			},
			{
				path: "study-add",
				name: "studyAdd",
				meta: { auth: true, code: "admin_training" },
				component: study_add
			},
			{
				path: "study-edit",
				name: "studyEdit",
				meta: { auth: true, code: "admin_training" },
				code: "",
				component: study_edit
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
				path: "admin-group",
				redirect: "ccyl-list"
			},
			{
				path: "ccyl-list",
				name: "ccylList",
				meta: { auth: true, code: "admin_group" },
				component: ccyl_list
			},
			{
				path: "ccyl-add",
				name: "ccylAdd",
				meta: { auth: true, code: "admin_group" },
				component: ccyl_add
			},
			{
				path: "ccyl-edit",
				name: "ccylEdit",
				meta: { auth: true, code: "admin_group" },
				component: ccyl_edit
			},
			{
				path: "theory-list",
				name: "theoryList",
				meta: { auth: true, code: "admin_party_theory" },
				component: theory_list
			},
			{
				path: "theory-add",
				name: "theoryAdd",
				meta: { auth: true, code: "admin_party_theory" },
				component: theory_add
			},
			{
				path: "theory-edit",
				name: "theoryEdit",
				meta: { auth: true, code: "admin_party_theory" },
				component: theory_edit
			},
			{
				path: "construct-list",
				name: "constructList",
				meta: { auth: true, code: "admin_party_construct" },
				component: construct_list
			},
			{
				path: "construct-add",
				name: "constructAdd",
				meta: { auth: true, code: "admin_party_construct" },
				component: construct_add
			},
			{
				path: "construct-edit",
				name: "constructEdit",
				meta: { auth: true, code: "admin_party_construct" },
				component: construct_edit
			},
			{
				path: "life-list",
				name: "lifeList",
				meta: { auth: true, code: "admin_party_life" },
				component: life_list
			},
			{
				path: "life-add",
				name: "lifeAdd",
				meta: { auth: true, code: "admin_party_life" },
				component: life_add
			},
			{
				path: "life-edit",
				name: "lifeEdit",
				meta: { auth: true, code: "admin_party_life" },
				component: life_edit
			},
			{
				path: "institution-list",
				name: "institutionList",
				meta: { auth: true, code: "admin_party_institution" },
				component: institution_list
			},
			{
				path: "institution-add",
				name: "institutionAdd",
				meta: { auth: true, code: "admin_party_institution" },
				component: institution_add
			},
			{
				path: "institution-edit",
				name: "institutionEdit",
				meta: { auth: true, code: "admin_party_institution" },
				component: institution_edit
			},
			{
				path: "book-list",
				name: "bookList",
				meta: { auth: true, code: "admin_party_book" },
				component: book_list
			},
			{
				path: "book-add",
				name: "bookAdd",
				meta: { auth: true, code: "admin_party_book" },
				component: book_add
			},
			{
				path: "book-edit",
				name: "bookEdit",
				meta: { auth: true, code: "admin_party_book" },
				component: book_edit
			},
			{
				path: "project-list",
				name: "projectList",
				meta: { auth: true, code: "admin_party_project" },
				component: project_list
			},
			{
				path: "project-add",
				name: "projectAdd",
				meta: { auth: true, code: "admin_party_project" },
				component: project_add
			},
			{
				path: "project-edit",
				name: "projectEdit",
				meta: { auth: true, code: "admin_party_project" },
				component: project_edit
			},
			{
				path: "position-list",
				name: "positionList",
				meta: { auth: true, code: "admin_party_position" },
				component: position_list
			},
			{
				path: "position-add",
				name: "positionAdd",
				meta: { auth: true, code: "admin_party_position" },
				component: position_add
			},
			{
				path: "position-edit",
				name: "positionEdit",
				meta: { auth: true, code: "admin_party_position" },
				component: position_edit
			},
			{
				path: "admin-union",
				redirect: "staff-list"
			},
			{
				path: "staff-list",
				name: "staffList",
				meta: { auth: true, code: "admin_union" },
				component: staff_list
			},
			{
				path: "staff-add",
				name: "staffAdd",
				meta: { auth: true, code: "admin_union" },
				component: staff_add
			},
			{
				path: "staff-edit",
				name: "staffEdit",
				meta: { auth: true, code: "admin_union" },
				component: staff_edit
			},
			{
				path: "meeting-list",
				name: "meetingList",
				meta: { auth: true, code: "admin_establish_meeting" },
				component: meeting_list
			},
			{
				path: "meeting-add",
				name: "meetingAdd",
				meta: { auth: true, code: "admin_establish_meeting" },
				component: meeting_add
			},
			{
				path: "meeting-edit",
				name: "meetingEdit",
				meta: { auth: true, code: "admin_establish_meeting" },
				component: meeting_edit
			},
			{
				path: "classroom-list",
				name: "classroomList",
				meta: { auth: true, code: "admin_establish_classroom" },
				component: classroom_list
			},
			{
				path: "classroom-add",
				name: "classroomAdd",
				meta: { auth: true, code: "admin_establish_classroom" },
				component: classroom_add
			},
			{
				path: "classroom-edit",
				name: "classroomEdit",
				meta: { auth: true, code: "admin_establish_classroom" },
				component: classroom_edit
			},
			{
				path: "volunteer-list",
				name: "volunteerList",
				meta: { auth: true, code: "admin_establish_volunteer" },
				component: volunteer_list
			},
			{
				path: "volunteer-add",
				name: "volunteerAdd",
				meta: { auth: true, code: "admin_establish_volunteer" },
				component: volunteer_add
			},
			{
				path: "volunteer-edit",
				name: "volunteerEdit",
				meta: { auth: true, code: "admin_establish_volunteer" },
				component: volunteer_edit
			},
			{
				path: "two-list",
				name: "twoList",
				meta: { auth: true, code: "admin_establish_two" },
				component: two_list
			},
			{
				path: "two-add",
				name: "twoAdd",
				meta: { auth: true, code: "admin_establish_two" },
				component: two_add
			},
			{
				path: "two-edit",
				name: "twoEdit",
				meta: { auth: true, code: "admin_establish_two" },
				component: two_edit
			},
			{
				path: "practice-list",
				name: "practiceList",
				meta: { auth: true, code: "admin_establish_practice" },
				component: practice_list
			},
			{
				path: "practice-add",
				name: "practiceAdd",
				meta: { auth: true, code: "admin_establish_practice" },
				component: practice_add
			},
			{
				path: "practice-edit",
				name: "practiceEdit",
				meta: { auth: true, code: "admin_establish_practice" },
				component: practice_edit
			},
			{
				path: "voice-list",
				name: "voiceList",
				meta: { auth: true, code: "admin_establish_voice" },
				component: voice_list
			},
			{
				path: "voice-add",
				name: "voiceAdd",
				meta: { auth: true, code: "admin_establish_voice" },
				component: voice_add
			},
			{
				path: "voice-edit",
				name: "voiceEdit",
				meta: { auth: true, code: "admin_establish_voice" },
				component: voice_edit
			},
			{
				path: "admin-law",
				redirect: "safe-list"
			},
			{
				path: "safe-list",
				name: "safeList",
				meta: { auth: true, code: "admin_law" },
				component: safe_list
			},
			{
				path: "safe-add",
				name: "staffAdd",
				meta: { auth: true, code: "admin_law" },
				component: safe_add
			},
			{
				path: "safe-edit",
				name: "safeEdit",
				meta: { auth: true, code: "admin_law" },
				component: safe_edit
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
			}
		]
	}
];
