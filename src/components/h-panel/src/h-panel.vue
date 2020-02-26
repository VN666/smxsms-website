<template>
	<div class="panel">
		<div class="title">
			<span class="word">{{title}}</span>
			<span class="icon" @click="moreClick">>> more</span>
		</div>
		<div class="content">
			<ul class="contentUl">
				<li v-for="(item,index) in content" v-if="index<max" @click="itemClick(item)">
					<span class="itemTitle">{{item.title}}</span>
					<span class="itemDate">{{item.date}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

export default {
	name: "h-panel",
	props: {
		title: {
			type: String,
			required: true
		},
		content: {
			type: Array,
			default: () => []
		},
		max: {
			type: Number,
			default: 5
		}
	},
	data () {
		return {};
	},
	created () {
	},
	methods: {
		moreClick () {
			this.$emit("moreClick");
		},
		itemClick (item) {
			this.$emit("itemClick", item)
		}
	}
}

</script>

<style lang="scss" scoped>

.panel {
	position: relative;
	width: 100%;
	height: 100%;
	background: #FFFFFF;
	border: 1px solid #E7EAF1;
	border-radius: 5px;
	box-shadow: 0px 1px 3px rgba(0, 37, 55, 0.05);
	padding: 0px 10px;
	.title {
		position: relative;
		height: 40px;
		line-height: 40px;
		width: 100%;
		border-bottom: 1px solid #339BF0;
		color: #339BF0;
		font-size: 18px;
		&::before {
			position: absolute;
		    top: 0px;
		    left: 0px;
		    bottom: 0px;
		    margin: auto 0px;
		    content: "";
		    height: 22px;
		    width: 4px;
		    background-color: #339BF0;
		}
		.word {
			float: left;
			margin-left: 16px;
		}
		.icon {
			float: right;
			color: #666666;
			font-size: 14px;
			opacity: 0.9;
			cursor: pointer;
		}
	}
	.content {
		position: relative;
		height: calc(100% - 40px);
		width: 100%;
		overflow: hidden;
		.contentUl {
			position: relative;
			height: 280px;
			padding: 0 5px;
			margin: 8px 0px;
			overflow: hidden;
			li {
				list-style: none;
				height: 36px;
				line-height: 36px;
				color: #000000;
				cursor: pointer;
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: space-between;
				align-items: center;
				&:hover {
					opacity: 0.7;
					text-decoration: underline;
				}
				img {
					margin-right: 0;
				}
				.itemTitle {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					text-align: left;
					flex: 4;
					max-width: 300px;
				}
				.itemDate {
					font-size: 13px;
					text-align: right;
					flex: 1;
				}
			}
		}
	}
}

</style>
