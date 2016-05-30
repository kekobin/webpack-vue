<template>
  <div :class="[btype == '1' ? 'guess2' : 'guess']" v-for="item in lists">
    <div class="vs-content clearfix">
      <div class="vs-left fl">
        <div class="avatar fl">
          <img :src="item.units[0].teamPic" alt="">
          <p class="word" v-text="item.units[0].unitName"></p>
        </div>
        <div class="bean fl">
          <button class="clickstat" eid="click/hd/msi/jingcai" eid_desc="点击/活动/msi/竞猜" v-on:click="gamble(item, item.units[0])">种豆</button>
          <p>赔率<span v-text="item.units[0].odds / 100"></span></p>
        </div>
      </div>
      <div class="vs fl">
      	<p v-text="item | beanStatusFormat"></p>
        <img src="../assets/img/vs.png">
        <p v-text="item.startTime | timeFormat"></p>
      </div>
      <div class="vs-right fl">
        <div class="bean fl">
          <button class="clickstat" eid="click/hd/msi/jingcai" eid_desc="点击/活动/msi/竞猜" v-on:click="gamble(item, item.units[1])">种豆</button>
          <p>赔率<span v-text="item.units[1].odds / 100"></span></p>
        </div>
        <div class="avatar fl">
          <img :src="item.units[1].teamPic" alt="">
          <p class="word" v-text="item.units[1].unitName"></p>
        </div>
      </div>
      <a class="more" v-if="btype == '0'" v-link="{path: '/guess/1'}">
        最近的赛事竞猜
        <i></i>
      </a>
    </div>
  </div>
  <!--弹窗-->
  <tip2 :pop-msg="popMsg1" :model.sync="gambleObj.sendNum" :choose.sync="chooseBean" :commit.sync="commit"></tip2>
  <tip1 :pop-msg="popMsg2"></tip1>
</template>

<script>
	import beanService from "../services/beanService.js";
	import tip1 from "../components/tip1.vue";
	import tip2 from "../components/tip2.vue";

	export default {
	  props: ["btype"],
	  replace: true,
	  components: {
	  	tip1,
	  	tip2
	  },
	  data (){
	  	return {
	  		lists: [],
	  		gambleObj: {
	  			sendNum: 0,//种豆数量
	  			matchid: 0, 
	  			scheduleid: 0, 
	  			unitid: 0, 
	  			beantype:'', 
	  			beannum: 0, 
	  			topicid: 0, 
	  			teamid: 0
	  		},
	  		popMsg1: {
	  			showTip: false,
          		title: ''
	  		},
	  		popMsg2: {
	  			showTip: false,
	  			msg1: '',
	  			msg2: '',
          		title: '种豆结果',
          		type: 1
	  		}
	  	}
	  },
	  activate (done) {
	  	this.init();
	  	done();
	  },
	  methods: {
	  	init () {
	  		const MATCH_ID = 3, TOPIC_ID = 1, that = this;
	        let dayListUrl = 'http://www.huya.com/hd/matchguess/cache.php?m=MatchGuess&do=ajaxGetDayList&from=MSIAPP&matchid='+MATCH_ID+'&jsonp=callback&topicid=' + TOPIC_ID;
	        let scheduleListUrl = 'http://www.huya.com/hd/matchguess/cache.php?m=MatchGuess&do=ajaxScheduleSortedListByDay&from=MSIAPP&matchid='+MATCH_ID+'&topicid='+TOPIC_ID+'&jsonp=callback';

	        // beanService.getDayList(MATCH_ID, TOPIC_ID).then((resp) => {
	        // 	console.log('---getDayList 2222---')
	        // 	console.log(resp)
	        // });
	        $.ajax({
	        	url: dayListUrl,
	        	type: 'GET',
	        	cache:true,
	        	dataType: "jsonp",
				jsonp: 'jsonp',
	        	success: function(resp) {
	        		if(resp && resp.status && resp.status == 200 && resp.data) {
	        			let data = resp.data, today = Math.floor(new Date().getTime() / 1000), isToday = false, timestamp;

	        			//先尝试获取当前日期的数据，若没有则去获取最近的赛事时间戳
	        			for(var i=0,len=data.length;i<len;i++) {
	        				let item = data[i];

	        				if(that.isToday(item)) {
	        					isToday = true;
	        					timestamp = item;
	        					break;
	        				}
	        			}

	        			if(!isToday) {
	        				let gapValues = data.map(function(item) {	        				
		        				return {
		        					time: item,
		        					gap: Math.abs(item - today)
		        				};
		        			}), temp = gapValues[0];


		        			//获取与当前时间最近的赛事时间戳
		        			for(let i=1,len = gapValues.length;i<len;i++) {
		        				let item = gapValues[i];
		        				if(item.gap <= temp.gap) {
		        					temp = item;
		        				}
		        			}

		        			timestamp = temp.time;
	        			}

	        			if(timestamp) {
	        				scheduleListUrl = scheduleListUrl + '&timestamp=' + timestamp;
	        				$.ajax({
					        	url: scheduleListUrl,
					        	type: 'GET',
					        	cache:true,
					        	dataType: "jsonp",
								jsonp: 'jsonp',
					        	success: function(resp2) {
					        		if(resp2 && resp2.status && resp2.status == 200 && resp2.data) {
					        			let tempList = [];

					        			if(that.btype == '1') {
					        				tempList = resp2.data;
					        			} else {
					        				resp2.data = resp2.data;
					        				for(let i=0,len=resp2.data.length;i<len;i++) {
					        					let item = resp2.data[i];
					        					if(item.isExpired != 1 && item.state != 2) {
					        						tempList.push(item);
					        						break;
					        					}
					        				}

					        				if(tempList.length == 0) {
					        					tempList.push(resp2.data[0]);
					        				}
					        			}
					        		
					        			that.lists = tempList;
					        		}
					        	}
					        });
	        			}
	        		}
	        	}
	        });
	  	},
	  	isToday (time) {
	  		let date = new Date(), y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate();

	  		let tDate = new Date(time * 1000), ty = tDate.getFullYear(), tm = tDate.getMonth() + 1, td = tDate.getDate();

	  		return y == ty && m == tm && d == td;
	  	},
	  	close () {
			this.popMsg1.showTip = false;
			this.popMsg2.showTip = false;
		},
		chooseBean (num, event) {
			let target = $(event.target);
			$('.btns a').removeClass('active');
			$(target).addClass('active');
			this.gambleObj.sendNum = num;
		},
		resetStatus () {
			this.popMsg1 = {
	  			showTip: false,
          		title: ''
	  		};

	  		this.popMsg2 = {
	  			showTip: false,
	  			msg1: '',
	  			msg2: '',
          		title: '种豆结果',
          		type: 1
	  		};
		},
	  	gamble (item, unit) {
	  		this.resetStatus();
	  		//先判断是否下线、过期
	  		if(item.isExpired == 1 || item.state == 2) {
	  			let tempMsg = '';
	  			if(item.isExpired == 1 && item.state == 1) {
	  				tempMsg = '你来晚了，这个竞猜已经截止了~';
	  			} else if(item.state == 2) {
	  				tempMsg = '你来晚了，这个竞猜已经下线了~';
	  			}

	  			this.popMsg2.msg1 = tempMsg;
	  			this.popMsg2.showTip = true;
	  			return;
	  		}

	  		this.popMsg1.title = unit.unitName;//弹窗标题
	  		this.popMsg1.showTip = true;

	  		this.gambleObj.matchid = item.matchId;
	  		this.gambleObj.scheduleid = item.scheduleId;
	  		this.gambleObj.unitid = unit.unitId;
	  		this.gambleObj.beantype = unit.beanType;
	  		this.gambleObj.topicid = item.topicId;
	  		this.gambleObj.teamid = unit.teamId;
	  	},
	  	commit () {
	  		this.popMsg1.showTip = false;

	  		let that = this;
	  		let d = this.gambleObj;

	  		if(d.sendNum >= 0 && d.sendNum < 50) {
	  			that.popMsg2.msg1 = '竞猜数额最低不能少于50.';
	  			that.popMsg2.showTip = true;
		  		return;//为0时不发送请求。
		  	}

	  		let url = 'http://www.huya.com/hd/matchguess/index.php?m=MatchGuess&do=ajaxBuyTrans&from=MSIAPP&matchid='+d.matchid+'&scheduleid='+d.scheduleid+'&unitid='+d.unitid+'&beantype='+d.beantype+'&beannum='+d.sendNum+'&topicid='+d.topicid+'&teamid='+d.teamid+'&jsonp=callback';

	  		$.ajax({
	        	url: url,
	        	type: 'GET',
	        	dataType: "jsonp",
				jsonp: 'jsonp',
	        	success: function(resp) {
	        		if(resp && resp.status) {
	        			let data = resp.data, code = data.code;

	        			if(code == 0) {//表示成功
	        				that.popMsg2.msg1 = d.sendNum;
	        				that.popMsg2.msg2 = d.sendNum * data.odds / 100;
	        				that.popMsg2.type = 2;
	        				that.popMsg2.showTip = true;
	        				return;
						} 

	        			//非成功情况
	        			if(code == 4) {//豆子不足
	        				that.popMsg2.msg1 = '对不起，您的账号余额不足';
	        				that.popMsg2.msg2 = '请充值后重试。';
	        			} else if(code == 9) {
	        				that.popMsg2.msg1 = '你来晚了，这个竞猜已经截止了~';
	        			} else if(code == 1) {
	        				that.popMsg2.msg1 = '你来晚了，这个竞猜已经下线了~';
	        			} else if(code == 10) {
	        				that.popMsg2.msg1 = '豆子超过奖池';
	        			} else if(code == 7) {
	        				that.popMsg2.msg1 = '赛程关闭';
	        			} else {
	        				that.popMsg2.msg1 = resp.msg;
	        			}

	        			if(that.popMsg2.msg1) {
	  						that.popMsg2.showTip = true;
	        			}
	        		}
	        	}
	        });
	  	}
	  }
	}
</script>

<style lang="scss">
	$base-font-size: 23.4375px;

	@function pxToRem($px) {
		@return $px / $base-font-size /2 * 1rem;
	}
	@mixin bg($url) {
	  background:url($url) center no-repeat;
	  background-size: 100% 100%;
	}

	@mixin wh($width, $height, $hasLineHeight) {
	  width: pxToRem($width);
	  height: pxToRem($height);

	  @if $hasLineHeight == true {
	    line-height: pxToRem($height);
	  }
	}
	@mixin colorFont($color, $fontSize) {
	  color:$color;
	  font-size: pxToRem($fontSize);
	}
	.guess{
		@include wh(717px, 296px, false);
		@include bg('../assets/img/guess_bg.png');
		.vs-content{
			padding:pxToRem(25px) pxToRem(25px);
		}
	}
	.guess2{
		margin-bottom:pxToRem(30px)!important;
		@include wh(705px, 206px, false);
		@include bg('../assets/img/guess_bg2.png');
		.vs-content{
			padding:pxToRem(20px) pxToRem(20px);
		}
	}
	.guess, .guess2{
		
		margin:0 auto;

		.vs-content{
			position: relative;
		}
		button{
			margin-top:pxToRem(30px);
		}

		.avatar{
			text-align: center;
			img{
				@include wh(130px, 130px, false);
				border-radius: pxToRem(130px);
			}
			p{
				font-weight: bold;
				margin-top: pxToRem(12px);
				width:pxToRem(130px);
				@include colorFont(#666, 24px);
			}
		}
		.vs-left{
			.avatar{
				margin-right:pxToRem(20px);
			}
			button{
				background-color:#ca1e1e;
			}
		}
		.vs-right{
			.avatar{
				margin-left:pxToRem(20px);
			}
			button{
				background-color:#32a4d6;
			}
		}
		.bean {
			text-align: center;
			p{
				margin-top:pxToRem(15px);
				@include colorFont(#999, 22px);
			}
		}
		.vs{
			text-align: center;
			margin:pxToRem(4px) pxToRem(18px) 0;
			img{
				@include wh(54px, 33px, false);
			}
			p{
				margin-top:pxToRem(-8px);
				@include colorFont(#999, 22px);
			}
		}
		.more{
			margin-top:pxToRem(212px);
			text-align: center;
			display:block;
			@include colorFont(#666, 28px);
			i{
				display:inline-block;
				margin-bottom:pxToRem(-2px);
				@include wh(29px, 28px, false);
				@include bg('../assets/img/arrow_r.png');
			}
		}
	}
	.btn-group{
		margin-bottom:pxToRem(30px);
		text-align:center;
		a{
			border-radius: 6px;
			text-align: center;
			display: inline-block;
			@include colorFont(#fff, 24px);
			&.col-half{
				box-sizing:border-box;
				-moz-box-sizing:border-box;
				-webkit-box-sizing:border-box;
				@include wh(280px, 60px, true);
				background-color:#c09e68;
				&.active{
					border:pxToRem(3px) solid #ca1e1e;
				}
			}
			&.col-commit{
				width:100%;
				height:pxToRem(70px);
				line-height:pxToRem(70px);
				background-color:#ca1e1e;
				&.col-small{
					width:pxToRem(210px);
				}
				&.col-yellow{
					background-color:#c09e68;
					margin-left:pxToRem(5px);
				}
			}
		}
	}
	
</style>