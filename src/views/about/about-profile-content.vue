<template>
	<div class="profileContent">
		<div class="content-source">
			<div class="item timecreate"><span>发布日期 </span><span>{{content.timecreate}}</span></div>
			<div class="item views"><span>阅读数 </span><span>{{content.views}}</span></div>
		</div>
		<div class="content-headline">三门峡市第二中学</div>
		<div class="content-content" v-html="content.content"></div>
	</div>
</template>

<script>

export default {
	name: "profileContent",
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
				url: this.$api.about_profile_queryById,
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

.profileContent {
	position: relative;
	width: 100%;
	height: auto;
	.content-headline {
		position: relative;
		text-align: center;
		font-family: "微软雅黑";
	    color: #333333;
	    letter-spacing: 0pt;
	    font-size: 24px;
	    background: #FFFFFF;
	    margin: 16px 0px;
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
