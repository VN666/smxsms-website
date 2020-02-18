<template>
	<div class="enroll-add">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '新闻动态', '招生信息', '新增']"></h-breadcrumb>
		</div>
	</div>
</template>

<script>

export default {
	name: "enroll-add",
	data () {
		return {};
	},
}

</script>

<style lang="scss" scoped>
	.enroll-add {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
