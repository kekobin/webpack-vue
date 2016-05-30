<template>
  <div>
    <header class='header'></header>
    <div class="container">
      <section class="section section-1">
        <h2 class="title"></h2>
        <bean :btype="btype"></bean>
        <div class="rewards">
          <div class="list-item-content">
            <div class="list-inner">
              <div class="integration">
                <div class="inner clearfix">
                    <div class="rank-group fl">
                      <p>我的积分：<span v-text="myScore.lScore"></span></p>
                      <p>我的排名：<span v-text="myScore.iMyRank"></span></p>
                    </div>
                    <a class="fr" v-link="{path: '/getScore'}">领取积分</a>
              </div>
              <ul class="list-detail clearfix">
                <li class="fl clearfix">
                  <div class="item-msg fl">
                    <h4>1</h4>
                    <p><span>雷神911GT</span></p>
                    <p><span>+大YY熊</span></p>
                  </div>
                  <div class="item-img fr rw-1">
                    <img src="../assets/img/reward_1.png">
                  </div>
                </li>
                <li class="fl clearfix">
                  <div class="item-msg fl">
                    <h4>2-4</h4>
                    <p><span>iphone6s</span></p>
                    <p><span>+大YY熊</span></p>
                  </div>
                  <div class="item-img fr rw-2">
                    <img src="../assets/img/reward_2.png">
                  </div>
                </li> 
                <li class="fl clearfix">
                  <div class="item-msg fl">
                    <h4>5-10</h4>
                    <p><span>mini4</span></p>
                    <p><span>+中YY熊</span></p>
                  </div>
                  <div class="item-img fr rw-3">
                    <img src="../assets/img/reward_3.png">
                  </div>
                </li>
                <li class="fl clearfix">
                  <div class="item-msg fl">
                    <h4>11-50</h4>
                    <p><span>三星vr</span></p>
                    <p><span>+小YY熊</span></p>
                  </div>
                  <div class="item-img fr rw-4">
                    <img src="../assets/img/reward_4.png">
                  </div>
                </li>
                <li class="fl clearfix">
                  <div class="item-msg fl">
                    <h4>51-100</h4>
                    <p><span>赛睿霜冻</span></p>
                    <p><span>之蓝版键盘</span></p>
                  </div>
                  <div class="item-img fr rw-5"><img src="../assets/img/reward_5.png"></div>
                </li>
                <li class="fl clearfix">
                  <div class="item-msg fl">
                    <h4>101-500</h4>
                    <p><span>雷蛇北海</span></p>
                    <p><span>巨妖耳机</span></p>
                  </div>
                  <div class="item-img fr rw-6"><img src="../assets/img/reward_6.png"></div>
                </li>
                <li class="fl clearfix">
                  <div class="item-msg fl">
                    <h4>501-1000</h4>
                    <p><span class="word">小米移动电源</span></p>
                  </div>
                  <div class="item-img fr rw-7"><img src="../assets/img/reward_7.png"></div>
                </li>
                <li class="fl clearfix">
                  <div class="item-msg fl">
                    <h4>1001-5000</h4>
                    <p><span class="word">50Q币</span></p>
                  </div>
                  <div class="item-img fr rw-8"><img src="../assets/img/reward_8.png"></div>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>
      <v-table :tdata.sync="tdata"></v-table>
      <section class="section section-3">
        <div class="rank-get">
          <h2 class="title"></h2>
          <div class="rank-content">
            <p class="r-p">看比赛参与互动，赢取积分兑换丰厚奖品！</p>
            <ul class="r-ul">
              <li>
                <i>1</i>
                <h3>每日签到</h3>
              </li>
              <li>
                <i>2</i>
                <h3>
                  观看MSI赛事 
                  <span>（10/60/120/180分钟)</span></h3>
              </li>
              <li>
                <i>3</i>
                <h3>
                  观看SOLO王 
                  <span>（10/30/60/90分钟)</span></h3>
              </li>
              <li>
                <i>4</i>
                <h3>参与竞猜</h3>
              </li>
              <li>
                <i>5</i>
                <h3>送道具<em class="scene"></em></h3>
              </li>
            </ul>
            <button class="normal" v-link="{path: '/getScore'}">领取积分</button>
          </div>
        </div>
      </section>
      <section class="section section-4">
        <div class="rank-get">
          <h2 class="title"></h2>
          <div class="rank-content">
            <ul class="r-ul">
              <li>
                <i>1</i>
                <h3>
                赛事结束后，根据积分排名奖励相应的奖品。积分越高，奖品越丰富哦！</h3>
              </li>
              <li>
                <i>2</i>
                <h3>每个账号只能兑换一次奖品。</h3>
              </li>
              <li>
                <i>3</i>
                <h3>实物奖品将统一通过邮寄送出。</h3>
              </li>
              <li>
                <i>4</i>
                <h3>兑换时间：2016年5月16日</h3>
              </li>
            </ul>
            <button class="normal" v-on:click="pointReward">去兑奖</button>
          </div>
        </div>
      </section>
      <section class="section section-5">
        <div class="rank-get">
          <h2 class="title"></h2>
          <div class="rank-content">
            <ul class="r-ul">
              <li>
                <i>1</i>
                <h3>
                比赛中，出现第一滴血、双杀、三杀等事件中随机送出奖品。</h3>
              </li>
              <li>
                <i>2</i>
                <h3>奖品包括虚拟或者实物奖品</h3>
              </li>
              <li>
                <i>3</i>
                <h3>还有机会赢得与Miss共进晚餐的机会！</h3>
              </li>
            </ul>
            <button class="normal" v-link="{path:'/rewardResult'}">中奖结果</button>
            <div class="list-item-content2">
              <div class="list-inner">
                <ul class="list-detail clearfix">
                  <li class="fl">
                    <div class="item-img rw-9"><img src="../assets/img/reward_9.png?t=1"></div>
                    <h4>与Miss共进晚餐</h4>
                  </li>
                  <li class="fl">
                    <div class="item-img rw-10"><img src="../assets/img/reward_10.png"></div>
                    <h4>雷神独显游戏本</h4>
                  </li>
                  <li class="fl">
                    <div class="item-img rw-11"><img src="../assets/img/reward_11.png"></div>
                    <h4>iPhone 6s plus</h4>
                  </li>
                  <li class="fl">
                    <div class="item-img rw-12"><img src="../assets/img/reward_12.png"></div>
                    <h4>无线激光游戏鼠标</h4>
                  </li>
                  <li class="fl">
                    <div class="item-img rw-13"><img src="../assets/img/reward_13.png"></div>
                    <h4>Apex游戏机械键盘</h4>
                  </li>
                  <li class="fl">
                    <div class="item-img rw-14"><img src="../assets/img/reward_14.png"></div>
                    <h4>1000积分</h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section mis-solo section-6">
        <h2 class="title"></h2>
        <img src="../assets/img/i_intro.png">
        <p>
          季中邀请赛（Mid-Season Invitational，简称MSI），是英雄联盟官方举办的国际赛事，也是英雄联盟职业舞台上最具重量级的赛事之一。分别由LCS(欧洲赛区)、LCK(韩国赛区)、LPL(中国大陆赛区)、LMS(台港澳赛区)、LCS(北美赛区)的春季季后赛冠军和IWCI国际外卡资格赛冠军，这6支冠军队伍来参加。MSI的出现是LOL比赛史上的重要里程碑，按照春季赛，夏季赛，全球总决赛的顺序，MSI作为年中考核，年末再加上全明星提高热度，LOL的比赛越来越趋近于传统体育的模式，也越来越成熟。
        </p>
      </section>
      <section class="section mis-solo section-7">
        <h2 class="title"></h2>
        <img src="../assets/img/i_intro2.png">
        <p>
          虎牙SOLO王是由虎牙直播官方主办的英雄联盟赛事。首届虎牙SOLO王将与2016MSI季中赛同期举行。届时来自虎牙官方的明星主播将齐聚一堂，采用英雄联盟传统solo赛规则同台竞技，最终角逐出冠军的归属，成为SOLO之王！
        </p>
      </section>
      <section class="section section-9">
        <h2 class="title"></h2>
        <ul class="medias clearfix">
          <li class="fl"><img src="../assets/img/media1.jpg"></li>
          <li class="fl"><img src="../assets/img/media2.jpg"></li>
          <li class="odd fl"><img src="../assets/img/media3.jpg"></li>
          <li class="fl"><img src="../assets/img/media4.jpg"></li>
          <li class="fl"><img src="../assets/img/media5.jpg"></li>
          <li class="odd fl"><img src="../assets/img/media6.jpg"></li>
          <li class="fl"><img src="../assets/img/media7.png"></li>
          <li class="fl"><img src="../assets/img/media8.jpg"></li>
          <li class="odd fl"><img src="../assets/img/media9.jpg"></li>
          <li class="fl"><img src="../assets/img/media10.jpg"></li>
          <li class="fl"><img src="../assets/img/media11.jpg"></li>
          <li class="odd fl"><img src="../assets/img/media12.jpg"></li>
          <li class="fl"><img src="../assets/img/media13.jpg"></li>
          <li class="fl"><img src="../assets/img/media14.jpg"></li>
          <li class="odd fl"><img src="../assets/img/media15.jpg"></li>
          <li class="fl"><img src="../assets/img/media16.jpg"></li>
          <li class="fl"><img src="../assets/img/media17.jpg"></li>
        </ul>
      </section>
    </div>
    <vfooter></vfooter>
    <tip1 :pop-msg="popMsg"></tip1>
  </div>
</template>

<script>
  import vfooter from "../components/vfooter.vue";
	import vTable from "../components/vTable.vue";
  import bean from "../components/bean.vue";
  import tip1 from "../components/tip1.vue";
	import scoreService from "../services/scoreService.js";

	export default {
	  data (){
	  	return {
	  		tdata: [],
	  		btype: 0,
	  		myScore: {
	  			lScore:0,
	  			iMyRank:0
	  		},
	  		popMsg: {
	  			showTip: false,
	  			msg1: '',
          title: '提示',
          type: 1
	  		}
	  	}
	  },
	  components: {
      vfooter,
  		vTable,
  		bean,
      tip1
	  },
	  route:{
	  	data (transition) {
	  		this.getMyScore();//我的积分信息接口
	  		this.getScoreRank();//获取用户积分排行榜
	  	}
	  },
	  methods:{
	    getMyScore (){
        scoreService.getMyScore().then((resp) => {
            if(resp && resp.status && resp.status == 200 && resp.data) {
              this.myScore = resp.data.data;
            }
        });
	    },
	    getScoreRank (){
        scoreService.getScoreRank().then((resp) => {
            if(resp && resp.status && resp.status == 200 && resp.data) {
              this.tdata = resp.data.data;
            }
        });
	    },
  		close () {
  			this.popMsg.showTip = false;
  		},
  		pointReward () {
        this.popMsg.msg1 = '活动结束后统一兑奖，请在5月16日后前来兑奖哦~';
        this.popMsg.showTip = true;
  		},
      backtotop () {
        window.scroll(0,0);
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
	a{
		text-decoration: none;
	}
  .section-9{
    position: relative;
    z-index: 999;
    margin-top:pxToRem(50px);
    margin-bottom:pxToRem(-500px);
    .title{
      @include bg('../assets/img/title9.png');
    }
  }
  .medias{
    padding:0 pxToRem(30px);
    li{
      @include wh(214px, 120px, false);
      text-align: center;
      margin-right:pxToRem(18px);
      margin-bottom:pxToRem(20px);
      background:#fff;
      border:pxToRem(1px) solid #999;
      img{
        @include wh(145px, 88px, false);
        margin-top:pxToRem(15px);
      }
      &.odd{
        margin-right:0;
      }
    }
  }
  .rw-3 img{
    margin-top:pxToRem(10px)!important;
    margin-left:pxToRem(10px)!important;
  }
  .rw-4 img{
    margin-top:pxToRem(10px)!important;
    margin-left:pxToRem(-8px)!important;
  }
  .rw-5 img{
    margin-top:pxToRem(10px)!important;
    margin-left:pxToRem(4px)!important;
  }
  .rw-6 img{
    margin-top:pxToRem(10px)!important;
    margin-left:pxToRem(-5px)!important;
  }
  .rw-7 img{
    margin-top:pxToRem(5px)!important;
  }
  .rw-9 img{
    width:pxToRem(147px)!important;
    height:pxToRem(163px)!important;
    margin-top:pxToRem(-2px)!important;
  }
  .rw-11 img{
    margin-left:pxToRem(10px)!important;
  }
  .rw-12 img{
    margin-top:pxToRem(25px)!important;
  }
  .rw-13 img{
    margin-top:pxToRem(23px)!important;
    margin-left:pxToRem(-10px)!important;
  }
  .rw-14 img{
    margin-top:pxToRem(25px)!important;
    margin-left:pxToRem(10px)!important;
  }
  
</style>
