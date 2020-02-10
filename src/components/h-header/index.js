import hHeader from "./src/h-header.vue";

hHeader.install = (Vue) => {
    Vue.component(hHeader.name, hHeader);
};

export default hHeader;
