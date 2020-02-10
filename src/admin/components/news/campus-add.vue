<template>
	<div class="campus_add">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['新闻动态', '校园快讯', '新增']"></h-breadcrumb>
		</div>

		<div class="content_wrap">
			<el-form ref="addForm" :form="addForm" label-position="right" label-width="70px">
				<el-row :gutter="32" ref="row1">
					<el-col :span="8">
						<el-form-item label="标题">
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
						<el-form-item label="作者">
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
							<el-date-picker v-model="addForm.timecreate" type="datetime" placeholder="选择日期时间"></el-date-picker>
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

					<el-col :span="8">
						<el-form-item label="操作">
							<el-button @click="submit">保存</el-button>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-form-item label="正文">
						<div class="content_inner" :style="{height:`${hTinymceHeight}px`,width: `${hTinymceWidth}px`}">
							<h-tinymce
								:width="hTinymceWidth"
								:height="hTinymceHeight"
								ref="hTinymce"
								v-model="addForm.content"
							></h-tinymce>
						</div>

					</el-form-item>
				</el-row>

			</el-form>
		</div>

	</div>
</template>

<script>

import axios from "axios";

export default {
	name: "campus_add",
	data () {
		return {
			labelPosition: "left",
			hTinymceHeight: 0,
			hTinymceWidth: 80,
			addForm: {
				headline: "",
				subTitle: "",
				author: "",
				timecreate: this.$utils.timeFormate(new Date()),
				publisher: "admin",
				origin: "",
				originDes: "",
				isTop: false,
				content: ""
			}
		};
	},
	mounted () {
		this.resize();
		window.addEventListener("resize", this.resize, false);
	},
	beforeDestroy () {
		window.removeEventListener("resize", this.resize, false);
	},
	methods: {
		resize () {
			this.hTinymceHeight = this.$el.clientHeight - this.$refs.breadcrumb_wrap.clientHeight - this.$refs.row1.$el.clientHeight - this.$refs.row2.$el.clientHeight - this.$refs.row2.$el.clientHeight - 32;
			this.hTinymceWidth = this.$el.clientWidth * 0.9;
		},
		submit () {
			this.$http({
				method: "post",
				data: this.addForm,
				url: this.$api.news_campus_add
			}).then((res) => {
			})
		}
	}
}

</script>

<style lang="scss">
	.campus_add {
		position: relative;
		width: 100%;
		height: 100%;
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
		.edit_wrap {
			position: relative;
			width: 100%;
			height: 400px;
			margin-top: 20px;
			border: 1px solid #DEDEDE;
		}
	}
</style>
