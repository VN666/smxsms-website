<template>
	<div class="department_list">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '网站管理', '科室管理', '列表']"></h-breadcrumb>
		</div>

		<div class="option_wrap" ref="option_wrap">
			<el-button type="success" size="mini" @click="showDialogAdd"><i class="el-icon-plus el-icon--left"></i>新增</el-button>
		</div>

		<div class="table_wrap" :style="{height:tableMaxHeight+'px'}" stripe>
			<el-table :data="tableData" height="100%" stripe :header-cell-style="{background:'#F5F5F5',color:'#606266'}" v-loading="loading">
				<el-table-column type="index" label="序号" width="50">
					<template slot-scope="scope">
						{{ (scope.$index + 1) + (page.pageNo - 1) * page.pageSize }}
					</template>
				</el-table-column>
				<el-table-column label="科室名称" prop="name" width="200" show-overflow-tooltip></el-table-column>
				<el-table-column label="描述" prop="description" min-width="220" show-overflow-tooltip></el-table-column>
				<el-table-column label="创建人" prop="publisher" min-width="120" show-overflow-tooltip></el-table-column>
				<el-table-column label="创建时间" prop="timecreate" width="220" show-overflow-tooltip></el-table-column>
				<el-table-column label="修改时间" prop="timeedit" width="220"></el-table-column>
				<el-table-column label="操作" width="210">
					<template slot-scope="scope">
				        <el-button type="text" size="mini" @click="goEdit(scope.row, scope.$index)">编辑</el-button>
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

		<el-dialog width="560px" title="新增" :modal="false" :close-on-click-modal="false" :visible.sync="dialogAdd">
	  		<div class="dialogAddContent">
		  		<el-form :model="addForm" label-position="right" label-width="80px" :rules="rules" ref="addForm" v-if="dialogAdd">
					<el-row>
						<el-form-item label="科室名称" prop="name">
							<el-input v-model="addForm.name" placeholder="姓名" size="mini" clearable></el-input>
						</el-form-item>
					</el-row>
					<el-row>
						<el-form-item label="描述" prop="description">
							<el-input type="textarea" v-model="addForm.description" placeholder="描述" size="mini" clearable rows="10"></el-input>
						</el-form-item>
					</el-row>
		  		</el-form>
	  		</div>
	  		<span slot="footer" class="dialog-footer">
		    	<el-button @click="dialogAdd = false">取 消</el-button>
		    	<el-button type="primary" @click="beforeSubmit" :loading="isSaving">确 定</el-button>
	  		</span>
		</el-dialog>

		<el-dialog width="560px" title="编辑" :modal="false" :close-on-click-modal="false" :visible.sync="dialogEdit">
	  		<div class="dialogAddContent">
		  		<el-form :model="addForm" label-position="right" label-width="80px" :rules="rules" ref="addForm" v-if="dialogEdit">
		  			<el-row>
						<el-form-item label="" prop="name">
							<el-input v-model="addForm.name" placeholder="科室" size="mini" clearable></el-input>
						</el-form-item>
					</el-row>
					<el-row>
						<el-form-item label="简介" prop="description">
							<el-input type="textarea" v-model="addForm.description" placeholder="描述" size="mini" clearable rows="10"></el-input>
						</el-form-item>
					</el-row>
		  		</el-form>
	  		</div>
	  		<span slot="footer" class="dialog-footer">
		    	<el-button @click="dialogEdit = false">取 消</el-button>
		    	<el-button type="primary" @click="beforeSubmit" :loading="isSaving">确 定</el-button>
	  		</span>
		</el-dialog>
	</div>
</template>

<script>

export default {
	name: "department_list",
	data () {
		const isOneCheck = (rule, value, callback) => this.dialogEdit && this.addForm.name === this.currentRow.name ? callback() : this.isOneCheck(value).then((res) => res.isOne ? callback() : callback("名称已被占用"));
		return {
			loading: true,
			tableData: [],
			tableMaxHeight: 0,
			addForm: {
				name: "",
				id: "",
				description: "",
				timecreate: "",
				editcreate: ""
			},
			dialogAdd: false,
			dialogEdit: false,
			isSaving: false,
			currentRow: null,
			rules: {
				name: [
					{ required: true, message: "姓名不能为空", trigger: "blur" },
					{ max: 32, message: "长度不能超过32个字符", trigger: "blur" },
					{ validator: isOneCheck, trigger: "blur" }
				],
				description: [
					{ max: 64, message: "长度不能超过64个字符", trigger: "blur" }
				]
			},
			page: {
				pageNo: 1,
				pageSize: 20,
				total: 0
			}
		}
	},
	methods: {
		isOneCheck (name) {
			return this.$http({ method: "post", url: this.$api.system_department_isOne, data: { name: name } });
		},
		showDialogAdd () {
			Object.keys(this.addForm).forEach((key) => this.$set(this.addForm, key, ""));
			this.dialogAdd = true;
			if (this.$refs["addForm"]) this.$refs["addForm"].resetFields();
		},
		requestData () {
			this.loading = true;
			this.$http({
				method: "post",
				url: this.$api.system_department_query,
				data: {
					pageNo: this.page.pageNo,
					pageSize: this.page.pageSize
				}
			}).then((res) => {
				this.loading = false;
				this.tableData = res.data.list;
				this.page.total = res.data.total;
			})
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
        beforeSubmit () {
        	this.$refs["addForm"].validate((valid) => !!valid ? this.submit() : false);
		},
		submit () {
			this.isSaving = true;
			this.$http({
				method: "post",
				data: this.addForm,
				url: this.dialogEdit ? this.$api.system_department_edit : this.$api.system_department_add
			}).then((res) => {
				this.isSaving = false;
				if (res.code === 200) {
					this.requestData();
					this.dialogAdd = false;
					this.dialogEdit = false;
					this.$message({ message: res.msg, type: "success", duration: 2000, onClose: this.goBack });
				} else this.$message({	message: res.msg, type: "error", duration: 2000	});
			}).catch((err) => this.isSaving = false);
		},

 		beforeDel (row, index) {
        	this.$confirm("是否删除该科室，删除后将无法恢复", "提示", {
        		confirmButtonText: "确定",
        		cancelButtonText: "取消",
        		type: "warning"
        	}).then(() => this.deleteRow(row, index));
        },
		deleteRow (row, index) {
			this.$http({
				method: "post",
				url: this.$api.system_department_del,
				data: { id: row.id}
			}).then((res) => {
				if (res.code === 200) {
        			this.$message({ message: res.msg, type: "success", duration: 2000 });
			        this.requestData();
        		} else this.$message({ message: res.msg, type: "error", duration: 2000 });
			});
		},
		goEdit (row, index) {
			Object.keys(this.addForm).forEach((key) => this.$set(this.addForm, key, ""));
			this.$set(this.addForm, "name", row.name);
			this.$set(this.addForm, "description", row.description);
			this.$set(this.addForm, "timecreate", row.timecreate);
			this.$set(this.addForm, "id", row.id);
			this.currentRow = row;
			this.dialogEdit = true;
			if (this.$refs["addForm"]) this.$refs["addForm"].resetFields();
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

<style lang="scss">

.department_list {
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
	.dialogAddContent {
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
