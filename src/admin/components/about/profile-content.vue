<template>
	<div class="profile_content">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '关于二中', '学校简介', '编辑']"></h-breadcrumb>
		</div>

		<div class="content_wrap">
			<el-form ref="addForm" :form="addForm" :model="addForm" :rules="rules" label-position="right" label-width="70px">
				<el-row>
					<el-form-item label="正文" prop="content">
						<div class="content_inner" :style="{minHeight:`${hTinymceHeight}px`,width: `${hTinymceWidth}px`}">
							<h-tinymce
								:width="hTinymceWidth"
								:height="hTinymceHeight"
								ref="hTinymce"
								v-model="addForm.content"
								v-if="addForm.content"
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
	name: "profile_content",
	data () {
		return {
			category: "about",
			labelPosition: "left",
			hTinymceHeight: 0,
			hTinymceWidth: 0,
			addForm: {
				timecreate: "",
				content: "",
				picSrc: "",
				tempSrc: "",
				id: ""
			},
			rules: {
				content: [
					{ required: true, message: "正文不能为空", trigger: "blur" }
				]
			},
			isSaving: false
		}
	},
	methods: {
		getPicSrc (src) {
			this.addForm.picSrc.push(src);
		},
		resize () {
			this.hTinymceHeight = this.$el.clientHeight - this.$refs.breadcrumb_wrap.clientHeight - this.$refs.row4.$el.clientHeight - 56;
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
				url: this.$api.about_profile_edit
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
				url: this.$api.about_profile_queryById,
				data: {
					addViews: false
				}
			}).then((res) => {
				this.addForm = res.data;
				this.addForm.tempHeadSrc = res.data.headSrc;
				this.addForm.tempSrc = res.data.picSrc.slice(0);
				this.addForm.category = this.category;
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

.profile_content {
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
	}
}

</style>
