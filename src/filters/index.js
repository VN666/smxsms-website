import Vue from "vue";
import { bgFilter, removeHtmlTag } from "./bgFilter.js";
import { timeCut } from "./timeCut.js";

Vue.filter("bgFilter", bgFilter);
Vue.filter("removeHtmlTag", removeHtmlTag);
Vue.filter("timeCut", timeCut);
