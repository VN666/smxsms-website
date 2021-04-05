<template>
	<div class="account_list">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '网站管理', '账号管理', '列表']"></h-breadcrumb>
		</div>

		<div class="option_wrap" ref="option_wrap">
			<el-button type="success" size="mini" @click="goPath('account-add')"><i class="el-icon-plus el-icon--left"></i>新增</el-button>
			<svg @click="tiggerFilter" v-if="!showFilter" t="1568566044267" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10102" width="32" height="32"><path d="M764.3136 270.6944l-167.5776 201.3184v316.0064a135.8848 135.8848 0 1 1-271.7696 0V472.0128L157.3888 270.6944A89.1904 89.1904 0 0 1 225.9456 124.416h469.8112a89.1904 89.1904 0 0 1 68.5568 146.2784z" fill="#666666" p-id="10103"></path><path d="M844.8 533.2992h-179.2a30.72 30.72 0 0 1 0-61.44h179.2a30.72 30.72 0 0 1 0 61.44zM844.8 651.3664h-179.2a30.72 30.72 0 0 1 0-61.44h179.2a30.72 30.72 0 0 1 0 61.44zM844.8 769.4336h-179.2a30.72 30.72 0 0 1 0-61.44h179.2a30.72 30.72 0 0 1 0 61.44z" fill="#666666" p-id="10104"></path></svg>
			<svg @click="tiggerFilter" v-else t="1568566398017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10362" width="32" height="32"><path d="M776.4992 176.4864a88.2688 88.2688 0 0 0-80.7424-51.2H225.9456A89.2416 89.2416 0 0 0 157.3888 271.36l167.5776 201.3696v316.0576a135.8848 135.8848 0 0 0 271.7696 0V472.7296L764.3136 271.36a88.3712 88.3712 0 0 0 12.1856-94.8736z m-59.392 55.6032l-174.6944 209.92a30.72 30.72 0 0 0-7.1168 19.6608v327.168a74.4448 74.4448 0 0 1-148.8896 0V461.6192a30.72 30.72 0 0 0-7.0656-19.6608L204.8 232.0896a27.7504 27.7504 0 0 1 21.2992-45.5168h469.8112a27.7504 27.7504 0 0 1 21.3504 45.5168z" fill="#666666" p-id="10363"></path><path d="M634.88 503.3472a30.72 30.72 0 0 0 30.72 30.72h179.2a30.72 30.72 0 0 0 0-61.44h-179.2a30.72 30.72 0 0 0-30.72 30.72zM844.8 590.6944h-179.2a30.72 30.72 0 0 0 0 61.44h179.2a30.72 30.72 0 0 0 0-61.44zM844.8 708.7616h-179.2a30.72 30.72 0 0 0 0 61.44h179.2a30.72 30.72 0 0 0 0-61.44z" fill="#666666" p-id="10364"></path></svg>
		</div>

		<div class="search_wrap" ref="search_wrap" v-if="showFilter">
			<el-form :inline="true" :model="filters" label-position="right" label-width="80px">
				<el-row>
					<el-col :span="5">
						<el-form-item label="用户名">
							<el-input v-model="filters.username" placeholder="用户名" size="mini" clearable></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="5">
						<el-form-item label="科室">
							<el-select v-model="filters.departmentId" placeholder="请选择" size="mini" clearable>
							    <el-option v-for="item in departments"
							      	:key="item.value"
							      	:label="item.label"
							      	:value="item.value">
							    </el-option>
						  	</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="10" ><el-form-item label="创建日期">
						<el-date-picker v-model="timeValue" type="datetimerange" range-separator="-" size="mini"
					      	value-format="yyyy-MM-dd HH:mm:ss"
					      	start-placeholder="开始日期"
					      	end-placeholder="结束日期"
					      	:editable="false"
					      	@change="timeChange">
					    </el-date-picker>
					</el-form-item></el-col>

					<el-col :span="4">
						<el-form-item style="text-align:right">
							<el-button type="primary" size="mini" @click="requestData">查 询</el-button>
							<el-button size="mini" @click="reset">重 置</el-button>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</div>

		<div class="table_wrap" :style="{height:tableMaxHeight+'px'}" stripe>
			<el-table :data="tableData" height="100%" stripe :header-cell-style="{background:'#F5F5F5',color:'#606266'}" v-loading="loading">
				<el-table-column type="index" label="序号" width="50">
					<template slot-scope="scope">{{ (scope.$index + 1) + (page.pageNo - 1) * page.pageSize }}</template>
				</el-table-column>
				<el-table-column label="用户名" prop="username" width="180" show-overflow-tooltip></el-table-column>
				<el-table-column label="部门" prop="departmentName" width="200" show-overflow-tooltip></el-table-column>
				<el-table-column label="权限" min-width="400" show-overflow-tooltip>
					<template slot-scope="scope">{{ scope.row.authNames.join(",") }}</template>
				</el-table-column>
				<el-table-column label="创建时间" prop="timecreate" width="220" show-overflow-tooltip></el-table-column>
				<el-table-column label="操作" width="210">
					<template slot-scope="scope">
				        <el-button type="text" size="mini" @click="goReset(scope.row, scope.$index)">重置密码</el-button>
				        <el-button type="text" size="mini" @click="beforeDel(scope.row, scope.$index)">删除</el-button>
				     </template>
				</el-table-column>
			</el-table>
		</div>
		<div class="page_wrap" ref="page_wrap">
			<el-pagination
	      		@size-change="handleSizeChange"
	      		@current-change="handlePageChange"
	      		:current-page="page.pageNo"
	      		:page-sizes="[10, 20, 50, 100]"
	      		:page-size="page.pageSize"
	      		layout="total, sizes, prev, pager, next, jumper"
	      		:total="page.total">
	    	</el-pagination>
		</div>

		<el-dialog
	  		title="重置密码"
	  		:modal="false"
	  		:close-on-click-modal="false"
	  		:visible.sync="dialogReset"
	  		width="560px">
	  		<div class="dialogResetPassword">
		  		<el-form :model="addForm" label-position="right" label-width="80px" :rules="rules" ref="addForm">
					<el-row>
						<el-form-item label="密码" prop="password">
							<el-input v-model="addForm.password" placeholder="请输入密码" show-password></el-input>
						</el-form-item>
					</el-row>
					<el-row>
						<el-form-item label="密码确认" prop="confirmPassword">
							<el-input v-model="addForm.confirmPassword" placeholder="请确认密码" show-password></el-input>
						</el-form-item>
					</el-row>
		  		</el-form>
	  		</div>
	  		<span slot="footer" class="dialog-footer">
		    	<el-button @click="dialogReset = false">取 消</el-button>
		    	<el-button type="primary" @click="beforeSubmit" :loading="isSaving">确 定</el-button>
	  		</span>
		</el-dialog>
	</div>
</template>

<script>

export default {
	name: "account_list",
	data () {
		const validPassword = (rule, value, callback) => {
			if (!/[a-z]/.test(value)) callback(new Error("密码必须至少包含一个小写字母"));
			if (!/[A-Z]/.test(value)) callback(new Error("密码必须至少包含一个大写字母"));
			if (!/[0-9]/.test(value)) callback(new Error("密码必须至少包含一个数字"));
			if (!/[\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-\<\>\?]/.test(value)) callback(new Error("密码必须至少包含~!@#$%^&*()_+=-<>?中一个特殊字母"));
			callback();
		};
		const validConfirm = (rule, value, callback) => this.addForm.confirmPassword === this.addForm.password ? callback() : callback(new Error("两次输入密码不一致"));
		return {
			loading: true,
			tableData: [],
			tableMaxHeight: 0,
			showFilter: false,
			timeValue: "",
			page: {
				pageNo: 1,
				pageSize: 20,
				total: 0
			},
			addForm: {
				userName: "",
				departmentId: ""
			},
			filters: {
				username: "",
				departmentId: "",
				startTime: "",
				endTime: ""
			},
			departments: [],
			dialogReset: false,
			addForm: {
				password: "",
				confirmPassword: ""
			},
			rules: {
				password: [
					{ required: true, message: "密码不能为空", trigger: "blur" },
					{ min: 6, message: "密码不能少于6位", trigger: "blur"  },
					{ max: 18, message: "密码不能超过18位", trigger: "blur" },
					{ validator: validPassword, trigger: "blur" }
				],
				confirmPassword: [
					{ validator: validConfirm, trigger: "blur" }
				]
			},
			isSaving: false,
			currentId: ""
		};
	},
	methods: {
		beforeSubmit () {
			this.$refs["addForm"].validate((valid) => !!valid ? this.submit() : "");
		},
		submit () {
			this.isSaving = true;
			this.$http({
				method: "post",
				url: this.$api.system_account_edit,
				data: { id: this.currentId, password: this.addForm.password }
			}).then((res) => {
				this.isSaving = false;
				if (res.code === 200) this.$message({ message: res.msg, type: "success", duration: 2000, onClose: () => this.dialogReset = false });
				else this.$message({ message: res.msg, type: "error", duration: 2000 });
			}).catch((err) => this.isSaving = false);
		},
		tiggerFilter () {
        	this.showFilter = !this.showFilter;
        	this.$nextTick(() => this.resize());
        },
        timeChange () {
			this.filters.startTime = this.timeValue[0];
			this.filters.endTime = this.timeValue[1];
		},
		reset () {
			let keys = Object.keys(this.filters);
			keys.forEach((key) => this.filters[key] = "");
			this.page.pageNo = 1;
			this.requestData();
		},
		showDialogAdd () {},
		goReset (row, id) {
			this.addForm.password = "";
			this.addForm.confirmPassword = "";
			this.currentId = row.uid;
			this.dialogReset = true;
		},
		beforeDel (row, index) {
        	this.$confirm("是否删除该条信息，删除后将无法恢复", "提示", {
        		confirmButtonText: "确定",
        		cancelButtonText: "取消",
        		type: "warning"
        	}).then(() => this.deleteRow(row, index));
        },
        deleteRow (row, index) {
        	this.$http({
				method: "post",
				url: this.$api.system_account_del,
				data: { id: row.uid }
			}).then((res) => {
				if (res.code === 200) {
        			this.$message({ message: res.msg, type: "success", duration: 2000 });
			        if (index === 0) this.page.pageNo = this.page.pageNo > 1 ? this.page.pageNo - 1 : this.page.pageNo;
			        this.requestData();
        		} else this.$message({ message: res.msg, type: "error", duration: 2000 });
			});
        },
		resize () {
			this.tableMaxHeight = this.$el.clientHeight - this.$refs.option_wrap.clientHeight - this.$refs.breadcrumb_wrap.clientHeight - this.$refs.page_wrap.clientHeight - 16;
		},
		handleSizeChange (size) {
            this.page.pageNo = 1;
            this.page.pageSize = size;
            this.requestData();
        },
        handlePageChange (page) {
            this.page.pageNo = page;
            this.requestData();
        },
        requestData () {
			this.loading = true;
			this.$http({
				method: "post",
				url: this.$api.system_account_query,
				data: {
					pageNo: this.page.pageNo,
					pageSize: this.page.pageSize,
					username: this.filters.username,
					departmentId: this.filters.departmentId,
					startTime: this.filters.startTime,
					endTime: this.filters.endTime
				}
			}).then((res) => {
				this.loading = false;
				this.tableData = res.data.list;
				this.page.total = res.data.total;
				this.departments = res.data.departments.map((item) => ({label: item.name, value: item.id}));
			})
		},
		goPath (path) {
			this.$router.push({ path: path });
		}
	},
	mounted () {
		this.resize();
		window.addEventListener("resize", this.resize, false);
		this.requestData();
	}
}

</script>

<style lang="scss" scoped>

.account_list {
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
	.option_wrap {
		position: relative;
		padding: 0px 16px;
		height: 28px;
		margin: 8px 0px;
		svg {
			float: right;
			width: 28px;
			height: 28px;
			cursor: pointer;
		}
	}
	.search_wrap {
		position: relative;
		width: 100%;
		height: auto;
		margin-top: 0px;
		padding: 0px 16px;
		box-sizing: border-box;
		.el-form-item {
			width: 100%;
			margin-bottom: 8px;
			.el-form-item__content {
				width: calc(100% - 80px);
				el-input {
					width: calc(100%);
				}
			}
		}
	}
	.table_wrap {
		padding: 0px 16px;
		.isTop {
			color: #E6A23C;
		}
	}
	.page_wrap {
		position: absolute;
		bottom: 0px;
		height: 48px;
		width: 100%;
		padding: 0px 16px;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}
	.dialogResetPassword {
		position: relative;
		width: 480px;
		height: 100%;
		.file_upload {
			position: relative;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
		}
		.row_head {
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
