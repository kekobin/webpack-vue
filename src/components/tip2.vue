<template>
	<div class="pop-box" v-if="popMsg.showTip" transition="expand">
    <div class="pop-box-inner">
      <header class="clearfix">
        <h2 class="fl">支持<span v-text="popMsg.title"></span></h2>
        <i class="close fr" v-on:click="close"></i>
      </header>
      <div class="content">
        <input class="box-input loc-input" placeholder="请输入豆子数量" v-model="model" v-on:input="onInput($event)"></input>
        <div class="btns">
          <div class="btn-group clearfix">
            <a class="col-half fl" v-on:click="chooseBean(100, $event)">100</a>
            <a class="col-half fr" v-on:click="chooseBean(500, $event)">500</a>
          </div>
          <div class="btn-group clearfix">
            <a class="col-half fl" v-on:click="chooseBean(2000, $event)">2000</a>
            <a class="col-half fr" v-on:click="chooseBean(10000, $event)">10000</a>
          </div>
          <div class="btn-group clearfix">
            <a class="col-commit fl" v-on:click="commitBean()">种豆</a>
          </div>
          <p id="msg" style="color:yellow;"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
	  props: ["popMsg", "model", "choose", "commit"],
      replace: true,
      methods: {
      	close () {
      		this.popMsg.showTip = false;
      	},
      	onInput (event) {
      		let target = $(event.target), temp;
      		temp = this.model.replace(/(^0+)|([^0123456789])/g, "").slice(0,7);
      		this.model = temp;
      		$(target).html(temp);
      	},
      	chooseBean (num, event) {
      		this.choose(num, event);
      	},
      	commitBean (){
      		this.commit();
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
	.pop-box{
		position:fixed;
		top:50%;
		left:50%;
		z-index: 99;
		@include wh(684px, 489px, false);
		@include bg('../assets/img/pop_bg.png');
		margin-top:pxToRem(-244.5px);
		margin-left:pxToRem(-342px);
		.pop-box-inner{
			padding: pxToRem(35px) pxToRem(33px);
		}
		.close{
			display:inline-block;
			@include wh(39px, 38px, false);
			@include bg('../assets/img/pop_close.png');
		}
		header{
			h2{
				@include colorFont(#fff, 26px);
			}
		}
		.box-input{
			width:100%;
			height:pxToRem(65px);
			line-height:pxToRem(65px);
			border-radius:6px;
			text-indent: 10px;
			border:none;
			@include colorFont(#999, 24px);
			background-color:#ccc;
			&.loc-input{
				margin:pxToRem(30px) 0;
			}
		}
	}

	.pop-msg{
		text-align:center;
		padding:pxToRem(100px) 0;
		p{
			@include colorFont(#fff, 30px);
		}
		span{
			@include colorFont(#999, 24px);
		}
	}
</style>