import hHonor from "./src/h-honor.vue";

hHonor.install = (Vue) => {
    Vue.component(hHonor.name, hHonor);
};

export default hHonor;
