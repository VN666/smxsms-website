<template>
	<div class="news">
		<h-block :menuData="menuData">
			<div slot="area" :menuData="menuData"></div>
		</h-block>
	</div>
</template>

<script>

import menu from "../../config/menu";

export default {
	name: "news",
	data () {
		return {
			menuData: [],
			resData: {}
		};
	},
	created () {
		this.menuData = menu[2];
		console.log(this.menuData);
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
	.news {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
