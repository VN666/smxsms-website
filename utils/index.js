import util from "./util.js";
import Vue from "vue";

const install = (Vue) => {
	Vue.prototype.$utils = util;
}

export default install;
