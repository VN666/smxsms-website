<template>
	<div class="hNavigator">
		<h-drop-down-list v-for="(item, index) in menu" :menuData="item" :key="index"></h-drop-down-list>
	</div>
</template>

<script>
import hDropDownList from "./h-dropDownList.vue";
import menu from "../config/menu";

export default {
	name: "hNavigator",
	data () {
		return {
			menu: menu
		};
	},
	components: { hDropDownList }
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
