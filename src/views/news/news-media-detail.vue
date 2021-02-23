<template>
	<div class="mediaDetail">
		<div class="detail-source">
			<div class="item timecreate"><span>发布日期 </span><span>{{content.timecreate}}</span></div>
			<div class="item origin" v-if="content.origin"><span>来源 </span><span>{{content.origin}}</span></div>
			<div class="item author"><span>作者 </span><span>{{content.author}}</span></div>
			<div class="item views"><span>阅读数 </span><span>{{content.views}}</span></div>
		</div>
		<div class="detail-headline">{{content.headline}}</div>
		<div class="detail-content" v-html="content.content"></div>
		<div class="detail-link" v-if="content.link">
			<div class="link-des">原文链接</div>
			<div class="link-file">
				<a :href="content.link" target="_blank">{{content.link}}</a>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "mediaDetail",
	data () {
		return {
			id: "",
			content: () => {}
		};
	},
	mounted () {
		this.id = this.$route.query.id;
		this.requestData();
	},
	methods: {
		requestData () {
			this.$http({
				method: "post",
				url: this.$api.news_media_queryById,
				data: {
					id: this.id,
					addViews: true
				}
			}).then((res) => {
				this.content = res.data;
			})
		}
	}
}

</script>

<style lang="scss" scoped>

.mediaDetail {
	position: relative;
	width: 100%;
	margin-top: 16px;
	.detail-headline {
		position: relative;
		text-align: center;
		font-family: "微软雅黑";
	    color: #333333;
	    letter-spacing: 0pt;
	    font-size: 24px;
	    background: #FFFFFF;
	    margin: 16px 0px;
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
	.detail-link {
		position: relative;
		margin-top: 8px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		.link-des {
			position: relative;
			width: 70px;
			font-weight: bold;
		}
		.link-file {
			position: relative;
			display: flex;
			flex-direction: column;
			.link-item {
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
