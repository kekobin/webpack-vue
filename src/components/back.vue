<template>
	<a class="back" v-on:click="back"></a>
</template>

<script>
	export default {
	  methods: {
	  	back () {
	  		window.history.back();
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
	.back{
		position:absolute;
		left: pxToRem(20px);
		top:pxToRem(20px);
		@include wh(84px, 83px, false);
		@include bg('../assets/img/back.png');
	}
</style>