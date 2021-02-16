<template>
	<div class="proverb_content">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '关于二中', '校长寄语', '编辑']"></h-breadcrumb>
		</div>

		<div class="content_wrap">
			<el-form ref="addForm" :form="addForm" :model="addForm" :rules="rules" label-position="right" label-width="70px">
				<el-row ref="row1" class="row1">
					<el-form-item label="头像" prop="headSrc">
						<el-upload
							class="file_upload"
						  	action=""
						  	:show-file-list="false"
						  	:on-change="beforeUpload"
						  	accept="png"
						  	:auto-upload="false">
						  	<el-button slot="trigger" type="success" size="mini"><i class="el-icon-plus el-icon--left"></i>上传</el-button>
						</el-upload>
					</el-form-item>
					<div class="head_img">
						<img :src="addForm.headSrc" v-if="addForm.headSrc" />
					</div>
				</el-row>
				<el-row style="margin-top: 22px;">
					<el-form-item label="正文" prop="content">
						<div class="content_inner" :style="{minHeight:`${hTinymceHeight}px`,width: `${hTinymceWidth}px`}">
							<h-tinymce
								:width="hTinymceWidth"
								:height="hTinymceHeight"
								ref="hTinymce"
								v-model="addForm.content"
								v-if="addForm.content"
								category="about"
								@getPicSrc="getPicSrc"
							></h-tinymce>
						</div>

					</el-form-item>
				</el-row>
				<el-row ref="row4" style="text-align: center;">
					<el-button @click="beforeSubmit" style="padding: 12px 40px;" type="primary" :loading="isSaving">保存</el-button>
					<el-button @click="cancel" style="padding: 12px 40px;">取消</el-button>
				</el-row>
			</el-form>
		</div>
	</div>
</template>

<script>

export default {
	name: "proverb_content",
	data () {
		return {
			labelPosition: "left",
			hTinymceHeight: 0,
			hTinymceWidth: 0,
			addForm: {
				timecreate: "",
				content: "",
				picSrc: [],
				id: "",
				headSrc: ""
			},
			category: "about",
			rules: {
				content: [
					{ required: true, message: "正文不能为空", trigger: "blur" }
				],
				headSrc: [
					{ required: true, message: "请上传头像", trigger: "blur" }
				]
			},
			isSaving: false
		}
	},
	methods: {
		beforeUpload (file) {
			const ext = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length);
			const accept = ["png", "jpeg", "jpg", "gif", "svg", "webp", "JPEG"];
			if (accept.includes(ext)) {
				this.upload(file);
			} else {
				this.$message({	message: `只接受${accept.join("、")}格式文件`, type: "error", duration: 3000 });
			}
		},
		upload (file) {
			let formData = new FormData();
			formData.append("file", file.raw);
			formData.append("category", "about");
			this.$http({
				method: "post",
				url: this.$api.imgs_upload,
				reqType: "formData",
				data: formData
			}).then((res) => {
				this.addForm.headSrc = res.url;
				this.$message({ message: "上传成功", type: "success", duration: 3000 });
			});
		},
		getPicSrc (src) {
			this.addForm.picSrc.push(src);
		},
		resize () {
			this.hTinymceHeight = this.$el.clientHeight - this.$refs.breadcrumb_wrap.clientHeight - 119 - this.$refs.row4.$el.clientHeight - 56;
			this.hTinymceWidth = this.$el.clientWidth * 0.9;
		},
		cancel () {
			this.requestData();
		},
		beforeSubmit () {
			this.$refs["addForm"].validate((valid) => {
				if (valid) {
					this.addForm.picSrc = this.$utils.filterPicSrc(this.addForm.content, this.addForm.picSrc);
					this.submit();
				} else {
					return false;
				}
			});
		},
		submit () {
			this.isSaving = true;
			this.$http({
				method: "post",
				data: this.addForm,
				url: this.$api.about_proverb_edit
			}).then((res) => {
				this.isSaving = false;
				if (res.code === 200) {
					this.$message({ message: res.msg, type: "success", duration: 2000, onClose: this.goBack });
					this.requestData();
				} else {
					this.$message({	message: res.msg, type: "error", duration: 2000	});
				}
			}).catch((err) => {
				this.isSaving = false;
			});
		},
		requestData () {
			this.$http({
				method: "post",
				url: this.$api.about_proverb_queryById,
				data: {
					addViews: false
				}
			}).then((res) => {
				this.addForm = res.data;
				this.addForm.category = this.category;
				this.addForm.tempSrc = res.data.picSrc.slice(0);
			})
		}
 	},
 	mounted () {
		this.resize();
		window.addEventListener("resize", this.resize, false);
		this.requestData();
	},
	beforeDestroy () {
		window.removeEventListener("resize", this.resize, false);
	}
}

</script>

<style lang="scss" scoped>

.proverb_content {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	.breadcrumb_wrap {
		position: relative;
		height: 48px;
		line-height: 48px;
		width: 100%;
		padding: 6px 16px;
		box-sizing: border-box;
	}
	.content_wrap {
		position: relative;
		width: 100%;
		height: auto;
		overflow-y: auto;
		padding: 16px;

		.content_inner {
			position: relative;
			border: 1px solid #DCDFE6;
			border-radius: 4px;
			&:focus {
				border-color: #409EFF;
			}
		}
		.file_upload {
			position: relative;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
		}
		.row1 {
			display: flex;
			.head_img {
				position: relative;
				height: 90px;
				width: 120px;
				margin-left: 16px;
				margin-top: 7px;
				border: 1px dashed #DCDFE6;
				border-radius: 4px;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}

</style>
