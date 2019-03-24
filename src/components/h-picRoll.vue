<template>
	<div class="picRoll" @mouseenter="mouseFn" @mouseleave="mouseFn">
		<div class="vector"
			:style="{width:len*100+'%',transform:`translateX(-${currentIndex/len*100+'%'}`,transition:`${isResetIndex?'':`transform ${transitionInterval/1000}s`}`}"
		>
			<div class="item" v-for="(item,index) in imgArr" :key="index"
				:style="{width:100/len+'%',backgroundImage:`url(${item.src})`}">
			</div>
		</div>
		<div class="btn btnL" @click="move('L')" v-if="showBtn&&isBtn"><span v-html="'<'"></span></div>
		<div class="btn btnR" @click="move('R')" v-if="showBtn&&isBtn"><span v-html="'>'"></span></div>
		<div class="cirBtn" v-if="isCirBtn">
			<div v-for="n in imgs.length" @mouseenter="cirBtn(n)"
				:class="{'hover':n===currentIndex||(n===1&&currentIndex===len-1)||(n===imgs.length&&currentIndex===0)}"
			>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "picRoll",
	props: {
		imgs: {
			type: Array,
			required: true
		},
		interval: {
			type: Number,
			default: 5000
		},
		isBtn: {
			type: Boolean,
			default: true
		},
		isCirBtn: {
			type: Boolean,
			default: true
		}
	},
	data () {
		return {
			showBtn: false,
			currentIndex: 1,
			transitionInterval: 1000,
			isResetIndex: false,
			isTransitioning: false,
			timer: null
		};
	},
	created () {
		this.startMove();
	},
	methods: {
		startMove () {
			this.timer = setInterval(() => {
				this.move("R");
			}, this.interval);
		},
		stopMove () {
			clearInterval(this.timer);
		},
		move (direction) {
			if (this.isTransitioning) return;
			if (direction === "R") {
				this.currentIndex++;
			} else {
				this.currentIndex--;
			}
		},
		mouseFn (e) {
			if (e.type === "mouseenter") {
				this.showBtn = true;
				this.stopMove();
			} else {
				this.showBtn = false;
				this.startMove();
			}
		},
		cirBtn (n) {
			this.currentIndex = n;
		}
	},
	computed: {
		len () {
			return this.imgArr.length;
		},
		imgArr () {
			return [this.imgs[this.imgs.length - 1], ...this.imgs, this.imgs[0]];
		}
	},
	watch: {
		currentIndex (newIndex, oldIndex) {
			if ((newIndex === 1 && oldIndex === this.len - 1) || (newIndex === this.len - 2 && oldIndex === 0)) {
				this.isResetIndex = true;
				return;
			}
			this.isResetIndex = false;
			this.isTransitioning = true;
			setTimeout(() => {
				if (this.currentIndex === this.len - 1) this.currentIndex = 1;
				if (this.currentIndex === 0) this.currentIndex = this.len - 2;
				this.isTransitioning = false;
			}, this.transitionInterval);

		}
	},
};

</script>

<style lang="scss" scoped>
	.picRoll {
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 0px 0px 5px 5px;
		overflow: hidden;
		.vector {
			position: relative;
			height: 100%;
			.item {
				display: inline-block;
				height: 100%;
				background: #CCCCCC no-repeat center/cover;
			}
		}
		.cirBtn {
			position: absolute;
			width: 100%;
			height: 12px;
			line-height: 12px;
			bottom: 8px;
			text-align: center;
			div {
				display: inline-block;
				width: 12px;
				height: 12px;
				margin: 0px 5px;
				border-radius: 6px;
				background: #FFFFFF;
				opacity: 0.7;
				cursor: pointer;
				&.hover {
					background: #338BF0;
					opacity: 1;
				}
			}
		}
		.btn {
			position: absolute;
			height: 100%;
			width: 50px;
			top: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			&.btnL {
				left: 0px;
			}
			&.btnR {
				right: 0px;
			}
			span {
				font-size: 48px;
				opacity: 0.7;
				cursor: pointer;
			}
		}
	}
</style>
