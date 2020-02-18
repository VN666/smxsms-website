<template>
	<div class="media-add">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '新闻动态', '媒体报道', '新增']"></h-breadcrumb>
		</div>
	</div>
</template>

<script>

export default {
	name: "media-add",
	data () {
		return {};
	},
}

</script>

<style lang="scss" scoped>
	.media-add {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
