import admin from "./index";
import campus_list from "./components/news/campus-list";
import campus_add from "./components/news/campus-add";

export default [
	{
		path: "/admin",
		redirect: "/admin/campus-list",
		component: admin,
		children: [
			{
				path: "campus-list",
				component: campus_list
			},
			{
				path: "campus-add",
				component: campus_add
			}
		]
	}
];
