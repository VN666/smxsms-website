<template>
	<div class="hHeader">
		<img src="@/src/assets/logo.png" />
	</div>
</template>

<script>

export default {
	name: "h-header",
	data () {
		return {};
	}
};

</script>

<style lang="scss" scoped>
	.hHeader {
		position: relative;
		width: 1280px;
		height: 128px;
		line-height: 128px;
		background: #FFFFFF;
		margin: 0 auto;
		img {
			position: relative;
			vertical-align: middle;
		}
	}
</style>
