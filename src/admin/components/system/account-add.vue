<template>
	<div class="account-add">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '网站管理', '账号管理', '添加']"></h-breadcrumb>
		</div>
		<div class="content_wrap">
			<div class="form_wrap">
				<el-form ref="addForm" :form="addForm" :model="addForm" :rules="rules" label-position="right" label-width="70px">
					<el-form-item label="用户名" prop="username">
						<el-input v-model="addForm.username"></el-input>
					</el-form-item>
					<el-form-item label="科室" prop="departmentId">
						<el-select v-model="addForm.departmentId" placeholder="请选择" clearable>
						    <el-option v-for="item in departments" :key="item.value" :label="item.label" :value="item.value"></el-option>
					  	</el-select>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input v-model="addForm.password" show-password></el-input>
					</el-form-item>
					<el-form-item label="密码确认" prop="confirmPassword">
						<el-input v-model="addForm.confirmPassword" show-password></el-input>
					</el-form-item>
					<el-form-item label="权限" prop="auths">
						<el-tree  show-checkbox node-key="code" default-expand-all
							style="margin-top:8px;"
							ref="authTree"
							:props="props"
							:data="auths">
						</el-tree>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="btn_wrap">
			<el-button @click="beforeSubmit" style="padding: 12px 40px;" type="primary" :loading="isSaving">保存</el-button>
			<el-button @click="goBack" style="padding: 12px 40px;">取消</el-button>
		</div>
	</div>
</template>

<script>

export default {
	name: "account-add",
	data () {
		const validUsername = (rule, value, callback) => this.$utils.validUsername(value) ? callback() : callback(new Error("用户名只能包含数字、字母、下划线"));
		const validPassword = (rule, value, callback) => {
			if (!/[a-z]/.test(value)) callback(new Error("密码必须至少包含一个小写字母"));
			if (!/[A-Z]/.test(value)) callback(new Error("密码必须至少包含一个大写字母"));
			if (!/[0-9]/.test(value)) callback(new Error("密码必须至少包含一个数字"));
			if (!/[\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-\<\>\?]/.test(value)) callback(new Error("密码必须至少包含~!@#$%^&*()_+=-<>?中一个特殊字母"));
			callback();
		};
		const isOneCheck = (rule, value, callback) => this.isOneCheck(value).then((res) => res.isOne ? callback() : callback("名称已被占用"));
		const validConfirm = (rule, value, callback) => this.addForm.confirmPassword === this.addForm.password ? callback() : callback(new Error("两次输入密码不一致"));
		return {
			addForm: {
				username: "",
				departmentId: "",
				password: "",
				confirmPassword: "",
				auths: []
			},
			rules: {
				username: [
					{ required: true, message: "用户名不能为空", trigger: "blur" },
					{ min: 4, message: "用户名不能少于4个字符", trigger: "blur" },
					{ max: 16, message: "用户名不能超过16个字符", trigger: "blur" },
					{ validator: validUsername, trigger: "blur" },
					{ validator: isOneCheck, trigger: "blur" }
				],
				departmentId: [
					{ required: true, message: "请选择科室", trigger: "blur" }
				],
				password: [
					{ required: true, message: "密码不能为空", trigger: "blur" },
					{ min: 6, message: "密码不能少于6位", trigger: "blur"  },
					{ max: 18, message: "密码不能超过18位", trigger: "blur" },
					{ validator: validPassword, trigger: "blur" }
				],
				confirmPassword: [
					{ validator: validConfirm, trigger: "blur" }
				],
				auth: [
					{ required: true, message: "请至少选择一个权限", trigger: "blur" }
				]
			},
			props: {
				label: "title",
				children: "children"
			},
			departments: [],
			auths: [],
			isSaving: false
		}
	},
	methods: {
		isOneCheck (username) {
			return this.$http({ method: "post", url: this.$api.system_account_isOne, data: { username: username } });
		},
		requestData () {
			this.$http({ method: "post", url: this.$api.system_account_userData, data: {} }).then((res) => {
				this.departments = res.data.departments.map((item) => ({label: item.name, value: item.id}));
				this.auths = res.data.auths;
			});
		},
		beforeSubmit () {
			this.addForm.auths = this.$refs["authTree"].getCheckedNodes(false, true).map((item) => item.code);
			this.$refs["addForm"].validate((valid) => !!valid ? this.submit() : "");
		},
		submit () {
			this.isSaving = true;
			this.$http({
				method: "post",
				url: this.$api.system_account_add,
				data: this.addForm
			}).then((res) => {
				this.isSaving = false;
				if (res.code === 200) this.$message({ message: res.msg, type: "success", duration: 2000, onClose: this.goBack });
				else this.$message({ message: res.msg, type: "error", duration: 2000 });
			}).catch((err) => this.isSaving = false);
		},
		goBack () {
			this.$router.push({ path: "account-list" });
		}
	},
	mounted () {
		this.requestData();
	}
}

</script>

<style lang="scss" scoped>

.account-add {
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
		width: calc(100% - 32px);
		height: calc(100% - 120px);
		margin-left: auto;
		margin-right: auto;
		overflow-y: auto;
		border-bottom: 1px solid #DDDDDD;
		.form_wrap {
			position: relative;
			height: auto;
			width: 560px;
			margin: 28px 0px 56px;
		}
	}
	.btn_wrap {
		position: relative;
		height: 72px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: auto;
	}
}

</style>
