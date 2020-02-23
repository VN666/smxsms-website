<template>
	<div class="index">
		<h-header></h-header>
		<h-navigator></h-navigator>
		<div class="main">
			<div class="wPicRoll"><h-bgImgs></h-bgImgs></h-picRoll></div>
			<div class="wNotice">
				<span class="title">通知公告</span>
				<span class="content">
					<h-notice :notices="noticeData|filterNotice" v-if="noticeData.length" @noticeClick="noticeClick"></h-notice>
				</span>
				<span class="more" @click="goPathQuery('/news/notice-list', '', 1)"><img src="@/src/assets/icons/share-square-o.png" /></span>
			</div>
			<div class="wNews">
				<div class="newsPic" v-if="newsData.length">
					<h-picRoll :imgs="newsData|filterNews" :customStyle="picRollStyle" :isBtn="false" :isCirBtn="false" :interval="3000" :transitionStyle="'fade'" @itemClick="itemClick"></h-picRoll>
				</div>
				<div class="newsContent">
					<div class="title">
						<span class="word">新闻快讯</span>
						<span class="icon" @click="goPathQuery('/news/campus-list', '', 0)">>> more</span>
					</div>
					<ul class="newsUl">
						<li v-for="(item,index) in newsData" v-if="index<8" @click="goPathQuery('/news/campus-detail', item.id, 0)">
							<img src="../../assets/icons/angle-right.png" />
							<span class="itemTitle">{{item.headline}}</span>
							<span class="itemDate">{{item.timecreate | timeCut}}</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="wLine1">
				<div class="wLineL">
					<h-panel class="panel" title="教研动态" :content="news"></h-panel>
					<h-panel class="panel" title="校园活动" :content="news"></h-panel>
				</div>
				<div class="wLineR">
					<div class="title">
						<span class="word">校长寄语</span>
						<span class="icon" @click="goPathQuery('/about/proverb-content', '', 2)">>> more</span>
					</div>
					<p class="proverb">
						<img :src="proverbData.headSrc" />
						{{proverbData.content | removeHtmlTag | picText}}
					</p>
				</div>
			</div>

			<div class="wLine2">
				<div class="wLineL">
					<h-panel class="panel" title="教研动态" :content="news" :max="6"></h-panel>
					<h-panel class="panel" title="校园活动" :content="news" :max="6"></h-panel>
				</div>
				<div class="wLineR">
					<div class="title">
						<span class="word">联系我们</span>
					</div>
					<div class="contact">
						<p>电话：{{ contactData.phone }}</p>
						<p>邮箱：{{ contactData.email }}</p>
						<p>地址：{{ contactData.address }}</p>
						<p>邮编：{{ contactData.postCode }}</p>
					</div>
				</div>
			</div>

			<div class="link">
				<div class="tri"><span class="innerTri"></span></div>
				<div class="title">
					<span>友情</span>
					<img src="../../assets/icons/friendly.png" />
					<span>链接</span>
				</div>
				<div class="content">
					<ul>
						<li v-for="(item,index) in linkMenu" :key="index">
							<a :href="item.href" target="_blank">{{item.name}}</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="social">
				<div class="socialInner">
					<ul>
						<li>登录</li>
						<li>注册</li>
						<li @click="goPath('admin')">管理员入口</li>
					</ul>
					<div class="line"></div>
					<img src="../../assets/icons/qq.png" />
					<img src="../../assets/icons/wechat.png" />
					<img src="../../assets/icons/weibo.png" />
					<img src="../../assets/icons/phone.png" />
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

import linkMenu from "../../config/link";

export default {
	name: "index",
	filters: {
		filterNews (val) {
			val.forEach((item) => {
				item.src = item.picSrc[0];
				item.title = item.headline;
			});
			return val.filter((val) => val.picSrc[0]);
		},
		filterNotice (val) {
			val.forEach((item) => {
				item.title = item.headline;
			});
			return val;
		},
		picText (text) {
			return text.substring(0, 145) + "...";
		}
	},
	data () {
		return {
			newsData: [],
			noticeData: [],
			contactData: {
				phone: "",
				email: "",
				address: "",
				postCode: ""
			},
			proverbData: "",

			linkMenu: null,
			imgs: [
				{
					title: "市二中找平代课教师启事",
					src: "./static/index/img1.jpg"
				},
				{
					title: "二、2017年市二中七年级新生招生简章",
					src: "./static/index/img2.jpg"
				},
				{
					title: "e44",
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
			],
			picRollStyle: {
				border: "5px"
			},
			news: [
				{
					title: "自组装纳米材料的生物效应",
					src: "./static/news/news1.jpg",
					date: "2019-01-01"
				},
				{
					title: "自组装纳米材料的活体超分子组装",
					src: "./static/news/news2.jpg",
					date: "2019-01-02"
				},
				{
					title: "自组装纳米材料的高通量合成",
					src: "./static/news/news3.jpg",
					date: "2019-01-03"
				},
				{
					title: "文明三门峡 清洁市二中",
					src: "./static/news/news3.jpg",
					date: "2019-01-04"
				},
				{
					title: "召开文明城市建设推进会",
					src: "",
					date: "2019-01-05"
				},
				{
					title: "匆匆岁月沉淀真情 近日系别师恩难忘",
					src: "",
					date: "2019-01-06"
				},
				{
					title: "很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的数据",
					date: "2019-01-09"
				},
				{
					title: "志愿服务忙 清洁魅力校园",
					src: "",
					date: "2019-01-07"
				},
				{
					title: "我校召开以案促改革专题民主生活会",
					src: "",
					date: "2019-01-08"
				}
			],
			proverb: "崔新来，男，汉族，1964年8月生，中共党员，中学英语高级教师。1989年毕业于河南师范大学外语系，同年分配到三门峡市第四中学（原水电十一局中学）任教，2005年任业务副校长，2012年任市二中党支部书记，2013年8月任市二中校长。从教二十多年来，曾多次被评为三门峡市先进教育工作者；1995年、1996年连续两年被评为三门峡市优秀班主任；1999年被评为三门峡市“跨世纪园丁工程”骨干教师；2001年被评为十一局优秀党员；2002年被评为“十一局杰出青年”；2003年被评为市级骨干教师，2004年被评为三门峡市优秀教师；2009年被评为“学校管理上台阶先进个人”；2010年被评为“岗位管理标兵”。"
		}
	},
	mounted () {
		this.requestData();
	},
	methods: {
		goPath (path) {
			this.$router.push({ path: path });
		},
		goPathQuery (path, id, index) {
			this.$router.push({ path: path, query: {id: id, index: index }});
		},
		itemClick (id) {
			this.goPathQuery("/news/campus-detail", id, 0);
		},
		noticeClick (notice) {
			this.goPathQuery("/news/notice-detail", notice.id, 1);
		},
		async requestData () {
			let [ newsData, noticeData, contactData, proverbData ] = await Promise.all([
				this.requestNews(),
				this.requestNotice(),
				this.requestContact(),
				this.requestProverb()
			]);
			this.newsData = newsData.data.list;
			this.noticeData = noticeData.data.list;
			this.contactData = contactData.data;
			this.proverbData = proverbData.data;
		},
		requestNews () {
			return this.$http({
				method: "post",
				url: this.$api.news_campus_queryList,
				data: {
					pageNo: 1,
					pageSize: 8
				}
			});
		},
		requestNotice () {
			return this.$http({
				method: "post",
				url: this.$api.news_notice_queryList,
				data: {
					pageNo: 1,
					pageSize: 20
				}
			})
		},
		requestContact () {
			return this.$http({
				method: "post",
				url: this.$api.news_contact_query
			});
		},
		requestProverb () {
			return this.$http({
				method: "post",
				url: this.$api.about_proverb_queryById,
				data: { addViews: false }
			});
		}
	},
	created () {
		this.linkMenu = linkMenu;
	}
};

</script>

<style lang="scss" scoped>
	.index {
		position: relative;
		width: 100%;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
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
			.wNews {
				$height: 350px;
				position: relative;
				width: 1280px;
				height: $height;
				line-height: $height;
				margin: 8px auto;
				border-radius: 5px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.newsPic {
					position: relative;
					height: $height;
					line-height: $height;
					margin-right: 8px;
					border-radius: 5px;
					flex: 2;
				}
				.newsContent {
					position: relative;
					height: $height;
					line-height: $height;
					margin-left: 8px;
					padding: 0px 20px 0px;
					border-radius: 5px;
					flex: 1;
					background: #1077CC;
					.title {
						position: relative;
						height: 40px;
						line-height: 40px;
						border-bottom: 1px solid #FFFFFF;
						color: #FFFFFF;
						font-size: 18px;
						.word {
							float: left;
						}
						.icon {
							float: right;
							font-size: 14px;
							opacity: 0.9;
							cursor: pointer;
						}
					}
					.newsUl {
						position: relative;
						height: 280px;
						padding: 0 5px;
						margin: 8px 0px;
						overflow: hidden;
						li {
							list-style: none;
							height: 36px;
							line-height: 36px;
							color: #FFFFFF;
							cursor: pointer;
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							justify-content: space-between;
							align-items: center;
							&:hover {
								opacity: 0.7;
							}
							img {
								margin-right: 0;
							}
							.itemTitle {
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
								text-align: left;
								flex: 4.5;
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
			.wLine1 {
				position: relative;
				width: 1280px;
				height: 240px;
				line-height: 240px;
				margin: 8px auto;
				border-radius: 5px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.wLineL {
					position: relative;
					height: 240px;
					line-height: 240px;
					margin-right: 8px;
					border-radius: 5px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex: 2;
					.panel {
						position: relative;
						height: 240px;
						line-heignt: 240px;
						flex: 1;
						&:first-child {
							margin-right: 8px;
						}
						&:last-child {
							margin-left: 8px;
						}
					}
				}
				.wLineR {
					position: relative;
					height: 240px;
					line-height: 240px;
					margin-left: 8px;
					border-radius: 5px;
					padding: 0px 20px 0px;
					background: #FFFFFF;
					overflow: hidden;
					flex: 1;
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
						    bottom: 0px;
						    left: 0px;
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
					.proverb {
						position: relative;
						height: 199px;
						line-height: 24px;
						width: 100%;
						padding: 2px 0px;
						font-size: 16px;
						overflow: hidden;
						img {
							float: left;
						    width: 120px;
						    height: 90px;
						    padding: 5px;
						    border: 1px solid #CCC;
						    margin: 0px 8px 5px 0px;
						}
					}
				}
			}
			.wLine2 {
				position: relative;
				width: 1280px;
				height: 300px;
				line-height: 300px;
				margin: 8px auto;
				border-radius: 5px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.wLineL {
					position: relative;
					height: 280px;
					line-height: 280px;
					margin-right: 8px;
					border-radius: 5px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex: 2;
					.panel {
						position: relative;
						height: 280px;
						line-heignt: 280px;
						flex: 1;
						&:first-child {
							margin-right: 8px;
						}
						&:last-child {
							margin-left: 8px;
						}
					}
				}
				.wLineR {
					position: relative;
					height: 280px;
					line-height: 280px;
					margin-left: 8px;
					border-radius: 5px;
					padding: 0px 20px 0px;
					background: #FFFFFF;
					overflow: hidden;
					flex: 1;
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
					.contact {
						position: relative;
						height: 199px;
						line-height: 26px;
						width: 100%;
						padding: 2px 0px;
						font-size: 16px;
						overflow: hidden;
					}
				}
			}
			.link {
				position: relative;
				width: 1280px;
				height: 120px;
				line-height: 120px;
				margin: 8px auto;
				border-top: 2px solid #339BF0;
				background: #FFFFFF;
				border-radius: 5px;
				$triSize: 10px;
				$innerTriSize: 7px;
				.tri {
					position: absolute;
					width: 0px;
					height: 0px;
					left: 0px;
					right: 0px;
					margin: -2px auto 0px;
					border-bottom: $triSize solid transparent;
					border-left: $triSize solid transparent;
					border-right: $triSize solid transparent;
					border-top: $triSize solid #339BF0;
					z-index: 10;
					.innerTri {
						position: absolute;
						top: -$triSize;
						left: -$innerTriSize;
						width: 0px;
						height: 0px;
						margin: 0 auto;
						border-bottom: $innerTriSize solid transparent;
						border-left: $innerTriSize solid transparent;
						border-right: $innerTriSize solid transparent;
						border-top: $innerTriSize solid #F2F2F2;
					}
				}
				.title {
					position: relative;
					width: 100%;
					height: 36px;
					line-height: 36px;
					margin-top: 0px;
					text-align: center;
					font-size: 18px;
					letter-spacing: 5px;
					color: #1077CC;
					background: linear-gradient(
				        45deg,
				        rgba(255, 255, 255, 1) 0%, rgba(51, 155, 240, 0.8) 50%, rgba(51, 155, 240, 0.8) 50%, rgba(255, 255, 255, 1) 100%
				    );
					img {
						vertical-align: middle;
					}
				}
				.content {
					position: relative;
					width: 100%;
					height: calc(100% - 36px);
					padding: 10px 10px;
					ul {
						position: relative;
						height: 100%;
						width: 100%;
						margin: 0px;
						padding: 0px;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						justify-content: space-between;
						li {
							position: relative;
							width: 180px;
							height: 31px;
							line-height: 31px;
							margin: 0px 15px;
							list-style: none;
							text-align: left;
						}
					}
					a {
						color: #666666;
						font-size: 14px;
						text-decoration: none;
						&:hover {
							font-size: 18px;
							color: #339BF8;
						}
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
	}
</style>
