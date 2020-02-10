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
			console.log(val);
			this.$nextTick(() => Tinymce.get(this.id).setContent(val));
		}
	},
	methods: {
		init () {
			const _this = this;
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
				images_upload_handler: (blobInfo, success, failure) => {
					let formData = new FormData();
					const headerConfig = { headers: { 'Content-Type': 'multipart/form-data' }};
					formData.append("file", blobInfo.blob());
					axios.post("https://shamiao.xyz/api/upload/news", formData, headerConfig).then((res) => {

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
