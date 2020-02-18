<template>
	<div class="breadcrumb">
		<div class="location">
			<img src="@/src/assets/icons/school.png" />
			<span>您现在的位置：</span>
			<span v-for="item in bread" :key="item">{{item}}</span>
			<span class="back" @click="goBack">
				<el-button size="mini" plain style="hieght: 24px;"><i class="el-icon-back el-icon--left"></i>返回</el-button>
			</span>
		</div>
		<div class="line"></div>
	</div>
</template>

<script>

export default {
	name: "h-breadcrumb",
	data () {
		return {}
	},
	props: {
		bread: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		goBack () {
			this.$router.go(-1);
		}
	}
}

</script>

<style lang="scss">
	.breadcrumb {
		position: relative;
		width: 100%;
		height: 36px;
		.location {
			position: relative;
			width: 100%;
			height: 36px;
			display: flex;
			align-items: center;
			img {
				margin-right: 8px;
			}
			span {
				color: #666666;
				font-size: 14px;
			}
			span:nth-of-type(n+2) {
				&:after {
					content: "/";
					margin: 0px 8px;
				}
			}
			span:nth-last-child(2) {
				color: #338BF0;
				&:after {
					content: ""
				}
			}
			.back {
				float: right;
				position: absolute;
				right: -12px;
				&:after {
					content: "" !important;
				}
			}
		}
		.line {
			position: relative;
			height: 1px;
			width: 100%;
			margin-top: 5px;
			background: #DDDDDD;
		}
	}
</style>
