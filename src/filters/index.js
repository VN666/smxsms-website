import Vue from "vue";
import { bgFilter } from "./bgFilter.js";
import { timeCut } from "./timeCut.js";

Vue.filter("bgFilter", bgFilter);
Vue.filter("timeCut", timeCut);

