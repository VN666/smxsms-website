<template>
	<div class="notice-list">
		<div class="breadcrumb_wrap" ref="breadcrumb_wrap">
			<h-breadcrumb :bread="['后台管理', '新闻动态', '招生信息', '列表']"></h-breadcrumb>
		</div>

		<div class="option_wrap" ref="option_wrap">
			<el-button type="success" size="mini" @click="goPath('enroll-add')"><i class="el-icon-plus el-icon--left"></i>新增</el-button>
			<svg @click="tiggerFilter" v-if="!showFilter" t="1568566044267" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10102" width="32" height="32"><path d="M764.3136 270.6944l-167.5776 201.3184v316.0064a135.8848 135.8848 0 1 1-271.7696 0V472.0128L157.3888 270.6944A89.1904 89.1904 0 0 1 225.9456 124.416h469.8112a89.1904 89.1904 0 0 1 68.5568 146.2784z" fill="#666666" p-id="10103"></path><path d="M844.8 533.2992h-179.2a30.72 30.72 0 0 1 0-61.44h179.2a30.72 30.72 0 0 1 0 61.44zM844.8 651.3664h-179.2a30.72 30.72 0 0 1 0-61.44h179.2a30.72 30.72 0 0 1 0 61.44zM844.8 769.4336h-179.2a30.72 30.72 0 0 1 0-61.44h179.2a30.72 30.72 0 0 1 0 61.44z" fill="#666666" p-id="10104"></path></svg>
			<svg @click="tiggerFilter" v-else t="1568566398017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10362" width="32" height="32"><path d="M776.4992 176.4864a88.2688 88.2688 0 0 0-80.7424-51.2H225.9456A89.2416 89.2416 0 0 0 157.3888 271.36l167.5776 201.3696v316.0576a135.8848 135.8848 0 0 0 271.7696 0V472.7296L764.3136 271.36a88.3712 88.3712 0 0 0 12.1856-94.8736z m-59.392 55.6032l-174.6944 209.92a30.72 30.72 0 0 0-7.1168 19.6608v327.168a74.4448 74.4448 0 0 1-148.8896 0V461.6192a30.72 30.72 0 0 0-7.0656-19.6608L204.8 232.0896a27.7504 27.7504 0 0 1 21.2992-45.5168h469.8112a27.7504 27.7504 0 0 1 21.3504 45.5168z" fill="#666666" p-id="10363"></path><path d="M634.88 503.3472a30.72 30.72 0 0 0 30.72 30.72h179.2a30.72 30.72 0 0 0 0-61.44h-179.2a30.72 30.72 0 0 0-30.72 30.72zM844.8 590.6944h-179.2a30.72 30.72 0 0 0 0 61.44h179.2a30.72 30.72 0 0 0 0-61.44zM844.8 708.7616h-179.2a30.72 30.72 0 0 0 0 61.44h179.2a30.72 30.72 0 0 0 0-61.44z" fill="#666666" p-id="10364"></path></svg>
		</div>
	</div>
</template>

<script>

export default {
	name: "notice-list",
	data () {
		return {
			showFilter: false
		};
	},
	methods: {
		tiggerFilter () {
        	this.showFilter = !this.showFilter;
        	//this.$nextTick(() => this.resize());
        }
	}
}

</script>

<style lang="scss" scoped>
	.notice-list {
		position: relative;
		width: 100%;
		height: 100%;
		.breadcrumb_wrap {
			position: relative;
			height: 48px;
			line-height: 48px;
			width: 100%;
			padding: 6px 16px;
			box-sizing: border-box;
		}
		.option_wrap {
			position: relative;
			padding: 0px 16px;
			height: 28px;
			margin: 8px 0px;
			svg {
				float: right;
				width: 28px;
				height: 28px;
				cursor: pointer;
			}
		}
	}
</style>
