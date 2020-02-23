<template>
	<div class="teamContent">
		<div class="content-source">
			<div class="item timecreate"><span>发布日期 </span><span>{{content.timecreate}}</span></div>
			<div class="item views"><span>阅读数 </span><span>{{content.views}}</span></div>
		</div>
		<div class="content-content" v-html="$options.filters.bgFilter(content.content)"></div>
	</div>
</template>

<script>

export default {
	name: "teamContent",
	data () {
		return {
			content: {}
		};
	},
	mounted () {
		this.requestData();
	},
	methods: {
		requestData () {
			this.$http({
				method: "post",
				url: this.$api.about_team_queryById,
				data: {
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

.teamContent {
	position: relative;
	width: 100%;
	height: auto;
	.content-source {
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
