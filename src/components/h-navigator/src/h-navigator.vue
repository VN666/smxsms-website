<template>
	<div class="hNavigator">
		<h-drop-down-list v-for="(item, index) in menu" :menuData="item" :key="index" @click="doClick(item)"></h-drop-down-list>
	</div>
</template>

<script>

import menu from "@/src/config/menu.js";

export default {
	name: "h-navigator",
	data () {
		return {
			menu: menu
		};
	},
	methods: {
		doClick (item) {
			if (item.children.length === 0) {
				this.$router.push({ path: item.path, query:{index: 0 }});
			}
		}
	}
};

</script>

<style lang="scss" scoped>
	.hNavigator {
		position: relative;
		width: 1280px;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		padding: 0;
		background: #338BF0;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
	}
</style>
