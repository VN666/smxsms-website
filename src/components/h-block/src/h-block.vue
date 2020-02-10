<template>
	<div class="block">
		<h-header></h-header>
		<h-navigator></h-navigator>
		<div class="main">
			<div class="wPicRoll">
				<h-bgImgs></h-bgImgs>
			</div>
			<div class="content">
				<div class="nav">
					<div class="title">
						<span></span>{{menuData.title}}
					</div>
					<ul class="subTitle">
						<li v-for="(item, index) in menuData.children" :class="{'active':currentIndex===index}" :key="index" @click="subTitleClick(index)">{{item.title}}</li>
					</ul>
				</div>
				<div class="list">
					<div class="location">
						<img src="@/src/assets/icons/school.png" />
						<span>您现在的位置：</span>
						<span>网站首页</span>
						<span>{{menuData.children[currentIndex].title}}</span>
					</div>
					<div class="line"></div>
					<slot name="area"></slot>
				</div>
			</div>
			<div class="social">
				<div class="socialInner">
					<ul>
						<li>登录</li>
						<li>注册</li>
						<li>管理员入口</li>
					</ul>
					<div class="line"></div>
					<img src="@/src/assets/icons/qq.png" />
					<img src="@/src/assets/icons/wechat.png" />
					<img src="@/src/assets/icons/weibo.png" />
					<img src="@/src/assets/icons/phone.png" />
					<span>0398-XXXXXXX</span>
				</div>
			</div>
			<div class="copyRight">
				<p>Copyright © 2013-1019 三门峡市第二中学 网站备案：豫ICP备11020767</p>
				<p>Powered by: VN666 地址：三门峡市黄河路中段 邮编：472000</p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "h-block",
	props: ["menuData"],
	data () {
		return {
			currentIndex: 0
		};
	},
	mounted () {
		this.currentIndex = parseInt(this.$route.params.index);
	},
	methods: {
		subTitleClick (index) {
			this.currentIndex = index;
		}
	},
	watch: {
		"$route" (to, from) {
			this.currentIndex = parseInt(this.$route.params.index);
		}
	}
}

</script>

<style lang="scss" scoped>
	.block {
		position: relative;
		width: 100%;
		height: 100%;
		.main {
			position: relative;
			width: 100%;
			height: 100%;
			background: #F2F2F2
		}
		.wPicRoll {
			position: relative;
			width: 1280px;
			height: 360px;
			margin: 0px auto;
		}
		.content {
			position: relative;
			width: 1280px;
			height: auto;
			overflow-y: auto;
			margin: 16px auto;
			display: flex;
			justify-content: space-between;
			.nav {
				position: relative;
				width: 248px;
				height: auto;
				background: #F2F2F2;
				.title {
					position: relative;
					width: 100%;
					height: 56px;
					line-height: 56px;
					background: #1070CC;
					color: #FFFFFF;
					font-size: 18px;
					text-align: left;
					letter-spacing: 5px;
					display: flex;
					align-items: center;
					span {
						position: relative;
						display: inline-block;
						width: 2px;
						height: 16px;
						margin: 0px 16px;
						background: #FFFFFF;
					}
				}
				ul {
					position: relative;
					margin-top: 16px;
					padding: 0px;
					list-style: none;
					li {
						position: relative;
						width: 100%;
						height: 48px;
						line-height: 48px;
						background: #338BF0;
						color: #FFFFFF;
						font-size: 15px;
						text-align: center;
						border-bottom: 1px solid #1070CC;
						letter-spacing: 5px;
						cursor: pointer;
						&:hover {
							background: #1070CC;
						}
						&.active {
							background: #1070CC;
						}
					}
				}
			}
			.list {
				position: relative;
				width: 1008px;
				padding-right: 24px;
				.location {
					position: relative;
					width: 100%;
					height: 24px;
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
					span:last-child {
						color: #338BF0;
						&:after {
							content: ""
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
		}
		.social {
			position: relative;
			width: 100%;
			height: 48px;
			background: #338BF0;
			margin-top: 16px;
			.socialInner {
				position: relative;
				height: 100%;
				width: 1280px;
				margin: 0px auto;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				padding-right: 128px;
				img {
					margin: 0px 16px;
				}
				span {
					color: #FFFFFF;
				}
				.line {
					width: 2px;
					height: 24px;
					background: #C1D4E6;
					margin-right: 24px;
					opacity: 0.7;
				}
				ul {
					position: absolute;
					height: 48px;
					line-height: 48px;
					width: auto;
					top: 0px;
					bottom: 0px;
					left: 0px;
					margin-top: auto;
					margin-bottom: auto;
					padding: 0px;
					list-style: none;
					text-align: left;
					li {
						display: inline-block;
						color: #C1D4E6;
						margin-right: 64px;
					}
					li:hover {
						color: #FFFFFF;
						text-decoration: underline;
						cursor: pointer;
					}
				}
			}
		}
		.copyRight {
			position: relative;
			width: 1280px;
			height: 56px;
			text-align: center;
			margin: 0px auto;
			p {
				color: #666666;
				font-size: 14px;
				line-height: 14px;
			}
		}
	}
</style>
