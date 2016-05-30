<template>
<div>
	<header class='header'></header>
	<back></back>
	 <div class="container">
	    <section class="section section-10">
	      <div class="rank-get">
	      	<h2 class="title"></h2>
	        <div class="rank-content rc-big">
	          <div class="inner">
	          	  <ul class="reward">
		          	<li v-for="item in rewards">
		          		<p v-text="item.msg"></p>
		          		<span v-text="item.prize"></span>
		          	</li>
		          </ul>
		          <p class="msg-tip" v-if="rewards.length == 0">暂无获奖信息</p>
	          </div>
	        </div>
	      </div>
	    </section>
	    <div class="adjust-pos2">
	    	<section class="section section-11">
		      <div class="rank-get">
		      	<h2 class="title"></h2>
		        <div class="rank-content rc-big">
		          <div class="form">
		          	<div class="form-group">
		          		<label>姓名</label>
		          		<input v-model="reward.name"></input>
		          	</div>
		          	<div class="form-group">
		          		<label>电话</label>
		          		<input v-model="reward.phone" v-on:input="valid"></input>
		          	</div>
		          	<div class="form-group">
		          		<label>地址</label>
		          		<input v-model="reward.address"></input>
		          	</div>
		          	<p class="msg">注：实物奖品将通过快递寄发，请确保地址准确无误。</p>
		          	<button class="normal" @click="commit">确定</button>
		          </div>
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
	import rewardService from "../services/rewardService.js";
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
	  		reward: {
	  			name: '',
	  			phone: '',
	  			address: ''
	  		},
	  		rewards: []
	  	}
	  },
	  route:{
	  	data (transition) {
	  		window.scroll(0,0);
	  		transition.next();
	  	}
	  },
	  ready () {
	  	this.getReward();
	  },
	  components: {
	  	vfooter,
	  	back,
	  	tip1
	  },
	  methods:{
	  	getReward () {
	  		const matchId = 8;

	  		rewardService.getUserAwards(matchId).then((resp) => {
	            if(resp && resp.status && resp.status == 200 && resp.data && resp.data.data) {
	              	let awards = resp.data.data.awards, item, type, prize, i = 1, temp = [];

	    			for(let key in awards){
						item = awards[key];
						type = item.type;
						prize = '';

						if(type == 2 || type == 3 ){
							prize = '卡号:' + item.code;
							if(type == 3){
								prize += '  密码:'+item.pass;
							}
						}

						temp.push({
							msg: (i++) + '.恭喜！获得了'+item.name + ':',
							prize: prize
						});
					}

	    			this.rewards = temp;
	            }
	        });
	  	},
	  	close () {
			this.popMsg.showTip = false;
		},
		valid () {
			const reg = /(^0+)|([^0123456789])/g;
			this.reward.phone = this.reward.phone.replace(reg, "");
		},
		commit () {
			const phoneReg = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/,
				  matchId = 8,
				  reward = this.reward;

			if(!reward.name || !reward.phone || !reward.address) {
				this.popMsg.msg1 = '信息不能为空';
	        	this.popMsg.showTip = true;
	        	return;
			} else if(reward.name.length > 10) {
				this.popMsg.msg1 = '姓名过长，请重新输入';
	        	this.popMsg.showTip = true;
	        	return;
			} else if(!phoneReg.test(reward.phone)) {
				this.popMsg.msg1 = '电话号码格式不正确，请重新输入';
	        	this.popMsg.showTip = true;
	        	return;
			}

			rewardService.signAwardUserInfo(reward.name, reward.phone, reward.address, matchId).then((resp) => {
				let status = resp.data.status;

        		if(resp && status) {
        			if(status == 200) {
        				this.popMsg.msg1 = '已成功提交信息，我们将在3天内发送实物奖品。';
        			} else {
        				this.popMsg.msg1 = resp.data.msg;
        			}
        			this.popMsg.showTip = true;
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
	.section-10 {
		.rank-content{
			overflow: hidden;
		}
		.inner{
			padding-top:pxToRem(20px);
		}
	}
	.reward{
		height:pxToRem(450px);
		overflow-y: scroll;
		padding-left:pxToRem(45px);
		@include colorFont(#666, 26px);
		span{
			color:#333;
		}
		li{
			margin-bottom: pxToRem(40px);
		}
	}
	.form{
		padding-top:pxToRem(50px);
		padding-left:pxToRem(45px);
		button{
			position: relative!important;
			bottom:0!important;
			margin-top:pxToRem(45px);
		}
	}
	.form-group{
		@include colorFont(#666, 24px);
		margin-bottom: pxToRem(30px);
		span{
			display: inline-block;
			width:pxToRem(100px);
			padding-right:pxToRem(5px);
		}
		input{
			border:none;
			background:#ccc;
			@include wh(520px, 64px, true);
			text-indent: 10px;
			border-radius: 6px;
		}
	}
	p.msg{
		@include colorFont(#ca1e1e, 26px);
	}
	.msg-tip{
		position: absolute;
	    left: 50%;
	    top: 50%;
	    margin-top:pxToRem(-50px);
	    margin-left:pxToRem(-130px);
	}
</style>