
import index from "@/src/views/index/index";
import about from "@/src/views/about/index";
import admin from "@/src/admin/index";
import news from "@/src/views/news/index";


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
		component: about
	},
	{
		path: "/news/:index",
		component: news
	}
];
