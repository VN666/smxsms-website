<template>
	<div class="pacesetter_list">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '德育活动', '德育标兵', '列表']"></h-breadcrumb>
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
				<el-table-column label="标题" prop="headline" min-width="150" show-overflow-tooltip></el-table-column>
				<el-table-column label="简介" prop="introduction" min-width="250" show-overflow-tooltip></el-table-column>
				<el-table-column label="发布人" prop="publisher" width="180"></el-table-column>
				<el-table-column label="发布人部门" prop="publisherDepartmentName" width="180"></el-table-column>
				<el-table-column label="发布日期" prop="timecreate" width="200"></el-table-column>
				<el-table-column label="阅读数" prop="views" width="200"></el-table-column>
				<el-table-column label="操作" width="210">
					<template slot-scope="scope">
				        <el-button type="text" size="mini" @click="goEdit(scope.row, scope.$index)">编辑</el-button>
				        <el-button type="text" size="mini" @click="beforeDel(scope.row, scope.$index)">删除</el-button>
				        <el-button type="text" size="mini" @click="moveUp(scope.row, scope.$index)" :disabled="(scope.$index + (page.pageNo - 1) * page.pageSize)===0">上移</el-button>
				        <el-button type="text" size="mini" @click="moveDown(scope.row, scope.$index)" :disabled="(scope.$index + 1 + (page.pageNo - 1) * page.pageSize)===page.total">下移</el-button>
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
	  		title="新增"
	  		:modal="false"
	  		:close-on-click-modal="false"
	  		:visible.sync="dialogAdd"
	  		width="560px">
	  		<div class="dialogAddContent">
		  		<el-form :model="addForm" label-position="right" label-width="80px" :rules="rules" ref="addForm">
		  			<el-row class="row_head">
						<el-form-item label="头像" prop="headSrc">
							<el-upload
								class="file_upload"
							  	action=""
							  	:show-file-list="false"
							  	:on-change="beforeUpload"
							  	accept="png"
							  	:auto-upload="false">
							  	<el-button slot="trigger" type="success" size="mini"><i class="el-icon-plus el-icon--left"></i>上传</el-button>
							</el-upload>
						</el-form-item>
						<div class="head_img">
							<img :src="addForm.headSrc" v-if="addForm.headSrc" />
						</div>
		  			</el-row>
					<el-row>
						<el-form-item label="姓名" prop="name">
							<el-input v-model="addForm.name" placeholder="姓名" size="mini" clearable></el-input>
						</el-form-item>
					</el-row>
					<!-- <el-row>
						<el-form-item label="职务" prop="job">
							<el-input v-model="addForm.job" placeholder="职务" size="mini" clearable></el-input>
						</el-form-item>
					</el-row> -->
					<el-row>
						<el-form-item label="简介" prop="introduction">
							<el-input type="textarea" v-model="addForm.introduction" placeholder="简介" size="mini" clearable rows="10"></el-input>
						</el-form-item>
					</el-row>
		  		</el-form>
	  		</div>
	  		<span slot="footer" class="dialog-footer">
		    	<el-button @click="dialogAdd = false">取 消</el-button>
		    	<el-button type="primary" @click="beforeSubmit" :loading="isSaving">确 定</el-button>
	  		</span>
		</el-dialog>

		<el-dialog
	  		title="编辑"
	  		:modal="false"
	  		:close-on-click-modal="false"
	  		:visible.sync="dialogEdit"
	  		width="560px">
	  		<div class="dialogAddContent">
		  		<el-form :model="addForm" label-position="right" label-width="80px" :rules="rules" ref="addForm">
		  			<el-row class="row_head">
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
					<el-row>
						<el-form-item label="姓名" prop="name">
							<el-input v-model="addForm.name" placeholder="姓名" size="mini" clearable></el-input>
						</el-form-item>
					</el-row>
					<el-row>
						<el-form-item label="简介" prop="introduction">
							<el-input type="textarea" v-model="addForm.introduction" placeholder="简介" size="mini" clearable rows="10"></el-input>
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
	name: "pacesetter_list",
	data () {
		return {
			page: {
				pageNo: 1,
				pageSize: 20,
				total: 0
			},
			tableData: [],
			tableMaxHeight: 0,
			dialogAdd: false,
			dialogEdit: false,
			addForm: {
				name: "",
				job: "",
				introduction: "",
				picSrc: [],
				removeSrc: [],
				headSrc: "",
				order: ""
			},
			rules: {
				headSrc: [
					{ required: true, message: "请上传头像", trigger: "blur" }
				],
				name: [
					{ required: true, message: "姓名不能为空", trigger: "blur" }
				],
				job: [
					{ required: true, message: "职务不能为空", trigger: "blur" }
				],
				introduction: [
					{ required: true, message: "简介不能为空", trigger: "blur" }
				]
			},
			isSaving: false,
			loading: true
		}
	},
	methods: {
		moveUp (row, index) {
			this.$http({
				method: "post",
				url: this.$api.activity_pacesetter_move,
				data: {
					fromOrder: this.tableData[index].order,
					fromId: this.tableData[index].id,
					toOrder: this.tableData[index - 1].order,
					toId: this.tableData[index - 1].id
				}
			}).then((res) => {
				if (res.code === 200) {
					[this.tableData[index].order, this.tableData[index - 1].order] = [this.tableData[index - 1].order, this.tableData[index].order];
					this.$message({	message: "上移成功", type: "success", duration: 3000 });
					let temp = this.tableData[index];
					this.$set(this.tableData, index, this.tableData[index - 1]);
					this.$set(this.tableData, index - 1, temp);
				} else {
					this.$message({	message: "下移失败", type: "error", duration: 3000 });
				}
			});
		},
		moveDown (row, index) {
			const len = this.tableData.length;
			this.$http({
				method: "post",
				url: this.$api.activity_pacesetter_move,
				data: {
					fromOrder: this.tableData[index].order,
					fromId: this.tableData[index].id,
					toOrder: this.tableData[index + 1].order,
					toId: this.tableData[index + 1].id
				}
			}).then((res) => {
				if (res.code === 200) {
					[this.tableData[index].order, this.tableData[index + 1].order] = [this.tableData[index + 1].order, this.tableData[index].order];
					this.$message({	message: "下移成功", type: "success", duration: 3000 });
					let temp = this.tableData[index];
					this.$set(this.tableData, index, this.tableData[index + 1]);
					this.$set(this.tableData, index + 1, temp);
				} else {
					this.$message({	message: "下移失败", type: "error", duration: 3000 });
				}
			});
		},
		clearForm () {
			this.addForm.name = "";
			this.addForm.job = "";
			this.addForm.introduction = "";
			this.addForm.picSrc = [];
			this.addForm.removeSrc = [];
			this.addForm.headSrc = "";
			this.addForm.order = "";
		},
		showDialogAdd () {
			this.clearForm();
			this.dialogAdd = true;
		},
		requestData () {
			this.loading = true;
			this.$http({
				method: "post",
				url: this.$api.activity_pacesetter_query,
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
        beforeSubmit () {
			this.$refs["addForm"].validate((valid) => {
				if (valid) {
					this.addForm.picSrc[0] = this.addForm.headSrc;
					this.submit();
				} else return false;
			});
		},
		submit () {
			this.isSaving = true;
			this.addForm.order = this.tableData.length ? parseInt(this.tableData[0].order) + 1 : 0;
			this.$http({
				method: "post",
				data: this.addForm,
				url: this.dialogEdit ? this.$api.activity_pacesetter_edit : this.$api.activity_pacesetter_add
			}).then((res) => {
				this.isSaving = false;
				if (res.code === 200) {
					this.requestData();
					this.$message({ message: res.msg, type: "success", duration: 2000, onClose: this.goBack });
					this.dialogAdd = false;
					this.dialogEdit = false;
				} else this.$message({	message: res.msg, type: "error", duration: 2000	});
			}).catch((err) => this.isSaving = false);
		},
 		beforeDel (row, index) {
        	this.$confirm("是否删除该条信息，删除后将无法恢复", "提示", {
        		confirmButtonText: "确定",
        		cancelButtonText: "取消",
        		type: "warning"
        	}).then(() => this.deleteRow(row, index));
        },
		deleteRow (row, index) {
			let order = (index + 1) + (this.page.pageNo - 1) * this.page.pageSize;
			this.$http({
				method: "post",
				url: this.$api.activity_pacesetter_del,
				data: { id: row.id, picSrc: row.picSrc}
			}).then((res) => {
				if (res.code === 200) {
        			this.$message({ message: res.msg, type: "success", duration: 2000 });
			        if (order === this.page.total && index === 0) this.page.pageNo = this.page.pageNo > 1 ? this.page.pageNo - 1 : this.page.pageNo;
			        this.requestData();
        		} else this.$message({ message: res.msg, type: "error", duration: 2000 });
			});
		},
		goEdit (row, index) {
			this.clearForm();
			this.$http({ method: "post", url: this.$api.activity_pacesetter_queryById, data: { id: row.id }}).then((res) => {
				this.addForm = res.data;
				this.addForm.removeSrc = [];
				this.dialogEdit = true;
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

<style lang="scss">

.pacesetter_list {
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
