import hTinymce from "./src/h-tinymce.vue";

hTinymce.install = (Vue) => {
    Vue.component(hTinymce.name, hTinymce);
};

export default hTinymce;
