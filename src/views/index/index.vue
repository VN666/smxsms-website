<template>
	<div class="index">
		<h-header></h-header>
		<h-navigator></h-navigator>
		<div class="main">
			<div class="wPicRoll"><h-picRoll :imgs="imgs" :isCirBtn="true"></h-picRoll></div>
			<div class="wNotice">
				<span class="title">通知公告</span>
				<span class="content"><h-notice :notices="notices"></h-notice></span>
				<span class="more"><img src="@/src/assets/icons/share-square-o.png" /></span>
			</div>
		</div>
	</div>
</template>

<script>
import hHeader from "../../components/h-header";
import hNavigator from "../../components/h-navigator";
import hPicRoll from "../../components/h-picRoll";
import hNotice from "../../components/h-notice";

export default {
	name: "index",
	data () {
		return {
			imgs: [
				{
					title: "1",
					src: "./static/index/img1.jpg"
				},
				{
					title: "2",
					src: "./static/index/img2.jpg"
				},
				{
					title: "3",
					src: "./static/index/img3.jpg"
				},
				{
					title: "4",
					src: "./static/index/img4.jpg"
				},
				{
					title: "5",
					src: "./static/index/img5.jpg"
				},
				{
					title: "6",
					src: "./static/index/img6.jpg"
				},
				{
					title: "7",
					src: "./static/index/img7.jpg"
				}
			],
			notices: [
				{
					title: "一、市二中找平代课教师启事",
					src: "",
					id: "1"
				},
				{
					title: "二、2017年市二中七年级新生招生简章",
					src: "",
					id: "2"
				},
				{
					title: "三、关于在全省教育系统开展\"学习张伟，践行焦裕禄精神\"师德主题教育活动的通知",
					src: "",
					id: "3"
				},
				{
					title: "四、全省教育教学信息化大奖赛四、全省教育教学信息化大奖赛四、全省教育教学信息化大奖赛四、全省教育教学信息化大奖赛四、全省教育教学信息化大奖赛四、全省教育教学信息化大奖赛四、全省教育教学信息化大奖赛四、全省教育教学信息化大奖赛四、全省教育教学信息化大奖赛四、全省教育教学信息化大奖赛",
					src: "",
					id: "4"
				}
			]
		}
	},
	components: { hHeader, hNavigator, hPicRoll, hNotice }
};

</script>

<style lang="scss" scoped>
	.index {
		position: relative;
		width: 100%;
		height: 100%;
		.main {
			position: relative;
			width: 100%;
			height: 100%;
			background: #F2F2F2;
			.wPicRoll {
				position: relative;
				width: 1280px;
				height: 360px;
				margin: 0px auto;
			}
			.wNotice {
				position: relative;
				width: 1280px;
				height: 48px;
				line-height: 48px;
				margin: 8px auto;
				border-radius: 5px;
				background: #FFFFFF;
				box-shadow: 0px 1px 3px rgba(0, 37, 55, 0.05);
				display: flex;
				justify-content: space-between;
				align-items: center;
				span {
					display: inline-block;
					&.title {
						position: relative;
						height: 48px;
						line-height: 48px;
						background: #1077CC;
						color: #FFFFFF;
						text-align: center;
						font-size: 18px;
						letter-spacing: 5px;
						border-radius: 5px 0px 0px 5px;
						overflow: hidden;
						flex: 1;
					}
					&.content {
						position: relative;
						height: 48px;
						line-height: 48px;
						padding: 0px 36px;
						overflow: hidden;
						flex: 6;
					}
					&.more {
						width: 48px;
						height: 46px;
						line-height: 48px;
						text-align: center;
						img {
							vertical-align: middle;
							height: 24px;
							width: 24px;
							&:hover {
								cursor: pointer;
							}
						}
					}
				}
			}
		}
	}
</style>
