<template>
	<div class="notice" @mouseenter="">
		<div class="vector"
			:style="{height:len*100+'%',transform:`translateY(-${currentIndex/len*100+'%'}`,transition:`${isResetIndex?'':`transform ${transitionInterval/1000}s`}`}"
		>
			<div class="item" v-for="(notice,key) in noticeArr" @click="goNotice(notice)">
				{{notice.title}}
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "h-notice",
	data () {
		return {
			currentIndex: 0,
			transitionInterval: 500,
			isResetIndex: false,
			isTransitioning: false,
			timer: null
		};
	},
	props: {
		notices: {
			type: Array,
			required: true
		},
		interval: {
			type: Number,
			default: 3000
		}
	},
	mounted () {
		this.startMove();
	},
	methods: {
		goNotice (notice) {
			this.$emit("noticeClick", notice);
		},
		startMove () {
			this.timer = setInterval(() => {
				this.move();
			}, this.interval);
		},
		stopMove () {
			clearInterval(this.timer);
		},
		move () {
			if (this.isTransitioning) return;
			this.currentIndex++;
		},
		mouseFn (e) {
			if (e.type === "mouseenter") {
				this.startMove();
			} else {
				this.stopMove();
			}
		}
	},
	computed: {
		noticeArr () {
			return [...this.notices, this.notices[0]];
		},
		len () {
			return this.noticeArr.length;
		}
	},
	watch: {
		currentIndex (newIndex, oldIndex) {
			if (newIndex === 0 && oldIndex === this.len - 1) {
				this.isResetIndex = true;
				return;
			}
			this.isResetIndex = false;
			this.isTransitioning = true;
			setTimeout(() => {
				if (this.currentIndex === this.len - 1) this.currentIndex = 0;
				this.isTransitioning = false;
			}, this.transitionInterval);

		}
	}
}

</script>

<style lang="scss" scoped>
	.notice {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		.vector {
			position: relative;
			width: 100%;
			.item {
				width: 100%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: #000000;
				font-size: 16px;
				&:hover {
					color: #338BF0;
					text-decoration: underline;
					cursor: pointer;
				}
			}
		}
	}
</style>
