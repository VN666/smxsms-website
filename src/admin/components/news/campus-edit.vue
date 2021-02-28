<template>
	<div class="campus_edit">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '新闻动态', '新闻快讯', '编辑']"></h-breadcrumb>
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
						<el-form-item label="副标题">
							<el-input v-model="addForm.subTitle"></el-input>
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
					<el-col :span="8">
						<el-form-item label="来源">
							<el-input v-model="addForm.origin"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="来源描述">
							<el-input v-model="addForm.originDes"></el-input>
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
								v-if="showTinymce"
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

import axios from "axios";

export default {
	name: "campus_edit",
	data () {
		return {
			category: "news",
			labelPosition: "left",
			hTinymceHeight: 0,
			hTinymceWidth: 0,
			showTinymce: false,
			addForm: {
				headline: "",
				subTitle: "",
				author: "",
				timecreate: "",
				publisher: localStorage.getItem("username"),
				origin: "",
				originDes: "",
				isTop: "",
				content: "",
				picSrc: [],
				removeSrc: [],
				id: ""
			},
			rules: {
				headline: [
					{ required: true, message: "标题不能为空", trigger: "blur" },
				],
				author: [
					{ required: true, message: "作者不能为空", trigger: "blur" }
				],
				content: [
					{ required: true, message: "正文不能为空", trigger: "blur" }
				]
			},
			isSaving: false,
			id: "",
			tempSrc: []
		};
	},
	mounted () {
		this.resize();
		window.addEventListener("resize", this.resize, false);
		this.id = this.$route.params.id || localStorage.getItem("detailId");
		localStorage.setItem("detailId", this.id);
		this.requestData(this.id);
	},
	beforeDestroy () {
		window.removeEventListener("resize", this.resize, false);
	},
	methods: {
		getPicSrc (src) {
			this.tempSrc.push(src);
		},
		resize () {
			this.hTinymceHeight = this.$el.clientHeight - this.$refs.breadcrumb_wrap.clientHeight - this.$refs.row1.$el.clientHeight - this.$refs.row2.$el.clientHeight - this.$refs.row3.$el.clientHeight - this.$refs.row4.$el.clientHeight - 56;
			this.hTinymceWidth = this.$CST.TINYMCE_WIDTH;
		},
		goBack () {
			this.$router.push({ path: "campus-list" });
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
				url: this.$api.news_campus_edit,
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
				url: this.$api.news_campus_queryById,
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
	}
}

</script>

<style lang="scss">
	.campus_edit {
		position: relative;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
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
