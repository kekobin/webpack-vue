<template>
	<div class="pop-box" v-if="popMsg.showTip" transition="expand">
		<div class="pop-box-inner">
		  <header class="clearfix">
		    <h2 class="fl" v-text="popMsg.title"></h2>
		    <i class="close fr" v-on:click="close"></i>
		  </header>
		  <div class="content">
		    <div class="pop-msg" v-if="popMsg.type == 1">
		      <p v-text="popMsg.msg1"></p>
		      <span v-text="popMsg.msg2"></span>
		    </div>   
		    <div class="pop-msg" v-if="popMsg.type == 2">
		      <p>恭喜您成功种下<span v-text="popMsg.msg1"></span>银豆</p>
	          <span>本次种豆预估可得<span v-text="popMsg.msg2"></span>银豆奖励。</span>
		    </div>      
		    <div class="btns">
		      <div class="btn-group clearfix">
		        <a class="col-commit col-small col-yellow" v-on:click="close">确定</a>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
	  props: ["popMsg"],
      replace: true,
      methods: {
      	close () {
      		this.popMsg.showTip = false;
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