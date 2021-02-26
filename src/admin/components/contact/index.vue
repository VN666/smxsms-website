<template>
	<div class="contact-index">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '联系我们']"></h-breadcrumb>
		</div>
		<div class="contact-content">
			<div class="content-form">
				<el-form ref="addForm" :form="addForm" :model="addForm" :rules="rules" label-position="right" label-width="100px">
					<el-row ref="row1" class="contact-row">
						<el-col :span="24">
							<el-form-item label="电话" prop="phone">
								<el-input v-model="addForm.phone"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<!-- <el-row ref="row2">
						<el-col :span="24">
							<el-form-item label="邮箱" prop="email">
								<el-input v-model="addForm.email"></el-input>
							</el-form-item>
						</el-col>
					</el-row> -->
					<el-row ref="row3">
						<el-col :span="24">
							<el-form-item label="地址" prop="address">
								<el-input v-model="addForm.address"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row ref="row4">
						<el-col :span="24">
							<el-form-item label="邮编" prop="postCode">
								<el-input v-model="addForm.postCode"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
				<div class="content-btn">
					<el-button @click="edit" style="padding: 12px 40px;" type="primary" :loading="isSaving">保存</el-button>
					<el-button @click="cancel" style="padding: 12px 40px;">取消</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "contactIndex",
	data () {
		return {
			addForm: {
				phone: "",
				// email: "",
				address: "",
				postCode: "",
				id: ""
			},
			rules: {
				phone: [
					{ required: true, message: "电话不能为空", trigger: "blur" },
				],
				email: [
					{ required: true, message: "邮箱不能为空", trigger: "blur" }
				],
				address: [
					{ required: true, message: "地址不能为空", trigger: "blur" }
				],
				postCode: [
					{ required: true, message: "邮政编码不能为空", trigger: "blur"}
				]
			},
			isSaving: false,
			phone: "",
			// email: "",
			address: "",
			postCode: "",
			id: ""
		}

	},
	mounted () {
		this.requestData();
	},
	methods: {
		requestData () {
			this.$http({
				method: "post",
				url: this.$api.news_contact_query
			}).then((res) => {
				this.phone = res.data.phone;
				// this.email = res.data.email;
				this.address = res.data.address;
				this.postCode = res.data.postCode;
				this.addForm = res.data;
			});
		},
		cancel () {
			this.addForm.phone = this.phone;
			// this.addForm.email = this.email;
			this.addForm.address = this.address;
			this.addForm.postCode = this.postCode;
		},
		edit () {
			this.$http({
				method: "post",
				url: this.$api.news_contact_update,
				data: this.addForm
			}).then((res) => {
				if (res.code === 200) {
					this.$message({	message: "保存成功", type: "success", duration: 3000 });
				} else {
					this.$message({ message: "保存失败", type: "error", duration: 3000 });
				}
			})
		}

	}
}

</script>

<style lang="scss" scoped>

.contact-index {
	position: relative;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	box-sizing: border-box;
	.breadcrumb_wrap {
		position: relative;
		height: 48px;
		line-height: 48px;
		width: 100%;
		padding: 6px 16px;
		box-sizing: border-box;
	}
	.contact-content {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translateY(-20%);
		.content-form {
			position: relative;
			height: auto;
			width: 40%;
			min-width: 640px;
			.content-btn {
				position: relative;
				margin-top: 16px;
				text-align: center;
			}
		}
	}
}

</style>
