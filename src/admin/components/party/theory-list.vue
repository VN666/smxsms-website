<template>
	<div class="theory-list">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '学校党建', '理论学习', '列表']"></h-breadcrumb>
		</div>

		<div class="option_wrap" ref="option_wrap">
			<el-button type="success" size="mini" @click="goPath('theory-add')"><i class="el-icon-plus el-icon--left"></i>新增</el-button>
			<svg @click="tiggerFilter" v-if="!showFilter" t="1568566044267" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10102" width="32" height="32"><path d="M764.3136 270.6944l-167.5776 201.3184v316.0064a135.8848 135.8848 0 1 1-271.7696 0V472.0128L157.3888 270.6944A89.1904 89.1904 0 0 1 225.9456 124.416h469.8112a89.1904 89.1904 0 0 1 68.5568 146.2784z" fill="#666666" p-id="10103"></path><path d="M844.8 533.2992h-179.2a30.72 30.72 0 0 1 0-61.44h179.2a30.72 30.72 0 0 1 0 61.44zM844.8 651.3664h-179.2a30.72 30.72 0 0 1 0-61.44h179.2a30.72 30.72 0 0 1 0 61.44zM844.8 769.4336h-179.2a30.72 30.72 0 0 1 0-61.44h179.2a30.72 30.72 0 0 1 0 61.44z" fill="#666666" p-id="10104"></path></svg>
			<svg @click="tiggerFilter" v-else t="1568566398017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10362" width="32" height="32"><path d="M776.4992 176.4864a88.2688 88.2688 0 0 0-80.7424-51.2H225.9456A89.2416 89.2416 0 0 0 157.3888 271.36l167.5776 201.3696v316.0576a135.8848 135.8848 0 0 0 271.7696 0V472.7296L764.3136 271.36a88.3712 88.3712 0 0 0 12.1856-94.8736z m-59.392 55.6032l-174.6944 209.92a30.72 30.72 0 0 0-7.1168 19.6608v327.168a74.4448 74.4448 0 0 1-148.8896 0V461.6192a30.72 30.72 0 0 0-7.0656-19.6608L204.8 232.0896a27.7504 27.7504 0 0 1 21.2992-45.5168h469.8112a27.7504 27.7504 0 0 1 21.3504 45.5168z" fill="#666666" p-id="10363"></path><path d="M634.88 503.3472a30.72 30.72 0 0 0 30.72 30.72h179.2a30.72 30.72 0 0 0 0-61.44h-179.2a30.72 30.72 0 0 0-30.72 30.72zM844.8 590.6944h-179.2a30.72 30.72 0 0 0 0 61.44h179.2a30.72 30.72 0 0 0 0-61.44zM844.8 708.7616h-179.2a30.72 30.72 0 0 0 0 61.44h179.2a30.72 30.72 0 0 0 0-61.44z" fill="#666666" p-id="10364"></path></svg>
		</div>

		<div class="search_wrap" ref="search_wrap" v-if="showFilter">
			<el-form :model="filters" label-position="right" label-width="80px">
				<el-row>
					<el-col :span="6">
						<el-form-item label="标题">
							<el-input v-model="filters.headline" placeholder="新闻标题" size="mini" clearable></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="6">
						<el-form-item label="作者">
							<el-input v-model="filters.author" placeholder="作者" size="mini" clearable></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="8" >
						<el-form-item label="发布日期">
							<el-date-picker
						      	v-model="timeValue"
						      	:editable="false"
						      	type="datetimerange"
						      	range-separator="-"
						      	start-placeholder="开始日期"
						      	end-placeholder="结束日期"
						      	value-format="yyyy-MM-dd HH:mm:ss"
						      	size="mini"
						      	@change="timeChange">
						    </el-date-picker>
						</el-form-item>
					</el-col>

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
					<template slot-scope="scope">
						{{ (scope.$index + 1) + (page.pageNo - 1) * page.pageSize }}
					</template>
				</el-table-column>
				<el-table-column label="标题" prop="headline" min-width="100" show-overflow-tooltip></el-table-column>
				<el-table-column label="作者" prop="author" width="150" show-overflow-tooltip></el-table-column>
				<el-table-column label="发布人" prop="publisher" width="150" show-overflow-tooltip></el-table-column>
				<el-table-column label="发布人部门" prop="publisherDepartmentName" width="150" show-overflow-tooltip></el-table-column>
				<el-table-column label="阅读数" prop="views" width="150"></el-table-column>
				<el-table-column label="发布日期" prop="timecreate" width="200"></el-table-column>
				<el-table-column label="操作" width="210">
					<template slot-scope="scope">
				        <el-button type="text" size="mini" @click="goEdit(scope.row.id)">编辑</el-button>
				        <el-button type="text" size="mini" @click="beforeDel(scope.row, scope.$index)">删除</el-button>
				        <el-button type="text" size="mini" @click="changeIsTop(scope.row.id, 1, scope.row.timecreate)" :class="{isTop: scope.row.isTop}">置顶</el-button>
				        <el-button type="text" size="mini" @click="changeIsTop(scope.row.id, 0, scope.row.timecreate)" :disabled="!scope.row.isTop">取消置顶</el-button>
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
	</div>
</template>

<script>

export default {
	name: "theory-list",
	data () {
		return {
			timeValue: "",
			showFilter: false,
			filters: {
				headline: "",
				author: "",
				startTime: "",
				endTime: ""
			},
			page: {
				pageNo: 1,
				pageSize: 20,
				total: 0

			},
			tableData: [],
			tableMaxHeight: 0,
			loading: true
		};
	},
	methods: {
		tiggerFilter () {
        	this.showFilter = !this.showFilter;
        	this.$nextTick(() => this.resize());
        },
        timeChange () {
			this.filters.startTime = this.timeValue[0];
			this.filters.endTime = this.timeValue[1];
		},
		requestData () {
			this.loading = true;
			this.$http({
        		method: "post",
        		url: this.$api.party_theory_query,
        		data: {
        			pageNo: this.page.pageNo,
        			pageSize: this.page.pageSize,
        			headline: this.filters.headline,
        			author: this.filters.author,
        			startTime: this.filters.startTime,
        			endTime: this.filters.endTime
        		}
        	}).then((res) => {
        		this.loading = false;
        		this.tableData = res.data.list;
        		this.page.total = res.data.total;
        	});
		},
		reset () {
			let keys = Object.keys(this.filters);
			keys.forEach((key) => this.filters[key] = "");
			this.page.pageNo = 1;
			this.requestData();
		},
		timeChange () {
			this.filters.startTime = this.timeValue[0];
			this.filters.endTime = this.timeValue[1];
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
        goPath (path) {
        	this.$router.push({ path: path });
        },
        resize () {
        	this.tableMaxHeight = this.$el.clientHeight - this.$refs.option_wrap.clientHeight - this.$refs.breadcrumb_wrap.clientHeight - this.$refs.page_wrap.clientHeight - 16;
        	if (this.showFilter) {
        		this.tableMaxHeight -= this.$refs.search_wrap.clientHeight;
        	}
        },
		goEdit (id) {
			this.$router.push({ name: "theoryEdit", params: { id: id }});
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
        		url: this.$api.party_theory_del,
        		data: { id: row.id, picSrc: row.picSrc, fileListSrc: row.fileListSrc }
        	}).then((res) => {
        		if (res.code === 200) {
        			this.$message({
			          	message: res.msg,
			          	type: "success",
			          	duration: 2000
			        });
			        if (order === this.page.total && index === 0) {
			        	this.page.pageNo = this.page.pageNo > 1 ? this.page.pageNo - 1 : this.page.pageNo;
			        }
			        this.requestData();
        		} else {
        			this.$message({
						message: res.msg,
						type: "error",
						duration: 2000
					});
        		}
        	});
		},
		changeIsTop (id, isTop, timecreate) {
			this.$http({
        		method: "post",
        		url: this.$api.party_theory_changeIsTop,
        		data: {
        			id: id,
        			isTop: isTop,
        			timecreate: timecreate
        		}
        	}).then((res) => {
        		this.$message({
		          	message: res.msg,
		          	type: "success",
		          	duration: 2000
		        });
		        this.page.pageNo = 1;
		        this.requestData();
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

<style lang="scss" scoped>
	.theory-list {
		position: relative;
		width: 100%;
		height: 100%;
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
	}
</style>
