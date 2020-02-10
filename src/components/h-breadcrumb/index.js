import hBreadcrumb from "./src/h-breadcrumb.vue";

hBreadcrumb.install = (Vue) => {
    Vue.component(hBreadcrumb.name, hBreadcrumb);
};

export default hBreadcrumb;
