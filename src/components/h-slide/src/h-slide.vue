<template>
	<div class="exis-slide">
		<div class="inner-text" :class="{'inner-text-done':isDone}" v-text="isDone?innerTextDone:innerText"></div>
		<div :class="{'trail-done': isDone}" class="trail" :style="{width:`${moveX+1}px`,transition:`${currentX?'':'width 0.2s ease-in'}`}"></div>
		<div class="stick"  :class="stickClass" :style="{width: `${slideH}px`,transform:`translateX(${moveX}px)`, transition:`${currentX?'':'transform 0.2s ease-in'}`}" @mousedown="drag" @mouseenter.stop.prevent.capture="isHover=true;" @mouseleave.stop.prevent.capture="currentX?'':isHover=false">
			<svg v-if="isDone" t="1568017168321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4994" width="32" height="32"><path d="M997.888 70.144C686.592 261.12 460.8 502.272 358.912 623.104L110.08 428.032 0 516.608l429.568 437.248C503.296 764.416 737.792 394.24 1024 131.072l-26.112-60.928m0 0z" p-id="4995" fill="#E9F9F6"></path></svg>
			<svg v-if="isHover&&!isDone" t="1568010814787" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4193" width="32" height="32"><path d="M45.3 559.8v-95.4L0.1 466.9v90.4z" fill="#FFFFFF" p-id="4194"></path><path d="M180.9 567.4V456.9l-90.4 5v100.4z" fill="#FFFFFF" p-id="4195"></path><path d="M1024.1 512.1L768.4 240.9v183.3l-542.3 30.2v115.5L768.4 600v183.3z" fill="#FFFFFF" p-id="4196"></path></svg>
			<svg v-if="!isHover&&!isDone" t="1568010648470" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3939" width="32" height="32"><path d="M45.3 559.8v-95.4L0.1 466.9v90.4z" fill="#4F4F4F" p-id="3940"></path><path d="M180.9 567.4V456.9l-90.4 5v100.4z" fill="#4F4F4F" p-id="3941"></path><path d="M1024.1 512.1L768.4 240.9v183.3l-542.3 30.2v115.5L768.4 600v183.3z" fill="#4F4F4F" p-id="3942"></path></svg>
		</div>
	</div>
</template>

<script>

export default {
	name: "h-slide",
	data () {
		return {
			slideW: 0,
			slideH: 0,
			innerText: "向右拖动滑块验证",
			innerTextDone: "验证通过",
			isHover: false,
			startX: 0,
			currentX: 0,
			isDone: false
		};
	},
	mounted () {
		this.slideW = this.$el.offsetWidth;
		this.slideH = this.$el.offsetHeight;
	},
	methods: {
		drag (e) {
			if (this.isDone) return;
			this.startX = e.pageX;
			document.addEventListener("mousemove", this.move, false);
			document.addEventListener("mouseup", this.up, false);
		},
		move (e) {
			this.currentX = e.pageX;
		},
		up (e) {
			document.removeEventListener("mousemove", this.move, false);
			document.removeEventListener("mouseup", this.up, false);
			this.isDone ? "" : this.currentX = 0;
			// this.isDone ? this.$emit("slide-check", true) : this.$emit("slide-check", false);
		},
		reload () {
			this.currentX = 0;
			this.isDone = false;
		}
	},
	computed: {
		moveX () {
			if ((this.currentX - this.startX) >= this.maxX) {
				this.isDone = true;
				this.up();
				return this.maxX;
			}
			return (this.currentX - this.startX) > 0 ? (this.currentX - this.startX) : 0
		},
		maxX () {
			return (this.slideW - this.slideH) ? (this.slideW - this.slideH) : Infinity;
		},
		stickClass () {
			return this.isDone ? "stick-done" : this.isHover ? "stick-hover" : "stick-normal";
		}
	},
	watch: {
		isDone (newV, oldV) {
			if (newV) this.$emit("slide-check", true);
		}
	}
}

</script>

<style lang="scss">
	.exis-slide {
		position: relative;
		height: calc(100%);
		width: calc(100%);
		background: #F7F9FA;
		.inner-text {
			position: relative;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #999999;
			font-size: 14px;
			user-select: none;
			z-index: 2;
			&.inner-text-done {
				color: #FFFFFF;
			}
		}
		.stick {
			position: absolute;
			top: 0px;
			left: 0px;
			height: 100%;
			border-radius: 1px;
			box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.1);
			cursor: pointer;
			z-index: 3;
			box-sizing: border-box;
			&.stick-done {
				border: 1px solid transparent;
				background: #52CCBA;
			}
			&.stick-hover {
				border: 1px solid transparent;
				background: #2080F7;
			}
			&.stick-normal {
				border: 1px solid #DDDDDD;
				background: #FFFFFF;
			}
			svg {
				position: absolute;
				max-height: 70%;
				max-width: 70%;
				top: 0px;
				left: 0px;
				bottom: 0px;
				right: 0px;
				margin: auto;
			}
		}
		.trail {
			box-sizing: border-box;
			position: absolute;
			height: 100%;
			width: 0px;
			left: 0px;
			top: 0;
			border: 1px solid #2080F7;
			border-right: none;
			background: rgba(32, 128, 247, 0.3);
			z-index: 1;
			&.trail-done {
				background-color: rgba(82,204,186,0.5);
				border-color: #52CCBA;
				border-right: none;
			}
		}

	}
</style>
