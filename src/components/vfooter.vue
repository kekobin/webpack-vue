<template>
  	<footer>
	  <a class="backtotop bt2" v-on:click="backtotop"></a>
	</footer>
</template>

<script>
export default {
	methods: {
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
	.backtotop{
	  display:block;
	  position: absolute;
	  right:pxToRem(25px);
	  bottom:pxToRem(100px);
	  z-index:10;
	  @include wh(80px,101px, false);
	  @include bg('../assets/img/i_btn_backtop.png');
	  &.bt2{
	    bottom:pxToRem(25px);
	  }
	}
</style>
