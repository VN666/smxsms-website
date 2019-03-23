<template>
	<div class="index">
		<h-header></h-header>
		<h-navigator></h-navigator>

		<div class="wPicRoll"><h-picRoll></h-picRoll></div>

	</div>
</template>

<script>
import hHeader from "../../components/h-header";
import hNavigator from "../../components/h-navigator";
import hPicRoll from "../../components/h-picRoll";

export default {
	name: "index",
	data () {
		return {};
	},
	components: { hHeader, hNavigator, hPicRoll }
};

</script>

<style lang="scss" scoped>
	.index {
		position: relative;
		width: 100%;
		height: 100%;
		.wPicRoll {
			position: relative;
			width: 1280px;
			height: 360px;
			margin: 0 auto;
		}
	}
</style>
