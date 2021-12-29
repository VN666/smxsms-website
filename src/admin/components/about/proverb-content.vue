<template>
	<div class="proverb_content">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '学校概况', '校长寄语', '编辑']"></h-breadcrumb>
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
								v-if="showTinymce"
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
			showTinymce: false,
			addForm: {
				timecreate: "",
				content: "",
				picSrc: [],
				removeSrc: [],
				id: "",
				headSrc: "",
				publisher: localStorage.getItem("username")
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
			isSaving: false,
			tempSrc: []
		}
	},
	methods: {
		beforeUpload (file, fileList) {
        	const ext = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length);
			const accept = ["png", "jpeg", "jpg", "gif", "svg", "webp", "JPEG"];
			if (!accept.includes(ext)) {
				this.$message({	message: `只接受${accept.join("、")}格式文件`, type: "error", duration: 3000 });
			} else if (file.size > 10485760) {
				this.$message({	message: `文件大小超过10M`, type: "error", duration: 3000 });
			} else {
				let formData = new FormData();
				formData.append("file", file.raw);
				this.$http({
					method: "post",
					url: this.$api.imgs_upload,
					reqType: "formData",
					data: formData
				}).then((res) => {
					if (!!res.url) {
						if (this.addForm.headSrc) this.addForm.removeSrc.push(this.addForm.headSrc);
						this.addForm.headSrc = res.url;
						this.$message({ message: "上传成功", type: "success", duration: 3000 });
					} else this.$message.warning("上传失败");
				}).catch((err) => this.$message.warning(err.message));
			}
        },
		getPicSrc (src) {
			this.tempSrc.push(src);
		},
		resize () {
			this.hTinymceHeight = this.$el.clientHeight - this.$refs.breadcrumb_wrap.clientHeight - 119 - this.$refs.row4.$el.clientHeight - 56;
			this.hTinymceWidth = this.$CST.TINYMCE_WIDTH;
		},
		cancel () {
			this.requestData();
		},
		beforeSubmit () {
			this.$refs["addForm"].validate((valid) => {
				if (valid) {
					this.addForm.picSrc = this.$utils.sweepPicsrc(this.addForm.content, this.tempSrc).picSrc;
					this.addForm.removeSrc = [...this.$utils.sweepPicsrc(this.addForm.content, this.tempSrc).removeSrc, ...this.addForm.removeSrc];
					this.submit();
				} else return false;
			});
		},
		async submit () {
			this.isSaving = true;
			this.$http({
				method: "post",
				url: this.$api.about_proverb_edit,
				data: this.addForm
			}).then((res) => {
				this.isSaving = false;
				if (res.code === 200) this.$message({ message: res.msg, type: "success", duration: 2000, onClose: this.goBack });
				else this.$message({ message: res.msg, type: "error", duration: 2000 });
			}).catch((err) => this.isSaving = false);
		},
		requestData (id) {
			this.$http({
				method: "post",
				url: this.$api.about_proverb_queryById,
				data: { id: id, addViews: false }
			}).then((res) => {
				this.addForm = res.data;
				this.addForm.removeSrc = [];
				this.tempSrc = res.data.picSrc.slice(0);
				this.showTinymce = true;
			}).catch((err) => {
				this.$message({	message: err, type: "error", duration: 2000	});
			});
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
