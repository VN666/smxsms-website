import hNavigator from "./src/h-navigator.vue";

hNavigator.install = (Vue) => {
    Vue.component(hNavigator.name, hNavigator);
};

export default hNavigator;
