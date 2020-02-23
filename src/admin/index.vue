<template>
	<div class="admin" :style="{height:h,width:w}">
		<div class="menu_wrapper">
			<div class="menu_logo">
				<svg t="1568486588891" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8093" width="32" height="32"><path d="M906.666667 270.933333l-140.8-138.666666c-12.8-12.8-32-21.333333-51.2-21.333334s-38.4 8.533333-49.066667 21.333334l-140.8 140.8C503.466667 298.666667 490.666667 330.666667 490.666667 362.666667c0 21.333333 4.266667 130.133333 10.666666 142.933333 4.266667 6.4 10.666667 14.933333 19.2 19.2 12.8 6.4 125.866667 14.933333 149.333334 17.066667h6.4c32-2.133333 64-19.2 66.133333-21.333334 6.4-4.266667 12.8-8.533333 17.066667-12.8l140.8-140.8c12.8-12.8 21.333333-29.866667 21.333333-49.066666 2.133333-17.066667-4.266667-34.133333-14.933333-46.933334z m-46.933334 57.6l-115.2 115.2c-6.4 6.4-17.066667 6.4-21.333333 0l-134.4-132.266666c-2.133333-2.133333-4.266667-6.4-4.266667-10.666667s2.133333-8.533333 4.266667-10.666667l117.333333-117.333333c2.133333-2.133333 4.266667-4.266667 8.533334-4.266667 2.133333 0 6.4 2.133333 8.533333 4.266667l138.666667 140.8c2.133333 4.266667 2.133333 10.666667-2.133334 14.933333z m-179.2 157.866667h-4.266666l-74.666667-6.4c0-12.8-6.4-25.6-12.8-32-8.533333-8.533333-21.333333-14.933333-36.266667-17.066667l-4.266666-72.533333v-2.133333l132.266666 130.133333zM341.333333 196.266667H185.6c-46.933333 0-85.333333 38.4-85.333333 85.333333v155.733333c0 46.933333 38.4 85.333333 85.333333 85.333334H341.333333c46.933333 0 85.333333-38.4 85.333334-85.333334v-155.733333c0-46.933333-38.4-85.333333-85.333334-85.333333z m0 262.4H185.6c-12.8 0-21.333333-8.533333-21.333333-21.333334v-155.733333c0-12.8 8.533333-21.333333 21.333333-21.333333H341.333333c12.8 0 21.333333 8.533333 21.333334 21.333333v155.733333c0 12.8-10.666667 21.333333-21.333334 21.333334zM401.066667 614.4c-14.933333-17.066667-38.4-25.6-59.733334-25.6H185.6c-46.933333 0-85.333333 38.4-85.333333 85.333333v155.733334c0 46.933333 38.4 85.333333 85.333333 85.333333H341.333333c46.933333 0 83.2-36.266667 83.2-85.333333v-155.733334c0-23.466667-8.533333-44.8-23.466666-59.733333z m-59.733334 234.666667H185.6c-12.8 0-21.333333-8.533333-21.333333-21.333334v-155.733333c0-12.8 8.533333-21.333333 21.333333-21.333333H341.333333c12.8 0 21.333333 10.666667 21.333334 21.333333v155.733333c0 12.8-8.533333 21.333333-21.333334 21.333334zM729.6 586.666667h-155.733333c-23.466667 0-44.8 8.533333-59.733334 25.6-14.933333 14.933333-23.466667 36.266667-21.333333 59.733333v155.733333c0 44.8 36.266667 81.066667 83.2 85.333334h155.733333c46.933333 0 85.333333-38.4 85.333334-85.333334v-155.733333c-2.133333-44.8-42.666667-85.333333-87.466667-85.333333z m21.333333 85.333333v155.733333c0 12.8-10.666667 21.333333-21.333333 21.333334H576c-12.8 0-21.333333-8.533333-21.333333-21.333334v-155.733333c0-12.8 8.533333-21.333333 21.333333-21.333333h155.733333c12.8 0 19.2 8.533333 19.2 21.333333z" fill="#FFFFFF" p-id="8094"></path></svg>
			</div>
			<div class="menu_content">
				<el-menu
					default-active="admin_news_campus"
		      		background-color="#424F63"
		      		text-color="#FFFFFF"
		      		active-text-color="#FFD04B">
		      		<el-submenu v-for="(item, key) in menu" :index="item.code" v-if="item.children" :key="item.code">
		      			<template slot="title">
		      				<i :class="item.icon" style="color:#FFFFFF;"></i><span>{{item.title}}</span>
		      			</template>
						<el-menu-item v-for="(subItem, subKey) in item.children" :index="subItem.code" :key="subItem.code" @click="goPath(subItem.path)">
							{{ subItem.title }}
						</el-menu-item>
		      		</el-submenu>
		      		<el-menu-item v-else :index="item.code" @click="goHome(item)">
		      			<i :class="item.icon" style="color:#FFFFFF;"></i><span>{{item.title}}</span>
		      		</el-menu-item>
		    	</el-menu>
			</div>
		</div>

		<div class="header_wrapper">
			<div class="icon"><i class="el-icon-s-platform"></i></div>
			<div class="title">第二中学后台管理系统</div>
			<div class="option">
				<svg t="1568484501657" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4595" width="32" height="32"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-938.666667C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333z m0 768a340.650667 340.650667 0 0 1-266.24-128A340.650667 340.650667 0 0 1 512 597.333333a340.48 340.48 0 0 1 266.197333 128A340.48 340.48 0 0 1 512 853.333333z m0-298.666666a170.666667 170.666667 0 1 1 0-341.333334 170.666667 170.666667 0 0 1 0 341.333334z" p-id="4596" fill="#000000"></path></svg>
				<span class="user">{{ userName }}</span>
				<span class="btn" @click="exit">
					<svg class="icon" t="1568483593213" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3337" width="16" height="16"><path d="M512 921.8c-55.1 0-108.5-10.8-158.8-32.1-48.6-20.6-92.2-50-129.7-87.4-37.5-37.5-66.9-81.1-87.4-129.7-21.3-50.3-32.1-103.7-32.1-158.8 0-64.6 14.7-126.3 43.6-183.6 27.5-54.6 67.8-103.1 116.5-140.4 17.6-13.5 36.4-25.6 55.9-36 17-9.1 38.3-2.7 47.4 14.4 9.1 17 2.7 38.3-14.4 47.4-16.2 8.6-31.7 18.7-46.3 29.9-40.3 30.9-73.7 71.2-96.6 116.4-23.9 47.4-36 98.6-36 152.1 0 90.3 35.2 175.2 99 239 63.8 63.8 148.7 99 239 99s175.2-35.2 239-99c63.8-63.8 99-148.7 99-239 0-53.6-12.2-104.9-36.2-152.4C791 316.3 757.5 276 717 245.1c-14.1-10.8-29.1-20.5-44.7-28.9-17-9.2-23.4-30.4-14.2-47.4s30.4-23.4 47.4-14.2c18.8 10.1 36.9 21.9 53.9 34.8 48.8 37.3 89.3 85.9 116.9 140.5 29 57.4 43.7 119.2 43.7 183.9 0 55.1-10.8 108.5-32.1 158.8-20.6 48.6-50 92.2-87.4 129.7-37.5 37.5-81.1 66.9-129.7 87.4-50.3 21.3-103.7 32.1-158.8 32.1z" p-id="3338" fill="#000000"></path><path d="M512 547c-19.3 0-35-15.7-35-35V108.3c0-19.3 15.7-35 35-35s35 15.7 35 35V512c0 19.3-15.7 35-35 35z" p-id="3339" fill="#000000"></path></svg>
				</span>
			</div>
		</div>

		<div class="content_wrapper">
			<div class="content"><router-view></router-view></div>
		</div>

	</div>
</template>

<script>

import { menu } from "./menu";

export default {
	name: "admin",
	data () {
		return {
			h: 0,
			w: 0,
			menu: [],
			userName: "administrator"
		};
	},
	created () {
		this.resize();
		this.menu = menu;
		window.addEventListener("resize", this.resize, false);
	},
	beforeDestory () {
		window.removeEventListener("resize", this.resize, false);
	},
	methods: {
		resize () {
			this.h = document.documentElement.clientHeight + "px";
			this.w = document.documentElement.clientWidth + "px";
		},
		exit () {
			this.$confirm("即将推出系统，是否继续", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(() => {
				this.$router.push({ path: "/" });
			}).catch(() => {
				console.log("取消");
			});
      	},
      	goPath (path) {
      		this.$router.push({ path: path });
      	},
      	goHome (item) {
      		if (item.code === "admin_home") {
      			this.$router.push({ path: "/index" });
      		}
      		if (item.code === "admin_bg") {
      			this.$router.push({ path: item.path });
      		}
      		if (item.code === "admin_contact") {
      			console.log(item.path);
      			this.$router.push({ path: item.path });
      		}
      	}
	}
}

</script>

<style lang="scss">
	.admin {
		position: relative;
		width: 100%;
		height: calc(100%);
		.content_wrapper {
			position: fixed;
			height: calc(100% - 48px);
			width: calc(100% - 250px);
			top: 48px;
			left: 250px;
			background: #F5F5F5;
			padding: 16px;
			.content {
				position: relative;
				width: 100%;
				height: 100%;
				background: #FFFFFF;
			}
		}
		.header_wrapper {
			position: fixed;
			height: 48px;
			width: calc(100% - 250px);
			left: 250px;
			top: 0px;
			box-sizing: border-box;
			background: #FFFFFF;
			div {
				position: absolute;
				display: inline;
				height: 48px;
				line-height: 48px;
				&.icon {
					width: 48px;
					display: flex;
					align-items: center;
					justify-content: center;
					i {
						color: #000000;
						font-size: 22px;
						margin: auto;
					}
				}
				&.title {
					left: 48px;
					font-size: 16px;
					color: #000000;
					font-weight: bold
				}

				&.option {
					right: 16px;
					display: flex;
					align-items: center;
					svg {
						height: 24px;
						width: 24px;
					}
					span {
						&.btn {
							display: inline;
							height: 48px;
							width: 48px;
							display: flex;
							justify-content: center;
							align-items: center;
							cursor: pointer;
							&:hover {
								background: #F1F1F1;
							}
							svg {
								height: 24px;
								width: 24px;
							}
						}
						&.user {
							margin-left: 8px;
							margin-right: 8px;
						}
					}
				}
			}
			.icon {
				height: 48px;
				width: 48px;
			}
		}
		.menu_wrapper {
			position: fixed;
			left: 0px;
			height: 100%;
			width: 250px;
			background: #424F63;
			box-sizing: border-box;
			border-right: solid 2px #E6E6E6;
			ul {
				border: none;
			}
			.menu_logo {
				height: 48px;
				width: 100%;
				display: flex;
				align-items: center;
				svg {
					width: 32px;
					height: 32px;
					margin-left: 8px;
				}
			}
			.menu_content {
				position: relative;
				width: 100%;
				height: calc(100% - 48px);
				overflow-y: auto;
			}
		}
	}
</style>
