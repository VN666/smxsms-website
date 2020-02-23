<template>
	<div class="h_tinymce" :id="id" :style="{height:`${height}px`, width: `${width}px`}">
	</div>
</template>

<script>

import Tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme.min.js";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/plugins/image";
import "tinymce/plugins/imagetools";
import "tinymce/plugins/table";
import "tinymce/plugins/autoresize";
import "@/src/components/zh_CN.js";
import axios from "axios";

export default {
	name: "hTinymce",
	data () {
		const Id = Date.now().toString();
		return {
			id: Id,
			data: ""
		};
	},
	props: {
		width: {
			type: Number,
			default: 0
		},
		height: {
			type: Number,
			default: 0
		},
		value: {
			type: String,
			default: ""
		},
		category: {
			type: String,
			default: ""
		}
	},
	mounted () {
		this.$nextTick(() => this.init());
	},
	activated () {
		this.init();
	},
	deactivated () {
		this.init();
	},
	destroyed () {
		this.init();
	},
	watch: {
		value (val) {
			this.$nextTick(() => Tinymce.get(this.id).setContent(val));
		}
	},
	methods: {
		init () {
			Tinymce.init({
				selector: "#" + this.id,
				language_url: "./zh_CN.js",
				language: "zh_CN",
				plugins: "image imagetools table",
				toolbar: "bold italic underline strikethrough alignleft aligncenter alignright alignjustify formatselect fontselect fontsizeselect cut copy paste bullist numlist outdent indent blockquote undo redo removeformat subscript superscript image forecolor backcolor table",
				resize: true,
				statusbar: false,
				setup: (editor) => {
					editor.on("change", () => {
						this.$emit('input', Tinymce.get(this.id).getContent({formate: "html"}));
					});
				},
				width: this.width,
				height: this.height,
				autoresize_max_height: this.height * 2,
        		autoresize_min_height: this.height,
        		/*style_formats: [
			        {title: '背景颜色', block: 'span', styles: {'background-color': '#F2F2F2'}},
			    ],
			    content_style: `
					span {background-color: #F2F2F2}
			    `,*/
			    style_formats_merge: true,
			    style_formats_autohide: true,
			    paste_data_images: true,
			    paste_postprocess: (editor, fragment) => {
			    	const allDivs = fragment.node.getElementsByTagName("div");
			    	const allSpans = fragment.node.getElementsByTagName("span");
			    	const allTables= fragment.node.getElementsByTagName("table");
			    	const allP = fragment.node.getElementsByTagName("p");
			    	[allDivs, allSpans, allTables, allP].forEach((tag) => {
			    		tag.forEach((item) => {
			    			item.style["background-color"] = "#F2F2F2";
			    		});
			    	});
			    },
				images_upload_handler: (blobInfo, success, failure) => {
					this.$message({message: "建议图片最大宽度不要超过1008", type: "warning", duration: 3000});
					let formData = new FormData();
					const headerConfig = { headers: { 'Content-Type': 'multipart/form-data' }};
					formData.append("file", blobInfo.blob());
					formData.append("category", this.category);
					axios.post(this.$api.imgs_upload, formData, headerConfig).then((res) => {
						this.$emit("getPicSrc", res.data.url);
						success(res.data.url);
					});
				},
				images_upload_credentias: true
			});
		}
	}
};

</script>

<style type="text/css">
	.h_tinymce {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
