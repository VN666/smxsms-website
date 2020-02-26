<template>
	<div class="exerciseDetail">
		<div class="detail-headline">{{content.headline}}</div>
		<div class="detail-source">
			<div class="item timecreate"><span>发布日期 </span><span>{{content.timecreate}}</span></div>
			<div class="item department" v-if="content.department"><span>部门 </span><span>{{content.department}}</span></div>
			<div class="item author"><span>作者 </span><span>{{content.author}}</span></div>
			<div class="item views"><span>阅读数 </span><span>{{content.views}}</span></div>
		</div>
		<div class="detail-content" v-html="$options.filters.bgFilter(content.content)"></div>
		<div class="detail-download" v-if="content.fileListSrc.length">
			<div class="download-des">附件</div>
			<div class="download-file">
				<div class="download-item" v-for="(item, index) in content.fileListSrc" @click="downLoad(item)"><img src="@/src/assets/icons/download-icon.png" />{{ item.match(/happy\/(\S*)(\s*)-oss-/)[1] + "." + $utils.getFileExt(item) }}</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "exerciseDetail",
	data () {
		return {
			id: "",
			content: {
				fileListSrc: []
			}
		};
	},
	created () {
		this.id = this.$route.query.id;
		this.requestData();
	},
	methods: {
		requestData () {
			this.$http({
				method: "post",
				url: this.$api.happy_exercise_queryById,
				data: {
					id: this.id,
					addViews: true
				}
			}).then((res) => {
				this.content = res.data;
			})
		},
		downLoad (path) {
			this.$utils.downloadFile(path);
		}
	}
}

</script>

<style lang="scss" scoped>

.exerciseDetail {
	position: relative;
	width: 100%;
	margin-top: 16px;
	.detail-headline {
		position: relative;
		text-align: center;
		font-family: 宋体;
	    color: #333333;
	    letter-spacing: 0pt;
	    font-size: 34pt;
	    background: #f2f2f2;
	}
	.detail-source {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		margin-top: 8px;
		font-size: 12px;
		.item {
			margin-left: 16px;
			color: #888888;
		}
	}
	.detail-download {
		position: relative;
		margin-top: 8px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		.download-des {
			position: relative;
			width: 60px;
			font-weight: bold;
		}
		.download-file {
			position: relative;
			display: flex;
			flex-direction: column;
			.download-item {
				position: relative;
				line-height: 24px;
				font-size: 16px;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
					color: #338BF0;
				}
				img {
					margin-top: 0.5px;
					margin-right: 5px;
				}
			}
		}

	}
}

</style>
