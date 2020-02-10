<template>
	<div class="bgImgs">
		<h-picRoll :imgs="imgs" :isCirBtn="true" :isPrompt="false"></h-picRoll>
	</div>
</template>

<script>

export default {
	name: "h-bgImgs",
	data () {
		return {
			imgs: [
				{
					title: "市二中找平代课教师启事",
					src: "/static/index/img2.jpg"
				},
				{
					title: "二、2017年市二中七年级新生招生简章",
					src: "/static/index/img2.jpg"
				},
				{
					title: "e44",
					src: "/static/index/img3.jpg"
				},
				{
					title: "4",
					src: "/static/index/img4.jpg"
				},
				{
					title: "5",
					src: "/static/index/img5.jpg"
				},
				{
					title: "6",
					src: "/static/index/img6.jpg"
				},
				{
					title: "7",
					src: "/static/index/img7.jpg"
				}
			]
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
