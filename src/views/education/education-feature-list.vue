<template>
	<div class="featureList">
		<div class="list">
			<div class="list-item" v-for="(item, index) in listData" :key="index" @click="goDetail(item.id)">
				<img src="@/src/assets/icons/list-icon.png" />
				<div class="list-item-headline">{{item.headline}}</div>
				<div class="list-item-timecreate">{{item.timecreate}}</div>
				<img src="@/src/assets/icons/top-icon.png" v-if="item.isTop" />
			</div>
		</div>
		<div class="page-wrap" ref="page-wrap">
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
	name: "featureList",
	data () {
		return {
			page: {
				pageNo: 1,
				pageSize: 20,
				total: 0
			},
			listData: []
		};
	},
	mounted () {
		this.requestData();
	},
	methods: {
		requestData () {
			this.$http({
				method: "post",
				url: this.$api.education_feature_queryList,
				data: {
					pageNo: this.page.pageNo,
					pageSize: this.page.pageSize
				}
			}).then((res) => {
				this.page.total = res.data.total;
				this.listData = res.data.list;
			});
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
        goDetail (id) {
        	this.$router.push({ path: "/education/feature-detail", query: {id: id, index: 5}});
        }
	}
}

</script>

<style lang="scss" scoped>

.featureList {
	position: relative;
	width: 100%;
	height: auto;
	.list {
		position: relative;
		width: 100%;
		overflow-y: auto;
		margin: 8px 0px 16px;
		.list-item {
			position: relative;
			line-height: 36px;
			cursor: pointer;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			img {
				&:first-child {
					width: 12px;
					height: 12px;
					margin-right: 5px;
				}
				&:last-child {
					width: 30px;
					height: 16px;
				}
			}
			.list-item-headline {
				font-size: 18px;
				cursor: pointer;
				color: #666666;
				width: 768px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				&:hover {
					color: #338BF0;
					text-decoration: underline;
				}
			}
			.list-item-timecreate {
				position: absolute;
				right: 0px;
				font-size: 16px;
				color: #999999;
			}
		}
	}
	.page-wrap {
		position: relative;
		height: 48px;
		width: 100%;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		text-align: center;
	}
}

</style>

<style>
	.page-wrap input {
		background: #F2F2F2;
	}
	.page-wrap .el-input__inner {
		border-color: #666666;
	}
	.page-wrap .el-select .el-input .el-select__caret {
		color: #666666;
	}
	.page-wrap .el-pagination button {
		background: #F2F2F2;
	}
	.page-wrap .el-pager li {
		background: #F2F2F2;
	}
</style>
