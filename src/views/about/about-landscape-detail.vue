<template>
	<div class="leaderContent">
		<div class="content-source">
			<div class="item timecreate"><span>发布日期 </span><span>{{content.timecreate}}</span></div>
			<div class="item views"><span>阅读数 </span><span>{{content.views}}</span></div>
		</div>
		<div class="content-img"><img :src="content.picSrc" /></div>
		<div class="content-name">{{content.name}}</div>
	</div>
</template>

<script>

export default {
	name: "leaderContent",
	data () {
		return {
			content: {},
			id: ""
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
				url: this.$api.about_landscape_queryById,
				data: {
					addViews: true,
					id: this.id
				}
			}).then((res) => {
				this.content = res.data;
			})
		}
	}
}

</script>

<style lang="scss" scoped>

.leaderContent {
	position: relative;
	width: 100%;
	height: auto;
	.content-img {
		position: relative;
		width: auto;
		height: 450px;
		text-align: center;
		margin: 16px auto;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px;
		img {
			width: auto;
			height: 100%;
		}
	}
	.content-name {
		position: relative;
		margin-top: 16px;
		color: #666666;
		font-size: 24px;
		line-height: 24px;
		text-align: center;
	}
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
