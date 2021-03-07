<template>
	<div>
		<textarea class="h_tinymce" :id="id"></textarea>
		<el-dialog title=""
			custom-class="tinymceModal"
			:visible.sync="progressVisible"
			:fullscreen="true"
			:append-to-body="true"
			:show-close="false">
			<div class="progress-wrap">
				<div class="text"><h3>{{ progressText }}</h3></div>
				<el-progress :text-inside="true" :stroke-width="26" :percentage="progress"></el-progress>
			</div>
		</el-dialog>
	</div>

</template>

<script>

import Tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme.min.js";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/icons/default";
import "tinymce/plugins/image";
import "tinymce/plugins/imagetools";
import "tinymce/plugins/table";
import "tinymce/plugins/autoresize";
import "@/src/components/zh_CN.js";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/print";
import "tinymce/plugins/preview";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/autolink";
import "tinymce/plugins/directionality";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/template";
import "tinymce/plugins/codesample";
import "tinymce/plugins/charmap";
import "tinymce/plugins/hr";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/anchor";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/advlist";
import "tinymce/plugins/textpattern";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/lists";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";
import axios from "axios";
import "@/src/assets/js/media.js";

export default {
	name: "hTinymce",
	data () {
		const Id = Date.now().toString();
		return {
			id: Id,
			data: "",
			progressVisible: false,
			loaded: 0,
			total: 100
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

	watch: {
		height () {
			this.init();
		}
	},
	methods: {
		init () {
			Tinymce.init({
                language: 'zh_CN',
				selector: "#" + this.id,
				plugins: "print preview lineheight searchreplace autolink fullscreen image media link code codesample table charmap hr nonbreaking anchor advlist lists textpattern imagetools",
				toolbar: "formatselect fontselect fontsizeselect lineheight code undo redo restoredraft cut copy forecolor backcolor bold italic underline strikethrough link alignleft aligncenter alignright alignjustify bullist numlist blockquote subscript superscript removeformat table image media charmap hr print paste outdent indent preview fullscreen",
				fontsize_formats: "8px 10px 12px 14px 16px 18px 20px 22px 24px 36px 48px 56px 72px",
                font_formats: "微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings",
                lineheight_formats: "8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 26pt 36pt",
				resize: true,
				statusbar: false,
				setup: (editor) => {
					editor.on("change", () => {
						this.$emit('input', Tinymce.get(this.id).getContent({formate: "html"}));
					});
				},
				width: this.width,
				height: this.height,
  				init_instance_callback: function (inst) { inst.execCommand('mceAutoResize'); },
			    style_formats_merge: true,
			    style_formats_autohide: true,
			    paste_data_images: true,
			    content_style: "img { max-width: 1008px; }",
			    paste_postprocess: (editor, fragment) => {
			    	const allDivs = fragment.node.getElementsByTagName("div");
			    	const allSpans = fragment.node.getElementsByTagName("span");
			    	const allTables= fragment.node.getElementsByTagName("table");
			    	const allP = fragment.node.getElementsByTagName("p");
			    	const allImg = fragment.node.getElementsByTagName("img");
			    	allImg.style["max-width"] = "1008px";
			    	[allDivs, allSpans, allTables, allP].forEach((tag) => {
			    		tag.forEach((item) => {
			    			item.style["background-color"] = "#F2F2F2";
			    		});
			    	});
			    },
				images_upload_handler: (blobInfo, success, failure) => {
					if (blobInfo.filename().includes("-oss-")) {
						this.$message.warning(`文件名中不能包含-oss-,请修改文件名`);
						failure();
						return;
					}
					this.$message({message: "建议图片最大宽度不要超过1008", type: "warning", duration: 3000});
					let formData = new FormData();
					formData.append("file", blobInfo.blob());
					this.$http({
						method: "post",
						url: this.$api.imgs_upload,
						reqType: "formData",
						data: formData
					}).then((res) => {
						this.$emit("getPicSrc", res.url);
						success(res.url);
					}).catch((e) => failure(e));
				},
				file_picker_callback: (callback, value, meta) => {
					if (meta.filetype === "media") {
						const input = document.createElement("input");
						input.setAttribute("type", "file");
						const _this = this;
						input.onchange = function () {
							let file = this.files[0];
							if (file.type !== "video/mp4") _this.$message.warning(`请选择MP4文件进行上传`);
							else if (file.name.includes("-oss-")) _this.$message.warning(`文件名中不能包含-oss-,请修改文件名`);
							else _this.uploadMedia(file).then((res) => {
								_this.loaded = 0;
								_this.total = 1;
								_this.progressVisible = false;
								_this.$emit("getPicSrc", res.url);
								callback(res.url);
							}).catch((err) => {
								_this.loaded = 0;
								_this.total = 1;
								_this.progressVisible = false;
								_this.$message.error("上传失败，请重新上传");
							});
						}
						input.click();
					}
				},
				media_live_embeds: true,
				file_picker_types: "media",
				images_upload_credentias: true,
				relative_urls: false,
    			remove_script_host: false,
			}).then(() => Tinymce.get(this.id).setContent(this.value))
		},
		uploadMedia (file) {
			this.progressVisible = true;
			const formDate = new FormData();
			formDate.append("file", file);
			return new Promise((resolve, reject) => {
				this.$http({
					method: "post",
					url: this.$api.media_upload,
					reqType: "formDate",
					data: formDate,
					onUploadProgress: (progressEvent) => {
	                    this.loaded = progressEvent.loaded;
	                    this.total = progressEvent.total;
	                }
				}).then((res) => resolve(res)).catch((err) => reject(err));
			});
		}
	},
	computed: {
		progress () {
			const percentage =  Math.round(this.loaded * 100 / this.total);

			return percentage < 99 ? Math.round(this.loaded * 100 / this.total) : 99;
		},
		progressText () {
			return this.progress < 99 ? "视频上传中，请耐心等待..." : "上传完成，正在写入服务器...";
		}
	}
};

</script>

<style lang="scss" scoped>
	.h_tinymce {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.tinymceModal {
		background-color: rgba(0, 0, 0, 0.5);
	}
	.progress-wrap {
		position: absolute;
		width: 500px;
		height: 500px;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
