<template>
	<div class="bg-index">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '背景封面']"></h-breadcrumb>
		</div>
		<div class="bg-upload">
			<el-upload
			  	action=""
			  	:show-file-list="false"
			  	:on-change="beforeUpload"
			  	:auto-upload="false">
			  	<el-button slot="trigger" type="success" size="mini"><i class="el-icon-plus el-icon--left"></i>上传</el-button>
			</el-upload>
		</div>
		<div class="bg-list" v-loading="loading">
			<div class="bg-list-item" v-for="(item, index) in bgImgsData" :key="item.id">
				<div class="bg-list-item-inner">
					<div class="item-img">
						<img :src="item.picSrc" />
					</div>
					<div class="item-option">
						<div class="option-item" @click="preview(item.picSrc)"><i class="el-icon-view"></i>预览</div>
						<div class="option-item" @click="beforeDel(item.id, item.picSrc)"><i class="el-icon-delete"></i>删除</div>
						<div class="option-item" @click="moveUp(item, index)"><i class="el-icon-top"></i>上移</div>
						<div class="option-item" @click="moveDown(item, index)"><i class="el-icon-bottom"></i>下移</div>
					</div>
				</div>
			</div>
		</div>
		<el-dialog :visible.sync="dialogVisible" :modal="false" width="1280px">
			<div class="dialog-content"><img :src="currentPicSrc" /></div>
		</el-dialog>
	</div>
</template>

<script>

export default {
	name: "bgIndex",
	data () {
		return {
			bgImgsData: [],
			dialogVisible: false,
			currentPicSrc: "",
			loading: true,
			addForm: {
				picSrc: [],
				order: ""
			}
		};
	},
	mounted () {
		this.requestData();
	},
	methods: {
		moveUp (item, index) {
			if (index === 0) {
				this.$message({	message: "不能上移了", type: "warning", duration: 3000 });
			} else {
				this.$http({
					method: "post",
					url: this.$api.bg_imgs_move,
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
					url: this.$api.bg_imgs_move,
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
				url: this.$api.bg_imgs_del,
				data: { id: id, picSrc: src }
			}).then((res) => {
				if (res.code === 200) {
					this.$message({	message: "删除成功", type: "success", duration: 3000 });
					this.bgImgsData = this.bgImgsData.filter((item) => item.id !== id);
				} else {
					this.$message({	message: res.msg, type: "error", duration: 3000 });
				}
			});
		},
		preview (picSrc) {
			this.currentPicSrc = picSrc;
			this.dialogVisible = true;
		},
		beforeUpload (file) {
			const ext = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length);
			const accept = ["png", "jpeg", "jpg", "gif", "svg", "webp", "JPEG"];
			if (file.size > 10485760) {
				this.$message({	message: "文件大小超过10M", type: "warning", duration: 3000 });
			} else if (!accept.includes(ext)) {
				this.$message({ message: `只接受${accept.join("、")}格式文件`, type: "warning", duration: 3000 });
			} else {
				this.$http({ method: "post", url: this.$api.bg_imgs_getTotal }).then((res) => {
					if (res.total < 12) {
						let formData = new FormData();
						formData.append("file", file.raw);
						this.$http({ method: "post", url: this.$api.imgs_upload, reqType: "formData", data: formData }).then((res) => {
							if (!!res.url) {
								this.addForm.picSrc[0] = res.url;
								this.upload();
							} else this.$message.warning("上传失败");
						}).catch((err) => this.$message.warning(err.message));
					}
					else this.$message({	message: `最多只能上传12张封面图片`, type: "error", duration: 3000 });
				});
			}
		},
		upload (file) {
			this.addForm.order = this.bgImgsData.length ? parseInt(this.bgImgsData[0].order) + 1 : 0;;
			this.$http({ method: "post", url: this.$api.bg_imgs_add, data: this.addForm }).then((res) => {
				this.$message({ message: "添加成功", type: "success", duration: 3000 });
				this.requestData();
			});
		},
		requestData () {
			this.loading = true;
			this.$http({ method: "post", url: this.$api.bg_imgs_query2, data: { pageNo: 1, pageSize: 50 }}).then((res) => {
				this.loading = false;
				this.bgImgsData = res.data.list;
			});
		}
	}

}

</script>

<style lang="scss" scope>
	.bg-index {
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
		.bg-upload {
			position: relative;
			width: 100%;
			margin-top: 16px;
			padding: 0px 16px;
		}
		.bg-list {
			position: relative;
			width: 100%;
			margin-top: 16px;
			margin-bottom: 16px;
			padding: 0px 8px;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			align-items: center;
			.bg-list-item {
				position: relative;
				width: 25%;
				height: 232px;
				margin: 16px 0px;
				.bg-list-item-inner {
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
	}
</style>
