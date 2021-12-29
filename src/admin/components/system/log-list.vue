<template>
	<div class="log-list">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '团建活动', '列表']"></h-breadcrumb>
		</div>

		<div class="option_wrap" ref="option_wrap">
			<el-button type="success" size="mini" @click="goExport"><i class="el-icon-plus el-icon--left"></i>导出</el-button>
			<svg @click="tiggerFilter" v-if="!showFilter" t="1568566044267" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10102" width="32" height="32"><path d="M764.3136 270.6944l-167.5776 201.3184v316.0064a135.8848 135.8848 0 1 1-271.7696 0V472.0128L157.3888 270.6944A89.1904 89.1904 0 0 1 225.9456 124.416h469.8112a89.1904 89.1904 0 0 1 68.5568 146.2784z" fill="#666666" p-id="10103"></path><path d="M844.8 533.2992h-179.2a30.72 30.72 0 0 1 0-61.44h179.2a30.72 30.72 0 0 1 0 61.44zM844.8 651.3664h-179.2a30.72 30.72 0 0 1 0-61.44h179.2a30.72 30.72 0 0 1 0 61.44zM844.8 769.4336h-179.2a30.72 30.72 0 0 1 0-61.44h179.2a30.72 30.72 0 0 1 0 61.44z" fill="#666666" p-id="10104"></path></svg>
			<svg @click="tiggerFilter" v-else t="1568566398017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10362" width="32" height="32"><path d="M776.4992 176.4864a88.2688 88.2688 0 0 0-80.7424-51.2H225.9456A89.2416 89.2416 0 0 0 157.3888 271.36l167.5776 201.3696v316.0576a135.8848 135.8848 0 0 0 271.7696 0V472.7296L764.3136 271.36a88.3712 88.3712 0 0 0 12.1856-94.8736z m-59.392 55.6032l-174.6944 209.92a30.72 30.72 0 0 0-7.1168 19.6608v327.168a74.4448 74.4448 0 0 1-148.8896 0V461.6192a30.72 30.72 0 0 0-7.0656-19.6608L204.8 232.0896a27.7504 27.7504 0 0 1 21.2992-45.5168h469.8112a27.7504 27.7504 0 0 1 21.3504 45.5168z" fill="#666666" p-id="10363"></path><path d="M634.88 503.3472a30.72 30.72 0 0 0 30.72 30.72h179.2a30.72 30.72 0 0 0 0-61.44h-179.2a30.72 30.72 0 0 0-30.72 30.72zM844.8 590.6944h-179.2a30.72 30.72 0 0 0 0 61.44h179.2a30.72 30.72 0 0 0 0-61.44zM844.8 708.7616h-179.2a30.72 30.72 0 0 0 0 61.44h179.2a30.72 30.72 0 0 0 0-61.44z" fill="#666666" p-id="10364"></path></svg>
		</div>

		<div class="search_wrap" ref="search_wrap" v-if="showFilter">
			<el-form :model="filters" label-position="right" label-width="80px">
				<el-row>
					<el-col :span="4">
						<el-form-item label="用户名">
							<el-input v-model="filters.username" placeholder="用户名" size="mini" clearable></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="4">
						<el-form-item label="操作类型">
							<el-select v-model="filters.opType" placeholder="请选择" size="mini" clearable>
							    <el-option v-for="item in opTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
						  	</el-select>
						</el-form-item>
					</el-col>

					<el-col :span="4">
						<el-form-item label="模块">
							<el-cascader v-model="filters.module" :options="menus" size="mini" :props="props" clearable></el-cascader>
						</el-form-item>
					</el-col>

					<el-col :span="8" >
						<el-form-item label="发布日期">
							<el-date-picker
						      	v-model="timeValue"
						      	:editable="true"
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
					<template slot-scope="scope">{{ (scope.$index + 1) + (page.pageNo - 1) * page.pageSize }}</template>
				</el-table-column>
				<el-table-column label="IP" prop="ip" width="120" show-overflow-tooltip></el-table-column>
				<el-table-column label="用户名" prop="username" width="150" show-overflow-tooltip></el-table-column>
				<el-table-column label="操作类型" prop="opType" width="150" show-overflow-tooltip></el-table-column>
				<el-table-column label="模块" prop="module" width="150" show-overflow-tooltip></el-table-column>
				<el-table-column label="操作内容" prop="des" min-width="300" show-overflow-tooltip></el-table-column>
				<el-table-column label="时间" width="200">
					<template slot-scope="scope">{{ scope.row.timecreate.substr(0, 19) }}</template>
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

import { menu } from "../../menu";
import dayjs from "dayjs";

export default {
	name: "log-list",
	data () {
		return {
			timeValue: "",
			showFilter: false,
			filters: {
				username: "",
				opType: "",
				module: [],
				startTime: dayjs(new Date()).format("YYYY-MM-DD") + " 00:00:00",
				endTime: dayjs(new Date()).format("YYYY-MM-DD") + " 23:59:59"
			},
			page: {
				pageNo: 1,
				pageSize: 20,
				total: 0

			},
			tableData: [],
			tableMaxHeight: 0,
			loading: true,
			opTypes: [],
			menus: [],
			props: {
				value: "title",
				label: "title"
			},
			timeValue: [
				dayjs(new Date()).format("YYYY-MM-DD") + " 00:00:00",
				dayjs(new Date()).format("YYYY-MM-DD") + " 23:59:59"
			]
		};
	},
	created () {
		this.menus = [{ title: "登录" }, ...this.generateMenu(menu, this.$store.state.auths)];
	},
	methods: {
		generateMenu (menuData, codes, id = "code", children = "children") {
			return menuData.filter((node) => {
				if (node[children] && codes.includes(node[id])) node[children] = this.generateMenu(node[children], codes, id, children);
				return codes.includes(node[id]);
			});
		},
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
			if (this.timeValue && this.timeValue.length !== 0) {
				this.filters.startTime = this.timeValue[0];
				this.filters.endTime = this.timeValue[1];
			} else {
				this.filters.startTime = dayjs(new Date()).format("YYYY-MM-DD") + " 00:00:00";
				this.filters.endTime = dayjs(new Date()).format("YYYY-MM-DD") + " 23:59:59";
			}
			this.$http({
        		method: "post",
        		url: this.$api.system_log_query,
        		data: {
        			pageNo: this.page.pageNo,
        			pageSize: this.page.pageSize,
        			username: this.filters.username,
        			opType: this.filters.opType,
        			modulename: this.filters.module.join("-"),
        			startTime: this.filters.startTime,
        			endTime: this.filters.endTime
        		}
        	}).then((res) => {
        		this.loading = false;
        		this.tableData = res.data.list;
        		this.page.total = res.data.total;
        		this.opTypes = res.data.opTypes;
        	});
		},
		reset () {
			this.filters.username = "";
			this.filters.opType = "";
			this.filters.module = [];
			this.filters.startTime = dayjs(new Date()).format("YYYY-MM-DD") + " 00:00:00";
			this.filters.endTime = dayjs(new Date()).format("YYYY-MM-DD") + " 23:59:59";
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
        goExport (path) {
        	if (this.timeValue && this.timeValue.length !== 0) {
				this.filters.startTime = this.timeValue[0];
				this.filters.endTime = this.timeValue[1];
			} else {
				this.filters.startTime = dayjs(new Date()).format("YYYY-MM-DD") + " 00:00:00";
				this.filters.endTime = dayjs(new Date()).format("YYYY-MM-DD") + " 23:59:59";
			}
			this.$http({
        		method: "post",
        		url: this.$api.system_log_export,
        		data: {
        			type: 0,
        			username: this.filters.username,
        			opType: this.filters.opType,
        			modulename: this.filters.module.join("-"),
        			startTime: this.filters.startTime,
        			endTime: this.filters.endTime
        		}
        	}).then((res) => {
        		if (res.code !== 200) {
        			this.$message.error(res.msg);
        			return;
        		}
        		const blob = new Blob([Buffer.from(res.result, "binary")]);
        		if ("download" in document.createElement("a")) {
		            let downloadElement = document.createElement("a");
		            let href = "";
		            if (window.URL) href = window.URL.createObjectURL(blob);
		            else href = window.webkitURL.createObjectURL(blob);
		            downloadElement.href = href;
		            downloadElement.download = "operate_log.xlsx";
		            document.body.appendChild(downloadElement);
		            downloadElement.click();
		            if (window.URL)
		                window.URL.revokeObjectURL(href);
		            else
		                document.body.removeChild(downloadElement);
		        } else {
		            navigator.msSaveBlob(blob, fileName);
		        }
        	});
        },
        resize () {
        	this.tableMaxHeight = this.$el.clientHeight - this.$refs.option_wrap.clientHeight - this.$refs.breadcrumb_wrap.clientHeight - this.$refs.page_wrap.clientHeight - 16;
        	if (this.showFilter) {
        		this.tableMaxHeight -= this.$refs.search_wrap.clientHeight;
        	}
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
	.log-list {
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
