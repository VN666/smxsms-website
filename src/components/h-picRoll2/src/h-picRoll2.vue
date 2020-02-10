<template>
	<div class="picRoll" @mouseenter="mouseFn" @mouseleave="mouseFn" :style="customStyle">
		<div class="vector"
			:style="{width:len*100+'%',transform:`translateX(-${currentIndex/len*100+'%'}`,transition:`${isResetIndex?'':`transform ${transitionInterval/1000}s`}`}"
			v-if="transitionStyle==='transform'"
		>
			<div class="item" v-for="(item,index) in imgArr" :key="index"
				:style="{width:100/len+'%',backgroundImage:`url(${item.src})`}">
			</div>
		</div>
		<div class="vector" :style="{width:'100%'}" v-if="transitionStyle==='fade'">
			<transition name="fade">
				<div class="item" v-for="(item,index) in imgs" :key="index"
					:style="{width:'100%', backgroundImage:`url(${item.src})`}"
					v-if="index+1===currentIndex||(index+1===1&&currentIndex===len-1)||(index+1===imgs.length&&currentIndex===0)"
				>
				</div>
			</transition>
		</div>
		<!-- <div class="btn btnL" @click="move('L')" v-if="showBtn&&isBtn"><span v-html="'<'"></span></div>
		<div class="btn btnR" @click="move('R')" v-if="showBtn&&isBtn"><span v-html="'>'"></span></div> -->
		<div class="cirBtn" v-if="isCirBtn">
			<div v-for="n in imgs.length" @mouseenter="cirBtn(n)"
				:class="{'hover':n===currentIndex||(n===1&&currentIndex===len-1)||(n===imgs.length&&currentIndex===0)}"
			>
			</div>
		</div>
		<div class="prompt" v-if="isPrompt">
			<span class="title">{{imgArr[currentIndex].title}}</span>
			<ul>
				<li v-for="(item,index) in imgs"
					:class="{'hover':index+1===currentIndex||(index+1===1&&currentIndex===len-1)||(index+1===imgs.length&&currentIndex===0)}"
					@mouseenter="promptLi(index+1)"
				>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

export default {
	name: "h-picRoll2",
	props: {
		imgs: {
			type: Array,
			required: true
		},
		interval: {
			type: Number,
			default: 10000
		},
		isBtn: {
			type: Boolean,
			default: true
		},
		isCirBtn: {
			type: Boolean,
			default: true
		},
		isPrompt: {
			type: Boolean,
			default: true
		},
		customStyle: {
			type: Object,
			default: () => null
		},
		transitionStyle: {
			type: String,
			default: "transform"
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
		},
		promptLi (index) {
			this.currentIndex = index;
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
			/* .fade-enter-active, .fade-leave-active {
			  	transition: opacity 10s linear 0s;
			} */
			.fade-enter, .fade-leave-to {
			  	opacity: 0;
			}
		}
		.prompt {
			position: absolute;
			width: 100%;
			height: 40px;
			bottom: 0;
			background: #000000;
			opacity: 0.75;
			display: flex;
			justify-content: space-between;
			align-items: center;
			span,ul {
				display: inline-block;
			}
			span.title {
				height: 40px;
				line-height: 40px;
				color: #FFFFFF;
				text-align: center;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				flex: 5;
				opacity: 1;
				&:hover {
					text-decoration: underline;
					cursor: pointer;
				}
			}
			ul {
				width: auto;
				height: 24px;
				line-height: 24px;
				margin-right: 10px;
				border-radius: 20px;
				padding: 0px 5px;
				text-align: center;
				background: #FFFFFF;
				opacity: 0.8;
				li {
					display: inline-block;
					height: 10px;
					width: 10px;
					border-radius: 5px;
					list-style: none;
					background: #000000;
					opacity: 0.75;
					margin: 0 3px;
					&.hover {
						opacity: 1;
					}
					&:hover {
						cursor: pointer;
						opatity: 1;
					}
				}
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
