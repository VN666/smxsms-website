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
/** 职工之家 */
import staff_list from "./components/union/staff-list";
import staff_add from "./components/union/staff-add";
import staff_edit from "./components/union/staff-edit";
/** 二中安法 */
import safe_list from "./components/law/safe-list";
import safe_add from "./components/law/safe-add";
import safe_edit from "./components/law/safe-edit";

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
