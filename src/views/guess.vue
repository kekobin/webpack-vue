<template>
  <div>
    <header class='header'></header>
  	<back></back>
  	<div class="container">
      <section class="section section-1">
        <h2 class="title"></h2>
        <bean :btype="btype"></bean>
      </section>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vfooter from "../components/vfooter.vue";
import back from "../components/back.vue";
import bean from "../components/bean.vue";

export default {
  data (){
  	return {
  		btype: 1
  	}
  },
  components: {
    vfooter,
  	back,
  	bean
  },
  route:{
  	data (transition) {
      window.scroll(0, 0);
      transition.next();
  	}
  }
}
</script>
