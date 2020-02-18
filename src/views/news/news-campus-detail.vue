<template>
	<div class="campusDetail">
		<div class="detail-headline">{{content.headline}}</div>
		<div class="detail-source">
			<div class="item timecreate"><span>发布日期 </span><span>{{content.timecreate}}</span></div>
			<div class="item origin" v-if="content.origin"><span>来源 </span><span>{{content.origin}}</span></div>
			<div class="item author"><span>作者 </span><span>{{content.author}}</span></div>
			<div class="item views"><span>阅读数 </span><span>{{content.views}}</span></div>
		</div>
		<div class="detail-content" v-html="$options.filters.bgFilter(content.content)"></div>
	</div>
</template>

<script>

export default {
	name: "campusDetail",
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
				url: this.$api.news_campus_queryById,
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

.campusDetail {
	position: relative;
	width: 100%;
	margin-top: 16px;
	.detail-headline {
		position: relative;
		text-align: center;
		font-weight: bold;
		font-size: 24px;
		color: #404040;
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
}

</style>
