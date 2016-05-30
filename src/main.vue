<template>
	<router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
</template>
<style>
	.view {
	  transition: all .3s ease;
	}
	.test-enter, .test-leave {
	  opacity: 0;
	  transform: translate3d(10px, 0, 0);
	}
</style>