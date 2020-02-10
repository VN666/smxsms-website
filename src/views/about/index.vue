<template>
	<div class="about">
		<h-block :menuData="menuData">
			<div slot="area" v-html="resData.content"></div>
		</h-block>
	</div>
</template>

<script>

import menu from "../../config/menu";

export default {
	name: "about",
	data () {
		return {
			menuData: [],
			resData: {}
		};
	},
	created () {
		this.menuData = menu[1];
		this.requestData();
	},
	methods: {
		requestData () {
			this.$http({
				method: "post",
				url: this.$api.news_campus_query
			}).then((res) => {
				this.resData = res.data[1];
				console.log(res.data[1]);
			})
		}
	}
}

</script>

<style lang="scss" scoped>
	.about {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
