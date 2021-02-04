<template>
	<div class="flag-add">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '学生天地', '纪律卫生', '新增']"></h-breadcrumb>
		</div>

		<div class="content_wrap">
			<el-form ref="addForm" :form="addForm" :model="addForm" :rules="rules" label-position="right" label-width="70px">
				<el-row :gutter="32" ref="row1">
					<el-col :span="8">
						<el-form-item label="标题" prop="headline">
							<el-input v-model="addForm.headline"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="部门" prop="department">
							<el-input v-model="addForm.department"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="32" ref="row2">
					<el-col :span="4">
						<el-form-item label="作者" prop="author">
							<el-input v-model="addForm.author"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="4">
						<el-form-item label="发布人">
							<el-input v-model="addForm.publisher" disabled></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="5">
						<el-form-item label="日期">
							<el-date-picker v-model="addForm.timecreate" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="4">
						<el-form-item label="是否置顶">
							<el-switch v-model="addForm.isTop" active-color="#13CE66" inactive-color="#DEDEDE"></el-switch>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="32" ref="row3">
					<el-col :span="24">
						<el-form-item label="附件">
							<el-upload
							  	class="file-upload"
							  	action="#"
							  	:auto-upload="false"
							  	:on-change="beforeUpload"
							  	:on-remove="handleFileRemove"
							  	:file-list="addForm.fileList">
							  	<el-tooltip effect="light" content="单个文件大小不能超过10M" placement="top">
							  		<el-button size="small" type="primary">点击上传</el-button>
							  	</el-tooltip>
							</el-upload>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-form-item label="正文" prop="content">
						<div class="content_inner" :style="{minHeight:`${hTinymceHeight}px`,width: `${hTinymceWidth}px`}">
							<h-tinymce
								:width="hTinymceWidth"
								:height="hTinymceHeight"
								ref="hTinymce"
								v-model="addForm.content"
								category="student"
								@getPicSrc="getPicSrc"
							></h-tinymce>
						</div>

					</el-form-item>
				</el-row>
				<el-row ref="row4" style="text-align: center;">
					<el-button @click="beforeSubmit" style="padding: 12px 40px;" type="primary" :loading="isSaving">保存</el-button>
					<el-button @click="goBack" style="padding: 12px 40px;">取消</el-button>
				</el-row>
			</el-form>
		</div>
	</div>
</template>

<script>

export default {
	name: "flag-add",
	data () {
		return {
			hTinymceHeight: 0,
			hTinymceWidth: 0,
			addForm: {
				headline: "",
				department: "",
				author: "",
				publisher: "admin",
				timecreate: this.$utils.timeFormate(new Date()),
				isTop: false,
				content: "",
				picSrc: [],
				fileList: [],
				fileListSrc: [],
				checked: true
			},
			rules: {
				headline: [
					{ required: true, message: "标题不能为空", trigger: "blur" }
				],
				department: [
					{ required: true, message: "部门不能为空", trigger: "blur" }
				],
				author: [
					{ required: true, message: "作者不能为空", trigger: "blur" }
				],
				content: [
					{ required: true, message: "正文不能为空", trigger: "blur" }
				]
			},
			isSaving: false
		};
	},
	methods: {
		resize () {
			this.hTinymceHeight = this.$el.clientHeight - this.$refs.breadcrumb_wrap.clientHeight - this.$refs.row1.$el.clientHeight - this.$refs.row2.$el.clientHeight - this.$refs.row3.$el.clientHeight - this.$refs.row4.$el.clientHeight - 56;
			this.hTinymceWidth = this.$el.clientWidth * 0.9;
		},
		getPicSrc (src) {
			this.addForm.picSrc.push(src);
		},
		goBack () {
			this.$router.push({ path: "flag-list" });
		},
		fileUpload () {
			let formData = new FormData();
			this.addForm.fileList.forEach((item) => formData.append("file", item.raw));
			formData.append("category", "student");
			return this.$http({
				method: "post",
				url: this.$api.files_upload,
				reqType: "formData",
				data: formData
			})
		},
		async submit () {
			this.isSaving = true;
			let upload = await this.fileUpload();
			this.addForm.fileListSrc = upload.url;
			if (upload.code === 200) {
				this.$http({
					method: "post",
					url: this.$api.student_flag_add,
					data: this.addForm
				}).then((res) => {
					this.isSaving = false;
					if (res.code === 200) {
						this.$message({
				          	message: res.msg,
				          	type: "success",
				          	duration: 2000,
				          	onClose: this.goBack
				        });
					} else {
						this.$message({
							message: res.msg,
							type: "error",
							duration: 2000
						});
					}
				}).catch((err) => {
					this.isSaving = false;
				});
			} else {
				this.$message({ message: "保存失败", type: "error", duration: 3000});
			}
		},
		beforeUpload (file, fileList) {
			if (file.size > 10485760) {
				this.addForm.fileList.pop();
				this.$message({	message: "文件大小超过10M", type: "warning", duration: 3000 });
			} else {
				this.addForm.fileList = fileList;
			}
		},
		handleFileRemove (file, fileList) {
			this.addForm.fileList = fileList;
		},
		beforeSubmit () {
			this.$refs["addForm"].validate((valid) => {
				if (valid) {
					this.addForm.picSrc = this.addForm.picSrc.filter((item) => RegExp(item).test(this.addForm.content));
					this.$utils.pickImgSrc(this.addForm.content).forEach((src) => {
						if (!this.addForm.picSrc.includes(src)) this.addForm.picSrc.push(src);
					});
					this.submit();
				} else {
					return false;
				}
			});
		}
	},
	mounted () {
		this.resize();
		window.addEventListener("resize", this.resize, false);
	},
	beforeDestroy () {
		window.removeEventListener("resize", this.resize, false);
	}
}

</script>

<style lang="scss" scoped>
	.flag-add {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
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
			.file-upload {
				position: relative;
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: center;
			}
			.content_inner {
				position: relative;
				border: 1px solid #DCDFE6;
				border-radius: 4px;
				&:focus {
					border-color: #409EFF;
				}
			}
		}
	}
</style>

<style>
	.flag-add .file-upload .el-upload-list {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: center;
		margin-left: 16px;
	}
	.flag-add .file-upload .el-upload-list li {
		margin-right: 8px;
		width: 200px;
		background: #F5F7FA;
	}
	.flag-add .file-upload .el-upload-list li:first-child {
		margin-top: 0px;
	}
</style>
