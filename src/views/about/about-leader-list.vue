<template>
	<div class="leaderList">
		<div class="list">
			<div class="list-item" v-for="(item, index) in listData" :key="index" @click="goDetail(item.id)" :class="{extra:extra}">
				<div class="item-img"><img :src="item.headSrc" /></div>
				<div class="item-des">{{item.job}}{{item.name}}</div>
			</div>
		</div>
		<div class="page-wrap" ref="page-wrap">
			<el-pagination
	      		@size-change="handleSizeChange"
	      		@current-change="handlePageChange"
	      		:current-page="page.pageNo"
	      		:page-sizes="[15, 30, 45, 60]"
	      		:page-size="page.pageSize"
	      		layout="total, sizes, prev, pager, next, jumper"
	      		:total="page.total">
	    	</el-pagination>
		</div>
	</div>
</template>

<script>

export default {
	name: "leaderList",
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
	computed: {
		extra () {
			return this.listData.length % 3 === 2;
		}
	},
	methods: {
		requestData () {
			this.$http({
				method: "post",
				url: this.$api.about_leader_queryList,
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
        	this.$router.push({ path: "/about/leader-detail", query: {id: id, index: 0}});
        }
	}
}

</script>

<style lang="scss" scoped>

.leaderList {
	position: relative;
	width: 100%;
	height: auto;
	.list {
		position: relative;
		width: 100%;
		overflow-y: auto;
		margin: 16px 0px 16px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		.list-item {
			position: relative;
			flex: 0 0 300px;
			height: 250px;
			margin-bottom: 60px;
			cursor: pointer;
			color: #666666;
			&.extra:last-child {
				transform: translateX(-353px);
			}
			&:hover {
				color: #308BF0;
				transform: scale(1.1);
			}
			.item-img {
				position: relative;
				width: 100%;
				height: 225px;
				border: 1px solid #DEDEDE;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.item-des {
				position: relative;
				text-align: center;
				margin-top: 16px;
				font-size: 14px;
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
