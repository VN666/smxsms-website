import hPanel from "./src/h-panel.vue";

hPanel.install = (Vue) => {
    Vue.component(hPanel.name, hPanel);
};

export default hPanel;
