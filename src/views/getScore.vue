<template>
<div>
	<header class='header'></header>
	<back></back>
	 <div class="container">
	    <section class="section section-8 adjust-top">
	      <div class="rank-get">
	        <h2 class="title"></h2>
	        <div class="rank-content rc-small">
	          <ul class="r-ul">
	            <li>
	              <i>1</i>
	              <h3>每日签到</h3>
	              <div class="more">
	                <label><span>100</span>积分(累积翻倍)</label>
	                <button class="clickstat" eid="click/hd/msi/lingqujifen" eid_desc="点击/活动/msi/积分领取" :class="{active: scoreClass['1'].active}" v-on:click="catchScore(1, $event)" v-text="scoreClass['1'].txt"></button>
	              </div>
	            </li>
	          </ul>
	        </div>
	      </div>
	    </section>
	    <section class="section section-8">
	      <div class="rank-get">
	        <div class="rank-content rc-big">
	          <ul class="r-ul">
	            <li>
	              <i>2</i>
	              <h3>看MSI赛事</h3>
	            </li>
	          </ul>
	          <div class="score clearfix">
	            <div class="item fl">
	              <p>10分钟</p>
	              <h3>100<span>积分</span></h3>
	              <div class="btn">
	                <button class="clickstat" eid="click/hd/msi/msi10" eid_desc="点击/活动/msi/观看msi10分钟" :class="{active: scoreClass['2'].active}" v-on:click="catchScore(2, $event)" v-text="scoreClass['2'].txt"></button>
	              </div>
	            </div>
	            <div class="item fl">
	              <p>60分钟</p>
	              <h3>200<span>积分</span></h3>
	              <div class="btn">
	                <button class="clickstat" eid="click/hd/msi/msi60" eid_desc="点击/活动/msi/观看msi60分钟" :class="{active: scoreClass['3'].active}" v-on:click="catchScore(3, $event)" v-text="scoreClass['3'].txt"></button>
	              </div>
	            </div>
	          </div>
	          <div class="score score-2 clearfix">
	            <div class="item fl">
	              <p>120分钟</p>
	              <h3>300<span>积分</span></h3>
	              <div class="btn">
	                <button class="clickstat" eid="click/hd/msi/msi120" eid_desc="点击/活动/msi/观看msi120分钟" :class="{active: scoreClass['4'].active}" v-on:click="catchScore(4, $event)" v-text="scoreClass['4'].txt"></button>
	              </div>
	            </div>
	            <div class="item fl">
	              <p>180分钟</p>
	              <h3>400<span>积分</span></h3>
	              <div class="btn">
	                <button class="clickstat" eid="click/hd/msi/msi180" eid_desc="点击/活动/msi/观看msi180分钟" :class="{active: scoreClass['5'].active}" v-on:click="catchScore(5, $event)" v-text="scoreClass['5'].txt"></button>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
	    <section class="section section-8">
	      <div class="rank-get">
	        <div class="rank-content rc-big">
	          <ul class="r-ul">
	            <li>
	              <i>3</i>
	              <h3>观看SOLO王</h3>
	            </li>
	          </ul>
	          <div class="score clearfix">
	            <div class="item fl">
	              <p>10分钟</p>
	              <h3>20<span>积分</span></h3>
	              <div class="btn">
	                <button class="clickstat" eid="click/hd/msi/solo10" eid_desc="点击/活动/msi/观看solo10分" :class="{active: scoreClass['6'].active}" v-on:click="catchScore(6, $event)" v-text="scoreClass['6'].txt"></button>
	              </div>
	            </div>
	            <div class="item fl">
	              <p>30分钟</p>
	              <h3>400<span>积分</span></h3>
	              <div class="btn">
	                <button class="clickstat" eid="click/hd/msi/solo30" eid_desc="点击/活动/msi/观看solo30分" :class="{active: scoreClass['7'].active}" v-on:click="catchScore(7, $event)" v-text="scoreClass['7'].txt"></button>
	              </div>
	            </div>
	          </div>
	          <div class="score score-2 clearfix">
	            <div class="item fl">
	              <p>60分钟</p>
	              <h3>600<span>积分</span></h3>
	              <div class="btn">
	                <button class="clickstat" eid="click/hd/msi/solo60" eid_desc="点击/活动/msi/观看solo60分" :class="{active: scoreClass['8'].active}" v-on:click="catchScore(8, $event)" v-text="scoreClass['8'].txt"></button>
	              </div>
	            </div>
	            <div class="item fl">
	              <p>120分钟</p>
	              <h3>800<span>积分</span></h3>
	              <div class="btn">
	                <button class="clickstat" eid="click/hd/msi/solo120" eid_desc="点击/活动/msi/观看solo120分" :class="{active: scoreClass['9'].active}" v-on:click="catchScore(9, $event)" v-text="scoreClass['9'].txt"></button>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
	    <div class="adjust-pos">
	      <section class="section section-8">
	        <div class="rank-get">
	          <div class="rank-content rc-small">
	            <ul class="r-ul">
	              <li>
	                <i>4</i>
	                <h3>参与竞猜</h3>
	                <div class="more">
	                  <label><span>200</span>积分</label>
	                  <button class="active">自动获取</button>
	                </div>
	              </li>
	            </ul>
	          </div>
	        </div>
	      </section>
	      <section class="section section-8">
	        <div class="rank-get">
	          <div class="rank-content rc-small">
	            <ul class="r-ul">
	              <li>
	                <i>5</i>
	                <h3>送道具<em class="scene"></em></h3>
	                <div class="more">
	                  <label><span>1</span>积分</label>
	                  <button class="active">自动获取</button>
	                </div>
	              </li>
	            </ul>
	          </div>
	        </div>
	      </section>
	    </div>
	</div>
	<vfooter></vfooter>
	<tip1 :pop-msg="popMsg"></tip1>
</div>
</template>

<script>
	import scoreService from "../services/scoreService.js";
	import vfooter from "../components/vfooter.vue";
	import back from "../components/back.vue";
	import tip1 from "../components/tip1.vue";

	export default {
	  data (){
	  	return {
	  		popMsg: {
	  			showTip: false,
	  			msg1: '',
          		title: '提示',
          		type: 1
	  		},
	  		scoreClass: {
	  			1: {
	  				active: false,
	  				txt: '领取积分'
	  			},
				2: {
	  				active: false,
	  				txt: '领取积分'
	  			},
	  			3: {
	  				active: false,
	  				txt: '领取积分'
	  			},
	  			4: {
	  				active: false,
	  				txt: '领取积分'
	  			},
	  			5: {
	  				active: false,
	  				txt: '领取积分'
	  			},
	  			6: {
	  				active: false,
	  				txt: '领取积分'
	  			},
	  			7: {
	  				active: false,
	  				txt: '领取积分'
	  			},
	  			8: {
	  				active: false,
	  				txt: '领取积分'
	  			},
	  			9: {
	  				active: false,
	  				txt: '领取积分'
	  			}
	  		}
	  	}
	  },
	  route:{
	  	data (transition) {
	  		window.scroll(0,0);
	  		transition.next();
	  	}
	  },
	  ready () {
	  	scoreService.getMyScore().then((resp) => {
            if(resp && resp.status && resp.status == 200 && resp.data) {
              this.renderScoreInfo(resp.data.data.tState);
            }
        });
	  },
	  components: {
	  	vfooter,
	  	back,
	  	tip1
	  },
	  methods:{
	  	close () {
			this.popMsg.showTip = false;
		},
	  	catchScore (type, event) {
	  		const target = $(event.target);

	  		if(target.hasClass('active')) return;

	  		scoreService.addScore(type).then((resp) => {
	            if(resp && resp.status && resp.status == 200 && resp.data) {
              	    let msg = '';

        			switch(resp.data) {
        				case 0: break;
        				case 1: msg = '你的账户出现积分异常，领取失败';break;
        				case 2: msg = '当前未在活动时间内，决赛时间为5月13日13点-5月24点。';break;
        				case 3: msg = '你已领取该项积分。';break;
        				case 4: msg = '你的账户出现异常，领取失败';break;
        				case 10: msg = '今天已经领取过积分';break;
        				case 11: msg = '您当前观看的时间不足，暂时无法领取积分';break;
        			};

        			if(msg) {
        				this.popMsg.showTip = true;
        				this.popMsg.msg1 = msg;
        			} else {
        				let targetScore = this.scoreClass[type];
        				targetScore.active = true;
        				targetScore.txt = '已领取';
        			}
	            }
	        });
	  	},
	  	renderScoreInfo (data) {
	  		let targetScore = this.scoreClass, i = 1;
	  		for(let key in data) {
	  			let item = data[key];
	  			let target = targetScore[i++];

	  			target.active = item;
	  			target.txt = !item ? '已领取' : '领取积分';

	  			if(i == 10) break;
	  		}
	  	},
	  	getTime () {
	  		const date = new Date(),
	  			year = date.getFullYear(),
	  			month = date.getMonth() + 1,
	  			day = date.getDate();

	  		return year + month + day;
	  	}
	  }
	}
</script>