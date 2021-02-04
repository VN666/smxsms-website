<template>
	<div class="login" :style="{height:h,width:w}">
		<div class="login-form">
			<h1>后台登录</h1>
			<div class="error" v-if="error"><img src="../../assets/icons/error.png">{{error}}</div>
			<div class="row row1">
				<el-input v-model="loginForm.username" placeholder="请输入用户名" @blur="ipCheck" @keyup.enter.native="beforeSubmit"></el-input>
			</div>
			<div class="row row2">
				<el-input v-model="loginForm.password" placeholder="请输入密码" show-password @blur="ipCheck" @keyup.enter.native="beforeSubmit"></el-input>
			</div>
			<div  class="row row3" v-if="isSlide">
				<h-slide @slide-check="slideCheck" ref="slideCheck"></h-slide>
			</div>
			<div class="row row4">
				<el-button @click="beforeSubmit" type="primary" style="padding: 12px 186px;" :loading="loading">登录</el-button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	username: "login",
	data () {
		return {
			loginForm: {
				username: "",
				password: "",
				slideCode: false
			},
			error: "",
			loading: false,
			isSlide: false
		};
	},
	created () {
		this.resize();
		window.addEventListener("resize", this.resize, false);
	},
	beforeDestory () {
		window.removeEventListener("resize", this.resize, false);
	},
	methods: {
		ipCheck () {
			this.$http({
				method: "post",
				url: this.$api.login_ip_check,
			}).then((res) => {
				if (res.code === 405) {
					this.isSlide = true;
				} else {
					this.isSlide = false;
				}
			});
		},
		resize () {
			this.h = document.documentElement.clientHeight + "px";
			this.w = document.documentElement.clientWidth + "px";
		},
		slideCheck (bool) {
			this.loginForm.slideCode = bool;
			if (this.loginForm.slideCode) {
				this.$http({
					method: "post",
					url: this.$api.login_get_slideCode
				}).then((res) => {
					this.loginForm.slideCode = res.result;
				})
			}
		},
		beforeSubmit () {
			console.log(this.$api.login_get_token);
			if (this.loginForm.username === "") {
				this.error = "请输入用户名";
			} else if (this.loginForm.password === "") {
				this.error = "请输入密码";
			} else {
				this.submit();
			}
		},
		submit () {
			this.loading = true;
			this.$http({
				method: "post",
				url: this.$api.login,
				data: {
					username: this.loginForm.username,
					password: this.$utils.encodeBase64(this.loginForm.password),
					slideCode: this.loginForm.slideCode
				}
			}).then((res) => {
				this.loading = false;
				this.loginForm.slideCode = ""
				if (res.code === 200) {
					this.$message({ message: res.msg, type: "success", duration: 3000 });
					this.getToken();
				} else {
					if (this.$refs.slideCheck) this.$refs.slideCheck.reload();
					if (res.code === 405) {
						this.isSlide = true;
					}
					if (res.code === 406) {
						this.isSlide = false;
					}

					this.error = res.msg;
				}
			});
		},
		getToken () {
			this.$http({
				method: "post",
				url: this.$api.login_get_token,
				data: {
					username: this.loginForm.username
				}
			}).then((res) => {
				const { token, refresh_token, expiresIn } = res.result;
				localStorage.setItem("token", token);
				localStorage.setItem("refresh_token", refresh_token);
				localStorage.setItem("token_expiresIn", expiresIn);
				localStorage.setItem("username", this.loginForm.username);
				this.$router.push({ path: "/admin" });
			}).catch((err) => {
				this.$message({ message: "获取Token失败，请重新登录", type: "error", duration: 3000 });
			});
		}
	}
}

</script>

<style lang="scss">

.login {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	min-height: 600px;
	.login-form {
		position: relative;
		width: 480px;
		height: auto;
		margin: 10% auto;
		border: 1px solid #DCDFE6;
		border-radius: 5px;
		box-shadow: 0 0 5px #909399;
		padding: 35px 35px 15px 35px;
		.error {
			position: relative;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			img {
				margin-right: 2px;
			}
			color: #EC7472;
		}
		.row {
			position: relative;
			width: 400px;
			height: 40px;
			margin: 24px auto;
			&.row1 {
				margin-top: 2px;
			}
			&.row3 {
				height: 40px;
			}
			&.row4 {
				margin-top: 36px;
			}
		}
	}
}

</style>
