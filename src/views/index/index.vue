<template>
	<div class="index">
		<h-header></h-header>
		<h-navigator></h-navigator>
		<div class="main">
			<div class="wPicRoll"><h-bgImgs></h-bgImgs></h-picRoll></div>
			<div class="wHonor">
				<span class="title">学校荣誉</span>
				<span class="content">
					<h-honor :honors="honorData|filterHonor" v-if="honorData.length" @honorClick="honorClick"></h-honor>
				</span>
				<span class="more" @click="goPathQuery('/about/honor-list', '', 4)"><img src="@/src/assets/icons/share-square-o.png" /></span>
			</div>
			<div class="wNews">
				<div class="newsPic" v-if="researchData.length">
					<h-picRoll :imgs="researchData|filterNews" :customStyle="picRollStyle" :isBtn="false" :isCirBtn="false" :interval="3000" :transitionStyle="'fade'" @itemClick="itemClick"></h-picRoll>
				</div>
				<div class="newsContent">
					<div class="title">
						<span class="word">校本研修</span>
						<span class="icon" @click="goPathQuery('/training', '', 0)">>> more</span>
					</div>
					<ul class="newsUl">
						<li v-for="(item,index) in studyData" v-if="index<8" @click="goPathQuery('/training/study-detail', item.id, 0)">
							<img src="../../assets/icons/angle-right.png" />
							<span class="itemTitle">{{item.headline}}</span>
							<span class="itemDate">{{item.timecreate | timeCut}}</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="wLine1">
				<div class="wLineL">
					<h-panel class="panel" title="二中党建" :content="partyData|filterParty" @moreClick="partyMore" @itemClick="partyItem" :max="5"></h-panel>
					<h-panel class="panel" title="二中团建" :content="groupData|filterGroup" @moreClick="groupMore" @itemClick="groupItem" :max="5"></h-panel>
				</div>
				<div class="wLineR">
					<div class="title">
						<span class="word">校长寄语</span>
						<span class="icon" @click="goPathQuery('/about/proverb-content', '', 3)">>> more</span>
					</div>
					<p class="proverb">
						<img :src="proverbData.headSrc" />
						<span v-html="$options.filters.picText($options.filters.removeHtmlTag(proverbData.content))"></span>
						<!-- {{proverbData.content | removeHtmlTag | picText}} -->
					</p>
				</div>
			</div>

			<div class="wLine2">
				<div class="wLineL">
					<h-panel class="panel" title="二中安法" :content="lawData|filterLaw" @moreClick="lawMore" @itemClick="lawItem" :max="6"></h-panel>
					<h-panel class="panel" title="二中创建" :content="establishData|filterEstablish" @moreClick="establishMore" @itemClick="establishItem" :max="6"></h-panel>
				</div>
				<div class="wLineR">
					<div class="title">
						<span class="word">联系我们</span>
					</div>
					<div class="contact">
						<p>电话：{{ contactData.phone }}</p>
						<!-- <p>邮箱：{{ contactData.email }}</p> -->
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
						<!-- <li @click="goWebsite()">公众号</li> -->
						<li @click="goWebsite(weibo)">微博</li>
						<li @click="goAdmin()">管理员入口</li>
					</ul>
					<div class="line"></div>

					<!-- <div class="social-btn">
						<img src="../../assets/icons/qq.png" />
					</div> -->
					<div class="social-btn">
						<el-tooltip effect="light" placement="top">
							<div slot="content" class="social-btn-inner__img"><img src="../../assets/icons/wechat-code.png" width="100" height="100" /></div>
							<img src="../../assets/icons/wechat.png" />
						</el-tooltip>
					</div>
					<div class="social-btn">
						<el-tooltip effect="light" placement="top">
							<div slot="content" class="social-btn-inner__img"><img src="../../assets/icons/weibo-code.png" width="100" height="100" /></div>
							<img src="../../assets/icons/weibo.png" />
						</el-tooltip>
					</div>
					<div class="social-btn">
						<img src="../../assets/icons/phone.png" />
					</div>
					<span>{{ contactData.phone }}</span>
				</div>
			</div>

			<div class="copyRight">
				<p>
					Copyright © 1958-2021 三门峡市第二中学 网站备案:
					<span class="golink" @click="goWebsite(website)">豫ICP备2020035332号</span>
				</p>
				<p>地址：三门峡市黄河路中段 邮编：{{ contactData.postCode }} 电话：{{ contactData.phone }}</p>
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
		filterHonor (val) {
			val.forEach((item) => {
				item.title = item.headline;
			});
			return val;
		},
		picText (text) {
			return text.substring(0, 155) + "...";
		},
		filterParty (val) {
			val.forEach((item) => {
				item.title = item.headline;
			});
			return val;
		},
		filterGroup (val) {
			val.forEach((item) => {
				item.title = item.headline;
			});
			return val;
		},
		filterLaw (val) {
			val.forEach((item) => {
				item.title = item.headline;
			});
			return val;
		},
		filterEstablish (val) {
			val.forEach((item) => {
				val.forEach((item) => {
					item.title = item.headline;
				});
			});
			return val;
		}
	},
	data () {
		return {
			honorData: [],
			researchData: [],
			studyData: [],
			partyData: [],
			groupData: [],
			proverbData: [],
			lawData: [],
			establishData: [],
			contactData: {
				phone: "",
				email: "",
				address: "",
				postCode: ""
			},
			linkMenu: null,

			picRollStyle: {
				border: "5px"
			},
			website: "https://beian.miit.gov.cn/#/Integrated/index",
			weibo: "https://weibo.com/u/5058623654?is_all=1",
			wechat: ""
		}
	},
	mounted () {
		this.requestData();
	},
	methods: {
		partyMore () {
			this.goPathQuery("/party/theory-list", "", 0);
		},
		groupMore () {
			this.goPathQuery("/group/ccyl-list", "", 0);
		},

		establishMore () {
			this.goPathQuery("/establish/meeting-list", "", 0);
		},
		lawMore () {
			this.goPathQuery("/school/safe-list", "", 0);
		},
		partyItem (item) {
			this.goPathQuery("/party/theory-detail", item.id, 0);
		},
		groupItem (item) {
			this.goPathQuery("/group/ccyl-detail", item.id, 0);
		},
		establishItem (item) {
			this.goPathQuery("/establish/meeting-detail", item.id, 0);
		},
		lawItem (item) {
			this.goPathQuery("/law/safe-detail", item.id, 0);
		},
		goPath (path) {
			this.$router.push({ path: path });
		},
		goPathQuery (path, id, index) {
			this.$router.push({ path: path, query: {id: id, index: index }});
		},
		itemClick (id) {
			this.goPathQuery("/education/research-detail", id, 0);
		},
		honorClick (honor) {
			this.goPathQuery("/about/honor-detail", honor.id, 4);
		},
		async requestData () {
			let [ honorData, researchData, studyData, partyData, groupData, proverbData, lawData, establishData, contactData ] = await Promise.all([
				this.requestHonor(),
				this.requestResearch(),
				this.requestStudy(),
				this.requestParty(),
				this.requestGroup(),
				this.requestProverb(),
				this.requestLaw(),
				this.requestEstablish(),
				this.requestContact()
			]);
			this.honorData = honorData.data.list;
			this.researchData = researchData.data.list;
			this.studyData = studyData.data.list;
			this.partyData = partyData.data.list;
			this.groupData = groupData.data.list;
			this.proverbData = proverbData.data;
			this.lawData = lawData.data.list;
			this.establishData = establishData.data.list;
			this.contactData  = contactData.data;
			this.$store.commit("SET_PHONE", this.contactData.phone);
			this.$store.commit("SET_EMAIL", this.contactData.email);
			this.$store.commit("SET_ADDRESS", this.contactData.address);
			this.$store.commit("SET_POSTCODE", this.contactData.postCode);
		},
		requestHonor () {
			return this.$http({
				method: "post",
				url: this.$api.about_honor_queryList,
				data: {
					pageNo: 1,
					pageSize: 20
				}
			})
		},
		requestResearch () {
			return this.$http({
				method: "post",
				url: this.$api.education_research_queryList,
				data: {
					pageNo: 1,
					pageSize: 8
				}
			});
		},
		requestStudy () {
			return this.$http({
				method: "post",
				url: this.$api.training_study_queryList,
				data: {
					pageNo: 1,
					pageSize: 20
				}
			});
		},
		requestParty () {
			return this.$http({
				method: "post",
				url: this.$api.party_theory_queryList,
				data: {
					pageNo: 1,
					pageSize: 20
				}
			});
		},
		requestGroup () {
			return this.$http({
				method: "post",
				url: this.$api.group_ccyl_queryList,
				data: {
					pageNo: 1,
					pageSize: 20
				}
			});
		},
		requestProverb () {
			return this.$http({
				method: "post",
				url: this.$api.about_proverb_queryById,
				data: { addViews: false }
			});
		},
		requestLaw () {
			return this.$http({
				method: "post",
				url: this.$api.law_safe_queryList,
				data: {
					pageNo: 1,
					pageSize: 20
				}
			});
		},
		requestEstablish () {
			return this.$http({
				method: "post",
				url: this.$api.establish_meeting_queryList,
				data: {
					pageNo: 1,
					pageSize: 20
				}
			});
		},
		requestContact () {
			return this.$http({
				method: "post",
				url: this.$api.news_contact_query
			});
		},
		goWebsite (path) {
			window.open(path, "_blank");
		},
		goAdmin () {
			const auths = this.$store.state.auths;
			if (auths.length === 0) this.$router.push({ path: "/login"});
			else {
				const temp = auths[0].split("_");
				if (temp.length === 2) this.$router.push({ path: `/admin/${temp[0]}-${temp[1]}` });
				if (temp.length === 3) this.$router.push({ path: `/admin/${temp[1]}-${temp[2]}` });
			}
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
		background-color: #FFFFFF;
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
			.wHonor {
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
						padding: 0px;
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
								cursor: pointer;
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
								font-size: 14px;
								text-align: right;
								flex: 1;
								font-family: "Times New Roman";
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
					.social-btn {
						display: flex;
						justify-content: content;
						align-items: center;
						cursor: pointer;
						img {
							width: 28px;
							height: 28px;
						}
					}
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
	}
</style>
