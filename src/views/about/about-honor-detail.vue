<template>
	<div class="honorDetail">
		<div class="detail-source">
			<div class="item timecreate"><span>发布日期 </span><span>{{content.timecreate}}</span></div>
			<div class="item views"><span>阅读数 </span><span>{{content.views}}</span></div>
		</div>
		<div class="detail-headline">{{content.headline}}</div>
		<div class="detail-content" v-html="content.content"></div>
	</div>
</template>

<script>

export default {
	name: "honorDetail",
	data () {
		return {
			id: "",
			content: () => {}
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
				url: this.$api.about_honor_queryById,
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

.honorDetail {
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
}

</style>
