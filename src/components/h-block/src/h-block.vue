<template>
	<div class="block">
		<div class="header-wrap"><h-header></h-header></div>
		<div class="navigator-wrap"><h-navigator></h-navigator></div>
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
						<li v-for="(item, index) in menuData.children" :class="{'active':currentIndex===index}" :key="index" @click="subTitleClick(item.router, index)">{{item.title}}</li>
					</ul>
				</div>
				<div class="list">
					<div class="location">
						<img src="@/src/assets/icons/school.png" />
						<span>您现在的位置：</span>
						<span @click="goHome">网站首页</span>
						<span @click="goPath" v-if="menuData.children.length!==0">{{menuData.children[currentIndex].title}}</span>
						<span @click="goPath" v-else>{{menuData.title}}</span>
						<span>{{/list/.exec($route.path) ? "列表" : "正文"}}</span>
					</div>
					<div class="line"></div>
					<slot name="area"></slot>
				</div>
			</div>
			<div class="social">
				<div class="socialInner">
					<ul>
						<!-- <li @click="goWebsite()">公众号</li> -->
						<li @click="goWebsite(weibo)">微博</li>
						<li @click="$router.push({ path: '/login'})">管理员入口</li>
					</ul>
					<div class="line"></div>
					<!-- <img src="@/src/assets/icons/qq.png" /> -->
					<div class="social-btn">
						<el-tooltip effect="light" placement="top">
							<div slot="content" class="social-btn-inner__img"><img src="@/src/assets/icons/wechat-code.png" width="100" height="100" /></div>
							<img src="@/src/assets/icons/wechat.png" />
						</el-tooltip>
					</div>
					<div class="social-btn">
						<el-tooltip effect="light" placement="top">
							<div slot="content" class="social-btn-inner__img"><img src="@/src/assets/icons/weibo-code.png" width="100" height="100" /></div>
							<img src="@/src/assets/icons/weibo.png" />
						</el-tooltip>
					</div>
					<div class="social-btn">
						<img src="@/src/assets/icons/phone.png" />
					</div>
					<span>{{ phone }}</span>
				</div>
			</div>
			<div class="copyRight">
				<p>
					Copyright © 1958-2021 三门峡市第二中学 网站备案:
					<span class="golink" @click="goWebsite(website)">豫ICP备2020035332号</span>
				</p>
				<p>地址：三门峡市黄河路中段 邮编：{{ postCode }} 电话：{{ phone }}</p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "h-block",
	props: {
		menuData: {
			type: Object,
			default: () => {}
		}
	},
	data () {
		return {
			currentIndex: 0,
			website: "https://beian.miit.gov.cn/#/Integrated/index",
			weibo: "https://weibo.com/u/5058623654?is_all=1",
		};
	},
	mounted () {
		this.currentIndex = parseInt(this.$route.query.index);
	},
	methods: {
		subTitleClick (path, index) {
			if (this.$route.path !== path)
				this.$router.push({path: path, query: {index: index }});
		},
		goHome () {
			this.$router.push({ path: "/index" });
		},
		goPath () {
			if (this.menuData.children.length === 0) {
				this.$router.push({ path: this.menuData.router });
				return;
			}
			if (this.$route.path !== this.menuData.children[this.currentIndex].router) {
				this.$router.push({ path: this.menuData.children[this.currentIndex].router, query: { index: this.currentIndex }});
			}
		},
		goWebsite (path) {
			window.open(path, "_blank");
		}
	},
	watch: {
		"$route" (to, from) {
			this.currentIndex = parseInt(this.$route.query.index);
		}
	},
	computed: {
		phone () {
			return this.$store.state.phone;
		},
		email () {
			return this.$store.state.email;
		},
		address () {
			return this.$store.state.address;
		},
		postCode () {
			return this.$store.state.postCode;
		}
	}
}

</script>

<style lang="scss" scoped>
	.block {
		position: relative;
		width: 100%;
		height: 100%;
		.header-wrap {
			position: relative;
			width: 100%;
		}
		.navigator-wrap {
			position: relative;
			width: 100%;
		}
		.main {
			position: relative;
			width: 100%;
			height: 100%;
			background: #F2F2F2;
		}
		.wPicRoll {
			position: relative;
			width: 1280px;
			height: 360px;
			margin: 0px auto;
			background: #FFFFFF;
		}
		.content {
			position: relative;
			width: 1280px;
			height: auto;
			overflow-y: auto;
			margin: 16px auto;
			display: flex;
			justify-content: space-between;
			background: #F2F2F2;
			.nav {
				position: relative;
				width: 224px;
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
							color: #C1D4E6;
						}
						&.active {
							background: #1070CC;
							color: #C1D4E6;
						}
					}
				}
			}
			.list {
				position: relative;
				width: 1040px;
				padding-right: 16px;
				padding-left: 16px;
				padding-top: 8px;
				padding-bottom: 48px;
				overflow-x: hidden;
				min-height: 700px;
				background: #FFFFFF;
				border: 1px solid #E0E0E0;
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
							color: #666666;
						}
					}
					span:nth-of-type(n+2):not(:last-child) {
						cursor: pointer;
						&:hover {
							color: #338BF0;
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
				span.golink {
					color: #666666;
				    font-size: 14px;
				    line-height: 14px;
					&:hover {
						color: #0265FF;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
