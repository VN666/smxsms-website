<template>
	<div class="service">
		<h-block :menuData="menuData">
			<div slot="area">
				<router-view></router-view>
			</div>
		</h-block>
	</div>
</template>

<script>

import menu from "../../config/menu";

export default {
	name: "service",
	data () {
		return {
			menuData: [],
			resData: {}
		};
	},
	created () {
		this.menuData = menu[5];
	},
	methods: {}
}

</script>

<style lang="scss" scoped>
	.service {
		position: relative;
		width: 100%;
		height: 100%;
		.area {
			position: relative;
			height: auto;
			width: 100%;
		}
	}
</style>
