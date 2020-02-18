<template>
	<div class="dropDownList" @mouseover="hMouseOver" @mouseout="hMouseOut">
		<span @click="doClick(menuData.router, 0)">{{menuData.title}}</span>
		<ul v-show="showUl">
			<li v-for="(item, index) in menuData.children" :key="index" @click="doClick(item.router, index)">{{item.title}}</li>
		</ul>
	</div>
</template>

<script>

export default {
	name: "h-drop-down-list",
	data () {
		return {
			showUl: false
		};
	},
	props: ["menuData"],
	methods: {
		hMouseOver () {
			this.showUl = true;
		},
		hMouseOut () {
			this.showUl = false;
		},
		doClick (path, index) {
			if (this.$route.path !== path)
				this.$router.push({ path: path, query:{index: index }});
		}
	}
}

</script>

<style lang="scss" scoped>
	.dropDownList {
		position: relative;
		display: inline-block;
		height: 40px;
		line-height: 40px;
		flex: 1;
		cursor: pointer;
		&:first-child {
			span {
				background: #1077CC;
				border-top-left-radius: 4px;
			}
		}
		&:last-child {
			span {
				border-top-right-radius: 4px;
			}
		}
		span {
			display: block;
			width: 100%;
			height: 40px;
			line-height: 40px;
			text-align: center;
			color: #FFFFFF;
			font-size: 16px;
			font-family: "Microft YaHei";
			letter-spacing: 1px;
			&:hover {
				background: #1077CC;
			}
		}
		ul {
			position: absolute;
			width: 100%;
			padding: 0;
			margin: 0;
			top: 40px;
			left: 0;
			background: #338BF0;
			border-bottom-left-radius: 4px;
			border-bottom-right-radius: 4px;
			z-index: 100;
			li {
				position: relative;
				list-style: none;
				height: 40px;
				line-height: 40px;
				padding: 0 15px;
				overflow: hidden;
				color: #FFFFFF;
				font-size: 15px;
				font-family: "Microft YaHei";
				letter-spacing: 1px;
				text-align: center;
				border-bottom: 1px dashed #FFFFFF;
				&:last-child {
					border-bottom: none;
					border-bottom-left-radius: 4px;
					border-bottom-right-radius: 4px;
				}
				&:hover {
					background: #1077CC;
				}
			}
		}
	}
</style>
