import hNotice from "./src/h-notice.vue";

hNotice.install = (Vue) => {
    Vue.component(hNotice.name, hNotice);
};

export default hNotice;
