<template>
	<div class="picRoll">
		<div class="vector">
			<div class="gallery" :class="{animation: animation}" ref="gallery">
				<img v-for="item in imgArr" :src="item" />
			</div>
		</div>
		<div class="btn" @click="moveLeft">
			<div>左</div>
		</div>
		<div class="btn2" @click="moveRight">
			<div>右</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "picRoll",
	data () {
		return {
			imgArr: [
				require("../assets/img1.jpg"),
				require("../assets/img2.jpg"),
				require("../assets/img3.jpg"),
				require("../assets/img4.jpg"),
				/*require("../assets/img5.jpg"),
				require("../assets/img6.jpg"),*/
			],
			index: 0,
			len: 0,
			animation: true,
			el: null,
			lock: false
		};
	},
	mounted () {
		this.init();
	},
	methods: {
		init () {
			this.el = this.$refs.gallery;
			this.len = this.imgArr.length;
			if (this.len > 1) {
				let first = this.imgArr[0];
				let last = this.imgArr[this.len - 1];
				this.imgArr.push(first);
				this.imgArr.unshift(last);
				this.index = 1;
				this.el.style.cssText = `left: -${this.distance}px`;
			}
		},
		moveLeft () {
			// if (this.lock) return;
			this.animation = true;
			console.log(this.index);
			this.index += 1;
			this.el.style.cssText = `left: -${this.distance}px`;
			if (this.index === this.len + 1) {
				this.el.addEventListener("transitionend", () => {
					console.log("*****");
					this.animation = false;
					this.index = 1;
					this.el.style.cssText = `left: -${this.distance}px`;
					this.lock = false;
				}, false);
			}
		},
		moveRight () {
			this.index -= 1;
			this.el.style.cssText = `left: -${this.distance}px`;
		}
	},
	computed: {
		distance () {
			return 1280 * this.index;
		}
	}
};

</script>

<style lang="scss" scoped>
	.picRoll {
		position: relative;
		width: 1280px;
		height: 360px;
		line-height: 360px;
		background: yellow;
		margin: 0 auto;
		.btn {
			position: absolute;
			height: 100px;
			left: 0;
			top: 500px;
			line-height: 100px;
			width: 100px;
			border: 1px solid black;
			z-index: 2000;
		}
		.btn2 {
			position: absolute;
			height: 100px;
			top: 500px;
			right: 0;
			line-height: 100px;
			width: 100px;
			border: 1px solid black;
			cursor: pointer;
			background: red;
			z-index: 2000;
		}
		.vector {
			position: relative;
			width: 1280px;
			height: 360px;
			line-height: 360px;
			overflow: hidden;
			.gallery {
				position: absolute;
				height: 360px;
				left: 0;
				line-height: 360px;
				white-space: nowrap;
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				&.animation {
					transition: left ease 1s;
				}
				img {
					position: relative;
					float: left;
					margin: 0;
					height: 360px;
					width: 1280px;
					line-height: 1280px;
					flex: 1;
				}
			}
		}
	}
</style>
