<template>
	<div class="bgImgs">
		<h-picRoll :imgs="bgImgs" :isCirBtn="true" :isPrompt="false" v-if="show"></h-picRoll>
	</div>
</template>

<script>

export default {
	name: "h-bgImgs",
	data () {
		return {
			bgImgs: [],
			show: false
		}
	},
	mounted () {
		this.requestData();
	},
	methods: {
		requestData () {
			this.$http({
				method: "post",
				url: this.$api.bg_imgs_query,
				data: {
					pageNo: 1,
					pageSize: 50
				}
			}).then((res) => {
				this.bgImgs = res.data.list;
				this.bgImgs.forEach((item) => {
					item.src = item.picSrc;
					item.title = item.id;
				});
				this.show = true;
			});
		}
	}
}


</script>

<style lang="scss" scoped>

.bgImgs {
	position: relative;
	width: 100%;
	height: 100%;
}

</style>
