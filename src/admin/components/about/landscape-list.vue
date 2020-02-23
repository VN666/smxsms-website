<template>
	<div class="landscape_index">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '关于二中', '校园风貌']"></h-breadcrumb>
		</div>
		<div class="landscape_upload" ref="landscape_upload">
			<el-upload
			  	action=""
			  	:show-file-list="false"
			  	:on-change="beforeUpload"
			  	accept="png"
			  	:auto-upload="false">
			  	<el-button slot="trigger" type="success" size="mini"><i class="el-icon-plus el-icon--left"></i>上传</el-button>
			</el-upload>
		</div>
		<div class="landscape_list" :style="`height: ${listHeight}px`">
			<div class="landscape_list-item" v-for="(item, index) in bgImgsData" :key="item.id">
				<div class="landscape_list-item-inner">
					<div class="item-img">
						<div class="item-name">{{ item.name }}</div>
						<img :src="item.picSrc" />
					</div>
					<div class="item-option">
						<div class="option-item" @click="preview(item.picSrc, item.name)"><i class="el-icon-view"></i>预览</div>
						<div class="option-item" @click="beforeDel(item.id, item.picSrc)"><i class="el-icon-delete"></i>删除</div>
						<div class="option-item" @click="beforeEdit(item)"><i class="el-icon-edit"></i>编辑</div>
						<div class="option-item" @click="moveUp(item, index)"><i class="el-icon-top"></i>上移</div>
						<div class="option-item" @click="moveDown(item, index)"><i class="el-icon-bottom"></i>下移</div>
					</div>
				</div>
			</div>
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

		<el-dialog :visible.sync="dialogVisible" :modal="false" width="1280px" :title="currentName">
			<div class="dialog-content">
				<img :src="currentPicSrc" />
			</div>
		</el-dialog>
		<el-dialog :visible.sync="dialogPicName" :modal="false" width="480px" :close-on-click-modal="false" :close-on-press-escape="false" label-position="top" title="输入">
			<el-form :model="addForm"  :rules="rules" ref="addForm">
				<el-form-item label="名称（该名称将用于网站显示）" prop="name">
				    <el-input v-model="addForm.name"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
			    <el-button @click="dialogPicName = false">取 消</el-button>
			    <el-button type="primary" @click="beforeSubmit">确 定</el-button>
		  	</span>
		</el-dialog>

		<el-dialog :visible.sync="dialogPicNameEdit" :modal="false" width="480px" :close-on-click-modal="false" :close-on-press-escape="false" label-position="top" title="输入">
			<el-form :model="editForm"  :rules="rules" ref="addForm">
				<el-form-item label="名称（该名称将用于网站显示）" prop="name">
				    <el-input v-model="editForm.name"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
			    <el-button @click="dialogPicNameEdit = false">取 消</el-button>
			    <el-button type="primary" @click="edit">确 定</el-button>
		  	</span>
		</el-dialog>

	</div>
</template>

<script>

export default {
	name: "bgIndex",
	data () {
		const checkName = (rule, value, callback) => {
			if (!value) return callback(new Error("名称不能为空"));
			else callback();
		}
		return {
			bgImgsData: [],
			dialogVisible: false,
			dialogPicName: false,
			dialogPicNameEdit: false,
			addForm: {
				name: "",
				file: null
			},
			editForm: {
				name: "",
				id: "",
				index: ""
			},
			rules: {
				name: [
					{ required: true, message: "请输入名称", trigger: "blur" }
				]
			},
			currentPicSrc: "",
			currentName: "",
			page: {
				pageNo: 1,
				pageSize: 20,
				total: 0
			},
			listHeight: 0
		};
	},
	mounted () {
		this.resize();
		window.addEventListener("resize", this.resize, false);
		this.requestData();
	},
	beforeDestory () {
		window.removeEventListener("resize", this.resize, false);
	},
	methods: {
		handleSizeChange (size) {
            this.page.pageNo = 1;
            this.page.pageSize = size;
            this.requestData();
        },
        handlePageChange (page) {
            this.page.pageNo = page;
            this.requestData();
        },
		moveUp (item, index) {
			if (index === 0) {
				this.$message({	message: "不能上移了", type: "warning", duration: 3000 });
			} else {
				this.$http({
					method: "post",
					url: this.$api.about_landscape_move,
					data: {
						fromOrder: this.bgImgsData[index].order,
						fromId: this.bgImgsData[index].id,
						toOrder: this.bgImgsData[index - 1].order,
						toId: this.bgImgsData[index - 1].id
					}
				}).then((res) => {
					if (res.code === 200) {
						[this.bgImgsData[index].order, this.bgImgsData[index - 1].order] = [this.bgImgsData[index - 1].order, this.bgImgsData[index].order];
						this.$message({	message: "上移成功", type: "success", duration: 3000 });
						let temp = this.bgImgsData[index];
						this.$set(this.bgImgsData, index, this.bgImgsData[index - 1]);
						this.$set(this.bgImgsData, index - 1, temp);
					} else {
						this.$message({	message: "下移失败", type: "error", duration: 3000 });
					}
				});
			}
		},
		moveDown (item, index) {
			const len = this.bgImgsData.length;
			if (index === len - 1) {
				this.$message({	message: "不能下移了", type: "warning", duration: 3000 });
			} else {
				this.$http({
					method: "post",
					url: this.$api.about_landscape_move,
					data: {
						fromOrder: this.bgImgsData[index].order,
						fromId: this.bgImgsData[index].id,
						toOrder: this.bgImgsData[index + 1].order,
						toId: this.bgImgsData[index + 1].id
					}
				}).then((res) => {
					if (res.code === 200) {
						[this.bgImgsData[index].order, this.bgImgsData[index + 1].order] = [this.bgImgsData[index + 1].order, this.bgImgsData[index].order];
						this.$message({	message: "下移成功", type: "success", duration: 3000 });
						let temp = this.bgImgsData[index];
						this.$set(this.bgImgsData, index, this.bgImgsData[index + 1]);
						this.$set(this.bgImgsData, index + 1, temp);
					} else {
						this.$message({	message: "下移失败", type: "error", duration: 3000 });
					}
				});
			}
		},
		beforeDel (id, src) {
			this.$confirm("是否删除该条信息，删除后将无法恢复", "提示", {
        		confirmButtonText: "确定",
        		cancelButtonText: "取消",
        		type: "warning"
        	}).then(() => this.deleteRow(id, src));
		},
		deleteRow (id, src) {
			this.$http({
				method: "post",
				url: this.$api.about_landscape_del,
				data: {
					id: id,
					picSrc: src
				}
			}).then((res) => {
				if (res.code === 200) {
					this.$message({	message: "删除成功", type: "success", duration: 3000 });
					this.bgImgsData = this.bgImgsData.filter((item) => item.id !== id);
				} else {
					this.$message({	message: "删除失败", type: "error", duration: 3000 });
				}
			});
		},
		preview (picSrc, name) {
			this.currentPicSrc = picSrc;
			this.currentName = name;
			this.dialogVisible = true;
		},
		beforeUpload (file) {
			this.addForm.name = "";
			this.addForm.file = null;
			const ext = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length);
			const accept = ["png", "jpeg", "jpg", "gif", "svg", "webp", "JPEG"];
			if (accept.includes(ext)) {
				this.addForm.file = file;
				this.dialogPicName = true;
			} else {
				this.$message({	message: `只接受${accept.join("、")}格式文件`, type: "error", duration: 3000 });
			}
		},
		beforeSubmit () {
			this.$refs["addForm"].validate((valid) => {
				if (valid) {
					this.submit(this.addForm.file);
					this.dialogPicName = false;
				} else {
					return false;
				}
			});
		},
		submit (file) {
			let formData = new FormData();
			let order = this.bgImgsData.length ? parseInt(this.bgImgsData[0].order) + 1 : 0;
			formData.append("file", file.raw);
			formData.append("category", "about");
			formData.append("order", order);
			formData.append("name", this.addForm.name);
			this.$http({
				method: "post",
				url: this.$api.about_landscape_upload,
				reqType: "formData",
				data: formData
			}).then((res) => {
				this.$message({ message: "上传成功", type: "success", duration: 3000 });
				this.requestData();
			});
		},
		requestData () {
			this.$http({
				method: "post",
				url: this.$api.about_landscape_query,
				data: {
					pageNo: this.page.pageNo,
					pageSize: this.page.pageSize
				}
			}).then((res) => {
				this.bgImgsData = res.data.list;
				this.page.total = res.data.total;
			});
		},
		resize () {
        	this.listHeight = this.$el.clientHeight - this.$refs.breadcrumb_wrap.clientHeight - this.$refs.landscape_upload.clientHeight - this.$refs.page_wrap.clientHeight - 32;
        },
        beforeEdit (item) {
        	this.editForm.name = item.name;
        	this.editForm.id = item.id;
        	this.bgImgsData.forEach((val, index) => val.id === item.id ? this.editForm.index = index : "");
        	this.dialogPicNameEdit = true;
        },
		edit () {
			this.$http({
				method: "post",
				url: this.$api.about_landscape_edit,
				data: {
					id: this.editForm.id,
					name: this.editForm.name
				}
			}).then((res) => {
				if (res.code === 200) {
					this.$message({ message: "修改成功", type: "success", duration: 3000 });
					this.dialogPicNameEdit = false;
					let obj = this.bgImgsData[this.editForm.index];
					obj.name = this.editForm.name;
					this.$set(this.bgImgsData, this.editForm.index, obj);
				} else {
					this.$message({ message: "修改失败", type: "error", duration: 3000 });
				}
			})
		},

	}

}

</script>

<style lang="scss" scope>
	.landscape_index {
		position: relative;
		width: 100%;
		height: 100%;
		overflow-y: auto;
		box-sizing: border-box;
		.dialog-content {
			width: 100%;
			height: auto;
			max-height: 360px;
			text-align: center;
			box-sizing: border-box;
			border: 1px dashed #999999;
			img {
				width: 100%;
				max-height: 360px;
			}
		}
		.breadcrumb_wrap {
			position: relative;
			height: 48px;
			line-height: 48px;
			width: 100%;
			padding: 6px 16px;
			box-sizing: border-box;
		}
		.landscape_upload {
			position: relative;
			width: 100%;
			margin-top: 16px;
			padding: 0px 16px;
		}
		.landscape_list {
			position: relative;
			width: 100%;
			margin-top: 16px;
			margin-bottom: 16px;
			padding: 0px 8px;
			overflow-y: auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			align-items: center;
			.landscape_list-item {
				position: relative;
				width: 25%;
				height: 232px;
				margin: 16px 0px;
				.landscape_list-item-inner {
					position: relative;
					width: calc(100% - 32px);
					height: 232px;
					margin: 0 auto;
					border: 1px solid #E5E5E5;
					border-radius: 4px;
					&:hover {
						box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.1);
					}
					.item-img {
						position: relative;
						width: 100%;
						height: 200px;
						overflow: hidden;
						border-bottom: 1px solid #E5E5E5;
						.item-name {
							position: absolute;
							top: 0px;
							width: 100%;
							font-size: 16px;
							height: 24px;
							background: #000000;
							opacity: 0.5;
							color: #FFFFFF;
							text-align: center;
						}
						img {
							width: 100%;
							height: 100%;
						}
					}
					.item-option {
						position: relative;
						width: 100%;
						height: 30px;
						box-sizing: border-box;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						background: #F7F7F7;
						.option-item {
							position: relative;
							flex: 1;
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							cursor: pointer;
							color: #999999;
							letter-spacing: 2px;
							font-size: 14px;
							border-right: 1px solid #E5E5E5;
							&:hover {
								color: #338BF0;
							}
							&:last-child {
								border-right: none;
							}
						}
					}
				}

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
	}
</style>
